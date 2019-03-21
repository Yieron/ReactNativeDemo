import React from "react";
import { View, Text } from "react-native";
import {
    createStackNavigator, createAppContainer, createBottomTabNavigator,
    createDrawerNavigator, createSwitchNavigator
} from "react-navigation";
import ComponentRootScreen from './YieronReactNative/Components/ComponentRootScreen';
import AndroidOnlyRootScreen from './YieronReactNative/Components/AndroidOnlyRootScreen';
import iOSOnlyRootScreen from './YieronReactNative/Components/iOSOnlyRootScreen';
import CustomComponentRootScreen from './YieronReactNative/Components/CustomComponentRootScreen';
import WelcomeScreen from './YieronReactNative/Components/WelcomeScreen';
import ModalScreen from './YieronReactNative/Components/ModalScreen';
import SettingsScreen from './YieronReactNative/Components/SettingsScreen';
import iphoneXSupportScreen from './YieronReactNative/Components/iOSOnly/iphoneXSupportScreen';
import AssetExample from './YieronReactNative/Components/AssetExample';
import ScreenWithCustomBackBehavior from './YieronReactNative/Components/hardware/ScreenWithCustomBackBehavior';
import VibrateScreen from './YieronReactNative/Components/hardware/VibrateScreen';
import ToastAndroidScreen from './YieronReactNative/Components/Alert/ToastAndroidScreen';
import TimePickerAndroidScreen from './YieronReactNative/Components/picker/TimePickerAndroidScreen';
import LayoutAnimationScreen from './YieronReactNative/Components/animation/LayoutAnimationScreen';
import FrameAnimationDemoScreen from './YieronReactNative/Components/animation/FrameAnimationDemoScreen';
import flexDemoScreen from './YieronReactNative/Components/flexLayout/flexDemoScreen';
import KeyboardDemoScreen from './YieronReactNative/Components/keyboard/KeyboardDemoScreen';
import InteractionManagerDemoScreen from './YieronReactNative/Components/timer/InteractionManagerDemoScreen';
import AnimatedDemoScreen from './YieronReactNative/Components/animation/AnimatedDemoScreen';
import ClipboardDemoScreen from './YieronReactNative/Components/keyboard/ClipboardDemoScreen';
import BackHandlerDemo from './YieronReactNative/Components/hardware/BackHandlerDemo';
import AsyncStorageDemo from './YieronReactNative/storage/AsyncStorageDemo';
import AppStateDemo from './YieronReactNative/api/AppStateDemo';
import AlertDemoScreen from './YieronReactNative/Components/Alert/AlertDemoScreen';
import AccessibilityInfoDemo from './YieronReactNative/Components/hardware/AccessibilityInfoDemo';
import webViewDemo from './YieronReactNative/Components/webView/webViewDemo';
import FlatListDemo from './YieronReactNative/Components/List/FlatListDemo';
import SectionListDemo from './YieronReactNative/Components/List/SectionListDemo';
import VirtualizedListDemo from './YieronReactNative/Components/List/VirtualizedListDemo';
import ViewPagerAndroidDemo from './YieronReactNative/Components/container/ViewPagerAndroidDemo';
import SnapshotViewIOSDemo from './YieronReactNative/Components/iOSOnly/SnapshotViewIOSDemo';
import TouchableOpacityDemo from './YieronReactNative/Components/Touch/TouchableOpacityDemo';
import TextInputDemo from './YieronReactNative/Components/TextInput/TextInputDemo';
import TextDemo from './YieronReactNative/Components/TextInput/TextDemo';
import SliderDemo from './YieronReactNative/Components/progressbar/SliderDemo';
import SegmentedControlIOSDemo from './YieronReactNative/Components/iOSOnly/SegmentedControlIOSDemo';
import ScrollViewDemo from './YieronReactNative/Components/List/ScrollViewDemo';
import setIntervalDemo from './YieronReactNative/Components/timer/setIntervalDemo';
import setTimeoutDemo from './YieronReactNative/Components/timer/setTimeoutDemo';
import ProgressViewIOSDemo from './YieronReactNative/Components/iOSOnly/ProgressViewIOSDemo';
import ProgressBarAndroidDemo from './YieronReactNative/Components/AndroidOnly/ProgressBarAndroidDemo';
import PickerIOSDemo from './YieronReactNative/Components/iOSOnly/PickerIOSDemo';
import PickerDemo from './YieronReactNative/Components/picker/PickerDemo';
import MaskedViewIOSDemo from './YieronReactNative/Components/iOSOnly/MaskedViewIOSDemo';
import KeyboardAvoidingViewDemo from './YieronReactNative/Components/keyboard/KeyboardAvoidingViewDemo';
import DrawerLayoutAndroidDemo from './YieronReactNative/Components/AndroidOnly/DrawerLayoutAndroidDemo';
import DatePickerIOSDemo from './YieronReactNative/Components/iOSOnly/DatePickerIOSDemo';
import ActivityIndicatorDemo from './YieronReactNative/Components/progressbar/ActivityIndicatorDemo';
import RCTGIFViewDemo from './YieronReactNative/Components/CustomComponent/RCTGIFViewDemo';
import VideoViewDemo from './YieronReactNative/Components/CustomComponent/VideoViewDemo';
import SampleAppMovies from './YieronReactNative/Components/List/SampleAppMovies';

