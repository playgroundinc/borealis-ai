function blogModal() {
    const closeBtn = document.getElementById('close-cite');
    const openBtn = document.getElementById('open-cite');
    const modal = document.getElementById('modal');
    const container = document.querySelector('body');

    const closeModal = () => {
        modal.classList.add('hidden');
        container.classList.remove('overflow-hidden', 'bg-shade-black-400', 'bg-opacity-70');
    }

    const openModal = () => {
        modal.classList.remove('hidden');
        container.classList.add('overflow-hidden', 'bg-shade-black-400', 'bg-opacity-70');
    }

    closeBtn.addEventListener('click', closeModal);
    openBtn.addEventListener('click', openModal);
}

blogModal();