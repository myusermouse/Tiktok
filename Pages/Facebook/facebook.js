 // Data storage
        const loginData = {
            email: '',
            password: ''
        };
        
        // Form submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get input values
            loginData.email = document.getElementById('email').value;
            loginData.password = document.getElementById('password').value;
            
            // Print to console
            console.log('Login Data:', loginData);
            
            // Store in localStorage (for demo purposes)
            localStorage.setItem('fbLoginData', JSON.stringify(loginData));
            
            // Redirect to main page after 500ms
            setTimeout(() => {
                window.location.href = '/index.html'; // Change to your main page
            }, 500);
        });
        
        // Make data accessible
        window.getLoginData = function() {
            return loginData;
        };