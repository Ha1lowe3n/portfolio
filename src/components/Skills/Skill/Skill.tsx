import React from "react";

import style from "./Skill.module.css";

type SkillPropsType = {
    title: string;
    description: string;
};

function Skill({ title, description }: SkillPropsType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{title}</h3>
            <span>{description}</span>
        </div>
    );
}

export default Skill;
