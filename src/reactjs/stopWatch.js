import React from "react";


function StopWatch3() {
  const [time, setTime] = React.useState(0);
  const [timeOn, setTimeOn] = React.useState(false);
  React.useEffect(() => {
    let TimeInterval = null;
    setTimeOn(true);
    if (timeOn) {
      TimeInterval = setInterval(() => {
        setTime((previousTime) => previousTime + 1000);
      }, 1000);
    } else {
      clearInterval(TimeInterval);
    }
    return () => clearInterval(TimeInterval);
  }, [timeOn]);
  return time;
}

export default StopWatch3;
