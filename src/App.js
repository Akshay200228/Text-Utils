import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
// import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1500);
  // }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      // showAlert("Dark mode has been enabled", "success")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      // showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
    <div>
      <Toaster
      position='top-right'
      toastOptions={{
        success: {
          theme: {
            primary: '#4aed88'
          }
        }
      }}
      >

      </Toaster>
    </div>
    <Router>
        <Navbar title="My TestUtils" mode={mode} toggleMode={toggleMode} />
        {/* <Alert alert={alert} /> */}
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Textform mode={mode} /> }  />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    
    </>

  );
}

export default App;
