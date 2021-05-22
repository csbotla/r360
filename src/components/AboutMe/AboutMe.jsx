import React from "react";
import "./AboutMe.css";

export default function AboutMe({ name, links, img, info }) {
  return (
    <div>
      <div className="aboutme-container">
        <div className="col1">
          <div className="img-container">
            <img src={img} alt="" srcset="" />
          </div>
          <div className="name">{name}</div>
          <div className="info">{info}</div>
          <div>
            <a className="links" href={links[0]}>
              Twitter
            </a>
            <a className="links" href={links[1]}>
              Facebook
            </a>
          </div>
        </div>
        <div className="col2">
          <h2>Biography</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe
            neque ut, officia asperiores in fuga deleniti provident voluptate
            corporis ad itaque dolor vel, blanditiis nostrum? Molestias eaque
            consequatur, molestiae ab velit vel quia itaque incidunt alias
            voluptatum. Harum commodi eligendi totam, impedit eaque rerum
            accusantium magni maxime eius inventore, perspiciatis sequi. Optio
            dolore eum quam deserunt alias pariatur corporis neque mollitia
            dolores praesentium iste ea ipsam, rem, dolor, velit magnam
            repudiandae nulla omnis ducimus fugit. Impedit, provident excepturi.
            Explicabo a deserunt sit quo alias, eveniet, commodi voluptas dicta,
            quasi ab rem pariatur. Nesciunt nam, earum fugit expedita soluta
            itaque.
          </p>
        </div>
      </div>
    </div>
  );
}
