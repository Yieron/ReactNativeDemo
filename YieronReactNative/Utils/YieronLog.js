/**
 * 封装log
 * 原则：在开发环境下，开启log,在测试和正式环境上关闭log
 */
import { YieronGlobal } from './YieronGlobal';

export default class YieronLog {
    static log(tag, ...object) {
        /**
         * 在Global中控制是否显示Log
         * 开发环境下，显示log
         * 正式和线上环境，不显示log
         */
        if (YieronGlobal.showLog == true) {
            console.log(tag, object);
        } else {

        }
    }
}