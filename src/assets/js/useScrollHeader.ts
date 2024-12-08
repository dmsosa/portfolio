
function onScroll() {
    var scrollBefore = 0;
    const header = document.getElementById("site-header");  

    //if scroll down, add class;
    //if scroll up, remove class;
    window.addEventListener("scroll", () => {
        const scrolled = Math.round(window.scrollY);
        if (scrolled > scrollBefore) {
            header?.classList.add("scrolled");
        } else if (scrolled < scrollBefore ) {
            header?.classList.remove("scrolled"); 
        }
        scrollBefore = scrolled;
    });


    
}
export default onScroll;


