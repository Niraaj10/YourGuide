import React from 'react'
import avt1 from '../Assests/img/avatar/3d-cartoon-style-character (1).jpg';
import avt2 from '../Assests/img/avatar/portrait-beautiful-young-woman-with-stylish-hairstyle-glasses.jpg';
import avt3 from '../Assests/img/avatar/3d-cartoon-style-character.jpg';
import avt4 from '../Assests/img/avatar/androgynous-avatar-non-binary-queer-person (1).jpg';
import avt5 from '../Assests/img/avatar/androgynous-avatar-non-binary-queer-person.jpg';
import avt6 from '../Assests/img/avatar/androgynous-avatar-non-binary-queer-person (2).jpg';


const Review = () => {
    const ReviewImg = [ 
        {id: '1',},
        {id: '2',},
        {id: '3',},
        {id: '4',},
        {id: '5',},
        {id: '6',}
    ]


  return (
    <>
      <div className='ReviewPage mt-20 flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <div className='text-5xl font-bold'>What our happy clients say</div>
            <button className='mt-20 mb-5 bg-[#41D6C7] text-white font-bold p-2 px-5 rounded-3xl'>Write Review</button>
        </div>

        <div className='Imgs flex gap-14 p-40'>
            <div>
                <img src={avt1} alt="" className='w-20'/>
            </div>
            <div>
                <img src={avt2} alt="" className='w-20'/>
            </div>
            <div>
                <img src={avt3} alt="" className='w-20'/>
            </div>
            <div>
                <img src={avt4} alt="" className='w-20'/>
            </div>
            <div>
                <img src={avt5} alt="" className='w-20'/>
            </div>
            <div>
                <img src={avt6} alt="" className='w-20'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Review
