import React, { useEffect, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";

const RestaurantList = (props) => {
  let history = useHistory();
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurants);
      } catch (err) {}
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setRestaurants]);

  const handleDelete = async (id) => {
    try {
      await RestaurantFinder.delete(`/${id}`);
    } catch (err) {}
  };

  const handleUpdate = async (id) => {
    history.push(`/restaurants/${id}/update`);
  };

  return (
    <div>
      {
        <div className="list-group">
          <table className="table table-hover table-dark">
            <thead>
              <tr className="bg-primary">
                <th scope="col">Restaurant</th>
                <th scope="col">Location</th>
                <th scope="col">Price Range</th>
                <th scope="col">Ratings</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {restaurants &&
                restaurants.map((restaurant) => {
                  return (
                    <tr key={restaurant.id}>
                      <td>{restaurant.name}</td>
                      <td>{restaurant.location}</td>
                      <td>{"$".repeat(restaurant.price_range)}</td>
                      <td>reviews</td>
                      <td>
                        <button
                          onClick={() => handleUpdate(restaurant.id)}
                          className="btn btn-warning"
                        >
                          Update
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(restaurant.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default RestaurantList;
