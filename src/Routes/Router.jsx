import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../component/Pages/Home";
import Category from "../component/Pages/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: '',
                    element: <Home></Home>
                },
                {
                    path: '/category/:id',
                    element: <Category></Category> ,
                    loader: () => fetch('/news.json')

                },
            ]
        },
        {
            path: '/auth',
            element: <h2>Authentication Layout</h2>
        },
        {
            path: '/news',
            element: <h2>News Layout</h2>
        },
        {
            path: '/*',
            element: <h2>Madar kandey Error fixed kor</h2>
        },
    ]
)

export default router