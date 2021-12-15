import React from 'react';
import { Link } from 'react-router-dom';

export default function Icon() {
    return (
        <Link to="/inc/Login">
            
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 20 20">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
            
        </Link>
    )
};