import { useEffect } from "react";
import "../styles/home.css";

export default function Home() {
    /* Change the page title on page load */
    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div className="home-page">
            {/* replace this line with all of your code! */}
        </div>
    );
}
