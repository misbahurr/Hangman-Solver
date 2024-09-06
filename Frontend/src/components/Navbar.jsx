import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ 
            padding: '15px', 
            backgroundColor: '#007BFF', 
            display: 'flex', 
            justifyContent: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <Link to="/page1" style={{ textDecoration: 'none', margin: '0 10px' }}>
                <button style={{ 
                    padding: '10px 25px', 
                    fontSize: '18px', 
                    backgroundColor: '#28a745', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer', 
                    transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
                >
                    Page 1
                </button>
            </Link>
            <Link to="/page2" style={{ textDecoration: 'none', margin: '0 10px' }}>
                <button style={{ 
                    padding: '10px 25px', 
                    fontSize: '18px', 
                    backgroundColor: '#ffc107', 
                    color: '#000', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer', 
                    transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#e0a800'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#ffc107'}
                >
                    Page 2
                </button>
            </Link>
        </nav>
    );
};

export default Navbar;
