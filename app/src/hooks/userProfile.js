import config from "../config/config";
import { useSelector } from "react-redux";

const getUserProfile = async () => {
    try {
        const response = await fetch(`${config.backendEndpoint}/user/profile/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${useSelector((state) => state.auth.access)}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user profile");
        }

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Error fetching user profile:", error);
        throw error;
    }
};

const updateUserProfile = async ({raw})=>{
    try {
        const response = await fetch(`${config.backendEndpoint}/user/profile/`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${useSelector((state) => state.auth.access)}`,
            },
            body: JSON.stringify(raw),
        });
        if (!response.ok) {
            throw new Error("Failed to update user profile");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating user profile:", error);
        throw error;
    }
};

export { getUserProfile, updateUserProfile };