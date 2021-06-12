import React from "react";

import style from "./ContactForm.module.css";
import commonContainer from "../../common/styles/Container.module.css";

import BlockTitle from "../../common/components/BlockTitle";

function ContactForm() {
    return (
        <div className={style.contactsFormBlock}>
            <div className={`${commonContainer.container} ${style.container}`}>
                <BlockTitle title={"Contact"} />
                <form>
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
                    <button type="submit">SEND MESSAGE</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
