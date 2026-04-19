import { useEffect } from "react";
import "../styles/fico.css";

export default function FICO() {
    /* Change the page title on page load */
    useEffect(() => {
        document.title = "FICO Score Detail";
    }, []);

    return (
        <div className="fico-page">
            {/* replace this line with all of your code! */}
        </div>
    );
}
