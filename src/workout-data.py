from flask import Flask, jsonify
import json

workoutdata = {
    "chest": [
        {"name": "Bench Press", "data": [100, 102, 105, 107, 110]},
        {"name": "Chest Flys", "data": [100, 102, 105, 107, 110]},
        {"name": "Incline Bench Press", "data": [100, 102, 105, 107, 110]}
    ],
    "biceps": [
        {"name": "Bicep Curls", "data": [100, 102, 105, 107, 110]},
        {"name": "Hammer Curls", "data": [100, 102, 105, 107, 110]}
    ],
    "triceps": [
        {"name": "Tricep Pushdowns", "data": [100, 102, 105, 107, 110]},
        {"name": "Skull Crushers", "data": [100, 102, 105, 107, 110]}
    ],
    "back": [
        {"name": "Deadlift", "data": [100, 102, 105, 107, 110]},
        {"name": "Pullups", "data": [100, 102, 105, 107, 110]},
        {"name": "Rows", "data": [100, 102, 105, 107, 110]}
    ]
}

app = Flask(__name__)

@app.route('/workout-data', methods=['GET'])
def get_workout_data():
    return (workoutdata)

if __name__ == '__main__':
    app.run(debug=True)