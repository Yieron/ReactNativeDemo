package com.ReactNativeDemo.activity;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import com.ReactNativeDemo.Module.ToastModule;
import com.ReactNativeDemo.R;

public class AndroidToRNActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_android_to_rn);
    }

    public void onBack(View view) {
        finish();
    }

    public void sendEventToRN(View view){
        ToastModule.sendEvent("YieronEventName");
    }
}
