import React from 'react';
import ReactStars from 'react-stars';

const Main = (props) => {
  return (
    <div className="wrapper">
      <div className="content">
      {
        props.itemList.map((item) => {
          const { title, description, rate, img } = item;
          return (
            <div className="item">
              <h3 className="title">{title}</h3>
              <div className="content">
                <a className="content-image"  href="#">
                  <img className="product-image" src={img} alt="wear" />
                </a>
                <p className="description">{description}</p>
              </div>
              <div className="stars">
                <ReactStars
                  count={5}
                  value={rate}
                  edit={false}
                  size={24}
                  color2={'#ffd700'}
                />
              </div>
              <a className="waves-effect waves-light btn button">Button</a>
            </div>
          );
        })
      }
      </div>
    </div>
  );
};

export default Main;