interface ButtonBackProps {
    onClose: () => void;
}

export const ButtonBack: React.FC<ButtonBackProps> = ({ onClose }) => {
    return (
        <div
            onClick={onClose}
            className="cursor-pointer flex justify-center items-center h-12 w-auto p-3 bg-gray-900 text-white  rounded-2xl duration-200 hover:bg-gray-600"
        >
            Вернуться назад
        </div>
    );
};
