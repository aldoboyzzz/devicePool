package com.amazon.devpool.service.util;

import com.amazon.devpool.config.AdbCommands;
import com.amazon.devpool.config.Constants;
import com.amazon.devpool.service.impl.DeviceServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Calendar;
import java.util.List;

public class DeviceUtil {

    private static final Logger log = LoggerFactory.getLogger(DeviceUtil.class);

    public static String getDeviceProperty(String dsnOrIp, String property)
    {
        long t1 = Calendar.getInstance().getTimeInMillis();
        List<String> adbShellGetProp = Arrays.asList(AdbCommands.ADB_SHELL_GETPROP);
        adbShellGetProp.set(Constants.positionOfDSN, dsnOrIp);
        adbShellGetProp.set(Constants.positionOfProperty, property);
        InputStream is = ProcessUtil.getCommandOutput(adbShellGetProp.toArray(new String[0]));
        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String line=null;
        try {
            if((line=br.readLine())!=null)
            {
                log.info("Line : "+ line);
                long t2 = Calendar.getInstance().getTimeInMillis();
                log.info("Time Taken to get Property : " + ((t2-t1)/1000));
                return line.split("\\]: \\[")[1].split("\\]")[0].trim();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static boolean installApk(String dsnOrIp, String apkFileName)
    {
        List<String> adbShellGetProp = Arrays.asList(AdbCommands.ADB_R_T_INSTALL);
        adbShellGetProp.set(Constants.positionOfDSN, dsnOrIp);
        adbShellGetProp.set(Constants.positionOfApkFilename, apkFileName);
        InputStream is = ProcessUtil.getCommandOutput(adbShellGetProp.toArray(new String[0]));
        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String line=null;
        try {
            while((line=br.readLine())!=null)
            {
                log.info("Line : " + line);
                if(line.trim().contains("Success")) {
                    log.error("Successfully installed Companion App for device [" + dsnOrIp + "]");
                    return true;
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        log.error("Error : Companion App Installation Failed for device [" + dsnOrIp + "]");
        return false;
    }



}
