package com.amazon.devpool.config;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

/**
 * Application constants.
 */
public final class Constants {

    //Regex for acceptable logins
    public static final String LOGIN_REGEX = "^[_'.@A-Za-z0-9-]*$";

    public static final String SYSTEM_ACCOUNT = "system";
    public static final String ANONYMOUS_USER = "anonymoususer";
    public static final String DEFAULT_LANGUAGE = "en";
    public static final String PROPERTY_PRODUCT_SERIAL = "ro.serialno";
    public static final String PROPERTY_PRODUCT_TYPE = "ro.product.device";
    public static final String PROPERTY_BUILD_TYPE = "ro.build.type";
    public static final String PROPERTY_PERSIST_SYS_COUNTRY = "persist.sys.country";
    public static final String PROPERTY_PERSIST_SYS_LANGUAGE = "persist.sys.language";
    public static final String PROPERTY_ASSIGNED_TO = "dp.assignedTo";
    public static final String PROPERTY_IP_ADDRESS = "ipaddress";

    public static final String COMPANION_APP_DEBUG_APK_PATH = "src/main/resources/apks/devicePoolCompanionApp_Debug.apk";
    public static final String COMPANION_APP_RELEASE_APK_PATH = "src/main/resources/apks/devicePoolCompanionApp_Release.apk";
    public static final String DEFAULT_PORT_NO_FOR_DEVICE_WEB_SERVER = "9380";

    public static final int positionOfDSN = 2;
    public static final int positionOfProperty = 7;
    public static final int positionOfApkFilename = 6;

    public static final Set<String> REQUIRED_EXACT_DEVICE_PROPERTIES = new HashSet<String>(Arrays.asList(PROPERTY_PRODUCT_TYPE,PROPERTY_BUILD_TYPE, PROPERTY_PERSIST_SYS_COUNTRY, PROPERTY_PERSIST_SYS_LANGUAGE, PROPERTY_ASSIGNED_TO));
    public static final String REQUIRED_MATCHING_DEVICE_PROPERTIES = "ipaddress";


    private Constants() {
    }
}
