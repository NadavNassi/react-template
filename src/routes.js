import { Home } from './pages/home'
import { CannabisApp } from './pages/cannabis-app'
import { AboutPage } from './pages/about-page'
import { CannabisDetails } from './pages/cannabis-details'
import { EditItem } from './pages/edit-item'


export const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/cannabis',
        element: <CannabisApp />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: '/cannabis/:id',
        element: <CannabisDetails />
    },
    {
        path: '/edit/:id',
        element: <EditItem />
    }
]