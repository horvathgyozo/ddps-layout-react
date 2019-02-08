import React from "react";
import { TaskStatistics } from "./upper-menu/task-statistics.component";
import { UpperMenuSection } from "./upper-menu/upper-menu-section.component";
import { BadTasks } from "./upper-menu/bad-tasks.component";
import { BadExecutors } from "./upper-menu/bad-executors.component";

export const UpperMenu = () => (
  <div className="fixed upper-menu">
    <UpperMenuSection name="Task statistics">
      <TaskStatistics />
    </UpperMenuSection>

    <UpperMenuSection name="Bad tasks">
      <BadTasks />
    </UpperMenuSection>

    <UpperMenuSection name="Bad executors">
      <BadExecutors />
    </UpperMenuSection>
  </div>
);
