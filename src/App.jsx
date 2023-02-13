import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './page/Main';
// import TodoPage from '../page/TodoPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/" element={<Main />} /> */}
        {/* <Route path="/:id" element={<TodoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}



export default App;
