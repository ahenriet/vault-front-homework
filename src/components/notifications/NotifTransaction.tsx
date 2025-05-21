import { NotifTransactionData, NotifType } from '../../types/Notif';
import { computeGradientColor, computeCryptoIconSrc } from '../../utils/helper';
import Card from '../ui/Card';

type NotifTransactionProps = {
    notifType: NotifType;
    notifData: NotifTransactionData;
};

const NotifTransaction = ({ notifType, notifData }: NotifTransactionProps) => {
    const title = computeTitle(notifType);
    const subtitle = computeSubtitle(notifData, notifType);
    const amount = `${new Intl.NumberFormat().format(notifData.amount)} ${notifData.unit}`;
    const cryptoIconSrc = computeCryptoIconSrc(notifData.unit);
    const notifTypeIconSrc = computeNotifTypeIconSrc(notifType);
    const gradientColor = computeGradientColor(notifData.unit);

    return (
        <Card
            title={title}
            subtitle={subtitle}
            amount={amount}
            cryptoIconSrc={cryptoIconSrc}
            notifTypeIconSrc={notifTypeIconSrc}
            gradientColor={gradientColor}
        />
    );
};

const computeTitle = (notifType: NotifType) => {
    switch (notifType) {
        case 'TRANSACTION_RECEIVED':
            return 'Received';
        case 'TRANSACTION_SENT':
            return 'Sent';
        default:
            return 'Unknown'; // should never happen because parent component prevents it
    }
};

const computeSubtitle = (
    notifData: NotifTransactionData,
    notifType: NotifType
) => {
    switch (notifType) {
        case 'TRANSACTION_RECEIVED':
            return `From ${notifData.from}`;
        case 'TRANSACTION_SENT':
            return `To ${notifData.to}`; // I assume there is a typo in the Figma design: 'to' instead of 'To'
        default:
            return 'Unknown'; // should never happen because parent component prevents it
    }
};

const computeNotifTypeIconSrc = (notifType: string) => {
    switch (notifType) {
        case 'TRANSACTION_RECEIVED':
            return '/icons/arrow-down.png';
        case 'TRANSACTION_SENT':
            return '/icons/arrow-up.png';
        default:
            return '/vite.svg'; // should never happen because parent component prevents it
    }
};

export default NotifTransaction;
