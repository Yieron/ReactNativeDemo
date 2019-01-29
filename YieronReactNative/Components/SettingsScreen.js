import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

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
);

export default createAppContainer(TabNavigator);

