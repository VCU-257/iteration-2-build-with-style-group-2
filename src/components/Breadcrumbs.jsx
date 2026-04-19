import { Breadcrumb } from "react-bootstrap";

export default function Breadcrumbs({ titleAndHrefArray }) {
    const baseURL = import.meta.env.BASE_URL.includes("#") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}#/`;

    return (
        <Breadcrumb expand="lg" className="d-none d-lg-block">
            {titleAndHrefArray.map((titleAndHref, index) => {
                if(index === (titleAndHrefArray.length - 1)) {
                    return <Breadcrumb.Item active key={index}>{titleAndHref.title}</Breadcrumb.Item>
                }
                return <Breadcrumb.Item href={baseURL + titleAndHref.href} key={index}>{titleAndHref.title}</Breadcrumb.Item>
            })}
        </Breadcrumb>
    );
}