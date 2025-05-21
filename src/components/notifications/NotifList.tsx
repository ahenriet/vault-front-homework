import { Notif } from '../../types/Notif';
import NoResult from './NoResult';
import NotifItem from './NotifItem';

type NotifListProps = {
    notifs: null | Notif[];
    isLoading: boolean;
};

const NotifList = ({ notifs, isLoading }: NotifListProps) => {
    if (isLoading && !notifs) {
        return null;
    }
    if (!notifs || notifs.length === 0) {
        return <NoResult />;
    }

    return (
        <div className="h-[380px] overflow-auto">
            {notifs.map((notif) => (
                <NotifItem key={notif.id} notif={notif} />
            ))}
        </div>
    );
};

export default NotifList;
