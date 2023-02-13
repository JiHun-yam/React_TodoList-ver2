const ADD_TO = 'home/ADD_TO'


// 받을것들 인자로 받기
export const add_to = (title, body) => {
    return {
        type: ADD_TO,
        title: title,
        body: body,
    };
};



// 초기 상태값 (state)
const initialState = [
    {
        id: 1, // id는 모두 고유값이어야 합니다.
        title: "리액트 강의보기",
        body: "챕터 1부터 챕터 12까지 학습",
        isDone: false
    },
    {
        id: 2, // id는 모두 고유값이어야 합니다.
        title: "점심 먹기",
        body: "점심 뭐먹지..?",
        isDone: true
    }
];



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
            ]
        // 기본값
        default:
            return state;
    }
}


export default todos