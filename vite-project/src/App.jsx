import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import ContactUs from "./components/pages/Contactus.jsx";
import About from "./components/pages/About.jsx";

function App() {
    return (<>
     
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    
    </>
     
    );
}

export default App;
