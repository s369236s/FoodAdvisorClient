import React from "react";

export const IntroFeatuer: React.FC = ({}) => {
  return (
    <div className="intro-featuer-container">
      <div className="featuer-grid gridish featuer-grid-1">
        <img src="media/intro1.png" alt="" />
        <article>
          <h2>尋找最佳外送餐點</h2>
          <h3>避開評價不好的餐廳，精美餐點吃下肚</h3>
        </article>
      </div>
      <div className="featuer-grid gridish featuer-grid-2">
        <img src="media/intro2.png" alt="" />
        <article>
          <h2>尋找最佳外送餐點</h2>
          <h3>避開評價不好的餐廳，精美餐點吃下肚</h3>
        </article>
      </div>
    </div>
  );
};
