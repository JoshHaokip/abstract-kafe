import React from 'react';
import styled from 'styled-components'
import CartItem from './CartItem'


const Cart = ({items, deleteCartItem, changeQty}) => {

    const cartItems = items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          deleteCartItem={deleteCartItem}
          changeQty={changeQty}
        />
      ));

      const cartTotal = items
      .map((item) => item.price * item.qty)
      .reduce((a, c) => a + c, 0)
      .toFixed(2);
  

      console.log(cartTotal)
      console.log(items.price)




    return (

        <CartContainer>
          <h1>Cart</h1>

            {items.length > 0 ? (

              <>
                <ProductContainer>{cartItems}</ProductContainer>

                <Total>
                  <h3>Total £{cartTotal}</h3>
                </Total>         
              </>

            ) : (
              <div>
                <h3>Add products to your cart</h3>
              </div>

            )}

      </CartContainer>

    )
}

const CartContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
text-decoration: none; 
flex-direction: column;
align-items: center;
`
const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
`

const Total = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  font-size: 2rem;
  letter-spacing: 5px;
`





export default Cart