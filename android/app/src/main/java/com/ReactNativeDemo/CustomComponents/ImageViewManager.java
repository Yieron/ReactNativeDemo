package com.ReactNativeDemo.CustomComponents;

import android.graphics.Bitmap;
import android.support.annotation.Nullable;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import pl.droidsonroids.gif.GifDrawable;

public class ImageViewManager extends SimpleViewManager<ImageView> implements LifecycleEventListener {
    private static final String GIFVIEW_MANAGER_NAME = "GIFImageView";
    private ThemedReactContext mContext;
    private static final String EVENT_NAME_ONCLICK = "onClick";
    private static final String HANDLE_METHOD_NAME = "handleTask"; // 交互方法名
    private static final int HANDLE_METHOD_ID = 1; // 交互命令ID
    private Map<String, byte[]> imageCache = new HashMap<>();
    private OkHttpClient mOkHttpClient = new OkHttpClient();
    private GifDrawable gifDrawable;

    @Override
    public String getName() {
        return GIFVIEW_MANAGER_NAME;
    }

    @Override
    protected ImageView createViewInstance(ThemedReactContext reactContext) {
        this.mContext = reactContext;
        this.mContext.addLifecycleEventListener(this);
        final ImageView imageView = new ImageView(reactContext);
        imageView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // 创建数据传递信使，类似于Android中的Bundle
                WritableMap data = Arguments.createMap();
                data.putString("msg", "点击了图片");// key用于在RN中获取传递的数据
                mContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                        imageView.getId(), // RN层原生层根据id绑定在一起
                        EVENT_NAME_ONCLICK, // 事件名称
                        data // 传递的数据
                );
            }
        });
        return imageView;
    }

    /**
     * 自定义事件
     *
     * @return
     */
    @Nullable
    @Override
    public Map getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.of(EVENT_NAME_ONCLICK, MapBuilder.of("registrationName", EVENT_NAME_ONCLICK));
    }

    /**
     * 接收交互通知
     *
     * @return
     */
    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        return MapBuilder.of(HANDLE_METHOD_NAME, HANDLE_METHOD_ID);
    }

    /**
     * 根据命令ID，处理对应任务
     *
     * @param root
     * @param commandId
     * @param args
     */
    @Override
    public void receiveCommand(ImageView root, int commandId, @Nullable ReadableArray args) {
        switch (commandId) {
            case HANDLE_METHOD_ID:
                if (args != null) {
                    String name = args.getString(0);//获取第一个位置的数据
                    Toast.makeText(mContext, "收到RN层的任务通知，开始在原生层处理任务...", Toast.LENGTH_SHORT).show();
                }
                break;
            default:
                break;
        }
    }


    @Override
    public void onHostResume() {

    }

    @Override
    public void onHostPause() {

    }

    @Override
    public void onHostDestroy() {
        imageCache.clear();
        gifDrawable.recycle();
    }

    @ReactProp(name = "imageName")
    public void setImageSrc(final ImageView image, String url) {
//        if(gifDrawable != null && gifDrawable.isPlaying()) {
//            gifDrawable.stop();
//        }
        if (imageCache.containsKey(url)) {
            showGifImage(image, imageCache.get(url));
        } else {
            loadImage(image, url);
        }
    }

    /**
     * 切换播放状态
     *
     * @param image
     * @param status true: 播放 false： 暂停
     */
    @ReactProp(name = "playStatus")
    public void setPlayingStatus(ImageView image, Boolean status) {
        if (gifDrawable != null) {
            if (status) {
                if (!gifDrawable.isPlaying()) {
                    gifDrawable.start();
                }
            } else {
                if (gifDrawable.isPlaying()) {
                    gifDrawable.stop();
                }
            }
        }
    }

    /**
     * 下载Gif,获取图片字节流
     *
     * @param image 组件实例
     * @param url   Gif图片URL
     */
    private void loadImage(final ImageView image, final String url) {
        Request request = new Request.Builder().url(url).build();
        Call call = mOkHttpClient.newCall(request);
        call.enqueue(new Callback() {
            @Override
            public void onResponse(Call call, final Response response) throws IOException {
                mContext.runOnUiQueueThread(new Runnable() {
                    @Override
                    public void run() {
                        try {
                            showGifImage(image, response.body().bytes());
                            imageCache.put(url, response.body().bytes());
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                });
            }

            @Override
            public void onFailure(Call call, IOException e) {
            }
        });
    }

    /**
     * 渲染Gif图
     */
    private void showGifImage(final ImageView image, final byte[] imageBytes) {
        try {
            gifDrawable = new GifDrawable(imageBytes);
        } catch (IOException e) {
            e.printStackTrace();
        }
        image.setBackground(gifDrawable);
    }
}
