import React from 'react';

function HelloWorld({name}) {

    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-gray-800 p-6">
            <div className="bg-orange-50 rounded-2xl shadow-lg p-10 max-w-2xl text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-600">
                    Hello, Focus Bear!
                </h1>
                <p className='text-2xl md:text-xl font-extrabold mb-6 text-orange-600'>
                    Hello, {name}!
                </p>
            </div>
        </div>
    )
}

export default HelloWorld;