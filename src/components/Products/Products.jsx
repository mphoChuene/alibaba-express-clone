import React from 'react'
import styled from 'styled-components'

const Maincontainer = styled.div`
 display: flex;
 flex-direction: column;
`
const Subcontainer = styled.div``

const Products = () => {
  return (
    <Maincontainer>
        <Subcontainer></Subcontainer>
        <Subcontainer></Subcontainer>
        <Subcontainer></Subcontainer>
    </Maincontainer>
  )
}

export default Products