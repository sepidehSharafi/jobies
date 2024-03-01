import React from "react";

 const Profile = () => {
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
