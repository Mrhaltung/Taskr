import React, { useEffect, useState } from "react";
import { getAllUsers } from "../api/AuthRequest";
import { useSelector } from "react-redux";
import User from "./User";

export default function FollowerCard() {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUsers();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  return (
    <div className="followerCard">
      <h3>People you may know</h3>

      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} key={id} />;
        }
        return null;
      })}
    </div>
  );
}
