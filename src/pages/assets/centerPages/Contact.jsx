import './cssfiles/Contact.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [newInfo ,SetNewInfo] = useState("OPEN FORM");
    const infoChange = () => {
        if (newInfo === "OPEN FORM"){
            SetNewInfo("CLOSE FORM");
        }
        else {
            SetNewInfo("OPEN FORM");
        }
    }
    return (
        <div className="Contact">
            <motion.div
        className="container text-center  bg-black"
        initial={{ x: -50,opacity: 0 }}
        animate={{ x: 0,opacity: 1 }}
        exit={{ x: -50,opacity: 0 }}
        transition={{ duration: 1 }}
        >
            <div className="contactcard">
                {/* <div className="contactimg">df</div>
                <div className="contactbuttons">
                    <h1>connect with me</h1>
                    <p>
                        feel free to contact with me i also loved to talk.
                    </p>
                    <p>
                        just say hello.
                    </p> */}
                    <div className='round'><section id="contact">
                        <div class="sectionheader">	<h1>CONTACT</h1></div>
                        <article>
                            <p>Connect with me.</p>
                            <p>feel free to chat with me.</p>
                            <p>Just say hello.</p>

                            <label for="checkcontact" className="contactbutton" onClick={infoChange}>{newInfo}</label><input id="checkcontact" type="checkbox"/>

                                <form action="" method="post" class="contactform">
                                    <p class="input_wrapper"><input type="text" name="contact_nom"  id="contact_nom"/><label for="contact_nom">NAME</label></p>
                                    <p class="input_wrapper"><input type="text" name="contact_email"  id="contact_email"/><label for="contact_email">EMAIL</label></p>
                                    <p class="input_wrapper"><input type="text" name="contact_sujet"  id="contact_sujet"/><label for="contact_sujet">SUBJECT</label></p>
                                    <p class="textarea_wrapper"><textarea name="contact_message" id="contact_message"></textarea></p>
                                    <p class="submit_wrapper"><input type="button" value="SEND"/></p> {/*change type to submit to post form*/}
                                </form>
                        </article>
                    </section>
                    </div>
                {/* </div> */}
            </div>
            </motion.div>
        </div>
    );
}

export default Contact;