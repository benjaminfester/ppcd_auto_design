const matix = require('./mathematix')
const veri = require('./verified')
const createCsvWriter  = require('csv-writer').createArrayCsvWriter
const { v4: uuidv4 } = require('uuid')

national_annex = 'Denmark'
lmd_known = undefined
dimensions_known = undefined
gamma_c = (national_annex === 'Denmark') ? 1.45 : 1.5
gamma_s = (national_annex === 'Denmark') ? 1.2 : 1.15
f_R_1 = 1.8
f_R_2 = 1.9
f_R_3 = 2.1
f_R_4 = 2
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
fiber_dosage = '1.8,1.9,2.1,2,4'
include_steel = undefined

end = 8000
big_step = 400
small_step = 50
lengths = matix.range(0, small_step, end)
widths = matix.range(0, small_step, end)
widths_big_steps = matix.range(0, big_step, end)
widths_small_steps = matix.range(0, small_step, end)

const n = 200

findVolumes = () => {

    console.time('rand_loop')

    randLoop:
    for(r = 0; r < n; r++) {

        //randomize following values
        height = matix.randomIntInSteps(200, 200, 1200)
        height_p_hor = height
        depth = matix.randomIntInSteps(0, 200, 1200)
        column_length = matix.randomIntInSteps(100, 100, 400)
        column_width = matix.randomIntInSteps(100, 100, 400)
        ec_vl_length = matix.randomIntInSteps(0, 100, 300)
        ec_vl_width = matix.randomIntInSteps(0, 100, 300)
        vl_external = matix.randomIntInStepsNotZero(-60, 20, 200)
        hl_length = matix.randomIntInSteps(0, 5, 20)
        hl_width = matix.randomIntInSteps(0, 5, 20)
        m_length = matix.randomIntInSteps(0, 5, 10)
        m_width = matix.randomIntInSteps(0, 5, 10)

        // [length, width, volume]
        verified_sets = []

        console.time('length_loop')
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
        } //lengthLoop end

        
        console.timeEnd('length_loop')
        console.log('------------------------------------------------------------------')

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
            continue randLoop
        }
    
        opt_length = verified_sets[opt_index][0]
        opt_width = verified_sets[opt_index][1]
        opt_volume = verified_sets[opt_index][2]
        
        console.log("opt_length:",opt_length, "opt_width:",opt_width)
    
        console.log("opt_volume:",opt_volume)
        console.log("height:",height, "depth:",depth)
        console.log("column_length:",column_length, "column_width:",column_width)
        console.log("ec_vl_length:",ec_vl_length, "ec_vl_width:",ec_vl_width)
        console.log("vl_external:",vl_external)
        console.log("hl_length:",hl_length, "hl_width:",hl_width)
        console.log("m_length:",m_length, "m_width:",m_width)

        // write to volumes3.csv
        const records = [
            [uuidv4(), national_annex, lmd_known, dimensions_known, point_foundation_shape, gamma_c, gamma_s, f_R_1, f_R_2, f_R_3, f_R_4, radius, height, height_p_hor, depth, column_shape, column_length, column_width, column_radius, ec_vl_length, ec_vl_width, geo_known, ground_type, ground_density, dr_st_af_k, dr_lt_af_k, ud_st_af_k, ud_lt_af_k, dr_st_cohesion_k, dr_lt_cohesion_k, ud_st_cohesion_k, ud_lt_cohesion_k, vl_external, terrain_live_load, hl_length, hl_width, m_length, m_width, internal_moment, concrete_type, f_ck, f_yk, A_s, concrete_density, fabrication_method, include_fiber, fiber_dosage, include_steel, steel_quality, steel_mesh_type, cover_layer, opt_length, opt_width, opt_volume],
        ]
        
        // write to volumes3.csv
        csvVolumeWriter  = createCsvWriter({
            header: ['id', 'national_annex', 'lmd_known', 'dimensions_known', 'point_foundation_shape', 'gamma_c', 'gamma_s', 'f_R_1', 'f_R_2', 'f_R_3', 'f_R_4', 'radius', 'height', 'height_p_hor', 'depth', 'column_shape', 'column_length', 'column_width', 'column_radius', 'ec_vl_length', 'ec_vl_width', 'geo_known', 'ground_type', 'ground_density', 'dr_st_af_k', 'dr_lt_af_k', 'ud_st_af_k', 'ud_lt_af_k', 'dr_st_cohesion_k', 'dr_lt_cohesion_k', 'ud_st_cohesion_k', 'ud_lt_cohesion_k', 'vl_external', 'terrain_live_load', 'hl_length', 'hl_width', 'm_length', 'm_width', 'internal_moment', 'concrete_type', 'f_ck', 'f_yk', 'A_s', 'concrete_density', 'fabrication_method', 'include_fiber', 'fiber_dosage', 'include_steel', 'steel_quality', 'steel_mesh_type', 'cover_layer', 'opt_length', 'opt_width', 'opt_volume'],
            path: './matrices/volumes3.csv',
            // if first entry, comment out "append: true"
            append: true,
        })
        
        csvVolumeWriter.writeRecords(records)
            .then(() => {
                // console.log('...appended to volumes3.csv')
            });

    
            
        
        
    } //randLoop end


    console.timeEnd('rand_loop')
    console.log(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
    
}

findVolumes()

