//set input variables

//LOCK FOR DENMARK
national_annex = 'Denmark'
module.exports.national_annex = national_annex

//LOCK THIS TO KEEP DOING VERIFICATIONS 4A, 4B, 5, 6 AND 7
lmd_known = undefined
module.exports.lmd_known = lmd_known

//LOCK THIS TO KEEP DOING VERIFICATIONS 4A, 4B, 5, 6 AND 7
dimensions_known = undefined
module.exports.dimensions_known = dimensions_known

//LOCK THIS TO BE ABLE TO DO LOOP
point_foundation_shape = 'rectangular'
module.exports.point_foundation_shape = point_foundation_shape

gamma_c = (national_annex === 'Denmark') ? 1.45 : 1.5
module.exports.gamma_c = gamma_c

gamma_s = (national_annex === 'Denmark') ? 1.2 : 1.15
module.exports.gamma_s = gamma_s

f_R_1 = 1.8
module.exports.f_R_1 = f_R_1

f_R_2 = 1.9
module.exports.f_R_2 = f_R_2

f_R_3 = 2.1
module.exports.f_R_3 = f_R_3

f_R_4 = 2
module.exports.f_R_4 = f_R_4

//GEOMETRY
radius = 0
module.exports.radius = radius

height = 400
module.exports.height = height

height_p_hor = height
module.exports.height_p_hor = height_p_hor

depth = 200
module.exports.depth = depth

column_length = 200
module.exports.column_length = column_length

column_width = 200
module.exports.column_width = column_width

ec_vl_length = 100
module.exports.ec_vl_length = ec_vl_length

ec_vl_width = 0
module.exports.ec_vl_width = ec_vl_width

vl_external = 140
module.exports.vl_external = vl_external

hl_length = 20
module.exports.hl_length = hl_length

hl_width = 0
module.exports.hl_width = hl_width

m_length = 10
module.exports.m_length = m_length

m_width = 5
module.exports.m_width = m_width

column_shape = 'rectangular'
module.exports.column_shape = column_shape

column_radius = 0
module.exports.column_radius = column_radius

terrain_live_load = 0
module.exports.terrain_live_load = terrain_live_load


//LOADS


internal_moment = 0
module.exports.internal_moment = internal_moment

//geotechnical parameters
geo_known = undefined
module.exports.geo_known = geo_known

ground_density = 18
module.exports.ground_density = ground_density

dr_st_af_k = 33
module.exports.dr_st_af_k = dr_st_af_k

dr_lt_af_k = 33
module.exports.dr_lt_af_k = dr_lt_af_k

ud_st_af_k = 0
module.exports.ud_st_af_k = ud_st_af_k

ud_lt_af_k = 25
module.exports.ud_lt_af_k = ud_lt_af_k

dr_st_cohesion_k = 0
module.exports.dr_st_cohesion_k = dr_st_cohesion_k

dr_lt_cohesion_k = 0
module.exports.dr_lt_cohesion_k = dr_lt_cohesion_k

ud_st_cohesion_k = 80
module.exports.ud_st_cohesion_k = ud_st_cohesion_k

ud_lt_cohesion_k = 8
module.exports.ud_lt_cohesion_k = ud_lt_cohesion_k

//LOCK THIS TO KEEP DOING VERIFICATIONS 4A, 4B, 5, 6 AND 7
ground_type = 'both'
module.exports.ground_type = ground_type

//material properties
concrete_type = 25
module.exports.concrete_type = concrete_type

f_ck = concrete_type
module.exports.f_ck = f_ck

f_yk = 0
module.exports.f_yk = f_yk

A_s = 0
module.exports.A_s = A_s

//reinforcement
steel_quality = 0
module.exports.steel_quality = steel_quality

steel_mesh_type = 0
module.exports.steel_mesh_type = steel_mesh_type

cover_layer = 0
module.exports.cover_layer = cover_layer

concrete_density = 24
module.exports.concrete_density = concrete_density

fabrication_method = 'in_situ'
module.exports.fabrication_method = fabrication_method

include_fiber = 'on'
module.exports.include_fiber = include_fiber

fiber_dosage = '1.8,1.9,2.1,2,4'
module.exports.fiber_dosage = fiber_dosage

include_steel = undefined
module.exports.include_steel = include_steel

//end input values


//loop values
check_until = 8000
module.exports.check_until = check_until