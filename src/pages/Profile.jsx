import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ProfileForm from "../components/Dashboard/Profile/ProfileForm";
import ProfileButton from "../components/Dashboard/Profile/ProfileButton";
import PasswordChangeForm from "../components/Dashboard/Profile/PasswordChangeForm";
import useAuthContext from "../hooks/useAuthContext";
import Error from "../components/Error";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors,isSubmitting },
  } = useForm();

  const { user, updateUserProfile,changePassword,errorMes } = useAuthContext();

  useEffect(() => {
    if (user) {
      Object.keys(user).forEach((key) => setValue(key, user[key]));
    }
  }, [user, setValue]);

  const onSubmit = async (data) => {
    try {
        // profile update
      const profilePayload = {
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        phone_number: data.phone_number,
      };
      await updateUserProfile(profilePayload);
    //   password change
      if(data.current_password && data.new_password){
        await changePassword({
            current_password:data.current_password,
            new_password:data.new_password
        })
      }
      console.log('password channge success ')
      console.log("Profile updated successfully");
    } catch (err) {
      console.error(
        "Profile update failed:",
        err.response?.data || err.message
      );
    }
  };

  return (
    <div className="card w-full max-w-2xl mx-auto bg-base-100 shadow-xl">
        {
            errorMes && <Error error={errorMes}></Error>
        }
      <div className="card-body">
        <h2 className="card-title text-2xl">My Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProfileForm
            register={register}
            errors={errors}
            isEditing={isEditing}
          />
          <PasswordChangeForm
            register={register}
            errors={errors}
            isEditing={isEditing}
            watch={watch}
          />
          <ProfileButton isEditing={isEditing} setIsEditing={setIsEditing}  isSubmitting={isSubmitting}/>
        </form>
      </div>
    </div>
  );
};

export default Profile;
