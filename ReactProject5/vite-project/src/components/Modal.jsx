import {createPortal} from "react-dom"
import {AiOutlineClose} from "react-icons/ai"
const Modal = ({onClose, isOpen, children}) => {
  return createPortal(
    <>
    {isOpen && (
      <div className="absolute top-0 z-40 grid h-screen w-screen backdrop-blur">
      <div className="relative z-50 m-auto min-h-[200px] min-w-[80%] bg-white">
      <div className="flex justify-end">
        <AiOutlineClose className="text-2xl" onClick={onClose}/>
        </div>
        {children}
        </div>
        <div className="absolute top-0 z-40 h-screen w-screen backdrop-blur"/>
      </div>
    )
        }
    </>,
    document.getElementById("modal-root")
  )
}

export default Modal