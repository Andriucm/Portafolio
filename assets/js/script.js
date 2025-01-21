window.addEventListener("DOMContentLoaded", () => {
	const currentYear = new Date().getFullYear();
	const footer = document.querySelector("footer");
	footer.innerHTML = `&copy; ${currentYear} - Andrei. Todos los derechos reservados.`;
});
