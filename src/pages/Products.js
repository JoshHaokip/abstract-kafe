import React from 'react';
import styled from 'styled-components'
import { Link, useRouteMatch } from 'react-router-dom';


const Products = ({items}) => {

    const match = useRouteMatch();

    console.log(items)


    return (
        <>
            <ProductContainer>

                {items.map(item => {
                    return (

                                <ProductItems>
                                    <StyledLink to={`${match.url}/${item.title}`} key={item.id}>{item.title}</StyledLink>
                                    <Description key={item.id}>{item.description}</Description>
                                    <ProductImg src={item.itemImg} />

                                </ProductItems>

                    )
                })}

            </ProductContainer>
            
        </>

        
    )
}



    const ProductContainer = styled.div `
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 50px;
        text-decoration: none; 
    
    `
    const ProductItems = styled.div `
        height: 350px;
        width: 450px;
        margin-top: 5px;
        margin-bottom: 2px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const StyledLink = styled(Link)`
        font-size: 1.7rem;
        text-decoration: none;
        color: black;
        font-weight: 600;
        ::visited {
            text-decoration: none;
            color: black;
        }
    
    `

    const Description = styled.h4 `
    font-size: 1rem;
    font-weight: 400;
    `

    const ProductImg = styled.img `
        height: 150px;
        width: 250px;
    `



export default Products;