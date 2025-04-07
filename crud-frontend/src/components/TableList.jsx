export default function TableList({ handleOpen }) {
    const clients = [
        {id: 1, name: "John Doe", email: "johndoe@email.com", job: "Developer", rate: "100", isActive: true},
        {id: 2, name: "Mary Jane", email: "maryjane@email.com", job: "Financial Analyst", rate: "87", isActive: true},
        {id: 3, name: "James Bond", email: "jamesbond@email.com", job: "Spy", rate: "400", isActive: false},
    ]
    return (
        <>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Job</th>
                        <th>Rate (USD/Hour)</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {clients.map((client) => 
                        (
                            <tr className="hover:bg-base-300">
                            <th>{client.id}</th>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>{client.job}</td>
                            <td>{client.rate}</td>
                            <td>
                                <button className={`btn rounded-full w-20 ${client.isActive ? `btn-secondary`: `btn-outline black`}`}>
                                    {client.isActive ? "Active" : "Inactive"}
                                </button>
                            </td>
                            <td>
                                <button onClick={() => handleOpen("edit")} className="btn rounded-full btn-primary">
                                    Update
                                </button>
                            </td>
                            <td>
                                <button className="btn rounded-full btn-accent">
                                    Delete
                                </button>
                            </td>
                            </tr>
                        )
                    )}
                    
                    </tbody>
                </table>
            </div>
        </>
    )
}