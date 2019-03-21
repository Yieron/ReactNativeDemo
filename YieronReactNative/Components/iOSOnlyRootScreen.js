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

export default class iOSOnlyRootScreen extends React.Component {
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
                            title="Go to iphoneXSupportScreen navigate"
                            onPress={() => {
                                console.log('YINDONG:navigate')
                                this.props.navigation.navigate('iphoneXSupport')
                            }}
                        />
                        <Button
                            title="SnapshotViewIOSDemo"
                            onPress={() => {
                                console.log('YINDONG:SnapshotViewIOSDemo')
                                this.props.navigation.navigate('SnapshotViewIOSDemo')
                            }}
                        />
                        <Button
                            title="SegmentedControlIOSDemo"
                            onPress={() => {
                                console.log('YINDONG:SegmentedControlIOSDemo')
                                this.props.navigation.navigate('SegmentedControlIOSDemo')
                            }}
                        />
                        <Button
                            title="ProgressViewIOSDemo"
                            onPress={() => {
                                console.log('YINDONG:ProgressViewIOSDemo')
                                this.props.navigation.navigate('ProgressViewIOSDemo')
                            }}
                        />
                        <Button
                            title="PickerIOSDemo"
                            onPress={() => {
                                console.log('YINDONG:PickerIOSDemo')
                                this.props.navigation.navigate('PickerIOSDemo')
                            }}
                        />
                        <Button
                            title="MaskedViewIOSDemo"
                            onPress={() => {
                                console.log('YINDONG:MaskedViewIOSDemo')
                                this.props.navigation.navigate('MaskedViewIOSDemo')
                            }}
                        />
                        <Button
                            title="DatePickerIOSDemo"
                            onPress={() => {
                                console.log('YINDONG:DatePickerIOSDemo')
                                this.props.navigation.navigate('DatePickerIOSDemo')
                            }}
                        />
                        <Button
                            title="ActivityIndicatorDemo"
                            onPress={() => {
                                console.log('YINDONG:ActivityIndicatorDemo')
                                this.props.navigation.navigate('ActivityIndicatorDemo')
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