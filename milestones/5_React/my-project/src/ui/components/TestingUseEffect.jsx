import React, {useEffect, useState}  from "react"

function TestingUseEffect() {

    const [data, setData] = useState(null)
    //const [count, setCount] =useState(0);
    const [shouldFetch, setShouldFetch] = useState(false)

    useEffect(() => {

        console.log("COMPONENT HAS MOUNTED")

        return () => {
            console.log("COMPONENT HAS UNMOUNTED")
        }

    }, [])

    useEffect(() => {

        if (!shouldFetch) return;

        const controller = new AbortController();

        fetch("https://jsonplaceholder.typicode.com/posts/1", {
            signal: controller.signal,
            })
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                console.log("Data fetched:", json);
            })
            .catch((err) => {
            
                console.error("Fetch error:", err);
                
        });

        // Cleanup function
        return () => {
            console.log("Cleaning up fetch");
            controller.abort();
        };

    }, [shouldFetch])



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col text-center max-w-md space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-600">
                useEffect Example
            </h2>

            <button className="p-6 bg-amber-500 rounded-lg cursor-pointer hover:bg-amber-300 transition" onClick={() => setShouldFetch(true)}>
                Fetch Data
            </button>

            {data && (
                <div className="font-bold">
                    <h4>{data.title}</h4>
                    <p>{data.body}</p>
                </div>
            )}
        </div>
    </div>

  );
}

export default TestingUseEffect;