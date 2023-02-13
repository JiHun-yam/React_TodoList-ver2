const initialState = [
    {
        id: 1,
        title: "리액트 강의보기",
        body: "챕터 1부터 챕터 12까지 학습",
        isDone: false
    },
    {
        id: 2,
        title: "점심 먹기",
        body: "점심 뭐먹지..?",
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
        title: title,
        body: body,
    };
};

export const delete_to = (id) => {
    return {
        type: DELETE_TO,
        id,
    }
}


export const update_to = (id) => {
    return {
        type: UPDATE_TO,
        id,
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
            return state.filter((list) => list.id !== action.id);
        case UPDATE_TO:
            return
        // 기본값
        default:
            return state;
    }
}


export default todos