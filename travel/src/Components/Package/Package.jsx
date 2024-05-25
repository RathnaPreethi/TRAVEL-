// src/components/Packages.jsx

import React from 'react';

const Packages = () => {
  // Define your packages data or logic here
  const packagesData = [
    {
      id: 1,
      packageName: 'Standard Package',
      price: '$1000',
      description: 'Includes flights, hotel, and guided tours.'
    },
    {
      id: 2,
      packageName: 'Premium Package',
      price: '$2000',
      description: 'Luxury accommodation, exclusive tours, and more.'
    },
    // Add more packages as needed
  ];

  return (
    <section className="packages container section">
      <div className="secTitle">
        <h3 className="title">Our Packages</h3>
      </div>

      <div className="secContent grid">
        {packagesData.map(({ id, packageName, price, description }) => (
          <div key={id} className="singlePackage">
            <div className="packageInfo">
              <h4 className="packageName">{packageName}</h4>
              <div className="price">
                <h5>{price}</h5>
              </div>
              <div className="desc">
                <p>hello</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
