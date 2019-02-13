package com.ReactNativeDemo.activity;

import android.annotation.TargetApi;
import android.content.Intent;
import android.icu.text.SimpleDateFormat;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.widget.TextView;

import com.ReactNativeDemo.R;
import com.ReactNativeDemo.utils.CommonFunction;
import com.amap.api.fence.GeoFenceClient;
import com.amap.api.location.AMapLocation;
import com.amap.api.location.CoordinateConverter;
import com.amap.api.location.DPoint;

import java.util.Date;

import static com.amap.api.fence.GeoFenceClient.GEOFENCE_IN;
import static com.amap.api.fence.GeoFenceClient.GEOFENCE_OUT;
import static com.amap.api.fence.GeoFenceClient.GEOFENCE_STAYED;

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

        //initGeoFenceClient();
        initCoordinateConverter();
        isAppInstalled();
    }

    private void isAppInstalled() {
        boolean appInstalled = CommonFunction.isAppInstalled(this, "com.tencent.map");
        Log.d(TAG, "CommonFunction: " + appInstalled);

        if (appInstalled) {  //true

        } else {  //false
            /**
             * 跳转到应用商店
             * 跳转到相应的app界面，根据包名（id为包名）
             */
            Uri uri = Uri.parse("market://details?id=com.tencent.map");//id为包名
            Intent intent = new Intent(Intent.ACTION_VIEW, uri);
            startActivity(intent);
        }
    }

    /**
     * 坐标转换与位置判断
     */
    private void initCoordinateConverter() {
        CoordinateConverter converter = new CoordinateConverter(this);
        // CoordType.GPS 待转换坐标类型
        converter.from(CoordinateConverter.CoordType.GPS);
        // 执行转换操作
        try {
            DPoint desLatLng = converter.convert();
        } catch (Exception e) {
            e.printStackTrace();
        }
        double latitude = 39.135733;
        double longitude = 117.188699;
        boolean isAMapDataAvailable = converter.isAMapDataAvailable(latitude, longitude);
        Log.d(TAG, "isAMapDataAvailable：" + isAMapDataAvailable);
    }

    /**
     * 地理围栏
     */
    private void initGeoFenceClient() {
        //实例化地理围栏客户端
        GeoFenceClient mGeoFenceClient = new GeoFenceClient(getApplicationContext());

        //设置希望侦测的围栏触发行为，默认只侦测用户进入围栏的行为
        //public static final int GEOFENCE_IN 进入地理围栏
        //public static final int GEOFENCE_OUT 退出地理围栏
        //public static final int GEOFENCE_STAYED 停留在地理围栏内10分钟

        mGeoFenceClient.setActivateAction(GEOFENCE_IN | GEOFENCE_OUT | GEOFENCE_STAYED);
        mGeoFenceClient.addGeoFence("首开广场", "写字楼", "北京", 1, "000FATE23（考勤打卡）");


        Log.d(TAG, "initGeoFenceClient: " + mGeoFenceClient);
    }

}
