import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { TimerContainer } from '../components/TimerContainer'
 import { Header } from '../components/Header'

const Home: NextPage = () => {

  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  let countDownDate = new Date(2023, 10, 6, 8, 30, 0).getTime()


  useEffect(() => {


    var updateTime = setInterval(() => {
      var now = new Date().getTime();
      console.log(now)
      console.log(countDownDate)

      var difference = countDownDate - now;

      var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      var newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);


      if (difference <= 0) {
        clearInterval(updateTime);
        setMessage("The Launch Has Started");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    })

    return () => {
      clearInterval(updateTime);
    }

  }, [countDownDate]);

  return (
    <div className="flex min-h-screen flex-col items-center bg-green-950">
      <Head>
        <title>Launch Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <Header message={message} />

      <TimerContainer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  )
}

export default Home