package com.ReactNativeDemo.Module;

import android.content.Intent;
import android.util.Log;

import com.ReactNativeDemo.activity.PhotoSelectActivity;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class TakePhotoModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext reactApplicationContext;
    private static final String TAG = "TakePhotoModule";

    public TakePhotoModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactApplicationContext = reactContext;
    }

    @Override
    public String getName() {
        return "TakePhotoModule";
    }

    @ReactMethod
    public void selectPhoto() {
        Log.d(TAG, "selectPhoto: ");
        Intent intent = new Intent(getCurrentActivity(), PhotoSelectActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        reactApplicationContext.startActivity(intent);
    }
}
