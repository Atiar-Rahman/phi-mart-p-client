import React from "react";

const ProfileButton = ({ isEditing, setIsEditing, isSubmitting }) => {
  return (
    <div className="flex justify-center pt-4">
      {isEditing ? (
        <div className="space-x-4">
          <button type="submit" className="btn btn-primary px-8" disabled={isSubmitting}>
            {
            isSubmitting ? "Saving":"Save changes"
            }
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="btn btn-outline"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="btn btn-primary px-8"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default ProfileButton;
