package com.amazon.devpool.service.mapper;

import com.amazon.devpool.domain.*;
import com.amazon.devpool.service.dto.DeviceDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Device and its DTO DeviceDTO.
 */
@Mapper(componentModel = "spring", uses = {UserMapper.class})
public interface DeviceMapper extends EntityMapper<DeviceDTO, Device> {

    @Mapping(source = "assignedTo.id", target = "assignedToId")
    DeviceDTO toDto(Device device); 

    @Mapping(source = "assignedToId", target = "assignedTo")
    Device toEntity(DeviceDTO deviceDTO);

    default Device fromId(Long id) {
        if (id == null) {
            return null;
        }
        Device device = new Device();
        device.setId(id);
        return device;
    }
}
