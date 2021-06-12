import React from "react";

import style from "./ContactForm.module.css";
import commonContainer from "../../common/styles/Container.module.css";

import BlockTitle from "../../common/components/BlockTitle";

function ContactForm() {
    return (
        <div className={style.contactsFormBlock}>
            <div className={`${commonContainer.container} ${style.container}`}>
                <BlockTitle title={"Contact"} />
                <form id="data">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your message"
                        required
                    />
                </form>
                <button type="submit" form="data">
                    SEND MESSAGE
                </button>
            </div>
        </div>
    );
}

export default ContactForm;
