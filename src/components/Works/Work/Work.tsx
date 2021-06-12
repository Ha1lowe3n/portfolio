import React from "react";

import style from "./Work.module.css";

type WorkPropsType = {
    title: string;
    description: string;
};

function Work({ title, description }: WorkPropsType) {
    return (
        <div className={style.work}>
            <div className={style.picture}>
                <a href={"google.com"}>
                    <img src="#" alt="picture work" />
                </a>
            </div>
            <div className={style.aboutWork}>
                <h3>{title}</h3>
                <span>{description}</span>
            </div>
        </div>
    );
}

export default Work;
