import React from 'react'
import styled from 'styled-components'

const About = () => {

    return (
        <main>

            <Wrapper className='page section section-center'>

                <article>
                    <div className='title'>
                        <h2>about us</h2>
                    </div>

                    <p>Welcome to abstract.kafe</p> 
                    <p>We roast over 100 wonderful coffees from around the world, including rare and exclusive varieties such as Kopi Luwak and Blue Mountain Jamaica, and deliver them directly to your door. We roast to order, so your coffee will always arrive in the freshest condition possible, and offer a range of grind options as well as whole beans. We also offer a sumptuous range of teas, as well as our ever-popular coffee gift hampers.</p>
                </article>
            
            
            </Wrapper>        



            
        </main>
    )
}

const Wrapper = styled.section`
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: black;
    text-align: center;
  }
  .title {
    text-align: center;
  }
`

export default About