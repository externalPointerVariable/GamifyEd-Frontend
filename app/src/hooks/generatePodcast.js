import config from "../config/config";

const generatePodcast = async (topic = "Quantum Computing") => {
    const myHeaders = new Headers();
    myHeaders.append("topic", topic);
    myHeaders.append("Content-Type", "application/json");
    
    const raw = "";
    
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };
    
    try {
        const response = await fetch(
        `${config.aiEndpoint}api/student/podcast`,
        requestOptions
        );
    
        if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch podcast: ${errorText}`);
        }
        console.log("Podcast response:", response);
        return response;
    } catch (error) {
        console.error("Error generating podcast:", error);
        throw error;
    }
};

export default generatePodcast;
