"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image"; 
import {motion} from "framer-motion";
import ListMusic from "@/components/ListMusic";
import ProgressBar from "@/components/ProgressBar";
import Controls from "@/components/Controls";

const boxVariants = {
  checked: {rotateY: 360},
};

export default function Home() {
  
  const [musicList] = useState<Array<{title: string, fullName: string , srcMusic: string, imgSrc: string}>>([
    {
      title: "Siyasiyabend",
      fullName: "Hayyam - Siyasiyabend",
      srcMusic: "/music/hayyam.mp3",
      imgSrc: "/images/siyasiyabend.jpg"
    },
    {
      title: "Gaye Su Akyol",
      fullName: "İstersen Hiç Başlamasın - Gaye Su Akyol",
      srcMusic: "/music/istersenhicbaslamazsin.mp3",
      imgSrc: "/images/gayesuakyol.jpg"
    },
    {
      title: "Dedublüman",
      fullName: "Sen Bilmezsin - Dedublüman",
      srcMusic: "/music/SenBilmezsin.mp3",
      imgSrc: "/images/dedubluman.jpg"
    },
    {
      title: "Siyasiyabend",
      fullName: "Can Evimden Vurdun - Siyasiyabend",
      srcMusic: "/music/canevimdenvurdun.mp3",
      imgSrc: "/images/siyasiyabend2.jpg"
    },
    {
      title: "Talha Yıldırır",
      fullName: "Siren Sesi - Talha Yıldırır",
      srcMusic: "/music/sirensesi.mp3",
      imgSrc: "/images/talhayildirir.jpg"
    },
    {
      title: "Barış Kocatürk",
      fullName: "Sararmış Kağıt - Barış Kocatürk",
      srcMusic: "/music/sararmiskagit.mp3",
      imgSrc: "/images/bariskocaturk.jpg"
    },
    {
      title: "Teoman",
      fullName: "N'apim Tabiatım Böyle - Teoman",
      srcMusic: "/music/napimtabiatimboyle.mp3",
      imgSrc: "/images/teoman.jpg"
    },
    {
      title: "Haymatlos",
      fullName: "Müzeyyen - Haymatlos",
      srcMusic: "/music/muzeyyen.mp3",
      imgSrc: "/images/muzeyyen.jpg"
    },
    {
      title: "Karsu",
      fullName: "Siyah - Karsu",
      srcMusic: "/music/karsusiyah.mp3",
      imgSrc: "/images/karsu.jpg"
    },
    {
      title: "Biz",
      fullName: "Dünya Büküüldü - Biz",
      srcMusic: "/music/dunyabukuldu.mp3",
      imgSrc: "/images/biz.jpg"
    },
    {
      title: "Tepki",
      fullName: "LAMBALAR VE KELEBEK - Tepki",
      srcMusic: "/music/lambalar.mp3",
      imgSrc: "/images/bxtu.jpg"
    },
  ]);

const [playList , setPlayList] = useState<Array<{title: string, fullName: string , srcMusic: string, imgSrc: string}>>(
musicList
);

const [currentMusicIndex, setCurrentMusicIndex] = useState<number>(0);
const audioPlayer = useRef<HTMLAudioElement | null>(null);

const [open , setOpen] = useState<boolean>(false);
const [dark , setDark] = useState<boolean>(false);

const [repeatSong, setRepeatSong] = useState<boolean>(false); 
const [duration, setDuration] = useState<number>();
const [time, setTime] = useState<number>();
const [playPause, setPlayPause] = useState<boolean>(false);

const playAnimationRef = useRef<any>(); 
const progressBarRef = useRef<any>();

const repeat = () => {
  const currentTimeNow = audioPlayer.current?.currentTime;
  setTime(currentTimeNow);

  if(duration) {
    progressBarRef.current.value = currentTimeNow;
    progressBarRef.current.style.setProperty (
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

      if(duration === audioPlayer.current?.currentTime){
        if(repeatSong) {
          setCurrentMusicIndex(currentMusicIndex);
        }else {
          if(currentMusicIndex != musicList.length - 1) {
            setCurrentMusicIndex(currentMusicIndex + 1);
        } else {
          setCurrentMusicIndex(0);
        }
      }
  }
}
  playAnimationRef.current = requestAnimationFrame(repeat);
};

useEffect(() => {
  if(audioPlayer.current && playPause === true) {
    audioPlayer.current.play();
  }
  if(audioPlayer.current && playPause === false) {
    audioPlayer.current.pause();
  }
  playAnimationRef.current = requestAnimationFrame(repeat);
// eslint-disable-next-line react-hooks/exhaustive-deps
},[audioPlayer.current , playPause, repeat])

const isPlayMusic = () => {
  setPlayPause(!playPause);
}

const onLoadedMetadata = () => {
  const seconds = audioPlayer.current?.duration;
  setDuration(seconds);
  progressBarRef.current.max = seconds;
};

  return (
    <div className={`${dark && "dark"}`}>
      <audio ref={audioPlayer} src={playList[currentMusicIndex].srcMusic} onLoadedMetadata={onLoadedMetadata}></audio>
    
      <div className="absolute top-0 -z-10">
        <Image
        className="fixed h-full w-full scale-[1.1] object-cover blur-md"
        loading= "lazy"
        src={playList[currentMusicIndex].imgSrc}
        alt={''}
        width="0"
        height={"0"}
        sizes="100vw"
        />
      </div>

<motion.div 
transition={{duration:0.3}}
animate={open?{height:700}: {height:100}}
initial={{height:100}}
className="fixed inset-x-0 top-0 flex flex-col items-center rounded-b-[50px] border-x border-b border-white bg-white bg-opacity-30 pb-8 backdrop-blur-sm dark:bg-black dark:border-none dark:bg-opacity-70 "
>
  <div className="flex w-full items-center justify-between px-7 py-2">
    <div className="borderKenar flex h-14 w-14 items-center justify-center rounded-full bg-white bg-opacity-50 backdrop-blur-sm">

    <svg 
    width="26"
    height="26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
    <path 
    fill="#424040"
    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
    </svg>

    </div>
    <div className="mt-4 flex flex-col items-center dark:text-white">
      <span className="text-shadow text-xl font-medium">Özgür Enes</span>
      <span className="text-base font-medium opacity-70">Dünyanın Karşısındaki Ev</span>
    </div>
    <div onClick={() => setDark(!dark)}
      className='borderKenarr flex h-14 w-14 items-center justify-center rounded-full bg-white bg-opacity-50 backdrop:blur-sm'>

        <motion.svg
        initial={false}
        animate={dark ? "checked" : "unchecked"}
        width="24"
        height="24"
        viewBox={"0 0 24 24"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="focus:outline-none"
        >
         {!dark ? (
          <motion.path
           d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          fill="#424040"
         variants={boxVariants}
         />
        ): (
           <motion.path
           transition={{duration:1, ease: [0.04, 0.62, 0.23, 0.98]}}
            d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           fill="#DADADA"
          variants={boxVariants}
         />
         )} 
        </motion.svg>

    </div>
  </div>

  {open && (
    <ListMusic
    playList={playList}
    setCurrnstSong={setCurrentMusicIndex}
    currentSong={currentMusicIndex}
    />
  )}

  <div className="absolute bottom-2 " onClick={() => setOpen(!open)}>
    <motion.svg
    initial={false}
    animate={open ? "checked" : "close"}
    width="30"
    height="30"
    viewBox="0 0 20 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="focus:outline-none"
    >

    <motion.path
    transition={{duration:0.7, ease: [0.04, 0.62, 0.23, 0.98]}}
   d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
   className="fill-[#424040] dark:fill-white"
    variants={{checked: {rotate: 180}}}
    />

    </motion.svg>
  </div>
</motion.div>

      {!open && (
        <div className="mt-36 flex justify-center">
       <Image
          className="w-4/5 lg:w-[400px] h-[250px] rounded-3xl object-cover shadow-lg"
          src={playList[currentMusicIndex].imgSrc}
          alt={''}
          loading="lazy"
          width="0"
          height={"0"}
          sizes="100vw"                            
        />
        </div>
      )}


      {!open ? (
        <div className="fixed inset-x-0 bottom-0 flex flex-col items-center rounded-t-[50px] border-x border-t border-white bg-white bg-opacity-30 pb-5 backdrop-blur-sm dark:border-none dark:bg-black dark:bg-opacity-70">
          <div className="mt-6 h-[5px] w-32 rounded-full bg-black bg-opacity-50 backdrop-blur-sm dark:bg-white dark:bg-opacity-70"/>
            
            <div className="mt-4 mb-4 flex w-full items-center justify-between px-12 ">
              <div className="flex flex-col items-start dark:text-white">
                <span className="text-left text-xs  font-semibold">
                  {playList[currentMusicIndex].fullName}
                </span>
                <span className="text-xl opacity-60">{playList[currentMusicIndex].title}</span>
              </div>

                <Image
                className="w-16 h-16 rounded-xl object-contain "
                src={playList[currentMusicIndex].imgSrc}
                alt={''}
                loading="lazy"
                width="0"
                height={"0"}
                sizes="100vw"                            
              />
            </div>

            <ProgressBar
              progrezssBarRef={progressBarRef}
              audioPlayer={audioPlayer}
              musicList={musicList}
              setPlayList={setPlayList}
              repeatSong={repeatSong}
              setCurrentSongÇ={setCurrentMusicIndex}
              currentSong={currentMusicIndex}
              playAnimationRef={playAnimationRef}
              setRepeatSong={setRepeatSong}
              duration={duration}
              setTime={setTime}
              time={time}
            />

            <Controls
            playPause={playPause}
            isPlayMusic={isPlayMusic}
            audioPlayer={audioPlayer}
            currentSong={currentMusicIndex}
            setCurrentSong={setCurrentMusicIndex}
            musicList={musicList}
            />

            </div>
      ) : (
    <></>
      )}


    </div>

    
  );
}
