import { createRoot } from "react-dom/client";
import FrameworkList from "./FrameworkListSearchFilter";
import "./tailwind.css";

import ResponsiveLayout from "./components/ResponsiveLayout";
import ResponsiveWidth from "./components/ResponsiveWidth";
import ResponsiveDesign from "./components/ResponsiveDesign";
createRoot (document.getElementById("root"))
    .render(
        <div>
            <FrameworkList/>
            <ResponsiveWidth/>
        </div>
    )   