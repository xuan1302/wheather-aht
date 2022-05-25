import axios from "axios";
const axiosClient = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// const getFirebaseToken = async () => {
//     const currentUser = firebase.auth().currentUser;
//     if (currentUser) return currentUser.getIdToken();

//     //not login
//     const hasRememberedAccount = localStorage.getItem('firebaseui::rememberedAccounts');
//     if (!hasRememberedAccount) return null;

//     //login but cuurent user is not fetched
//     return new Promise((resolve, reject) => {
//         const waitTimer = setTimeout(() => {
//             reject(null);
//         }, 10000)
//         const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
//             if (!user) {
//                 reject(null);
//             }
//             const token = await user.getIdToken();
//             resolve(token);
//             unregisterAuthObserver();
//             clearTimeout(waitTimer);
//         });
//     });
// }

//  Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use((config) => {
    // Do something before request is sent
    // const token = await getFirebaseToken();
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // const { config, status, data } = error.response;
    // const URLS = ['/auth/local/register', '/auth/local']
    // if (URLS.includes(config.url) === '/auth/local/register' && status === 400) {
    //     const errorList = data.data || [];
    //     const firstError = errorList.length > 0 ? errorList[0] : {};
    //     const messageList = firstError.messages || {};
    //     const firstMessage = messageList.length > 0 ? messageList[0] : {};
    //     throw new Error(firstMessage.message);
    // }
    return Promise.reject(error);
});
export default axiosClient;