function constructorCrew(worker) {
    if (worker.dizziness === true) {
        worker.levelOfHydrated += worker.weight * worker.experience * 0.1;
        worker.dizziness = false;
    }
    return worker;
}
console.log(constructorCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
))

console.log(constructorCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}))

console.log(constructorCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
))
