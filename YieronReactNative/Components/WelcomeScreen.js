/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * 此为项目的初始状态
 * 2019.1.8
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
  TouchableOpacity, TouchableNativeFeedback, TouchableHighlight,
  NativeModules, DeviceEventEmitter, ToastAndroid, Button,
} from 'react-native';
import codePush from "react-native-code-push";
import { createStore } from 'redux';
import { SafeAreaView } from 'react-navigation';

const Touch = Platform.select({
  ios: TouchableHighlight,
  android: TouchableNativeFeedback,
})

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const deploymentStagingKey = Platform.select({
  ios: 'chmiVoyvC_u96KdsfYc-5Bw2x4bq4a24f70d-accd-4d8a-8209-ae5e2e68a948',
  android: 'ZPE_RQiwfQUAJipupv_AHoU-yhB64a24f70d-accd-4d8a-8209-ae5e2e68a948',
})

const deploymentProductionKey = Platform.select({
  ios: 'hms4KFZxXIE39lFjdW3vsYMpvue24a24f70d-accd-4d8a-8209-ae5e2e68a948',
  android: '_w-Jxi7v2M4y_Cfz3NItAZkwPbdf4a24f70d-accd-4d8a-8209-ae5e2e68a948',
})
type Props = {};

export default class WelcomeScreen extends Component<Props> {

  /**
   * 反转传入的背景和色彩
   * 白色字体红色背景 ----> 反转成 ----> 红色字体白色背景
   */
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  componentWillMount() {
    DeviceEventEmitter.addListener('YieronEventName',
      (dataToRN) => {
        console.log("接收到通知YieronEventName:", dataToRN);
      });

    function counter(state = 0, action) {
      switch (action.type) {
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
        default:
          return state;
      }
    }
    let store = createStore(counter);
    console.log('YINDONG_store', store);
    store.subscribe(() =>
      console.log('YINDONG1', store.getState())
    );
    store.dispatch({ type: 'INCREMENT' });
    store.subscribe(() =>
      console.log('YINDONG2', store.getState())
    );
    store.dispatch({ type: 'INCREMENT' });
    store.subscribe(() =>
      console.log('YINDONG3', store.getState())
    );
    store.dispatch({ type: 'INCREMENT' });
    store.subscribe(() =>
      console.log('YINDONG4', store.getState())
    );
    store.dispatch({ type: 'INCREMENT' });
    store.subscribe(() =>
      console.log('YINDONG5', store.getState())
    );
    store.dispatch({ type: 'INCREMENT' });
    store.subscribe(() =>
      console.log('YINDONG6', store.getState())
    );
  }

  checkUpdateCodePush = () => {
    codePush.notifyApplicationReady();

    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
      mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
      deploymentKey: deploymentStagingKey,
    });
  };

  showToast = () => {
    NativeModules.ToastModule.rnCallNativeShowToast('RN与安卓混合开发');
  };

  showToastPromise = () => {
    NativeModules.ToastModule.rnCallNative_promise('promise方式RN与Android混合开发')
      .then(
        (msg) => {
          console.log('promise收到消息:' + msg);
        }
      ).catch(
        (err) => {
          console.log(err);
        }
      )
  };

  measureLayout = () => {
    NativeModules.ToastModule.measureLayout(
      (msg) => {
        console.log('YINDONG_msg', msg);
      },
      (x, y, width, height) => {
        console.log('x坐标:' + x + 'y坐标:' + y + '高:' + height + '宽' + width);
      })
  };

  /**
    * Callback 通信方式
    */
  callbackComm(msg) {
    NativeModules.ToastModule.rnCallNativeFromCallback(msg, (result) => {
      ToastAndroid.show("CallBack收到消息:" + result, ToastAndroid.SHORT);
    })
  }

  /**
  * Promise 通信方式
  */
  promiseComm(msg) {
    NativeModules.ToastModule.rnCallNativeFromPromise(msg).then(
      (result) => {
        ToastAndroid.show("Promise收到消息:" + result, ToastAndroid.SHORT)
      }
    ).catch((error) => { console.log(error) });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>This is my first codepush!</Text>
          <TouchableOpacity onPress={this.checkUpdateCodePush}>
            <Text style={styles.instructions}>
              点击这里检查更新CodePush
          </Text>
          </TouchableOpacity>
          <Text style={styles.instructions}>{instructions}</Text>
          <Touch onPress={this.showToast}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <Text style={styles.instructions}>
              点击这里显示Toast
          </Text>
          </Touch>
          <Touch onPress={this.showToastPromise}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <Text style={styles.instructions}>
              点击这里显示Toast__Promise
          </Text>
          </Touch>
          <Touch onPress={this.measureLayout}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <Text style={styles.instructions}>
              点击测量measureLayout
          </Text>
          </Touch>
          <TouchableOpacity onPress={() => {
            NativeModules.TakePhotoModule.selectPhoto();
          }}>
            <Text style={styles.welcome}>
              跳转到原生拍照或相册
            </Text>
          </TouchableOpacity>

          <Text style={styles.welcome} onPress={this.callbackComm.bind(this, '你好啊，android')}>
            Callback通信方式
          </Text>
          <Text style={styles.welcome} onPress={this.promiseComm.bind(this, '你好啊，android')}>
            Promise通信方式
          </Text>

          <Button
            title="Update the title"
            onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
          />

          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.push('Home')}
          />
        </View>
      </SafeAreaView>

    );
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeListener();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
