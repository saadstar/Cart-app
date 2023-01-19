import './App.css';
import { Products } from './components/Products';
import { Switch, Route } from "react-router-dom";
import { Cart } from './components/Cart';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/"><Products /></Route>
        <Route path="/cart"> <Cart /></Route>
        <Route>Error 404</Route>
      </Switch>
    </div>
  );
}

export default App;
