import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class webViewDemo extends Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://github.com/facebook/react-native' }}
                style={{ marginTop: 20 }}
            />
        );
    }
}


//*************************************************************************** 
//*************************************************************************** 

//WebView 创建一个原生的 WebView，可以用于访问一个网页。还可以直接嵌入html代码：

//*************************************************************************** 
//*************************************************************************** 
