function showList(list) {
    if (!list.length) {
        console.log("lista vacia")
        return
    } 
    const listContent = list.reduce(function(previous, current) {
        return `${previous} ${current}`
    })
    console.log(listContent)

}

showList([]);

(function (list) {
    if (!list.length) {
        console.log("lista vacia")
        return
    } 
    const listContent = list.reduce(function(previous, current) {
        return `${previous} ${current}`
    })
    console.log(listContent)

}) ([1, 2, 3, 4])



function createMultiplier(number) {
    return function(num){
        console.log(number * num)
    }
}

const duplicate = createMultiplier(2)
const triplicate = createMultiplier(3)
duplicate(10)