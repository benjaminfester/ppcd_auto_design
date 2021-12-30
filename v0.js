const matix = require('./mathematix')
const createCsvWriter = require('csv-writer').createArrayCsvWriter

//set input variables
lmd_known = undefined
dimensions_known = undefined
point_foundation_shape = 'rectangular'
gamma_c = 1.5
gamma_s = 1.2
f_R_1 = 1.8
f_R_2 = 1.9
f_R_3 = 2.1
f_R_4 = 2
radius = 100
height = 650
height_p_hor = height
depth = 900
column_shape = 'rectangular'
column_length = 150
column_width = 150
column_radius = 0
ec_vl_length = 100
ec_vl_width = 100
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

//loads
vl_external = 150
terrain_live_load = 0
hl_length = 20
hl_width = 20
m_length = 0
m_width = 0

concrete_type = 25
f_ck = concrete_type
f_yk = 0
A_s = 0
cover_layer = 0
concrete_density = 24
fabrication_method = 'in_situ'
include_fiber = 'on'
fiber_dosage = '1.8,1.9,2.1,2,4'
include_steel = undefined

length_min = Math.max((column_length), (2 * Math.abs(ec_vl_length)), (2 * (column_length / 2 + Math.abs(ec_vl_length))))
width_min = Math.max((column_width), (2 * Math.abs(ec_vl_width)), (2 * (column_width / 2 + Math.abs(ec_vl_width))))
lengths = matix.range(length_min, 8000)

const v0_matrix = []
const header = [null]

const geo_invalid = []

for(i = 0; i < lengths.length; i++) {

    length = lengths[i]
    v0_matrix.push([length])
    width_max = length * 7

    widths = matix.range(width_min, 8000)

    for(j = 0; j < widths.length; j++) {
        width = widths[j]
        if(!header.includes(width)) { header.push(width) }
        v0_matrix[i].push(matix.verification0())
        if(matix.verification0() === 0) {
            geo_invalid.push([length, width])
            continue
        }
    }
}

const csvWriter = createCsvWriter({
    header: header,
    path: './matrices/v0_matrix.csv'
})

csvWriter.writeRecords(v0_matrix)
    .then(() => {
        console.log('...loops completed and csv file updated!');
    });