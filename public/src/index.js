import Plotly from 'plotly.js-dist'
// import crt from 'nodejs-chinese-remainder'

window.onload = main;

function main() {
    const graph2d = new Graph2D('plot2d');
    graph2d.draw();

    const graph3d = new Graph3D('plot3d');
    graph3d.draw();
}

class Graph {
    constructor(domElement) {
        this.domElement = domElement;
    }

    draw() {}
}

class Graph2D extends Graph {
    draw() {
        const layout = {
            title: {
                text: 'x = 13 (mod 15) is represented as the point (1, 3)',
                font: {
                    family: 'Courier New, monospace',
                    size: 24
                },
                // xref: 'paper',
                // x: 0.05,
            },
            xaxis: {
                title: {
                    text: 'x = 3 (mod 5)',
                    font: {
                        family: 'Courier New, monospace',
                        size: 18,
                        color: '#7f7f7f'
                    }
                },
            },
            yaxis: {
                title: {
                    text: 'x = 1 (mod 3)',
                    font: {
                        family: 'Courier New, monospace',
                        size: 18,
                        color: '#7f7f7f'
                    }
                }
            }
        };

        Plotly.newPlot(this.domElement,
            [
                {
                    x: [1],
                    y: [3],
                    mode: 'markers', // can also replace with 'lines'
                    type: 'scatter'
                }
            ], 
            layout
        );
    }
}

class Graph3D extends Graph {
    
    draw() {

        // let traces = []

        // const mods = [5, 7, 11]
        // for (let a0 = 0; a0 < mods[0]; a0++) {
        //     for (let a1 = 0; a1 < mods[1]; a1++) {
        //         for (let a2 = 0; a2 < mods[2]; a2++) {
        //             const trace = {
        //                 x: [a0],
        //                 y: [a1],
        //                 z: [a2],
        //                 mode: 'markers',
        //                 marker: {
        //                     size: 12,
        //                     line: {
        //                         color: `rgba(${155 + a0/mods[0]*50}, ${15 + a1/mods[1]*200}, ${85 + a2/mods[2]*100}, 0.14)`,
        //                         width: 0.5
        //                     },
        //                     opacity: 0.8
        //                 },
        //                 type: 'scatter3d'
        //             };
        //             traces.push(trace)
        //         }
        //     }
        // }

        // const layout = {
        //     margin: {
        //         l: 0,
        //         r: 0,
        //         b: 0,
        //         t: 0
        //     },
        // };

        // Plotly.newPlot(this.domElement, traces, layout);

        var trace1 = {
            x: [1, 2, 3],
            y: [1, 2, 3],
            z: [1, 2, 3],
            mode: 'markers',
            marker: {
                size: 12,
                line: {
                    color: 'rgba(217, 217, 217, 0.14)',
                    width: 0.5
                },
                opacity: 0.8
            },
            type: 'scatter3d'
        };
        var data = [trace1];
        var layout = {
            margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 0
            },
            xaxis: {
                title: {
                    text: 'x = 3 (mod 5)',
                },
            },
        };
        Plotly.newPlot(this.domElement, data, layout);
    }   
}