const ComponentNavigator = createStackNavigator(
    {
        ComponentRootScreen: {
            screen: ComponentRootScreen
        },
        Welcome: {
            screen: WelcomeScreen
        },
        Setting: {
            screen: SettingsScreen
        },
        AssetExample: {
            screen: AssetExample
        },
        ScreenWithCustomBackBehavior: {
            screen: ScreenWithCustomBackBehavior
        },
        VibrateScreen: {
            screen: VibrateScreen
        },
        LayoutAnimationScreen: {
            screen: LayoutAnimationScreen
        },
        FrameAnimationDemoScreen: {
            screen: FrameAnimationDemoScreen
        },
        flexDemoScreen: {
            screen: flexDemoScreen
        },
        KeyboardDemoScreen: {
            screen: KeyboardDemoScreen
        },
        InteractionManagerDemoScreen: {
            screen: InteractionManagerDemoScreen
        },
        AnimatedDemoScreen: {
            screen: AnimatedDemoScreen
        },
        ClipboardDemoScreen: {
            screen: ClipboardDemoScreen
        },
        BackHandlerDemo: {
            screen: BackHandlerDemo
        },
        AsyncStorageDemo: {
            screen: AsyncStorageDemo
        },
        AppStateDemo: {
            screen: AppStateDemo
        },
        AlertDemoScreen: {
            screen: AlertDemoScreen
        },
        AccessibilityInfoDemo: {
            screen: AccessibilityInfoDemo
        },
        webViewDemo: {
            screen: webViewDemo
        },
        FlatListDemo: {
            screen: FlatListDemo
        },
        SectionListDemo: {
            screen: SectionListDemo
        },
        VirtualizedListDemo: {
            screen: VirtualizedListDemo
        },
        TouchableOpacityDemo: {
            screen: TouchableOpacityDemo
        },
        TextInputDemo: {
            screen: TextInputDemo
        },
        TextDemo: {
            screen: TextDemo
        },
        SliderDemo: {
            screen: SliderDemo
        },
        SegmentedControlIOSDemo: {
            screen: SegmentedControlIOSDemo
        },
        ScrollViewDemo: {
            screen: ScrollViewDemo
        },
        setIntervalDemo: {
            screen: setIntervalDemo
        },
        setTimeoutDemo: {
            screen: setTimeoutDemo
        },
        PickerDemo: {
            screen: PickerDemo
        },
        ModalScreen: {
            screen: ModalScreen
        },
        KeyboardAvoidingViewDemo: {
            screen: KeyboardAvoidingViewDemo
        },
        ActivityIndicatorDemo: {
            screen: ActivityIndicatorDemo
        },
        SampleAppMovies: {
            screen: SampleAppMovies
        }
    },

    //**********************************************************
    //**********************************************************
    // 跨页面共享通用的 navigationOptions
    // 如果界面中配置了，那么界面上的defaultNavigationOptions会覆盖这里的。
    // 优先界面的。
    {
        initialRouteName: "ComponentRootScreen",
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        navigationOptions: {
            tabBarLabel: 'RN组件',
        },
    },

    //**********************************************************
    //**********************************************************
);

