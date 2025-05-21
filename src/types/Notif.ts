export type Notif = {
    id: number;
    type: NotifType;
    data: NotifTransactionData | NotifAccountData;
};

export type NotifType =
    | 'TRANSACTION_RECEIVED'
    | 'TRANSACTION_SENT'
    | 'ACCOUNT_CREATED';

export type NotifTransactionData = {
    id: number;
    amount: number;
    unit: NotifDataUnit;
    from: string;
    to: string;
};

export type NotifAccountData = {
    id: number;
    name: string;
    currency: string;
};

export type NotifDataUnit = 'BTC' | 'ETH' | 'XRP' | 'XTZ'; // To be extended
