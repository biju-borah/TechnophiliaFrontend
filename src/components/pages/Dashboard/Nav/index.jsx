import React from 'react';

function Nav() {
    return (
        <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
                    aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <a className="navbar-brand" href="/">
                    <img src="https://cdn-images-1.medium.com/max/578/1*vZVM7utCuRiZ6-HDsNeYUA@2x.png" height="25"
                        alt="MDB Logo" loading="lazy" />
                </a>
                <ul className="navbar-nav ms-auto d-flex flex-row">
                    <li className="nav-item dropdown">
                        <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="/"
                            id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false" style={{ color: 'rgba(0,0,0,.55) !important' }}>
                            <i className="fas fa-bell"></i>
                            <span className="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a className="dropdown-item" href="/" style={{ color: 'gray' }}>Application out now</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="/"
                            id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" className="rounded-circle"
                                height="22" alt="Avatar" loading="lazy" />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink" >
                            <li>
                                <a className="dropdown-item" href="/" style={{ color: 'gray' }}>My profile</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/" style={{ color: 'gray' }}>Settings</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/" style={{ color: 'gray' }}>Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
