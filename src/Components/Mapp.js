import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const Mapp = () => {
//   const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
const [coordinates, setCoordinates] = useState({ lat: 18.5204, lng: 73.8567 });

  useEffect(() => {
    // Function to fetch geocoding data
    const fetchGeocode = async () => {
      try {
        const response = await axios.get('https://map-geocoding.p.rapidapi.com/json', {
          params: { address: 'Pune' },
          headers: {
            'x-rapidapi-key': '85099ca235msh0cfd70f603401d5p19fbc5jsn0c1d0eff6d5b',
            'x-rapidapi-host': 'map-geocoding.p.rapidapi.com',
          },
        });

        const { lat, lng } = response.data.results[0].geometry.location;
        setCoordinates({ lat, lng });
      } catch (error) {
        console.error('Error fetching geocode:', error);
      }
    };

    fetchGeocode();
  }, []);

//   useEffect(() => {
//     // Initialize the map only if coordinates are available
//     if (coordinates.lat && coordinates.lng) {
//       const map = new window.google.maps.Map(document.getElementById('map'), {
//         center: coordinates,
//         zoom: 12,
//       });

//       new window.google.maps.Marker({
//         position: coordinates,
//         map,
//         title: 'Pune',
//       });
//     }
//   }, [coordinates]);

  return (
    <>
     {/* <div>
       <h1>Map of Pune</h1>
       <div id="map" style={{ height: '400px', width: '100%' }}></div>
     </div> */}

    <div className='flex flex-col justify-center items-center'>
      <h1>Map of Pune</h1>
      <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={12} style={{ height: '550px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[coordinates.lat, coordinates.lng]}>
          <Popup>Pune</Popup>
        </Marker>
      </MapContainer>
    </div>

    </>
  );
};

export default Mapp;








