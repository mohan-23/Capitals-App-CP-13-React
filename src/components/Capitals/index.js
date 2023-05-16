import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCountryId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCountryId: event.target.value})
  }

  getCountry = () => {
    const {activeCountryId} = this.state

    const countryAndCapital = countryAndCapitalsList.find(
      eachObject => eachObject.id === activeCountryId,
    )
    return countryAndCapital.country
  }

  render() {
    const {activeCountryId} = this.state
    const country = this.getCountry()

    return (
      <div className="body-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="form-container">
            <select onChange={this.onChangeCapital} value={activeCountryId}>
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <span>is capital of which country?</span>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
