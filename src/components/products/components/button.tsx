import { useState } from 'react';
import { Bag } from '../../icons/bag';

interface ButtonProps {
    index: number;
    openModal: () => void;
}

export const Button: React.FC<ButtonProps> = ({ index, openModal }) => {
    const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(
        null
    );

    const handleMouseButtonEnter = (index: number) => {
        setActiveButtonIndex(index);
    };

    const handleMouseButtonLeave = () => {
        setActiveButtonIndex(null);
    };

    return (
        <button
            type="button"
            className={`group flex justify-center gap-1 items-center rounded-lg p-1 border transition-all duration-500 ease-in-out 
                                        ${activeButtonIndex === index ? 'bg-green-600 w-28 text-white' : 'border-green-600 w-10'}`}
            onMouseEnter={() => handleMouseButtonEnter(index)}
            onMouseLeave={handleMouseButtonLeave}
            onClick={openModal}
        >
            <Bag />

            {activeButtonIndex === index && (
                <p className="group text-white">Собрать</p>
            )}
        </button>
    );
};
