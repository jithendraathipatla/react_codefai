import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/navbar/navbar";
import Drawer from "./components/navbar/drawer/drawer"
import Backdrop from "./components/navbar/drawer/backdrop";
import Content from "../src/components/content/content"

const App = () => {
   const [state, setstate] = useState(false);
   const toogleNav = () => {
    state === true ? setstate(false) : setstate(true)
   }
   const initialstate = () => {
       setstate(false);
   }
    const finalstate = () => {
    setstate(true);
   }
    return(
        <div>
          <Navbar property={toogleNav}/>
          {state === true ? <div><Drawer property={finalstate}/><Backdrop property={initialstate}/></div> : null}
          
         <div>
         <Content/>
         </div>
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));

