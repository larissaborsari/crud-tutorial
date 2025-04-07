import { useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import NavBar from './components/NavBar'
import TableList from './components/TableList'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true);
};

const handleSubmit = () => {
    if (modalMode === 'add') {
        // Handle add item
    } else {
        // Handle edit item
    }
    setIsOpen(false);
};

  return (
    <>
    <html data-theme="retro">
      <div>
      <NavBar 
        onOpen={() => handleOpen('add')}
      />
        <TableList 
          handleOpen={() => handleOpen('edit')}
        />
        <ModalForm 
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          mode={modalMode}
          onSubmit={handleSubmit}
        />
      </div>
    </html>
    </>
  )
}

export default App
