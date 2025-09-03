import React, { useState } from 'react';
import ProfileForm from '../components/Dashboard/Profile/ProfileForm';
import { useForm } from 'react-hook-form';
import ProfileButton from '../components/Dashboard/Profile/ProfileButton';

const Profile = () => {
    const [isEditing,setIsEditing] = useState(false)
    const {register,formState:{errors}} = useForm()
    return (
        
        <div className='card w-full max-w-2xl mx-auto bg-base-100 shadow-xl'>
            <div className='card-body'>
                <h2 className='card-title text-2xl'> my profile page</h2>
                <form action="">
                    <ProfileForm register={register} errors={errors} isEditing={isEditing} ></ProfileForm>
                    <ProfileButton isEditing={isEditing} setIsEditing={setIsEditing}></ProfileButton>
                </form>
            </div>
        </div>
    );
};

export default Profile;