//************************************************************************
//************************************************************************

/**
 * Action 是把数据从应用
 * （译者注：这里之所以不叫 view 是因为这些数据有可能是服务器响应，用户输入或其它非 view 的数据 ）
 * 传到 store 的有效载荷。它是 store 数据的唯一来源。
 * 一般来说你会通过 store.dispatch() 将 action 传到 store。
 * Action 本质上是 JavaScript 普通对象。
 * 我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。
 */

//************************************************************************
//************************************************************************

/*
 * 添加新 todo 任务的 action 是这样的：
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * 其它的常量
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 * “action” 和 “action 创建函数” 这两个概念很容易混在一起，使用时最好注意区分。
 * 在 Redux 中的 action 创建函数只是简单的返回一个 action
 */
export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}
