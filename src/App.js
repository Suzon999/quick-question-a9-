
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/',
          element: <Topics></Topics>
        },
        {
          path: '/Statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/Blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
