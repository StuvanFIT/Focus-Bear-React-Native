import React from "react";
import { cancellableRequest } from "../../api/testRequest";

function AxiosComponent() {

    const handleApiRequest = async() => {
        await cancellableRequest();
    }



    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="flex flex-col text-center max-w-md space-y-8">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-600">Axios API Test</h2>
                <button
                    onClick={handleApiRequest}
                    className="bg-amber-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-amber-300"
                >
                    Send Test Request
                </button>
            </div>
        </div>
    );
    






}

export default AxiosComponent;