document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const usuarioInput = document.getElementById("usuario");
        const passwordInput = document.getElementById("password");

        const username = usuarioInput.value;
        const password = passwordInput.value;

        usuarioInput.classList.remove("error");
        passwordInput.classList.remove("error");

        try {
            const response = await fetch("https://localhost:3443/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (data.success) {

                // guardar sesión
                localStorage.setItem("user", JSON.stringify(data.user));

                window.location.href = "libro.html";

            } else {
                usuarioInput.classList.add("error");
                passwordInput.classList.add("error");
                alert(data.message);
            }

        } catch (error) {
            console.error(error);
            alert("Error de conexión con el servidor");
        }
    });

});