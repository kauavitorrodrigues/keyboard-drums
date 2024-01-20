//Adds a listener to execute the function upon a key press within the body (HTML), passing the key as a parameter
document.body.addEventListener("keyup", (event) => {
    playSound(event.code.toLowerCase()) // Executes the PlaySound function, passing the pressed key in lowercase as a parameter
})

// Adds a listener to execute the function through the button click (HTML)
document.querySelector('.composer button').addEventListener("click", () => {
    let song = document.querySelector('#input').value // Stores the keys typed in the input as a string

    // If the keys in the input exist
    if(song !== '') {
        let songArray = song.split('') // Converts the string into an array, with each letter as an element
        playSong(songArray) // Executes the playSong function, passing the array as a parameter
    }

})

// Function to play the sound corresponding to the pressed keys, receives the key as a parameter
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`) // Uses template strings with querySelector to store the pressed key
    let keyElement = document.querySelector(`div[data-key="${sound}"]`) // Uses template strings with querySelector to store the pressed key div

    // If the key exists
    if(audioElement) {

        audioElement.currentTime = 0 // Set the audio current time to 0
        audioElement.play() // Play the audio file corresponding to the stored key

    }

    // If the key div exists
    if(keyElement) {

        keyElement.classList.add('active') // Adds the 'active' class to the div

        // Creates 300 milliseconds Timeout
        setTimeout(() => {
            keyElement.classList.remove('active') // Removes the 'active' class to the div
        }, 300)

    }

}

// Function to play the typed letters in order in the input, with a time interval between each one, and receiving the array of letters (keys) as a parameter
function playSong(song) {

    let wait = 0 // Stores the timeout timer controller (initial value 0)

    // Loop to play each key in the array
    for(let songKey of song) {
        
        // Timeout to play each letter
        setTimeout(() => {
            playSound(`key${songKey}`) // Executes the playSong function, passing each key as a parameter
        }, wait) // Uses the time interval from the variable 'wait'

        wait += 250 // Adds 250 milliseconds to the value of the 'wait' variable each time the loop occurs
        
    }

}