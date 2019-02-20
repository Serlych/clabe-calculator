import React, { Component } from 'react';
import { Container, Input, Alert, Button } from 'reactstrap'
import BankDropdown from './Components/BankDropdown';
import PlazaDropdown from './Components/PlazaDropdown'

import { getClabe } from './Calculate'

import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      bank: 0,
      bankName: 'Select bank',
      plaza: 0,
      plazaName: 'Select plaza',
      account: 0,
      bankAlertVisible: false,
      plazaAlertVisible: false,
      accountAlertVisible: false,
      clabe: '',
      clabeVisible: false
    }
  }

  handleChange = (type, event) => {

    let newValue = event.target.value

    switch (type) {

      case 'bank':
        this.setState({ bank: newValue })
        break

      case 'plaza':
        this.setState({ plaza: newValue })
        break

      case 'account':
        this.setState({ account: newValue })
        break

      default:
        return this.state
    }
  }

  handleClick = () => {

    const { bank, plaza, account } = this.state

    let clabe = getClabe(bank, plaza, account)

    if (account.length === 11 && !(isNaN(account)) && bank && plaza) {
      this.setState({ clabe, clabeVisible: true })
    } else if (!bank) {
      this.setState({ bankAlertVisible: true })
    } else if (!plaza) {
      this.setState({ plazaAlertVisible: true })
    } else if (!account) {
      this.setState({ accountAlertVisible: true })
    }
  }

  handleBank = (number, name) => {
    this.setState({ bank: number, bankName: name })
  }

  handlePlaza = (number, name) => {
    this.setState({ plaza: number, plazaName: name })
  }

  render() {

    const { bank, bankName, plaza, plazaName, account, bankAlertVisible, plazaAlertVisible, accountAlertVisible, clabe, clabeVisible } = this.state

    return (
      <Container className="mt-5">
        <div className="h2 mb-5 text-left">
          Calculate your CLABE
        </div>

        <div className="d-flex justify-content-between align-items-center">

          <div className="d-flex flex-column justify-content-center step">
            <span className="h5">Step 1:</span>
            <span>Choose your bank</span>
            <BankDropdown handleBank={this.handleBank} selectedBank={bankName} className="dropdown"/>
          </div>

          <div className="d-flex flex-column justify-content-center step">
            <span className="h5">Step 2:</span>
            <span>Choose your plaza</span>
            <PlazaDropdown handlePlaza={this.handlePlaza} selectedPlaza={plazaName} className="dropdown"/>
          </div>

          <div className="d-flex flex-column justify-content-center step">
            <span className="h5">Step 3:</span>
            <span>Type your account number</span>
            <Input type="text" name="acctnum" id="acctnum" placeholder="Here!" onChange={(e) => this.handleChange('account', e)} maxLength="11" />
          </div>

          <Button color="primary" onClick={this.handleClick}>Get CLABE</Button>

        </div>

        <div>
          {
            !bank
              ? <Alert color="warning" isOpen={bankAlertVisible} className="mt-4">You must choose a bank</Alert>
              : null
          }
          {
            !plaza
              ? <Alert color="warning" isOpen={plazaAlertVisible} className="mt-4">You must choose a plaza</Alert>
              : null
          }
          {
            isNaN(account)
              ? <Alert color="warning" isOpen={accountAlertVisible} className="mt-4">You must write a valid account number</Alert>
              : (
                !account
                  ? <Alert color="warning" isOpen={accountAlertVisible} className="mt-4">You must write an account number</Alert>
                  : (
                    account.length < 11
                      ? <Alert color="warning" isOpen={accountAlertVisible} className="mt-4">Your account number must be 11 characters</Alert>
                      : null
                  )
              )
          }
        </div>

        {
          clabeVisible
            ? <div className="d-flex flex-column align-items-center mt-5">
                <div>Your CLABE is:</div>
                <div><span className="h1">{clabe}</span></div>
              </div>
            : null
        }
      </Container>
    );
  }
}

export default App;