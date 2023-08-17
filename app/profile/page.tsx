"use client";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectUsers } from "../../redux/slices/usersSlice";

import ProfileEditForm from "../../components/ui/ProfileEditForm";

const userId = 0;

const Profile = (): React.ReactNode => {
  const users = useSelector(selectUsers);
  const [isEdit, setIsEdit] = useState(false);

  const user = users[userId];

  const editHandler = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <>
      <h1>Profile</h1>
      {user !== undefined && !isEdit && (
        <>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <button onClick={editHandler}>Edit Profile</button>
        </>
      )}
      {user !== undefined && isEdit && (
        <ProfileEditForm user={user} editHandler={editHandler} />
      )}
    </>
  );
};

export default Profile;
