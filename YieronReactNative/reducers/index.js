import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../action/actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

/**
 * combineReducers() 所做的只是生成一个函数，这个函数来调用你的一系列 reducer，
 * 每个 reducer 根据它们的 key 来筛选出 state 中的一部分数据并处理，
 * 然后这个生成的函数再将所有 reducer 的结果合并成一个大的对象。
 */
const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp