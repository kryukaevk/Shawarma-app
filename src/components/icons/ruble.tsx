interface RubleProps {
    wSize: string;
    hSize: string;
    color?: string | undefined;
    strokeWidth?: string;
}

export const Ruble: React.FC<RubleProps> = ({
    wSize,
    hSize,
    color = 'currentColor',
    strokeWidth,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={`w-${wSize} h-${hSize}`}
            fill={color}
            stroke={color}
            strokeWidth={strokeWidth}
        >
            <path d="M291.75,308.1a105.8,105.8,0,1,0,0-211.6H136v32h39.943V276.1H136v32h39.943V352H136v32h39.943v56h32V384H304V352H207.943V308.1ZM207.943,128.5H291.75a73.8,73.8,0,1,1,0,147.6H207.943Z" />
        </svg>
    );
};
