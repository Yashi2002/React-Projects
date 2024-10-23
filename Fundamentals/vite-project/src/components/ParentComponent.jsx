import { ChildComponent } from "./ChildComponent"
export const ParentComponent = () => {
    const greetParent = (childName) =>{
        alert(`Hello Parent ${childName}`)
    }

    return(
        <div>
            <ChildComponent greetHandler={greetParent}/>
        </div>
    )
}