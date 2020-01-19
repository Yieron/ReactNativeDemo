import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from '../../reducers/gunReducer';
import {login,logout} from '../../reducers/authReducer';

// 获取 state 变化
const mapStateToProps = (state) => {
    return {
        num: state.counter,//counter这个reducer中只有一个变量，可以直接赋值。
        isAuth:state.auth.isAuth//redux中有两个reducer,auth这个reducer中又包含两个state:isAuth和user。
    }
}
// // 发送行为
const mapDispatchToProps = ({
    addGun: addGun,
    removeGun: removeGun,
    addGunAsync: addGunAsync,
    login:login,
    logout:logout
});

class reduxRootScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={styles.container}>
            <Text>reduxRootScreen</Text>
        </View>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxRootScreen);
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})