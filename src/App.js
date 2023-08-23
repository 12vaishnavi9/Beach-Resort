import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import {Route,Switch} from "react-router-dom";
import Context from "./Context";


function App() {
  return (
    <div className="App">
    <Navbar/>

    {/* WITHOUT SWITCH , ERROR WILL BE SHOWN ON EACH PAGE */}
    <Switch>
    <Route exact path="/" component={Home}></Route>
     <Route exact path="/rooms" component={Rooms}></Route>
     <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
     {/*  Single rooms me bhi different different rooms hoge toh uske liye hum useParams use krege
     taaki user ke hisaab se room mile */}
     <Route component={Error}></Route>
    </Switch>
    </div>
  );
}

export default App;
