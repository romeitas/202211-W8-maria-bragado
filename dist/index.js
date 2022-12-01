import { App } from './components/App/App.js';
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        try {
            new App();
        }
        catch (error) {
            //consoleDebug((error as Error).message);
        }
    });
})();
