import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ to, label }) => (
  <Link
    to={to}
    className="block text-slate-700 hover:text-brand transition-colors duration-300"
  >
    {label}
  </Link>
);

const GlobalFooter = () => {
  return (
    <footer className="bg-slate-50 text-slate-700 mt-6">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-wrap justify-betweens">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
            <h4 className="font-bold text-lg mb-2">Company Info</h4>
            <FooterLink to="/about-us" label="About Us" />
            <FooterLink to="/" label="Privacy Policy" />
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
            <h4 className="font-bold text-lg mb-2">Support</h4>
            <FooterLink to="/" label="FAQs" />
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
            <h4 className="font-bold text-lg mb-2">Newsletter</h4>
            <p>Stay updated with our latest trends</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <p>Designed and styled by Vito Gugushvili</p>
          <p>
            &copy; {new Date().getFullYear()} Dvalidze inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
