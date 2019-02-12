package com.ReactNativeDemo.activity;

import android.annotation.TargetApi;
import android.content.Intent;
import android.icu.text.SimpleDateFormat;
import android.os.Build;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.widget.TextView;

import com.ReactNativeDemo.R;
import com.amap.api.location.AMapLocation;

import java.util.Date;

public class AMAPLocationActivity extends AppCompatActivity {
    private static final String TAG = "AMAPLocationActivity";
    private TextView tvAMAPLocation;

    @TargetApi(Build.VERSION_CODES.N)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_amaplocation);
        tvAMAPLocation = (TextView) findViewById(R.id.tv_amap_location);
        Intent intent = getIntent();
        AMapLocation aMapLocation = intent.getParcelableExtra("aMapLocation");

        aMapLocation.getLocationType();//获取当前定位结果来源，如网络定位结果，详见定位类型表
        aMapLocation.getLatitude();//获取纬度
        aMapLocation.getLongitude();//获取经度
        aMapLocation.getAccuracy();//获取精度信息
        aMapLocation.getAddress();//地址，如果option中设置isNeedAddress为false，则没有此结果，网络定位结果中会有地址信息，GPS定位不返回地址信息。
        aMapLocation.getCountry();//国家信息
        aMapLocation.getProvince();//省信息
        aMapLocation.getCity();//城市信息
        aMapLocation.getDistrict();//城区信息
        aMapLocation.getStreet();//街道信息
        aMapLocation.getStreetNum();//街道门牌号信息
        aMapLocation.getCityCode();//城市编码
        aMapLocation.getAdCode();//地区编码
        aMapLocation.getAoiName();//获取当前定位点的AOI信息
        aMapLocation.getBuildingId();//获取当前室内定位的建筑物Id
        aMapLocation.getFloor();//获取当前室内定位的楼层
        aMapLocation.getGpsAccuracyStatus();//获取GPS的当前状态
        //获取定位时间
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date(aMapLocation.getTime());
        df.format(date);

        tvAMAPLocation.setText(aMapLocation.toString());
    }
}
