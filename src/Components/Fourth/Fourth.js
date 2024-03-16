import React from 'react';

const StaggeredLayout = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-6/12 m-4 p-4 border rounded shadow-md">
      <h1>One</h1>
      </div>
      <div className="w-6/12 m-4 p-4 border rounded shadow-md md:order-last">
      <h1>One</h1>
      </div>
      <div className="m-4 p-4 border rounded shadow-md">
        {/* Card content */}
      </div>
      <div className="m-4 p-4 border rounded shadow-md md:order-last">
        {/* Card content */}
      </div>
      <div className="m-4 p-4 border rounded shadow-md">
        {/* Card content */}
      </div>
    </div>
  );
};

export default StaggeredLayout;
