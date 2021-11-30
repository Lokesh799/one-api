import React, { useEffect, } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { characterRequest } from "../thunk/getBook";

function Character(props) {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.viewCharacter.viewcharacter);
  console.log(character)

  const { id } = useParams();

  useEffect(() => {
    dispatch(characterRequest(id));
  }, []);

  return (
    <>
      <div>
        <h1>Books Detail</h1>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {
              character.map(characters => (
                <tr>
                  <td key={characters.id}>{characters.name}</td>
                  <td >{characters.gender}</td>
                  <td>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Character