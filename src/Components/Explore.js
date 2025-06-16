
import React, { useRef, useState } from 'react';
import H1 from '../Assests/img/expH1.png';
import img1 from '../Assests/img/img-1.jpg';
import img2 from '../Assests/img/img-2.jpg';
import img3 from '../Assests/img/img-3.jpg';
import img4 from '../Assests/img/img-4.jpg';
import cloud from '../Assests/img/cloud.png';
import cloud2 from '../Assests/img/cloud2.png';
import navigate from '../Assests/svg/Navi.svg';
import search from '../Assests/svg/Search.svg';
import Footer from './Footer';
import Rat from '../Assests/svg/Rating.svg';
import { getACLocation, getAttractions } from '../ApiData/ApiData';
import { BounceLoader } from 'react-spinners';

const Explore = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [attraction, setAttraction] = useState([]);
  const ContRef = useRef(null);

  const ChangeQuery = (e) => setQuery(e.target.value);

  const handlequery = async () => {
    setLoading(true);
    setSuggestions([]);
    setAttraction([]);

    if (ContRef.current) {
      ContRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    try {
      const LocaS = await getACLocation(query);
      if (LocaS && LocaS.length > 0) {
        const LocId = LocaS[0].result_object.location_id;
        const AttractionsDt = await getAttractions(LocId);
        setAttraction(AttractionsDt);
      }
      setSuggestions(LocaS);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div className="pt-28">
      <div className="relative flex flex-col-reverse lg:flex-row gap-8 items-center px-6 lg:px-24">
        <img src={cloud2} alt="cloud2" className="absolute top-0 left-0 z-0 w-full hidden lg:block" />

        <div className="z-10 w-full lg:w-2/3">
        <div>
<img src={H1} alt="" className=' w-full h-full m-5'/>
        </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#E6F4F2]">
            <label className="block text-gray-700 font-semibold mb-3 text-lg">Where would you like to go?</label>
            <div className="flex gap-4">
              <div className="flex items-center w-full border-b border-gray-300">
                <img src={navigate} alt="navigate" className="w-5 h-5 mr-2" />
                <input
                  type="text"
                  placeholder="Type your dream destination..."
                  value={query}
                  onChange={ChangeQuery}
                  className="w-full py-2 bg-transparent outline-none"
                />
              </div>
              <button onClick={handlequery} className="bg-[#41D6C7] p-3 rounded-full shadow-md hover:scale-105 transition">
                <img src={search} alt="search" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 relative">
          <img src={cloud} alt="cloud" className="absolute top-0 right-0 hidden lg:block w-60" />
          <div className="grid grid-cols-2 gap-4">
            <img src={img1} alt="img1" className="rounded-xl object-cover shadow-md items-end mt-44" />
            <img src={img3} alt="img3" className="rounded-xl object-cover shadow-md" />
            <img src={img4} alt="img4" className="rounded-xl object-cover shadow-md" />
            <img src={img2} alt="img2" className="rounded-xl object-cover shadow-md" />
          </div>
        </div>
      </div>

      {attraction.length > 0 && (
        <h2 className="text-center text-2xl font-black mt-20">Top Attractions in <span className="text-[#41D6C7]">{query}</span></h2>
      )}

      <div
        ref={ContRef}
        className={`relative mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-24 ${loading ? 'h-[40vh]' : 'h-fit'}`}
      >
        {loading && (
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
            <BounceLoader color="#41D6C7" />
          </div>
        )}

        {error && (
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-red-600 text-sm">
            Sorry, we couldn't find that location. Please try another place.
          </div>
        )}

       {attraction.map((loc, index) =>
          loc.name && loc.photo && loc.photo.images ? (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition duration-300"
            >
              <img
                src={loc.photo.images.medium.url}
                alt={loc.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-white/80 backdrop-blur px-2 py-1 rounded-md text-xs font-semibold text-gray-800">
                {loc.open_now_text}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">{loc.name}</h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">📍 {loc.address}</p>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                    <img src={Rat} alt="rating" className="w-4 h-4" /> {loc.rating}
                  </span>
                  <a
                    href={loc.website || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#41D6C7] font-medium hover:underline"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Explore;