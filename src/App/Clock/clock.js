import addDays from "date-fns/addDays";
import { useEffect, useStage } from "react";

const NDate = () => {
  const [date, setDate] = useStage(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return date;
};

export default NDate;
