import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 40px;
    box-shadow: 4px 4px 20px 1px #888888;
    display: flex;
    justify-content: center;
    align-items: center;
`

class NavBar extends Component {
    render() {
        return (
            <Container className="NavBar">
                OUTFITS
            </Container>
        )
    }
}

export default NavBar

