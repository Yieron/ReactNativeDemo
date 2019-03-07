package com.ReactNativeDemo.service;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;

import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;

public class MyTaskService extends HeadlessJsTaskService {
    @Override
    protected @Nullable
    HeadlessJsTaskConfig getTaskConfig(Intent intent) {
        Bundle extras = intent.getExtras();
        if (extras != null) {
            return new HeadlessJsTaskConfig(
                    "SomeTaskName",
                    Arguments.fromBundle(extras),
                    5000, // 任务的超时时间
                    true // 可选参数：是否允许任务在前台运行，默认为false
            );
        }
        return null;
    }
}
