import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

const Update = (props) => {
  let history = useHistory();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price_range, setPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setName(response.data.data.restaurant.name);
        setLocation(response.data.data.restaurant.location);
        setPriceRange(response.data.data.restaurant.price_range);
      } catch (err) {}
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range,
    });
    history.push("/");
  };

  // const onChange = () => {
  //   setRestaurant({ ...restaurant, [evt.target.name]: evt.target.value });
  // };

  return (
    <div>
      <h1 className="text-center">Update Restaurant</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input
            type="number"
            name="price_range"
            value={price_range}
            onChange={(e) => setPriceRange(e.target.value)}
            className="form-control"
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
