import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import DashBoard from "./Components/DashBoard/DashBoard";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Reviews from "./Components/Reviews/Reviews";


function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='reviews/' element={<Reviews></Reviews>}></Route>
        <Route path='dashboard/' element={<DashBoard></DashBoard>}></Route>
        <Route path='blogs/' element={<Blogs></Blogs>}></Route>
        <Route path='about/' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
