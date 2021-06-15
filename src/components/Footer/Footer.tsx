import React from "react";

import style from "./Footer.module.css";
import commonContainer from "../../common/styles/Container.module.css";
import github from "../../assets/icons/github.svg";

import BlockTitle from "../../common/components/BlockTitle";

function Footer() {
    return (
        <footer>
            <div className={`${commonContainer.container} ${style.container}`}>
                <BlockTitle title={"Igor Trifonov"} />
                <div className={style.links}>
                    <a href="#">
                        <img src={github} alt="github icon" />
                    </a>
                    <a href="#">
                        <img src={github} alt="github icon" />
                    </a>
                    <a href="#">
                        <img src={github} alt="github icon" />
                    </a>
                    <a href="#">
                        <img src={github} alt="github icon" />
                    </a>
                </div>
                <span>© 2021 All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
