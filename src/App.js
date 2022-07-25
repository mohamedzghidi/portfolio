
import { BrowserRouter, Route, Switch } from 'react-router-dom'



import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import SkillDetails from './pages/SkillDetails'
import NotFound from './pages/NotFound';

function App() {
  return (
    <div >

      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/skills/:id" component={SkillDetails} />
        <Route component={NotFound} />
        </Switch>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
