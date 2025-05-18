export type Notif = {
    id: number;
    type: NotifType;
    data: NotifTransactionData | NotifAccountData;
};

// export const TRANSACTION_RECEIVED: string = 'TRANSACTION_RECEIVED';
// export const TRANSACTION_SENT: string = 'TRANSACTION_SENT';
// export const ACCOUNT_CREATED: string = 'ACCOUNT_CREATED';

export type NotifType =
    | 'TRANSACTION_RECEIVED'
    | 'TRANSACTION_SENT'
    | 'ACCOUNT_CREATED';

// export type NotifData = {
//     id: number;
//     amount?: number;
//     unit?: NotifDataUnit;
//     from?: string;
//     to?: string;
//     name?: string;
//     currency?: string;
// };

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
