import { useState } from 'react';

export const Categories: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const categories = ['Все', 'Фри', 'Россия', 'Гавайи', 'В пите'];

    const handleCategoriesClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="categories">
            <ul className="flex gap-3">
                {categories.map((item, index) => (
                    <li
                        key={index}
                        className={
                            activeIndex === index
                                ? 'active__item'
                                : 'categories__item'
                        }
                        onClick={() => handleCategoriesClick(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
