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
import LogoTitle from "./LogoTitle";

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
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
        }
    };

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <Button
                            title="Go to Welcome push"
                            onPress={() => {
                                console.log('YINDONG:push')
                                this.props.navigation.push('Welcome')
                            }}
                        />
                        <Button
                            title="Go to Welcome navigate"
                            onPress={() => {
                                console.log('YINDONG:navigate')
                                this.props.navigation.navigate('Welcome')
                            }}
                        />
                        <Button
                            title="Show Modal"
                            onPress={() => {
                                console.log('YINDONG:showModal')
                                this.props.navigation.push('MyModal')
                            }}
                        />
                        <Button
                            title="Go to Settings"
                            onPress={() => {
                                console.log('YINDONG:showModal')
                                this.props.navigation.push('Setting')
                            }}
                        />
                        <Button
                            title="Go to iphoneXSupportScreen navigate"
                            onPress={() => {
                                console.log('YINDONG:navigate')
                                this.props.navigation.navigate('iphoneXSupport')
                            }}
                        />
                        <Button
                            title="Go to AssetExample navigate"
                            onPress={() => {
                                console.log('YINDONG:navigate')
                                this.props.navigation.navigate('AssetExample')
                            }}
                        />
                        <Button
                            title="AMAPLocation"
                            onPress={() => {
                                console.log('YINDONG:AMAPLocation')
                                NativeModules.AMAPLocationModule.initLocation();
                            }}
                        />
                        <Button
                            title="TencentLocation"
                            onPress={() => {
                                console.log('YINDONG:TencentLocation')
                                NativeModules.TencentLocationModule.startLocation();
                            }}
                        />
                        <Button
                            title="ScreenWithCustomBackBehavior"
                            onPress={() => {
                                console.log('YINDONG:ScreenWithCustomBackBehavior')
                                this.props.navigation.navigate('ScreenWithCustomBackBehavior')
                            }}
                        />
                        <Button
                            title="VibrateScreen"
                            onPress={() => {
                                console.log('YINDONG:VibrateScreen')
                                this.props.navigation.navigate('VibrateScreen')
                            }}
                        />
                        <Button
                            title="ToastAndroidScreen"
                            onPress={() => {
                                console.log('YINDONG:ToastAndroidScreen')
                                this.props.navigation.navigate('ToastAndroidScreen')
                            }}
                        />
                        <Button
                            title="TimePickerAndroidScreen"
                            onPress={() => {
                                console.log('YINDONG:TimePickerAndroidScreen')
                                this.props.navigation.navigate('TimePickerAndroidScreen')
                            }}
                        />
                        <Button
                            title="LayoutAnimationScreen"
                            onPress={() => {
                                console.log('YINDONG:LayoutAnimationScreen')
                                this.props.navigation.navigate('LayoutAnimationScreen')
                            }}
                        />
                        <Button
                            title="FrameAnimationDemoScreen"
                            onPress={() => {
                                console.log('YINDONG:FrameAnimationDemoScreen')
                                this.props.navigation.navigate('FrameAnimationDemoScreen')
                            }}
                        />
                        <Button
                            title="flexDemoScreen"
                            onPress={() => {
                                console.log('YINDONG:flexDemoScreen')
                                this.props.navigation.navigate('flexDemoScreen')
                            }}
                        />
                        <Button
                            title="KeyboardDemoScreen"
                            onPress={() => {
                                console.log('YINDONG:KeyboardDemoScreen')
                                this.props.navigation.navigate('KeyboardDemoScreen')
                            }}
                        />
                        <Button
                            title="InteractionManagerDemoScreen"
                            onPress={() => {
                                console.log('YINDONG:InteractionManagerDemoScreen')
                                this.props.navigation.navigate('InteractionManagerDemoScreen')
                            }}
                        />
                        <Button
                            title="AnimatedDemoScreen"
                            onPress={() => {
                                console.log('YINDONG:AnimatedDemoScreen')
                                this.props.navigation.navigate('AnimatedDemoScreen')
                            }}
                        />
                        <Button
                            title="ClipboardDemoScreen"
                            onPress={() => {
                                console.log('YINDONG:ClipboardDemoScreen')
                                this.props.navigation.navigate('ClipboardDemoScreen')
                            }}
                        />
                        <Button
                            title="BackHandlerDemo"
                            onPress={() => {
                                console.log('YINDONG:BackHandlerDemo')
                                this.props.navigation.navigate('BackHandlerDemo')
                            }}
                        />
                        <Button
                            title="AsyncStorageDemo"
                            onPress={() => {
                                console.log('YINDONG:AsyncStorageDemo')
                                this.props.navigation.navigate('AsyncStorageDemo')
                            }}
                        />
                        <Button
                            title="AppStateDemo"
                            onPress={() => {
                                console.log('YINDONG:AppStateDemo')
                                this.props.navigation.navigate('AppStateDemo')
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