import { CloseIcon } from '../../../../../components';

interface ButtonClose {
    handleCloseModal: () => void;
}

export const ButtonClose: React.FC<ButtonClose> = ({ handleCloseModal }) => {
    return (
        <button title="Сlose" type="button" onClick={handleCloseModal}>
            <CloseIcon />
        </button>
    );
};
