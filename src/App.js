import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import Work from './components/Work';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element:<About />,
    },
    {
        path: '/skills',
        element: <Skills />,
    },
    {
        path: '/work',
        element: <Work />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/blog',
        element: <BlogList />,
    },
    {
        path: '/blog/:id',
        element: <BlogDetail />,
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
