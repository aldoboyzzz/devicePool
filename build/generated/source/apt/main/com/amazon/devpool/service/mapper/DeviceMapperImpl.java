package com.amazon.devpool.service.mapper;

import com.amazon.devpool.domain.Device;

import com.amazon.devpool.domain.User;

import com.amazon.devpool.service.dto.DeviceDTO;

import java.util.ArrayList;

import java.util.List;

import javax.annotation.Generated;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Component;

@Generated(

    value = "org.mapstruct.ap.MappingProcessor",

    date = "2017-12-13T20:39:09+0530",

    comments = "version: 1.1.0.Final, compiler: javac, environment: Java 1.8.0_151 (Oracle Corporation)"

)

@Component

public class DeviceMapperImpl implements DeviceMapper {

    @Autowired

    private UserMapper userMapper;

    @Override

    public List<Device> toEntity(List<DeviceDTO> dtoList) {

        if ( dtoList == null ) {

            return null;
        }

        List<Device> list = new ArrayList<Device>();

        for ( DeviceDTO deviceDTO : dtoList ) {

            list.add( toEntity( deviceDTO ) );
        }

        return list;
    }

    @Override

    public List<DeviceDTO> toDto(List<Device> entityList) {

        if ( entityList == null ) {

            return null;
        }

        List<DeviceDTO> list = new ArrayList<DeviceDTO>();

        for ( Device device : entityList ) {

            list.add( toDto( device ) );
        }

        return list;
    }

    @Override

    public DeviceDTO toDto(Device device) {

        if ( device == null ) {

            return null;
        }

        DeviceDTO deviceDTO_ = new DeviceDTO();

        deviceDTO_.setAssignedToId( deviceAssignedToId( device ) );

        deviceDTO_.setId( device.getId() );

        deviceDTO_.setDsn( device.getDsn() );

        deviceDTO_.setDeviceType( device.getDeviceType() );

        deviceDTO_.setBuildVariant( device.getBuildVariant() );

        deviceDTO_.setPfm( device.getPfm() );

        deviceDTO_.setIsFree( device.isIsFree() );

        deviceDTO_.setIp( device.getIp() );

        deviceDTO_.setViewUrl( device.getViewUrl() );

        return deviceDTO_;
    }

    @Override

    public Device toEntity(DeviceDTO deviceDTO) {

        if ( deviceDTO == null ) {

            return null;
        }

        Device device_ = new Device();

        device_.setAssignedTo( userMapper.userFromId( deviceDTO.getAssignedToId() ) );

        device_.setId( deviceDTO.getId() );

        device_.setDsn( deviceDTO.getDsn() );

        device_.setDeviceType( deviceDTO.getDeviceType() );

        device_.setBuildVariant( deviceDTO.getBuildVariant() );

        device_.setPfm( deviceDTO.getPfm() );

        device_.setIsFree( deviceDTO.isIsFree() );

        device_.setIp( deviceDTO.getIp() );

        device_.setViewUrl( deviceDTO.getViewUrl() );

        return device_;
    }

    private Long deviceAssignedToId(Device device) {

        if ( device == null ) {

            return null;
        }

        User assignedTo = device.getAssignedTo();

        if ( assignedTo == null ) {

            return null;
        }

        Long id = assignedTo.getId();

        if ( id == null ) {

            return null;
        }

        return id;
    }
}

