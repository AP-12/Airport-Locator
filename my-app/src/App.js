


import Search from './components/Search.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SerachBar from './components/SerachBar.jsx';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={ <SerachBar/>}/>
      <Route path="map/:id" element={ <Search />}/>
    </Routes>
    </BrowserRouter>
   
   
    </>
  );
}

export default App;
