import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Home = () => {
  const [hotelData, setHotelData] = useState([]);
  const [seeAllData, setSeeAllData] = useState(false);
  useEffect(() => {
    const loadHotelData = async () => {
      try {
        const jsonData = "http://localhost:5000/hotelData";
        const res = await fetch(jsonData);
        const data = await res.json();
        setHotelData(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadHotelData();
  }, []);

  const handleSellAllData = () => {
    setSeeAllData(true);
  };
  const displayData = seeAllData ? hotelData : hotelData.slice(0, 6);
  return (
    <div>
      <div className="grid lg:grid-cols-3 px-12 mt-7 gap-5 mb-4">
        {displayData.map((singleData) => (
          <Card key={singleData.id} singleData={singleData} />
        ))}
      </div>

      {!seeAllData && (
        <button
          onClick={handleSellAllData}
          className="btn btn-info block mx-auto mb-5"
        >
          See More
        </button>
      )}
    </div>
  );
};

export default Home;
