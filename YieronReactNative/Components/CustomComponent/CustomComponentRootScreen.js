import React from "react";
import {
    View,
    Text,
    Button,
    Platform,
    TouchableNativeFeedback,
    StyleSheet,
    NativeModules,
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
} from "react-native";
import LogoTitle from "../LogoTitle";

export default class CustomComponentRootScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            // title: 'Home',
            /**
             * 您可以通过navigationOptions中的headerLeft和headerRight属性在标题栏中设置按钮。
             * 后退按钮可以通过headerLeft完全自定义，
             * 但是如果你只想更改标题或图片，
             * 那么还有其他navigationOptions 
             * headerBackTitle，headerTruncatedBackTitle和headerBackImage
             */
            headerTitle: <LogoTitle />,
            headerRight: (
                <Button
                    onPress={() => alert('This is a button!')}
                    title="RNDemo"
                    color={Platform.OS === 'ios' ? '#fff' : null}
                />
            ),
            headerBackTitle: '返回',
            headerTruncatedBackTitle: '',
            tabBarLabel: 'CustomComponentRootScreen!',
        }
    };

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <Button
                            title="RCTGIFViewDemo"
                            onPress={() => {
                                console.log('YINDONG:RCTGIFViewDemo')
                                this.props.navigation.navigate('RCTGIFViewDemo', {
                                    /* params go here */
                                    // increaseCount: 0
                                })
                            }}
                        />
                        <Button
                            title="VideoViewDemo"
                            onPress={() => {
                                console.log('YINDONG:VideoViewDemo')
                                this.props.navigation.navigate('VideoViewDemo', {
                                    /* params go here */
                                    title: 'video'
                                })
                            }}
                        />
                        <Button
                            title="MyBackButtonView"
                            onPress={() => {
                                console.log('YINDONG:MyBackButtonView')
                                this.props.navigation.navigate('MyBackButtonView', {
                                    /* params go here */
                                    title: 'MyBackButtonView'
                                })
                            }}
                        />
                        <Button
                            title="LuckyCoffeeView"
                            onPress={() => {
                                console.log('YINDONG:LuckyCoffeeView')
                                this.props.navigation.navigate('LuckyCoffeeView', {
                                    /* params go here */
                                    title: 'LuckyCoffeeView'
                                })
                            }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
//************************************************************************
//************************************************************************

//React Navigation 生命周期事件
/**
 * React Navigation 将事件发送到订阅了它们的页面组件：
 * 有4个不同的事件可供订阅：willFocus、willBlur、didFocus 和 didBlur
 */

//************************************************************************
//************************************************************************
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});