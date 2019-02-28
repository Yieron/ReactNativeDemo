import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback,
    Platform,
    Button,
    TouchableHighlight,
    Animated,
    Image,
    Easing,
} from 'react-native';
import { withNavigationFocus } from "react-navigation";

const NativeTouchable = Platform.select({
    ios: TouchableHighlight,
    android: TouchableNativeFeedback,
})
class AnimatedDemoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
            rotateValue: new Animated.Value(0),
            translateValue: new Animated.ValueXY({ x: 0, y: 0 }), // 二维坐标
            fadeOutOpacity: new Animated.Value(0),
        }
    }

    componentWillMount() {
        console.log('YINDONG-componentWillMount');
    }

    render() {
        console.log('YINDONG-render');

        return (
            <View style={{
                flex: 1
            }}>
                <Animated.View // 可选的基本组件类型: Image, Text, View(可以包裹任意子View)
                    style={{
                        flex: 1, alignItems: 'center', justifyContent: 'center',
                        opacity: this.state.fadeOutOpacity,
                        transform: [  // scale, scaleX, scaleY, translateX, translateY, rotate, rotateX, rotateY, rotateZ
                            { scale: this.state.bounceValue },  // 缩放
                            {
                                rotate: this.state.rotateValue.interpolate({ // 旋转，使用插值函数做值映射
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '360deg'],
                                })
                            },
                            { translateX: this.state.translateValue.x }, // x轴移动
                            { translateY: this.state.translateValue.y }, // y轴移动
                        ],
                    }}>

                    <Image source={{ uri: 'https://i.imgur.com/XMKOH81.jpg' }}
                        style={{ width: 400, height: 400 }} />
                </Animated.View >
            </View>
        );
    }

    componentDidMount() {
        console.log('YINDONG-componentDidMount');
        this.startAnimation();
    }

    componentWillReceiveProps(nextProps) {
        console.log('YINDONG-componentWIllReceiveProps', nextProps);

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('YINDONG-shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentWillUpdate() {
        console.log('YINDONG-componentWillUpdate');

    }

    //在componentWillUpdate()和componentDidUpdate()方法中间，会执行render()，重新渲染界面

    componentDidUpdate() {
        console.log('YINDONG-componentDidUpdate');
        // if (prevProps.isFocused !== this.props.isFocused) {
        //     // Use the `this.props.isFocused` boolean
        //     // Call any action
        // }
    }

    componentWillUnmount() {
        console.log('YINDONG-componentWillUnmount');

    }

    startAnimation() {
        this.state.bounceValue.setValue(1.5);     // 设置一个较大的初始值
        this.state.rotateValue.setValue(0);
        this.state.translateValue.setValue({ x: 0, y: 0 });
        this.state.fadeOutOpacity.setValue(1);

        Animated.sequence(
            [
                Animated.sequence([  //  组合动画 parallel（同时执行）、sequence（顺序执行）、stagger（错峰，其实就是插入了delay的parrllel）和delay（延迟）
                    Animated.spring( //  基础的单次弹跳物理模型
                        this.state.bounceValue,
                        {
                            toValue: 0.8,
                            friction: 1, // 摩擦力，默认为7.
                            tension: 40, // 张力，默认40。
                        }
                    ),
                    Animated.delay(2000), // 配合sequence，延迟2秒
                    Animated.timing( // 从时间范围映射到渐变的值。
                        this.state.rotateValue,
                        {
                            toValue: 1,
                            duration: 800, // 动画持续的时间（单位是毫秒），默认为500
                            easing: Easing.out(Easing.quad), // 一个用于定义曲线的渐变函数
                            delay: 0, // 在一段时间之后开始动画（单位是毫秒），默认为0。
                        }
                    ),
                    Animated.decay( // 以一个初始速度开始并且逐渐减慢停止。  S=vt-（at^2）/2   v=v - at
                        this.state.translateValue,
                        {
                            velocity: 10, // 起始速度，必填参数。
                            deceleration: 0.8, // 速度衰减比例，默认为0.997。
                        }
                    ),

                ]),
                Animated.timing(
                    this.state.fadeOutOpacity,
                    {
                        toValue: 0,
                        duration: 2000,
                        easing: Easing.linear, // 线性的渐变函数
                    }
                ),
            ]
        ).start(() => this.startAnimation()); // 循环执行动画

        // 监听值的变化
        this.state.rotateValue.addListener((state) => {
            console.log("rotateValue=>" + state.value);
        });

        // ValueXY
        this.state.translateValue.addListener((value) => {
            console.log("translateValue=>x:" + value.x + " y:" + value.y);
        });

        this.state.fadeOutOpacity.addListener((state) => {
            console.log("fadeOutOpacity=>" + state.value);
        });
    }
}

export default withNavigationFocus(AnimatedDemoScreen);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    separator: {
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    wrapper: {
        ...StyleSheet.absoluteFill,
        top: 10,
        backgroundColor: 'transparent',
    },
});