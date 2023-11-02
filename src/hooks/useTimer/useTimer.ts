import { useState } from "react";
import Timer from "../../index";

const useTimer = () => {
  const [timer] = useState(new Timer());

  const measureAsync = async (fn: () => Promise<any>) => {
    timer.start();
    try {
      await fn();
    } catch (error) {
      console.error(error);
    } finally {
      timer.stop();
      return timer.getElapsedTime();
    }
  };

  const measureSync = (fn: () => any) => {
    timer.start();
    try {
      fn();
    } catch (error) {
      console.error(error);
    } finally {
      timer.stop();
      return timer.getElapsedTime();
    }
  };

  return { measureAsync, measureSync };
};

export default useTimer;
