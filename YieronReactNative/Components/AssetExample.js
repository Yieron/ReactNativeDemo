import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, Linking, Platform, AlertIOS } from 'react-native';

export default class AssetExample extends Component {
    componentDidMount() {
        Linking.getInitialURL().then((url) => {
            //url == null
            if (url) {
                //可以根据url写跳转到相应的页面的逻辑和参数
                console.log('Initial url is: ' + url);
            }
        }).catch(err => console.error('An error occurred', err));

        // Linking.openURL(url).catch(err => console.error('An error occurred', err));

        AlertIOS.alert(
            "Update available",
            "Keep your app up to date to enjoy the latest features",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Install",
                    onPress: () => {
                        let url;
                        Platform.OS === 'ios' ? url = "https://github.com/xiehui999" : url = "tel:1008611";
                        Linking.openURL('app-settings:').catch(err => console.log('error', err)); //iOS端打开APP的系统设置界面
                    }
                }
            ]
        );
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.paragraph}>
                        Local files and assets can be imported by dragging and dropping them into the editor
                    </Text>
                    <Image style={styles.logo} source={require("../assets/img/origin_heart.jpeg")} />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    paragraph: {
        margin: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    logo: {
        backgroundColor: "#056ecf",
        height: 228,
        width: 228,
    }
});
