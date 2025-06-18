document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const positionInput = document.getElementById('positionInput');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        const n = parseInt(positionInput.value);
        
        if (isNaN(n) || n < 0 || n > 50) {
            resultDiv.textContent = 'Please enter a number between 0 and 50';
            return;
        }
        
        const fibNumber = fibonacci(n);
        resultDiv.textContent = `fibonacci(${n}) → ${fibNumber}`;
    });

    function fibonacci(num) {
        if (num === 0) return 0;
        if (num === 1) return 0;
        if (num === 2) return 1;
        
        let a = 0, b = 1, temp;
        
        for (let i = 3; i <= num; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        
        return b;
    }
});