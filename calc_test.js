const matix = require('./mathematix')
const veri = require('./verified')
const createCsvWriter  = require('csv-writer').createArrayCsvWriter
require('./input_variables.js')
const { v4: uuidv4 } = require('uuid')

end = 8000
big_step = 400
small_step = 50
lengths = matix.range(0, small_step, end)
widths = matix.range(0, small_step, end)
widths_big_steps = matix.range(0, big_step, end)
widths_small_steps = matix.range(0, small_step, end)

// length = 1000
// width = 700

findVolumes = () => {

    verified_sets = []
    
    console.time('opt_loop')
    lengthLoop:
    for(l in lengths) {

        length = lengths[l]
        if(matix.restr_1(length, column_length, ec_vl_length)) {
            continue lengthLoop
        } 

        widthLoop:
        for(w in widths_big_steps) {
            width = widths_big_steps[w]
            if(matix.restr_1(width, column_width, ec_vl_width)) {
                continue widthLoop
            } 
            if(matix.verification0() === 0) {
                continue widthLoop
            }

            if(veri.verifyFromLengthAndWidth()[0]) {
               
                startAt = veri.verifyFromLengthAndWidth()[2] - big_step + small_step
                endAt = veri.verifyFromLengthAndWidth()[2]
                smallWidths = matix.range(startAt, small_step, endAt)
                
                for(s in smallWidths) {
                    width = smallWidths[s]

                    if(verified_sets.length > 0) {
                        if(width == verified_sets.at(-1)[1]) {
                            continue lengthLoop
                        }
                        if(length > verified_sets.at(-1)[0] && width > verified_sets.at(-1)[1]) {
                            continue lengthLoop
                        }
                    }
                    if(veri.verifyFromLengthAndWidth()[0]) {
                        verified_sets.push([length, width, matix.get_volume()])
                        continue lengthLoop
                    }
                }
            }
        }
    }

    console.timeEnd('opt_loop')

    ls = verified_sets.map(function(arr) {
        return arr[0]
    })
    
    ws = verified_sets.map(function(arr) {
        return arr[1]
    })
    
    vs = verified_sets.map(function(arr) {
        return arr[2]
    })
    
    opt_index = vs.indexOf(Math.min(...vs))
    
    opt_length = verified_sets[opt_index][0]
    opt_width = verified_sets[opt_index][1]
    opt_volume = verified_sets[opt_index][2]
    
    console.log("::::::::::::::::::::::::::")
    console.log("opt_length:",opt_length)
    console.log("opt_width:",opt_width)
    console.log("opt_volume:",opt_volume)
    console.log("height:",height)
    console.log("depth:",depth)
    console.log("::::::::::::::::::::::::::::")
    console.log("column_length:",column_length)
    console.log("column_width:",column_width)
    console.log("ec_vl_length:",ec_vl_length)
    console.log("ec_vl_width:",ec_vl_width)
    console.log("::::::::::::::::::::::::::::")
    console.log("vl_external:",vl_external)
    console.log("hl_length:",hl_length)
    console.log("hl_width:",hl_width)
    console.log("m_length:",m_length)
    console.log("m_width:",m_width)
    
}


findVolumes()