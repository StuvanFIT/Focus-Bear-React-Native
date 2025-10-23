import axios from "axios";
import axiosInstance from "./axiosInstance";

/*

for the url, use this if u want to test the catch error block:

https://httpbin.org/delay/5
*/

export const cancellableRequest = async () => {


    const abortController = new AbortController();
    
    try {
        const response = await axiosInstance.post(
            "https://jsonplaceholder.typicode.com/posts",
            {data: "example data"},
            {signal: abortController.signal}
        )

        console.log(response.data)
    } catch (error) {

        if (axios.isCancel(error)) {
            console.log("Request error", error.message);
        } else {
            console.error("API error:", error);
        }
    }
}