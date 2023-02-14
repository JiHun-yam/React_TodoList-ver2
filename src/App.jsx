import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/:id' element={<Detail />} />

      </Routes>
    </BrowserRouter>


  );
}

export default App;
