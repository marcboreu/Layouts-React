import React from 'react';

const Slider = () => {
    return (
        <>    
    <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
            <div className="swiper flex overflow-x-scroll w-1/2">
            <img className="w-full h-1/2 object-cover bg-gray-300" alt="/" src="https://images.unsplash.com/photo-1582148453014-b7d4117d3300?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" id="slide1"/>
            <img className="w-full h-1/2 object-cover bg-gray-300" alt="/" src="https://images.unsplash.com/photo-1582224119362-9df4eead238a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80" id="slide2"/>
            <img className="w-full h-1/2 object-cover bg-gray-300" alt="/" src="https://images.unsplash.com/photo-1582229822017-3b77911e82bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" id="slide3"/>
            </div>
        </div>
        <div className="flex mt-4">
            <a href="/" target="_blank" rel="noopener noreferrer" className="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
        </div>
    </div>
        </>
    );
}

export default Slider;