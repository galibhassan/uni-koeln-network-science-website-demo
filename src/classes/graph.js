class Graph {
    constructor({ nodesInfo, edgesInfo }) {
        this._nodesInfo = nodesInfo;
        this._edgesInfo = edgesInfo;
    }

    get graph() {
        return this._getGraph()
    }
    get nodes() { return this._extractNodes() }
    get edges() { return this._edgesInfo }
    get adjecencyMatrix() { return this._getAdjecencyMatrix() }

    _extractNodes() {
        const nodes = this._nodesInfo.map(node => {
            return {
                id: node.id,
                label: node.label
            }
        })
        return nodes
    }

    _getGraph() {
        const nodes = this._extractNodes();
        const edges = this._edgesInfo;
        return { nodes, edges }
    }

    _getAdjecencyMatrix() {
        const nRows = this.nodes.length
        const nCols = nRows

        const adjecencyMat = [];
        for (let i = 0; i < nRows; i++) {
            let currentRow = [];
            for (let j = 0; j < nCols; j++) {
                for (let k = 0; k < this.edges.length; k++) {
                    let currentFrom = this.edges[k].from;
                    let currentTo = this.edges[k].to;
                    if (currentFrom === i && currentTo === j || currentFrom === j && currentTo === i) {
                        currentRow.push(1)
                        break;
                    }
                    if (k === this.edges.length - 1) {
                        currentRow.push(0)

                    }
                }
            }
            adjecencyMat.push(currentRow);
        }
        return adjecencyMat;
    }

    getRowSumOfAdjMat(i) {
        const adjMat = this.adjecencyMatrix;
        const adjMatSize = adjMat[0].length // adjMat is a square matrix
        let rowSum = 0;
        for (let j = 0; j < adjMatSize; j++) {
            rowSum += adjMat[i][j];
        }
        return rowSum;
    }

    _localCcCalcNumerator(i) {
        const adjMat = this.adjecencyMatrix;
        const adjMatSize = adjMat[0].length // adjMat is a square matrix

        let numerator = 0
        for (let j = 0; j < adjMatSize; j++) {
            for (let k = 0; k < adjMatSize; k++) {
                numerator += adjMat[i][j] * adjMat[j][k] * adjMat[k][i];
            }
        }
        return numerator;
    }
    _localCcCalcDenominator(i) {
        const k_i = this.getRowSumOfAdjMat(i)
        const denominator = k_i * (k_i - 1)
        return denominator;
    }

    /**
     * Calculates the clustering coefficient for a particular node with id=i.
     * Exploits the Adjecency Matrix by using the formula
     *      C_i = \frac{1}{k_i (k_i -1)} \sum_{j,k} A_{ij} A_{jk} A_{ki} 
     * reference: https://en.wikipedia.org/wiki/Clustering_coefficient#Local_clustering_coefficient
     * @param {integer} i The id of the node in the graph
     * @returns {Array2d} the adjecency matrix
     */
    getClusteringCoeffForNode(i) {
        const numerator = this._localCcCalcNumerator(i)
        const denominator = this._localCcCalcDenominator(i)
        if (denominator === 0) return 0;
        return (numerator / denominator);
    }


    /**
     * Calculates the global clustering coefficient of the graph.
     * Exploits the Adjecency Matrix by using the formula:
     *      C_i = \frac{1}{\sum_i k_i (k_i -1)} \sum_{i,j,k} A_{ij} A_{jk} A_{ki} 
     * reference: https://en.wikipedia.org/wiki/Clustering_coefficient#Global_clustering_coefficient
     * 
     */
    getGlobalClusteringCoeff() {
        const adjMat = this.adjecencyMatrix;
        const adjMatSize = adjMat[0].length // adjMat is a square matrix
        let numerator = 0;
        let denominator = 0;
        for (let i = 0; i < adjMatSize; i++) {
            numerator += this._localCcCalcNumerator(i);
            denominator += this._localCcCalcDenominator(i)
        }
        const clustCoeff = numerator / denominator;
        return clustCoeff;
    }
}

// test
