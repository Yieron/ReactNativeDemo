package com.ReactNativeDemo.Module;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class TencentLocationModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext reactApplicationContext;
    private static final String TAG = "TencentLocationModule";

    public TencentLocationModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactApplicationContext = reactContext;
    }

    @Override
    public String getName() {
        return "TencentLocationModule";
    }

    @ReactMethod
    public void startLocation() {
        Log.d(TAG, "startLocation: ");
    }
}
