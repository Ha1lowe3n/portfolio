import React from "react";

import "./App.css";

import {
    ContactsForm,
    Freelance,
    Header,
    Main,
    Skills,
    Works,
} from "./components";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
            <Freelance />
            <ContactsForm />
        </div>
    );
}

export default App;
