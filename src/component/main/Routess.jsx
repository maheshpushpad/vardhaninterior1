import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Project from "./Project";
import Details from "./Details";


const Routess = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/Project" element={<Project />} />
            <Route path="*" element={<Home />} />

            

        </Routes>
    );
};

export default Routess;