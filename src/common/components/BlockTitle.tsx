import React from "react";

import style from "./BlockTitle.module.css";

type BlockTitlePropsType = {
    title: string;
};

function BlockTitle({ title }: BlockTitlePropsType) {
    return (
        <div className={style.title}>
            <h2>{title}</h2>
            <div className={style.line}></div>
        </div>
    );
}

export default BlockTitle;
