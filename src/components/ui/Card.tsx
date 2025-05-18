type CardProps = {
    title: string;
    subtitle: string;
    amount?: string;
    iconSrc: string;
    gradientColor: string;
};

const Card: React.FC<CardProps> = ({
    title,
    subtitle,
    amount,
    iconSrc,
    gradientColor,
}: CardProps) => {
    return (
        <div
            className="border rounded-xl mt-3 p-3 shadow-md bg-white flex items-start space-x-4 "
            style={{
                background: `linear-gradient(to bottom right, ${gradientColor} 0%, white 40%)`,
            }}
        >
            {/* <div className="w-12 h-12 rounded-full"> */}
            <img
                src={iconSrc}
                alt="Notification Icon"
                className="w-12 h-12 rounded-full"
            />
            {/* </div> */}
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 w-50">
                    {title}
                </h3>
                <span className="text-xs text-gray-400 truncate inline-block w-50">
                    {subtitle}
                </span>
            </div>
            {amount && (
                <div className="flex items-center justify-end w-full">
                    <p className="text-lg font-semibold truncate text-gray-800">
                        {amount}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Card;
