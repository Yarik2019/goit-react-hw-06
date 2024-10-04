import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import s from './App.module.css'

function App() {
  const [search, setSearch] = useState('');

  const contactList = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    const localStorageContacts = window.localStorage.getItem('contactList')
    const savedContacts = localStorageContacts;
    return savedContacts ? JSON.parse(savedContacts) : contactList;
  });


  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact])
  }

  useEffect(() => {
    window.localStorage.setItem("contactList", JSON.stringify(contacts))
  }, [contacts])

  const handleDeleteContact = (itemId) => {
    setContacts((prev => prev.filter(item => item.id !== itemId)))
  }

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>

      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox
        search={search}
        setSearch={setSearch} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact} />
    </div>
  )
}

export default App
