import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home/Home';
import SliderBanner from './Pages/Home/Slider Banner/SliderBanner';
import 'aos/dist/aos.css';
import 'react-photo-view/dist/react-photo-view.css';
import { RouterProvider } from 'react-router';
import router from './Router/router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RouterProvider router={router}></RouterProvider>
    </>

  );
}

export default App;
