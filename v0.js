const matix = require('./mathematix')
const createCsvWriter = require('csv-writer').createArrayCsvWriter
const vars = require('./input_variables.js')

//set input variables
lmd_known = vars.lmd_known
dimensions_known = vars.dimensions_known
point_foundation_shape = vars.point_foundation_shape
gamma_c = vars.gamma_c
gamma_s = vars.gamma_s
f_R_1 = vars.f_R_1
f_R_2 = vars.f_R_2
f_R_3 = vars.f_R_3
f_R_4 = vars.f_R_4
radius = vars.radius
height = vars.height
height_p_hor = vars.height_p_hor
depth = vars.depth
column_shape = vars.column_shape
column_length = vars.column_length
column_width = vars.column_width
column_radius = vars.column_radius
ec_vl_length = vars.ec_vl_length
ec_vl_width = vars.ec_vl_width
geo_known = vars.geo_known
ground_density = vars.ground_density
dr_st_af_k = vars.dr_st_af_k
dr_lt_af_k = vars.dr_lt_af_k
ud_st_af_k = vars.ud_st_af_k
ud_lt_af_k = vars.ud_lt_af_k
dr_st_cohesion_k = vars.dr_st_cohesion_k
dr_lt_cohesion_k = vars.dr_lt_cohesion_k
ud_st_cohesion_k = vars.ud_st_cohesion_k
ud_lt_cohesion_k = vars.ud_lt_cohesion_k
ground_type = vars.ground_type

//loads
vl_external = vars.vl_external
terrain_live_load = vars.terrain_live_load
hl_length = vars.hl_length
hl_width = vars.hl_width
m_length = vars.m_length
m_width = vars.m_width

concrete_type = vars.concrete_type
f_ck = vars.f_ck
f_yk = vars.f_yk
A_s = vars.A_s
cover_layer = vars.cover_layer
concrete_density = vars.concrete_density
fabrication_method = vars.fabrication_method
include_fiber = vars.include_fiber
fiber_dosage = vars.fiber_dosage
include_steel = vars.include_steel

check_until = vars.check_until
length_min = matix.get_length_min()
width_min = matix.get_width_min()
lengths = matix.range(length_min, check_until)

//end input values


const v0_matrix = []
const header = [null]
const volume_values = []
const length_values = []
const width_values = []


for(i = 0; i < lengths.length; i++) {

    length = lengths[i]
    v0_matrix.push([length])
    width_max = length * 7
    widths = matix.range(width_min, check_until)

    for(j = 0; j < widths.length; j++) {
        width = widths[j]
        if(!header.includes(width)) { header.push(width) }

        if(matix.verification0() === 0) {
            v0_matrix[i].push(0)
            continue
        } else {
            v0_matrix[i].push(matix.get_volume())
            volume_values.push(matix.get_volume())
            length_values.push(length)
            width_values.push(width)
        }
    }
}

//print optimal values
matix.get_dimensions(volume_values, length_values, width_values)

const csvWriter = createCsvWriter({
    header: header,
    path: './matrices/ex3/ex3_v0_matrix.csv'
})

csvWriter.writeRecords(v0_matrix)
    .then(() => {
        console.log('...loops completed and csv file updated!');
    });
    

