import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const DefaultComponent = props => {
  const [flag, setFlag] = useState(true);

  const handleHide = () => {
    setFlag(!flag);
  };
  return (
    <>
      {flag &&
        props.data.map(item => (
          <div className={props.class} key={item.id}>
            <NavLink
              to={`/book/${item.data}`}
              style={{ textDecoration: "none" }}
            >
              <img src={item.img} alt="" />
            </NavLink>
            <div className="cus">
              <NavLink
                to={`/book/${item.data}`}
                style={{ textDecoration: "none" }}
              >
                <h3>{item.title}</h3>
              </NavLink>
              {props.showDes && <p className="des__mid">{item.description}</p>}
            </div>
          </div>
        ))}
      {props.hide && (
        <div className="frame">
          <button className="custom-btn" onClick={handleHide}>
            {flag ? "❌" : "⭕"}
          </button>
        </div>
      )}
    </>
  );
};
export default DefaultComponent;
