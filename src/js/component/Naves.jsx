import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Naves = () => {

    const { store, actions } = useContext(Context);
    const addToFavorites = (starship) => {
        actions.addToFavorites(starship, 'starship');
      };

    return (
        <div>
            <h1 style={{ color: "red", textAlign: "left", margin: "60px" }}>Naves</h1>
            <div className="row d-flex flex-row flex-nowrap position-relative overflow-auto m-3">
                {store.starships.map((item, contactId) =>
                    <div key={item.id} className="card" style={{ width: "18rem", background: "#C0C0C0" }}>
                        <img
                            className="card-img-top m-auto"
                            src="https://starwars-visualguide.com/assets/img/starships/10.jpg"
                            style={{ width: "200px" }}
                            alt="Card image cap" />
                        <div>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <Link to={"/detailed-starship/" + item.id}>
                                    <button className="btn btn-outline-primary mr-3px">Info!</button>
                                </Link>
                                <button type="button" className="btn btn-outline-warning" onClick={() => addToFavorites(item)}><i class="fab fa-gratipay"></i></button>
                            </div>
                        </div>
                    </div>
                )};
            </div>
        </div>
    );
};