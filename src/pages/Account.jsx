import { useEffect } from "react";
import "../styles/account.css";

export default function Account() {
    /* Change the page title on page load */
    useEffect(() => {
        document.title = "Edit Account Info";
    }, []);

    return (
        <div className="account-page">
            {/* replace this line with all of your code! */}
        </div>
    );
}
