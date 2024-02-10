export async function NutritionFunction(NutritionInput) {
    var requestNutrition = JSON.stringify({
        "query": NutritionInput
    });

    const res = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-app-id': 'ce2a901f',
            'x-app-key': '2936d24d9efbc221b1ca610163bbc11a'
        },
        body: requestNutrition
    })
    return res.json()
}

export async function ActivityFunction(activityInput) {
    var requestActivity = JSON.stringify({
        "query": activityInput
    });

    const res = await fetch('https://trackapi.nutritionix.com/v2/natural/exercise', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-app-id': 'ce2a901f',
                    'x-app-key': '2936d24d9efbc221b1ca610163bbc11a'
                },
                body: requestActivity
            })
    return res.json()
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     return data
    // })
    // .catch(error => console.error('Error:', error));
}