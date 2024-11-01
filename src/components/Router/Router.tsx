import { ROUTES } from "../../constants/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.home.route} element={ROUTES.home.element} />
                <Route path={ROUTES.info.route} element={ROUTES.info.element} />
                <Route
                    path={ROUTES.favourites.route}
                    element={ROUTES.favourites.element}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
