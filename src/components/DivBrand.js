import { useMemo } from "react";
import PropTypes from "prop-types";
import "./DivBrand.css";

const DivBrand = ({
  className = "",
  imageNgLazyloaded,
  cruisesTravelCardByInspir,
  propTop,
  propLeft,
}) => {
  const divBrand1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`div-brand135 ${className}`} style={divBrand1Style}>
      <img
        className="image-ng-lazyloaded-icon137"
        alt=""
        src={imageNgLazyloaded}
      />
      <div className="cruises-travelcard-by-inspire-wrapper">
        <div className="cruises-travelcard-by">{cruisesTravelCardByInspir}</div>
      </div>
    </div>
  );
};

DivBrand.propTypes = {
  className: PropTypes.string,
  imageNgLazyloaded: PropTypes.string,
  cruisesTravelCardByInspir: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default DivBrand;
