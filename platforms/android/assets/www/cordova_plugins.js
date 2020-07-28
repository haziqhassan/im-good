cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com-badrit-base64.Base64",
        "file": "plugins/com-badrit-base64/www/Base64.js",
        "pluginId": "com-badrit-base64",
        "clobbers": [
            "navigator.Base64"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-ionic-keyboard.keyboard",
        "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
        "pluginId": "cordova-plugin-ionic-keyboard",
        "clobbers": [
            "window.Keyboard"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-telerik-imagepicker.ImagePicker",
        "file": "plugins/cordova-plugin-telerik-imagepicker/www/imagepicker.js",
        "pluginId": "cordova-plugin-telerik-imagepicker",
        "clobbers": [
            "plugins.imagePicker"
        ]
    },
    {
        "id": "mx.ferreyra.callnumber.CallNumber",
        "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
        "pluginId": "mx.ferreyra.callnumber",
        "clobbers": [
            "call"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com-badrit-base64": "0.2.0",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-ionic-keyboard": "2.1.2",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-telerik-imagepicker": "2.2.3",
    "cordova-plugin-whitelist": "1.3.3",
    "mx.ferreyra.callnumber": "0.0.2"
};
// BOTTOM OF METADATA
});