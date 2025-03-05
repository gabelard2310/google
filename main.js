const { app, BrowserWindow, Menu } = require('electron');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false
        }
    });

    mainWindow.loadURL("https://www.google.com"); // Page par défaut

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // Quitter quand toutes les fenêtres sont fermées (sauf sur macOS)
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
});
