import "../styles/components/Section.css";

export default function Section({children, outer}) {
    return (
        <div className={outer ? "section outer" : "section"}>
            {children}
        </div>
    );
}