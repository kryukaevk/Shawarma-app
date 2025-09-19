import { Route, Routes } from 'react-router-dom';
import { Top, Header, Products } from './components';
import { Cart } from './page';
import { useState } from 'react';

function App() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header openModal={openModal} />
                            <Top />
                            <Products />
                            <Cart isOpen={isModalOpen} onClose={closeModal} />
                        </>
                    }
                ></Route>
            </Routes>
        </>
    );
}

export default App;
