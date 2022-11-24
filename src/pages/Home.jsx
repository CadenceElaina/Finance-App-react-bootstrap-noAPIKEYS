import '../App.css'
import { useState } from 'react'
import TopNav from '../components/Nav'
import Slider from '../components/Slider'
import Search from '../components/Search'
import Watchlist from '../components/Watchlist'
import News from '../components/News'
import PopularStocks from '../components/TrendingStocks'
import Footer from '../components/Footer'
import { useGlobalContext } from '../context'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = (props) => {
    const { darkMode, searchTerm } = useGlobalContext()
  const [list, setList] = useState(props.list);
  const removeTicker = (id) => {
    const remainingTasks = list.filter((task) => id !== task.ticker);
    setList(remainingTasks);
  };
  const watchList = list.map((quote) => (
    <Watchlist
      id={quote.ticker}
      key={quote.ticker}
      removeTicker={removeTicker}
      ticker={quote.ticker}
      name={quote.name}
      price={quote.price}
      change={quote.change}
      percentChange={quote.percentChange}
    />
  ));
  const addTicker = (ticker) => {
    const newWatchlistQuote = {
      id: ticker,
      ticker,
      name: "name",
      price: "price",
      change: "change",
      percentChange: "percentChange"
    };
    setList([...list, newWatchlistQuote]);
  };
  const listNoun = watchList.length !== 1 ? "equities" : "equity";
  const headingText =
    watchList.length !== 0
      ? `${watchList.length} ${listNoun} in your watchlist`
      : "add to your watchlist!";

  return(
     <div
            className={darkMode ? "outer-container-dark" : "outer-container-light"}
          >
         
            <TopNav />

            <Slider />
            <Search addTicker={addTicker} />
            <Container>
              <Row>
                <div className={
                  darkMode ? "watchlist-container-dark" : "watchlist-container-light"
                }>
                  <h2 className='watchlist-heading'>{headingText}</h2>
                  {watchList}
                </div>
              </Row>
              <Row className={darkMode ? "main-section-dark" : "main-section-light"}>
                <Col className={darkMode ? "left-column-dark" : "left-column-light"}>
                  <News />
                </Col>
                <Col md="auto"
                  className={darkMode ? "right-column-dark" : "right-column-light"}
                >

                  <PopularStocks />

                </Col>
              </Row>
            </Container>
            <Footer />

          </div>
  )
}
export default Home