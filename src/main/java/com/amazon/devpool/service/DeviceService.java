package com.amazon.devpool.service;

import com.amazon.devpool.domain.Device;
import com.amazon.devpool.service.dto.DeviceDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.File;
import java.util.List;

/**
 * Service Interface for managing Device.
 */
public interface DeviceService {

    /**
     * Save a device.
     *
     * @param deviceDTO the entity to save
     * @return the persisted entity
     */
    DeviceDTO save(DeviceDTO deviceDTO);

    /**
     *  Get all the devices.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<DeviceDTO> findAll(Pageable pageable);

    /**
     *  Get the "id" device.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    DeviceDTO findOne(Long id);

    /**
     *  Delete the "id" device.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);

    /**
     *  Find all the connected devices through adb devices command and get required properties
     *  to create device entities
     */
    Page<DeviceDTO> getAllConnectedDevices(Pageable pageable);

    /**
     *  Installs a given apk file to the given device
     */
    boolean installApk(String dsn, String apkFileName);

}
