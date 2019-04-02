import React, { Component } from 'react'
import styled from 'styled-components'
import ClothItem from '../components/ClothItem'

const Container = styled.div`
    width: 100%;
    height: 100vh;
 
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

class Main extends Component {
    render() {
        return (
            <Container className="Main">
                <ClothItem title={'jeans'}/>
                <ClothItem title={'shirt'}/>
                <ClothItem title={'belt'}/>
                <ClothItem title={'shoes'}/>
                <ClothItem title={'jeans'}/>
                <ClothItem title={'shirt'}/>
                <ClothItem title={'belt'}/>
                <ClothItem title={'shoes'}/>
            </Container>
        )
    }
}

export default Main