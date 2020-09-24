// global nodesInfo, edgesInfo


g = new Graph({ nodesInfo, edgesInfo })
adjMat = g.adjecencyMatrix

const adjMatDom = document.querySelector(".adjecency-matrix")
const table = document.createElement('table')
table.classList.add("adj-mat-table")
adjMatDom.appendChild(table);

// adjecency matrix
for (let i = -1; i < adjMat[0].length; i++) {
    let currentRow = document.createElement('tr');
    table.appendChild(currentRow)
    for (let j = -1; j < adjMat[0].length; j++) {
        if(i===-1 && j === -1) {
            currentRow.innerHTML += `<td> x  </td>`
            
        } else if (i === -1 && j>-1 && j < adjMat[0].length) {
            currentRow.innerHTML += `<td> ${g.nodes[j].label}  </td>`
        } else if (j === -1) {
            currentRow.innerHTML += `<td> ${g.nodes[i].label}  </td>`
        } else {
            if (i > -1 && j > -1) {
                currentRow.innerHTML += `<td> ${adjMat[i][j]}  </td>`
            }
        }
    }
}

// global clustering coeff
const globalCC = document.querySelector(".global-clustering-coeff")
globalCC.innerHTML += g.getGlobalClusteringCoeff()


const localCC = document.querySelector(".local-clustering-coeff")
for (let i = 0; i<g.nodes.length; i++) {
    localCC.innerHTML += `<div> <b> ${g.nodes[i].label} </b>:   ${g.getClusteringCoeffForNode(i)} </div>`
}
