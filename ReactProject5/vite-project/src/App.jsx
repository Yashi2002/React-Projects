import Navbar from "./components/Navbar";

import { useEffect, useState } from "react";
import {collection, getDocs, onSnapshot} from 'firebase/firestore';
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import { IoMdSearch } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./components/NotFound";





const App = () => {

  const[contacts, setContacts] = useState([]);
  const{onClose, onOpen, isOpen} = useDisclouse();

  useEffect(()=>{
    const getContacts = async()=>{
      try{
      const contactsRef = collection(db, "contacts");
      // const contactsSnapshot = await getDocs(contactsRef);

      onSnapshot(contactsRef, (snapshot)=>{

        const contactLists = snapshot.docs.map((doc) =>{
          return{
            id: doc.id,
            ...doc.data()
          }
        }
      );
      setContacts(contactLists);
      return contactLists;
      })



      }catch(error){
        console.log(error);
      }
    };

    getContacts();
  },[]);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef,(snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return{
          id: doc.id,
          ...doc.data(),
        }
      })
      const filterContacts = contactLists.filter((contact) =>contact.name.toLowerCase().includes(value.toLowerCase()) )
      setContacts(filterContacts);
      return filterContacts;
    })
  }

  return (
    <>
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div>
    <div className="flex gap-2">
    <div className="relative flex flex-grow items-center">
      <IoMdSearch className="absolute ml-1 text-3xl text-white" />
      <input onChange={filterContacts} type="text" className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9  text-white" />
    </div>
      <FaPlusCircle onClick={onOpen} className="cursor-pointer text-4xl text-white"/>
    </div>
    <div className="mt-4 flex flex-col gap-3">
      {contacts.length <= 0 ? (
        <NotFound/>
      ) : contacts.map((contact) => (
       <ContactCard key={contact.id} contact={contact}/>
      ))}
    </div>
    </div>

    </div>
    <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
    <ToastContainer
    position="bottom-center"/>
    </>
  );
};

export default App;
