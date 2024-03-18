import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  const routes = [
    {
      path: '',
      element: <Layout />,
      children: [
        { 
          index: true,
          element: <Navigate to='login' replace/>
        },
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        }
      ]
    },
    {
      path: "*",
      element: (
        <Navigate to='/home' replace />
      ),
    },
  ]
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
