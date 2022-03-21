import { React, useState } from 'react';
import '../Styles/content.css';
import SideModal from './SideMdal';

const buildingDetails = [
  {
    id: 0,
    name: '1312 Richmond',
    address: 'Richmond Place 1312, Charlotte, New York',
    apartment: `https://media.cntraveler.com/photos/5d112d50c4d7bd806dbc00a4/master/pass/airbnb%20luxe.jpg`,
    energyUsage: '412 kWh',
    noiseLevel: '23 db',
  },
  {
    id: 1,
    name: '6 Fremont Street',
    address: '6 Fremont Street, Loyalton state, Boston',
    apartment: `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/top-airbnb-alternatives-2021-1613057911.jpg`,
    energyUsage: '592 kWh',
    noiseLevel: '59 db',
  },
  {
    id: 2,
    name: '84 Vista Street',
    address: '84 Vista Street, Encinities, Washington',
    apartment: `https://i0.wp.com/businessday.ng/wp-content/uploads/2019/11/Airbnb-in-Nigeria.jpg?fit=639%2C426&ssl=1`,
    energyUsage: '623 kWh',
    noiseLevel: '53 db',
  },
];

const apartment = buildingDetails.map((detail) => {
  return (
    <div className="content-container" key={detail.id}>
      <div className="apartment-image">
        <img src={detail.apartment} alt="apartment" />
      </div>
      <div className="apartment-info">
        <div className="info-header">
          <h1>{detail.name}</h1>
          {/* star rating */}
          <div className="address">
            <p>{detail.address}</p>
          </div>
        </div>
        <div className="info-body">
          <div className="info-details">
            <h4>Door</h4>
            <h3>Locked</h3>
          </div>
          <div className="info-details">
            <h4>Avg. energy usuage</h4>
            <h3>{detail.energyUsage}</h3>
          </div>
          <div className="info-details">
            <h4>Noise level</h4>
            <h3>{detail.noiseLevel}</h3>
          </div>
        </div>
      </div>
    </div>
  );
});

const Content = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="apartment-container" onClick={() => setIsOpen(true)}>
        {apartment}
      </div>

      <SideModal opening={isOpen} closeSideBar={() => setIsOpen(false)} />
    </div>
  );
};

export default Content;
