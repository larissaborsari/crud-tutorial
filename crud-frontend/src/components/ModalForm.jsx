import { useState } from "react";

export default function ModalForm({ isOpen, onClose, mode, onSubmit }) {
    const [rate, setRate] = useState('');
    const [name, setName] = useState(''); // State for Name
    const [email, setEmail] = useState(''); // State for Email
    const [job, setJob] = useState(''); // State for Job
    const [status, setStatus] = useState(''); // State for Status

    return (
        <>  

            <dialog id="my_modal_3" className="modal"  open={isOpen}>
            <div className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Edit Client' : 'Client Details'}</h3>
                
                <form onSubmit={(e) => { e.preventDefault(); onSubmit();}}>

                    <label className="input flex items-center my-4 gap-2 w-full">
                    Name 
                    <input type="text" className="grow"  value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label className="input flex items-center my-4 gap-2 w-full">
                    Email 
                    <input type="text" className="grow"  value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label className="input flex items-center my-4 gap-2 w-full">
                    Job 
                    <input type="text" className="grow"  value={job} onChange={(e) => setJob(e.target.value)}/>
                    </label>

                    {/* ++ made this anumber */}
                    <div className="flex mb-4 justify-between">
                        <label className="input flex mr-4 items-center gap-2">
                        Rate
                        <input type="number" className="grow"  value={rate} onChange={(e) => setRate(e.target.value)}/>
                        </label>

                        <select className="select w-full max-w-xs" onChange={(e) => setStatus(e.target.value)}>
                        <option>Inactive</option>
                        <option>Active</option>
                        </select>

                    </div>

                    <button type="submit" className=" btn btn-success">{mode === 'edit' ? 'Save Changes' : 'Add Client'}</button>
                </form>
                
            </div>
            </dialog>
        </>
    );
}