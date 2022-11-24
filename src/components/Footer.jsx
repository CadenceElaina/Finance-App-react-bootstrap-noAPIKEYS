import { useGlobalContext } from '../context'
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import {useState} from 'react';

const Footer = () => {
  const { darkMode } = useGlobalContext();
  const [stockCards, getStockCards] = useState([]);
  const getCards = () => {
    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://yh-finance.p.rapidapi.com/market/get-trending-tickers',
  params: {region: 'US'},
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data[0].quotes);
}).catch(function (error) {
	console.error(error);
});
  }
  return (
    <div
      className={
        //"bottom-section-container-light"
        darkMode
          ? "bottom-section-container-dark"
          : "bottom-section-container-light"
      }
    >
      <section className="stock-cards">
        <h4 className={darkMode ? 'bottom-section-header-dark' : 'bottom-section-header-light'}>Discover more</h4>
        <p className={darkMode ? 'bottom-section-header-dark' : 'bottom-section-header-light'}>You may be interested in</p>
<CardGroup>
      <Card className='footer-card' bg={darkMode ? "dark" : "light"} text={darkMode ? "light" : "dark"} >
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='footer-card' bg={darkMode ? "dark" : "light"} text={darkMode ? "light" : "dark"} >
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='footer-card' bg={darkMode ? "dark" : "light"} text={darkMode ? "light" : "dark"} >
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
        <CardGroup>
      <Card className='footer-card' bg={darkMode ? "dark" : "light"} text={darkMode ? "light" : "dark"} >
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='footer-card' bg={darkMode ? "dark" : "light"} text={darkMode ? "light" : "dark"}>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='footer-card' bg={darkMode ? "dark" : "light"} text={darkMode ? "light" : "dark"} >
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      </section>

      <div className="footer-container">
        <footer>
          <a
            href="//support.google.com/websearch?rd=2&amp;hl=en-US#topic=3378866"
            className={darkMode ? "footer-link-dark" : "footer-link-light"}
          >
            Help
          </a>

          <a
            href="https://myaccount.google.com/privacypolicy?hl=en-US"
            className={darkMode ? "footer-link-dark" : "footer-link-light"}
          >
            Privacy
          </a>
          <a
            href="https://myaccount.google.com/termsofservice?hl=en-US"
            className={darkMode ? "footer-link-dark" : "footer-link-light"}
          >
            Terms
          </a>
          <a
            href="https://www.google.com/intl/en-US_US/googlefinance/disclaimer/"
            className={darkMode ? "footer-link-dark" : "footer-link-light"}
          >
            Disclaimer
          </a>
        </footer>
      </div>
    </div>
  );
};
export default Footer