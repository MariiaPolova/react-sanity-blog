import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return(
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact
                             className="inline-flex item-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4lx font-bold tracking-widest"
                             activeClassName="text-red-100 bg-red-700">
                       Home
                    </NavLink>
                    <NavLink to="/post"
                             className="inline-flex-flex item-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4lx font-bold tracking-widest"
                             activeClassName="text-red-100 bg-red-700">
                        Blog Post
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
