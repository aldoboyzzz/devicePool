package com.amazon.devpool.service.dto;


import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;
import com.amazon.devpool.domain.enumeration.DeviceType;
import com.amazon.devpool.domain.enumeration.BuildVariant;
import com.amazon.devpool.domain.enumeration.Pfm;

/**
 * A DTO for the Device entity.
 */
public class DeviceDTO implements Serializable {

    private Long id;

    @NotNull
    private String dsn;

    @NotNull
    private DeviceType deviceType;

    @NotNull
    private BuildVariant buildVariant;

    @NotNull
    private Pfm pfm;

    @NotNull
    private Boolean isFree;

    private String ip;

    private String viewUrl;

    private Long assignedToId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDsn() {
        return dsn;
    }

    public void setDsn(String dsn) {
        this.dsn = dsn;
    }

    public DeviceType getDeviceType() {
        return deviceType;
    }

    public void setDeviceType(DeviceType deviceType) {
        this.deviceType = deviceType;
    }

    public BuildVariant getBuildVariant() {
        return buildVariant;
    }

    public void setBuildVariant(BuildVariant buildVariant) {
        this.buildVariant = buildVariant;
    }

    public Pfm getPfm() {
        return pfm;
    }

    public void setPfm(Pfm pfm) {
        this.pfm = pfm;
    }

    public Boolean isIsFree() {
        return isFree;
    }

    public void setIsFree(Boolean isFree) {
        this.isFree = isFree;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getViewUrl() {
        return viewUrl;
    }

    public void setViewUrl(String viewUrl) {
        this.viewUrl = viewUrl;
    }

    public Long getAssignedToId() {
        return assignedToId;
    }

    public void setAssignedToId(Long userId) {
        this.assignedToId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        DeviceDTO deviceDTO = (DeviceDTO) o;
        if(deviceDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), deviceDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "DeviceDTO{" +
            "id=" + getId() +
            ", dsn='" + getDsn() + "'" +
            ", deviceType='" + getDeviceType() + "'" +
            ", buildVariant='" + getBuildVariant() + "'" +
            ", pfm='" + getPfm() + "'" +
            ", isFree='" + isIsFree() + "'" +
            ", ip='" + getIp() + "'" +
            ", viewUrl='" + getViewUrl() + "'" +
            "}";
    }
}
