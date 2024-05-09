import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptoList: []}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedList = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    this.setState({cryptoList: updatedList, isLoading: false})
    console.log(updatedList)
  }

  render() {
    const {isLoading, cryptoList} = this.state
    return isLoading ? (
      <div className="load-container">
        <Loader data-testid="loader" type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="bg-container">
        <CryptocurrenciesList cryptoList={cryptoList} />
      </div>
    )
  }
}

export default CryptocurrencyTracker