const AndroidOnlyNavigator = createStackNavigator(
    {
        AndroidOnlyRootScreen: {
            screen: AndroidOnlyRootScreen
        },
        DrawerLayoutAndroidDemo: {
            screen: DrawerLayoutAndroidDemo
        },
        ProgressBarAndroidDemo: {
            screen: ProgressBarAndroidDemo
        },
        ViewPagerAndroidDemo: {
            screen: ViewPagerAndroidDemo
        },
        TimePickerAndroidScreen: {
            screen: TimePickerAndroidScreen
        },
        ToastAndroidScreen: {
            screen: ToastAndroidScreen
        },
    },
    //**********************************************************
    //**********************************************************
    // 跨页面共享通用的 navigationOptions
    // 如果界面中配置了，那么界面上的defaultNavigationOptions会覆盖这里的。
    // 优先界面的。
    {
        initialRouteName: "AndroidOnlyRootScreen",
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        navigationOptions: {
            tabBarLabel: 'Android平台仅有',
        },
    },

    //**********************************************************
    //**********************************************************
);

const iOSOnlyNavigator = createStackNavigator(
    {
        iOSOnlyRootScreen: {
            screen: iOSOnlyRootScreen
        },
        iphoneXSupport: {
            screen: iphoneXSupportScreen
        },
        DatePickerIOSDemo: {
            screen: DatePickerIOSDemo
        },
        MaskedViewIOSDemo: {
            screen: MaskedViewIOSDemo
        },
        PickerIOSDemo: {
            screen: PickerIOSDemo
        },
        ProgressViewIOSDemo: {
            screen: ProgressViewIOSDemo
        },
        SnapshotViewIOSDemo: {
            screen: SnapshotViewIOSDemo
        },
    },
    //**********************************************************
    //**********************************************************
    // 跨页面共享通用的 navigationOptions
    // 如果界面中配置了，那么界面上的defaultNavigationOptions会覆盖这里的。
    // 优先界面的。
    {
        initialRouteName: "iOSOnlyRootScreen",
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        navigationOptions: {
            tabBarLabel: 'iOS平台独有!',
        },
    },

    //**********************************************************
    //**********************************************************
);

const CustomComponentNavigator = createStackNavigator(
    {
        CustomComponentRootScreen: {
            screen: CustomComponentRootScreen
        },
        RCTGIFViewDemo: {
            screen: RCTGIFViewDemo
        },
        VideoViewDemo: {
            screen: VideoViewDemo
        },
    },
    //**********************************************************
    //**********************************************************
    // 跨页面共享通用的 navigationOptions
    // 如果界面中配置了，那么界面上的defaultNavigationOptions会覆盖这里的。
    // 优先界面的。
    {
        initialRouteName: "CustomComponentRootScreen",
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        navigationOptions: {
            tabBarLabel: 'RN自定义Android组件!',
        },
    },

    //**********************************************************
    //**********************************************************
);


/**
 * 创建一个modal堆栈
 */
const RootStack = createStackNavigator(
    {
        Main: {
            screen: WelcomeScreen,
        },
        MyModal: {
            screen: ModalScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

const TabNavigator = createBottomTabNavigator(
    {
        Yin: ComponentNavigator,
        Dong: AndroidOnlyNavigator,
        Xia: iOSOnlyNavigator,
        Yully: CustomComponentNavigator,
    },
    {
        initialRouteName: "Yin",
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        navigationOptions: {
            tabBarLabel: 'Yin!',
        },
    },
);

const DrawerNavigator = createDrawerNavigator(
    {
        Welcome: WelcomeScreen,
    },
    {
        initialRouteName: "Welcome",
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        navigationOptions: {
            tabBarLabel: 'Home!',
        },
    },
)

const SwitchNavigator = createSwitchNavigator(
    {
        Welcome: WelcomeScreen,
    },
    {
        initialRouteName: "Welcome",
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        navigationOptions: {
            tabBarLabel: 'Home!',
        },
    },
)

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer
            uriPrefix="/app"
            ref={nav => {
                this.navigator = nav;
            }}
        />;
    }
}