const matix = require('./mathematix')
const veri = require('./verified')
const createCsvWriter  = require('csv-writer').createArrayCsvWriter

national_annex = 'Denmark'
lmd_known = undefined
dimensions_known = undefined
gamma_c = (national_annex === 'Denmark') ? 1.45 : 1.5
gamma_s = (national_annex === 'Denmark') ? 1.2 : 1.15
// f_R_1 = 1.8
// f_R_2 = 1.9
// f_R_3 = 2.1
// f_R_4 = 2
point_foundation_shape = 'rectangular'
radius = 0
column_shape = 'rectangular'
column_radius = 0
terrain_live_load = 0
geo_known = undefined
ground_density = 18
dr_st_af_k = 33
dr_lt_af_k = 33
ud_st_af_k = 0
ud_lt_af_k = 25
dr_st_cohesion_k = 0
dr_lt_cohesion_k = 0
ud_st_cohesion_k = 80
ud_lt_cohesion_k = 8
ground_type = 'both'
internal_moment = 0
concrete_type = 25
f_ck = concrete_type
f_yk = 0
A_s = 0
steel_quality = 0
steel_mesh_type = 0
cover_layer = 0
concrete_density = 24
fabrication_method = 'in_situ'
include_fiber = 'on'
// fiber_dosage = '1.8,1.9,2.1,2,4'
include_steel = undefined

height = 400
height_p_hor = height
depth = 900
column_length = 200
column_width = 200
ec_vl_length = 0
ec_vl_width = 100
vl_external = 40
hl_length = 0
hl_width = 50
m_length = 0
m_width = 0

end = 8000
big_step = 400
small_step = 50
lengths = matix.range(0, small_step, end)
widths = matix.range(0, small_step, end)
widths_big_steps = matix.range(0, big_step, end)
widths_small_steps = matix.range(0, small_step, end)

fiber_dosages = ['1.21,1.11,1.2,1.16', '1.51,1.62,1.8,1.8', '1.8,1.9,2.1,2', '1.97,2.45,2.71,2.62', '2.3,2.7,2.9,2.9', '2.87,3.51,3.82,3.85', '3.35,4.26,4.7,4.66']

threedee = () => {

    var start_time = Date.now()

    records = []

    fiber_dosageLoop:
    for (fd = 0; fd < fiber_dosages.length; fd++) {
        
        fiber_dosage = fiber_dosages[fd]

        f_R_1 = parseFloat(fiber_dosage.split(',')[0])
        f_R_2 = parseFloat(fiber_dosage.split(',')[1])
        f_R_3 = parseFloat(fiber_dosage.split(',')[2])
        f_R_4 = parseFloat(fiber_dosage.split(',')[3])

        verified_sets = []

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
                            records.push([fiber_dosage, length, width, matix.get_volume()])
                            continue lengthLoop
                        }
                    }
                }
            } //widthLoop end
        } //lengthLoop end

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

        if(verified_sets.length == 0) {
            console.log("no solutions found for following settings:")
            console.log("height:",height, "depth:",depth)
            console.log("column_length:",column_length, "column_width:",column_width)
            console.log("ec_vl_length:",ec_vl_length, "ec_vl_width:",ec_vl_width)
            console.log("vl_external:",vl_external)
            console.log("hl_length:",hl_length, "hl_width:",hl_width)
            console.log("m_length:",m_length, "m_width:",m_width)
            continue fiber_dosageLoop
        }

        // verified_sets = [height, length, width, opt_volume]
        opt_length = verified_sets[opt_index][0]
        opt_width = verified_sets[opt_index][1]
        opt_volume = verified_sets[opt_index][2]


    }

    fiber_dosage_time = (Date.now() - start_time) / 1000
    console.log("fiber_dosage loop time: ", fiber_dosage_time)
    console.log(records)
        

    csvCoordWriter  = createCsvWriter({
        header: ['fiber_dosage', 'opt_length', 'opt_width', 'volume'],
        path: './matrices/td_fiber_dosage.csv'
    })

    csvCoordWriter.writeRecords(records).then(() => {
        console.log('...td_fiber_dosage.csv created')
    });
        
}


threedee()






