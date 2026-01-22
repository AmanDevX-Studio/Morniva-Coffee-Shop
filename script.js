

// <!-- 🔤 Typewriter Script -->
  document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('typed-text');
    const cursor = document.querySelector('.cursor');
    const words = ['Espresso', 'Cappuccino', 'Latte', 'Mocha', 'Flat White', 'Americano', 'Macchiato', 'Affogato'];

    let word = 0, char = 0, typing = true;

    function typeLoop() {
      if (typing) {
        if (char < words[word].length) {
          target.textContent += words[word][char++];
          setTimeout(typeLoop, 120);
        } else {
          typing = false;
          setTimeout(typeLoop, 1500);
        }
      } else {
        if (char > 0) {
          target.textContent = words[word].slice(0, --char);
          setTimeout(typeLoop, 60);
        } else {
          typing = true;
          word = (word + 1) % words.length;
          setTimeout(typeLoop, 300);
        }
      }
    }

    setInterval(() => cursor.classList.toggle('opacity-0'), 500);
    typeLoop();
  });
// start aad cart


document.addEventListener("DOMContentLoaded", function () {
  const allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    const actionRow = card.querySelector(".d-flex.justify-content-between.align-items-center");
    const originalPrice = actionRow.querySelector("span")?.textContent || "₹--";
    const addButton = actionRow.querySelector("button");

    // Skip if not found
    if (!addButton) return;

    addButton.addEventListener("click", function () {
      showToast("✅ Added to cart successfully");

      // Clear current buttons
      actionRow.innerHTML = "";

      // Create minus, plus, counter
      const minusBtn = document.createElement("button");
      minusBtn.textContent = "-";
      minusBtn.className = "btn btn-sm btn-outline-secondary";
      minusBtn.style.width = "32px";

      const plusBtn = document.createElement("button");
      plusBtn.textContent = "+";
      plusBtn.className = "btn btn-sm btn-outline-secondary";
      plusBtn.style.width = "32px";

      const countSpan = document.createElement("span");
      countSpan.textContent = "1";
      countSpan.className = "fw-semibold";

      const qtyWrapper = document.createElement("div");
      qtyWrapper.className = "d-flex align-items-center gap-2";
      qtyWrapper.appendChild(minusBtn);
      qtyWrapper.appendChild(countSpan);
      qtyWrapper.appendChild(plusBtn);
      actionRow.appendChild(qtyWrapper);

      // Quantity logic
      let count = 1;

      minusBtn.addEventListener("click", () => {
        if (count > 1) {
          count--;
          countSpan.textContent = count;
        } else {
          // Optional confirmation
          if (confirm("Remove item from cart?")) {
            actionRow.innerHTML = "";

            const price = document.createElement("span");
            price.className = "fw-semibold";
            price.textContent = originalPrice;

            const newAddBtn = document.createElement("button");
            newAddBtn.className = "btn btn-sm";
            newAddBtn.style.background = "#6f4e37";
            newAddBtn.style.color = "#fff";
            newAddBtn.style.border = "none";
            newAddBtn.textContent = "Add to Cart";

            actionRow.appendChild(price);
            actionRow.appendChild(newAddBtn);

            // Rebind the same logic
            newAddBtn.addEventListener("click", addButton.click);
          }
        }
      });

      plusBtn.addEventListener("click", () => {
        count++;
        countSpan.textContent = count;
      });
    });
  });

  // ✅ Toast Notification
  function showToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.backgroundColor = "#6f4e37";
    toast.style.color = "#fff";
    toast.style.padding = "10px 20px";
    toast.style.borderRadius = "30px";
    toast.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    toast.style.zIndex = "9999";
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.4s ease";

    document.body.appendChild(toast);
    setTimeout(() => (toast.style.opacity = "1"), 50);

    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 2000);
  }
});

// <!-- 🌙 Dark Mode Toggle -->
  // Toggle dark mode
  function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('darkIcon');
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-light');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  }

  // Smooth scroll to top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Show scroll-to-top icon only on scroll
  window.addEventListener('scroll', () => {
    const scrollBtn = document.getElementById("scrollUpBtn");
    if (window.scrollY > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
  