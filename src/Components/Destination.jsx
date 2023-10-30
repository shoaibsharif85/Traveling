import React from 'react'
import dest1 from '../assets/dest1.jpg'
import dest2 from '../assets/dest2.jpg'
import dest3 from '../assets/dest3.jpg'


const Destination = () => {
    return (

        <div>
            <h1 className='text-center md:text-5xl text-4xl font-bold  my-20'>Most Popular Destinations</h1>
            <div className='max-[1240px] my-20 mx-10 m-auto md:grid md:grid-cols-3'>

                <div className='md:w-[400px] w-[250px] mx-5 rounded-lg  bg-[#c3caca]'>
                    <img src={dest1} alt="" className=' md:w-[400px]  w-[300px] md:h-[250px]  rounded-lg' />
                    <h1 className='text-center my-6 text-3xl'>Paris,France</h1>
                    <p className='text-center mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus sint nostrum illo corporis
                        </p>
                        <button className='bg-yellow-300 hover:bg-purple-800 p-[10px] ml-[50px] md:ml-[100px] my-5 rounded-full w-[120px]'>Destinations</button>
                </div> 
                <div className='md:w-[400px] w-[250px] rounded-lg mx-5 md:my-1 my-20  bg-[#c3caca]'>
                    <img src={dest2} alt="" className=' md:w-[400px]  w-[300px] md:h-[250px] rounded-lg' />
                    <h1 className='text-center my-6 text-3xl'>Dubai,UAE</h1>
                    <p className='text-center mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus sint nostrum illo corporis
                       </p>
                       <button className='bg-yellow-300 hover:bg-purple-800 p-[10px] ml-[50px] md:ml-[100px] my-5 rounded-full w-[120px]'>Destinations</button>
                </div>
                <div className='md:w-[400px] w-[250px] mx-5  rounded-lg bg-[#c3caca]'>
                    <img src={dest3} alt="" className='md:w-[400px]  w-[300px] md:h-[250px] rounded-lg' />
                    <h1 className='text-center my-6 text-3xl'>Venice,Italy</h1>
                    <p className='text-center mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus sint nostrum illo corporis
                       </p>
                       <button className='bg-yellow-300 hover:bg-purple-800 p-[10px] ml-[70px] md:ml-[100px] my-5 rounded-full w-[120px]'>Destinations</button>
                </div>

            </div>
        </div>
    )
}

export default Destination