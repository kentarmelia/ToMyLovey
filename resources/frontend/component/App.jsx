
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPageView from "./views/MainPageView";
import "./layout/css/Style.css";
import "./layout/css/Font.css";
import StartedView from "./views/StartedView";
import LanguagesView from "./views/LanguagesView";
import RecapView from "./views/RecapView";
import ScrollToTop from "./layout/MainComponent/ScrollToTop";
import BackgroundMusic from "./layout/MainComponent/BackgroundMusic";
import InitialPageView from "./views/InitialPageView";
import { useState } from "react";


const App = () => {
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    const handleInteraction = () => {
        // Start playing music when user interacts with the screen
        if (!isMusicPlaying) {
            setIsMusicPlaying(true);
        }
    };
    const router = createBrowserRouter([
        {
            path: "/",
            element: <InitialPageView />,
        },
        {
            path: "/home",
            element: <MainPageView />,
        },
        {
            path: "/howeverythingstarted",
            element: <StartedView/>,
        },
        {
            path: "/lovelanguages",
            element: <LanguagesView/>,
        },
        {
            path: "/recap",
            element: <RecapView/>,
        },

    ]);

    return (
        <>
        <div onClick={handleInteraction}>
            
            <BackgroundMusic isPlaying={isMusicPlaying} />
            <RouterProvider router={router} />
        </div>
    </>
      );
};

export default App;
