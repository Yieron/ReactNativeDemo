import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, Linking, Platform } from 'react-native';

export default class AssetExample extends Component {
    componentDidMount() {
        Linking.getInitialURL().then((url) => {
            //url == null
            if (url) {
                //可以根据url写跳转到相应的页面的逻辑和参数
                console.log('Initial url is: ' + url);
            }
        }).catch(err => console.error('An error occurred', err));

        let url;
        Platform.OS === 'ios' ? url = "https://github.com/xiehui999" : url = "tel:1008611";
        
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
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
