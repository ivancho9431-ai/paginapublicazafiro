document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".footer-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button");
      const originalText = button.textContent;

      button.textContent = "¡Gracias!";
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form.reset();
      }, 1800);
    });
  }

  const zoneCards = document.querySelectorAll(".common-area-card");
  const modal = document.getElementById("zoneModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDots = document.getElementById("modalDots");
  const closeButton = document.querySelector(".modal-close");
  const prevButton = document.querySelector(".carousel-btn.prev");
  const nextButton = document.querySelector(".carousel-btn.next");

  let currentImages = [];
  let currentIndex = 0;

  function renderCarousel() {
    if (!currentImages.length) return;

    modalImage.src = currentImages[currentIndex];
    modalImage.alt = modalTitle.textContent;

    modalDots.innerHTML = "";
    currentImages.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = `modal-dot ${index === currentIndex ? "active" : ""}`;
      dot.setAttribute("aria-label", `Ver imagen ${index + 1}`);
      dot.addEventListener("click", () => {
        currentIndex = index;
        renderCarousel();
      });
      modalDots.appendChild(dot);
    });
  }

  function openModal(card) {
    const title = card.dataset.title || "Zona común";
    const images = (card.dataset.images || "").split(",").filter(Boolean);

    if (!images.length) return;

    modalTitle.textContent = title;
    currentImages = images;
    currentIndex = 0;
    renderCarousel();
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  }

  zoneCards.forEach((card) => {
    const open = () => openModal(card);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    renderCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    renderCarousel();
  });

  document.addEventListener("keydown", (event) => {
    if (modal.classList.contains("hidden")) return;
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % currentImages.length;
      renderCarousel();
    }
    if (event.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
      renderCarousel();
    }
  });
});
