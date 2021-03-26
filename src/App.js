import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Home from './container/home/Home';
import Detail from './container/detail/Detail';
import Switch from 'react-bootstrap/esm/Switch';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/detail/:id" component={Detail} exact/>
          </Switch>
        </main>
      {/* <Home/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
