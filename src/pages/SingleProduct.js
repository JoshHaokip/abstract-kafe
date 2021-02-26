import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const SingleProduct = ({item, addCartItem}) => {
  
    const handleAdd = () => {
      addCartItem(item);
    };

    return (
        <ProductContainer>

            <ProductImg src={item.itemImg} />
            
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>

            <Link to='/abstract-kafe/products'>
                <Button>Back</Button>   
            </Link>
            <Button onClick={handleAdd}>Add to Cart</Button>
      

        </ProductContainer>
    )
}

const ProductContainer = styled.div `
display: flex;
justify-content: center;
margin-top: 5px;
text-decoration: none; 
flex-direction: column;
align-items: center;
margin-bottom: 100px;
`
const ProductImg = styled.img `
height: 270px;
width: 450px;
`
const Button = styled.button`
background-color: white;
border-radius: 10%;
padding: 0.5%;
margin: 0.5%;
`


export default SingleProduct;