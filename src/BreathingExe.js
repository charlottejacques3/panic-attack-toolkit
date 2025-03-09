import React, { useEffect, useState, useRef } from "react";
import app from "./configuration";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import breathe_photo from "./images/photo_with_arrows.png";
import play from "./images/play_button.png";
import pause from './images/pause.png';
import './BreathingExe.css';
import Countdown, { CountdownApi } from 'react-countdown';

//icons from flaticon

function BreathingExercise(){
    const stages = ['Inhale', 'Hold', 'Exhale', 'Hold'];
    const [playing, setPlaying] = useState(false);//not playing show play button
    const [stageIndex, setStageIndex] = useState(0);
    
    const [k, setK] = useState(false);
    var countdownApi = null;

    function handlePause() {
        if (playing) {
            countdownApi && countdownApi.pause();
        } else {
            countdownApi && countdownApi.start();
        }
        setPlaying(!playing)
    }

    function setRef(countdown) {
        if (countdown) {
            countdownApi = countdown.getApi();
        }
    }

    function onTimerComplete() {
        stageIndex < 3 ? setStageIndex(stageIndex + 1) : setStageIndex(0);
        setK(!k);
    }

    const renderer = ({seconds}) => {
        return <h2> {seconds})</h2>;
    }

    return (
        <div className="breathe">
            <div className="inhale-exhale">
                <h2>{stages[stageIndex] + ' ('}</h2>
                <br/>
                <Countdown 
                    date={Date.now() + 4000} 
                    key={k}
                    onComplete={onTimerComplete}
                    renderer={renderer}
                    controlled={false}
                    autoStart={false}
                    ref={setRef}
                />
            </div>
            
            <button id ='play-pause' onClick={handlePause}>
                {playing ? <img src={pause} alt="pause"/> 
                : <img src={play} alt="play"/>}
            </button>
        </div>
    );
}

export default BreathingExercise;