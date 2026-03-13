function copyId(id, btn) {
    navigator.clipboard.writeText(id).then(() => {
        btn.textContent = 'Copied';
        btn.classList.add('done');
        setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('done'); }, 1500);
    });
}