import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './page/Main';
import TodoDetail from './components/TodoDetail/TodeDetail'

// import TodoPage from '../page/TodoPage'; 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<TodoDetail />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}



export default App;
