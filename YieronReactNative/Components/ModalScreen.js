
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  Platform,
  Button,
  TouchableHighlight,
  Modal,
  Image,
} from 'react-native';
import { withNavigationFocus } from "react-navigation";

const NativeTouchable = Platform.select({
  ios: TouchableHighlight,
  android: TouchableNativeFeedback,
})
class ModalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      mainHeight: 0,
      mainWidth: 0,
    }
  }

  componentWillMount() {
    console.log('YINDONG-componentWillMount');
  }

  render() {
    console.log('YINDONG-render');

    return (
      <View
        style={{ marginTop: 22 }}
        onLayout={({ nativeEvent }) => this.mainViewOnLayout(nativeEvent)}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
          style={{ flex: 1 }}
          hardwareAccelerated={true}
        >
          <View style={{ flex: 1 }}>
            <View>
              <Image source={require("../assets/img/origin_heart.jpeg")} style={{ width: this.state.mainWidth, height: this.state.mainHeight }}></Image>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={()  => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    )
  }

  componentDidMount() {
    console.log('YINDONG-componentDidMount');
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

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  mainViewOnLayout(nativeEvent) {
    console.log('YINDONG_nativeEvent', nativeEvent);

    let mainWidth = nativeEvent.layout.width;
    let mainHeight = nativeEvent.target;
    this.setState({
      mainHeight: mainHeight,
      mainWidth: mainWidth
    })
  }
}

export default withNavigationFocus(ModalScreen);
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