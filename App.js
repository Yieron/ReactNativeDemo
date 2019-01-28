import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import HomeScreen from './YieronReactNative/Components/HomeScreen';
import WelcomeScreen from './YieronReactNative/Components/WelcomeScreen';
import ModalScreen from './YieronReactNative/Components/ModalScreen';

const AppNavigator = createStackNavigator(
    {
        //路由的唯一必需配置项是screen（此项设置一个组件）
        Home: {
            screen: HomeScreen
        },
        Welcome: {
            screen: WelcomeScreen
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
        Settings: WelcomeScreen,
        Home: HomeScreen,
    }
);

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