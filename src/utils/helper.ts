export const computeGradientColor = (currency: string) => {
    switch (currency) {
        case 'BTC':
        case 'bitcoin':
            return 'rgba(247, 147, 26, 0.2)';
        case 'ETH':
            return 'rgba(69, 74, 117, 0.2)';
        case 'XRP':
            return 'rgba(153, 69, 255, 0.2)'; // I chose this color randomly because there is no color for XRP in the Figma design
        case 'XTZ':
            return 'rgba(153, 69, 255, 0.2)'; // I chose this color randomly because there is no color for XTZ in the Figma design
        default:
            return 'rgba(0, 0, 0, 0.2)';
    }
};

export const computeCryptoIconSrc = (currency: string) => {
    switch (currency) {
        case 'BTC':
        case 'bitcoin':
            return '/icons/btc.svg';
        case 'ETH':
            return '/icons/eth.png';
        case 'XRP':
            return '/icons/xrp.svg';
        case 'XTZ':
            return '/icons/xtz.jpg';
        default:
            return '/vite.svg'; // I would ask the product designer for a default icon for unknown currencies
    }
};
