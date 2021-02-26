import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils/constants';
import styled from 'styled-components';
import CartBtn from './CartBtn'
import {useProductsContext} from '../context/products_context'


const Sidebar = ({ cartItemsQty }) => {

    const { isSidebarOpen, closeSidebar } = useProductsContext();

    return (

        <SidebarContainer>
            
            <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
                <div className='sidebar-header'>
                    <p>abstract.kafe</p>
                    <button className='close-btn' type='button' onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>

                <ul className='links'>

                    {links.map(({id, url, text}) => {

                        return (
                            <li key={id}>
                                <Link to={url} onClick={closeSidebar}>{text}</Link> 
                            </li>
                        )
                    })}
                </ul>
                
                <CartBtn cartItemsQty={cartItemsQty}/>

            </aside>
   
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    p {
        text-decoration: none;
        color: black;
        font-size: 1.25rem;
        font-weight: 900;
    }
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: black;
    transition: all 0.3s linear;
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
    list-style-type: none;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-decoration: none;
    text-transform: capitalize;
    padding: 1rem 0.01rem;
    color: grey;
    transition: all 0.3s linear;
    letter-spacing: 0.25rem;
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: white;
    color: grey;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar