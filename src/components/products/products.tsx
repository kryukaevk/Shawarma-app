import { useState } from 'react';
import { PRODUCTS_MOCK } from './db';
import { truncateString } from './utils/truncateString';
import { Button, Modal } from './components';

export const Products: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [activeModalIndex, setActiveModalIndex] = useState<number | null>(
        null
    );
    const [isActiveList, setIsActiveList] = useState<boolean>(false);

    const openModal = (index: number) => {
        setIsModalOpen(!isModalOpen);
        setActiveModalIndex(index);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setIsActiveList(false);
    };

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    return (
        <div className="flex justify-center">
            <div className="flex justify-center items-center w-3/4">
                <ul className="flex gap-5 my-7">
                    {PRODUCTS_MOCK.map((item, index) => (
                        <li
                            className={`flex justify-center   flex-col gap-5 m-4 p-1 
                                ${activeIndex === index ? 'shadow-xl rounded-xl' : ''}`}
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => openModal(index)}
                        >
                            <div className="flex justify-center">
                                <img src={item.imageUrl} alt={item.title} />
                            </div>
                            <p className="text-center text-lg font-bold">
                                {item.title}
                            </p>
                            <p>{truncateString(item.description)}</p>
                            <div className="flex justify-between items-center p-1">
                                <p className="font-bold">
                                    от {item.price} руб.
                                </p>
                                <Button
                                    index={index}
                                    openModal={() => openModal(index)}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Modal
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                activeModalIndex={activeModalIndex}
                isActiveList={isActiveList}
                setIsActiveList={setIsActiveList}
            />
        </div>
    );
};
