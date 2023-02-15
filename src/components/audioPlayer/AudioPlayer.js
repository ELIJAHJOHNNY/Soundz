import React , {useState, useRef, useEffect} from 'react';
import ProgressCircle from "./ProgessCircle";
import WaveAnimation from './WaveAnimation';
import Controls from './Controls';
import "./AudioPlayer.css";

const AudioPlayer = ({currentTrack, total, currentIndex, setCurrentIndex}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0);

    const audioSrc = total[currentIndex]?.track?.preview_url;

    const audioRef = useRef(new Audio(total[0]?.track?.preview_url));

    const intervalRef = useRef();
  
    const isReady = useRef(false);
  
    const { duration } = audioRef.current;
  
    const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

    /** Function to handle the timing of currently played track */
    const startTimer = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        if (audioRef.current.ended){
          handleNext();
        } else {
          setTrackProgress(audioRef.current.currentTime)
        }
      }, [1000]);
    };

    // /** Function to load when a track is playing */
    // useEffect(() => {
    //   if(isPlaying  && audioRef.current) {
    //     audioRef.current = new Audio(audioSrc)
    //     audioRef.current.play();
    //     startTimer();
    //     setTrackProgress(audioRef.current.currentTime)
    //   }
    //   else {
    //     clearInterval(intervalRef.current)
    //     audioRef.current.pause();}
    // }, [isPlaying])

    /** Function to handle the timing of currently played track */
  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);




    /** Function to load when the index of the song changes and the song changes */
    useEffect(() => {
      audioRef.current.pause();
      audioRef.current = new Audio(audioSrc);
      setTrackProgress(audioRef.current.currentTime);

      if (isReady.current) {
        audioRef.current.play();
        setIsPlaying(true);
        startTimer();
      } else {
        isReady.current = true
      };

    }, [currentIndex])

    /** A clean up function to remove the song when we leave the page */
    useEffect(() => {
      return () => {
        audioRef.current.pause();
        clearInterval(intervalRef.current);
      };
    }, []);

    /** Function to move to next track on the queue */
    const handleNext = () => {
      if (currentIndex < total.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else setCurrentIndex(0)
    };

    /** Function to go back to the previous track on the queue */
    const handlePrev = () => {
      if(currentIndex - 1 < 0) {
        setCurrentIndex(total.length - 1) 
      } else setCurrentIndex(currentIndex - 1)
    };

    /** Function to create a list of artists names on a track */
    let artists = [];
    currentTrack?.album?.artists.forEach(artist => {
        artists.push(artist?.name)
    });

    /** Funtion to return a zero in the track progress time when its greater than 9 */
    const addZero = (n) => {
      return n < 10 ? `0`+Math.floor(n)  : Math.floor(n) 
    }

    /** Function to change the NaN being displayed in track time progress when the song starts to 0 */
    const changeToNumber = (n) =>{
      if (isNaN(n)) {
        return "00";
      } else {
        return Math.floor(duration)
      }
    }

  return (
    <div className='w-[100%] h-[47%] my-[3%] mx-0 flex '>
        <div className='w-[37%]' >
            <ProgressCircle percentage={currentPercentage}
          isPlaying={isPlaying}
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          color="#C96850" />
        </div>
        <div className='w-[63%] flex flex-col justify-evenly items-center '>
            <p className="m-0 h-[80%] text-[50px] text-[#c4d0e3] text-center font-[700] song-title clamp" >{currentTrack?.name}</p>
            <p className='text-[14px] text-[#9aa9c2] font-[500] text-center mb-[10px] '>{artists.join(" | ")}</p>
            <div className='flex w-[50%] justify-between mb-[20px] items-center '>
                <p className='text-[20px] text-[#c4d0e3] font-[700] m-0 '>0:{addZero(trackProgress)}</p>
                <WaveAnimation isPlaying={isPlaying}/>
                <p className='text-[20px] text-[#c4d0e3] font-[700] m-0 '>0:{changeToNumber(duration)}</p>
            </div>
            <Controls 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total} 
            />
        </div>
    </div>
  )
}

export default AudioPlayer