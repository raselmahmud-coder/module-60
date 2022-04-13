import { Route, Routes } from "react-router-dom";
import "./App.css";
import Features from "./Pages/Features/Features";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Sign Up/SignUp";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import CheckOut from "./Pages/CheckOut/CheckOut/CheckOut";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail />}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        ></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
