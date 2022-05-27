import React from "react";
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {MySkills} from "./mySkills/MySkills";
import {MyProjects} from "./myProjects/MyProjects";
import {Remote} from "./remote/Remote";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MySkills/>
            <MyProjects/>
            <Remote/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
