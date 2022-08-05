import React from 'react'
import "./App.css"
import { ToastContainer } from 'react-toastify'; // React toast is included for notifying the user with success and error messages
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generator__header">
           Password Generator
          </h2>
          <div className="generator__password">
          </div>
          <div className="form-group">
          </div>
          <button className="generator__btn">
            Generate Password
          </button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  )
}

export default App
