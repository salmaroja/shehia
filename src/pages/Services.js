import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Icons for expand/collapse

function Services() {
  const [services, setServices] = useState([
    {
      title: 'Record Events',
      description: 'Capture and manage events happening within Shehia.',
      details: 'Details of Event Recording',
      subServices: [
        'Event Registration',
        'Event Details Management',
        'Event Attendance Tracking',
      ],
    },
    {
      title: 'Manage Citizen Information',
      description: 'Record and manage essential information about citizens.',
      details: 'Details of Citizen Information Management',
      subServices: [
        'CCM ID Registration',
        'Zanzibar ID Registration',
        'TZ ID Registration',
        'Other ID Types',
      ],
    },
    {
      title: 'Record Other Information',
      description: 'Record and manage other types of information relevant to Shehia.',
      details: 'Details of Other Information Recording',
      subServices: [
        'Health Records',
        'Infrastructure Updates',
        'Community Projects',
      ],
    },
  ]);

  const [expandedService, setExpandedService] = useState(null);

  const handleServiceClick = (index) => {
    setExpandedService(index === expandedService ? null : index);
  };

  return (
    <div className="container-fluid py-5">
      <h1 className="text-center mb-5">Shehia System Services</h1>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className={`card ${expandedService === index ? 'shadow-lg' : 'shadow'}`}>
              <div className="card-body">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-text">{service.description}</p>
                <button
                  className="btn btn-primary mb-3"
                  onClick={() => handleServiceClick(index)}
                >
                  {expandedService === index ? 'Hide Details' : 'View Details'}
                  <FontAwesomeIcon icon={expandedService === index ? faChevronUp : faChevronDown} className="ms-2" />
                </button>
                {expandedService === index && (
                  <div>
                    <h4 className="mt-3">Details:</h4>
                    <p>{service.details}</p>
                    <h4>Subservices:</h4>
                    <ul className="list-unstyled">
                      {service.subServices.map((subService, subIndex) => (
                        <li key={subIndex}>{subService}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
