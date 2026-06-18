document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const usuarioInput = document.getElementById("usuario");
        const passwordInput = document.getElementById("password");

        const username = usuarioInput.value;
        const password = passwordInput.value;

        // limpiar estilos de error
        usuarioInput.classList.remove("error");
        passwordInput.classList.remove("error");

        try {
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem("user", JSON.stringify(data.user));
                window.location.href = "libro.html";
            } else {
                usuarioInput.classList.add("error");
                passwordInput.classList.add("error");
                alert(data.message);
            }

        } catch (error) {
            console.error("Error en login:", error);
            alert("Error de conexión con el servidor");
        }
    });

});