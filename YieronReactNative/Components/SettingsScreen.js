import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons';

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator(
    {
        Settings:
        {
            screen: SettingsScreen
        }
        //YINDTODO
        //在这里添加新的tab选项
    },
    /**
     * tabBarIcon是navigationOptions上的一个属性，
     * 所以我们知道我们可以在我们的页面上使用它，
     * 但在这种情况下，选择将它放在createBottomTabNavigator的配置中，是为了方便集中配置图标。
     * tabBarIcon 是一个给定focused state、tintColor和 horizontal 等参数的函数 
     * 如果你在配置中进一步查看，您将看到tabBarOptions、activeTintColor和inactiveTintColor。 
     * 这些默认为 iOS 平台的默认值，但您可以在这里更改它们。
     *  传递给tabBarIcon的tintColor取决于focused这个 state 
     * （判断该 Tab 是否获得了焦点），可以是活动，也可以是非活动状态。 
     * 当设备处于横屏时，horizontal 是 true；否则就是false。
     */
    // {
    //     defaultNavigationOptions: ({ navigation }) => ({
    //         tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //             const { routeName } = navigation.state;
    //             let iconName;
    //             if (routeName === 'Home') {
    //                 iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //             } else if (routeName === 'Settings') {
    //                 iconName = `ios-options${focused ? '' : '-outline'}`;
    //             }

    //             // You can return any component that you like here! We usually use an
    //             // icon component from react-native-vector-icons
    //             return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    //         },
    //     }),
    //     tabBarOptions: {
    //         activeTintColor: 'tomato',
    //         inactiveTintColor: 'gray',
    //     },
    // }
);

export default createAppContainer(TabNavigator);

