import todos from '../modules/todos'
import { createStore } from 'redux'
import { combineReducers } from 'redux'

// 파라미터안에는 객체형태로 키 값으로 들어간다 
const rootReducer = combineReducers({
    todos: todos,
})

const store = createStore(rootReducer)


export default store;