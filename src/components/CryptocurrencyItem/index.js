import './index.css'

const CryptocurrencyItem = props => {
  const {eachCrypto} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = eachCrypto

  return (
    <li className="headingItem">
      <div className="logo-container">
        <img className="logo" alt={currencyName} src={currencyLogo} />
        <p>{currencyName}</p>
      </div>
      <div className="ur-container">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
