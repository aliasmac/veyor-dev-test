import { Draggable } from 'react-beautiful-dnd';
import Image from 'next/image';
import { TbWorld } from 'react-icons/tb';

import indexVenturesLogo from '../../assets/index-ventures-logo.png.png';

import { trimString } from '../../helpers';

const Task = ({ task, idx, droppableProvided }) => {
  const renderContacts = (contacts) => {
    return contacts.map((contact, idx) => {
      return (
        <div key={idx} className="flex mb-2">
          <Image
            className="w-6 h-6 rounded-full object-cover"
            src={contact.src}
            alt={'employee-image'}
            width={50}
            height={50}
          />
          <div className="text-gray-700 ml-2">{contact.name}</div>
        </div>
      );
    });
  };

  const renderTaskDetail = (property, data) => {
    return (
      <div className="flex mb-1">
        <div className="text-gray-400 w-1/3">{`${property}:`}</div>
        <div className="text-gray-700">{data}</div>
      </div>
    );
  };

  return (
    <Draggable key={task.id} draggableId={task.id} index={idx}>
      {(dragProvided) => (
        <div
          ref={dragProvided.innerRef}
          {...dragProvided.draggableProps}
          {...dragProvided.dragHandleProps}
          className="bg-task mb-2 h-[320px] drop-shadow-md rounded-md p-3"
        >
          <div className="flex border-b-2 border-gray-400 py-5 mb-4">
            <Image
              src={indexVenturesLogo}
              width={50}
              height={50}
              alt="index-ventrues-logo"
            />
            <div className="ml-5">
              <h1 className="leading-8 text-lg text-gray-700 font-semibold">
                {task.fund}
              </h1>
              <div>
                <TbWorld
                  size={20}
                  style={{ display: 'inline-block' }}
                  color={'grey'}
                />
                <span className="text-gray-700 inline-block ml-1 underline">
                  {task.website}
                </span>
              </div>
            </div>
          </div>
          <div>
            {renderTaskDetail('Contacts', renderContacts(task.contacts))}
            {renderTaskDetail('Last Activity', task.lastActivity)}
            {renderTaskDetail('Reminder', task.reminder)}
            {renderTaskDetail('Notes', trimString(task.notes, 23))}
          </div>
          {droppableProvided.placeholder}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
