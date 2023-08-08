'use client';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import List from './components/List';

import { kanbanStubs } from './stubs';

export default function Kanban() {
  const [tasks, setTasks] = useState(kanbanStubs);

  const handleOnDragEnd = ({ destination, source }) => {
    const movedTask = { ...tasks[source.droppableId][source.index] };
    tasks[source.droppableId].splice(source.index, 1);
    tasks[destination.droppableId].splice(destination.index, 0, movedTask);
  };

  return (
    <main className="min-h-screen min-w-screen">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="flex justify-between h-[700px] mt-[100px] py-[20px] mx-[200px] ">
          {Object.keys(tasks).map((type, idx) => (
            <List key={idx} tasks={tasks[type]} title={type} />
          ))}
        </div>
      </DragDropContext>
    </main>
  );
}
