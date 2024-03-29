import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGooglePay } from "@fortawesome/free-brands-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faApplePay } from "@fortawesome/free-brands-svg-icons";
import { faAmazonPay } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-black text-white p-5 sm:p-16">
      <div className="flex flex-col sm:flex-row justify-between my-5">
        <form className="flex flex-col justify-around px-2" action="">
          <h2 className="font-bold py-5 sm:py-2">BE THE FIRST TO KNOW</h2>
          <p className="pb-2">Sing up for updates from metta muse</p>
          <div className="row flex">
            <input
              className="text-black min-w-10 py-2 px-4 mr-2"
              type="text"
              placeholder="..."
            />
            <button className="border rounded py-2 px-4">SUBSCRIBE</button>
          </div>
        </form>
        <div className="contact px-2 py-5 sm:py-2">
          <h2 className="font-bold pb-2 ">CONTACT US</h2>
          <p className="py-1">+44 221 133 5360</p>
          <p className="mb-4">customercare@mettamuse.com</p>
          <h2 className="font-bold py-5 sm:py-2">CURRENCY</h2>
          <div className="flex items-center pb-2">
            <img className="img-fulid" src="US.png" alt="US" />
            <h3 className="font-bold py-2 mx-2">+ USD</h3>
          </div>
          <p>
            Transaction will be completeted in Euros and a currency reference is
            availabe on hover.
          </p>
        </div>
      </div>
      <hr className="my-5 sm:my-10" />

      <div className="flex justify-evenly flex-col sm:flex-row">
        <div className="col-1 py-5 sm:py-2">
          <h1 className="text-xl font-bold pb-2">metta muse</h1>
          <ul className="list-none">
            <li className="py-1">About Us</li>
            <li className="py-1">Stories</li>
            <li className="py-1">Artisans</li>
            <li className="py-1">Boutiques</li>
            <li className="py-1">Coutact Us</li>
            <li className="py-1">EU Compliances Docs</li>
          </ul>
        </div>
        <div className="col-2 py-5 sm:py-2">
          <h1 className="text-xl font-bold pb-2">QUICK LINKS</h1>
          <ul className="list-none">
            <li className="py-1">Orders & Shipping</li>
            <li className="py-1">Join/Login as a Seller</li>
            <li className="py-1">Payment & Pricing</li>
            <li className="py-1">Return & Refunds</li>
            <li className="py-1">FAQs</li>
            <li className="py-1">Privacy Policy</li>
            <li className="py-1">Terms & Conditions</li>
          </ul>
        </div>
        <div className="col-3 py-5 sm:py-2">
          <h1 className="text-xl font-bold pb-2">FOLLOW US</h1>
          <div className="flex">
            <FontAwesomeIcon
              className="mx-2 w-8"
              icon={faInstagram}
              size="2xl"
            />
            <FontAwesomeIcon
              className="mx-2 w-8"
              icon={faLinkedin}
              size="2xl"
            />
          </div>
          <h2 className="text-xl py-2 mt-10">metta muse ACCEPTS</h2>
          <div className="row flex flex-wrap">
            <FontAwesomeIcon
              className="border rounded py-1 px-4 m-2"
              icon={faGooglePay}
              size="2xl"
            />
            <FontAwesomeIcon
              className="border rounded py-1 px-4 m-2"
              icon={faPaypal}
              size="2xl"
            />
            <FontAwesomeIcon
              className="border rounded py-1 px-4 m-2"
              icon={faApplePay}
              size="2xl"
            />
            <FontAwesomeIcon
              className="border rounded py-1 px-4 m-2"
              icon={faAmazonPay}
              size="2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
