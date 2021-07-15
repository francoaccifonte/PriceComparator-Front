import SearchResults from "./views/search_results/search_results";
import ProductDetails from "./views/product_details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResponseLedger from "./lib/response_ledger";


const App = () => {

  let ledger = new ResponseLedger();

  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchResults ledger={ledger}/>
        </Route>
        <Route path="/product/:id">
          <ProductDetails ledger={ledger}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
