type CardProps = {
    title: string;
    subtitle: string;
    amount?: string;
    cryptoIconSrc: string;
    notifTypeIconSrc: string;
    gradientColor: string;
};

const Card: React.FC<CardProps> = ({
    title,
    subtitle,
    amount,
    cryptoIconSrc,
    notifTypeIconSrc,
    gradientColor,
}: CardProps) => {
    return (
        <div
            className="border rounded-xl mt-3 p-3 shadow-md bg-white flex items-start space-x-3"
            style={{
                background: `linear-gradient(to bottom right, ${gradientColor} 0%, white 40%)`,
            }}
        >
            <div className="relative w-12 h-12 flex-shrink-0">
                <div
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${cryptoIconSrc})`,
                        backgroundClip: 'padding-box',
                    }}
                >
                    <div
                        className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full"
                        style={{
                            clipPath: 'circle(50%)',
                        }}
                    ></div>
                </div>
                <img
                    src={notifTypeIconSrc || '/vite.svg'}
                    alt="Notification type icon"
                    className="w-4 h-4 rounded-full absolute top-0 right-0"
                />
            </div>
            <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-800 w-50">
                    {title}
                </h3>
                <span
                    className="text-xs text-gray-400 truncate inline-block w-50"
                    title={subtitle} // good old tooltip using the title attribute. With a UI library, it would look better
                >
                    {subtitle}
                </span>
            </div>
            {amount && (
                <div className="flex items-center justify-end w-full">
                    <p className="text-base font-semibold truncate text-gray-800">
                        {amount}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Card;
