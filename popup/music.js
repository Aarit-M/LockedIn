const crazyGlueImage = document.getElementById("crazyGlue");
const stringsImage = document.getElementById("strings");
const morningBirdsImage = document.getElementById("morningBirds"); 
const windImage = document.getElementById("wind");
const stormImage = document.getElementById("storm");
const waterfallImage = document.getElementById("waterfall");

document.getElementById("crazyGlueAudio").style.display = "none";
document.getElementById("stringsAudio").style.display = "none";
document.getElementById("morningBirdsAudio").style.display = "none";
document.getElementById("windAudio").style.display = "none";
document.getElementById("stormAudio").style.display = "none";
document.getElementById("waterfallAudio").style.display = "none";

crazyGlueImage.addEventListener('click', (e) => {
    const bottomBar = document.getElementById("crazyGlueAudio");    
    toggleBottomBar(bottomBar);
})

stringsImage.addEventListener('click', (e) => {
    const bottomBar = document.getElementById("stringsAudio");    
    toggleBottomBar(bottomBar);
})

morningBirdsImage.addEventListener('click', (e) => {
    const bottomBar = document.getElementById("morningBirdsAudio");
    toggleBottomBar(bottomBar);
})

windImage.addEventListener('click', (e) => {
    const bottomBar = document.getElementById("windAudio");
    toggleBottomBar(bottomBar);
})

stormImage.addEventListener('click', (e) => {
    const bottomBar = document.getElementById("stormAudio");
    toggleBottomBar(bottomBar);
})

waterfallImage.addEventListener('click', (e) => {
    const bottomBar = document.getElementById("waterfallAudio");
    toggleBottomBar(bottomBar);
})

function toggleBottomBar(bottomBar) {
    // Get all bottom bars
    const allBottomBars = document.querySelectorAll(".bottom-bar");
    
    // Hide all bottom bars except the clicked one
    allBottomBars.forEach(bar => {
        if (bar !== bottomBar) {
            bar.style.display = "none";
            // Pause the audio playback
            const audioElement = bar.querySelector("audio");
            if (audioElement) {
                audioElement.pause();
            }
        }
    });
    
    // Toggle the display of the clicked bottom bar
    bottomBar.style.display = bottomBar.style.display === "none" ? "flex" : "none";
    
    // If the bottom bar is being displayed, set a high z-index
    if (bottomBar.style.display === "flex") {
        bottomBar.style.zIndex = "9999";
    }
}
