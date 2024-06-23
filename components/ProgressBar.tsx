import { useEffect, useState } from "react";


interface Iitem {
    progrezssBarRef: any;
    audioPlayer: any;
    musicList: Array<{title: string, fullName: string , srcMusic: string, imgSrc: string}>;
    setPlayList: any;
    repeatSong: boolean;
    setCurrentSongÇ: any;
    currentSong: number;
    playAnimationRef: any;
    setRepeatSong: any;
    duration: any;
    setTime: any;
    time: any;
    small?: boolean;
}


export default function ProgressBar(item : Iitem) {
    
    const[shuffle, setShuffle] = useState<boolean>(false);
    const handleProgressChange = () => {
        if(item.audioPlayer.current.currentTime != undefined) {
            item.audioPlayer.current.currentTime = item.progrezssBarRef.current?.value;
        }
    };

    const formatTime = (time: any) => {
        if(time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}` ;
            const seconds = Math.floor(time % 60);
            const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatMinutes}:${formatSeconds}`;
        }
        return "00:00";
    };

    useEffect(() => {
        if(shuffle) {
            const randomizeArray = [...item.musicList].sort(() => Math.random() );
            item.setPlayList(randomizeArray.slice(0, item.musicList.length));
        } else {
            item.setPlayList(item.musicList)
    }
    }, [shuffle, item]);
    
    return <div className="mt-1 flex w-9/12 flex-col space-y-2">
        {!item.small && (
            <div className="mb-1 flex justify-between">
                <svg 
                width="18"
                height="18"
                fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512"
                 onClick={() => item.setRepeatSong(!item.repeatSong)}
                 >
                
                    
                 <path
                  d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"
                  fill="#424040"
                  className={`${item.repeatSong ? "fill-black dark:fill-red-600": "fill-[#424040] dark:fill-white"}`}
                />
                </svg>

                <svg 
                    width="22"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    onClick={() => setShuffle(!shuffle)}
                >
                 
                   <path 
                    
                     d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"
                                     className={`${shuffle ? "fill-black dark:fill-red-600": "fill-[#424040] dark:fill-white"}`}
                                     />
                    
                    <path 
                    
                    d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"
                                      className={`${shuffle ? "fill-black dark:fill-red-600": "fill-[#424040] dark:fill-white"}`}
                                      />
                    </svg>
            </div>
        )}
        <input
        id="myinput"
         type="range"
         ref={item.progrezssBarRef}
         defaultValue="0"
         onChange={handleProgressChange}
            className="accent-red-600"
        />
        <div className="flex justify-between font-semibold dark:text-white">
            <span>{formatTime(item.time)}</span>
            <span>{formatTime(item.duration)}</span>
        </div>
    </div>
     
}
