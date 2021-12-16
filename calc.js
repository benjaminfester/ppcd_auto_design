// load formulas from mathematix.js
const matix = require('./mathematix')

//set input variables
lmd_known = undefined
dimension_known = undefined
point_foundation_shape = 'rectangular'
length = 1500
width = 1800
radius = 0
height = 650
height_p_hor = height
depth = 900
column_shape = 'rectangular'
column_length = 150
column_width = 250
column_radius = 0
ec_vl_length = 100
ec_vl_width = -250
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
vl_external = 150
terrain_live_load = 0
hl_length = 10
hl_width = 20
m_length = -5
m_width = 15
concrete_type = 25
concrete_density = 24
fabrication_method = 'in_situ'
include_fiber = 'on'
fiber_dosage = '1.8,1.9,2.1,2,4'
include_steel = undefined

//set calculated variables
volume = matix.get_volume(point_foundation_shape, length, width, radius, height)
q = matix.get_q(depth, ground_density)
g = matix.get_g(ground_density, depth, height)
af_pc = matix.get_af_pc()
dr_st_af_d = matix.get_dr_st_af_d(dr_st_af_k, af_pc)
dr_lt_af_d = matix.get_dr_lt_af_d(dr_lt_af_k, af_pc)
ud_st_af_d = matix.get_ud_st_af_d(ud_st_af_k, af_pc)
ud_lt_af_d = matix.get_ud_lt_af_d(ud_lt_af_k, af_pc)
dr_cohesion_pc = matix.get_dr_cohesion_pc()
ud_cohesion_pc = matix.get_ud_cohesion_pc()
dr_st_cohesion_d = matix.get_dr_st_cohesion_d(dr_st_cohesion_k, dr_cohesion_pc)
dr_lt_cohesion_d = matix.get_dr_lt_cohesion_d(dr_lt_cohesion_k, dr_cohesion_pc)
ud_st_cohesion_d = matix.get_ud_st_cohesion_d(ud_st_cohesion_k, ud_cohesion_pc)
ud_lt_cohesion_d = matix.get_ud_lt_cohesion_d(ud_lt_cohesion_k, ud_cohesion_pc)
a_d_dr_st = matix.get_a_d_dr_st(fabrication_method, dr_st_cohesion_d)
a_d_dr_lt = matix.get_a_d_dr_lt(fabrication_method, dr_lt_cohesion_d)
d_c = matix.get_d_c()
d_q = matix.get_d_q()
K_g_a_dr_st = matix.get_K_g_a_dr_st(dr_st_af_d)
K_g_a_dr_lt = matix.get_K_g_a_dr_lt(dr_lt_af_d)
K_g_a_ud_st = matix.get_K_g_a_ud_st(ud_st_af_d)
K_g_a_ud_lt = matix.get_K_g_a_ud_lt(ud_lt_af_d)
K_p_a_dr_st = K_g_a_dr_st
K_p_a_dr_lt = K_g_a_dr_lt
K_p_a_ud_st = K_g_a_ud_st
K_p_a_ud_lt = K_g_a_ud_lt
K_c_a_dr_st = matix.get_K_c_a_dr_st(dr_st_af_d)
K_c_a_dr_lt = matix.get_K_c_a_dr_lt(dr_lt_af_d)
K_c_a_ud_st = matix.get_K_c_a_ud_st(ud_st_af_d)
K_c_a_ud_lt = matix.get_K_c_a_ud_lt(ud_lt_af_d)
K_g_p_dr_st = matix.get_K_g_p_dr_st(dr_st_af_d)
K_g_p_dr_lt = matix.get_K_g_p_dr_lt(dr_lt_af_d)
K_g_p_ud_st = matix.get_K_g_p_ud_st(ud_st_af_d)
K_g_p_ud_lt = matix.get_K_g_p_ud_lt(ud_lt_af_d)
K_p_p_dr_st = K_g_p_dr_st
K_p_p_dr_lt = K_g_p_dr_lt
K_p_p_ud_st = K_g_p_ud_st
K_p_p_ud_lt = K_g_p_ud_lt
K_c_p_dr_st = matix.get_K_c_p_dr_st(dr_st_af_d)
K_c_p_dr_lt = matix.get_K_c_p_dr_lt(dr_lt_af_d)
K_c_p_ud_st = matix.get_K_c_p_ud_st(ud_st_af_d)
K_c_p_ud_lt = matix.get_K_c_p_ud_lt(ud_lt_af_d)
self_weight = matix.get_self_weight(volume, concrete_density)
ground_area = matix.get_ground_area(depth, height, column_shape, volume, column_length, column_width, column_radius)
ground_weight = matix.get_ground_weight(ground_area, g)
vl_total_dr_st = matix.get_vl_total_dr_st(self_weight, ground_weight, vl_external) 
vl_total_dr_lt = matix.get_vl_total_dr_lt(self_weight, ground_weight, vl_external)
vl_total_ud_st = matix.get_vl_total_ud_st(self_weight, ground_weight, vl_external)
vl_total_ud_lt = matix.get_vl_total_ud_lt(self_weight, ground_weight, vl_external)
vl_total = matix.get_vl_total(self_weight, ground_weight, vl_external)
vl_dim_total = matix.get_vl_dim_total(vl_external, self_weight)
vl_total_internal = matix.get_vl_total_internal(vl_external, self_weight)
vl_total_max = matix.get_vl_total_max(vl_total_dr_st, vl_total_dr_lt, vl_total_ud_st, vl_total_ud_lt)
hl_total = matix.get_hl_total(hl_length, hl_width)
d_0_dr_st = matix.get_d_0_dr_st(K_c_a_dr_st, dr_st_cohesion_d, K_p_a_dr_st, terrain_live_load, ground_density, K_g_a_dr_st)
d_0_dr_lt = matix.get_d_0_dr_lt(K_c_a_dr_lt, dr_lt_cohesion_d, K_p_a_dr_lt, terrain_live_load, ground_density, K_g_a_dr_lt)
d_0_ud_st = matix.get_d_0_ud_st(K_c_a_ud_st, ud_st_cohesion_d, K_p_a_ud_st, terrain_live_load, ground_density, K_g_a_ud_st)
d_0_ud_lt = matix.get_d_0_ud_lt(K_c_a_ud_lt, ud_lt_cohesion_d, K_p_a_ud_lt, terrain_live_load, ground_density, K_g_a_ud_lt)
F_a_dr_st_l = matix.get_F_a_dr_st_l(d_0_dr_st, depth, height, width, K_c_a_dr_st, dr_st_cohesion_d, K_p_a_dr_st, terrain_live_load, ground_density, K_g_a_dr_st)
F_a_dr_lt_l = matix.get_F_a_dr_lt_l(d_0_dr_lt, depth, height, width, K_c_a_dr_lt, dr_lt_cohesion_d, K_p_a_dr_lt, terrain_live_load, ground_density, K_g_a_dr_lt)
F_a_ud_st_l = matix.get_F_a_ud_st_l(d_0_ud_st, depth, height, width, K_c_a_ud_st, ud_st_cohesion_d, K_p_a_ud_st, terrain_live_load, ground_density, K_g_a_ud_st)
F_a_ud_lt_l = matix.get_F_a_ud_lt_l(d_0_ud_lt, depth, height, width, K_c_a_ud_lt, ud_lt_cohesion_d, K_p_a_ud_lt, terrain_live_load, ground_density, K_g_a_ud_lt)
F_p_dr_st_l = matix.get_F_p_dr_st_l(height, depth, width, K_c_p_dr_st, dr_st_cohesion_d, ground_density, K_g_p_dr_st)
F_p_dr_lt_l = matix.get_F_p_dr_lt_l(height, depth, width, K_c_p_dr_lt, dr_lt_cohesion_d, ground_density, K_g_p_dr_lt)
F_p_ud_st_l = matix.get_F_p_ud_st_l(height, depth, width, K_c_p_ud_st, ud_st_cohesion_d, ground_density, K_g_p_ud_st)
F_p_ud_lt_l = matix.get_F_p_ud_lt_l(height, depth, width, K_c_p_ud_lt, ud_lt_cohesion_d, ground_density, K_g_p_ud_lt)
F_a_dr_st_b = matix.get_F_a_dr_st_b(d_0_dr_st, depth, height, length, K_c_a_dr_st, dr_st_cohesion_d, K_p_a_dr_st, terrain_live_load, ground_density, K_g_a_dr_st)
F_a_dr_lt_b = matix.get_F_a_dr_lt_b(d_0_dr_lt, depth, height, length, K_c_a_dr_lt, dr_lt_cohesion_d, K_p_a_dr_lt, terrain_live_load, ground_density, K_g_a_dr_lt)
F_a_ud_st_b = matix.get_F_a_ud_st_b(d_0_ud_st, depth, height, length, K_c_a_ud_st, ud_st_cohesion_d, K_p_a_ud_st, terrain_live_load, ground_density, K_g_a_ud_st)
F_a_ud_lt_b = matix.get_F_a_ud_lt_b(d_0_ud_lt, depth, height, length, K_c_a_ud_lt, ud_lt_cohesion_d, K_p_a_ud_lt, terrain_live_load, ground_density, K_g_a_ud_lt)
F_p_dr_st_b = matix.get_F_p_dr_st_b(height, depth, length, K_c_p_dr_st, dr_st_cohesion_d, ground_density, K_g_p_dr_st)
F_p_dr_lt_b = matix.get_F_p_dr_lt_b(height, depth, length, K_c_p_dr_lt, dr_lt_cohesion_d, ground_density, K_g_p_dr_lt)
F_p_ud_st_b = matix.get_F_p_ud_st_b(height, depth, length, K_c_p_ud_st, ud_st_cohesion_d, ground_density, K_g_p_ud_st)
F_p_ud_lt_b = matix.get_F_p_ud_lt_b(height, depth, length, K_c_p_ud_lt, ud_lt_cohesion_d, ground_density, K_g_p_ud_lt)
F_a_dr_st_r = matix.get_F_a_dr_st_r(d_0_dr_st, depth, height, radius, K_c_a_dr_st, dr_st_cohesion_d, K_p_a_dr_st, terrain_live_load, ground_density, K_g_a_dr_st)
F_a_dr_lt_r = matix.get_F_a_dr_lt_r(d_0_dr_lt, depth, height, radius, K_c_a_dr_lt, dr_lt_cohesion_d, K_p_a_dr_lt, terrain_live_load, ground_density, K_g_a_dr_lt)
F_a_ud_st_r = matix.get_F_a_ud_st_r(d_0_ud_st, depth, height, radius, K_c_a_ud_st, ud_st_cohesion_d, K_p_a_ud_st, terrain_live_load, ground_density, K_g_a_ud_st)
F_a_ud_lt_r = matix.get_F_a_ud_lt_r(d_0_ud_lt, depth, height, radius, K_c_a_ud_lt, ud_lt_cohesion_d, K_p_a_ud_lt, terrain_live_load, ground_density, K_g_a_ud_lt)
F_p_dr_st_r = matix.get_F_p_dr_st_r(height, depth, radius, K_c_p_dr_st, dr_st_cohesion_d, ground_density, K_g_p_dr_st)
F_p_dr_lt_r = matix.get_F_p_dr_lt_r(height, depth, radius, K_c_p_dr_lt, dr_lt_cohesion_d, ground_density, K_g_p_dr_lt)
F_p_ud_st_r = matix.get_F_p_ud_st_r(height, depth, radius, K_c_p_ud_st, ud_st_cohesion_d, ground_density, K_g_p_ud_st)
F_p_ud_lt_r = matix.get_F_p_ud_lt_r(height, depth, radius, K_c_p_ud_lt, ud_lt_cohesion_d, ground_density, K_g_p_ud_lt)
h_res_dr_st_l = matix.get_h_res_dr_st_l(F_p_dr_st_l, hl_length, F_a_dr_st_l)
h_res_dr_lt_l = matix.get_h_res_dr_lt_l(F_p_dr_lt_l, hl_length, F_a_dr_lt_l)
h_res_ud_st_l = matix.get_h_res_ud_st_l(F_p_ud_st_l, hl_length, F_a_ud_st_l)
h_res_ud_lt_l = matix.get_h_res_ud_lt_l(F_p_ud_lt_l, hl_length, F_a_ud_lt_l)
h_res_dr_st_b = matix.get_h_res_dr_st_b(F_p_dr_st_b, hl_width, F_a_dr_st_b)
h_res_dr_lt_b = matix.get_h_res_dr_lt_b(F_p_dr_lt_b, hl_width, F_a_dr_lt_b)
h_res_ud_st_b = matix.get_h_res_ud_st_b(F_p_ud_st_b, hl_width, F_a_ud_st_b)
h_res_ud_lt_b = matix.get_h_res_ud_lt_b(F_p_ud_lt_b, hl_width, F_a_ud_lt_b)
h_res_dr_st_rl = matix.get_h_res_dr_st_rl(F_p_dr_st_r, hl_length, F_a_dr_st_r)
h_res_dr_lt_rl = matix.get_h_res_dr_lt_rl(F_p_dr_lt_r, hl_length, F_a_dr_lt_r)
h_res_ud_st_rl = matix.get_h_res_ud_st_rl(F_p_ud_st_r, hl_length, F_a_ud_st_r)
h_res_ud_lt_rl = matix.get_h_res_ud_lt_rl(F_p_ud_lt_r, hl_length, F_a_ud_lt_r)
h_res_dr_st_rb = matix.get_h_res_dr_st_rb(F_p_dr_st_r, hl_width, F_a_dr_st_r)
h_res_dr_lt_rb = matix.get_h_res_dr_lt_rb(F_p_dr_lt_r, hl_width, F_a_dr_lt_r)
h_res_ud_st_rb = matix.get_h_res_ud_st_rb(F_p_ud_st_r, hl_width, F_a_ud_st_r)
h_res_ud_lt_rb = matix.get_h_res_ud_lt_rb(F_p_ud_lt_r, hl_width, F_a_ud_lt_r)
H_res_dr_st = matix.get_H_res_dr_st(point_foundation_shape, h_res_dr_st_l, h_res_dr_st_b,h_res_dr_st_rl,h_res_dr_st_rb)
H_res_dr_lt = matix.get_H_res_dr_lt(point_foundation_shape, h_res_dr_lt_l, h_res_dr_lt_b, h_res_dr_lt_rl, h_res_dr_lt_rb)
H_res_ud_st = matix.get_H_res_ud_st(point_foundation_shape, h_res_ud_st_l, h_res_ud_st_b, h_res_ud_st_rl, h_res_ud_st_rb)
H_res_ud_lt = matix.get_H_res_ud_lt(point_foundation_shape, h_res_ud_lt_l, h_res_ud_lt_b, h_res_ud_lt_rl, h_res_ud_lt_rb)
H_res_both = matix.get_H_res_both(H_res_dr_st, H_res_dr_lt, H_res_ud_st, H_res_ud_lt)
h_cg_a_dr_st = matix.get_h_cg_a_dr_st(d_0_dr_st, depth, height, K_c_a_dr_st, dr_st_cohesion_d, K_p_a_dr_st, terrain_live_load, ground_density, K_g_a_dr_st)
h_cg_a_dr_lt = matix.get_h_cg_a_dr_lt(d_0_dr_lt, depth, height, K_c_a_dr_lt, dr_lt_cohesion_d, K_p_a_dr_lt, terrain_live_load, ground_density, K_g_a_dr_lt)
h_cg_a_ud_st = matix.get_h_cg_a_ud_st(d_0_ud_st, depth, height, K_c_a_ud_st, ud_st_cohesion_d, K_p_a_ud_st, terrain_live_load, ground_density, K_g_a_ud_st)
h_cg_a_ud_lt = matix.get_h_cg_a_ud_lt(d_0_ud_lt, depth, height, K_c_a_ud_lt, ud_lt_cohesion_d, K_p_a_ud_lt, terrain_live_load, ground_density, K_g_a_ud_lt)
h_cg_p_dr_st = matix.get_h_cg_p_dr_st(depth, height, K_c_p_dr_st, dr_st_cohesion_d, K_p_p_dr_st, terrain_live_load, ground_density, K_g_p_dr_st)
h_cg_p_dr_lt = matix.get_h_cg_p_dr_lt(depth, height, K_c_p_dr_lt, dr_lt_cohesion_d, K_p_p_dr_lt, terrain_live_load, ground_density, K_g_p_dr_lt)
h_cg_p_ud_st = matix.get_h_cg_p_ud_st(depth, height, K_c_p_ud_st, ud_st_cohesion_d, K_p_p_ud_st, terrain_live_load, ground_density, K_g_p_ud_st)
h_cg_p_ud_lt = matix.get_h_cg_p_ud_lt(depth, height, K_c_p_ud_lt, ud_lt_cohesion_d, K_p_p_ud_lt, terrain_live_load, ground_density, K_g_p_ud_lt)
m_h_length = matix.get_m_h_length(height_p_hor, hl_length)
m_h_width = matix.get_m_h_width(height_p_hor, hl_width)
m_h_r = matix.get_m_h_r(height_p_hor, hl_total)
m_v_dr_st_length = matix.get_m_v_dr_st_length(vl_external, ec_vl_length)
m_v_dr_lt_length = matix.get_m_v_dr_lt_length(vl_external, ec_vl_length)
m_v_ud_st_length = matix.get_m_v_ud_st_length(vl_external, ec_vl_length)
m_v_ud_lt_length = matix.get_m_v_ud_lt_length(vl_external, ec_vl_length)
m_v_dim_length = matix.get_m_v_dim_length(vl_external, ec_vl_length)
m_v_dr_st_width = matix.get_m_v_dr_st_width(vl_external, ec_vl_width)
m_v_dr_lt_width = matix.get_m_v_dr_lt_width(vl_external, ec_vl_width)
m_v_ud_st_width = matix.get_m_v_ud_st_width(vl_external, ec_vl_width)
m_v_ud_lt_width = matix.get_m_v_ud_lt_width(vl_external, ec_vl_width)
m_v_dim_width = matix.get_m_v_dim_width(vl_external, ec_vl_width)
m_F_a_dr_st_l = matix.get_m_F_a_dr_st_l(h_cg_a_dr_st, F_a_dr_st_l)
m_F_a_dr_lt_l = matix.get_m_F_a_dr_lt_l(h_cg_a_dr_lt, F_a_dr_lt_l)
m_F_a_ud_st_l = matix.get_m_F_a_ud_st_l(h_cg_a_ud_st, F_a_ud_st_l)
m_F_a_ud_lt_l = matix.get_m_F_a_ud_lt_l(h_cg_a_ud_lt, F_a_ud_lt_l)
m_F_p_dr_st_l = matix.get_m_F_p_dr_st_l(h_cg_p_dr_st, F_p_dr_st_l)
m_F_p_dr_lt_l = matix.get_m_F_p_dr_lt_l(h_cg_p_dr_lt, F_p_dr_lt_l)
m_F_p_ud_st_l = matix.get_m_F_p_ud_st_l(h_cg_p_ud_st, F_p_ud_st_l)
m_F_p_ud_lt_l = matix.get_m_F_p_ud_lt_l(h_cg_p_ud_lt, F_p_ud_lt_l)
m_F_a_dr_st_b = matix.get_m_F_a_dr_st_b(h_cg_a_dr_st, F_a_dr_st_b)
m_F_a_dr_lt_b = matix.get_m_F_a_dr_lt_b(h_cg_a_dr_lt, F_a_dr_lt_b)
m_F_a_ud_st_b = matix.get_m_F_a_ud_st_b(h_cg_a_ud_st, F_a_ud_st_b)
m_F_a_ud_lt_b = matix.get_m_F_a_ud_lt_b(h_cg_a_ud_lt, F_a_ud_lt_b)
m_F_p_dr_st_b = matix.get_m_F_p_dr_st_b(h_cg_p_dr_st, F_p_dr_st_b)
m_F_p_dr_lt_b = matix.get_m_F_p_dr_lt_b(h_cg_p_dr_lt, F_p_dr_lt_b)
m_F_p_ud_st_b = matix.get_m_F_p_ud_st_b(h_cg_p_ud_st, F_p_ud_st_b)
m_F_p_ud_lt_b = matix.get_m_F_p_ud_lt_b(h_cg_p_ud_lt, F_p_ud_lt_b)
m_F_a_dr_st_r = matix.get_m_F_a_dr_st_r(h_cg_a_dr_st, F_a_dr_st_r)
m_F_a_dr_lt_r = matix.get_m_F_a_dr_lt_r(h_cg_a_dr_lt, F_a_dr_lt_r)
m_F_a_ud_st_r = matix.get_m_F_a_ud_st_r(h_cg_a_ud_st, F_a_ud_st_r)
m_F_a_ud_lt_r = matix.get_m_F_a_ud_lt_r(h_cg_a_ud_lt, F_a_ud_lt_r)
m_F_p_dr_st_r = matix.get_m_F_p_dr_st_r(h_cg_p_dr_st, F_p_dr_st_r)
m_F_p_dr_lt_r = matix.get_m_F_p_dr_lt_r(h_cg_p_dr_lt, F_p_dr_lt_r)
m_F_p_ud_st_r = matix.get_m_F_p_ud_st_r(h_cg_p_ud_st, F_p_ud_st_r)
m_F_p_ud_lt_r = matix.get_m_F_p_ud_lt_r(h_cg_p_ud_lt, F_p_ud_lt_r)
m_r = matix.get_m_r(m_length, m_width)
m_total_dr_st_l = matix.get_m_total_dr_st_l(m_F_p_dr_st_l, m_h_length, m_v_dr_st_length, m_length, m_F_a_dr_st_l)
m_total_dr_lt_l = matix.get_m_total_dr_lt_l(m_F_p_dr_lt_l, m_h_length, m_v_dr_lt_length, m_length, m_F_a_dr_lt_l)
m_total_ud_st_l = matix.get_m_total_ud_st_l(m_F_p_ud_st_l, m_h_length, m_v_ud_st_length, m_length, m_F_a_ud_st_l)
m_total_ud_lt_l = matix.get_m_total_ud_lt_l(m_F_p_ud_lt_l, m_h_length, m_v_ud_lt_length, m_length, m_F_a_ud_lt_l)
m_total_dr_st_b = matix.get_m_total_dr_st_b(m_F_p_dr_st_b, m_h_width, m_v_dr_st_width, m_width, m_F_a_dr_st_b)
m_total_dr_lt_b = matix.get_m_total_dr_lt_b(m_F_p_dr_lt_b, m_h_width, m_v_dr_lt_width, m_width, m_F_a_dr_lt_b)
m_total_ud_st_b = matix.get_m_total_ud_st_b(m_F_p_ud_st_b, m_h_width, m_v_ud_st_width, m_width, m_F_a_ud_st_b)
m_total_ud_lt_b = matix.get_m_total_ud_lt_b(m_F_p_ud_lt_b, m_h_width, m_v_ud_lt_width, m_width, m_F_a_ud_lt_b)
m_total_dr_st_rl = matix.get_m_total_dr_st_rl(m_F_p_dr_st_r, m_h_length, m_v_dr_st_length, m_length, m_F_a_dr_st_r)
m_total_dr_lt_rl = matix.get_m_total_dr_lt_rl(m_F_p_dr_lt_r, m_h_length, m_v_dr_lt_length, m_length, m_F_a_dr_lt_r)
m_total_ud_st_rl = matix.get_m_total_ud_st_rl(m_F_p_ud_st_r, m_h_length, m_v_ud_st_length, m_length, m_F_a_ud_st_r)
m_total_ud_lt_rl = matix.get_m_total_ud_lt_rl(m_F_p_ud_lt_r, m_h_length, m_v_ud_lt_length, m_length, m_F_a_ud_lt_r)
m_total_dr_st_rb = matix.get_m_total_dr_st_rb(m_F_p_dr_st_r, m_h_width, m_v_dr_st_width, m_width, m_F_a_dr_st_r)
m_total_dr_lt_rb = matix.get_m_total_dr_lt_rb(m_F_p_dr_lt_r, m_h_width, m_v_dr_lt_width, m_width, m_F_a_dr_lt_r)
m_total_ud_st_rb = matix.get_m_total_ud_st_rb(m_F_p_ud_st_r, m_h_width, m_v_ud_st_width, m_width, m_F_a_ud_st_r)
m_total_ud_lt_rb = matix.get_m_total_ud_lt_rb(m_F_p_ud_lt_r, m_h_width, m_v_ud_lt_width, m_width, m_F_a_ud_lt_r)








console.log(m_total_dr_st_rl)







































































