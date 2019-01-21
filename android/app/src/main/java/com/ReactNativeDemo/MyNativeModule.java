package com.ReactNativeDemo;

import android.content.Intent;
import android.widget.Toast;

import com.ReactNativeDemo.activity.AndroidToRNActivity;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;

public class MyNativeModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext mContext;

    public MyNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "ToastModule";
    }

    @ReactMethod
    public void rnCallNativeShowToast(String msg) {
        Toast.makeText(mContext, msg, Toast.LENGTH_LONG).show();
        Intent intent = new Intent(mContext, AndroidToRNActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);    //一定要加上这句
        mContext.startActivity(intent);
    }

    @ReactMethod
    public void rnCallNative_promise(String msg, Promise promise) {
        Toast.makeText(mContext, msg, Toast.LENGTH_SHORT).show();
        String componentName = getCurrentActivity().getComponentName().toString();
        promise.resolve(componentName);
    }

    @ReactMethod
    public void measureLayout(Callback successCallback, Callback errorCallback) {
        try {
            successCallback.invoke(100, 100, 200, 200); //调用回调函数，返回结果
        } catch (IllegalViewOperationException e) {
            errorCallback.invoke(e.getMessage());
        }
    }
}
