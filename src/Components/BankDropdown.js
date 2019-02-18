import React, { Component } from 'react';
import { Dropdown, DropdownToggle } from 'reactstrap';

import Banks from './Lists/Banks'

class BankDropdown extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dropdownOpen: false,
            selectedBank: ''
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    handleClick = name => {
        this.setState({ selectedBank: name })
    }

    render() {

        const { selectedBank, handleBank } = this.props

        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    {selectedBank}
                </DropdownToggle>
                <Banks selectedBank={selectedBank} handleBank={handleBank}/>
            </Dropdown>
        );
    }
}

export default BankDropdown;