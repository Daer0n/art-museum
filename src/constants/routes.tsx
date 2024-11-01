import MainPage from "../pages/MainPage/MainPage";
import FavouritesPage from "../pages/FavouritesPage/FavouritesPage";
import DetailInfoPage from "../pages/DetailInfoPage/DetailInfoPage";

export const ROUTES = {
    home: {
        route: "/",
        element: <MainPage />,
    },
    info: {
        route: "/info",
        element: <DetailInfoPage />,
    },
    favourites: {
        route: "/favourites",
        element: <FavouritesPage />,
    },
};
