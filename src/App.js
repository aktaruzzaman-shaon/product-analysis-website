import { Routes, Route } from "react-router-dom"
import About from "./Component/About/About";
import Header from "./Component/Header/Header";
import Reviews from "./Component/Reviews/Reviews"
import Home from "./Component/Home/Home"
import Dashboard from "./Component/Dashboard/Dashboard"
import Blogs from "./Component/Blogs/Blogs"
import Wrongentity from "./Component/Wrongentity/Wrongentity";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="reviews" element={<Reviews></Reviews>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="*" element={<Wrongentity></Wrongentity>}></Route>
      </Routes>
    </div>
  );
}

export default App;
