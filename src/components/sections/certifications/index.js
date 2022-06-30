// Component importation
import CertificationCard from "../../cards/certification-card";
// Data importation
import CertificationData from "../../../data/certifications.json";

const Certifications = () => {
    return (
        <div>
            <h2 className="title">Certifications</h2>
            {
                CertificationData.map(certification => (
                    <CertificationCard key={certification.school} data={certification} />
                ))
            }
        </div>
    );
};

export default Certifications;