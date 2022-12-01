import { App } from './components/app/app.js';
import { consoleDebug } from './components/tools/consoleDebug.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        try {
            new App();
        } catch (error) {
            consoleDebug((error as Error).message);
        }
    });
})();
