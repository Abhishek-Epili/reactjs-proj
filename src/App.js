

import { Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Tourism from "./Tourism";
import Contact from "./Contact";
import Navbar from './Navbar';
import About from './About';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Tourism" element={<Tourism />} />
        <Route exact path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
