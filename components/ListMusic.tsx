


import Image from 'next/image';

interface Iitem {
    playList: Array<{title: string, fullName: string , srcMusic: string, imgSrc: string}>;
    setCurrnstSong: any;
    currentSong: number;
}

export default function ListMusic(item : Iitem) {
    return (
        <div className="mt-3 flex flex-col space-y-6 overflow-y-scroll px-12 ">
                
        {item.playList.map((ele , index) => (

            <div
            key={index} // Add key prop
            className="flex items-center space-x-4"
            onClick={() => item.setCurrnstSong(index)}
            >

                <Image
                    className="w-20 h-20 rounded-xl object-cover"
                    src={ele.imgSrc}
                    alt={''}
                    loading="lazy"
                    width={0}
                    height={0}
                    sizes="100vw"
                />

                <div className='flex flex-col text-left dark:text-white'>
                    <span className='font-bold text-sm '>{ele.fullName}</span>
                </div>

            </div>

        ))}
        
        </div>
    )
}