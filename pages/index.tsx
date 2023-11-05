import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { TimerContainer } from "../components/TimerContainer";
import { Header } from "../components/Header";
import Image from "next/image";

const flipImage = {
  transform: "scaleX(-1)",
};

const Home: NextPage = () => {
  const [suncorpDays, setSuncorpDays] = useState<number>(0);
  const [suncorpHours, setSuncorpHours] = useState<number>(0);
  const [suncorpMinutes, setSuncorpMinutes] = useState<number>(0);
  const [suncorpSeconds, setSuncorpSeconds] = useState<number>(0);

  const [schoolDays, setSchoolDays] = useState<number>(0);
  const [schoolHours, setSchoolHours] = useState<number>(0);
  const [schoolMinutes, setSchoolMinutes] = useState<number>(0);
  const [schoolSeconds, setSchoolSeconds] = useState<number>(0);

  const [cruiseDays, setCruiseDays] = useState<number>(0);
  const [cruiseHours, setCruiseHours] = useState<number>(0);
  const [cruiseMinutes, setCruiseMinutes] = useState<number>(0);
  const [cruiseSeconds, setCruiseSeconds] = useState<number>(0);

  const [christmasDays, setChristmasDays] = useState<number>(0);
  const [christmasHours, setChristmasHours] = useState<number>(0);
  const [christmasMinutes, setChristmasMinutes] = useState<number>(0);
  const [christmasSeconds, setChristmasSeconds] = useState<number>(0);

  const [weddingDays, setWeddingDays] = useState<number>(0);
  const [weddingHours, setWeddingHours] = useState<number>(0);
  const [weddingMinutes, setWeddingMinutes] = useState<number>(0);
  const [weddingSeconds, setWeddingSeconds] = useState<number>(0);

  let countDownSuncorpDate = new Date(2023, 10, 6, 8, 30, 0).getTime();
  let countDownSchoolDate = new Date(2023, 11, 2, 0, 0).getTime();
  let countDownCruiseDate = new Date(2023, 11, 6, 10, 0).getTime();
  let countDownChristmasDate = new Date(2023, 11, 25, 0, 0).getTime();
  let countDownWeddingDate = new Date(2024, 2, 23, 15, 0).getTime();

  useEffect(() => {
    var updateTime = setInterval(() => {
      var now = new Date().getTime();
      var differenceSuncorp = countDownSuncorpDate - now;
      var differenceSchool = countDownSchoolDate - now;
      var differenceCruise = countDownCruiseDate - now;
      var differenceChristmas = countDownChristmasDate - now;
      var differenceWedding = countDownWeddingDate - now;

      var newSuncorpDays = Math.floor(
        differenceSuncorp / (1000 * 60 * 60 * 24)
      );
      var newSuncorpHours = Math.floor(
        (differenceSuncorp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var newSuncorpMinutes = Math.floor(
        (differenceSuncorp % (1000 * 60 * 60)) / (1000 * 60)
      );
      var newSuncorpSeconds = Math.floor(
        (differenceSuncorp % (1000 * 60)) / 1000
      );

      var newSchoolDays = Math.floor(differenceSchool / (1000 * 60 * 60 * 24));
      var newSchoolHours = Math.floor(
        (differenceSchool % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var newSchoolMinutes = Math.floor(
        (differenceSchool % (1000 * 60 * 60)) / (1000 * 60)
      );
      var newSchoolSeconds = Math.floor(
        (differenceSchool % (1000 * 60)) / 1000
      );

      var newCruiseDays = Math.floor(differenceCruise / (1000 * 60 * 60 * 24));
      var newCruiseHours = Math.floor(
        (differenceCruise % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var newCruiseMinutes = Math.floor(
        (differenceCruise % (1000 * 60 * 60)) / (1000 * 60)
      );
      var newCruiseSeconds = Math.floor(
        (differenceCruise % (1000 * 60)) / 1000
      );

      var newChristmasDays = Math.floor(
        differenceChristmas / (1000 * 60 * 60 * 24)
      );
      var newChristmasHours = Math.floor(
        (differenceChristmas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var newChristmasMinutes = Math.floor(
        (differenceChristmas % (1000 * 60 * 60)) / (1000 * 60)
      );
      var newChristmasSeconds = Math.floor(
        (differenceChristmas % (1000 * 60)) / 1000
      );

      var newWeddingDays = Math.floor(
        differenceWedding / (1000 * 60 * 60 * 24)
      );
      var newWeddingHours = Math.floor(
        (differenceWedding % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var newWeddingMinutes = Math.floor(
        (differenceWedding % (1000 * 60 * 60)) / (1000 * 60)
      );
      var newWeddingSeconds = Math.floor(
        (differenceWedding % (1000 * 60)) / 1000
      );
      setSuncorpDays(newSuncorpDays);
      setSuncorpHours(newSuncorpHours);
      setSuncorpMinutes(newSuncorpMinutes);
      setSuncorpSeconds(newSuncorpSeconds);

      setSchoolDays(newSchoolDays);
      setSchoolHours(newSchoolHours);
      setSchoolMinutes(newSchoolMinutes);
      setSchoolSeconds(newSchoolSeconds);

      setCruiseDays(newCruiseDays);
      setCruiseHours(newCruiseHours);
      setCruiseMinutes(newCruiseMinutes);
      setCruiseSeconds(newCruiseSeconds);

      setChristmasDays(newChristmasDays);
      setChristmasHours(newChristmasHours);
      setChristmasMinutes(newChristmasMinutes);
      setChristmasSeconds(newChristmasSeconds);

      setWeddingDays(newWeddingDays);
      setWeddingHours(newWeddingHours);
      setWeddingMinutes(newWeddingMinutes);
      setWeddingSeconds(newWeddingSeconds);

      if (differenceSuncorp <= 0) {
        clearInterval(updateTime);
        setSuncorpDays(0);
        setSuncorpHours(0);
        setSuncorpMinutes(0);
        setSuncorpSeconds(0);
      }

      if (differenceSchool <= 0) {
        clearInterval(updateTime);
        setSchoolDays(0);
        setSchoolHours(0);
        setSchoolMinutes(0);
        setSchoolSeconds(0);
      }

      if (differenceCruise <= 0) {
        clearInterval(updateTime);
        setCruiseDays(0);
        setCruiseHours(0);
        setCruiseMinutes(0);
        setCruiseSeconds(0);
      }

      if (differenceChristmas <= 0) {
        clearInterval(updateTime);
        setChristmasDays(0);
        setChristmasHours(0);
        setChristmasMinutes(0);
        setChristmasSeconds(0);
      }

      if (differenceWedding <= 0) {
        clearInterval(updateTime);
        setWeddingDays(0);
        setWeddingHours(0);
        setWeddingMinutes(0);
        setWeddingSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center bg-green-950">
      <Head>
        <title>Countdown!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header message={"Things coming up in the life of B & Bells"} />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full text-center">
          <h1 className="text-xl p-3">Brandon starts new job at suncorp</h1>
          <TimerContainer
            days={suncorpDays}
            hours={suncorpHours}
            minutes={suncorpMinutes}
            seconds={suncorpSeconds}
          />
          <h1 className="text-xl p-3">Bells finishes school year</h1>
          <TimerContainer
            days={schoolDays}
            hours={schoolHours}
            minutes={schoolMinutes}
            seconds={schoolSeconds}
          />
          <h1 className="text-xl p-3">Cruising 🛳️</h1>
          <TimerContainer
            days={cruiseDays}
            hours={cruiseHours}
            minutes={cruiseMinutes}
            seconds={cruiseSeconds}
          />
        </div>
        <div className="w-full md:w-1/2 h-full text-center">
          <h1 className="text-xl p-3">Christmas 🎄</h1>
          <TimerContainer
            days={christmasDays}
            hours={christmasHours}
            minutes={christmasMinutes}
            seconds={christmasSeconds}
          />

          <h1 className="text-xl p-3">👰🤵‍♂️</h1>
          <TimerContainer
            days={weddingDays}
            hours={weddingHours}
            minutes={weddingMinutes}
            seconds={weddingSeconds}
          />
        </div>
      </div>
      <div className="flex">
        <Image
          src="/angry-goose.png" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Angry Goose"
          style={flipImage}
        />
        <Image
          src="/angry-goose.png" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Angry Goose"
        />
      </div>
    </div>
  );
};

export default Home;
