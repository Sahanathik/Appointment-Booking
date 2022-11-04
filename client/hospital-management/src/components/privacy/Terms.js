import React from "react";
import Navbar from "../navbar/Navbar";
import "./Terms.css";

const Terms = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <header className="privacy-header">
          <div className="privacy-overlay">
            <h1 className="privacy-title">Privacy Policy</h1>
          </div>
        </header>
      </div>
      <div className="container my-3">
        <div className="card privacy-card border-0">
          <p className="p-3 privacy-text">
            This Privacy Policy “Privacy Policy” applies to the collection,
            storage, processing, disclosure and transfer of your Personal
            Information defined below as per the above mentioned laws,
            particularly when you use the website of
            https://www.apollohospitals.com “Website” operated by AHEL for any
            information or services “Services”. The terms You or Your refer to
            you as the User registered or unregistered of the Website and/or
            Services and the terms We, Us and Our refer to AHEL. We collect Your
            Personal Information directly from You, from third-parties and
            automatically through the Our Website. This Personal Information,
            for instance, would relate to the type of device You are using, the
            time that You have logged on to Our Website, Your IP address and
            other Personal Information as listed in Clause 5 below. You may
            access the Personal Information shared by You with Us, in the manner
            given below. You can further choose to share additional Personal
            Information with Us and you can modify your personal data, by
            writing to Us on Our below mentioned email id. We keep in mind that
            the Personal Information shared by You is accessible to You. You can
            write to Us at the email id specified in Clause 15.
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;
