import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>
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