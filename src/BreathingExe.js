import React, { useEffect, useState, useRef } from "react";
import app from "./configuration";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import breathe_photo from "./images/photo_with_arrows.png";
import play from "./images/play_button.png";
import pause from './images/pause.png';
import './BreathingExe.css';
import Countdown, { CountdownApi } from 'react-countdown';
import NewTimer from "./NewTimer";
import Sound from 'react-sound';
import music from './images/music.mp3';

//icons from flaticon
/**music:
Music track: Meditation by Aylex
Source: https://freetouse.com/music
No Copyright Background Music
 */

function BreathingExercise(){
    const stages = ['Inhale', 'Hold', 'Exhale', 'Hold'];
    const [stageIndex, setStageIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="breathe">
            <div className="inhale-exhale">
                <h2>{stages[stageIndex] + ' ('}</h2>
                <br/>
                <NewTimer isPlaying={isPlaying} changeStage={() => stageIndex < 3 ? setStageIndex(stageIndex + 1) : setStageIndex(0)}/>
            </div>
            <Sound
                url={music}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
                volume={50}
            />
            
            
            <button id ='play-pause' onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <img src={pause} alt="pause"/> 
                : <img src={play} alt="play"/>}
            </button>
        </div>
    );
}

export default BreathingExercise;