import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { useEffect } from "react";
import { useState } from "react";

const NDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p className="clock">{format(date, "do LLLL yyy - H:mm:ss", { locale: pl })}</p>
};

export default NDate;
