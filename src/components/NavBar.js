import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import {links} from '../utils/constants';
import CartBtn from './CartBtn';
import {useProductsContext} from '../context/products_context'


const NavBar = ( { cartItemsQty }) => {

    const { openSidebar } = useProductsContext();

    return (
      
        <NavContainer>
            <div className='nav-center'>

                <div className='nav-header'>
                    <Link to='/abstract-kafe/' className='logo'>
                        <p>abstract.kafe</p>
                    </Link>
                    <button type='button' className='nav-toggle' onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className='nav-links'>

                    {links.map((link) => {
                        const {id ,text, url} = link;
                        return <li key={id}>
                            <Link to={url}>{text}</Link>
                        </li>
                    })}

                </ul>

                <CartBtn cartItemsQty={cartItemsQty} />  

            </div>
        </NavContainer>
    )
}


const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .logo {
        text-decoration: none;
        color: black;
        font-size: 1.25rem;
        font-weight: 900;
    }
    
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
      li {
        margin: 0 0.5rem;  
        list-style-type: none;
        
      }
      a {
        color: black;
        text-decoration: none;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: 2px;
        padding: 0.5rem;
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default NavBar