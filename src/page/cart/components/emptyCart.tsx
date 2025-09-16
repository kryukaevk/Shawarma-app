import { BigCart, Crying } from '../../../components/icons';
import { ButtonBack } from './ButtonBack';

export const EmptyCart: React.FC = () => {
    return (
        <div className="flex justify-center flex-col max-w-4xl p-4 text-center">
            <div className="flex flex-col gap-1 items-center">
                <div className="flex items-center gap-2 my-3">
                    <h3>Корзина пустая</h3>
                    <Crying />
                </div>
                <p className="text-gray-400 text-lg">
                    К сожалению, товар в корзине отсутствует.
                    <br />
                    Просим Вас перейти на главную страницу для выбора заказа.
                </p>
                <BigCart />
            </div>

            <ButtonBack />
        </div>
    );
};
