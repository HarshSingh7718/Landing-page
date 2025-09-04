 document.addEventListener('DOMContentLoaded', () => {
            const cartCount = document.getElementById('cart-count');
            try {
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
                if (totalItems > 0) {
                    cartCount.textContent = totalItems;
                    cartCount.classList.remove('hidden');
                }
            } catch (e) {
                console.error("Could not parse cart from localStorage", e);
            }
        });