import React from "react";

export const TaskStatistics = () => (
  <div className="ui inverted left aligned attached segment">
    <div className="ui inverted mini horizontal statistic">
      <div className="value">208</div>
      <div className="label">Total tasks</div>
    </div>
    <div className="ui inverted fitted divider" />
    <div className="ui inverted mini horizontal statistic">
      <div className="value">58</div>
      <div className="label">Completed</div>
    </div>
    <div className="ui inverted fitted divider" />
    <div className="ui inverted mini horizontal statistic">
      <div className="value">10</div>
      <div className="label">Failed</div>
    </div>
    <div className="ui inverted fitted divider" />
    <div className="ui inverted mini horizontal statistic">
      <div className="value">2</div>
      <div className="label">Pending</div>
    </div>
  </div>
);
