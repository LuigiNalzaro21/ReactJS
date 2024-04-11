import React from 'react';

function CardOne() {
    return (
        <div className="p-5 border w-72 h-92 border-blue-700 rounded-2xl m-5 flex flex-col justify-center items-center">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
            <i className="fas fa-gem text-5xl mb-3"></i> 
            <h1 className="text-center text-3xl py-5">Sturdy Themes</h1>
            <p className="text-center text-2xl py-5">
                Our themes are updated regularly to keep them bug free
            </p>
        </div>
    );
}

export default CardOne;
