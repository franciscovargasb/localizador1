window.onload = function() {
    // Función para obtener la fecha actual
    function getCurrentDate() {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return today.toLocaleDateString('en-US', options);
    }

    // Función para obtener la hora actual
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    }

    // Función para obtener la ubicación (se puede mejorar)
    function getLocation() {
        return "Your Location";
    }

    // Actualizar la hora, fecha y ubicación cada segundo
    setInterval(function() {
        document.getElementById('date').innerText = 'Date: ' + getCurrentDate();
        document.getElementById('time').innerText = 'Time: ' + getCurrentTime();
        document.getElementById('location').innerText = 'Location: ' + getLocation();
    }, 1000);
};