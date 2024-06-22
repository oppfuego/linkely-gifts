import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import "./Navigation1.css";

const Navigation1 = ({ className = "" }) => {
  return (
    <section className={`navigation1 ${className}`}>
      <FrameComponent2 groupIconTextDecoration="none" />
      <div className="dashboard-wrapper">
        <div className="dashboard">
          <div className="greeting">
            <h1 className="welcome-darnell">Welcome, Darnell</h1>
          </div>
          <div className="your-personal-dashboard">Your Personal Dashboard</div>
        </div>
      </div>
    </section>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
