import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Course/Course";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader:()=> fetch('http://localhost:5000/courses')
            },
            {
                path:'/course',
                element:<Course></Course>,
                loader:()=>fetch('http://localhost:5000/course')
            },
            {
                path: '/course/:id',
                element: <PrivateRoutes><CourseDetails></CourseDetails></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            }
        ]
    }
])