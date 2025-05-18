import { Notif } from '../../types/Notif';
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
        return (
            <h2 className="text-base font-semibold text-black">
                No result found...
            </h2>
        );
    }

    return (
        <div>
            {notifs.map((notif) => (
                <NotifItem key={notif.id} notif={notif} />
            ))}
        </div>
    );
};

export default NotifList;
