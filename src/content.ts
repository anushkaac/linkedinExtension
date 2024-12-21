// LinkedIn Automation Script
function initLinkedInConnector() {
    const floatingButton = document.createElement('button');
    floatingButton.textContent = 'Connect with All';
    floatingButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        padding: 10px 20px;
        background: #0a66c2;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
    `;

    document.body.appendChild(floatingButton);

    async function connectWithAll() {
        const connectButtons = Array.from(document.querySelectorAll('button'))
            .filter(button => button.textContent?.includes('Connect'));

        if (connectButtons.length === 0) {
            alert('No connection buttons found!');
            return;
        }

        floatingButton.disabled = true;
        floatingButton.textContent = 'Connecting...';

        for (const button of connectButtons) {
            button.click();
            await new Promise(resolve => setTimeout(resolve, 2000));
        }

        floatingButton.disabled = false;
        floatingButton.textContent = 'Connect with All';
        alert(`Sent ${connectButtons.length} connection requests!`);
    }

    floatingButton.addEventListener('click', connectWithAll);
}

// Initialize the connector
initLinkedInConnector();
