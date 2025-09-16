import { NavLink } from 'react-router-dom';

export const ButtonBack: React.FC = () => {
    return (
        <>
            <NavLink
                to="/"
                className="flex justify-center items-center hover:no-underline"
            >
                <div className="cursor-pointer flex justify-center items-center h-10 w-48 bg-gray-900 text-white  rounded-2xl duration-200 hover:bg-gray-600">
                    Вернуться назад
                </div>
            </NavLink>
        </>
    );
};
