export default function TableList() {
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
                            </tr>
                        )
                    )}
                    
                    </tbody>
                </table>
            </div>
        </>
    )
}