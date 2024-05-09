import './index.css'
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoList} = this.props
    return (
      <div className="heading-and-list-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="crypto-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="list-container">
          <div className="headingItems">
            <div>
              <p className="coin-type">Coin Type</p>
            </div>
            <div className="uro-container">
              <p>USD</p>
              <p>EURO</p>
            </div>
          </div>
          <ul className="list-item-container">
            {cryptoList.map(eachCrypto => (
              <CryptocurrencyItem key={eachCrypto.id} eachCrypto={eachCrypto} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
