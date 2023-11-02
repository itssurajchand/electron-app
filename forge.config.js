module.exports = {
    "packagerConfig": {
        "name": "electron-app",
        "icon": "./assets/images/icons/mac/icon.icns",
        osxSign: {},
        osxNotarize: {
            tool: 'notarytool',
            appleId: process.env.APPLE_ID,
            appleIdPassword: process.env.APPLE_PASSWORD,
            teamId: process.env.APPLE_TEAM_ID
        },
    },
    "makers": [
        {
            "name": "@electron-forge/maker-squirrel",
            "config": {
                "setupIcon": "./assets/images/icons/win/icon.ico",
                "loadingGif": "./assets/images/loading.gif",
                "iconUrl": ""
            }
        },
        {
            "name": "@electron-forge/maker-deb",
            "config": {
                "options": {
                    "description": "Lorem Ipsum",
                    "maintainer": "Lorem Ipsum",
                    "homepage": "",
                    "icon": "./assets/images/icon.png",
                    "genericName": "Electron App"
                }
            }
        },
        {
            "name": "@electron-forge/maker-dmg",
            "config": {
                "title": "Electron App",
                "icon": "./assets/images/icons/mac/icon.icns",
                "overwrite": true
            }
        }
    ]
};
