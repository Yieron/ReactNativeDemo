import React, { Component } from 'react';
import {
    requireNativeComponent
} from 'react-native';

let RCTGIFImageView = requireNativeComponent('GIFImageView', RCTGIFView, { nativeOnly: { onClick: true } });
class RCTGIFView extends Component {

    /**
     * 单击事件
     */
    onClick(event) {
        if (this.props.onClick) {
            if (!this.props.onClick) {
                return;
            }
            // 使用event.nativeEvent.msg获取原生层传递的数据
            this.props.onClick(event.nativeEvent.msg);
        }
    }

    render() {
        return <RCTGIFImageView
            {...this.props}
            onClick={(event) => this.onClick(event)} />
    }
}

module.exports = RCTGIFView;