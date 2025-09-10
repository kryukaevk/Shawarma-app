import './style.css';

export const IsLoading = () => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-100 bg-opacity-50">
            <div className="w-12 h-12 border-4 border-gray-400 border-t-green-500 rounded-full animate-spin"></div>
        </div>
    );
};
