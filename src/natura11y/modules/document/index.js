import './_style.scss';

//////////////////////////////////////////////
// Document
//////////////////////////////////////////////

export default function initDocument() {

    const copyrightYear = document.querySelector('.copyright-year');

    if (copyrightYear) {
        const currentYear = new Date().getFullYear();
        copyrightYear.innerHTML = currentYear;
    }
}