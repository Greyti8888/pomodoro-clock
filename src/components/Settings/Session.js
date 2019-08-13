import React from 'react'
import styled from 'styled-components'

export default function Session (props) {
  return(
    <S.Session>
      <S.P id="session-label">Session Length</S.P>
      <S.SessionControls>
        <S.Arrows
          id="session-decrement"
          className="fas fa-arrow-down"
          onClick={props.handleSettings}
          ></S.Arrows>
        <S.SessionLength id="session-length">{props.session}</S.SessionLength>
        <S.Arrows
          id="session-increment"
          className="fas fa-arrow-up"
          onClick={props.handleSettings}
          ></S.Arrows>
      </S.SessionControls>
    </S.Session>
  )
}

const S = {}

S.Session = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
`

S.SessionControls = styled.div`
  display: flex;
  align-items: center;
`

S.SessionLength = styled.div`
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