import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from '../../reducers/gunReducer';
import { login, logout } from '../../reducers/authReducer';

// 获取 state 变化
const mapStateToProps = (state) => {
    return {
        num: state.counter,//counter这个reducer中只有一个变量，可以直接赋值。
        isAuth: state.auth.isAuth//redux中有两个reducer,auth这个reducer中又包含两个state:isAuth和user。
    }
}
// 发送行为
const mapDispatchToProps = ({
    addGun: addGun,
    removeGun: removeGun,
    addGunAsync: addGunAsync,
    login: login,
    logout: logout
});

class reduxRootScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F5FCFF',
            }}>
                {this.props.isAuth ? this._independentView() : this._loginView()}
            </View>
        );
    }

    _independentView() {
        return (
            <View>
                <Text style={{
                    fontSize: 36,
                    textAlign: 'center',
                    margin: 10,
                }}>
                    独立团
                </Text>
                <Text style={{ fontSize: 24 }}>现在有机枪{this.props.num}把</Text>
                <TouchableOpacity style={{ marginTop: 36 }} onPress={this.props.addGun}>
                    <Text style={{ fontSize: 24, alignSelf: 'center', marginTop: 8 }}>申请武器</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.removeGun}>
                    <Text style={{ fontSize: 24, alignSelf: 'center', marginTop: 8 }}>上交武器</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.addGunAsync}>
                    <Text style={{ fontSize: 24, alignSelf: 'center', marginTop: 8 }}>拖两天再给武器</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 36 }} onPress={this.props.logout}>
                    <Text style={{ fontSize: 24, alignSelf: 'center' }}>注销</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _loginView() {
        return (
            <View>
                <Text>你没有权限，需要登录才能看</Text>
                <TouchableOpacity
                    onPress={
                        this.props.login
                    }
                >
                    <Text style={{ fontSize: 24, alignSelf: 'center', marginTop: 36 }}>登录</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxRootScreen);
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})