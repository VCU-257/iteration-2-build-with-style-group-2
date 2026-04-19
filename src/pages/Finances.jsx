import { useEffect } from "react";
import "../styles/finances.css";

export default function Finances() {
    /* Change the page title on page load */
    useEffect(() => {
        document.title = "Finances";
    }, []);

    return (
        <div className="finances-page">
            {/* replace this line with all of your code! */}
        </div>
    );
}
