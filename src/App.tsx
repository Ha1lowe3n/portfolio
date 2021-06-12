import React from "react";

import "./App.css";

import { Freelance, Header, Main, Skills, Works } from "./components";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
            <Freelance />
        </div>
    );
}

export default App;
