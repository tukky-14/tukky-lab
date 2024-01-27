import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const Swagger = () => {
    return <SwaggerUI url="https://tukky-lab.vercel.app/swagger.json" />;
};

export default Swagger;
