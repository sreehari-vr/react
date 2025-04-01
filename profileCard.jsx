import React from "react";

function ProfileCard({ users }) {
  return (
    <div className="profile-container">
      {users.map((user) => (
        <div key={user.id} className="profile-card">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default ProfileCard;
