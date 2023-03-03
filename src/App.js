import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import ShoppingCartPage from './pages/ShoppingCartPage';
import Login from './pages/LoginPage';
import './sassStyles/_global.scss'
import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AccountLayout from './components/AccountLayout/AccountLayout';
import AccountInfoPage from './pages/AccountInfoPage';
import SingleProductPage from './pages/SingleProductPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <Layout>

      <Routes>
        <Route path="/"  >
          <Route path="register" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cart" element={<ShoppingCartPage />} />
          {/* <Route path="singleProduct" element={<SingleProductPage />} /> */}
          <Route path='products' element={<CategoryPage/>}/>
          <Route path='/products/:productId' element={<SingleProductPage />}/>
          <Route path='dashboard/' element={<AccountLayout/>}>
            <Route path="accountInfo" element={<AccountInfoPage/>}/>
          </Route>
          <Route index element={<Home />} />

        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
