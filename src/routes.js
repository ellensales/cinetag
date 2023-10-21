import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Favorites from "pages/Favorites";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import Base from "pages/Base";

export default function AppRoutes(){
    return(
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Base/>}>
                            <Route index element={<Home/>}/>
                            <Route path="favoritos" element={<Favorites/>}/>
                            <Route path=":id" element={<Player/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Route>
                    </Routes>      
        </BrowserRouter>
    )
}