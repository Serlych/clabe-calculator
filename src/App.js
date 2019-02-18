import React, { Component } from 'react';
import { Container, Label, Input, Alert, Button } from 'reactstrap'
import BankDropdown from './Components/BankDropdown';
import PlazaDropdown from './Components/PlazaDropdown'

import { getClabe } from './Calculate'

import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      bank: 0,
      bankName: 'Selecciona tu banco',
      plaza: 0,
      plazaName: 'Selecciona tu plaza',
      account: 0,
      alertVisible: false,
      clabe: ''
    }
  }

  handleChange = (type, event) => {

    let newValue = event.target.value

    if (this.state.account.length === 11) {
      this.setState({ alertVisible: false })
    }

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

    if (account.length === 11) {
      if (isNaN(clabe)) {
        this.setState({ alertVisible: true })
      } else {
        this.setState({ clabe, displayClabe: true })
      }
    } else {
      this.setState({ alertVisible: true })
    }
  }

  handleBank = (number, name) => {
    this.setState({ bank: number, bankName: name })
  }

  handlePlaza = (number, name) => {
    this.setState({ plaza: number, plazaName: name })
  }

  dismissAlert = () => {
    this.setState({ alertVisible: false });
  }

  render() {

    const { clabe, bank, bankName, plaza, plazaName, account, alertVisible } = this.state

    return (
      <Container className="mt-5">
        <div className="h3 mb-5 text-center">
          Calcula tu CLABE
        </div>

        <div className="d-flex flex-row justify-content-around align-items-center">
          <div>
            <span>Bank: </span>
            <BankDropdown handleBank={this.handleBank} selectedBank={bankName} />
          </div>

          <div>
            <span>Plaza: </span>
            <PlazaDropdown handlePlaza={this.handlePlaza} selectedPlaza={plazaName} />
          </div>

          <div>
            <Label for="acctnum">Account number:</Label>
            <Input type="text" name="acctnum" id="acctnum" placeholder="Type your account number here" onChange={(e) => this.handleChange('account', e)} maxLength="11" />
          </div>

          <Button color="primary" onClick={this.handleClick}>Get CLABE</Button>
        </div>

        <Alert color="warning" isOpen={alertVisible} toggle={this.dismissAlert} className="mt-4">
          {bank ? '' : <span>Debes escoger un banco <br /></span>}
          {plaza ? '' : <span>Debes escoger una plaza <br /></span>}
          {account ? '' : <span>Debes escribir una cuenta <br /></span>}
          {
            account.length > 0
              ? (isNaN(account) ? <span>Escribe un número de cuenta válido <br /></span> : '')
              : (isNaN(account) ? '' : <span>Tu cuenta debe tener 11 caracteres<br /></span>)
          }
        </Alert>

        <div className="d-flex justify-content-center mt-5">
          <p>Tu CLABE es: <span className="h2 text-center">{clabe}</span></p>
        </div>
      </Container>
    );
  }
}

export default App;
