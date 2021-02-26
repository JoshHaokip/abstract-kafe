import React from 'react'
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {useProductsContext} from '../context/products_context'

const CartBtn = ({cartItemsQty}) => {

  const { closeSidebar } = useProductsContext();

    return (
        <Wrapper className='cart-btn-wrapper'>
            <Link to='/abstract-kafe/cart' className='cart-btn' onClick={closeSidebar}>
            <span className='cart-container'>
                <FaShoppingCart />
                <span className='cart-value'>{cartItemsQty}</span>
            </span>
            </Link>
            <button type='button' className='auth-btn'>
                Login <FaUserPlus />
            </button>     
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .cart-btn {
    font-size: 1.25rem;
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
      color: black;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: lightgrey;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: 900;
    color: black;
    padding: 4px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-weight: 100;
    font-size: 1rem;
    cursor: pointer;
    color: black;
    letter-spacing: 2.5px;
    svg {
      margin-left: 5px;
    }
  }
`

export default CartBtn