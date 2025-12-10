export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 👈 Añadimos la sección 'extend' para nuevas animaciones
      animation: {
        // Define la animación de giro que dura 5 segundos (más lento)
        "spin-slow": "spin 5s linear infinite",
      },
      // NOTA: El keyframe 'spin' ya está incluido por defecto en Tailwind,
      // por lo que solo necesitamos definir la duración en 'animation'.
    },
  },
  plugins: [],
};
