import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import CallToAction from './components/CallToAction';
import Service  from './components/Service';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import TopContact from './components/TopContact';
import AnimatedBottom from './components/AnimatedBottom';
import Projects from './components/Projects';


function App() {
  return (
    <div className='home'>
        <AnimatedBottom/>
        <Navbar/>
        <TopContact/>
        <Routes>
            <Route path='/' element={[<CallToAction/>, <Service/>,<Benefits/>]}/>
            <Route path='/contact' element={[<Contact/>]}/>
            <Route path='/projects' element={[<Projects/>]}/>
        </Routes>
    </div>
  );
}

export default App;
