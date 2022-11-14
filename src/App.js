import './App.css';
import {Route, Routes} from 'react-router-dom'
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import Home from "./pages/Home";
import Header from "./components/Header";
import BeerDetails from "./pages/BeerDetails";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/beers"} element={<Beers />} />
                <Route path={"/random-beer"} element={<RandomBeer />} />
                <Route path={"/new-beer"} element={<NewBeer />} />
                <Route path={"/beers/:id"} element={<BeerDetails />} />
            </Routes>
        </div>
    );
}

export default App;
