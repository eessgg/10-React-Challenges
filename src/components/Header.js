import React from 'react';

const Header = ({title}) => {
  return (
    <div className="row text-center my-5">
        <marquee> <h1>{title}</h1> </marquee>
        <figure className="my-5">
            <img src="https://media1.tenor.com/images/0350558b3ce1c2a9818b6ae1a6200a77/tenor.gif?itemid=6164144" alt="Gif" style={{width: '90px'}} />
            <figcaption><cite>“First, solve the problem. ..."</cite></figcaption>
          </figure>
      </div>
  );
}

export default Header;
