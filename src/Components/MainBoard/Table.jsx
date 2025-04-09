import React from "react";

const Table = () => {
  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Items</th>
          <th>Current Bid</th>
          <th>Time Left</th>
          <th>Bid Now</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold"></div>
              </div>
            </div>
          </td>
          <td></td>
          <td>2 Days left</td>
          <th>
            <button className="btn btn-ghost btn-xs">Love</button>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
