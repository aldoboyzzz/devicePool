package com.amazon.devpool.config;

public final class AdbCommands {

    public static final String[] ADB_DEVICES = {"adb", "devices"};
    public static final String[] ADB_SHELL_GETPROP = {"adb", "-s", "DSN_OR_IP", "shell", "getprop", "|", "grep", "'PROPERTY'"};
    public static final String[] ADB_SHELL_GETPROP_DSN = {"adb", "-s", "DSN_OR_IP", "shell", "getprop", "|", "grep", Constants.PROPERTY_PRODUCT_SERIAL};
    public static final String[] ADB_SHELL_GETPROP_PRODUCT_TYPE = {"adb", "-s", "DSN_OR_IP", "shell", "getprop", "|", "grep", Constants.PROPERTY_PRODUCT_TYPE};
    public static final String[] ADB_SHELL_GETPROP_BUILD_TYPE = {"adb", "-s", "DSN_OR_IP", "shell", "getprop", "|", "grep", Constants.PROPERTY_BUILD_TYPE};
    public static final String[] ADB_SHELL_GETPROP_PRODUCT_LOCALE_REGION = {"adb", "-s", "DSN_OR_IP", "shell", "getprop", "|", "grep", Constants.PROPERTY_PERSIST_SYS_COUNTRY};
    public static final String[] ADB_SHELL_GETPROP_PRODUCT_LOCALE_LANGUAGE = {"adb", "-s", "DSN_OR_IP", "shell", "getprop", "|", "grep", Constants.PROPERTY_PERSIST_SYS_LANGUAGE};
    public static final String[] ADB_SHELL_GETPROP_ASSIGNED_TO = {"adb", "-s", "DSN_OR_IP", "shell", "getprop", "|", "grep", Constants.PROPERTY_ASSIGNED_TO};

    public static final String[] ADB_R_T_INSTALL = {"adb", "-s", "DSN_OR_IP", "install", "-r", "-t", "APK_FILE"};
}
