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
import { ScrollView } from 'react-native-gesture-handler';

const NativeTouchable = Platform.select({
    ios: TouchableHighlight,
    android: TouchableNativeFeedback,
})
const arr = []
for (var i = 0; i < 500; i++) {
    arr.push(i)
}
class AnimatedDemoScreen extends Component {
    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0)
        this.animatedValue = new Animated.Value(0)
        this.springValue = new Animated.Value(0.3)
        this.animatedValue2 = []
        arr.forEach((value) => {
            this.animatedValue2[value] = new Animated.Value(0)
        })
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
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300]
        })
        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0]
        })
        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 300, 0]
        })
        const textSize = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [18, 32, 18]
        })
        const rotateX = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '180deg', '0deg']
        })
        const animations = arr.map((a, i) => {
            return <Animated.View key={i} style={{ opacity: this.animatedValue2[a], height: 20, width: 20, backgroundColor: 'red', marginLeft: 3, marginTop: 3 }} />
        })
        return (
            <ScrollView>
                <View style={styles.container}>
                    {animations}

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
                    <Animated.Image
                        style={{
                            width: 297,
                            height: 270,
                            alignItems: 'center', justifyContent: 'center',
                            transform: [{ rotate: spin }]
                        }}
                        source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
                    />
                    <Animated.View
                        style={{
                            marginLeft,
                            height: 30,
                            width: 40,
                            backgroundColor: 'red'
                        }} />
                    <Animated.View
                        style={{
                            opacity,
                            marginTop: 10,
                            height: 30,
                            width: 40,
                            backgroundColor: 'blue'
                        }} />
                    <Animated.View
                        style={{
                            marginLeft: movingMargin,
                            marginTop: 10,
                            height: 30,
                            width: 40,
                            backgroundColor: 'orange'
                        }} />
                    <Animated.Text
                        style={{
                            fontSize: textSize,
                            marginTop: 10,
                            color: 'green'
                        }} >
                        Animated Text!
                </Animated.Text>
                    <Animated.View
                        style={{
                            transform: [{ rotateX }],
                            marginTop: 50,
                            height: 30,
                            width: 40,
                            backgroundColor: 'black'
                        }}>
                        <Text style={{ color: 'white' }}>Hello from TransformX</Text>
                    </Animated.View>
                    <Text style={{ marginBottom: 100 }} onPress={this.spring.bind(this)}>Spring</Text>
                    <Animated.Image
                        style={{ width: 227, height: 200, transform: [{ scale: this.springValue }] }}
                        source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }} />
                </View>
            </ScrollView>
        );
    }

    componentDidMount() {
        console.log('YINDONG-componentDidMount');
        this.spin();
        this.startAnimation();
        this.animate();
        this.animate2();
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

    spin() {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }

    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => this.animate())
    }

    spring() {
        this.springValue.setValue(0.3)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1,
                tension: 1
            }
        ).start()
    }
    animate2() {
        const animations = arr.map((item) => {
            return Animated.timing(
                this.animatedValue2[item],
                {
                    toValue: 1,
                    duration: 50
                }
            )
        })
        Animated.sequence(animations).start()
    }
}

export default withNavigationFocus(AnimatedDemoScreen);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
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