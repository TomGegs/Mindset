/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // or 'media'
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                lightShade: "#F8F8F8", //Almost white, clean and crisp.
                darkShade: "#2E4052", //Charcoal blue, modern and professional.
                lightAccent: "#AED6F1", //Light sky blue, refreshing and open.
                darkAccent: "#F1948A", //Soft rose, friendly and inviting.
                primaryColor: "#5499C7", //Calm mid-tone blue, promoting peace and focus.
            },

            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
