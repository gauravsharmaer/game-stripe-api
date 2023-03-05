import React from 'react'
import '../App.css';
import '../App.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >Gaurav's-game<SportsEsportsIcon style={{fontSize:"xx-large"}}/></div>
            <div onClick={() => props.handleShow(true)}> <ShoppingCartIcon/>
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;