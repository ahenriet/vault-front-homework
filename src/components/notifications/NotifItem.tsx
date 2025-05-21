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
    // I decided to just log an error instead of showing a toast because
    // 1) the user cannot do anything about it since it's a data consistency issue
    // 2) the user would be annoyed by toasts popping up every time there is a data inconsistency
    // 3) it doesn't block the app from working
    // 4) the error log can be caught by a monitoring tool to warn us about data consistency issues
    console.error(
        'A notification could not be displayed because its data is inconsistent:',
        notif
    );
};

export default NotifItem;
