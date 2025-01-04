import React, { useState } from "react"
import Navbar from "../Components/Navbar";
import TextFrom from "../Components/TextFrom";
import Alert from "../Components/Alert";
import About from "../Components/About";
import From from "../Components/From";

const Home = () => {
    const [mode, setmode] = useState('blue');
    const [alert, setAlert] = useState(null);

    // alert
    const showAlert = (message, type) => {
        setAlert(
            {
                message: message,
                type: type,
            }
        )
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    // light to dark togglemode
    const toggleMode = () => {
        if (mode === 'light') {
            setmode('blue');
            document.body.style.backgroundColor = "blue";
            showAlert("Dark mode has been enabled", "success");
        }
        else {
            setmode('light');
            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been enabled", "success");
        }
    }
    // light to dark toggleRed
    const toggleRed = () => {
        if (mode === 'light') {
            setmode('red');
            document.body.style.backgroundColor = "red";
            showAlert("Dark mode has been enabled", "success");
        }
        else {
            setmode('light');
            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been enabled", "success");
        }
    }
    // light to dark togglePink
    const togglePink = () => {
        if (mode === 'light') {
            setmode('Pink');
            document.body.style.backgroundColor = "Pink";
            showAlert("Dark mode has been enabled", "success");
        }
        else {
            setmode('light');
            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been enabled", "success");
        }
    }

    return (
        <>
            {/* <Navbar title="logo"/>
            <div className="container">
                <TextFrom />
            </div> */}
            <Navbar title="Logo" mode={mode} toggleMode={toggleMode} toggleRed={toggleRed} togglePink={togglePink} />
            {
                alert && <Alert alert={alert} />
            }
            <div className="container">
                <About />
                <TextFrom />
                <From />
            </div>
        </>
    )
}

export default Home;