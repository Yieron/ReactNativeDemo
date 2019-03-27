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

export default class ComponentRootScreen extends React.Component {
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
                                this.props.navigation.push('Welcome', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="Go to Welcome navigate"
                            onPress={() => {
                                console.log('YINDONG:navigate')
                                this.props.navigation.navigate('Welcome', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="Show Modal"
                            onPress={() => {
                                console.log('YINDONG:showModal')
                                this.props.navigation.push('MyModal', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="FrameAnimationDemoScreen"
                            onPress={() => {
                                console.log('YINDONG:FrameAnimationDemoScreen')
                                this.props.navigation.navigate('FrameAnimationDemoScreen', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="flexDemoScreen"
                            onPress={() => {
                                console.log('YINDONG:flexDemoScreen')
                                this.props.navigation.navigate('flexDemoScreen', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="KeyboardDemoScreen"
                            onPress={() => {
                                console.log('YINDONG:KeyboardDemoScreen')
                                this.props.navigation.navigate('KeyboardDemoScreen', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="InteractionManagerDemoScreen"
                            onPress={() => {
                                console.log('YINDONG:InteractionManagerDemoScreen')
                                this.props.navigation.navigate('InteractionManagerDemoScreen', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="AnimatedDemoScreen"
                            onPress={() => {
                                console.log('YINDONG:AnimatedDemoScreen')
                                this.props.navigation.navigate('AnimatedDemoScreen', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="ClipboardDemoScreen"
                            onPress={() => {
                                console.log('YINDONG:ClipboardDemoScreen')
                                this.props.navigation.navigate('ClipboardDemoScreen', { /* params go here */ })
                            }}
                        />

                        <Button
                            title="AppStateDemo"
                            onPress={() => {
                                console.log('YINDONG:AppStateDemo')
                                this.props.navigation.navigate('AppStateDemo', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="AlertDemoScreen"
                            onPress={() => {
                                console.log('YINDONG:AlertDemoScreen')
                                this.props.navigation.navigate('AlertDemoScreen', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="AccessibilityInfoDemo"
                            onPress={() => {
                                console.log('YINDONG:AccessibilityInfoDemo')
                                this.props.navigation.navigate('AccessibilityInfoDemo', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="webViewDemo"
                            onPress={() => {
                                console.log('YINDONG:webViewDemo')
                                this.props.navigation.navigate('webViewDemo', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="VirtualizedListDemo"
                            onPress={() => {
                                console.log('YINDONG:VirtualizedListDemo')
                                this.props.navigation.navigate('VirtualizedListDemo', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="SectionListDemo"
                            onPress={() => {
                                console.log('YINDONG:SectionListDemo')
                                this.props.navigation.navigate('SectionListDemo', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="FlatListDemo"
                            onPress={() => {
                                console.log('YINDONG:FlatListDemo')
                                this.props.navigation.navigate('FlatListDemo', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="TouchableOpacityDemo"
                            onPress={() => {
                                console.log('YINDONG:TouchableOpacityDemo')
                                this.props.navigation.navigate('TouchableOpacityDemo', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="TextInputDemo"
                            onPress={() => {
                                console.log('YINDONG:TextInputDemo')
                                this.props.navigation.navigate('TextInputDemo', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="TextDemo"
                            onPress={() => {
                                console.log('YINDONG:TextDemo')
                                this.props.navigation.navigate('TextDemo', {
                                    /* params go here */
                                    count:"TextDemo"
                                })
                            }}
                        />
                        <Button
                            title="SliderDemo"
                            onPress={() => {
                                console.log('YINDONG:SliderDemo')
                                this.props.navigation.navigate('SliderDemo', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="ScrollViewDemo"
                            onPress={() => {
                                console.log('YINDONG:ScrollViewDemo')
                                this.props.navigation.navigate('ScrollViewDemo', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="setTimeoutDemo"
                            onPress={() => {
                                console.log('YINDONG:setTimeoutDemo')
                                this.props.navigation.navigate('setTimeoutDemo', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="setIntervalDemo"
                            onPress={() => {
                                console.log('YINDONG:setIntervalDemo')
                                this.props.navigation.navigate('setIntervalDemo', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="PickerDemo"
                            onPress={() => {
                                console.log('YINDONG:PickerDemo')
                                this.props.navigation.navigate('PickerDemo', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="ModalScreen"
                            onPress={() => {
                                console.log('YINDONG:ModalScreen')
                                this.props.navigation.navigate('ModalScreen', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="KeyboardAvoidingViewDemo"
                            onPress={() => {
                                console.log('YINDONG:KeyboardAvoidingViewDemo')
                                this.props.navigation.navigate('KeyboardAvoidingViewDemo', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="ActivityIndicatorDemo"
                            onPress={() => {
                                console.log('YINDONG:ActivityIndicatorDemo')
                                this.props.navigation.navigate('ActivityIndicatorDemo', { /* params go here */ })
                            }}
                        />
                        <Button
                            title="SampleAppMovies"
                            onPress={() => {
                                console.log('YINDONG:SampleAppMovies')
                                this.props.navigation.navigate('SampleAppMovies', { /* params go here */ })
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