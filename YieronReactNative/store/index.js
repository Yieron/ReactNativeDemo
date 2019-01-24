import React, { Component } from 'react';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from '../action/actions';
import { createStore } from 'redux';
import todoApp from '../reducers/index';
import {
  View,
  Text,
} from 'react-native';

//*****************************************************************************
//*****************************************************************************

/**
 * Store 就是把它们联系到一起的对象。
 * Store 有以下职责：
 * 维持应用的 state；
 * 提供 getState() 方法获取 state；
 * 提供 dispatch(action) 方法更新 state；
 * 通过 subscribe(listener) 注册监听器;
 * 通过 subscribe(listener) 返回的函数注销监听器。
 * Redux 应用只有一个单一的 store。
 */

//*****************************************************************************
//*****************************************************************************

let store = createStore(todoApp);

// 打印初始状态
console.log(store.getState());

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// 发起一系列 action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// 停止监听 state 更新
unsubscribe();
export default class index extends Component {
  render() {
    return (
      <View>
        <Text>学习Store</Text>
      </View>
    )
  }
}



//*****************************************************************************
//*****************************************************************************

/**
 * redux数据流
 * Redux 应用中数据的生命周期遵循下面 4 个步骤：
 * 1：调用 store.dispatch(action)
 * 2：Redux store 调用传入的 reducer 函数
 * 3：根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树
 * 4：Redux store 保存了根 reducer 返回的完整 state 树
 */

//*****************************************************************************
//*****************************************************************************
