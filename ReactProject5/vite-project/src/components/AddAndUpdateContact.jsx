import {ErrorMessage, Field, Form, Formik} from "formik";
import Modal from "./Modal"
import {db} from '../config/firebase'
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import {toast} from "react-toastify"
import * as Yup from "yup"

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required")
})

const AddAndUpdateContact = ({isOpen,onClose, isUpdate,contact}) => {
  const addContact = async (contact) => {
    try{
      const contactRef = collection(db,"contacts");
      await addDoc(contactRef, contact);
      toast.success("Contact added sucessfully")
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact,id) => {
    try{
      const contactRef = doc(db,"contacts",id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("updated sucessfully")
  
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
    <Modal isOpen = {isOpen} onClose = {onClose}>
      <Formik
      validationSchema={contactSchemaValidation}
        initialValues={isUpdate?{
          name: contact.name,
          email: contact.email,
        }:{
          name:"",
          email:"",
        }}
        onSubmit={(values)=>{
          console.log(values);
          isUpdate ?
          updateContact(values,contact.id) : 
          addContact(values);
        }}
        >
        <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
            <label htmlFor="name">
                Name
            </label>
            <Field name="name" className="h-10 border"/>
            <div className="text-xs text-red">
              <ErrorMessage name="name"/>
            </div>
            </div>
            <div className="flex flex-col gap-1">

            <label htmlFor="email">
                Email
            </label>
            <Field type="email" name="email" className="h-10 border"/>
            <div className="text-xs text-red">
              <ErrorMessage name="email"/>
            </div>
            </div>
            <button type="submit" className="self-end border bg-orange px-3 py-1.5">
                {isUpdate ? "Update" : "Add"} Contact
            </button>
        </Form>
        </Formik>
    </Modal>
    </div>
  )
}

export default AddAndUpdateContact