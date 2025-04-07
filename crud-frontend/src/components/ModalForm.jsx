export default function ModalForm ({isOpen, onClose, mode, onSubmit}) {
    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_2" className="modal" open={isOpen}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">{mode ==="edit" ? "Edit Client" : "Add Client"}</h3>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button className="btn btn-success">{mode ==="edit" ? "Save Changes" : "Add Client"}</button>
                <button>Cancel</button>
            </form>
            </dialog>
        </>
    )
}