import { deleteDoc, doc } from "firebase/firestore";
import { CgProfile } from "react-icons/cg";
import { FaTrash } from "react-icons/fa6";
import { TbEditCircle } from "react-icons/tb";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";



const ContactCard = ({contact}) => {
  const{onClose, onOpen, isOpen} = useDisclouse();


  const deleteContact = async (id) => {
    try{
      await deleteDoc(doc(db,"contacts",id))
      toast.success("Contact deleted sucessfully")
    }catch(error){
      console.log(error)
    }
  }
  return (
    <>
              <div key={contact.id} className="flex items-center justify-between rounded-lg bg-yellow p-2">
          <div className="flex gap-1">
          <CgProfile className=" text-4xl text-orange"/>
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
          <div className="flex text-3xl">
          <TbEditCircle onClick={onOpen} className="pointer" />

          <FaTrash onClick={() => deleteContact(contact.id)} className="text-orange pointer" />
          </div>
          </div>
        </div>
        <AddAndUpdateContact 
        contact={contact} 
        isUpdate 
        isOpen={isOpen} 
        onClose={onClose}/>
    </>
  )
}

export default ContactCard