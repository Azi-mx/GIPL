var commonNumber = {
    init: function () {
        commonNumber.observeNumberCounters();
        commonNumber.observeNumberCounters1();
        commonNumber.observeNumberCounters2();
        commonNumber.observeNumberCounters3();
    },

    observeNumberCounters: function () {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    commonNumber.numberCounters(); // Call your function when section is in view
                    observer.unobserve(entry.target); // Stop observing once triggered                    
                }
            });
        });

        const cardContractors = document.getElementById('card-contractors');
        observer.observe(cardContractors);
    },

    observeNumberCounters1: function () {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    commonNumber.numberCounters1(); // Call your function when section is in view
                    observer.unobserve(entry.target); // Stop observing once triggered                    
                }
            });
        });

        const cardProjects = document.getElementById('card-projects');
        observer.observe(cardProjects);
    },

    observeNumberCounters2: function () {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    commonNumber.numberCounters2(); // Call your function when section is in view
                    observer.unobserve(entry.target); // Stop observing once triggered                    
                }
            });
        });

        const cardConstruction = document.getElementById('card-construction');
        observer.observe(cardConstruction);
    },

    observeNumberCounters3: function () {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    commonNumber.numberCounters3(); // Call your function when section is in view
                    observer.unobserve(entry.target); // Stop observing once triggered                    
                }
            });
        });

        const statisticsContinents = document.getElementById('idContinents');
        observer.observe(statisticsContinents);
    },    

    //Counters
    numberCounters: function () {        

        const counters = document.querySelectorAll('.value');
        const speed = 400;

        counters.forEach(counter => {
            const animate = () => {
                const value = +counter.getAttribute('akhi');
                const data = +counter.innerText;

                const time = value / speed;
                if (data < value) {
                    counter.innerText = Math.ceil(data + time);
                    setTimeout(animate, 1);
                } else {
                    counter.innerText = `${value.toLocaleString('en-US')}+`;
                }
            }

            animate();
        });
    },

    numberCounters1: function () {
        const counters = document.querySelectorAll('.value1');
        const speed = 400;

        counters.forEach(counter => {
            const animate = () => {
                const value = +counter.getAttribute('akhi');
                const data = +counter.innerText;

                const time = value / speed;
                if (data < value) {
                    counter.innerText = Math.ceil(data + time);
                    setTimeout(animate, 1);
                } else {
                    counter.innerText = `${value.toLocaleString('en-US')}+`;
                }
            }

            animate();
        });
    },

    numberCounters2: function () {
        const counters = document.querySelectorAll('.value2');
        const speed = 400;

        counters.forEach(counter => {
            const animate = () => {
                const value = +counter.getAttribute('akhi');
                const data = +counter.innerText;

                const time = value / speed;
                if (data < value) {
                    counter.innerText = Math.ceil(data + time);
                    setTimeout(animate, 1);
                } else {
                    counter.innerText = `$${value.toLocaleString('en-US')}`;
                }
            }

            animate();
        });
    },

    numberCounters3: function () {
        const counters = document.querySelectorAll('.value3');
        const speed = 200;

        counters.forEach(counter => {
            const animate = () => {
                const value = +counter.getAttribute('akhi');
                const data = +counter.innerText;

                const time = value / speed;
                if (data < value) {
                    counter.innerText = Math.ceil(data + time);
                    setTimeout(animate, 1);
                } else {
                    counter.innerText = `${value.toLocaleString('en-US')}+`;
                }
            }

            animate();
        });
    }, 

}


$(document).ready(function () {
    commonNumber.init();
});