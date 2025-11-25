import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './RootLayout'
import Login from '../pages/login'
import Signup from '../pages/Signup'
import RoadmapPage from '../pages/RoadmapPage'
import ProjectsPage from '../pages/ProjectsPage'
import CareersPage from '../pages/CareersPage'
import ProfilePage from '../pages/ProfilePage'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: 'roadmaps', element: <RoadmapPage />},
      {path: 'projects', element: <ProjectsPage />},
      {path: 'careers', element: <CareersPage />},
      {path: 'profile', element: <ProfilePage />},
    ]
  }
]);

export default routes;