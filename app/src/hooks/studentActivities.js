import config from '../config/config';
import {useSelector} from 'react-redux';

const getStudentPodcast = async () => {
    try {
        const {data} = await fetch(`${config.apiUrl}/student/podcast/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${useSelector((state) => state.auth.token)}`,
            },
        });
        return data;
    }
    catch (error) {
        console.error('Error fetching student podcast:', error);
        throw error;
    }
};

const setStudentPodcast = async ({title, description, audio, points}) => {
    try {
        const {data} = await fetch(`${config.apiUrl}/student/podcast/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${useSelector((state) => state.auth.token)}`,
            },
            body: JSON.stringify({
                title,
                description,
                audio,
                points,
            }),
        });
        return data;
    }
    catch (error) {
        console.error('Error setting student podcast:', error);
        throw error;
    }
};

export {getStudentPodcast, setStudentPodcast};