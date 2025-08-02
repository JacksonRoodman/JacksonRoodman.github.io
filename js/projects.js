function openPopup(popupId) {
  const popup = document.getElementById(popupId)
  if (popup) {
    popup.style.display = "flex"
    document.body.style.overflow = "hidden" 
  }
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId)
  if (popup) {
    popup.style.display = "none"
    document.body.style.overflow = "auto"
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const openPopups = document.querySelectorAll('.popup-overlay[style*="flex"]')
    openPopups.forEach((popup) => {
      popup.style.display = "none"
    })
    document.body.style.overflow = "auto"
  }
})
