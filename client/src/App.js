import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import DetailedCard from './components/DetailedCard/DetailedCard';
import AddDog from './components/DogAdd/AddDog';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LandingPage/>
        </Route>
        <Route exact path='/home'>
          <Home/>
        </Route>
        <Route exact path="/dogs/:id">
          <DetailedCard/>
        </Route>
        <Route exact path="/dogs">
          <AddDog/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
