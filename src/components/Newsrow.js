import React, { Component } from 'react'

export class newsrow extends Component {
  
  render() {
    let {title,description,imageurl,url,publishedAt,source} = this.props;
    return (
      <div><span className="badge bg-secondary">{source}</span>
      <div className="card">
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url}  rel="noreferrer" target="_blank" className="btn btn-dark">Read more</a>
    <div className="card-footer">
        <small className="text-body-secondary">publishedAt : {publishedAt}</small>
      </div>
  </div>
</div>
     </div>

    )
  }
}

export default newsrow
