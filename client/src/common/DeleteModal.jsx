import React from 'react';

const DeleteModal = ({ isOpen, onClose, onDelete, itemToDelete }) => {
  const {id,name}=itemToDelete||""
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-8 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()} 
      >
       <div> <h2 className="text-lg font-bold">Are you sure you want to Delete ? <span className='text-red-400'>{name}</span></h2>
        <p className="mt-2 text-sm text-gray-500">
          Doing that could cause some issues elsewhere. Are you 100% sure it's OK?
        </p></div>
        <div className="mt-4 flex gap-2 ml-auto">
          <button
            type="button"
            className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
            onClick={onDelete}
          >
            Yes, I'm sure
          </button>
          <button
            type="button"
            className="rounded bg-gray-300 px-4 py-2 text-sm font-medium text-red-600"
            onClick={onClose}
          >
            Cancelled
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
