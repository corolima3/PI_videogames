import './App.css';
import { Route,Switch, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Form from "./views/Form/Form";
import Home from "./views/Home/Home";
import Detail from './views/Detail/Detail';
import NavBar from './components/NavBar/NavBar';

function App() {

  const location = useLocation();
  return (
    <div className="App">
       <Switch>
            {location.pathname !=='/'&& <NavBar/> }
            <Route path="/home" render={()=><Home/>} />
            <Route exact path="/" render={()=><Landing/>} />
            <Route exact path="/create" render={()=><Form />} />
            <Route exact path="/detail/:id" component={Detail} />
       </Switch>
        
    </div>
  );
}

export default App;
