const shareIcon = document.getElementById("share-icon");
const info = document.getElementById("info");
const toast = document.getElementById("toast")
const shareIconToast = document.getElementById("share-icon-toast");



shareIcon.addEventListener("click", () => {
    info.style.display = "none"
    toast.style.display = "flex";   
})

shareIconToast.addEventListener("click", () => {
    toast.style.display = "none"
    info.style.display = "flex";   
})