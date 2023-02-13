const initialState = [
    {
        id: 0,
        title: "부자 되기",
        body: "로또당첨기원 5000일차",
        isDone: false
    },
    {
        id: 1,
        title: "집에 가고싶다",
        body: "집에보내조",
        isDone: true
    }
];

const ADD_TO = 'main/ADD_TO';
const DELETE_TO = 'main/DELETE_TODO';
const UPDATE_TO = 'main/UPDATE_TO';

// 받을것들 인자로 받기
export const add_to = (title, body) => {
    return {
        type: ADD_TO,
        title,
        body,
    };
};

export const delete_to = (payload) => {
    return {
        type: DELETE_TO,
        payload,
    }
}


export const update_to = (payload) => {
    return {
        type: UPDATE_TO,
        payload,
    }
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO:
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.title,
                    body: action.body,
                    isDone: false
                }
            ];
        case DELETE_TO:
            return state.filter((list) => list.id !== action.payload);

        case UPDATE_TO:
            return state.map((list) => (list.id === action.payload.id ? { ...list, isDone: !action.payload.isDone } : list));
        // 기본값
        default:
            return state;
    }
}


export default todos