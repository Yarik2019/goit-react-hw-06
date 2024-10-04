import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
const ContactList = ({ contacts, handleDeleteContact }) => {

    return (
        <ul className={s.list}>
            <li className={s.list}>
                {contacts.map((contact) => (
                    <Contact key={contact.id} {...contact} handleDeleteContact={handleDeleteContact} />
                ))}
            </li>
        </ul>
    )
}

export default ContactList