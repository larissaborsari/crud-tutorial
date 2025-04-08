export default function TableList({ onOpen}) {
    {/* make table of sample data */}
    const tableData = [
        { id: 1, name: "John Doe", email:"johndoe@gmail.com", job: "Quality Control Specialist", rate: 100, status: true },
        { id: 2, name: "Mary Jane", email:"maryjane@gmail.com", job: "Desktop Support Technician", rate: 200, status: true },
        { id: 3, name: "James Bond", email:"jamesbond@gmail.com", job: "International Spy", rate: 400, status: false },
    ];

    return (
        <>
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
                    {tableData.map((item) => (
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
                                <button className="btn rounded-full btn-accent">Delete</button>
                            </td>
                        </tr>
                    ))}
        
                </tbody>
            </table>
            </div>
        </>
    )
}