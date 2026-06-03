import { useState } from "react";
import "../styles/CertificationsList.css"

function CertificationsList() {
    const [showCertifications, setShowCertifications] = useState(true);

    const certifications = [
        {
            id: 1,
            title: "React Developper",
            provider: "Meta"
        },
        {
            id: 2,
            title: "JavaScript Algorithm",
            provider: "PrimeTekCodeCamp",
    },
    {
            id: 3,
            title: "Python Programming",
            provider: "Google"
    },
    {
            id: 4,
            title: "Node.js Fundamentals",
            provider: "OpenJS Foundation"
    },
    {
            id: 5,
            title: "AWS Cloud Practitioner",
            provider: "Amazon Web Services"
    }
];

return (
    <div className="certifications-container">
        <h2 className="certifications-title">
            Developer Certifications
        </h2>

        {showCertifications &&
            certifications.map((certification) => (
            <div
                    key={certification.id}
                    className="certification-item"
                >
                    <span>{certification.title}</span>
                    <span>{certification.provider}</span>
            </div>
        ))}

        <button
            className="toggle-button"
            onClick={() =>
                setShowCertifications(!showCertifications)
            }
        >
            {showCertifications
            ? "Hide Certifications"
            : "Show Certifcations"}

        </button>
    </div>
);

}
export default CertificationsList