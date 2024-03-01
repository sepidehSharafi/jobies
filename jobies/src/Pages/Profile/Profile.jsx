import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

 const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const localUser = JSON.parse(localStorage.getItem("userAuth"));
  return (
    <div>
      <h2>{localUser.firstname}</h2>
      <p>{localUser.lastname}</p>
      <p>{localUser.username}</p>
      <p>{localUser.email}</p>
    </div>
  );
};
export default Profile;
