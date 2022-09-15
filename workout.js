const workout = (exercise, time, callback) => {
    console.log('3... 2... 1...');
    console.log(`${exercise.toUpperCase()}!`);
    setTimeout(() => {
        console.log(`Done with ${exercise}`);
        // Call Site.
        callback();
    }, time);
}

workout('pushups', 300, () => {
    workout('situps', 200, () => {
        workout('squats', 100, () => null);
    });
});