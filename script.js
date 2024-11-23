document.addEventListener('DOMContentLoaded', () => {
    // Helper function to show notification
    function showNotification(message, duration = 3000) {
        // Create a notification container
        const notification = document.createElement('div');
        notification.textContent = message;

        // Styling for the notification
        notification.style.position = 'fixed';
        notification.style.top = '50%';
        notification.style.left = '50%';
        notification.style.transform = 'translate(-50%, -50%)'; // Center the notification
        notification.style.backgroundColor = 'rgba(30, 30, 40, 0.8)'; // Semi-transparent nightshade black
        notification.style.color = 'rgba(255, 255, 255, 0.9)'; // Soft white for text
        notification.style.padding = '20px 40px';
        notification.style.borderRadius = '12px';
        notification.style.boxShadow = '0 0 15px rgba(0, 191, 255, 0.8), 0 0 25px rgba(0, 191, 255, 0.6)';
        notification.style.border = '2px solid rgba(0, 191, 255, 0.9)'; // Blue glowing border
        notification.style.zIndex = '1000';
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-out';
        notification.style.fontSize = '1.2em'; // Slightly larger text
        notification.style.fontFamily = 'Fira Code, monospace'; // Consistent with site font
        notification.style.textAlign = 'center'; // Center-align the text

        // Append the notification to the body
        document.body.appendChild(notification);

        // Fade in and pop animation
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translate(-50%, -50%) scale(1.05)';
        }, 50);

        // Automatically remove the notification after the specified duration
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translate(-50%, -50%) scale(1)';
            setTimeout(() => {
                notification.remove();
            }, 300); // Match this delay with the fade-out transition time
        }, duration); // Customizable display time
    }

    // 📡 button logic
    const wifiButton = document.getElementById('wifiButton');

    if (wifiButton) {
        wifiButton.addEventListener('click', () => {
            // First notification: "Attempting handshake..." for 1500ms
            showNotification('Attempting handshake...', 1500);

            // Second notification: "Introduction: Crawling..." after 7 seconds, for 1500ms
            setTimeout(() => {
                showNotification('Introduction: Crawling...', 1500);
            }, 7000);

            // Third notification: "Network information captured." after an additional 4 seconds, for 1500ms
            setTimeout(() => {
                showNotification('Network information captured.', 1500);
            }, 11000); // 7 seconds + 4 seconds
        });
    } else {
        console.warn('WiFi button not found on this page.');
    }

    // ⚡ button logic
    const lightningButton = document.getElementById('lightningButton');
    if (lightningButton) {
        lightningButton.addEventListener('click', () => {
            showNotification('⚡ Lightning attack initializing..', 2000);

            setTimeout(() => {
                showNotification('⚡ High-voltage packet sent!', 1500);
            }, 12000);

            setTimeout(() => {
                showNotification('⚡ Packet is overwhelming server..', 1500);
            }, 8000);

            setTimeout(() => {
                showNotification('⚡ Attack completed successfully.', 1500);
            }, 8000);

            setTimeout(() => {
                showNotification('💀 Network Blackout.', 1500);
            }, 2000);
        });
    } else {
        console.warn('Lightning button not found on this page.');
    }

    // Login logic (unchanged for index.html)
    const loginButton = document.getElementById('login-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            const username = usernameInput.value.trim();
            const password = passwordInput.value;

            if (username === 'swiping.cc' && password === 'venus') {
                // Successful login
                showNotification(`Welcome, ${username}!`);
                setTimeout(() => {
                    window.location.href = 'home.html'; // Redirect to home page
                }, 3000); // Redirect after notification disappears
            } else {
                // Display error message
                errorMessage.textContent = 'Invalid username or password';
                errorMessage.style.color = 'red';
                setTimeout(() => {
                    errorMessage.textContent = ''; // Clear error message after 3 seconds
                }, 3000);
            }
        });
    }
});
