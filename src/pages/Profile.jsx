import React, { useEffect } from "react";
import ProfileSection from "../components/ProfileSection";
import { useAuth } from "../context/AuthProvider";

const Profile = () => {
  const { user } = useAuth();

  useEffect(() => {
    document.title = "My Profile - Cinema Online";
  }, []);

  return (
    <div className="px-4 py-10 md:px-32 mt-36">
      <h2 className="mb-8 text-2xl font-bold tracking-wide text-center md:text-left">
        Detail Profil
      </h2>
      <ProfileSection user={user} />
    </div>
  );
};

export default Profile;
