/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import index from './YieronReactNative/store/index';
import SomeTaskName from './YieronReactNative/service/SomeTaskName';

AppRegistry.registerHeadlessTask("SomeTaskName", () => { SomeTaskName() })
AppRegistry.registerComponent(appName, () => App);

