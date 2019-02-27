import { NetInfo } from 'react-native';

export default class YieronNetWorkUtil {
    //在所有平台上可用。以异步方式获取一个布尔值，用于判断当前设备是否联网。
    static YieronNetWorkUtil() {
        NetInfo.isConnected.fetch().then(isConnected => {
            console.log('First, is ' + (isConnected ? 'online' : 'offline'));
        });
        function handleFirstConnectivityChange(isConnected) {
            console.log('Then, is ' + (isConnected ? 'online' : 'offline'));
            NetInfo.isConnected.removeEventListener(
                'connectionChange',
                handleFirstConnectivityChange
            );
        }
        NetInfo.isConnected.addEventListener(
            'connectionChange',
            handleFirstConnectivityChange
        );

        NetInfo.isConnectionExpensive()
            .then(isConnectionExpensive => {
                console.log('Connection is ' + (isConnectionExpensive ? 'Expensive' : 'Not Expensive'));
            })
            .catch(error => {
                console.error(error);
            });

        NetInfo.getConnectionInfo().then((connectionInfo) => {
            console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
        });
        function handleFirstConnectivityChange(connectionInfo) {
            console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
            NetInfo.removeEventListener(
                'connectionChange',
                handleFirstConnectivityChange
            );
        }
        NetInfo.addEventListener(
            'connectionChange',
            handleFirstConnectivityChange
        );
    }
}