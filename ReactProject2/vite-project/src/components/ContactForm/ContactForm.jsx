import styles from "./ContactForm.module.css"
import { Button } from "../Button/Button"
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";

export const ContactForm = () => {
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[text,setText] = useState("")

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value)
    setEmail(event.target[1].value) 
    setText(event.target[2].value)
    // console.log("name");
    // console.log("email");
    // console.log("text");

  }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.button}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
            <Button 
            text="VIA CALL" icon={<MdCall fontSize="24px"/>}/>           
            </div>
            <Button
            isOutline = {true}
            text="VIA EMAIL FORM" 
            icon={<IoIosMail fontSize="24px"/>}/>
            
            <form onSubmit = {onSubmit}>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name"/>
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">E-Mail</label>
              <input type="email" name="email"/>
            </div>
            <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea name="text" rows="8"/>
            </div>
            <div 
            style= {{
              display: "flex",
              justifyContent: "end",
            }}
            >
            <Button text="SUBMIT BUTTON" fontSize="24px"/> 
            </div>
            <div>{name + " " + email + " " + text}</div>
            </form>

            
        </div>

        <div className={styles.image}>
            <img src="./images/Service 24_7-pana 1.svg"></img>
        </div>
    </section>
  ) 
}
