const matix = require('./mathematix')
const veri = require('./verified')

//fixed values
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


// set geometrical values for all n load combinations
height = 600
height_p_hor = height
depth = 600
column_length = 200
column_width = 200
ec_vl_length = 0
ec_vl_width = 0

//simulation of n sets of load combinations
vl_externals = [20, 80, 60]
hl_lengths = [0, 10, 0]
hl_widths = [5, 15, 0]
m_lengths = [0, 10, 5]
m_widths = [0, 10, 5]
load_combinations = zip(vl_externals, hl_lengths, hl_widths, m_lengths, m_widths)

findMinimalVolume = () => {

    // load combination loop
    lcLoop:
    for(lc in load_combinations) {
        vl_external = vl_externals[lc]
        hl_length = hl_lengths[lc]
        hl_width = hl_widths[lc]
        m_length = m_lengths[lc]
        m_width = m_widths[lc]

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
                if(matix.restr_1(width, column_width, ec_vl_width)) continue widthLoop
                if(matix.verification0() === 0) continue widthLoop
                
                if(veri.verifyFromLengthAndWidth()[0]) {
                    startAt = veri.verifyFromLengthAndWidth()[2] - big_step + small_step
                    endAt = veri.verifyFromLengthAndWidth()[2]
                    smallWidths = matix.range(startAt, small_step, endAt)
                    for(s in smallWidths) {
                        width = smallWidths[s]

                        // needed in the calc3.js
                        if(matix.restr_1(width, column_width, ec_vl_width)) continue widthLoop
                        if(matix.verification0() === 0) continue widthLoop
                        
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
            } //widthLoop end
        } //lengthLoop end

        ls = verified_sets.map(function(arr) { return arr[0] })

        ws = verified_sets.map(function(arr) { return arr[1] })

        vs = verified_sets.map(function(arr) { return arr[2]})

        opt_index = vs.indexOf(Math.min(...vs))

        if(verified_sets.length == 0) {
            console.log("no solutions found for following settings:")
            console.log("height:",height, "depth:",depth)
            console.log("column_length:",column_length, "column_width:",column_width)
            console.log("ec_vl_length:",ec_vl_length, "ec_vl_width:",ec_vl_width)
            console.log("vl_external:",vl_external)
            console.log("hl_length:",hl_length, "hl_width:",hl_width)
            console.log("m_length:",m_length, "m_width:",m_width)
            continue lcLoop
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

       console.log("---------------LC DONE---------------")

   }

}

findMinimalVolume()



//python's zip function
function zip() {
    var args = [].slice.call(arguments);
    var shortest = args.length==0 ? [] : args.reduce(function(a,b){
        return a.length<b.length ? a : b
    });

    return shortest.map(function(_,i){
        return args.map(function(array){return array[i]})
    });
}