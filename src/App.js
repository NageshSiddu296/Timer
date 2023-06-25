import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(10);

      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount === 0) {
            clearInterval(interval); // Stop the timer
            return 0;
          }
          return prevCount - 1;
        });
      }, 1000);

      // Clean up the interval when the component unmounts or when the count reaches 0
      return () => {
        // clearInterval(interval);
        clearTimeout(timer);
      };
    }, 3000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {count !== null ? <h1>{count}</h1> : <h1>Waiting...</h1>}
    </div>
  );
};

export default Timer;
