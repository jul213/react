import ReactDOM, { createRoot } from "react-dom/client";
import {BrowseRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";

export default function App(){
    return (
        <BrowseRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="/" element={<Layout/>} />
                <Route path="blogs" element={<Blogs/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="*" element={<NoPage/>} />
                </Route>
            </Routes>
        </BrowseRouter>


    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
