import React, { useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";

const AddRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    location: "",
    price_range: "",
  });

  const onChange = (evt) => {
    evt.preventDefault();
    setRestaurant({ ...restaurant, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await RestaurantFinder.post("/", restaurant);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              name="name"
              onChange={onChange}
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="location"
              onChange={onChange}
              className="form-control"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select
              className="custom-select my-1 mr-sm-2"
              name="price_range"
              onChange={onChange}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
