import React from 'react'
import styled from 'styled-components'

import Break from './Settings/Break'
import Session from './Settings/Session'

export default function Settings (props) {
  return(
    <S.Settings>
      <Break 
        break={props.break}
        handleSettings={props.handleSettings}
        />
      <Session 
        session={props.session}
        handleSettings={props.handleSettings}
        />
    </S.Settings>
  )
}

const S = {}

S.Settings = styled.div`
  box-sizing: border-box;
  display: flex;
  @media (max-width: 400px){
    flex-direction: column;
  }
  justify-content: space-between;
  margin: 10px;
`