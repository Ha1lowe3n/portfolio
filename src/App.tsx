import React from "react";

import "./App.css";

import { Header, Main, Skills, Works } from "./components";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
        </div>
    );
}

export default App;
