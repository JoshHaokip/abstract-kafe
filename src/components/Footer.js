import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>

            <h5> &copy; {new Date().getFullYear()}</h5>

            <h5>designed by Josh Haokip</h5>
            
        </Wrapper>
    )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  bottom: 0;
  h5 {
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`


export default Footer