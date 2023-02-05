import Header from "./components/header/Header";
import Counter from "./components/counter/Counter";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss";
import { Fragment, useState } from "react";
import MainRoute from "./router/MainRoute";
import UserAuth from "./pages/userAuth/UserAuth";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const { loading, user, isAuthenticated, error } = useSelector(
    (state) => state.auth
  );
  return (
    <Fragment>
      {!isAuthenticated ? (
        <UserAuth />
      ) : (
        <>
          <Header />
          <div className="app">
            <div className="menubar">
              <Sidebar />
            </div>
            <div className="main-page">
              <MainRoute />
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
}

export default App;
