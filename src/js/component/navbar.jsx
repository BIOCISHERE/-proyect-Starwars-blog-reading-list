import React, { useContext } from "react";
import {FaTrashAlt} from "react-icons/fa"
import { Link } from "react-router-dom";
import { DataContext } from "../context/dataContext.jsx";

const Navbar = () => {
    const { favorites, setFavorites } = useContext(DataContext);
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="https://www.pngitem.com/pimgs/m/341-3413907_star-wars-logo-black-and-white-hd-png.png" style={{ width: "100px", height: "50px" }} />
                </Link>
                <div className="dropdown me-5">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites<span className="badge bg-secondary">{favorites.length}</span>
                    </button>
                    <ul className="dropdown-menu">
                        {favorites.map((item, index) => (
                            <li key={index}><Link to={item.to} className="dropdown-item">{item.name}<FaTrashAlt onClick={() => {
                                let errase = favorites.filter((i, current) => index != current)
                                setFavorites(errase)
                            }} /></Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;

