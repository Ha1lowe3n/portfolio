import React from "react";

import style from "./Main.module.css";
import commonContainer from "../../common/styles/Container.module.css";

function Main() {
    return (
        <div className={style.mainBlock}>
            <div
                className={`${commonContainer.container} ${style.mainContainer}`}
            >
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Igor Trifonov</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={style.photo}>
                    <img src="#" alt="my photo" />
                </div>
            </div>
        </div>
    );
}

export default Main;
