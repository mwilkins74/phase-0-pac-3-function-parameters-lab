function introduction(name) {
    return `Hi, my name is ${name}.`
}
console.log("Aki")
console.log("Samip")

function introductionWithLanguage(name,language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log("Aki" , "Ember.js")

function introductionWithLanguageOptional(name, language) {
    let language = "JavaScript"
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log("Gracie")
