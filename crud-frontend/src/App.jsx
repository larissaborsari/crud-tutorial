import { useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import NavBar from './components/NavBar'
import TableList from './components/TableList'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState(false);

  const handleIsOpen = (mode) => {
    setIsOpen(true);
  }

  const handleSubmit = () => {
    if(modalMode === 'add') {
      console.log("Modal Mode Add");
    } else {
      console.log("Modal Mode Edit");
    }
  }
  return (
    <>
    <html data-theme="retro">
      <div>
       <NavBar
         onOpen={() => handleIsOpen('add')} 
       />
       <TableList />
       <ModalForm
        isOpen={isOpen} 
        onSubmit={handleSubmit}
        onClose={() => setIsOpen(false)}
       />
      </div>
    </html>
    </>
  )
}

export default App
