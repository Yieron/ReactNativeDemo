package com.tencent.example.location;

import android.graphics.Color;
import android.os.Bundle;
import android.widget.TextView;

import com.tencent.map.geolocation.TencentLocation;
import com.tencent.map.geolocation.TencentLocationListener;
import com.tencent.map.geolocation.TencentLocationManager;
import com.tencent.map.geolocation.TencentLocationRequest;
import com.tencent.mapsdk.raster.model.BitmapDescriptorFactory;
import com.tencent.mapsdk.raster.model.Circle;
import com.tencent.mapsdk.raster.model.CircleOptions;
import com.tencent.mapsdk.raster.model.LatLng;
import com.tencent.mapsdk.raster.model.Marker;
import com.tencent.mapsdk.raster.model.MarkerOptions;
import com.tencent.tencentmap.mapsdk.map.MapActivity;
import com.tencent.tencentmap.mapsdk.map.MapView;
import com.tencent.tencentmap.mapsdk.map.TencentMap;

/**
 * 在腾讯地图上显示我的位置.
 *
 * <p>
 * 地图SDK相关内容请参考<a
 * href="http://open.map.qq.com/android_v1/index.html">腾讯地图SDK</a>
 */
public class DemoMapActivity extends MapActivity implements
		TencentLocationListener {

	private TextView mStatus;
	private MapView mMapView;
	private TencentMap mTencentMap;
    private Marker mLocationMarker;
    private Circle mAccuracyCircle;

	private TencentLocation mLocation;
	private TencentLocationManager mLocationManager;

	// 用于记录定位参数, 以显示到 UI
	private String mRequestParams;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_demo_map);

		mStatus = (TextView) findViewById(R.id.status);
		mStatus.setTextColor(Color.RED);
		initMapView();

		mLocationManager = TencentLocationManager.getInstance(this);
		// 设置坐标系为 gcj-02, 缺省坐标为 gcj-02, 所以通常不必进行如下调用
		mLocationManager.setCoordinateType(TencentLocationManager.COORDINATE_TYPE_GCJ02);
	}

	private void initMapView() {
		mMapView = (MapView) findViewById(R.id.mapviewOverlay);
		mTencentMap = mMapView.getMap();
		mTencentMap.setZoom(9);
	}

	@Override
	protected void onResume() {
		super.onResume();
		startLocation();
	}

	@Override
	protected void onPause() {
		super.onPause();
		stopLocation();
	}

	// ===== view listeners
//	public void myLocation(View view) {
//		if (mLocation != null) {
//			mMapView.getController().animateTo(Utils.of(mLocation));
//		}
//	}

	// ===== view listeners

	// ====== location callback

	@Override
	public void onLocationChanged(TencentLocation location, int error,
			String reason) {
		if (error == TencentLocation.ERROR_OK) {
			mLocation = location;

			// 定位成功
			StringBuilder sb = new StringBuilder();
			sb.append("定位参数=").append(mRequestParams).append("\n");
			sb.append("(纬度=").append(location.getLatitude()).append(",经度=")
					.append(location.getLongitude()).append(",精度=")
					.append(location.getAccuracy()).append("), 来源=")
					.append(location.getProvider()).append(", 地址=")
					.append(location.getAddress());
            LatLng latLngLocation = new LatLng(location.getLatitude(), location.getLongitude());

			// 更新 status
			mStatus.setText(sb.toString());

			// 更新 location Marker
            if (mLocationMarker == null) {
                mLocationMarker =
                        mTencentMap.addMarker(new MarkerOptions().
                                position(latLngLocation).
                                icon(BitmapDescriptorFactory.fromResource(R.drawable.mark_location)));
            } else {
                mLocationMarker.setPosition(latLngLocation);
            }

            if (mAccuracyCircle == null) {
                mAccuracyCircle = mTencentMap.addCircle(new CircleOptions().
                        center(latLngLocation).
                        radius(location.getAccuracy()).
                        fillColor(0x884433ff).
                        strokeColor(0xaa1122ee).
                        strokeWidth(1));
            } else {
                mAccuracyCircle.setCenter(latLngLocation);
                mAccuracyCircle.setRadius(location.getAccuracy());
            }
		}
	}

	@Override
	public void onStatusUpdate(String name, int status, String desc) {
		// ignore
	}

	// ====== location callback

	private void startLocation() {
		TencentLocationRequest request = TencentLocationRequest.create();
		request.setInterval(5000);
		mLocationManager.requestLocationUpdates(request, this);

		mRequestParams = request.toString() + ", 坐标系="
				+ DemoUtils.toString(mLocationManager.getCoordinateType());
	}

	private void stopLocation() {
		mLocationManager.removeUpdates(this);
	}

}
