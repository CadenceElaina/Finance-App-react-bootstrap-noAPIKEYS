import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import StockOverview from './pages/StockOverview'
import { useGlobalContext } from './context'
import 'bootstrap/dist/css/bootstrap.min.css';


const DATA = [
  {
    ticker: "msft",
    name: "Microsoft",
    price: "148.24",
    change: "1.00",
    percentChange: "0.5%"
  },
  {
    ticker: "aapl",
    name: "Apple",
    price: "241.94",
    change: "1.00",
    percentChange: "0.5%"
  },
  {
    ticker: "amzn",
    name: "Amazon",
    price: "98.16",
    change: "1.00",
    percentChange: "0.5%"
  }
];

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={
         <Home list={DATA}/>
        }>
        </Route>
        <Route path='/overview' element={<StockOverview />}>
        </Route>
      </Routes>
    </Router>
  );
};
export default App




