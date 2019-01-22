package com.ReactNativeDemo.Module;

import android.content.Intent;
import android.widget.Toast;

import com.ReactNativeDemo.activity.AndroidToRNActivity;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.IllegalViewOperationException;

public class ToastModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext mContext;

    public ToastModule(ReactApplicationContext reactContext) {
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

    /**
     * 传递字典
     * iOS端接收数据类型还是NSDictionary类型，但Android端接收参数可不是Map、HashMap之类的，而是ReadableMap
     *
     * @param map
     */
    @ReactMethod
    public void getDictionaryFromRN(ReadableMap map) {
        System.out.print(map);
        Toast.makeText(mContext, "已收到字典数据", Toast.LENGTH_SHORT).show();
    }

    /**
     * 传递数组
     * iOS端接收参数类型可定义为NSArray，但Android端接收参数需要定义为ReadableArray，
     * 不能是java中的集合类型，如List、ArrayList是解析不到数据的。
     *
     * @param array
     */
    @ReactMethod
    public void getArrayFromRN(ReadableArray array) {
        System.out.print(array);
        Toast.makeText(mContext, "已收到数组数据", Toast.LENGTH_SHORT).show();
    }

    /**
     * RN调用Native的方法
     * Callback方式回调
     */
    @ReactMethod
    public void rnCallNativeFromCallback(String param, Callback callback) {
        String a = "啧啧啧：" + param;
        if (callback != null)
            callback.invoke(a);
    }

    /**
     * RN调用Native的方法
     * Promise方式回调
     */
    @ReactMethod
    public void rnCallNativeFromPromise(String msg, Promise promise) {
        String result = "啧啧啧：" + msg;
        promise.resolve(result);
    }
    //*******************************原生向RN回调数据*****************************

    /**
     * 原生通过回调的形式向RN端传递string
     *
     * @param callback
     */
    @ReactMethod
    public void passStringBackToRN(Callback callback) {
        callback.invoke("This is a string from Native");
    }

    /**
     * 原生通过回调的形式向RN端传递字典。
     * 这里传出去的字典类型必须是WritableMap，java中的Map、HashMap是不能传递到RN的
     *
     * @param callback
     */
    @ReactMethod
    public void passDictionaryBackToRN(Callback callback) {
        WritableMap map = Arguments.createMap();
        map.putString("name", "小明");
        map.putInt("age", 20);
        map.putBoolean("isGraduated", false);
        callback.invoke(map);
    }

    /**
     * 原生通过回调的形式向RN端传递数组。
     * 这里传出去的字典类型必须是WritableArray
     *
     * @param callback
     */
    @ReactMethod
    public void passArrayBackToRN(Callback callback) {
        WritableArray array = Arguments.createArray();
        array.pushString("ReactNative");
        array.pushString("Android");
        array.pushInt(20);
        array.pushBoolean(false);
        callback.invoke(array);
    }

    /**
     * 通过Promise返回数据到RN
     * @param msg
     * @param promise
     */
    @ReactMethod
    public void passPromiseBackToRN(String msg, Promise promise) {
        if (!msg.equals("")) {
            promise.resolve(true);
        } else {
            promise.reject("warning", "msg cannot be empty!");
        }
    }

    //*****************************原生Android发送消息到RN端*********************************

    /**
     * sendEvent方法定义在module类中，在需要发送事件的地方调用sendEvent方法就可以将事件通知发给RN端。
     * @param eventName
     */
    public static void sendEvent(String eventName){
        String dataToRN  ="这是发给RN的字符串";
        mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName,dataToRN);
    }
}
