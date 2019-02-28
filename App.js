import React from "react";
import { View, Text } from "react-native";
import {
    createStackNavigator, createAppContainer, createBottomTabNavigator,
    createDrawerNavigator, createSwitchNavigator
} from "react-navigation";
import HomeScreen from './YieronReactNative/Components/HomeScreen';
import WelcomeScreen from './YieronReactNative/Components/WelcomeScreen';
import ModalScreen from './YieronReactNative/Components/ModalScreen';
import SettingsScreen from './YieronReactNative/Components/SettingsScreen';
import iphoneXSupportScreen from './YieronReactNative/Components/iphoneXSupportScreen';
import AssetExample from './YieronReactNative/Components/AssetExample';
import ScreenWithCustomBackBehavior from './YieronReactNative/Components/ScreenWithCustomBackBehavior';
import VibrateScreen from './YieronReactNative/Components/VibrateScreen';
import ToastAndroidScreen from './YieronReactNative/Components/ToastAndroidScreen';
import TimePickerAndroidScreen from './YieronReactNative/Components/picker/TimePickerAndroidScreen';
import LayoutAnimationScreen from './YieronReactNative/Components/animation/LayoutAnimationScreen';
import FrameAnimationDemoScreen from './YieronReactNative/Components/animation/FrameAnimationDemoScreen';
const AppNavigator = createStackNavigator(
    {
        //路由的唯一必需配置项是screen（此项设置一个组件）
        Home: {
            screen: HomeScreen
        },
        Welcome: {
            screen: WelcomeScreen
        },
        Setting: {
            screen: SettingsScreen
        },
        iphoneXSupport: {
            screen: iphoneXSupportScreen
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
        ToastAndroidScreen: {
            screen: ToastAndroidScreen
        },
        TimePickerAndroidScreen: {
            screen: TimePickerAndroidScreen
        },
        LayoutAnimationScreen: {
            screen: LayoutAnimationScreen
        },
        FrameAnimationDemoScreen: {
            screen: FrameAnimationDemoScreen
        }
    },

    //**********************************************************
    //**********************************************************
    // 跨页面共享通用的 navigationOptions
    // 如果界面中配置了，那么界面上的defaultNavigationOptions会覆盖这里的。
    // 优先界面的。
    {
        initialRouteName: "Home",
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

    //**********************************************************
    //**********************************************************
);

/**
 * 创建一个modal堆栈
 */
const RootStack = createStackNavigator(
    {
        Main: {
            screen: AppNavigator,
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
        Welcome: WelcomeScreen,
        Home: HomeScreen,
    },
    {
        initialRouteName: "Home",
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
);

const DrawerNavigator = createDrawerNavigator(
    {
        Welcome: WelcomeScreen,
        Home: HomeScreen,
    },
    {
        initialRouteName: "Home",
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
        Home: HomeScreen,
    },
    {
        initialRouteName: "Home",
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

const AppContainer = createAppContainer(AppNavigator);

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