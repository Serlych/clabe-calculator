import React, { Component } from 'react';
import { Dropdown, DropdownToggle } from 'reactstrap';

import Plazas from './Lists/Plazas'

class PlazaDropdown extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dropdownOpen: false,
            selectedPlaza: ''
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    handleClick = name => {
        this.setState({ selectedPlaza: name })
    }

    render() {

        const { selectedPlaza, handlePlaza } = this.props

        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    {selectedPlaza}
                </DropdownToggle>
                <Plazas selectedPlaza={selectedPlaza} handlePlaza={handlePlaza}/>
            </Dropdown>
        )
    }
}

export default PlazaDropdown;