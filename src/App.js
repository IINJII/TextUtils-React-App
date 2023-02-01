import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
import TextFrom from './components/TextFrom';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// Importing different function from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";






function App() {
  // This state is for dark mode
  const [mode, setMode] = useState('light');
  // This is state is for alert message
  const [alert, setAlert] = useState(null);

  // This function is for alert message
  const showAlert = (message, type) => {
    setAlert({
      msg: message,    // Here, in this object we can see that we can also take the name of the key and name of the value same and can also take the name of key-value pair same
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }


  const bodyClassRemover = () => {
    document.body.classList.remove('bg-primary', 'bg-danger', 'bg-warning', 'bg-success');
  }



  const toggleMode = (cls) => {
    bodyClassRemover();
    console.log(cls);
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled", "success");

      // document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");

      // document.title = "TextUtils - Light Mode";
    }
  }
  return (
    // <div className='blank'>Nitish Jaiswal</div>
    // <>
    //   <nav>
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Contact</li>
    //   </nav>
    //   <h1>Hello {name}</h1>
    //   <div className="container">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae est temporibus labore reiciendis natus quod, nihil eaque reprehenderit quisquam fuga nobis nemo veritatis, rerum sint? Perspiciatis a minima ipsa, facere porro eos nobis magni.</div>
    // </>



    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar/> */}    {/* This is how we define a default component */}
        <div className='container my-3'>
          {/* <About/> */}
          <Routes>
            <Route exact path="/about" element={<About  mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextFrom showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}>
              {/* <TextFrom showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> */}
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

// This is how we define prop types
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here'
}



/*
Important points to remember:
  -> There are mainly 2 types of components:
        - Function-based component
        - Class-based component
  -> Earlier react used to used class based components, but understanding class based components was hard that's why react switched to function based components.
  -> The code that is wirtten inside return() is called JSX.
  -> JSX is nothing but HTML but as the appearance of javascript.
  -> There is question that why does the developers of react made the file structure in such a method, the answer is that they wanted to keep all the components inside one folder so that the user do not have to switch from one folder to another to access html, css or javascript. Using react, the user can do this all from being inside one folder easily.
  -> JSX is javascript syntax extension in which we can write HTML and can embed javascript by enclosing it inside curly braces.
  -> Here we can see that inside the JSX there is written "className" instead of "class". We have to wirte className because class is a reserved keyword in javascript.
  -> If we want to use the "for" keyword of HTML which is used to indicate a input tag then we must use "htmlFor" keyword inside JSX.
  -> We must return only a single tag from inside the App.js.
  -> If we return more than one tag from inside of App.js then it will give us compile error.
  -> But if we want to do this compulsorily then we can do this by wrapping the tags inside a JSX fragment that is we have to wrap the tags inside <> and </> and then our code will work.
  -> In most of the cases we will always remove the code that is insid return() and we ill wirte our own code.
  -> Here, in App.js we can see that we have imported App.css which means that the css that will be rendered into the index.html will be from App.css. Hence, we can change the css into App.css and can get the change reflected into the website.
  -> If we have a component named navbar inside src folder then we can import it inside App.js and can use it by writing <Navbar/>.

*/