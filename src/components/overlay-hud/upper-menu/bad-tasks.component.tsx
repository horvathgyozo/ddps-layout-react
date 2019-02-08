import React from "react";

export const BadTasks = () => (
  <table className="ui inverted very compact small attached unstackable table">
    <thead>
      <tr>
        <th>#</th>
        <th>Source</th>
        <th>
          <i className="clock icon" />
        </th>
        <th>
          <i className="exchange icon" />
        </th>
        <th>
          <i className="weight icon" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>25/500</td>
        <td>SparkPi:90</td>
        <td>5 min</td>
        <td>25000 rec</td>
        <td>6 GB</td>
      </tr>
    </tbody>
  </table>
);
