export default function ModalForm ({isOpen, onClose, mode, onSubmit}) {
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal" open={isOpen}>
            <div className="modal-box">
            <div className="modal-action">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <h3 className="font-bold text-lg">{mode ==="edit" ? "Edit Client" : "Add Client"}</h3>
                <label className="input my-4">
                    Name
                    <input type="text" className="grow " />
                </label>
                <label className="input my-4">
                    Email
                    <input type="text" className="grow " />
                </label>
                <label className="input my-4">
                    Job
                    <input type="text" className="grow " />
                </label>

                <div className="flex mb-4 justify-between">
                <label className="input  my-4">
                    Rate
                    <input type="number" className="grow " />
                </label>
                </div>

                <select defaultValue="" className="select mb-4">
                    <option>Active</option>
                    <option>Inactive</option>
                </select>
                <div>

                    <button className="btn btn-success">{mode ==="edit" ? "Save Changes" : "Add Client"}</button>
                    <button className="btn">Close</button>
                </div>
                <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</button>
                </form>
            </div>
            </div>
            </dialog>
        </>
 )}
  