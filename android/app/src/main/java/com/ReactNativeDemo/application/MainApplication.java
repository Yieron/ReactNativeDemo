package com.ReactNativeDemo.application;

import android.app.Application;

import com.ReactNativeDemo.BuildConfig;
import com.ReactNativeDemo.ReactPackage.ImageViewPackage;
import com.ReactNativeDemo.ReactPackage.MyReactPackage;
import com.facebook.react.ReactApplication;
import com.microsoft.codepush.react.CodePush;
import com.microsoft.appcenter.reactnative.appcenter.AppCenterReactNativePackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.mob.MobSDK;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        protected String getJSBundleFile() {
//            return UpdateContext.getBundleUrl(MainApplication.this);  //Pushy的初始化
            return CodePush.getJSBundleFile();  //codePush初始化
        }

        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new AppCenterReactNativePackage(MainApplication.this),
                    new RNGestureHandlerPackage(),
                    /*
                    Deployment Key
                    Production:_w-Jxi7v2M4y_Cfz3NItAZkwPbdf4a24f70d-accd-4d8a-8209-ae5e2e68a948
                    Staging: ZPE_RQiwfQUAJipupv_AHoU-yhB64a24f70d-accd-4d8a-8209-ae5e2e68a948
                     */
                    new CodePush("ZPE_RQiwfQUAJipupv_AHoU-yhB64a24f70d-accd-4d8a-8209-ae5e2e68a948",
                            getApplicationContext(), BuildConfig.DEBUG),//Staging Deployment Key
//                    new CodePush(BuildConfig.CODEPUSH_KEY, MainApplication.this, BuildConfig.DEBUG), // Add/change this line.
                    new MyReactPackage(),
                    new ImageViewPackage()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        MobSDK.init(this);
    }

}
