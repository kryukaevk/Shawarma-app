import { Categories, Sort } from './components';
import './style.css';

export const Top: React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className="flex justify-between items-center w-3/5 mr-2">
                <Categories />
                <Sort />
            </div>
        </div>
    );
};
