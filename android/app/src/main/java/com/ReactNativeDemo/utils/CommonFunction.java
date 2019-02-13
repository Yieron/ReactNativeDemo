package com.ReactNativeDemo.utils;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;

public class CommonFunction {

    /**
     * 检测是否安装某应用
     * @param context
     * @param Packagename 应用包名
     * @return true已安装  false 未安装
     */
    public static boolean isAppInstalled(Context context, String Packagename) {
        PackageInfo packageInfo;
        try {
            packageInfo = context.getPackageManager().getPackageInfo(Packagename, 0);
        } catch (PackageManager.NameNotFoundException e) {
            packageInfo = null;
            e.printStackTrace();
        }
        if (packageInfo == null) {
            return false;
        } else {
            return true;
        }
    }
}
