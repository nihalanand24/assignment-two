const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelectorAll('.close-modal');

showModal.forEach((btn, index) => {
    const modal = document.querySelector(`#modal-${index + 1}`);
    btn.addEventListener('click', function() {
        handleShow(modal);
    });
});

closeModal.forEach((icon, index) => {
    const modal = document.querySelector(`#modal-${index + 1}`);
    icon.addEventListener('click', function() {
        handleClose(modal);
    });
});

function handleShow(modal){
    modal.style.display = 'block';
}

function handleClose(modal){
    modal.style.display = 'none';
}

