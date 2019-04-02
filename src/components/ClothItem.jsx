import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    box-shadow: 4px 4px 20px 1px #888888;
    width: 200px;
    height: 200px;
    margin: 20px;
    cursor: grab;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ClothItem = ({ title }) => {
    return (
        <Container>
            {title}
        </Container>
    )
}

export default ClothItem