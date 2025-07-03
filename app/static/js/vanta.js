document.addEventListener("DOMContentLoaded", function() {
    if (typeof VANTA !== 'undefined' && document.getElementById('home')) {
        try {
            const vantaEffect = VANTA.NET({
                el: "#home",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x00d4ff,
                backgroundColor: 0x0a0a0a,
                points: 8.00,
                maxDistance: 25.00,
                spacing: 20.00,
                showDots: true
            });

            window.addEventListener('beforeunload', () => {
                if (vantaEffect) vantaEffect.destroy();
            });
            
        } catch (error) {
            console.warn('VANTA.js failed to initialize:', error);
        }
    }
});