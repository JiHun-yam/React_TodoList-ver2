

// 초기 상태값 (state)
const initalState = [
    {
        id: 0,
        title: '안녕 안녕 ',
        content: '나는 지훈이야~',
        isDone: false,
    },
];

const todos = (state = initalState, action) => {
    switch (action.type) {
        // 기본값
        default:
            return state;
    }
}


export default todos