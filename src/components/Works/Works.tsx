import React from "react";

import style from "./Works.module.css";
import commonContainer from "../../common/styles/Container.module.css";

import BlockTitle from "../../common/components/BlockTitle";
import Work from "./Work/Work";

function Works() {
    return (
        <div className={style.worksBlock}>
            <div
                className={`${commonContainer.container} ${style.worksContainer}`}
            >
                <BlockTitle title={"My Works"} />
                <div className={style.works}>
                    <Work
                        title={"Google search"}
                        description={"Google clone"}
                    />
                    <Work
                        title={"Pizza market"}
                        description={
                            "Internet market for buying pizza bla bla blaaaalalalalalal"
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Works;
