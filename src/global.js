const peopleInTable = Array.from(document.querySelectorAll("[data-vis_id]"));
let people = []
peopleInTable.forEach((person, i) => {
    people.push({
        id: i,
        imgURL: peopleInTable[i].children[0].children[0].src,
        html: person.children[1].innerHTML
    })
})
