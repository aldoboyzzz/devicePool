package com.amazon.devpool.service.impl;

import com.amazon.devpool.config.AdbCommands;
import com.amazon.devpool.config.Constants;
import com.amazon.devpool.domain.enumeration.BuildVariant;
import com.amazon.devpool.domain.enumeration.DeviceType;
import com.amazon.devpool.domain.enumeration.Pfm;
import com.amazon.devpool.service.DeviceService;
import com.amazon.devpool.domain.Device;
import com.amazon.devpool.repository.DeviceRepository;
import com.amazon.devpool.service.dto.DeviceDTO;
import com.amazon.devpool.service.mapper.DeviceMapper;
import com.amazon.devpool.service.util.DeviceUtil;
import com.amazon.devpool.service.util.ProcessUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.*;
import java.util.ArrayList;
import java.util.List;


/**
 * Service Implementation for managing Device.
 */
@Service
@Transactional
public class DeviceServiceImpl implements DeviceService{

    private final Logger log = LoggerFactory.getLogger(DeviceServiceImpl.class);

    private final DeviceRepository deviceRepository;

    private final DeviceMapper deviceMapper;

    public DeviceServiceImpl(DeviceRepository deviceRepository, DeviceMapper deviceMapper) {
        this.deviceRepository = deviceRepository;
        this.deviceMapper = deviceMapper;
    }

    /**
     * Save a device.
     *
     * @param deviceDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public DeviceDTO save(DeviceDTO deviceDTO) {
        log.debug("Request to save Device : {}", deviceDTO);
        Device device = deviceMapper.toEntity(deviceDTO);
        device = deviceRepository.save(device);
        return deviceMapper.toDto(device);
    }

    /**
     *  Get all the devices.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<DeviceDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Devices");
        return deviceRepository.findAll(pageable)
            .map(deviceMapper::toDto);
    }

    /**
     *  Get one device by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public DeviceDTO findOne(Long id) {
        log.debug("Request to get Device : {}", id);
        Device device = deviceRepository.findOne(id);
        return deviceMapper.toDto(device);
    }

    /**
     *  Delete the  device by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Device : {}", id);
        deviceRepository.delete(id);
    }

    @Override
    public Page<DeviceDTO> getAllConnectedDevices(Pageable pageable) {
        List<DeviceDTO> dtos = new ArrayList<>();
        InputStream is = ProcessUtil.getCommandOutput(AdbCommands.ADB_DEVICES);
        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String line = null;
        int noOfDevices = 1;
        try {
            while((line=br.readLine())!=null)
            {
                if(line.contains("device") && !line.contains("List of devices attached")) {
                    String dsn = line.split("device")[0].trim();
                    Device device = new Device();
                    device.setId((long)noOfDevices);
                    device.setDsn(dsn);
                    device.setAssignedTo(null);
                    device.setIsFree(true);
                    String buildType = DeviceUtil.getDeviceProperty(dsn, Constants.PROPERTY_BUILD_TYPE);
                    BuildVariant buildVariant = null;
                    switch(buildType)
                    {
                        case "user":
                            buildVariant = BuildVariant.USER;
                            break;

                        case "userdebug":
                            buildVariant = BuildVariant.USERDEBUG;
                            break;

                        default:
                            log.error("Invalid Build Type [" + buildType +"]");
                    }
                    device.setBuildVariant(buildVariant);
                    String devType = DeviceUtil.getDeviceProperty(dsn, Constants.PROPERTY_PRODUCT_TYPE);
                    DeviceType deviceType = null;
                    switch(devType)
                    {
                        case "sloane":
                            deviceType = DeviceType.SLOANE;
                            break;
                        case "bueller":
                            deviceType = DeviceType.BUELLER;
                            break;
                        case "tank":
                            deviceType = DeviceType.TANK;
                            break;
                        case "montoya":
                            deviceType = DeviceType.MONTOYA;
                            break;
                        case "margo":
                            deviceType = DeviceType.MARGO;
                            break;
                        case "needle":
                            deviceType = DeviceType.NEEDLE;
                            break;
                        case "stark":
                            deviceType = DeviceType.STARK;
                            break;
                        default:
                            log.error("Invalid Device Type [" + devType +"]");
                    }
                    device.setDeviceType(deviceType);
                    String ipAddress = DeviceUtil.getDeviceProperty(dsn, Constants.PROPERTY_IP_ADDRESS);
                    device.setIp(ipAddress);
                    String pfmString = DeviceUtil.getDeviceProperty(dsn, Constants.PROPERTY_PERSIST_SYS_COUNTRY);
                    pfmString = (pfmString!=null)?pfmString.toUpperCase():"US";
                    Pfm pfm = null;
                    switch(pfmString)
                    {
                        case "AT":
                            pfm = Pfm.AT;
                            break;
                        case "DE":
                            pfm = Pfm.DE;
                            break;
                        case "GB":
                            pfm = Pfm.GB;
                            break;
                        case "UK":
                            pfm = Pfm.GB;
                            break;
                        case "IN":
                            pfm = Pfm.IN;
                            break;
                        case "JP":
                            pfm = Pfm.JP;
                            break;
                        case "US":
                            pfm = Pfm.US;
                            break;
                        default:
                            log.error("Invalid PFM [" + devType +"]");
                    }
                    device.setPfm(pfm);
                    device.setViewUrl("http://" + device.getIp() + ":" + Constants.DEFAULT_PORT_NO_FOR_DEVICE_WEB_SERVER + "/");
                    log.info(System.getProperty("user.dir"));
                    //boolean companionAppInstallStatus = installApk(dsn, buildVariant==BuildVariant.USERDEBUG?Constants.COMPANION_APP_DEBUG_APK_PATH:Constants.COMPANION_APP_RELEASE_APK_PATH);
                    //if(!companionAppInstallStatus)
                        //log.error("Companion App Installation Failed. Try Manual installation of Companion App");
                    dtos.add(deviceMapper.toDto(device));
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        Page<DeviceDTO> page = new PageImpl<DeviceDTO>(dtos,pageable,dtos.size());
        return page;
    }

    @Override
    public boolean installApk(String dsn, String apkFileName) {
        if(DeviceUtil.installApk(dsn, apkFileName))
            return true;
        else
            return false;
    }


}
