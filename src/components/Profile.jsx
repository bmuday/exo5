import React from "react";

const Profile = ({ shownProfile }) => {
  const { jobTitle, name, age, description } = shownProfile;
  return (
    <div>
      <h2>{jobTitle}</h2>
      <button>{name}</button>
      <button>{age}</button>
      <p>{description}</p>
    </div>
  );
};

export default Profile;
