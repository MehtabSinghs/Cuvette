import { BrowserRouter, Routes, Route, useNavigate ,Link} from "react-router-dom";
import CompanySignUp from "./pages/CompanySignUp";
import Verification from "./pages/Verification"; 
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import InterviewDetails from "./pages/InterviewDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companysignup" element={<CompanySignUp />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/interviewdetails" element={<InterviewDetails/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;