import { useGlobalContext } from '../context'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiCircleRemove } from 'react-icons/ci';

//import {IoAddCircleSharp} from 'react-icons/Io/'
const Watchlist = (props) => {
  const { darkMode } = useGlobalContext()
  return (
    <div>
      <div className="watchlist-inner-container">
        <div className={
          darkMode ? "watchlist-item-container-dark" : "watchlist-item-container-light"
        }>
          <Container>
            <Row className='watchlist-row'>

              <Col>
                <p className="watchlist-item-ticker"><a className='watchlist-ticker-link' href={`https://www.google.com/search?q=${props.ticker}`} target="_blank" >${props.ticker}</a></p>
              </Col>
              <Col>
                <p className="watchlist-item-name">{props.name}</p>
              </Col>

              <Col>
                <p className="watchlist-item-price">${props.price}</p>
              </Col>
              <Col>
                <p className="watchlist-item-dollar-change">{props.change}</p>
              </Col>
              <Col>
                <p className="watchlist-item-percent-change">{props.percentChange}</p>
              </Col>
              <Col>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => props.removeTicker(props.ticker)}><CiCircleRemove className='svg-remove' /></button>
              </Col>

            </Row>
          </Container>
        </div>

      </div>
    </div>
  );
};
export default Watchlist