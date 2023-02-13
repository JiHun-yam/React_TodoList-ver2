import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function App() {
  const data = useSelector((state) => {
    return state.todos;
  })
  console.log(data[0])


  const dispatch = useDispatch();



  return (
    <div className="App">

    </div>
  );
}

export default App;
