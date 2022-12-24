import Project from "../Pages/Home/Project/Project";
import ProjectDetails from "../Pages/Home/Project/ProjectDetails";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main/Main");
const { default: Home } = require("../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/project',
                element : <Project></Project>
            },
            {
                path: '/projectsDetails/:id',
                element: <ProjectDetails></ProjectDetails>,
               loader : ({params})=> fetch(`https://portfolio-server-indol-tau.vercel.app/projects/${params.id}`)
        },
        ]
    }
])

export default router