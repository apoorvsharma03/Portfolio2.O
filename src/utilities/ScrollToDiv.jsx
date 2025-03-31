function ScrollToDiv(targetDivId) {
    const targetDiv = document.getElementById(targetDivId)
    const navigationMenuHeight = document.getElementById('NAVIGATION MENU').offsetHeight
    if (targetDiv) {
        const divPosition = targetDiv.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: divPosition - navigationMenuHeight, 
            behavior: 'smooth',
        })
    }
}

export default ScrollToDiv;