const shareIcon = document.getElementById("share-icon");
const info = document.getElementById("info");
const toast = document.getElementById("toast");
const toastTwo = document.getElementById("toast-two");
const shareIconToast = document.getElementById("share-icon-toast");


let visibleToast = false;

shareIcon.addEventListener("click", () => {
    let width = screen.width;

    if (width >= 768) {
        if (!visibleToast) {
            toastTwo.style.display = "flex"
            visibleToast = true;
        } else {
            toastTwo.style.display = "none"
            visibleToast = false;
        }
    } else {
        info.style.display = "none"
        toast.style.display = "flex";
    }
   
       
})

shareIconToast.addEventListener("click", () => {
    let width = screen.width;
    if (width < 768) {
        toast.style.display = "none"
        info.style.display = "flex"; 
    } else {
        toastTwo.style.display = "none"
        info.style.display = "flex"; 
    }
      
})