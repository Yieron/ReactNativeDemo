# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}
# 腾讯地图 定位
-keepclassmembers class ** {
    public void on*Event(...);
}
-keep class c.t.**{*;}
-keep class com.tencent.map.geolocation.**{*;}
-keep class com.tencent.tencentmap.lbssdk.service.**{*;}


-dontwarn  org.eclipse.jdt.annotation.**
-dontwarn  c.t.**

# 高德地图 定位
-keep class com.amap.api.location.**{*;}
-keep class com.amap.api.fence.**{*;}
-keep class com.autonavi.aps.amapapi.model.**{*;}


-optimizationpasses 5                                                # 指定代码的压缩级别
-dontusemixedcaseclassnames                                          # 是否使用大小写混合
-dontskipnonpubliclibraryclasses                                     # 是否混淆第三方jar
-dontpreverify                                                       # 混淆时是否做预校验
-verbose                                                             # 混淆时是否记录日志
-optimizations !code/simplification/arithmetic,!field/*,!class/merging/*      # 混淆时所采用的算法

#保持一些基本的不会混淆
-keep public class * extends android.app.Activity
-keep public class * extends android.app.Fragment
-keep public class * extends android.app.Application
-keep public class * extends android.app.Service
-keep public class * extends android.content.BroadcastReceiver
-keep public class * extends android.content.ContentProvider
-keep public class * extends android.app.backup.BackupAgentHelper
-keep public class * extends android.preference.Preference
-keep public class com.android.vending.licensing.ILicensingService

-keepclasseswithmembernames class * {                     # 保持 native 方法不被混淆
    native <methods>;
}
-keepclasseswithmembers class * {                          # 保持自定义控件类不被混淆
    public <init>(android.content.Context, android.util.AttributeSet);
}
-keepclasseswithmembers class * {                          # 保持自定义控件类不被混淆
    public <init>(android.content.Context, android.util.AttributeSet, int);
}
-keepclassmembers class * extends android.app.Activity {    # 保持自定义控件类不被混淆
    public void *(android.view.View);
}
-keepclassmembers enum * {                                   # 保持枚举 enum 类不被混淆
    public static **[] values();
    public static ** valueOf(java.lang.String);
}
-keep class * implements android.os.Parcelable {             # 保持 Parcelable 不被混淆
    public static final android.os.Parcelable$Creator *;
}

#自己写的自定义控件不要混淆
-keep public class * extends android.view.View { *; }
#adapter也不能混淆
-keep public class * extends android.widget.BaseAdapter { *; }
#如果你使用了CusorAdapter,添加下面这行
#-keep public class * extends android.widget.CusorAdapter{ *; }
#数据模型不要混淆
-keepnames class * implements java.io.Serializable
#如果项目中用到了反射，则涉及到反射的类不能混淆(比如，transforms包下的所有类不混淆)
-keep class com.example.newsdemo.app.banner.transforms.**{ *; }

#第三方类库(有多少加多少)
-libraryjars libs/alipaySDK-20150602.jar
-libraryjars libs/android-viewbadger.jar
-libraryjars libs/xUtils-2.6.14.jar
#保持第三方库，有的需要-dontwarn,Android Private Librarys里面的全部keep,keep的时候需要注意class,有的还需要dontwarn。
-keep class android.** { *; }
-keep class com.umeng.** { *; }
-keep class com.tencent.** { *; }
-dontwarn com.tencent.**
-keep class com.baidu.** { *; }
-dontwarn  com.baidu.**


##---------------Begin:  Gson 的配置 ----------
-keepattributes Signature
-keepattributes *Annotation*
# Gson specific classes
-keep class sun.misc.Unsafe { *; }
#-keep class com.google.gson.stream.** { *; }
# Application classes that will be serialized/deserialized over Gson
-keep class com.google.gson.examples.android.model.** { *; }
#注意：：：所有gson涉及的数据bean与model，serialized/deserialized

-keep class cn.shangyu.gdxzPatient.bean.** { *; }

##---------------End: Gson 的配置 ----------

##xutils包下所有类不要混淆，包括类里面的方法-----begin-----
-keep class com.lidroid.** { *; }
-keep class * extends java.lang.annotation.Annotation { *; }
-keepclasseswithmembers class *{
    public *;
}
##xutils包下所有类不要混淆，包括类里面的方法-----end-----

##删除log代码-----begin-----
-assumenosideeffects class android.util.Log {
    public static boolean isLoggable(java.lang.String, int);
    public static int v(...);
    public static int i(...);
    public static int w(...);
    public static int d(...);
    public static int e(...);
   }
##删除log代码-----end-----

##AliPay   -------begin------##
-dontshrink
-dontpreverify
-dontoptimize
-dontusemixedcaseclassnames

-flattenpackagehierarchy
-allowaccessmodification
-printmapping map.txt

-optimizationpasses 7
-verbose
-keepattributes Exceptions,InnerClasses
-dontskipnonpubliclibraryclasses
-dontskipnonpubliclibraryclassmembers
-ignorewarnings

-keep public class * extends android.app.Activity
-keep public class * extends android.app.Application
-keep public class * extends android.app.Service
-keep public class * extends android.content.BroadcastReceiver
-keep public class * extends android.content.ContentProvider
-keep public class * extends java.lang.Throwable {*;}
-keep public class * extends java.lang.Exception {*;}

-keep class com.alipay.android.app.IAlixPay{*;}
-keep class com.alipay.android.app.IAlixPay$Stub{*;}
-keep class com.alipay.android.app.IRemoteServiceCallback{*;}
-keep class com.alipay.android.app.IRemoteServiceCallback$Stub{*;}
-keep class com.alipay.sdk.app.PayTask{ public *;}
-keep class com.alipay.sdk.app.AuthTask{ public *;}
-keep class com.alipay.sdk.app.H5PayCallback {
    <fields>;
    <methods>;
}
-keep class com.alipay.android.phone.mrpc.core.** { *; }
-keep class com.alipay.apmobilesecuritysdk.** { *; }
-keep class com.alipay.mobile.framework.service.annotation.** { *; }
-keep class com.alipay.mobilesecuritysdk.face.** { *; }
-keep class com.alipay.tscenter.biz.rpc.** { *; }
-keep class org.json.alipay.** { *; }
-keep class com.alipay.tscenter.** { *; }
-keep class com.ta.utdid2.** { *;}
-keep class com.ut.device.** { *;}


-keepclasseswithmembernames class * {
    native <methods>;
}

-keepclasseswithmembers class * {
    public <init>(android.content.Context, android.util.AttributeSet);
}

-keepclasseswithmembers class * {
    public <init>(android.content.Context, android.util.AttributeSet, int);
}

-keepclassmembers class * extends android.app.Activity {
   public void *(android.view.View);
}

-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

-keep class * implements android.os.Parcelable {
  public static final android.os.Parcelable$Creator *;
}

# adding this in to preserve line numbers so that the stack traces
# can be remapped
-renamesourcefileattribute SourceFile
-keepattributes SourceFile,LineNumberTable
##AliPay   -------end------##
