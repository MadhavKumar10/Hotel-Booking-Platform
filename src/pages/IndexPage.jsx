import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function IndexPage(){
  const [places,setPlaces]=useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
   axios.get('/places').then(response=>{
    if (Array.isArray(response.data)) {
      setPlaces(response.data);
    } else {
      setError("Response is not an array"); 
    }
  })
  .catch(error=>{
    setError(error.message);
  })
  .finally(()=>{
    setLoading(false);
  });
},[]);

if(loading){
  return <div>Loading...</div>;
}
if(error){
  return <div>Error...{error}</div>;
}

return(
  <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
    {places.map(place=>(
        // eslint-disable-next-line react/jsx-key
      <Link key={place._id} to={`/place/${place._id}`}>
        <div className="bg-gray-500 mb-2 rounded-2xl flex">
          {place.photos?.[0] &&(
           <img className="rounded-2xl object-cover aspect-square" src={`http://localhost:4000/uploads/${place.photos[0]}`} alt=""/>
          )}
        </div>

        <h2 className="font-bold">{place.address}</h2>
        <h3 className="text-sm text-gray-500">{place.title}</h3>
        <div className="mt-1">
         <span className="font-bold">${place.price} </span> per night
        </div>
      </Link>
    ))};
  </div>
  );
}