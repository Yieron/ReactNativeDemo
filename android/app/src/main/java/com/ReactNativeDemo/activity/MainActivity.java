package com.ReactNativeDemo.activity;

import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.annotation.Nullable;

import com.ReactNativeDemo.BuildConfig;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.microsoft.codepush.react.CodePush;
import com.facebook.react.ReactActivityDelegate;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;


public class MainActivity extends ReactActivity {
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactNativeDemo";
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {
        super.onCreate(savedInstanceState, persistentState);
        mReactInstanceManager = ReactInstanceManager.builder()
                // ...
                // Add CodePush package
                .addPackage(new CodePush("deployment-key-here", getApplicationContext(), BuildConfig.DEBUG))
                // Get the JS Bundle File via CodePush
                .setJSBundleFile(CodePush.getJSBundleFile())
                // ...

                .build();
        mReactRootView.startReactApplication(mReactInstanceManager, "MyReactNativeApp", null);

        setContentView(mReactRootView);
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
}
