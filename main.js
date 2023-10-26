const blockquote = document.querySelector("#quote");

blockquote.style.opacity = "0"
blockquote.style.transition = "opacity 1s"

const updateQuote = () => {
    $.get("https://api.kanye.rest/", ({ quote }) => fadeInText(blockquote, `"${quote}"`))
}

setInterval(updateQuote, 8000)

const fadeInText = (element, text) => {
    element.textContent = text
    requestAnimationFrame(() => element.style.opacity = "1")
    setTimeout(() => fadeOutText(element), 6000)
}

const fadeOutText = (element) => requestAnimationFrame(() => element.style.opacity = "0")

updateQuote()