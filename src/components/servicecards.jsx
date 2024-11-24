import React from 'react';

const services = [
    { title: 'Service 1', description: 'Description for service 1' },
    { title: 'Service 2', description: 'Description for service 2' },
    { title: 'Service 3', description: 'Description for service 3' },
    { title: 'Service 4', description: 'Description for service 4' },
    { title: 'Service 5', description: 'Description for service 5' },
    { title: 'Service 6', description: 'Description for service 6' },
];

const ServiceCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {services.map((service, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ServiceCards;