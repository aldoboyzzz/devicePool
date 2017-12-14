package com.amazon.devpool.service.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.io.InputStream;

/**
 * Utility class for HTTP headers creation.
 */
public final class ProcessUtil {

    private static final Logger log = LoggerFactory.getLogger(ProcessUtil.class);

    private ProcessUtil() {
    }

    public static InputStream getCommandOutput(String... command)
    {
        log.info("Executing ADB Command : ");
        for(String str : command)
            System.out.print(str + " ");
        ProcessBuilder pb = new ProcessBuilder(command);
        pb.redirectErrorStream(true);
        Process p = null;
        try {
            p = pb.start();
            p.waitFor();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return p.getInputStream();
    }
}
