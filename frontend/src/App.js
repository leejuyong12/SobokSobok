import React from "react";
import { Route, Routes } from "react-router-dom";
import WelfareDetail from "./pages/WelfareDetail";
import NavBar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Main from "./pages/Main.jsx";
import Auth from "./pages/OAuth.jsx";
import Qna from "./pages/Qna.jsx";
import QnaCreate from "./pages/QnaCreate.jsx";
import QnaDetail from "./pages/QnaDetail.jsx";
import WelfareSearch from "./pages/WelfareSearch";
import WelfareRecommend from "./pages/WelfareRecommend";
import CustomFilter from "./pages/CustomFilter";
import Profile from "./pages/Profile";
import "./CSS/app.css";

function App() {
  return (
    <div id="wrapper">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/oauth/kakao/callback" element={<Auth />} />

        <Route path="/welfare/:welfareId" element={<WelfareDetail />} />

        <Route path="/Qna" element={<Qna />} />

        <Route path="/search" element={<WelfareSearch />} />

        <Route path="/QnaCreate" element={<QnaCreate />} />

        <Route path="/QnaDetail" element={<QnaDetail />} />

        <Route path="/filter" element={<CustomFilter />} />

        <Route path="/recommend" element={<WelfareRecommend />} />

        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
