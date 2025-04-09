import axios from 'axios';
import { useState, useEffect } from 'react';


export default function TableList({ onOpen, searchTerm, tableData, setTableData}) {
const [error, setError] = useState(null);

const filteredData = tableData.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.job.toLowerCase().includes(searchTerm.toLowerCase())
);

const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this client?");
    if (confirmDelete) {
        try {
            await axios.delete(`http://localhost:3000/api/client/${id}`); // API call to delete client
            setTableData((prevData) => prevData.filter(client => client.id !== id)); // Update state
        } catch (err) {
            setError(err.message); // Handle any errors
        }
    }
};

return (
    <>
        {error && <div className="alert alert-error">{error}</div>}
    <div className="overflow-x-auto mt-10">
        <table className="table">
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Job</th>
                <th>Rate</th>
                <th>Status</th>
                <th></th>
                <th></th>
            
            </tr>
            </thead>
            <tbody className="hover">
                {filteredData.map((item) => (
                    <tr key={item.id} className="hover">
                        <th>{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.job}</td>
                        <td>{item.rate}</td>
                        <td>
                            <button
                                className={`btn rounded-full w-20 ${item.status ? 'btn-primary' : 'btn-outline btn-primary'}`}>
                                {item.status ? 'Active' : 'Inactive'}
                            </button>
                        </td>
                        <td>
                            <button className="btn rounded-full btn-secondary " onClick={onOpen}>Update</button>
                        </td>
                        <td>
                            <button className="btn rounded-full btn-accent" onClick={() => {handleDelete(item.id)}}>Delete</button>
                        </td>
                    </tr>
                ))}
    
            </tbody>
        </table>
        </div>
    </>
)
}