import { useState } from "react"

export default function ModalForm ({isOpen, onClose, mode, onSubmit}) {

    const [rate, setRate] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const [status, setStatus] = useState(false);

    const handleStatusChange = (e) => {
        setStatus(e.target.value === 'Active') //SetStatus as boolean
    }

    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal" open={isOpen}>
            <div className="modal-box">
            <div className="modal-action">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <h3 className="font-bold text-lg">{mode ==="edit" ? "Edit Client" : "Add Client"}</h3>
                <label className="input my-4 w-full">
                    Name
                    <input type="text" className="grow" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label className="input my-4 w-full">
                    Email
                    <input type="text" className="grow " value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label className="input my-4 w-full">
                    Job
                    <input type="text" className="grow " value={job} onChange={(e) => setJob(e.target.value)} />
                </label>

                <div className="flex my-4">
                    <label className="input mr-4">
                        Rate
                        <input type="number" className="grow" value={rate} onChange={(e) => setRate(e.target.value)}/>
                    </label>
                    <select value={status ? 'Active' : 'Inactive'} defaultValue="" className="select mb-4">
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>

                <div className="flex my-4">
                    <button className="btn btn-success mr-4">{mode ==="edit" ? "Save Changes" : "Add Client"}</button>
                    <button className="btn">Close</button>
                </div>
                <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</button>
                </form>
            </div>
            </div>
            </dialog>
        </>
 )}
  