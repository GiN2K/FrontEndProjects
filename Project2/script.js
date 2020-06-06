particlesJS.load('particles-js', 'particles.json', function () {
            console.log('particles.json loaded...');
        });

        var email = document.getElementById('email'); button = document.getElementById('button');

        function validateEmail(email) {
            var ex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return ex.test(email);
        }

        email.addEventListener('keydown', function () {
            var email = this.value;

            if (validateEmail(email)) {
                button.classList.add('is-active');
            }
        });

        button.addEventListener('click', function (e) {
            e.preventDefault();
            this.classList.add('is-done', 'is-active');

            setTimeout(function () {
                button.innerHTML = "Thanks For Subscribing"
            }, 500);
        });


        var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();
        let now = new Date().getTime();

        var x = setInterval(function () {

            // Computer Date Based
            // now = new Date().getTime(); 

            // API Date Based
            $.getJSON('http://worldtimeapi.org/api/timezone/Etc/UTC', function (data) {


                console.log(data.unixtime * 1000)
                now = data.unixtime * 1000;
            });

            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("day").innerHTML = days;
            document.getElementById("hour").innerHTML = hours;
            document.getElementById("min").innerHTML = minutes;
            document.getElementById("sec").innerHTML = seconds;


            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);