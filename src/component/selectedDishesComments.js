import React from "react";

const SelectedDishComments = ({ comments }) => (
  <div className="col-12 col-md-5 m-1">
    {comments ? (
      <div style={{ textAlign: "left" }}>
        <h2>Comments</h2>
        <div>
          {comments.map((comment) => (
            <ul style={{ padding: 0 }} key={comment.id}>
              <li style={{ listStyle: "none" }}>{comment.comment}</li>
              <li style={{ listStyle: "none" }}>
                --{comment.author} {comment.date}
              </li>
            </ul>
          ))}
        </div>
      </div>
    ) : null}
  </div>
);

export default SelectedDishComments;
