const matix = require('./mathematix')
const createCsvWriter = require('csv-writer').createArrayCsvWriter
const vars = require('./input_variables.js')

lengths = matix.range(0, 100, 8000)
widths = matix.range(0, 100, 8000)

//end input values


const matrix = []
const volume_values = []
const length_values = []
const width_values = []

lengthLoop:
for(i = 0; i < lengths.length; i++) {

    length = lengths[i]
    matrix.push([length])

    if(length < 2 * (column_length / 2 + Math.abs(ec_vl_length))) {
        matrix[i].push(null)
        continue lengthLoop
    }

    
    widthLoop:
    for(j = 0; j < widths.length; j++) {
        width = widths[j]

        if(width < 2 * (column_width/ 2 + Math.abs(ec_vl_width))) {
            matrix[i].push(null)
            continue widthLoop
        }

        if(matix.verification0() === 0) {
            matrix[i].push(0)
            continue widthLoop
        } else {
            matrix[i].push(matix.get_volume())
            volume_values.push(matix.get_volume())
            length_values.push(length)
            width_values.push(width)
        }
    }
}

widths.unshift(0)
const csvWriter = createCsvWriter({
    header: widths,
    path: './matrices/ex4/ex4_v0_matrix.csv'
})

csvWriter.writeRecords(matrix)
    .then(() => {
        console.log('...loops completed and csv file updated!');
    });
    

