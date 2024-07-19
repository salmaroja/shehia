import React from 'react';
import Events from './Events'; // Assuming Events component is imported

const EventList = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="text-center mb-4">Event List</h1>
          <Events />
        </div>
      </div>
    </div>
  );
};

export default EventList;
