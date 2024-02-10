export async function NutritionFunction(NutritionInput) {
    var requestNutrition = JSON.stringify({
        "query": NutritionInput
    });

    return await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-app-id': 'ce2a901f',
            'x-app-key': '2936d24d9efbc221b1ca610163bbc11a'
        },
        body: requestNutrition
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error:', error));
}

export async function ActivityFunction(activityInput) {
    var requestActivity = JSON.stringify({
        "query": activityInput
    });

    await fetch('https://trackapi.nutritionix.com/v2/natural/exercise', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-app-id': 'ce2a901f',
            'x-app-key': '2936d24d9efbc221b1ca610163bbc11a'
        },
        body: requestActivity
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error:', error));
}