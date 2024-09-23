self.addEventListener("install", Event => {
    console.log("Service worker installed");
});
self.addEventListener("activate", Event => {
    console.log("Service worker activated");
});