import React from 'react';
import { TiThMenu } from "react-icons/ti";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LiaYoutubeSquare } from "react-icons/lia";
import secrets from '../assets/download.jpeg';
import logo from '../assets/icon.avif';



const Body = () => {
    const dataList = [{title:"Secrets you should know !!!", img: secrets , logo:logo},{title:"Secrets you should know !!!", img: secrets , logo:logo},
        {title:"Secrets you should know !!!", img: secrets , logo:logo},{title:"Secrets you should know !!!", img: secrets , logo:logo},
        {title:"Secrets you should know !!!", img: secrets , logo:logo},{title:"Secrets you should know !!!", img: secrets , logo:logo},
        ]
    return(
      <div className='Body flex'>
         
         {/* SideNav */}
         <div className='Nav my-5 ml-3 '>
            <TiThMenu className='Menu size-8 mt-5' />
            <IoMdHome className='Home size-8 mt-5'/>
                <p className='text-black text-xs content-center'>Home</p>
            <SiYoutubeshorts className='Shorts size-8 mt-5'/>
            <p className='text-black text-xs content-center'>Shorts</p>
            <MdOutlineSubscriptions className='Subscriptions size-8 mt-5' />
                <p className='text-black text-xs content-end '>Subscriptions</p>
            <LiaYoutubeSquare className='You size-8 mt-5' />
                <p className='text-black text-xs content-center ml-1.5'>You</p>
                </div>

                {/* Content */}
                <div className='Content mt-9 ml-7 flex gap-10 justify-center  flex-wrap'>
                    {dataList?.map((data)=>{
                        return(
                            <div className='Videos'>
                            <div className='Video'>
                                <img src={data?.img} alt={data?.title+"icon"}/>
                                </div>
                                <div className='Title'>
                                    <span className='logo flex'>
                                        <img className='logo w-8 h-8' src={data?.logo}/>
                                    <h3 className='videoName font-bold'>{data?.title}</h3>
                                    </span>


                                    </div>
                                    </div>
                        );
                    }

                    )}
                  
                </div>

                </div>
    );
}
export default Body;