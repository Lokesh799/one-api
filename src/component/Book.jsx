import React, { useEffect, } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookRequest } from "../thunk/getBook";

function Book(props) {
  const dispatch = useDispatch();
  const booksinformation = useSelector((state) => state.viewBook.viewbook);
  console.log(booksinformation)

  // const { id } = useParams();

  useEffect(() => {
    dispatch(bookRequest());
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
              <th scope="col">ID</th>
            </tr>
          </thead>
          <tbody>
            {
              booksinformation.map(book => (
                <tr>
                  <td key={book.id}>{book.name}</td>
                  <td >{book._id}</td>
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
export default Book
