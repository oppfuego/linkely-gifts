import { useMemo } from "react";
import PropTypes from "prop-types";
import "./DivBrand1.css";

const DivBrand1 = ({
  className = "",
  imageNgLazyloaded,
  beanAndBemble,
  propTop,
  propLeft,
  propMinWidth,
}) => {
  const divBrandStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const beanAndBembleStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`div-brand134 ${className}`} style={divBrandStyle}>
      <img
        className="image-ng-lazyloaded-icon136"
        loading="lazy"
        alt=""
        src={imageNgLazyloaded}
      />
      <div className="bean-and-bemble-wrapper">
        <div className="bean-and-bemble" style={beanAndBembleStyle}>
          {beanAndBemble}
        </div>
      </div>
    </div>
  );
};

DivBrand1.propTypes = {
  className: PropTypes.string,
  imageNgLazyloaded: PropTypes.string,
  beanAndBemble: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default DivBrand1;
