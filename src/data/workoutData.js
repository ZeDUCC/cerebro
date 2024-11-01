const fs = require('fs');
const path = require('path');
const { app } = require('electron');

// Get the user data directory
const userDataPath = app.getPath('userData');
const dataFilePath = path.join(userDataPath, 'workoutData.json');

// Initial data structure
const defaultData = {
    chest: [
        { name: 'Bench Press', data: [100, 105, 110, 115, 120, 125] },
        { name: 'Chest Flys', data: [30, 35, 35, 40, 40, 45] },
        { name: 'Incline Press', data: [80, 85, 90, 90, 95, 100] }
    ],
    biceps: [
        { name: 'Curls', data: [30, 35, 35, 40, 40, 45] },
        { name: 'Hammer Curls', data: [25, 30, 30, 35, 35, 40] }
    ],
    triceps: [
        { name: 'Skull Crushers', data: [40, 45, 45, 50, 50, 55] },
        { name: 'Tricep Dips', data: [20, 25, 25, 30, 30, 35] }
    ],
    shoulders: [
        { name: 'Shoulder Press', data: [60, 65, 65, 70, 70, 75] },
        { name: 'Lateral Raises', data: [15, 20, 20, 25, 25, 30] }
    ],
    forearms: [
        { name: 'Wrist Curls', data: [20, 25, 25, 30, 30, 35] },
        { name: 'Reverse Curls', data: [25, 30, 30, 35, 35, 40] }
    ],
    legs: [
        { name: 'Squats', data: [120, 125, 130, 135, 140, 145] },
        { name: 'Leg Press', data: [200, 205, 210, 215, 220, 225] }
    ],
    back: [
        { name: 'Deadlifts', data: [150, 155, 160, 165, 170, 175] },
        { name: 'Pull-ups', data: [10, 15, 15, 20, 20, 25] }
    ]
};

function loadData() {
    try {
        if (fs.existsSync(dataFilePath)) {
            const data = fs.readFileSync(dataFilePath);
            return JSON.parse(data);
        }
        // If file doesn't exist, create it with default data
        fs.writeFileSync(dataFilePath, JSON.stringify(defaultData));
        return defaultData;
    } catch (error) {
        console.error('Error loading data:', error);
        return defaultData;
    }
}

function saveData(data) {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Error saving data:', error);
        return false;
    }
}

module.exports = { loadData, saveData };