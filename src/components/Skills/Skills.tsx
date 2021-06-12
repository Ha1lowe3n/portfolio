import React from "react";

import style from "./Skills.module.css";
import commonContainer from "../../common/styles/Container.module.css";
import commonLine from "../../common/styles/Line.module.css";

import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div
                className={`${commonContainer.container} ${style.skillsContainer}`}
            >
                <div className={style.title}>
                    <h2>Skills</h2>
                    <div className={commonLine.line}></div>
                </div>
                <div className={style.skills}>
                    <Skill
                        title={"JS"}
                        description={
                            "I know JavaScript bla bla blalalalala ratatatatattata"
                        }
                    />
                    <Skill title={"CSS"} description={"I know CSS"} />
                    <Skill title={"React"} description={"I know React"} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
