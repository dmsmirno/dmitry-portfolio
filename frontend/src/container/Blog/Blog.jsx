import React, { useEffect, useState } from 'react';

import './Blog.scss';
import { urlFor, client } from '../../client';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const posts = '*[_type == "blogEntries"]';
    
        client.fetch(posts).then((data) => {
            setEntries(data);
        });
    }, [])
    
    return (
        <div className="card-container">
            <Link to="/" style={{ textDecoration: 'none' }} className="back-button">Back</Link>
            {entries.map((entry) => (
            <Link to="/blogEntry"  style={{ textDecoration: 'none' }} state={{entry: entry}} className="card" key={entry.id}>
                <img src={urlFor(entry.imgUrl)} alt="entry" className="card-img" />
                <div className="card-content">
                <p className="card-title">{entry.title}</p>
                <h4 className="card-subtitle">{entry.subtitle}</h4>
                </div>
            </Link>
            ))}
        </div>
    );
}


export default Blog;