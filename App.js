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
        console.log('YINDONG:AppContainer', AppContainer);
        console.log('YINDONG:AppNavigator', AppNavigator);
        console.log('YINDONG:TabNavigator', TabNavigator);

        return <AppContainer
            uriPrefix="/app"
            ref={nav => {
                this.navigator = nav;
            }}
        />;
    }
}