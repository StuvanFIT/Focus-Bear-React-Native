import React, {useState} from "react";

function Counter() {

    const [counter, setCounter] = useState(0)

    const handleCounterClick = () => {
        setCounter(counter + 1)
    }


    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-gray-800 p-6">
            <div className="bg-orange-50 rounded-2xl shadow-lg p-10 max-w-2xl text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-600">
                    Introducing the Focus Bear Counter
                </h1>
                <p className='text-2xl md:text-xl font-extrabold mb-6 text-orange-600'>
                    Spam this counter as much as you can...
                </p>

                <button onClick={handleCounterClick} className="cursor-pointer hover:bg-amber-600 transition border border-lg border-amber-800 rounded-lg shadow-lg p-6">
                    I have been clicked {counter} times!!!
                </button>

            </div>
        </div>
    )
}
export default Counter;