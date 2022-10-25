import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div className='card h-100 w-100'>
        <img
          src={this.props.image}
          className='card-img-top'
          style={{ objectFit: "cover" }}
          width={100}
          height={200}
          alt='imageNews'
        />
        <div className='card-body'>
          <h5 className='card-title'>{this.props.title}</h5>
          <p className='card-text'>{this.props.content}</p>
        </div>
        <div className='card-footer d-flex justify-content-between'>
          <small className='text-muted'>{this.props.source}</small>
          <small className='text-muted'>{this.props.date}</small>
        </div>
      </div>
    );
  }
}
