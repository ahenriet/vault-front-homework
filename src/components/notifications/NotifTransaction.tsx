import { NotifTransactionData, NotifType } from '../../types/Notif';
import { computeGradientColor, computeIconSrc } from '../../utils/helper';
import Card from '../ui/Card';

type NotifTransactionProps = {
    notifType: NotifType;
    notifData: NotifTransactionData;
};

const NotifTransaction = ({ notifType, notifData }: NotifTransactionProps) => {
    const title = computeTitle(notifType);
    const subtitle = computeSubtitle(notifData, notifType);
    const amount = `${new Intl.NumberFormat().format(notifData.amount)} ${notifData.unit}`;
    const iconSrc = computeIconSrc(notifData.unit);
    const gradientColor = computeGradientColor(notifData.unit);

    return (
        <Card
            title={title}
            subtitle={subtitle}
            amount={amount}
            iconSrc={iconSrc}
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
            return 'Unknown'; // should never happen because parent component would have thrown an error
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
            return 'Unknown'; // should never happen because parent component would have thrown an error
    }
};

export default NotifTransaction;
