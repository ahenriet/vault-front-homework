import { render, screen, waitFor } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import App from './App';

const mockNotifications = [
    {
        id: 1,
        type: 'TRANSACTION_RECEIVED',
        data: {
            id: 1,
            amount: 4,
            unit: 'ETH',
            from: '0xe5e428cbb93a218dad2c908f2f3e2f46575d91a5',
            to: '0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f',
        },
    },
    {
        id: 2,
        type: 'TRANSACTION_SENT',
        data: {
            id: 2,
            amount: 0.4,
            unit: 'ETH',
            to: '0xe5e428cbb93a218dad2c908f2f3e2f46575d91a5',
            from: '0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f',
        },
    },
    {
        id: 3,
        type: 'ACCOUNT_CREATED',
        data: { id: 1, name: 'Big BTC account', currency: 'bitcoin' },
    },
];

vi.mock('./services/api', () => ({
    getNotifications: () => Promise.resolve(mockNotifications),
}));

test('Render the app with mock data and check it is displayed as expected', async () => {
    render(<App />);

    await waitFor(() => {
        expect(screen.getByText('Received')).not.toBeNull();
        expect(
            screen.getByText('From 0xe5e428cbb93a218dad2c908f2f3e2f46575d91a5')
        ).not.toBeNull();
        expect(screen.getByText('4 ETH')).not.toBeNull();

        expect(screen.getByText('Sent')).not.toBeNull();
        expect(
            screen.getByText('To 0xe5e428cbb93a218dad2c908f2f3e2f46575d91a5')
        ).not.toBeNull();
        expect(screen.getByText('0,4 ETH')).not.toBeNull();

        expect(screen.getByText('Account Created')).not.toBeNull();
        expect(screen.getByText('Big BTC account')).not.toBeNull();
    });
});
