function ScrollToDiv(targetDivId) {
    const targetDiv = document.getElementById(targetDivId)
    if (targetDiv) {
        const navbarHeight = document.getElementById('NAVBAR').offsetHeight;
        const divPosition = targetDiv.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: divPosition, 
            behavior: 'smooth',
        })
    }
}

export default ScrollToDiv;