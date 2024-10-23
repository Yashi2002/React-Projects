// import {Greet} from "./components/Greet" //incase of named export
// import { Message } from "./components/Message"
// import Greet from "./components/Greet" //incase of defalult export or we can also use different name
// import './appStyles.css'
// import styles from './appStyles.module.css'

// import { PostForm } from "./components/PostForm"
// import { PostList } from "./components/PostList"

// import { Form } from "./components/Form"

// import { Inline } from "./components/Inline"

// import { NameList } from "./components/NameList"

// import { UserGreeting } from "./components/UserGreeting"

// import { ParentComponent } from "./components/ParentComponent"

// import { ClickHandler } from "./components/ClickHandler"

// import { StyleSheet } from "./components/StyleSheet"

import { useState } from 'react'
import NAMES from './components/data.json'

function App(){
  const [query,setQuery] = useState('')
  const changeHandler = (event) = {
    setQuery(event.target.value)
  }
  const filteredNames = NAMES.filter((item) => {
    return item.username.includes(query)
  })
  return (
    <div className="App">
    {/* <Greet name='yashi' heroname='superwomen'/>
    <Greet name='john' heroname='batman'>
      <button>Action</button>
    </Greet>
    <Greet name='cerra' heroname='nansenseman'>
      <p>Its a child prop</p>
    </Greet> */}

    {/* <Message/> */}
    {/* <ClickHandler/> */}
    {/* <ParentComponent/> */}
    {/* <UserGreeting/> */}
    {/* <NameList/> */}
    {/* <StyleSheet/> */}
    {/* <Inline/>
    <h1 className='error'>Error</h1>
    <h1 className={styles.success}>success</h1> */}
    {/* <Form/> */}
    {/* <PostForm/> */}
    {/* <PostList/> */}
    <input type='text' value={query} onChange={changeHandler}/>
    {filteredNames.map((item) => (
      <p key={item.id}>
        {item.username}
      </p>
    ))}


    </div>
    
  )
}
export default App