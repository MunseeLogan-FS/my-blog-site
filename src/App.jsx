import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post/:slug" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
