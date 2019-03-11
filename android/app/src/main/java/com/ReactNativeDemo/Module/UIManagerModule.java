package com.ReactNativeDemo.Module;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class UIManagerModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext mContext;

    public UIManagerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "UIManagerModule";
    }
}
