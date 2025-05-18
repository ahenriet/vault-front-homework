import { Notif } from '../types/Notif';

const API_BASE_URL = import.meta.env.API_BASE_URL || 'http://localhost:5000';

export async function getNotifications(searchText: string): Promise<Notif[]> {
    const response = await fetch(`${API_BASE_URL}/search?q=${searchText}`);
    if (!response.ok) {
        throw new Error(
            `An error occurred while fetching notifications: ${response.status}`
        );
    }
    return await response.json();
}
