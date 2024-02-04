import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="f-content-f">
              <a href="">
                <h2>Clothes</h2>
              </a>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores, ad. Iure nisi asperiores laudantium suscipit
                quisquam tempore quidem minima iusto.
              </p>
            </div>
            <div className="f-content">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Get Started</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Protfolio</a>
                </li>
                <li>
                  <a href="#">Carporate</a>
                </li>
              </ul>
            </div>
            <div className="f-content">
              <h3>Others</h3>
              <ul>
                <li>
                  <a href="#">Terms of Serice</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Something goes here</a>
                </li>
                <li>
                  <a href="#">Protfolio</a>
                </li>
                <li>
                  <a href="#">Carporate</a>
                </li>
              </ul>
            </div>
            <div className="f-content">
              <h3>Following</h3>
              <p>Follow us on Social Media</p>
              <a href="https://www.facebook.com/shunnoshoilii" target="_blank">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a href="https://www.youtube.com/@Moni-vo3hc" target="_blank">
                <i className="fa-brands fa-square-instagram mx-3"></i>
              </a>
              <a
                href="https://www.facebook.com/groups/1274264626274150"
                target="_blank"
              >
                <i className="fa-brands fa-square-twitter"></i>
              </a>
              <a href="https://github.com/Mostafiz-riya" target="_blank">
                <i className="fa-brands fa-square-github mx-3"></i>
              </a>
            </div>
          </div>
          <div className="copy-right text-center">
            <span>
              All Right reserve by <i className="fa-regular fa-heart"></i>
              Samanta Mostafiz
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
