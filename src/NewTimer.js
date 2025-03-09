import React, { useEffect, useState } from "react";

export default function NewTimer({isPlaying, changeStage}) {
    const [time, setTime] = useState(4);
  
    useEffect(() => {
        if (isPlaying) {
            let timer = setTimeout(() => {
                  if (time === 0) {
                    setTime(4);
                    changeStage();
                  } else {
                    setTime(time - 1);
                    console.log(time);
                  }
              }, 1250);
        }
    }, [isPlaying, time]);
  
    return (
      <div className="App">
        <p>
          {time})
        </p>
      </div>
    );
  }