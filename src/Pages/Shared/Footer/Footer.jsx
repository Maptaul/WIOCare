import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer w-11/12 mx-auto  p-10">
        <aside>
          <img className="w-40" src="/src/assets/logwo.png" alt="" />
          <p className="text-2xl font-bold">WIO Care</p>
          <p>Providing reliable Heath Services 2023</p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className=" footer-center bg-black text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved WIO Care
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
