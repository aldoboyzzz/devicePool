package com.amazon.devpool.web.rest;

import com.amazon.devpool.config.Constants;
import com.amazon.devpool.domain.Device;
import com.amazon.devpool.domain.enumeration.BuildVariant;
import com.amazon.devpool.domain.enumeration.DeviceType;
import com.amazon.devpool.domain.enumeration.Pfm;
import com.amazon.devpool.service.mapper.DeviceMapper;
import com.codahale.metrics.annotation.Timed;
import com.amazon.devpool.service.DeviceService;
import com.amazon.devpool.web.rest.errors.BadRequestAlertException;
import com.amazon.devpool.web.rest.util.HeaderUtil;
import com.amazon.devpool.web.rest.util.PaginationUtil;
import com.amazon.devpool.service.dto.DeviceDTO;
import io.swagger.annotations.ApiParam;
import io.github.jhipster.web.util.ResponseUtil;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.*;

/**
 * REST controller for managing Device.
 */
@RestController
@RequestMapping("/api")
public class DeviceResource {

    private final Logger log = LoggerFactory.getLogger(DeviceResource.class);

    private static final String ENTITY_NAME = "device";
    private static final Set<String> EXACT_PROPERTIES = Constants.REQUIRED_EXACT_DEVICE_PROPERTIES;
    private static final String MATCHING_PROPERTY = Constants.REQUIRED_MATCHING_DEVICE_PROPERTIES;

    private final DeviceService deviceService;

    public DeviceResource(DeviceService deviceService) {
        this.deviceService = deviceService;
    }

    /**
     * POST  /devices : Create a new device.
     *
     * @param deviceDTO the deviceDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new deviceDTO, or with status 400 (Bad Request) if the device has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/devices")
    @Timed
    public ResponseEntity<DeviceDTO> createDevice(@Valid @RequestBody DeviceDTO deviceDTO) throws URISyntaxException {
        log.debug("REST request to save Device : {}", deviceDTO);
        if (deviceDTO.getId() != null) {
            throw new BadRequestAlertException("A new device cannot already have an ID", ENTITY_NAME, "idexists");
        }
        DeviceDTO result = deviceService.save(deviceDTO);
        return ResponseEntity.created(new URI("/api/devices/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /devices : Updates an existing device.
     *
     * @param deviceDTO the deviceDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated deviceDTO,
     * or with status 400 (Bad Request) if the deviceDTO is not valid,
     * or with status 500 (Internal Server Error) if the deviceDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/devices")
    @Timed
    public ResponseEntity<DeviceDTO> updateDevice(@Valid @RequestBody DeviceDTO deviceDTO) throws URISyntaxException {
        log.debug("REST request to update Device : {}", deviceDTO);
        if (deviceDTO.getId() == null) {
            return createDevice(deviceDTO);
        }
        DeviceDTO result = deviceService.save(deviceDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, deviceDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /devices : get all the devices.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of devices in body
     */
    @GetMapping("/devices")
    @Timed
    public ResponseEntity<List<DeviceDTO>> getAllDevices(@ApiParam Pageable pageable) {
        log.debug("REST request to get a page of Devices");
        //Page<DeviceDTO> page = deviceService.findAll(pageable);
        Page<DeviceDTO> page = deviceService.getAllConnectedDevices(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/devices");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /devices/:id : get the "id" device.
     *
     * @param id the id of the deviceDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the deviceDTO, or with status 404 (Not Found)
     */
    @GetMapping("/devices/{id}")
    @Timed
    public ResponseEntity<DeviceDTO> getDevice(@PathVariable Long id) {
        log.debug("REST request to get Device : {}", id);
        DeviceDTO deviceDTO = deviceService.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(deviceDTO));
    }

    /**
     * DELETE  /devices/:id : delete the "id" device.
     *
     * @param id the id of the deviceDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/devices/{id}")
    @Timed
    public ResponseEntity<Void> deleteDevice(@PathVariable Long id) {
        log.debug("REST request to delete Device : {}", id);
        deviceService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
