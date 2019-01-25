import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import HomeScreen from './YieronReactNative/Components/HomeScreen';
import WelcomeScreen from './YieronReactNative/Components/WelcomeScreen';

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
    {
        initialRouteName: "Home"
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

        return <AppContainer />;
    }
}