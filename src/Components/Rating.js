import React from 'react'
import globe from '../Assests/svg/global.svg';
import map from '../Assests/svg/map.svg';
import user from '../Assests/svg/user.svg';
import star from '../Assests/svg/star.svg';

const Rating = () => {

    const RatingContent =[
        {id: '1', Ratings: '28k', svg: user, text: 'Total User', color:'#CDEDFF'},
        {id: '2', Ratings: '12k', svg: map, text: 'Total Tour', color:'#ffeee3'},
        {id: '3', Ratings: '64k', svg: globe, text: 'Social Likes', color:'#ffd8fb'},
        {id: '4', Ratings: '14k', svg: star, text: '5 Star Ratings', color:'#e0ffc8'},
    ]

  return (
    <>
      <div className='RatingCont px-44 bg-gray-100 flex p-11 justify-evenly items-center'>
        
        
        {RatingContent.map(rat => (
            <div key={rat.id} className='RatingCard bg-white p-4 px-14 rounded-3xl flex flex-col justify-center items-center gap-5'>
            <img src={rat.svg} alt="" className='svg font-extrabold'/>
            <div className={`Ratings p-5 px-8  text-2xl font-bold rounded-full bg-[${rat.color}]`}>{rat.Ratings}</div>
            <div className='text text-sm font-extrabold'>{rat.text}</div>
        </div>
        ))}
            {/* <div className='RatingCard bg-white p-4 px-14 rounded-3xl flex flex-col justify-center items-center gap-5'>
                <img src={user} alt="" className='svg font-extrabold'/>
                <div className='Ratings p-5 px-8 bg-[#e0ffc8] text-2xl font-bold rounded-full'>28K</div>
                <div className='text text-sm font-extrabold'>Total Users</div>
            </div> */}
            
            {/* <div className='RatingCard bg-white p-4 px-14 rounded-3xl flex flex-col justify-center items-center gap-5'>
                <img src={user} alt="" className='font-extrabold'/>
                <div className='p-5 px-8 bg-[#CDEDFF] text-2xl font-bold rounded-full'>28K</div>
                <div className='text-sm font-extrabold'>Total Users</div>
            </div>
            
            <div className='RatingCard bg-white p-4 px-14 rounded-3xl flex flex-col justify-center items-center gap-5'>
                <img src={user} alt="" className='font-extrabold'/>
                <div className='p-5 px-8 bg-[#CDEDFF] text-2xl font-bold rounded-full'>28K</div>
                <div className='text-sm font-extrabold'>Total Users</div>
            </div>
            
            <div className='RatingCard bg-white p-4 px-14 rounded-3xl flex flex-col justify-center items-center gap-5'>
                <img src={user} alt="" className='font-extrabold'/>
                <div className='p-5 px-8 bg-[#CDEDFF] text-2xl font-bold rounded-full'>28K</div>
                <div className='text-sm font-extrabold'>Total Users</div>
            </div> */}
            
      </div>
    </>
  )
}

export default Rating
