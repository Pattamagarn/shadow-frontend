import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import Home from './pages/home/Home'
import SignUp from './pages/sign-up/SignUp'
import SignIn from './pages/sign-in/SignIn'
import ForgotPassword from './pages/forgot-password/ForgotPassword'
import GeneralManage from './pages/general-management/GeneralManage'
import ProductManage from './pages/product-management/ProductManage'
import InsertAuctionProduct from './pages/insert-product/InsertAuctionProduct'
import InsertGachaProduct from './pages/insert-product/InsertGachaProduct'
import InsertGeneralProduct from './pages/insert-product/InsertGeneralProduct'
import AuctionProduct from './pages/product/auction-product/AuctionProduct'
import GachaProduct from './pages/product/gacha-product/GachaProduct'
import GeneralProduct from './pages/product/general-product/GeneralProduct'
import SaleProduct from './pages/product/sale-product/SaleProduct'
import TopUp from './pages/top-up/TopUp'
import Transaction from './pages/transactions/Transaction'
import MyProfile from './pages/my-profile/MyProfile'
import MyStore from './pages/my-store/MyStore'
import InsertBanner from './pages/insert-product/InsertBanner'
import InsertGameName from './pages/insert-product/InsertGameName'
import UpdateAuctionProduct from './pages/update-product/UpdateAuctionProduct'
import UpdateBanner from './pages/update-product/UpdateBanner'
import UpdateGachaProduct from './pages/update-product/UpdateGachaProduct'
import UpdateGameName from './pages/update-product/UpdateGameName'
import UpdateGeneralProduct from './pages/update-product/UpdateGeneralProduct'
import UpdatePaymentMethodInfo from './pages/update-product/UpdatePaymentMethodInfo'
import UpdatePaymentMethodVideo from './pages/update-product/UpdatePaymentMethodVideo'
import Analysis from './pages/analysis/Analysis'
import MemberManage from './pages/member-management/MemberManage'

document.body.className = 'font-Kanit'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route exact path='/sign-up' element={<SignUp />} />
        <Route exact path='/sign-in' element={<SignIn />} />
        <Route exact path='/forgot-password' element={<ForgotPassword />} />
        <Route exact path='/general-management' element={<GeneralManage />} />
        <Route exact path='/product-management' element={<ProductManage />} />
        <Route exact path='/member-management' element={<MemberManage />} />
        <Route exact path='/insert-auction-product' element={<InsertAuctionProduct />} />
        <Route exact path='/insert-gacha-product' element={<InsertGachaProduct />} />
        <Route exact path='/insert-general-product' element={<InsertGeneralProduct />} />
        <Route exact path='/auction-product' element={<AuctionProduct />} />
        <Route exact path='/gacha-product' element={<GachaProduct />} />
        <Route exact path='/general-product' element={<GeneralProduct />} />
        <Route exact path='/sale-product' element={<SaleProduct />} />
        <Route exact path='/top-up' element={<TopUp />} />
        <Route exact path='/transaction' element={<Transaction />} />
        <Route exact path='/my-profile' element={<MyProfile />} />
        <Route exact path='/my-store' element={<MyStore />} />
        <Route exact path='/insert-banner' element={<InsertBanner />} />
        <Route exact path='/insert-game-name' element={<InsertGameName />} />
        <Route exact path='/update-auction-product' element={<UpdateAuctionProduct />} />
        <Route exact path='/update-gacha-product' element={<UpdateGachaProduct />} />
        <Route exact path='/update-general-product' element={<UpdateGeneralProduct />} />
        <Route exact path='/update-banner' element={<UpdateBanner />} />
        <Route exact path='/update-game-name' element={<UpdateGameName />} />
        <Route exact path='/update-payment-method-info' element={<UpdatePaymentMethodInfo />} />
        <Route exact path='/update-payment-method-Video' element={<UpdatePaymentMethodVideo />} />
        <Route exact path='/analysis' element={<Analysis />} />
        


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();