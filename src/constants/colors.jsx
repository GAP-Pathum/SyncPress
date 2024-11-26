//src\constants\colors.jsx
import { createGlobalStyle } from 'styled-components';

const lightTheme = {
    background: '#FFFFFF',
    backgroundSecondary: '#F5F5F5',
    textPrimary: '#000000',
    textSecondary: '#333333',
    accentPrimary: '#007BFF',
    accentSecondary: '#0056b3',
    border: '#E0E0E0',
    error: '#FF4D4F',
    cardBackground: '#f0f0f0',
    gradient: {
        background: 'linear-gradient(270deg, purple, white)',
        backgroundSize: '400% 400%',
        animation: 'gradientBackground 10s ease infinite',
    }
};

const darkTheme = {
    background: '#121212',
    backgroundSecondary: '#1E1E1E',
    textPrimary: '#FFFFFF',
    textSecondary: '#CCCCCC',
    accentPrimary: '#007BFF',
    accentSecondary: '#66A3FF',
    border: '#333333',
    error: '#FF4D4F',
    cardBackground: '#0f0f0f',
    gradient: {
        background: 'linear-gradient(270deg, purple, blue, black)',
        backgroundSize: '400% 400%',
        animation: 'gradientBackground 10s ease infinite',
    }
};

const gradientAnimation = `
    @keyframes gradientBackground {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;

const GlobalStyle = createGlobalStyle`
    ${gradientAnimation}
`;

export { lightTheme, darkTheme, GlobalStyle };
