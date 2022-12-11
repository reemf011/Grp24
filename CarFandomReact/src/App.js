import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './store/AuthProvider';

import AddPostPage from './Post/AddPostPage';
import HomePage from './Post/HomePage';
import PostPage from './Post/PostPage';
import SigninPage from './Post/SigninPage';
import SignupPage from './Post/SignupPage';
import Layout from './UI/layout/Layout';
import PostPage from './Post/PostPage';
import CarPages from './pages/CarPages';
<<<<<<< Updated upstream
import FeedbackPage from './pages/FeedbackPage';
=======
import AddFeedbackPage from './pages/AddFeedbackPage';
import CustomerPage from './pages/CustomerPage';
import FeedbackPage from './pages/FeedbackPage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import Repairpage from './pages/Repairpage';
>>>>>>> Stashed changes


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<h1>HomePage </h1>} />
            <Route path="/Post" element={<PostPage />} />
            <Route path="/Post/:PostId" element={<PostPage />} />
            <Route path="/Post/add" element={<AddPostPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/car" element={<CarPages />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
  return (
    <div>
      <CarPages/>
    </div>
  );
};

export default App;
