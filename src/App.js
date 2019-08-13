import React from 'react';
import styled from 'styled-components'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import BeepSound from './components/BeepSound.wav'

import Settings from './components/Settings'
import Clock from './components/Clock'

export default class App extends React.Component {
  state = {
    breakL: 5,
    sessionL: 25,
    timer: 1500,
    start: false,
    timerType: 'Session'
  }

  componentDidMount() {
    document.body.style.margin = 0
  }

  timeConvertor = () => {
    let timer = this.state.timer
    let minutes = Math.floor( timer / 60 )
    let seconds = timer % 60
    minutes = minutes < 10 ? `0${minutes}` : minutes
    seconds = seconds < 10 ? `0${seconds}` : seconds
    return `${minutes}:${seconds}`
  }
  
  countdown = () => {
    if (this.state.timer === 0) {
      this.playAlarm()
      let timerType = this.state.timerType
      let breakL = this.state.breakL
      let sessionL = this.state.sessionL
      this.setState({
        timer: timerType === 'Session' ? breakL * 60 : sessionL * 60,
        timerType: timerType === 'Session' ? 'Break' : 'Session',
      })
      return
    }
    this.setState({
      timer: this.state.timer - 1
    })
    this.timeConvertor()
  }
  
  repeatCountdown = null
  
  startStop = () => {
    let start = this.state.start
    if (start === false) {
      this.repeatCountdown = setInterval(this.countdown, 1000)
    } else if (start === true) {
      clearInterval(this.repeatCountdown)
    }
    this.setState({
      start: !start
    })
  }

  handleSettings = (e) => {
    console.log(e.target)
    clearInterval(this.repeatCountdown)
    this.setState({
      start: false
    })
    let breakL = this.state.breakL
    let sessionL = this.state.sessionL
    switch(e.target.id){
      case 'break-decrement':
        if (breakL === 1) {break};
        this.setState({
          breakL: breakL - 1
        });
        break
      case 'break-increment':
        if (breakL === 60) {break}
        this.setState({
          breakL: breakL + 1
        })
        break
      case 'session-decrement':
        if (sessionL === 1) {break}
        this.setState({
          sessionL: sessionL - 1,
          timer: (sessionL - 1) * 60
        })
        break
      case 'session-increment':
        if (sessionL === 60) {break}
        this.setState({
          sessionL: sessionL + 1,
          timer: (sessionL + 1) * 60
        })
        break
      default:
        break
    } 
  }
  
  reset = () => {
    clearInterval(this.repeatCountdown)
    this.setState({
      breakL: 5,
      sessionL: 25,
      timer: 1500,
      start: false,
      timerType: 'Session'
    })
    this.alarmSound.pause()
    this.alarmSound.currentTime = 0
  }

  playAlarm = () => {
    this.alarmSound.volume = 0.05
    this.alarmSound.play()
  }
  
  render() {
    return(
      <S.Wrapper>
        <S.App>
          <S.Title>Pomodoro Clock</S.Title>
          <Settings 
            break={this.state.breakL} 
            session={this.state.sessionL}
            handleSettings={this.handleSettings}
            />
          <Clock
            timer={this.timeConvertor}
            startStop={this.startStop}
            start={this.state.start}
            reset={this.reset}
            timerType={this.state.timerType}
            />
          <audio 
            id="beep" 
            src={BeepSound}
            preload="auto"
            //creating ref without React.createRef
            ref={(audio) => {this.alarmSound = audio}}
            ></audio>
        </S.App>
      </S.Wrapper>
    )
  }
}

const S = {}

S.Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
`

S.Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: tomato;
`
S.App = styled.div`
  width: 450px;
  font-family: Verdana, sans-serif;
`


