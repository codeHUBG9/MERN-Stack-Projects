import Header from "./components/header/Header";
import Counter from "./components/counter/Counter";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss";
import { Fragment } from "react";
import MainRoute from "./router/MainRoute";
function App() {
  return (
    <Fragment>
      <Header />
      <div className="app">
        <div className="menubar">
          <Sidebar />
        </div>
        <div className="main-page">
          <MainRoute />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
