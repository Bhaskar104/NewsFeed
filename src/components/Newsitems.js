import React from 'react'

const Newsitems= (props)=>{
        let {title, desc, img, url,author, publishedAt } = props;
        return (
            <div>
                <div className="card" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                {/* eslint-disable-next-line */}
                    <img width="200px" height="200px" className="card-img-top rounded" src={img} alt="No image available to show"/> 
                        <div className="card-body"> 
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{desc}...</p>
                            <p className="card-text"><small className='text-muted'>By {author?author:"Unknown"} on {new Date(publishedAt).toLocaleDateString()}{new Date(publishedAt).toLocaleTimeString()}</small></p>
                            <a href={url} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }

export default Newsitems
