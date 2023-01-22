import React from 'react';

const Loading = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="animate-ping h-4 w-4 bg-blue-600 rounded-full"></div>
            Now loading...
        </div>
    );
};

export default Loading;
