
import { BrowserRouter, Route } from 'react-router-dom'



import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
function App() {
  return (
    <div >

      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>


    </div>
  );
}

export default App;
