import React from "react";

import Logo from "./Logo";

import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { aboutMenu, mainMenu, topupMenu } from "../lib/data";

const renderIcon = (icon) => {
  const i = icon.toLowerCase();

  switch (i) {
    case "youtube":
      return <FaYoutube />;
    case "instagram":
      return <FaInstagram />;
    case "tiktok":
      return <FaTiktok />;
    default:
      return null;
  }
};

const MenuItem = ({ header, links }) => {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <p className="font-bold uppercase">{header}</p>
      {links.map((link, index) => (
        <div key={index} className="tracking-wide">
          {link.label}
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="w-full px-4 md:px-32 bg-[#021c3d]">
      <div className="grid items-start grid-cols-1 gap-10 py-10 md:gap-16 md:grid-cols-2 md:py-16">
        <div className="flex items-center gap-2 text-2xl font-bold text-nowrap">
          <Logo />
          Cinema Online
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="grid grid-cols-2 md:col-span-2">
            <MenuItem header={mainMenu.header} links={mainMenu.links} />
            <MenuItem header={topupMenu.header} links={topupMenu.links} />
          </div>
          <div className="grid grid-cols-2 md:gap-2 md:grid-cols-1">
            <div className="flex flex-col gap-2 text-sm">
              <p className="font-bold uppercase">{aboutMenu.sosmed.header}</p>
              <div className="flex items-center gap-2">
                {aboutMenu.sosmed.links.map((link) => (
                  <div
                    key={link.label}
                    className="flex items-center justify-center w-10 h-10 text-lg rounded-full bg-white/5"
                  >
                    {renderIcon(link.label)}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <p className="font-bold uppercase">{aboutMenu.contact.header}</p>
              <span>{aboutMenu.contact.contact}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-4 text-xs tracking-wide border-t md:text-sm border-t-white/20">
        <p>© Cinema Online, 2024</p>
        <p>Kebijakan Privasi</p>
        <p>Terms of Service</p>
        <p>Hubungi Kami</p>
      </div>
    </div>
  );
};

export default Footer;
