package com.amazon.devpool.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

import com.amazon.devpool.domain.enumeration.DeviceType;

import com.amazon.devpool.domain.enumeration.BuildVariant;

import com.amazon.devpool.domain.enumeration.Pfm;

/**
 * A Device.
 */
@Entity
@Table(name = "device")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Device implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "dsn", nullable = false)
    private String dsn;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "device_type", nullable = false)
    private DeviceType deviceType;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "build_variant", nullable = false)
    private BuildVariant buildVariant;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "pfm", nullable = false)
    private Pfm pfm;

    @NotNull
    @Column(name = "is_free", nullable = false)
    private Boolean isFree;

    @Column(name = "ip")
    private String ip;

    @Column(name = "view_url")
    private String viewUrl;

    @OneToOne
    @JoinColumn(unique = true)
    private User assignedTo;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDsn() {
        return dsn;
    }

    public Device dsn(String dsn) {
        this.dsn = dsn;
        return this;
    }

    public void setDsn(String dsn) {
        this.dsn = dsn;
    }

    public DeviceType getDeviceType() {
        return deviceType;
    }

    public Device deviceType(DeviceType deviceType) {
        this.deviceType = deviceType;
        return this;
    }

    public void setDeviceType(DeviceType deviceType) {
        this.deviceType = deviceType;
    }

    public BuildVariant getBuildVariant() {
        return buildVariant;
    }

    public Device buildVariant(BuildVariant buildVariant) {
        this.buildVariant = buildVariant;
        return this;
    }

    public void setBuildVariant(BuildVariant buildVariant) {
        this.buildVariant = buildVariant;
    }

    public Pfm getPfm() {
        return pfm;
    }

    public Device pfm(Pfm pfm) {
        this.pfm = pfm;
        return this;
    }

    public void setPfm(Pfm pfm) {
        this.pfm = pfm;
    }

    public Boolean isIsFree() {
        return isFree;
    }

    public Device isFree(Boolean isFree) {
        this.isFree = isFree;
        return this;
    }

    public void setIsFree(Boolean isFree) {
        this.isFree = isFree;
    }

    public String getIp() {
        return ip;
    }

    public Device ip(String ip) {
        this.ip = ip;
        return this;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public User getAssignedTo() {
        return assignedTo;
    }

    public Device assignedTo(User user) {
        this.assignedTo = user;
        return this;
    }

    public void setAssignedTo(User user) {
        this.assignedTo = user;
    }

    public String getViewUrl() {
        return viewUrl;
    }

    public void setViewUrl(String viewUrl) {
        this.viewUrl = viewUrl;
    }

    public Device viewUrl(String viewUrl) {
        this.viewUrl = viewUrl;
        return this;
    }


    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Device device = (Device) o;
        if (device.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), device.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Device{" +
            "id=" + getId() +
            ", dsn='" + getDsn() + "'" +
            ", deviceType='" + getDeviceType() + "'" +
            ", buildVariant='" + getBuildVariant() + "'" +
            ", pfm='" + getPfm() + "'" +
            ", isFree='" + isIsFree() + "'" +
            ", ip='" + getIp() + "'" +
            "}";
    }
}
