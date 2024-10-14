import "./style.css"


document.querySelector<HTMLButtonElement>("#copy")?.addEventListener("click", async () => {
    console.log("Button clicked in popup");

    const tabs = await browser.tabs.query({ active: true, currentWindow: true });

    if (tabs.length > 0) {
        const activeTabId = tabs[0].id;

        browser.tabs.sendMessage(activeTabId as number, { message: "Hello from popup" })
            .then(response => {
                console.log("Response from content script:", response);
            })
            .catch(error => {
                console.error("Error sending message to content script:", error);
            });
    }
});

