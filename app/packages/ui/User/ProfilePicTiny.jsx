import React from 'react';

const ProfilePicTiny = ({
  profilePicture,
  username = null
}) => {
  return (
    <>
      {profilePicture ? (
        <div className="flex flex-row">
          <img
            src={profilePicture}
            alt="Profile picture"
            className="w-8 h-8 rounded-md"
          />

          <div className="ml-2 font-normal text-sm flex items-center justify-content text-primary">
            {username}
          </div>

        </div>

      ) : (
        <div className="w-8 h-8 rounded-md bg-brand-disabled"></div>
      )}
    </>
  );
};

export default ProfilePicTiny;
