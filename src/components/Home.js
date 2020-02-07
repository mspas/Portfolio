import React from "react";
import "../styles/app.sass";
import "../styles/home.sass";

function Home() {
  return (
    <div className="home-section">
      <div className="angle-divider-wrap home-desc-divider">
        <div className="home-desc-wrap">
          <h3 className="home-desc">
            Hi, I'm Marcin Spasiński - computer science student living in
            Wrocław. Frontend dev wannabe, simply because making nice looking
            things is fun. Not afraid of some backend work also.
          </h3>
        </div>
      </div>
      <div className="angle-divider-wrap home-history-divider">
        <div className="container">
          <h2 className="home-history">also big history nerd...</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
