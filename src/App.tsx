import { useEffect, useState } from 'react';
import NotifList from './components/notifications/NotifList';
import SearchBar from './components/searchBar/SearchBar';
import useDebounce from './hooks/useDebounce';
import { getNotifications } from './services/api';
import { Notif } from './types/Notif';
import { toast } from 'react-toastify';

const App = () => {
    const [searchText, setSearchText] = useState('');
    const debouncedSearchText = useDebounce(searchText);
    const [isLoading, setLoading] = useState(false);
    const [results, setResults] = useState<null | Notif[]>(null);

    useEffect(() => {
        const effect = async () => {
            setLoading(true);
            try {
                const notifications =
                    await getNotifications(debouncedSearchText);
                setResults(notifications);
            } catch (e) {
                console.error(e);
                toast(
                    'An error occurred while fetching notifications. Please try again later.'
                );
            } finally {
                setLoading(false);
            }
        };
        effect();
    }, [debouncedSearchText, setLoading, setResults]);

    return (
        <div className="border rounded-xl p-4 space-y-4 w-[440px] mx-auto">
            <h2 className="font-bold text-2xl">History</h2>
            <SearchBar
                value={searchText}
                onChange={setSearchText}
                placeholder="Search"
                isLoading={isLoading}
            />

            <NotifList notifs={results} isLoading={isLoading} />
        </div>
    );
};

export default App;
