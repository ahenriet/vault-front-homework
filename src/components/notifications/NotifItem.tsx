import { Notif } from '../../types/Notif';
import NotifTransaction from './NotifTransaction';
import NotifAccount from './NotifAccount';

type NotiItemProps = {
    notif: Notif;
};

const NotifItem: React.FC<NotiItemProps> = ({ notif }: NotiItemProps) => {
    if (
        notif.type === 'ACCOUNT_CREATED' &&
        'currency' in notif.data &&
        'name' in notif.data
    ) {
        return <NotifAccount notifType={notif.type} notifData={notif.data} />;
    }
    if (
        (notif.type === 'TRANSACTION_RECEIVED' ||
            notif.type === 'TRANSACTION_SENT') &&
        'amount' in notif.data &&
        'unit' in notif.data &&
        'from' in notif.data &&
        'to' in notif.data
    ) {
        return (
            <NotifTransaction notifType={notif.type} notifData={notif.data} />
        );
    }
    throw new Error('Notification type and data mismatch'); // TODO toast error
};

export default NotifItem;
