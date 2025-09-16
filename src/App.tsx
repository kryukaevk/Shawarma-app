import { Route, Routes } from 'react-router-dom';
import { Top, Header, Products } from './components';
import { Cart } from './page';

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Top />
                            <Products />
                        </>
                    }
                ></Route>
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>
        </>
    );
}

export default App;
