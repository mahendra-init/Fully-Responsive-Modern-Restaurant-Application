import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  return (
    <div className='app__header app__wraper section__padding' id='Home'>
        <div className="app__wrapper_info">
          <SubHeading title='Chase the new flavor'/>
          <h1 className="app__header-h1">The Key to Fine Dining</h1>
          <p className="p__opensans" style={{margin: '2rem 0'}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita veniam, officia cupiditate itaque autem consequuntur facilis iusto quisquam quas deserunt modi asperiores fugiat atque temporibus illum praesentium aperiam placeat quibusdam?
          </p>
          <button type='button' className='custom__button'>Explore Menu</button>
        </div>
        <div className="app__wrapper_img">
          <img src={images.welcome} alt="header img" />
        </div>
    </div>
)};

export default Header;
