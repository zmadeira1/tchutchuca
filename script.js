let highestZ = 1;

class Paper {
  holdingPaper = false;
  mouseTouchX = 0;
  mouseTouchY = 0;
  currentPaperX = 0;
  currentPaperY = 0;
  rotation = Math.random() * 30 - 15;

  init(paper) {
    document.addEventListener('mousemove', (e) => {
      if (this.holdingPaper) {
        this.currentPaperX += e.movementX;
        this.currentPaperY += e.movementY;
        paper.style.transform = `translate(${this.currentPaperX}px, ${this.currentPaperY}px) rotate(${this.rotation}deg)`;
      }
    });

    paper.addEventListener('mousedown', () => {
      this.holdingPaper = true;
      paper.style.zIndex = highestZ++;
    });

    window.addEventListener('mouseup', () => {
      this.holdingPaper = false;
    });
  }
}

document.querySelectorAll('.paper').forEach(paper => {
  new Paper().init(paper);
});

// --- bloco já existente de arrastar papéis (se houver) ---

// Carrossel automático
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const slides = Array.from(slider.children);
  const slideWidth = slider.clientWidth;     // largura visível do container
  let currentIndex = 0;
  const intervalMs = 5000;                   // intervalo em ms

  setInterval(() => {
    // próximo índice (loop)
    currentIndex = (currentIndex + 1) % slides.length;

    // desloca apenas o scroll interno do .slider
    slider.scrollTo({
      left: slideWidth * currentIndex,
      behavior: 'smooth'
    });
  }, intervalMs);
});
