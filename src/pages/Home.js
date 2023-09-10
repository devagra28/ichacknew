import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Box, makeStyles, styled } from "@mui/material";
import {ReactComponent as LandingLogo} from '../images/ichack23landing.svg';
import CustomButton from "../components/CustomButton";
import Clock from "../components/Clock";

const GradientBackground= styled(Box)`
  background: linear-gradient(180deg, #00023E, #4C0087, #0014CC, #9E28FED9, #A128FF00);
  width: 100%;
  height: 100vh;

`
const GradientBackgroundWhiteBlack= styled(Box)`
  background: linear-gradient(180deg, #FFFFFF, #000000);
  width: 100%;
  height: 100vh;

`

const Landing= styled(Box)`
  overflow: hidden;
`
const Button=styled(Box)`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`

export const Home =()=>{


  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("September 30,2023 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return(
    <>
    <Landing>
    <GradientBackground>
      <Navbar/>
      <Box>
      <LandingLogo style={{marginLeft:'auto',marginRight:'auto', width: '80%', }}/>
      </Box>
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      <Button>
        <CustomButton
          backgroundColor="#000"
          color="#fff"
          buttonText="Register Here"
        />
      </Button>
    </GradientBackground>
    <Box>
      <h1>hello</h1>
    </Box>
    <GradientBackgroundWhiteBlack>

    </GradientBackgroundWhiteBlack>
    
    </Landing>
    </>
  )
}

export default Home;