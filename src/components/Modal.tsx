import React from 'react';

interface ModalProps {
  title: string;
  content: React.ReactNode;
  onConfirm?: () => void; // Optional confirm handler
  onClose: () => void; // Close handler
  isOpen: boolean;
  showConfirmButton?: boolean; // Whether to show confirm button
}

const Modal: React.FC<ModalProps> = ({ title, content, onConfirm, onClose, isOpen, showConfirmButton = false }) => {
  if (!isOpen) return null;

  return (
<div className="modal">
  <div className="modal-content">
    <div className="modal-header">
      <h2>{title}</h2>
      <button className="close-modal-button" onClick={onClose}>
        Close
      </button>
    </div>
    <div className="book-text">{content}</div>
    {showConfirmButton && onConfirm && (
      <div className="flex justify-end space-x-4">
        <button className="close-modal-button" onClick={onClose}>
          Cancel
        </button>
        <button className="close-modal-button" onClick={onConfirm}>
          Confirm
        </button>
      </div>
    )}
  </div>
</div>

  );
};

export default Modal;
