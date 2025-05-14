import config from "../config/config";
import {useSelector} from "react-redux";

const getStudentProfile = async () => {
    try {
        const response = await fetch(`${config.backendEndpoint}/student/profile/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${useSelector((state) => state.auth.access)}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch student profile");
        }

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Error fetching student profile:", error);
        throw error;
    }
};

const updateStudentProfile = async ({raw}) => {
    try {
        const response = await fetch(`${config.backendEndpoint}/student/profile/`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${useSelector((state) => state.auth.access)}`,
            },
            body: JSON.stringify(raw),
        });
        if (!response.ok) {
            throw new Error("Failed to update student profile");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating student profile:", error);
        throw error;
    }
};

const getStudentLoginStreak = async (username) => {
    try {
        const response = await fetch(`${config.backendEndpoint}/streaks/${username}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${useSelector((state) => state.auth.access)}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch student login streak");
        }

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Error fetching student login streak:", error);
        throw error;
    }
}


const getStudentLevelHistory =  async () => {
    try {
        const response = await fetch(`${config.backendEndpoint}/level-history/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${useSelector((state) => state.auth.access)}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch student level history");
        }

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Error fetching student level history:", error);
        throw error;
    }
};


const setStudentLevelHistory = async ({level_reached, level_acheivements}) => {
    try {
        const response = await fetch(`${config.backendEndpoint}/level-history/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${useSelector((state) => state.auth.access)}`,
            },
            body: JSON.stringify({
                level_reached,
                level_acheivements
            }),
        });
        if (!response.ok) {
            throw new Error("Failed to set student level history");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error setting student level history:", error);
        throw error;
    }
};

export {getStudentProfile, updateStudentProfile, getStudentLoginStreak, getStudentLevelHistory};