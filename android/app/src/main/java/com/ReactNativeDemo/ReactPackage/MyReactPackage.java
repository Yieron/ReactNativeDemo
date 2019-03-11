package com.ReactNativeDemo.ReactPackage;

import com.ReactNativeDemo.Module.AMAPLocationModule;
import com.ReactNativeDemo.Module.ImagePickerModule;
import com.ReactNativeDemo.Module.TakePhotoModule;
import com.ReactNativeDemo.Module.TencentLocationModule;
import com.ReactNativeDemo.Module.ToastModule;
import com.ReactNativeDemo.Module.UIManagerModule;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MyReactPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new ToastModule(reactContext));
        modules.add(new TakePhotoModule(reactContext));
        modules.add(new AMAPLocationModule(reactContext));
        modules.add(new TencentLocationModule(reactContext));
        modules.add(new ImagePickerModule(reactContext));
        modules.add(new UIManagerModule(reactContext));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

}
