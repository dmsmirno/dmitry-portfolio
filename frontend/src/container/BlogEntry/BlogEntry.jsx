import React from 'react';

import './BlogEntry.scss';
import { urlFor } from '../../client';
import {useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';

const BlogEntry = () => {
    const location = useLocation();
    const title = location.state.entry.title;
    const subtitle = location.state.entry.subtitle;
    const postImage = location.state.entry.imgUrl;
    const paragraphs = location.state.entry.content;
    
    return (
        <div className="blog-post">
            <img src={urlFor(postImage)}  alt="entry" className="post-image" />
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
            <Link to="/blog" style={{ textDecoration: 'none' }} className="back-button">Back</Link>

            {paragraphs.map((paragraph, index) => (
                <div className={`paragraph ${paragraph.imgUrl ? 'with-image' : ''}`} key={index}>
                    {paragraph.imgUrl && (
                        <img src={urlFor(paragraph.imgUrl)} alt="paragraphImg" className="paragraph-image" />
                        )}
                    <div className="paragraph-content">
                        <p className="paragraph-content">{paragraph.paragraph}</p>
                    </div>
                </div>
            ))}
        </div>
    );

}


export default BlogEntry;