document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }


    const createBurger = document.getElementById('create-form');

    if (createBurger) {
        createBurger.addEventListener('submit', (e) => {
            e.preventDefault();

            const newBurger = {
                burger_name: document.getElementById('burg').value.trim()
            };

            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBurger),
            }).then(() => {
                document.getElementById('burg').value = '';
                console.log('Created a new burger!');
                location.reload();
            })
        })
    }

    const devourBtns = document.querySelectorAll('.devour-burger');

    devourBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');

            fetch(`/api/burgers/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                if (response.ok) {
                    console.log(`burger with ID ${id} devoured`);
                    location.reload('/');
                }
                else {
                    alert('something went wrong!');
                }
            })
        })
    })
});