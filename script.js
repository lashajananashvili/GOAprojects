document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.getElementById("feedback-form")
    if (feedbackForm) {
      feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let f= document.getElementById("feedback-text");
        f.value=''
        alert("Thank you for your review")
      })
    }
  
    const contactForm = document.querySelector(".contact-form")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
        alert("Our contact team will write you back imedeatly")
      })
    }
  
    const subscribeButtons = document.querySelectorAll(".pricing-card .btn")
  
    subscribeButtons.forEach((subscribeBtn) => {
      let subscribe = false
  
      subscribeBtn.addEventListener("click", () => {
        if (subscribe) {
          subscribeBtn.innerText = "subscribed"
          subscribeBtn.style = "background-color:rgb(223, 221, 221); color:black;"
          subscribe = false
        } else {
          subscribeBtn.innerText = "Sign Up Now!"
          subscribeBtn.style = "background-color: blue;"
          subscribe = true
        }
      })
    })
  
    const emojiButtons = document.querySelectorAll(".emoji-button")
    if (emojiButtons.length > 0) {
      emojiButtons.forEach((button) => {
        button.addEventListener("click", function () {
          emojiButtons.forEach((btn) => btn.classList.remove("selected"))
          this.classList.add("selected")
        })
      })
    }
  })
  
  