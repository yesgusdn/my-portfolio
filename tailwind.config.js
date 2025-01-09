/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    safelist: [
        {
            pattern: /text-(red|green|blue|teal|yellow|orange)-(100|500|700)/, // 동적 클래스 패턴
        },
        "text-lg", // 고정 클래스 이름
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"], // 기본 폰트로 로보토 추가
            },
        },
    },
    plugins: [],
};
