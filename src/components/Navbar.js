import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../mortar.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';



export default class Navbar extends Component{
    
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* 
                https://www.flaticon.com/free-icon/mortar_6227723?term=ayurvedic&page=1&position=18&origin=tag&related_id=6227723
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                    <img src={logo} alt="logo" className="nav-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            <h1 color='black'>Ayurvedic Treatments</h1>
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-shopping-cart" />
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: white;
    .nav-link {
        color: black !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;

