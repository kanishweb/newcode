import './App.css';
import ToDo from './cc/toDo';
import Home from './cc/test';
import NoPage from './cc/pagenotFount';
import Listview from './cc/listpage';
import { BrowserRouter,Routes,Route}  from 'react-router-dom';

function App() {
  return (
    <div className="App">

      {/* <ToDo /> */}
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='toDo' index element={<ToDo />} />
        <Route path="listpage" element={<Listview />} />
        <Route path="*" element={<NoPage />} />

       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;