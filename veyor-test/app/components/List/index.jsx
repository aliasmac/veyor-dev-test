import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { startCase } from 'lodash';

import Task from '../Task';

const titleColourMap = {
  target: 'pink',
  contacted: 'blue',
  firstMeeting: 'slate',
};

const List = ({ tasks, title }) => {
  return (
    <Droppable droppableId={title}>
      {(dropProvided) => (
        <div
          ref={dropProvided.innerRef}
          {...dropProvided.droppableProps}
          className="w-1/3 h-full mx-2 p-3"
        >
          <div
            className={`text-lg border-b-4 border-${titleColourMap[title]}-500 bg-task mb-5 drop-shadow-sm rounded-sm text-center p-5`}
          >
            {startCase(title)}
          </div>
          {tasks.map((task, idx) => (
            <Task
              key={idx}
              task={task}
              idx={idx}
              droppableProvided={dropProvided}
            />
          ))}
        </div>
      )}
    </Droppable>
  );
};

export default List;
