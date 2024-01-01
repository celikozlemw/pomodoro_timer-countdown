 let countdown;
        let durationInput = document.getElementById('duration');
        let countdownDisplay = document.getElementById('countdown');

        function startCountdown() {
            let durationInMinutes = parseInt(durationInput.value);

            if (isNaN(durationInMinutes) || durationInMinutes <= 0) {
                alert('Geçerli bir süre girin.');
                return;
            }

            let durationInSeconds = durationInMinutes * 60;
            let endTime = new Date().getTime() + durationInSeconds * 1000;

            countdown = setInterval(function() {
                let now = new Date().getTime();
                let distance = endTime - now;

                if (distance <= 0) {
                    clearInterval(countdown);
                    countdownDisplay.innerHTML = '';
                } else {
                    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    hours = hours < 10 ? '0' + hours : hours;
                    minutes = minutes < 10 ? '0' + minutes : minutes;
                    seconds = seconds < 10 ? '0' + seconds : seconds;

                    countdownDisplay.innerHTML = hours + ':' + minutes + ':' + seconds;
                }
            }, 1000);
        }
