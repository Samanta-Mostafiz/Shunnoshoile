import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Profile from '../Assent/img/user3.jpeg'
import logo from '../Assent/logo/logo.gif'
import { FaAlignLeft, FaBars } from 'react-icons/fa';
import { AuthContext } from '../AuthContext/UserContext';
import { toast } from 'react-toastify';
import AddCard from '../Pages/AddCard/AddCard';
import { useQuery } from '@tanstack/react-query';

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext)

    // user logOut 
    const Logout = () => {
        logOutUser()
            .then(result => {
                toast.success('User log Out successfully')
            })
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link to={'/'} className="logo " ><img src='https://cdn.dribbble.com/users/56251/screenshots/1228786/couch-dribbbs.gif' alt="" /></Link>

                    <div className="MainDiv d-lg-none">
                        <div className="row">

                            <div className="me-1">
                                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"><FaAlignLeft className='textToggle' /></span>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="collapse me-lg-5 navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 me-2 pt-1">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-links" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/allProduct"} className="nav-links">All Product</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to={"/admin"} className="nav-links">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/contact"} className="nav-links">Contact </Link>

                            </li>
                            <li className="nav-item" >
                                <Link to={"/add-Card"} className="nav-links position-relative me-3">
                                    Add Card
                                    <span className="cardnotification position-absolute start-100 translate-middle w-50 h-75">
                                        <img className='w-75 h-100 rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYT5fgXSfRT0wTgBz1_57x0jSD4MxAT_9zHPcY52rCGgdIpdmYyGr2D9k1RlZAzlEUwI&usqp=CAU" alt="" />

                                    </span>
                                </Link>
                                {/* <Link to={"/add-Card"} className="nav-links">Add Card</Link> */}
                            </li>

                            {
                                !user?.email ? <>
                                    <li className="nav-item mt-4 mt-lg-0">
                                        <Link id='loginBtn' to={"/singup"} className="">Login</Link>
                                    </li>

                                </>
                                    :
                                    <>
                                        <li className="nav-item mt-4 mt-lg-0">
                                            <Link id='loginBtn' onClick={Logout} to={""} className="">Log out</Link>
                                        </li>
                                    </>
                            }
                            <div className="d-none d-lg-block">
                                {
                                    user?.email ? <>
                                        <div className="nav-item ms-3 mt-2 ms-lg-0 mt-lg-0">
                                            <div className="profile">
                                                <img className='protfolioimg img-fluid' src={user?.photoURL} alt="" />
                                            </div>

                                        </div>
                                    </>
                                        :
                                        <div className="nav-item ms-3 mt-2 ms-lg-0 mt-lg-0">
                                            <div className="profile">
                                                <img className='protfolioimg img-fluid' src=' https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png' alt="" />
                                            </div>

                                        </div>

                                }
                            </div>



                        </ul>

                    </div>

                </div>
            </nav>


        </>
    );
};

export default Navbar;