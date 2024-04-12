/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.ejs"],
    mode: "jit",
    theme: {
        container: {
            center: true
        },
        colors: {
            blue: "#1e40af"
        },
        extend: {},
    },
    plugins: [
        require("rippleui")
    ],
};