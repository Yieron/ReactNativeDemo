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
  TouchableOpacity,
} from 'react-native';
import codePush from "react-native-code-push";

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

export default class App extends Component<Props> {
  componentWillMount() {

  }

  checkUpdateCodePush = () => {
    console.log('YINDONG');
    codePush.notifyApplicationReady();

    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
      mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
      deploymentKey: deploymentStagingKey,
    });
  };

  render() {
    return (
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

      </View>
    );
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
