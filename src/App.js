import logo from './logo.svg';
import './App.css';
import { FaReact } from "react-icons/fa";
import { Md14Mp, MdAddBusiness } from "react-icons/md";
import { IconContext } from 'react-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalComponent from './components/Component/Modal';
import ToolTip from './components/Component/ToolTip';


// toast.confiure()
function App() {
  const notify = () => {toast.success("It's Working as expected!",{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",})
   
  };
  window.onload=()=>{
    toast.info("It's as expected!",{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",}
      );
  }


  
  return (
   


<div>
<IconContext.Provider value={{color:'red',size:"10rem"}} >
       <div className="App">
      <Md14Mp  ></Md14Mp>
      <MdAddBusiness ></MdAddBusiness>
     
    </div>
    </IconContext.Provider>
    <button onClick={notify} >Notify</button>
    <ToastContainer />
    {/* <ModalComponent></ModalComponent> */}
    <ToolTip></ToolTip>

</div>
   
  );
}

export default App;
