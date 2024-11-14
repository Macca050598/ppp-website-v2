import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved. <a href="https://mjweb.ltd">MJWeb Ltd.  </a>
        </p>
        <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-n-4 hover:text-n-1 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-n-4 hover:text-n-1 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
