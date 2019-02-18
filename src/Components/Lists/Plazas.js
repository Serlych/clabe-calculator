import React from 'react';
import { DropdownMenu, DropdownItem } from 'reactstrap';

const jsonPlazas = require('../../json/plazas.json');

const Plazas = props => {

    const { selectedPlaza, handlePlaza } = props

    let plazas = jsonPlazas.map((item, index) => {
        return (
            <DropdownItem key={index} onClick={() => handlePlaza(item.plazaNum, item.plazaName)}> {item.plazaName} </DropdownItem>
        )
    })

    return (
        <DropdownMenu>
            <DropdownItem disabled>{selectedPlaza}</DropdownItem>
            <DropdownItem divider />
            {plazas}
        </DropdownMenu>
    )
}

export default Plazas;