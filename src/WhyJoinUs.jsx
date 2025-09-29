import "./WhyJoinUs.css";
import studentIcon from "./student.svg";
import mentorIcon from "./mentor.svg";
import chatIcon from "./chat.svg";

const BenefitCard = ({ icon, title, description }) => (
  <div className="benefit-card">
    <img src={icon} alt={title} className="benefit-icon" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const WhyJoinUs = () => {
  return (
    <section className="why-join-us">
      <h2>Why Join Us</h2>
      <div className="cards-container">
        <BenefitCard
          icon={studentIcon}
          title="For Student"
          description="Join Groups, ask doubts, chat with peers."
        />
        <BenefitCard
          icon={mentorIcon}
          title="For Mentor"
          description="Create groups, guide students, provide resources."
        />
        <BenefitCard
          icon={chatIcon}
          title="Real-time Chat"
          description="Individuals & group communication with instant updates."
        />
      </div>
    </section>
  );
};

export default WhyJoinUs;
