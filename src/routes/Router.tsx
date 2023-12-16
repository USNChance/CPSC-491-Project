import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../Main";
import RecipeClicked from "../components/RecipeClicked";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/recipe/:id" element={<RecipeClicked />} />              
            </Routes>
        </BrowserRouter>
    )
}

export default Router;