export default function ModalContent({ onClose }) {
    return (
      <div className="modal" >
        <button onClick={onClose} 
        >Close</button>

        <div 
        >I'm a modal dialog</div>
      </div>
    );
  }
  