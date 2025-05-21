import { NotifAccountData, NotifType } from '../../types/Notif';
import { computeGradientColor, computeCryptoIconSrc } from '../../utils/helper';
import Card from '../ui/Card';

type NotifAccountProps = {
    notifType: NotifType;
    notifData: NotifAccountData;
};

const NotifAccount = ({ notifType, notifData }: NotifAccountProps) => {
    const title = computeTitle(notifType);
    const subtitle = notifData.name; // I assume from the Figma design that this is the account name
    const cryptoIconSrc = computeCryptoIconSrc(notifData.currency);
    const notifTypeIconSrc = computeNotifTypeIconSrc(notifType);
    const gradientColor = computeGradientColor(notifData.currency);

    return (
        <Card
            title={title}
            subtitle={subtitle}
            cryptoIconSrc={cryptoIconSrc}
            notifTypeIconSrc={notifTypeIconSrc}
            gradientColor={gradientColor}
        />
    );
};

const computeTitle = (notifType: NotifType) => {
    switch (notifType) {
        case 'ACCOUNT_CREATED':
            return 'Account Created';
        default:
            return 'Unknown'; // should never happen because parent component prevents it
    }
};

const computeNotifTypeIconSrc = (notifType: string) => {
    switch (notifType) {
        case 'ACCOUNT_CREATED':
            return '/icons/add.png';
        default:
            return '/vite.svg'; // should never happen because parent component prevents it
    }
};

export default NotifAccount;
