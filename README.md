# 항해99 주특기 숙련 개인과제 


## 폴더구조 
```txt
📦src  
 ┣ 📂components  
 ┃ ┣ 📂Header  
 ┃ ┃ ┗ 📜Header.jsx  
 ┃ ┣ 📂InputBox  
 ┃ ┃ ┗ 📜InputBox.jsx  
 ┃ ┗ 📂List  
 ┃ ┃ ┣ 📂Todo  
 ┃ ┃ ┃ ┗ 📜Todo.jsx  
 ┃ ┃ ┗ 📜List.jsx  
 ┣ 📂pages  
 ┃ ┣ 📜Detail.jsx  
 ┃ ┣ 📜Main.jsx  
 ┃ 
 ┣ 📂redux  
 ┃ ┣ 📂config  
 ┃ ┃ ┗ 📜configStore.js  
 ┃ ┣ 📂modules  
 ┃ ┃ ┗ 📜todos.js  
 ┃ ┗ 📜.DS_Store  
 ┣ 📜.DS_Store  
 ┣ 📜App.css  
 ┣ 📜App.jsx  
 ┣ 📜index.css  
 ┗ 📜index.js
```

## 사진 

![스크린샷 2023-02-15 02 04 14](https://user-images.githubusercontent.com/95469708/218806914-0559b5d2-6a4c-4657-a0f8-c1807795cd05.png)


## 기간
2023.02.13  - 2023.02.14 

## 사용한 기술 



[![](https://img.shields.io/badge/Gir-F05032?style=for-the-badge&logo=Git&logoColor=white)](<![](https://img.shields.io/badge/Gir-F05032?style=for-the-badge&logo=Git&logoColor=white)>)
 ![](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white)  
  ![](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white)
![](https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)

## 기능 


CRUD 기능 

ToDo 안에 있는 상세보기를 클릭시 
Todo id값으로 이동 후 Todo정보를 상세페이로 보여줌 

## 트러블슈팅 ⚽️

1. payload 부분에 값을 가지고올떄 헷갈렸는데 버튼을 눌렀을때의 함수를 다르게 
표현해서 해결을 했다 

```jsx 
...  

const onClickDeleteHandler = (payload) => {
dispatch(delete_to(payload))
} 
// payload로 Id 값만 가져감 

const onClickDoneHandler = (payload) => {
dispatch(update_to(payload))
}
// payload로 Item에 값 전체를 가져감 
...

// 요런식으로 버튼을 눌렀을때의 값을 보는걸로 해서 해결했다 
<ButtonDelete onClick={() => 
onClickDeleteHandler(item.item.id)}>삭제</ButtonDelete>

<ButtonChange onClick={() =>
onClickDoneHandler(item.item)}>

{item.item.isDone == false ? '성공' : '재도전'}

</ButtonChange>




```


2. payload로 객체을 가져오고 map으로 지금누르객체랑 state에 있는 객체
	같은걸 찾는데에는 성공했지만 그객체의 isDone을 바꿔야 되는방법을 헤몄다

	어차피  그 객체를 가져오니 ! 사용해서 객체의 isDone을 반대되는 값을 주게 했다 

```jsx 
case UPDATE_TO:

return state.map((list) => 
				 (list.id === action.payload.id ? 
				 { ...list, isDone: !action.payload.isDone } 
				 : list))
```
