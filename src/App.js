import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import SinglePost from './components/SinglePost';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
            <Route component={Home} path='/' exact/>
            <Route component={SinglePost} path='/post/:slug'/>
            <Route component={Post} path='/post'/>
        </Switch>
    </Router>
  );
}

export default App;
