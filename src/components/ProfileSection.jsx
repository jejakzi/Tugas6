import React from "react";
import {
  IoCallOutline,
  IoLocationOutline,
  IoBalloonOutline,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { formatDate } from "../lib/formater";
import { API_IMG } from "../lib/constant";

const ProfileSection = ({ user }) => {
  return (
    <div className="flex flex-col items-start gap-8 md:flex-row">
      <div className="w-56 mx-auto md:mx-0">
        <img
          src={`${API_IMG}/240?u=${user?.email}`}
          alt="avatar"
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-4 md:justify-start">
          <div className="flex flex-col w-8 h-6 overflow-hidden rounded">
            <span className="w-full h-full bg-red-500"></span>
            <span className="w-full h-full bg-white"></span>
          </div>
          <p className="text-4xl font-bold text-center md:text-left">
            {user?.username}{" "}
            <span className="text-xl font-normal text-gray-400">
              - {user?.name}
            </span>
          </p>
        </div>
        <p className="font-light tracking-wide text-center text-gray-400 md:text-left">
          {user?.email}
        </p>
        <p className="text-sm font-light tracking-wide text-center text-gray-400 md:text-left">
          {user?.bio}
        </p>
        <h3 className="mt-4 text-lg font-bold text-center md:text-left">
          Detail
        </h3>
        <div className="flex items-center justify-center gap-2 md:justify-start">
          <IoCallOutline className="text-lg" />
          <span className="text-sm font-light tracking-wide text-gray-400">
            {user?.phoneNumber}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 md:justify-start">
          <IoLocationOutline className="text-lg" />
          <span className="text-sm font-light tracking-wide text-gray-400">
            {user?.address}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 md:justify-start">
          <IoBalloonOutline className="text-lg" />
          <span className="text-sm font-light tracking-wide text-gray-400">
            {formatDate(user?.dateOfBirth)}
          </span>
        </div>
        <h3 className="mt-4 text-lg font-bold text-center md:text-left">
          Sosial Media
        </h3>
        <div className="flex items-center justify-center gap-4 md:justify-start">
          <div className="flex items-center justify-center w-12 h-12 p-2 rounded-full bg-white/10">
            <IoLogoInstagram />
          </div>
          <div className="flex items-center justify-center w-12 h-12 p-2 rounded-full bg-white/10">
            <IoLogoWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
