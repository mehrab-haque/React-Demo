import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";
import Home from "./component/Home";
import {Dialog, DialogContent} from "@mui/material";
import Dashboard from "./component/Dashboard";

var showToast
var setLoading

function App() {

  const [loading,setL]=useState(false)
  setLoading=setL
  showToast=message=>{
    toast.dark(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
      <div>
        <Dialog open={loading}>
          <DialogContent>
            <Loader
                type="Oval"
                color="#00BFFF"
                height={100}
                width={100}
            />
          </DialogContent>
        </Dialog>
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <Dashboard/>
      </div>
  );
}

export default App;
export {showToast,setLoading}