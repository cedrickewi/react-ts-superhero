import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import ChatPage from "./Pages/ChatPage";
import ProfilePage from "./Pages/ProfilePage";
import ListPage from "./Pages/ListPage";
import Layout from "./Pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={LoginPage} path="/auth" />
        <Route path="/dashboard" element={<Layout/>}>
          <Route index element={<ListPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<Navigate to={"/dashboard"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
