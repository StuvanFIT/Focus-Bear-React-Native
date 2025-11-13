import axios from "axios";

const generateRequestId = () => `req-${Math.random().toString(36).substring(2, 15)}`;

const axiosInstance = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/posts/`,
    timeout: 8000,
    headers: {
        Accept: "*/*",
    },

});

/*
A request interceptor is a function that runs before every outgoing HTTP request made with Axios.
It allows you to modify or inspect the request configuration
*/

//So before sending any request (axiosinstance.get or axiosinstance.post etc.) from this instance, run this
axiosInstance.interceptors.request.use(
    (config) => {

        //if token exists in the browser, then attach it to auth header
        const token = localStorage.getItem("AuthToken");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        //add unique request id: helps with tracking requests
        config.headers["X-Request-ID"] = generateRequestId();

        return config;
    },
    (error) =>{
        console.error("Request error: ", error)
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request config:", config); 
    return config;
  },
  (error) => Promise.reject(error)
);





export default axiosInstance;

