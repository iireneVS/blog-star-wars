import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Planetas = () => {

  const { store, actions } = useContext(Context);

  const handleOnError = (event) => {
    event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
  };

  return (
    <div className="container-fluid bg-dark text-white d-flex flex-column">
      <h1 style={{ color: "white", textAlign: "left", margin: "60px" }}>Planetas</h1>

      <div className="row m-3">
        {store.planets.map((item, index) => (
          <div key={index} className="card m-3 col-sm-4 col-md-3 col-lg-2" style= {{width: "18rem;"}} >
            <div className="card" style={{ width: "18rem", background: "#FFFFFF" }}>
              <img
                className="card-img-top m-auto"
                src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
                onError={handleOnError}
                style={{ width: "200px" }}
                alt="Card image cap"
              />
              <div>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                </div>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <Link to={`/detailed-planet/${index + 1}`}>
                    <button className="btn btn-outline-primary mr-3px">Info!</button>
                  </Link>
                  <button className="btn btn-outline-warning" onClick={() => {
                    actions.addFav(item.name, index)
                  }}><i class="fas fa-star"></i></button>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

};