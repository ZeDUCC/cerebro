from flask import Flask, jsonify
import json

workoutdata = {
    "chest": {
        "bench press": [100, 102, 105, 107, 110],
        "chest flys": [100, 102, 105, 107, 110],
        "incline bench press": [100, 102, 105, 107, 110],
    },
    "biceps": {
        "bicep curls": [100, 102, 105, 107, 110],
        "hammer curls": [100, 102, 105, 107, 110],
    },
    "triceps": {
        "tricep pushdowns": [100, 102, 105, 107, 110],
        "skull crushers": [100, 102, 105, 107, 110],
    },
    "back": {
        "deadlift": [100, 102, 105, 107, 110],
        "pullups": [100, 102, 105, 107, 110],
        "rows": [100, 102, 105, 107, 110],
    }
}
app = Flask(__name__)

@app.route('/workout-data', methods=['GET'])
def get_workout_data():
    return jsonify(workoutdata['chest']['bench press'])

if __name__ == '__main__':
    app.run(debug=True)