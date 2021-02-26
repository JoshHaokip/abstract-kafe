import React from 'react'
import styled from 'styled-components'


function CartItem({id, title, itemImg, qty, price, deleteCartItem, changeQty}) {

    const handleDelete = () => deleteCartItem(id);
    const handleIncrease = () => changeQty(id, 1);
    const handleDecrease = () => changeQty(id, -1);

    return (

        <PageContainer> 
        <ProductContainer>

            <ProductImg src={itemImg}/>
            <h2>{title}</h2>
            <p>{price}</p>

        </ProductContainer>  

        <QtyContainer>

            <Button onClick={handleDecrease} disabled={qty < 2}>-</Button>
            <Quantity>{qty}</Quantity>
            <Button onClick={handleIncrease}>+</Button>
            <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>    
        </QtyContainer>
        
        </PageContainer>

    )
}

const PageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 20px;
align-items: center;
`

const Button = styled.button`
margin: 5px;
width: 10%;
height: 100%;
background-color: white;
border-radius: 15%;
`

const Quantity = styled.span`
font-weight: 800;
margin: 5px;
`

const ButtonDelete = styled.button`
margin: 5px;
width: 15%;
height: 100%;
background-color: white;
border-color: black;
border-radius: 15%;
`

const QtyContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 10px;
align-items: center;
width: 100%;
`

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px
`

const ProductImg = styled.img `
height: 200px;
width: 400px;
`

export default CartItem