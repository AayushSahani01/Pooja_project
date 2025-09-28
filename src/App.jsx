import React from "react";
import { BrowserRouter, Routes , Route} from "react-router-dom";

import HeroRoute from "./landingPage/Home/HeroRoute.jsx";
import About from "./landingPage/about/AboutPage.jsx";
import ContactPage from "./landingPage/Contacts/ContactPage.jsx";
import SupportPage from "./landingPage/support/SupportPage.jsx";
import Login from "./landingPage/signup/Login.jsx";
import Signup from "./landingPage/signup/Signup.jsx";
import Blogs from "./landingPage/about/Blogs.jsx";
import BlogDetailPage from "./landingPage/about/BlogDetailPage.jsx";
import Fashions from "./landingPage/fashions/Fashions.jsx";
import Collection from "./landingPage/fashions/Collection.jsx";
import NotPages from "./NotPages.jsx";
import Orders from "./landingPage/cart/Orders.jsx";
import OnTopBar from "./landingPage/OnTopBar.jsx";
import ShopNow from "./landingPage/fashions/ShopNow.jsx";
import ScrollToTop from "./scrolltotop.jsx";
import ShippingInfo from "./landingPage/ShippingInfo.jsx";
import SizeGuide from "./landingPage/SizeGuide.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { PageErrorFallback } from "./components/ErrorFallbacks.jsx";


 

function App() {
  return (
    <ErrorBoundary fallback={PageErrorFallback} showDetails={process.env.NODE_ENV === 'development'}>
      <BrowserRouter basename="/">
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={
            <ErrorBoundary>
              <HeroRoute />
            </ErrorBoundary>
          } />
          <Route path="/about" element={
            <ErrorBoundary>
              <About />
            </ErrorBoundary>
          } />
          <Route path="/contacts" element={
            <ErrorBoundary>
              <ContactPage />
            </ErrorBoundary>
          } />
          <Route path="/order" element={
            <ErrorBoundary>
              <SupportPage />
            </ErrorBoundary>
          } />
          <Route path="/signup" element={
            <ErrorBoundary>
              <Signup />
            </ErrorBoundary>
          } />
          <Route path="/login" element={
            <ErrorBoundary>
              <Login />
            </ErrorBoundary>
          } />
          <Route path="/blog" element={
            <ErrorBoundary>
              <Blogs />
            </ErrorBoundary>
          } />
          <Route path="/blog/:id" element={
            <ErrorBoundary>
              <BlogDetailPage />
            </ErrorBoundary>
          } />
          <Route path="/fashion" element={
            <ErrorBoundary>
              <Fashions />
            </ErrorBoundary>
          } />
          <Route path="/collection" element={
            <ErrorBoundary>
              <Collection />
            </ErrorBoundary>
          } />
          <Route path="/shop" element={
            <ErrorBoundary>
              <ShopNow />
            </ErrorBoundary>
          } />
          <Route path="/shipping-info" element={
            <ErrorBoundary>
              <ShippingInfo />
            </ErrorBoundary>
          } />
          <Route path="/size-guide" element={
            <ErrorBoundary>
              <SizeGuide />
            </ErrorBoundary>
          } />
          <Route path="/*" element={<NotPages />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

   export default App;
