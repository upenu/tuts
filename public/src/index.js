import Plotly from 'plotly.js-dist'

window.onload = main;

function main() {
    const graph = new Graph2D(document.getElementById('tester'));
    graph.draw();
}

class Graph {
    constructor(domElement) {
        this.domElement = domElement;
    }

    draw() {}
}

class Graph2D extends Graph {
    draw() {
        Plotly.newPlot(this.domElement,
            [
                {
                    x: [1, 2, 3, 4, 5, 6, 7, 8],
                    y: [1, 2, 3, 4, 5, 6, 7, 8]
                }
            ], 
            {
                margin: { t: 0 }
            }
        );
    }
}