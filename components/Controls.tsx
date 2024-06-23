import { useRef } from "react";

interface Iitem {
    playPause: boolean;
    isPlayMusic: any;
    audioPlayer: any;
    currentSong: number;
    setCurrentSong: any;
    musicList: Array<{title: string, fullName: string , srcMusic: string, imgSrc: string}>;
}

export default function Controls(item : Iitem) {

    const handleTime =(ele: string) => {
        if(ele === 'back') {
            item.audioPlayer.current.currentTime = item.audioPlayer.current.currentTime - 10;
        } else {
            item.audioPlayer.current.currentTime = item.audioPlayer.current.currentTime + 10;
        }
    };

    const handleMusic = (ele: string) => {
        if(ele === 'next') {
            if(item.currentSong != item.musicList.length - 1) {
                item.setCurrentSong(item.currentSong + 1);
            } else {
                item.setCurrentSong(0);
            }
        }
        if(ele === 'back') {
            if(item.currentSong != 0) {
                item.setCurrentSong(item.currentSong - 1);
            } else {
                item.setCurrentSong(item.musicList.length - 1);
            }
        }
    };

return <div className="mt-3 flex w-3/5 items-center justify-between">
        <div className="relative" onClick={() => handleTime("back")}>
        <svg
        width="30"
        height="30"
        fill="none"
         xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512">
        <path
         d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"
        className="fill-[#424040] dark:fill-white"
        />
        </svg>

        <span className="absolute  top-2 l left-[10px] text-[9px] font-semibold opacity-80 dark:text-white">
            10
        </span>

        </div>
  
  
<svg 
width="30"
height="30"
fill="none"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 320 512"
onClick={() => handleMusic("back")}
>

<path 
d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z"
                    className="fill-[#424040] dark:fill-white"
/>
</svg>


            {item.playPause ? 
            (<div 
                onClick={item.isPlayMusic}
                className="box-content h-[36px] w-2 border-x-8 border-x-[#424040] dark:border-x-white"/>)
             : (
             <div 
             onClick={item.isPlayMusic}
             className="box-content h-0 w-0 border-y-[18px] border-l-[25px] border-y-transparent border-l-[#424040] dark:border-l-white "/>
             )}


            <svg 
            width="30px"
            height="30px"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            onClick={() => handleMusic("next")}
            >
            <path 
            d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"
            className="fill-[#424040] dark:fill-white"
            />
            </svg>



            <div className="relative" onClick={() => handleTime("next")}>
            <svg
            width="30"
            height="30"
            fill="none"
             xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path 
            d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"
                    className="fill-[#424040] dark:fill-white"
            />
            </svg>

        <span className="absolute  top-2 l left-[10px] text-[9px] font-semibold opacity-80 dark:text-white">
            10
        </span>

        </div>
    
</div>
}