import {useDispatch} from 'react-redux';
import config from '../config/config';

const useTokenRefresh = () => {
    let data = JSON.parse(document.cookie);
    const dispatch = useDispatch();   
    const tokenRefresh = async () => {
        try {
            const response = await fetch (`${config.backendEndpoint}/login/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: data.username,
                    password: data.password,
                }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Token refresh failed");
            }
            dispatch(setAccess(data.access));
            console.log("Token refreshed successfully", data.access);
        } catch (error) {
            console.error("Token Refresh Error:", error.message);
        }
    } 
};

setInterval(useTokenRefresh, 1000 * 60 * 5);