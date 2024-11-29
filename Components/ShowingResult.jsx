import React, { memo } from "react";

const ShowingResult = ({ page, limit, totalUser, length }) => {
  return (
    <div>
      {" "}
      <div className="showing-user">
        <p>
          Showing {1 + (page) * limit} - {length + (page) * limit} of{" "}
          {totalUser} results
        </p>
      </div>
    </div>
  );
};

export default memo(ShowingResult);
