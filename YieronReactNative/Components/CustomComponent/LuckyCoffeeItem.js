import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';

class LuckyCoffeeItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imageStyle} source={require('../../assets/img/origin_heart.jpeg')} />
                <View style={styles.detail}>
                    <Text style={styles.titleStyle}>{this.props.textValue}</Text>
                    <Text style={styles.contributeStyle}>{this.props.textValue}</Text>
                    <View style={styles.money}>
                        <Text style={styles.moneyStyle}>300</Text>
                        <Image style={styles.buyStyle} source={require('../../assets/img/origin_heart.jpeg')}></Image>
                    </View>
                </View>
            </View>
        )
    }
}

export default LuckyCoffeeItem;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    imageStyle: {
        width: 60,
        height: 60,
    },
    buyStyle: {
        width: 20,
        height: 20,
    },
    titleStyle: {
        fontSize: 20,
        color: 'black'
    },
    contributeStyle: {
        fontSize: 16,
    },
    moneyStyle: {
        fontSize: 14,
        color: 'red',
    },
    detail: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    money: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})