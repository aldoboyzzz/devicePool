package com.amazon.devpool.domain;

import com.amazon.devpool.domain.enumeration.BuildVariant;
import com.amazon.devpool.domain.enumeration.DeviceType;
import com.amazon.devpool.domain.enumeration.Pfm;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Device.class)
public abstract class Device_ {

	public static volatile SingularAttribute<Device, DeviceType> deviceType;
	public static volatile SingularAttribute<Device, Boolean> isFree;
	public static volatile SingularAttribute<Device, Pfm> pfm;
	public static volatile SingularAttribute<Device, BuildVariant> buildVariant;
	public static volatile SingularAttribute<Device, String> ip;
	public static volatile SingularAttribute<Device, String> viewUrl;
	public static volatile SingularAttribute<Device, Long> id;
	public static volatile SingularAttribute<Device, String> dsn;
	public static volatile SingularAttribute<Device, User> assignedTo;

}

