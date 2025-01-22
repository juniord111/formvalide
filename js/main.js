const form = document.querySelector('.contact-form');
const errorMessages = document.getElementById('error-messages');
 //agrega eventos al submit
form.addEventListener('submit', function(event) {
    event.preventDefault();
    errorMessages.innerHTML = '';
    const requiredFields = form.querySelectorAll('[required]');
    let hasError = false;
    
     // Verificar campos requeridos
    requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
            hasError = true;
            const errorMessage = document.createElement('p');
            errorMessage.textContent = `The ${field.name} field is required.`;
            errorMessages.appendChild(errorMessage);
        }
    });
    //si todo esta bien muestra esto y reinicia la pagina 
    if (!hasError) {
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Form submitted successfully';
        successMessage.style.color = 'green';
        successMessage.style.textAlign = 'center';
        errorMessages.appendChild(successMessage);
        //reinicia la pagina y quita el mensaje 
        setTimeout(() => {
            form.reset();
            window.location.reload();
        }, 2000); 
    }
});