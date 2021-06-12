import React from "react";

import style from "./Freelance.module.css";
import commonContainer from "../../common/styles/Container.module.css";

import BlockTitle from "../../common/components/BlockTitle";

function Freelance() {
    return (
        <div className={style.freelanceBlock}>
            <div className={`${commonContainer.container} ${style.container}`}>
                <BlockTitle title={"I Am Available For Freelancer"} />
                <button>HIRE ME</button>
            </div>
        </div>
    );
}

export default Freelance;
