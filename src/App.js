import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import LogIn from './pages/login/LogIn';
import Post from './pages/post/Post';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Write from './pages/write/Write';

function App() {
  const user = true;

  return (
    <>
       <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
           <Route exact path="/login">
            {user ? <Home /> : <LogIn />}
          </Route>
          <Route exact path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route exact path="/post">
            {user ? <Post /> : <LogIn />}
          </Route>
          <Route exact path="/write">
            {user ? <Write /> : <LogIn />}
          </Route>
          <Route exact path="/settings">
            {user ? <Settings /> : <Register />}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
