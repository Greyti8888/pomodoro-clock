import React from 'react'
import styled from 'styled-components'

export default function Break (props) {
  return(
    <S.Break>
      <S.P id="break-label">Break Length</S.P>
      <S.BreakControls>
        <S.Arrows
          id="break-decrement"
          className="fas fa-arrow-down"
          onClick={props.handleSettings}
          ></S.Arrows>
        <S.BreakLength id="break-length">{props.break}</S.BreakLength>
        <S.Arrows 
          id="break-increment"
          className="fas fa-arrow-up"
          onClick={props.handleSettings}
          ></S.Arrows>
      </S.BreakControls>
    </S.Break>
  )
}

const S = {}

S.P = styled.p`
  margin: 0 0 5px 0;
`

S.Break = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
`

S.BreakControls = styled.div`
  display: flex;
  align-items: center;
`

S.BreakLength = styled.div`
  font-size: 2rem;
  margin: 5px;
`

S.P = styled.p`
  margin: 0 0 5px 0;
`

S.Icon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 10px;
  border: 2px solid;
  border-radius: 50%;
`

S.Arrows = styled(S.Icon)`
  font-size: 1rem;
`