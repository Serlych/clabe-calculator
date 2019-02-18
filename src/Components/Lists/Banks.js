import React from 'react';
import { DropdownMenu, DropdownItem } from 'reactstrap';

const jsonBanks = require('../../json/banks.json');

const Banks = props => {

    const { selectedBank, handleBank } = props

    let banks = jsonBanks.map((item, index) => {
        return (
            <DropdownItem key={index} onClick={() => handleBank(item.bankNum, item.bankName)}>{item.bankFullname}</DropdownItem>
        )
    })

    return (
        <DropdownMenu>
            <DropdownItem disabled>{selectedBank}</DropdownItem>
            <DropdownItem divider />
            {banks}
        </DropdownMenu>
    )
}

export default Banks;