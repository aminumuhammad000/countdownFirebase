import { useEffect, useState } from "react";
import "./App.css";
import Box from "./Box";

const TARGET_DATE = new Date("2024-10-01T23:59:59");

const getLeft = () => {
  const totalTime = TARGET_DATE.getTime() - new Date().getTime();
  const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
  const minuts = Math.floor((totalTime / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTime / 1000) % 60);
  return { days, hours, minuts, seconds };
};
const App = () => {
  const [timeLeft, setTimeLeft] = useState(() => getLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getLeft());
    });
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h3>we're lunching soon</h3>
      <div className="wrapper">
        <Box title="day">{timeLeft.days}</Box>
        <Box title="hours">{timeLeft.hours}</Box>
        <Box title="minuts">{timeLeft.minuts}</Box>
        <Box title="seconds">{timeLeft.seconds}</Box>
      </div>
    </>
  );
};

export default App;
