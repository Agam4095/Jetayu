import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../Auth/Logout";
const Header = () => {


    const [user, setUser] = useState();

    useEffect(() => {
        if (localStorage.getItem("loggedInUser")) {
            setUser(JSON.parse(localStorage.getItem('loggedInUser')).role)
            console.log(user)
        }
    }, [user])

    const logUser = () => {
        setUser();
    }

    return (
        <header className="header sticky-top">
            <nav className="navbar navbar-fixed-top navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        {/* <img src="https://cdn5.vectorstock.com/i/1000x1000/68/44/car-logo-with-circle-hand-colorful-logo-vector-22266844.jpg"
                            height="60px" width="60px" alt="Cab Logo" /> */}
                        <h6 className="text-primary">JETAYU</h6>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {
                        (!user) ?
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                </ul>
                            </div> :
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/book">Ride</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/view">MyTrips</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Logout logUser={logUser} />
                                    </li>
                                </ul>
                            </div>
                    }
                </div>
            </nav>
        </header>
    );

}
export default Header;


{/* <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/book">Ride</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/view">MyTrips</Link>
                            </li>
                            <li className="nav-item">
                                <Logout />
                            </li> */}