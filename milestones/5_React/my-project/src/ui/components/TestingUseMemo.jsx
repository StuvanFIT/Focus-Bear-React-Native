import React, {useState, useMemo} from "react";


function TestingUseMemo() {

    /*
        To test if the sum value is cached, we will implement a button that changes the state of count
        and force the component to re render
        We shold see that the computeSum did not execute
    */
    const [count, setCount] = useState(0)
    const [multiplier, setMultiplier] = useState(1);

    const numbers = Array.from({ length: 10000 }, (_, i) => i + 1);


    //Expensive calculation
    const computeSum = useMemo(() => {

        console.log("I am inside USEMEMO")

        let total = 0;

        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < 500; j++) {
                total += numbers[i] * multiplier * 0.0001;
            }
        }
        return total.toFixed(2);
    }, [multiplier])


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="flex flex-col text-center max-w-md space-y-8">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-600">
                    useMemo Example
                </h2>

                <p>Total sum: <span className="font-bold text-xl">{computeSum}</span></p>

                <button className="p-6 bg-amber-500 rounded-lg cursor-pointer hover:bg-amber-300 transition" onClick={() => setMultiplier(multiplier + 1)}>
                    Increase the multiplier
                </button>

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition"
                    onClick={() => setCount(count + 1)}
                >
                    Re-render ({count})
                </button>
            </div>

        </div>
    )




}

export default TestingUseMemo;