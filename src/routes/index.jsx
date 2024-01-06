import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Bookmarks from "~/pages/bookmarks";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import Lists from "~/pages/lists";
import Messages from "~/pages/messages";
import NotFound from "~/pages/not-found";
import Notifications from "~/pages/notifications";
import Premium from "~/pages/premium";
import Profile from "~/pages/profile";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'explore',
                element: <Explore />
                },
                {
                    path: 'notifications',
                    element: <Notifications />
                },
                {
                    path: 'messages',
                    element: <Messages />
                },
                {
                    path: 'bookmarks',
                    element: <Bookmarks />
                },
                {
                    path: 'lists',
                    element: <Lists />
                },
                {
                    path: 'profile',
                    element: <Profile />
                },
                {
                    path: 'premium',
                    element: <Premium />
                },
                {
                    path: ':slug',
                    element: <Profile />
                },
                {
                    path: '*',
                    element: <NotFound />
                },
                
        ]
    },
   
])

export default routes