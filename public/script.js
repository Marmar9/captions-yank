const key = 'y'


const keydown_listener = document.addEventListener('keydown', async (e) => {
    if (e.key === 'y') {
        const textContainer = document.querySelector('.player-timedtext-text-container')?.children[0]
        if (textContainer instanceof HTMLSpanElement) {
            try {
                await navigator.clipboard.writeText(textContainer.innerText);
                console.log('Text copied to clipboard:', textContainer.innerText);
            } catch (err) {
                console.error('Failed to copy text: ', textContainer.innerText);
            }
        } else {
            console.error("Childer is unexpectedly not what was expected ~_~");
        }
    }
});

// Will be used later

// browser.runtime.onMessage.addListener(async () => {
// 
// })
