import React from 'react';
import frontpageimg from '../images/frontpageimg.jpg'
import styled from 'styled-components'

const HomePage = () => {
    return (
        <>
        <MainSectionContainer>
            <Title>Coffee/Bakery</Title>
            <Subtitle>have the best of both worlds in the heart of east london</Subtitle>
            <MainImg src={frontpageimg} alt="Logo" />
        </MainSectionContainer>

        </>
    )
}

    const MainSectionContainer = styled.div`
        text-align: center;
        margin-bottom: 10px;
    `;

    const Title = styled.h1`
        font-weight: 300;
        letter-spacing: 6px;
        margin-top: 2%;
    `;

    const Subtitle = styled.h2`
        font-weight: 300;
        letter-spacing: 3px;
        font-size: 1rem;
    `;
    

    const MainImg = styled.img`
    height: 320px;
    width: 500px;
    margin-top: 2%;
    `
  

export default HomePage;