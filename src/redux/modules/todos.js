// 초기값
const initialState = [
    {
        id: 0,
        title: '아 집에가고싶다',
        body: '졸려',
        isDone: false
    },
    {
        id: 1,
        title: '프론트엔드 개발자 되기',
        body: '파이팅',
        isDone: true
    }
]

const ADD_TO = 'main/ADD_TO';
const DELETE_TO = 'main/DELETE_TODO';
const UPDATE_TO = 'main/UPDATE_TO';

// InputBox에서 입력된 값 가져오기
export const add_to = (title, body) => {
    return {
        type: ADD_TO,
        title: title,
        body,

    };
};
// payload로 지금 누를거에 Id값만 가져옴
export const delete_to = (payload) => {
    return {
        type: DELETE_TO,
        payload,

    };
};
// payload로 지금누를거 전체값 가져롬
export const update_to = (payload) => {
    return {
        type: UPDATE_TO,
        payload,
    };
};



const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO:
            return [
                ...state,
                {
                    // 가져완 값을 action으로 바인딩 
                    id: Date.now(),
                    title: action.title,
                    body: action.body,
                    isDone: false,
                }

            ];
        case DELETE_TO:
            return state.filter((list) => list.id !== action.payload);
        case UPDATE_TO:
            return state.map((list) => (list.id === action.payload.id ? { ...list, isDone: !action.payload.isDone } : list))
        default:
            return state
    }
}


export default todos