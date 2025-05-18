import { NotifAccountData, NotifType } from '../../types/Notif';
import { computeGradientColor, computeIconSrc } from '../../utils/helper';
import Card from '../ui/Card';

type NotifAccountProps = {
    notifType: NotifType;
    notifData: NotifAccountData;
};

const NotifAccount = ({ notifType, notifData }: NotifAccountProps) => {
    const title = computeTitle(notifType);
    const subtitle = notifData.name; // I assume from the Figma design that this is the account name
    const iconSrc = computeIconSrc(notifData.currency);
    const gradientColor = computeGradientColor(notifData.currency);

    return (
        <Card
            title={title}
            subtitle={subtitle}
            iconSrc={iconSrc}
            gradientColor={gradientColor}
        />
    );
};

const computeTitle = (notifType: NotifType) => {
    switch (notifType) {
        case 'ACCOUNT_CREATED':
            return 'Account Created';
        default:
            return 'Unknown'; // should never happen because parent component would have thrown an error
    }
};

export default NotifAccount;
