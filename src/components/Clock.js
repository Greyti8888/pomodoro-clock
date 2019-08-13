import React from 'react'
import styled from 'styled-components'

export default function Clock (props) { 
  return(
    <S.Clock>
      <S.TimeCircle>
        <S.TimerLabel id="timer-label">{props.timerType}</S.TimerLabel>
        <S.TimeLeft id="time-left">{props.timer()}</S.TimeLeft>
      </S.TimeCircle>
      <S.ClockControls>
        <S.StartStop
          id="start_stop"
          className={props.start ? "fas fa-pause" : "fas fa-play"}
          onClick={props.startStop}
          ></S.StartStop>
        <S.Reset
          id="reset"
          className="fas fa-redo"
          onClick={props.reset}
          ></S.Reset>
      </S.ClockControls>
    </S.Clock>
  )
}

const S = {}

S.TimerLabel = styled.p`
  margin: 30px 0 10px 0;
`

S.Clock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

S.TimeCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  width: 190px;
  height: 190px;
  padding: 10px;
  border: 2px solid;
  border-radius: 50%;
  margin: 0 0 10px 0;
`

S.ClockControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

S.TimeLeft = styled.div`
  font-size: 3rem;
  font-weight: bold;
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

S.StartStop = styled(S.Icon)`
  font-size: 1.5rem;
  height: 50px;
  width: 50px;
  margin: 0 5px 0 0;
`

S.Reset = styled(S.Icon)`
  font-size: 1rem
`