import React from "react";

import "./App.css";

import {
    ContactsForm,
    Footer,
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
            <Footer />
        </div>
    );
}

export default App;
