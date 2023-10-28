import React from 'react'
import hero from '../assets/hero.jpg'

const Home = () => {
    return (
        <div className='max-w-[1240px]  m-auto'>
        <div className=' m-auto md:grid md:grid-cols-2'>
            <div className=' md:ml-10 mx-10 '>
                <h1 className=' mt-10 md:mt-36 ml-10 md:text-5xl  text-5xl font-bold'>Discover the Best
                    Destination</h1>
                <p className=' mt-5 mx-5 ml-10  md:ml-10'>Lorem ipsum dolor sitr olorum rem quis adipisci<br />
                    dolorum rem quis, reprehenderit?</p>
                <button className='bg-yellow-300 p-[10px] ml-[70px] my-10 rounded-full w-[200px]'>Destinations</button>
            </div>
            <div className='  mx-5  my-5'>
                <img src={hero} alt="" />
            </div>

        </div>
        </div>
    )
}

export default Home