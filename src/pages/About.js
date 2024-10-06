import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>This is About Page</h2>
      <p>
        <Link to="/" className="underline">
          Go to Dashboard
        </Link>
      </p>
    </div>
  );
};

export default About;
