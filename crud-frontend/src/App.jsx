import axios from "axios";
import './App.css'
import NavBar from './components/NavBar'
import  TableList  from './components/TableList'
import ModalForm from './components/ModalForm';
import { useState, useEffect } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [searchTerm, setSearchTerm] = useState("");
  const [clientData, setClientData] = useState(null);
  const [tableData, setTableData] = useState([]);
  
  const fetchClients = async () => {
        try {
          const response  = await axios.get('http://localhost:3000/api/client')
          setTableData(response.data); // Set the fetched data

        } catch (err) {
            setError(err.message);
        }
    };

  useEffect(() => {
    fetchClients();
  }, []);


  const handleOpen = (mode, client) => {
    console.log("handleOpen chamado:", mode, client);
      setClientData(client);
      setModalMode(mode);
      setIsOpen(true);
  };

  const handleClose = () => {
    console.log("handleClose chamado");
    setIsOpen(false);
};

  const handleSubmit = async (newClientData) => {
    if (modalMode === 'add') {
      try {
        const response = await axios.post('http://localhost:3000/api/client', newClientData);
        console.log('Client added:', response.data); // Log the response
        setTableData((prevData) => [...prevData, response.data]);
        } catch (error) {
            console.error('Error adding client:', error); // Log any errors
        }

    } else {
      console.log('Updating client with ID:', clientData.id); // Log the ID being updated
            try {
                const response = await axios.put(`http://localhost:3000/api/client/${clientData.id}`, newClientData);
                console.log('Client updated:', response.data);
                setTableData((prevData) =>
                  prevData.map((client) => (client.id === clientData.id ? response.data : client))
                );
                } catch (error) {
                console.error('Error updating client:', error); 
            }

    }
  }

  return (
    <>
    {/* ++ py-5 px-5 */}
      <div className="py-5 px-5 " data-theme="pastel">
          <NavBar onOpen={() => handleOpen('add')} onSearch={setSearchTerm}/>
          <TableList onOpen={(client) => handleOpen('edit', client)} searchTerm={searchTerm} tableData={tableData} setTableData={setTableData}/>
          <ModalForm isOpen={isOpen}
           onClose={handleClose}
          mode={modalMode}
          onSubmit={handleSubmit}
          clientData={clientData}
          />
      </div>
    </>
  )
}

export default App