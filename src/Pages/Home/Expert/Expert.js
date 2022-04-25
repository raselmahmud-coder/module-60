import React from "react";

const Expert = ({ expert }) => {
  const { img, name } = expert;
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 gy-5 gx-5">
        <div className="card">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expert;
