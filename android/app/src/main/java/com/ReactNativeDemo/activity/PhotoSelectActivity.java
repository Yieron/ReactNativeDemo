package com.ReactNativeDemo.activity;

import android.content.Intent;
import android.provider.MediaStore;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import com.ReactNativeDemo.R;
import com.ReactNativeDemo.service.MyTaskService;

public class PhotoSelectActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_photo_select);

        startMyTaskService();
    }

    private void startMyTaskService() {
        Intent service = new Intent(getApplicationContext(), MyTaskService.class);
        Bundle bundle = new Bundle();

        bundle.putString("foo", "bar");
        service.putExtras(bundle);

        getApplicationContext().startService(service);
    }

    public void showFacingCamera(View view) {
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        intent.putExtra("android.intent.extras.CAMERA_FACING", 1); // 调用前置摄像头
        startActivityForResult(intent, 1);
    }
}
