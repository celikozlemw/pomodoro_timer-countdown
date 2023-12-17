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

        let workTime = 25;
        let breakTime = 5;
        let seconds = "00";

        window.onload = () => {
            document.getElementById('minutes').innerHTML = workTime;
            document.getElementById('seconds').innerHTML = seconds;
        };

        function start() {
            document.getElementById('start').style.display = "none";
            document.getElementById('reset').style.display = "block";

            seconds = 59;

            let workMinutes = workTime - 1;
            let breakMinutes = breakTime - 1;

            breakCount = 0;

            let timerFunction = () => {
                document.getElementById('minutes').innerHTML = workMinutes;
                document.getElementById('seconds').innerHTML = seconds;

                seconds = seconds - 1;

                if (seconds === 0) {
                    workMinutes = workMinutes - 1;
                    if (workMinutes === -1) {
                        if (breakCount % 2 === 0) {
                            workMinutes = breakMinutes;
                            breakCount++;
                        } else {
                            workMinutes = workTime;
                            breakCount++;
                        }
                        seconds = 59;
                    }
                }
            };

            setInterval(timerFunction, 1000);
        }
