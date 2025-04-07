export default function ModalForm ({isOpen, onClose, mode, onSubmit}) {
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal" open={isOpen}>
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <h3 className="font-bold text-lg">{mode ==="edit" ? "Edit Client" : "Add Client"}</h3>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                    <input type="search" className="grow" placeholder="Search" />
                </label>
                <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</button>
                <button className="btn btn-success">{mode ==="edit" ? "Save Changes" : "Add Client"}</button>
                </form>
            </div>
            </dialog>
        </>
 )}
  