import React from "react";
import { useUser } from "../context/UserContext";
import "./profile.css";

const Profile = () => {
  const { user } = useUser();

  return (
    <div className="profile">
      <img className="img" src="#" alt="user" />
      <h2>My Profile</h2>
      <p><strong>Username:</strong> {user?.username || "Guest"}</p>
      <p><strong>Email:</strong> {user?.email || "Not provided"}</p>
      <p><strong>Phone:</strong> {user?.phone || "Not provided"}</p>
    </div>
  );
};

export default Profile;
