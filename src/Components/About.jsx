import React from 'react'
import vedio from '../assets/coding.mp4'

const About = () => {
  return (
    <div className='bg-[#091525] h-[70vh] md:h-[90vh] md:grid md:grid-cols-2'>
<div className=' my-10 mx-20'>
    <h1 className='md:text-5xl text-2xl font-bold text-white md:ml-[50px] md:py-0 py-10  md:mt-[100px]'>At TripPixie, we are ready
    to provide you with the 
    best trip of life!</h1>
    <p className='text-white md:ml-10 md:mx-10 text-1xl my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, alias.</p>
    <button className='bg-yellow-300 p-[10px] ml-[10px]  md:ml-10 hover:bg-purple-800 rounded-full w-[200px]'>Destinations</button>
    </div>
    <div  className=' my-10 mx-20'>
    <video src={vedio} data-aos="fade-up"  autoPlay loop muted className='md:w-[500px] w-[100%]  md:h-[500px] rounded-3xl' ></video>
    </div>
    </div>
  )
}

export default About