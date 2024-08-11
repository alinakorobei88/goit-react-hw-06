import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import css from './ContactForm.module.css';
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newContact = {id: nanoid(), name, number};

        if(contacts.find((contact) => contact.name === name)) {
            alert(`${name} is already in your contacts`);
            return;
        }

        dispatch(addContact(newContact));
        setName('');
        setNumber('');
    };

    return(
        <div className={css.div}>
            <form className={css.form} onSubmit={handleSubmit}>
                <label className={css.label}>Name
                    <input className={css.input} type='text' value={name} onChange={(evt) => setName(evt.target.value)} />
                </label>
                <label className={css.label}>
                    Number<input className={css.input} type="text" value={number} onChange={(evt) => setNumber(evt.target.value)} />
                </label>
                <button className={css.btn} type="submit">Add Contact</button>
            </form>
        </div>
    );
};

export default ContactForm;