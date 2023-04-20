import React from "react";
import { FaBed, FaPeopleArrows } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ singleData }) => {
  const { image, profile, price, bed, people, name, desc } = singleData;
  return (
    <div>
      <div className="card w-full min-h-full bg-base-100 shadow-xl">
        <div className="flex gap-3 pl-2 mb-4 pt-4">
          <p className="font-bold rounded-badge bg-red-500 px-2 ">{profile}</p>
          <p>{name}</p>
        </div>
        <figure>
          <img src={image} alt="Image" />
        </figure>
        <div className="card-body">
          <p>{desc}</p>
          <div className="flex items-center gap-2">
            <FaBed className="text-xl" /> : <span>{bed}</span>
            <FaPeopleArrows className="text-xl" /> : <span>{people}</span>
            <p>$:{price}</p>
            <Link to="/book">
              <button className="btn btn-primary">Book</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
