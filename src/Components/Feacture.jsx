import React from 'react'
import feacture from '../assets/feature.jpg'
import service from '../assets/service.png'
import wallet from '../assets/wallet.png'
import user from '../assets/user.png'


const Feacture = () => {
  return (
    <div className='max-w-[1240px] m-auto  md:grid md:grid-cols-2'>
<div className=' ml-10 '>
<h1 className=' md:text-4xl text-4xl ml-10  font-semibold mt-20'>Get ready to Explore,<br/> Get 
    Ready to Experience!
</h1>
<p className='ml-10 mx-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit
    . Praesentium saepe aperiam quos aut voluptatem 
      dolore nostrum, optio commodi delectus dolor
      quod, asperiores et enim error mollitia
      necessitatibus voluptatum quis?</p>
      <img src={feacture} alt=""  className='w-[250px] h-[200px] mx-[50px] md:mx-[100px] rounded-3xl shadow shadow-blue-600 shadow-2xl' />
</div>
<div className=''> 
<div>
<img src={service} alt=""  className='w-[70px] mt-20 mx-10'/>
<h1 className='mx-40  mt-[-75px] font-extrabold text-2xl'>Friendly Service</h1>
<p className=' mx-10 ml-40 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo possimus alias maiores magnam laborum
    </p>
    </div>
    <div>
<img src={user} alt=""  className='w-[70px] mt-20 mx-10'/>
<h1 className='mx-40  mt-[-75px] font-extrabold text-2xl'>Unfirgetable experience</h1>
<p className=' mx-10 ml-40 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo possimus alias maiores magnam laborum
    </p>
    </div>
    <div>
<img src={wallet} alt=""  className='w-[70px] mt-20 mx-10'/>
<h1 className='mx-40  mt-[-75px] font-extrabold text-2xl'>Affordable price</h1>
<p className=' mx-10 ml-40 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo possimus alias maiores magnam laborum
    </p>
    </div>
</div>
    </div>
  )
}

export default Feacture