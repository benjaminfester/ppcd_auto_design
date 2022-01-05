const matix = require('./mathematix')
const createCsvWriter = require('csv-writer').createArrayCsvWriter
const vars = require('./input_variables.js');

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

const v4b_matrix = []
const header = [null]
const volume_values = []
const length_values = []
const width_values = []

for(i = 0; i < lengths.length; i++) {

    length = lengths[i]
    v4b_matrix.push([length])
    width_max = length * 7
    widths = matix.range(width_min, check_until)

    for(j = 0; j < widths.length; j++) {

        width = widths[j]
        if(!header.includes(width)) { header.push(width) }

        if(matix.verification0() === 0) {
            v4b_matrix[i].push(0)
            continue
        }
    
        //set calculated variables
        volume = matix.get_volume()
        q = matix.get_q()
        g = matix.get_g()
        af_pc = matix.get_af_pc()
        dr_st_af_d = matix.get_dr_st_af_d()
        dr_lt_af_d = matix.get_dr_lt_af_d()
        ud_st_af_d = matix.get_ud_st_af_d()
        ud_lt_af_d = matix.get_ud_lt_af_d()
        dr_cohesion_pc = matix.get_dr_cohesion_pc()
        ud_cohesion_pc = matix.get_ud_cohesion_pc()
        dr_st_cohesion_d = matix.get_dr_st_cohesion_d()
        dr_lt_cohesion_d = matix.get_dr_lt_cohesion_d()
        ud_st_cohesion_d = matix.get_ud_st_cohesion_d()
        ud_lt_cohesion_d = matix.get_ud_lt_cohesion_d()
        a_d_dr_st = matix.get_a_d_dr_st()
        a_d_dr_lt = matix.get_a_d_dr_lt()
        d_c = matix.get_d_c()
        d_q = matix.get_d_q()
        K_g_a_dr_st = matix.get_K_g_a_dr_st()
        K_g_a_dr_lt = matix.get_K_g_a_dr_lt()
        K_g_a_ud_st = matix.get_K_g_a_ud_st()
        K_g_a_ud_lt = matix.get_K_g_a_ud_lt()
        K_p_a_dr_st = K_g_a_dr_st
        K_p_a_dr_lt = K_g_a_dr_lt
        K_p_a_ud_st = K_g_a_ud_st
        K_p_a_ud_lt = K_g_a_ud_lt
        K_c_a_dr_st = matix.get_K_c_a_dr_st()
        K_c_a_dr_lt = matix.get_K_c_a_dr_lt()
        K_c_a_ud_st = matix.get_K_c_a_ud_st()
        K_c_a_ud_lt = matix.get_K_c_a_ud_lt()
        K_g_p_dr_st = matix.get_K_g_p_dr_st()
        K_g_p_dr_lt = matix.get_K_g_p_dr_lt()
        K_g_p_ud_st = matix.get_K_g_p_ud_st()
        K_g_p_ud_lt = matix.get_K_g_p_ud_lt()
        K_p_p_dr_st = K_g_p_dr_st
        K_p_p_dr_lt = K_g_p_dr_lt
        K_p_p_ud_st = K_g_p_ud_st
        K_p_p_ud_lt = K_g_p_ud_lt
        K_c_p_dr_st = matix.get_K_c_p_dr_st()
        K_c_p_dr_lt = matix.get_K_c_p_dr_lt()
        K_c_p_ud_st = matix.get_K_c_p_ud_st()
        K_c_p_ud_lt = matix.get_K_c_p_ud_lt()
        self_weight = matix.get_self_weight()
        ground_area = matix.get_ground_area()
        ground_weight = matix.get_ground_weight()
        vl_total_dr_st = matix.get_vl_total_dr_st() 
        vl_total_dr_lt = matix.get_vl_total_dr_lt()
        vl_total_ud_st = matix.get_vl_total_ud_st()
        vl_total_ud_lt = matix.get_vl_total_ud_lt()
        vl_total = matix.get_vl_total()
        vl_dim_total = matix.get_vl_dim_total()
        vl_total_internal = matix.get_vl_total_internal()
        hl_total = matix.get_hl_total()
        d_0_dr_st = matix.get_d_0_dr_st()
        d_0_dr_lt = matix.get_d_0_dr_lt()
        d_0_ud_st = matix.get_d_0_ud_st()
        d_0_ud_lt = matix.get_d_0_ud_lt()
        F_a_dr_st_l = matix.get_F_a_dr_st_l()
        F_a_dr_lt_l = matix.get_F_a_dr_lt_l()
        F_a_ud_st_l = matix.get_F_a_ud_st_l()
        F_a_ud_lt_l = matix.get_F_a_ud_lt_l()
        F_p_dr_st_l = matix.get_F_p_dr_st_l()
        F_p_dr_lt_l = matix.get_F_p_dr_lt_l()
        F_p_ud_st_l = matix.get_F_p_ud_st_l()
        F_p_ud_lt_l = matix.get_F_p_ud_lt_l()
        F_a_dr_st_b = matix.get_F_a_dr_st_b()
        F_a_dr_lt_b = matix.get_F_a_dr_lt_b()
        F_a_ud_st_b = matix.get_F_a_ud_st_b()
        F_a_ud_lt_b = matix.get_F_a_ud_lt_b()
        F_p_dr_st_b = matix.get_F_p_dr_st_b()
        F_p_dr_lt_b = matix.get_F_p_dr_lt_b()
        F_p_ud_st_b = matix.get_F_p_ud_st_b()
        F_p_ud_lt_b = matix.get_F_p_ud_lt_b()
        F_a_dr_st_r = matix.get_F_a_dr_st_r()
        F_a_dr_lt_r = matix.get_F_a_dr_lt_r()
        F_a_ud_st_r = matix.get_F_a_ud_st_r()
        F_a_ud_lt_r = matix.get_F_a_ud_lt_r()
        F_p_dr_st_r = matix.get_F_p_dr_st_r()
        F_p_dr_lt_r = matix.get_F_p_dr_lt_r()
        F_p_ud_st_r = matix.get_F_p_ud_st_r()
        F_p_ud_lt_r = matix.get_F_p_ud_lt_r()
        h_res_dr_st_l = matix.get_h_res_dr_st_l()
        h_res_dr_lt_l = matix.get_h_res_dr_lt_l()
        h_res_ud_st_l = matix.get_h_res_ud_st_l()
        h_res_ud_lt_l = matix.get_h_res_ud_lt_l()
        h_res_dr_st_b = matix.get_h_res_dr_st_b()
        h_res_dr_lt_b = matix.get_h_res_dr_lt_b()
        h_res_ud_st_b = matix.get_h_res_ud_st_b()
        h_res_ud_lt_b = matix.get_h_res_ud_lt_b()
        h_res_dr_st_rl = matix.get_h_res_dr_st_rl()
        h_res_dr_lt_rl = matix.get_h_res_dr_lt_rl()
        h_res_ud_st_rl = matix.get_h_res_ud_st_rl()
        h_res_ud_lt_rl = matix.get_h_res_ud_lt_rl()
        h_res_dr_st_rb = matix.get_h_res_dr_st_rb()
        h_res_dr_lt_rb = matix.get_h_res_dr_lt_rb()
        h_res_ud_st_rb = matix.get_h_res_ud_st_rb()
        h_res_ud_lt_rb = matix.get_h_res_ud_lt_rb()
        H_res_dr_st = matix.get_H_res_dr_st()
        H_res_dr_lt = matix.get_H_res_dr_lt()
        H_res_ud_st = matix.get_H_res_ud_st()
        H_res_ud_lt = matix.get_H_res_ud_lt()
        H_res_both = matix.get_H_res_both()
        h_cg_a_dr_st = matix.get_h_cg_a_dr_st()
        h_cg_a_dr_lt = matix.get_h_cg_a_dr_lt()
        h_cg_a_ud_st = matix.get_h_cg_a_ud_st()
        h_cg_a_ud_lt = matix.get_h_cg_a_ud_lt()
        h_cg_p_dr_st = matix.get_h_cg_p_dr_st()
        h_cg_p_dr_lt = matix.get_h_cg_p_dr_lt()
        h_cg_p_ud_st = matix.get_h_cg_p_ud_st()
        h_cg_p_ud_lt = matix.get_h_cg_p_ud_lt()
        m_h_length = matix.get_m_h_length()
        m_h_width = matix.get_m_h_width()
        m_h_r = matix.get_m_h_r()
        m_v_dr_st_length = matix.get_m_v_dr_st_length()
        m_v_dr_lt_length = matix.get_m_v_dr_lt_length()
        m_v_ud_st_length = matix.get_m_v_ud_st_length()
        m_v_ud_lt_length = matix.get_m_v_ud_lt_length()
        m_v_dim_length = matix.get_m_v_dim_length()
        m_v_dr_st_width = matix.get_m_v_dr_st_width()
        m_v_dr_lt_width = matix.get_m_v_dr_lt_width()
        m_v_ud_st_width = matix.get_m_v_ud_st_width()
        m_v_ud_lt_width = matix.get_m_v_ud_lt_width()
        m_v_dim_width = matix.get_m_v_dim_width()
        m_F_a_dr_st_l = matix.get_m_F_a_dr_st_l()
        m_F_a_dr_lt_l = matix.get_m_F_a_dr_lt_l()
        m_F_a_ud_st_l = matix.get_m_F_a_ud_st_l()
        m_F_a_ud_lt_l = matix.get_m_F_a_ud_lt_l()
        m_F_p_dr_st_l = matix.get_m_F_p_dr_st_l()
        m_F_p_dr_lt_l = matix.get_m_F_p_dr_lt_l()
        m_F_p_ud_st_l = matix.get_m_F_p_ud_st_l()
        m_F_p_ud_lt_l = matix.get_m_F_p_ud_lt_l()
        m_F_a_dr_st_b = matix.get_m_F_a_dr_st_b()
        m_F_a_dr_lt_b = matix.get_m_F_a_dr_lt_b()
        m_F_a_ud_st_b = matix.get_m_F_a_ud_st_b()
        m_F_a_ud_lt_b = matix.get_m_F_a_ud_lt_b()
        m_F_p_dr_st_b = matix.get_m_F_p_dr_st_b()
        m_F_p_dr_lt_b = matix.get_m_F_p_dr_lt_b()
        m_F_p_ud_st_b = matix.get_m_F_p_ud_st_b()
        m_F_p_ud_lt_b = matix.get_m_F_p_ud_lt_b()
        m_F_a_dr_st_r = matix.get_m_F_a_dr_st_r()
        m_F_a_dr_lt_r = matix.get_m_F_a_dr_lt_r()
        m_F_a_ud_st_r = matix.get_m_F_a_ud_st_r()
        m_F_a_ud_lt_r = matix.get_m_F_a_ud_lt_r()
        m_F_p_dr_st_r = matix.get_m_F_p_dr_st_r()
        m_F_p_dr_lt_r = matix.get_m_F_p_dr_lt_r()
        m_F_p_ud_st_r = matix.get_m_F_p_ud_st_r()
        m_F_p_ud_lt_r = matix.get_m_F_p_ud_lt_r()
        m_r = matix.get_m_r()
        m_total_dr_st_l = matix.get_m_total_dr_st_l()
        m_total_dr_lt_l = matix.get_m_total_dr_lt_l()
        m_total_ud_st_l = matix.get_m_total_ud_st_l()
        m_total_ud_lt_l = matix.get_m_total_ud_lt_l()
        m_total_dr_st_b = matix.get_m_total_dr_st_b()
        m_total_dr_lt_b = matix.get_m_total_dr_lt_b()
        m_total_ud_st_b = matix.get_m_total_ud_st_b()
        m_total_ud_lt_b = matix.get_m_total_ud_lt_b()
        m_total_dr_st_rl = matix.get_m_total_dr_st_rl()
        m_total_dr_lt_rl = matix.get_m_total_dr_lt_rl()
        m_total_ud_st_rl = matix.get_m_total_ud_st_rl()
        m_total_ud_lt_rl = matix.get_m_total_ud_lt_rl()
        m_total_dr_st_rb = matix.get_m_total_dr_st_rb()
        m_total_dr_lt_rb = matix.get_m_total_dr_lt_rb()
        m_total_ud_st_rb = matix.get_m_total_ud_st_rb()
        m_total_ud_lt_rb = matix.get_m_total_ud_lt_rb()
        m_dim_length = matix.get_m_dim_length()
        m_dim_width = matix.get_m_dim_width()
        m_dim_r_length = matix.get_m_dim_r_length()
        m_dim_r_width = matix.get_m_dim_r_width()

        //EFFECTIVE DIMENSIONS
        e_total_dr_st_l = matix.get_e_total_dr_st_l()
        e_total_dr_lt_l = matix.get_e_total_dr_lt_l()
        e_total_ud_st_l = matix.get_e_total_ud_st_l()
        e_total_ud_lt_l = matix.get_e_total_ud_lt_l()
        e_total_dr_st_b = matix.get_e_total_dr_st_b()
        e_total_dr_lt_b = matix.get_e_total_dr_lt_b()
        e_total_ud_st_b = matix.get_e_total_ud_st_b()
        e_total_ud_lt_b = matix.get_e_total_ud_lt_b()
        e_total_dr_st_rl = matix.get_e_total_dr_st_rl()
        e_total_dr_lt_rl = matix.get_e_total_dr_lt_rl()
        e_total_ud_st_rl = matix.get_e_total_ud_st_rl()
        e_total_ud_lt_rl = matix.get_e_total_ud_lt_rl()
        e_total_dr_st_rb = matix.get_e_total_dr_st_rb()
        e_total_dr_lt_rb = matix.get_e_total_dr_lt_rb()
        e_total_ud_st_rb = matix.get_e_total_ud_st_rb()
        e_total_ud_lt_rb = matix.get_e_total_ud_lt_rb()
        e_total_dr_st_r = matix.get_e_total_dr_st_r()
        e_total_dr_lt_r = matix.get_e_total_dr_lt_r()
        e_total_ud_st_r = matix.get_e_total_ud_st_r()
        e_total_ud_lt_r = matix.get_e_total_ud_lt_r()
        e_dim_l = matix.get_e_dim_l()
        e_dim_b = matix.get_e_dim_b()
        e_dim_rl = matix.get_e_dim_rl() 
        e_dim_rb = matix.get_e_dim_rb()
        e_dim_r = matix.get_e_dim_r()
        v_dr_st_r = matix.get_v_dr_st_r()
        v_dr_lt_r = matix.get_v_dr_lt_r()
        v_ud_st_r = matix.get_v_ud_st_r() 
        v_ud_lt_r = matix.get_v_ud_lt_r()
        v_dim_r = matix.get_v_dim_r() 
        ef_dr_st_l = matix.get_ef_dr_st_l()
        ef_dr_lt_l = matix.get_ef_dr_lt_l()
        ef_ud_st_l = matix.get_ef_ud_st_l()
        ef_ud_lt_l = matix.get_ef_ud_lt_l()
        ef_dim_l = matix.get_ef_dim_l()
        ef_dr_st_b = matix.get_ef_dr_st_b()
        ef_dr_lt_b = matix.get_ef_dr_lt_b()
        ef_ud_st_b = matix.get_ef_ud_st_b()
        ef_ud_lt_b = matix.get_ef_ud_lt_b()
        ef_dim_b = matix.get_ef_dim_b()
        A_eff_dr_st = matix.get_A_eff_dr_st()
        A_eff_dr_lt = matix.get_A_eff_dr_lt()
        A_eff_ud_st = matix.get_A_eff_ud_st()
        A_eff_ud_lt = matix.get_A_eff_ud_lt()
        A_dim_eff = matix.get_A_dim_eff()

        // GROUND BEARING CAPACITY
        N_q_dr_st = matix.get_N_q_dr_st()
        N_c_dr_st = matix.get_N_c_dr_st()
        N_g_dr_st = matix.get_N_g_dr_st()
        N_q_dr_lt = matix.get_N_q_dr_lt()
        N_c_dr_lt = matix.get_N_c_dr_lt()
        N_g_dr_lt = matix.get_N_g_dr_lt()
        N_q_ud_st = matix.get_N_q_ud_st()
        N_c_ud_st = matix.get_N_c_ud_st()
        N_g_ud_st = matix.get_N_g_ud_st()
        N_q_ud_lt = matix.get_N_q_ud_lt()
        N_c_ud_lt = matix.get_N_c_ud_lt()
        N_g_ud_lt = matix.get_N_g_ud_lt()
        s_g_dr_st = matix.get_s_g_dr_st()
        s_g_dr_lt = matix.get_s_g_dr_lt()
        s_g_ud_st = matix.get_s_g_ud_st()
        s_g_ud_lt = matix.get_s_g_ud_lt()
        s_q_dr_st = matix.get_s_q_dr_st()
        s_q_dr_lt = matix.get_s_q_dr_lt()
        s_q_ud_st = matix.get_s_q_ud_st()
        s_q_ud_lt = matix.get_s_q_ud_lt()
        s_c_dr_st = matix.get_s_c_dr_st()
        s_c_dr_lt = matix.get_s_c_dr_lt()
        s_c_ud_st = matix.get_s_c_ud_st()
        s_c_ud_lt = matix.get_s_c_ud_lt()
        i_q_dr_st = matix.get_i_q_dr_st()
        i_g_dr_st = matix.get_i_g_dr_st()
        i_c_dr_st = matix.get_i_c_dr_st()
        i_q_dr_lt = matix.get_i_q_dr_lt()
        i_g_dr_lt = matix.get_i_g_dr_lt()
        i_c_dr_lt = matix.get_i_c_dr_lt()
        i_q_ud_st = matix.get_i_q_ud_st()
        i_g_ud_st = matix.get_i_g_ud_st()
        i_c_ud_st = matix.get_i_c_ud_st()
        i_q_ud_lt = matix.get_i_q_ud_lt()
        i_g_ud_lt = matix.get_i_g_ud_lt()
        i_c_ud_lt = matix.get_i_c_ud_lt()
        R_q_dr_st = matix.get_R_q_dr_st()
        R_q_dr_lt = matix.get_R_q_dr_lt()
        R_q_ud_st = matix.get_R_q_ud_st()
        R_q_ud_lt = matix.get_R_q_ud_lt()
        R_c_dr_st = matix.get_R_c_dr_st()
        R_c_dr_lt = matix.get_R_c_dr_lt()
        R_c_ud_st = matix.get_R_c_ud_st()
        R_c_ud_lt = matix.get_R_c_ud_lt()
        R_g_dr_st = matix.get_R_g_dr_st()
        R_g_dr_lt = matix.get_R_g_dr_lt()
        R_g_ud_st = matix.get_R_g_ud_st()
        R_g_ud_lt = matix.get_R_g_ud_lt()
        R_total_dr_st = matix.get_R_total_dr_st()
        R_total_dr_lt = matix.get_R_total_dr_lt()
        R_total_ud_st = matix.get_R_total_ud_st()
        R_total_ud_lt = matix.get_R_total_ud_lt()
        R_total = matix.get_R_total()
        H_dr_st = matix.get_H_dr_st()
        H_dr_lt = matix.get_H_dr_lt()
        H_ud_st = matix.get_H_ud_st()
        H_ud_lt = matix.get_H_ud_lt()
        H_total = matix.get_H_total()

        // MOMENT CAPACITY
        f_cd = matix.get_f_cd()
        f_cm = matix.get_f_cm()
        f_ctm = matix.get_f_ctm()
        E_cm = matix.get_E_cm()
        sigma_r1 = matix.get_sigma_r1()
        sigma_r4 = matix.get_sigma_r4()
        v = matix.get_v()
        gamma_m = matix.get_gamma_m()
        f_ctd_fl = matix.get_f_ctd_fl()
        M_n = matix.get_M_n()
        f_yd = matix.get_f_yd()
        A_c = matix.get_A_c()
        rho = matix.get_rho()
        rho_total = matix.get_rho_total()
        h_ux = matix.get_h_ux()
        ef_height = matix.get_ef_height()
        v_max = matix.get_v_max()
        u_0 = matix.get_u_0()
        lambda = matix.get_lambda()
        eta = matix.get_eta()
        omega = matix.get_omega()
        mu = matix.get_mu()
        M_p = matix.get_M_p()
        M_p_l = matix.get_M_p_l()
        M_p_b = matix.get_M_p_b()
        M_p_internal = matix.get_M_p_internal()
        w_dr_st_l = matix.get_w_dr_st_l()
        w_dr_lt_l = matix.get_w_dr_lt_l()
        w_ud_st_l = matix.get_w_ud_st_l()
        w_ud_lt_l = matix.get_w_ud_lt_l()
        w_dr_st_b = matix.get_w_dr_st_b()
        w_dr_lt_b = matix.get_w_dr_lt_b()
        w_ud_st_b = matix.get_w_ud_st_b()
        w_ud_lt_b = matix.get_w_ud_lt_b()
        w_dim_l = matix.get_w_dim_l()
        w_dim_b = matix.get_w_dim_b()
        w_sw_l = matix.get_w_sw_l()
        w_sw_b = matix.get_w_sw_b()
        b_dr_st_l_1 = matix.get_b_dr_st_l_1()
        b_dr_lt_l_1 = matix.get_b_dr_lt_l_1()
        b_ud_st_l_1 = matix.get_b_ud_st_l_1()
        b_ud_lt_l_1 = matix.get_b_ud_lt_l_1()
        b_dim_l_1 = matix.get_b_dim_l_1()
        a_dr_st_l_2 = matix.get_a_dr_st_l_2()
        a_dr_lt_l_2 = matix.get_a_dr_lt_l_2()
        a_ud_st_l_2 = matix.get_a_ud_st_l_2()
        a_ud_lt_l_2 = matix.get_a_ud_lt_l_2()
        a_dim_l_2 = matix.get_a_dim_l_2()
        a_dr_st_l_1 = matix.get_a_dr_st_l_1()
        b_dr_st_l_2 = matix.get_b_dr_st_l_2()
        L_w_dr_st_l_1 = matix.get_L_w_dr_st_l_1()
        L_w_dr_st_l_2 = matix.get_L_w_dr_st_l_2()
        a_dr_lt_l_1 = matix.get_a_dr_lt_l_1()
        b_dr_lt_l_2 = matix.get_b_dr_lt_l_2()
        L_w_dr_lt_l_1 = matix.get_L_w_dr_lt_l_1()
        L_w_dr_lt_l_2 = matix.get_L_w_dr_lt_l_2()
        a_ud_st_l_1 = matix.get_a_ud_st_l_1()
        b_ud_st_l_2 = matix.get_b_ud_st_l_2()
        L_w_ud_st_l_1 = matix.get_L_w_ud_st_l_1()
        L_w_ud_st_l_2 = matix.get_L_w_ud_st_l_2()
        a_ud_lt_l_1 = matix.get_a_ud_lt_l_1()
        b_ud_lt_l_2 = matix.get_b_ud_lt_l_2()
        L_w_ud_lt_l_1 = matix.get_L_w_ud_lt_l_1()
        L_w_ud_lt_l_2 = matix.get_L_w_ud_lt_l_2()
        a_dim_l_1 = matix.get_a_dim_l_1()
        b_dim_l_2 = matix.get_b_dim_l_2()
        L_w_dim_l_1 = matix.get_L_w_dim_l_1()
        L_w_dim_l_2 = matix.get_L_w_dim_l_2()
        R_A_dr_st_l_1 = matix.get_R_A_dr_st_l_1()
        R_A_dr_lt_l_1 = matix.get_R_A_dr_lt_l_1()
        R_A_ud_st_l_1 = matix.get_R_A_ud_st_l_1()
        R_A_ud_lt_l_1 = matix.get_R_A_ud_lt_l_1()
        R_A_dim_l_1 = matix.get_R_A_dim_l_1()
        R_A_dr_st_l_2 = matix.get_R_A_dr_st_l_2()
        R_A_dr_lt_l_2 = matix.get_R_A_dr_lt_l_2()
        R_A_ud_st_l_2 = matix.get_R_A_ud_st_l_2()
        R_A_ud_lt_l_2 = matix.get_R_A_ud_lt_l_2()
        R_A_dim_l_2 = matix.get_R_A_dim_l_2()
        M_A_dr_st_l_1 = matix.get_M_A_dr_st_l_1()
        M_A_dr_lt_l_1 = matix.get_M_A_dr_lt_l_1()
        M_A_ud_st_l_1 = matix.get_M_A_ud_st_l_1()
        M_A_ud_lt_l_1 = matix.get_M_A_ud_lt_l_1()
        M_A_dim_l_1 = matix.get_M_A_dim_l_1()
        M_A_dr_st_l_2 = matix.get_M_A_dr_st_l_2()
        M_A_dr_lt_l_2 = matix.get_M_A_dr_lt_l_2()
        M_A_ud_st_l_2 = matix.get_M_A_ud_st_l_2()
        M_A_ud_lt_l_2 = matix.get_M_A_ud_lt_l_2()
        M_A_dim_l_2 = matix.get_M_A_dim_l_2()
        delta = 500
        x_length_value_start = matix.get_x_length_value_start()
        x_length_value_end = matix.get_x_length_value_end()
        x_length_value_interval = matix.get_x_length_value_interval()
        x_width_value_start = matix.get_x_width_value_start()
        x_width_value_end = matix.get_x_width_value_end()
        x_width_value_interval = matix.get_x_width_value_interval()

        //dimensions_known = No
        // Y Values Chart 1
        fn_M_dr_st_l_arr = []
        fn_M_dr_lt_l_arr = []
        fn_M_ud_st_l_arr = []
        fn_M_ud_lt_l_arr = []
        // Y Values Chart 2
        fn_M_dr_st_b_arr = []
        fn_M_dr_lt_b_arr = []
        fn_M_ud_st_b_arr = []
        fn_M_ud_lt_b_arr = []
        // Y Values Chart 3
        fn_V_dr_st_l_arr = []
        fn_V_dr_lt_l_arr = []
        fn_V_ud_st_l_arr = []
        fn_V_ud_lt_l_arr = []
        // Y Values Chart 4
        fn_V_dr_st_b_arr = []
        fn_V_dr_lt_b_arr = []
        fn_V_ud_st_b_arr = []
        fn_V_ud_lt_b_arr = []

        // dimensions_known = Yes
        // Y Values Chart 1
        // fn_M_dim_l_arr = []
        // // Y Values Chart 2
        // fn_M_dim_b_arr = []
        // // Y Values Chart 3
        // fn_V_dim_l_arr = []
        // // Y Values Chart 4
        // fn_V_dim_b_arr = []
        for(var x = x_length_value_start / 1000; x <= x_length_value_end / 1000; x = x + x_length_value_interval / 1000) {
            //length
            M_r_dr_st_l_1 = matix.get_M_r_dr_st_l_1(x)
            M_r_dr_lt_l_1 = matix.get_M_r_dr_lt_l_1(x)
            M_r_ud_st_l_1 = matix.get_M_r_ud_st_l_1(x)
            M_r_ud_lt_l_1 = matix.get_M_r_ud_lt_l_1(x)
            M_r_dim_l_1 = matix.get_M_r_dim_l_1(x)
            M_r_dr_st_l_2 = matix.get_M_r_dr_st_l_2(x)
            M_r_dr_lt_l_2 = matix.get_M_r_dr_lt_l_2(x)
            M_r_ud_st_l_2 = matix.get_M_r_ud_st_l_2(x)
            M_r_ud_lt_l_2 = matix.get_M_r_ud_lt_l_2(x)
            M_r_dim_l_2 = matix.get_M_r_dim_l_2(x)
            M_g_dr_st_l_1 = matix.get_M_g_dr_st_l_1(x)
            M_g_dr_lt_l_1 = matix.get_M_g_dr_lt_l_1(x)
            M_g_ud_st_l_1 = matix.get_M_g_ud_st_l_1(x)
            M_g_ud_lt_l_1 = matix.get_M_g_ud_lt_l_1(x)
            M_g_dim_l_1 = matix.get_M_g_dim_l_1(x)
            M_g_dr_st_l_2 = matix.get_M_g_dr_st_l_2(x)
            M_g_dr_lt_l_2 = matix.get_M_g_dr_lt_l_2(x)
            M_g_ud_st_l_2 = matix.get_M_g_ud_st_l_2(x)
            M_g_ud_lt_l_2 = matix.get_M_g_ud_lt_l_2(x)
            M_g_dim_l_2 = matix.get_M_g_dim_l_2(x)
            M_c_dr_st_l_1 = matix.get_M_c_dr_st_l_1(x)
            M_c_dr_lt_l_1 = matix.get_M_c_dr_lt_l_1(x)
            M_c_ud_st_l_1 = matix.get_M_c_ud_st_l_1(x)
            M_c_ud_lt_l_1 = matix.get_M_c_ud_lt_l_1(x)
            M_c_dim_l_1 = matix.get_M_c_dim_l_1(x)
            M_c_dr_st_l_2 = matix.get_M_c_dr_st_l_2(x)
            M_c_dr_lt_l_2 = matix.get_M_c_dr_lt_l_2(x)
            M_c_ud_st_l_2 = matix.get_M_c_ud_st_l_2(x)
            M_c_ud_lt_l_2 = matix.get_M_c_ud_lt_l_2(x)
            M_c_dim_l_2 = matix.get_M_c_dim_l_2(x)
            fn_M_dr_st_l = matix.get_fn_M_dr_st_l(x)
            fn_M_dr_lt_l = matix.get_fn_M_dr_lt_l(x)
            fn_M_ud_st_l = matix.get_fn_M_ud_st_l(x)
            fn_M_ud_lt_l = matix.get_fn_M_ud_lt_l(x)
            fn_M_dim_l = matix.get_fn_M_dim_l(x)
            fn_t_bez_l = matix.get_fn_t_bez_l(x)
            P_bez_0_dr_st_l = matix.get_P_bez_0_dr_st_l()
            P_bez_3_dr_st_l = matix.get_P_bez_3_dr_st_l()
            P_bez_1_dr_st_l = matix.get_P_bez_1_dr_st_l()
            P_bez_2_dr_st_l = matix.get_P_bez_2_dr_st_l() 
            P_bez_0_dr_lt_l = matix.get_P_bez_0_dr_lt_l()
            P_bez_3_dr_lt_l = matix.get_P_bez_3_dr_lt_l()
            P_bez_1_dr_lt_l = matix.get_P_bez_1_dr_lt_l()
            P_bez_2_dr_lt_l = matix.get_P_bez_2_dr_lt_l()
            P_bez_0_ud_st_l = matix.get_P_bez_0_ud_st_l()
            P_bez_3_ud_st_l = matix.get_P_bez_3_ud_st_l()
            P_bez_1_ud_st_l = matix.get_P_bez_1_ud_st_l()
            P_bez_2_ud_st_l = matix.get_P_bez_2_ud_st_l() 
            P_bez_0_ud_lt_l = matix.get_P_bez_0_ud_lt_l()
            P_bez_3_ud_lt_l = matix.get_P_bez_3_ud_lt_l()
            P_bez_1_ud_lt_l = matix.get_P_bez_1_ud_lt_l()
            P_bez_2_ud_lt_l = matix.get_P_bez_2_ud_lt_l()
            P_bez_0_dim_l = matix.get_P_bez_0_dim_l()
            P_bez_3_dim_l = matix.get_P_bez_3_dim_l()
            P_bez_1_dim_l = matix.get_P_bez_1_dim_l()
            P_bez_2_dim_l = matix.get_P_bez_2_dim_l()
            fn_B_dr_st_l = matix.get_fn_B_dr_st_l(x)
            fn_B_dr_lt_l = matix.get_fn_B_dr_lt_l(x) 
            fn_B_ud_st_l = matix.get_fn_B_ud_st_l(x)
            fn_B_ud_lt_l = matix.get_fn_B_ud_lt_l(x)
            fn_B_dim_l = matix.get_fn_B_dim_l()
    
            //dimensions_known = No
            // y value calculations chart 1
            fn_M_dr_st_l_arr.push(matix.get_fn_M_dr_st_l_corr(x))
            fn_M_dr_lt_l_arr.push(matix.get_fn_M_dr_lt_l_corr(x))
            fn_M_ud_st_l_arr.push(matix.get_fn_M_ud_st_l_corr(x))
            fn_M_ud_lt_l_arr.push(matix.get_fn_M_ud_lt_l_corr(x))
    
            // y value calculations chart 3
    
            fn_M_dim_l_corr = matix.get_fn_M_dim_l_corr(x)
            V_r_dr_st_l_1 = matix.get_V_r_dr_st_l_1(x)
            V_r_dr_lt_l_1 = matix.get_V_r_dr_lt_l_1(x)
            V_r_ud_st_l_1 = matix.get_V_r_ud_st_l_1(x)
            V_r_ud_lt_l_1 = matix.get_V_r_ud_lt_l_1(x)
            V_r_dim_l_1 = matix.get_V_r_dim_l_1(x)
            V_r_dr_st_l_2 = matix.get_V_r_dr_st_l_2(x)
            V_r_dr_lt_l_2 = matix.get_V_r_dr_lt_l_2(x)
            V_r_ud_st_l_2 = matix.get_V_r_ud_st_l_2(x)
            V_r_ud_lt_l_2 = matix.get_V_r_ud_lt_l_2(x)
            V_r_dim_l_2 = matix.get_V_r_dim_l_2(x)
            V_g_dr_st_l_1 = matix.get_V_g_dr_st_l_1(x)
            V_g_dr_lt_l_1 = matix.get_V_g_dr_lt_l_1(x)
            V_g_ud_st_l_1 = matix.get_V_g_ud_st_l_1(x)
            V_g_ud_lt_l_1 = matix.get_V_g_ud_lt_l_1(x)
            V_g_dim_l_1 = matix.get_V_g_dim_l_1(x)
            V_g_dr_st_l_2 = matix.get_V_g_dr_st_l_2(x)
            V_g_dr_lt_l_2 = matix.get_V_g_dr_lt_l_2(x)
            V_g_ud_st_l_2 = matix.get_V_g_ud_st_l_2(x)
            V_g_ud_lt_l_2 = matix.get_V_g_ud_lt_l_2(x)
            V_g_dim_l_2 = matix.get_V_g_dim_l_2(x)
            V_c_dr_st_l_1 = matix.get_V_c_dr_st_l_1(x)
            V_c_dr_lt_l_1 = matix.get_V_c_dr_lt_l_1(x)
            V_c_ud_st_l_1 = matix.get_V_c_ud_st_l_1(x)
            V_c_ud_lt_l_1 = matix.get_V_c_ud_lt_l_1(x)
            V_c_dim_l_1 = matix.get_V_c_dim_l_1(x)
            V_c_dr_st_l_2 = matix.get_V_c_dr_st_l_2(x)
            V_c_dr_lt_l_2 = matix.get_V_c_dr_lt_l_2(x)
            V_c_ud_st_l_2 = matix.get_V_c_ud_st_l_2(x)
            V_c_ud_lt_l_2 = matix.get_V_c_ud_lt_l_2(x)
            V_c_dim_l_2 = matix.get_V_c_dim_l_2(x)
            fn_V_dr_st_l = matix.get_fn_V_dr_st_l(x)
            fn_V_dr_lt_l = matix.get_fn_V_dr_lt_l(x)
            fn_V_ud_st_l = matix.get_fn_V_ud_st_l(x)
            fn_V_ud_lt_l = matix.get_fn_V_ud_lt_l(x)
            fn_V_dim_l = matix.get_fn_V_dim_l(x)
            a_V_dr_st_l = matix.get_a_V_dr_st_l()
            b_V_dr_st_l = matix.get_b_V_dr_st_l()
            a_V_dr_lt_l = matix.get_a_V_dr_lt_l()
            b_V_dr_lt_l = matix.get_b_V_dr_lt_l()
            a_V_ud_st_l = matix.get_a_V_ud_st_l()
            b_V_ud_st_l = matix.get_b_V_ud_st_l()
            a_V_ud_lt_l = matix.get_a_V_ud_lt_l()
            b_V_ud_lt_l = matix.get_b_V_ud_lt_l()
            a_V_dim_l = matix.get_a_V_dim_l()
            b_V_dim_l = matix.get_b_V_dim_l()
            y_V_dr_st_l = matix.get_y_V_dr_st_l(x)
            y_V_dr_lt_l = matix.get_y_V_dr_lt_l(x)
            y_V_ud_st_l = matix.get_y_V_ud_st_l(x)
            y_V_ud_lt_l = matix.get_y_V_ud_lt_l(x)
            y_V_dim_l = matix.get_y_V_dim_l(x)
            fn_V_dr_st_l_corr = matix.get_fn_V_dr_st_l_corr(x)
            fn_V_dr_lt_l_corr = matix.get_fn_V_dr_lt_l_corr(x)
            fn_V_ud_st_l_corr = matix.get_fn_V_ud_st_l_corr(x)
            fn_V_ud_lt_l_corr = matix.get_fn_V_ud_lt_l_corr(x)
            fn_V_dim_l_corr = matix.get_fn_V_dim_l_corr(x)
        }

        for(var x = x_width_value_start / 1000; x <= x_width_value_end / 1000; x = x + x_width_value_interval / 1000) {
    
            //width
            b_dr_st_b_1 = 0
            b_dr_lt_b_1 = 0
            b_ud_st_b_1 = 0
            b_ud_lt_b_1 = 0
            b_dim_b_1 = 0
            a_dr_st_b_2 = 0
            a_dr_lt_b_2 = 0
            a_ud_st_b_2 = 0
            a_ud_lt_b_2 = 0
            a_dim_b_2 = 0
            a_dr_st_b_1 = matix.get_a_dr_st_b_1()
            b_dr_st_b_2 = matix.get_b_dr_st_b_2()
            L_w_dr_st_b_1 = matix.get_L_w_dr_st_b_1()
            L_w_dr_st_b_2 = matix.get_L_w_dr_st_b_2()
            a_dr_lt_b_1 = matix.get_a_dr_lt_b_1()
            b_dr_lt_b_2 = matix.get_b_dr_lt_b_2()
            L_w_dr_lt_b_1 = matix.get_L_w_dr_lt_b_1()
            L_w_dr_lt_b_2 = matix.get_L_w_dr_lt_b_2()
            a_ud_st_b_1 = matix.get_a_ud_st_b_1()
            b_ud_st_b_2 = matix.get_b_ud_st_b_2()
            L_w_ud_st_b_1 = matix.get_L_w_ud_st_b_1()
            L_w_ud_st_b_2 = matix.get_L_w_ud_st_b_2()
            a_ud_lt_b_1 = matix.get_a_ud_lt_b_1()
            b_ud_lt_b_2 = matix.get_b_ud_lt_b_2()
            L_w_ud_lt_b_1 = matix.get_L_w_ud_lt_b_1()
            L_w_ud_lt_b_2 = matix.get_L_w_ud_lt_b_2()
            a_dim_b_1 = matix.get_a_dim_b_1()
            b_dim_b_2 = matix.get_b_dim_b_2()
            L_w_dim_b_1 = matix.get_L_w_dim_b_1()
            L_w_dim_b_2 = matix.get_L_w_dim_b_2()
            R_A_dr_st_b_1 = matix.get_R_A_dr_st_b_1()
            R_A_dr_lt_b_1 = matix.get_R_A_dr_lt_b_1()
            R_A_ud_st_b_1 = matix.get_R_A_ud_st_b_1()
            R_A_ud_lt_b_1 = matix.get_R_A_ud_lt_b_1()
            R_A_dim_b_1 = matix.get_R_A_dim_b_1()
            R_A_dr_st_b_2 = matix.get_R_A_dr_st_b_2()
            R_A_dr_lt_b_2 = matix.get_R_A_dr_lt_b_2()
            R_A_ud_st_b_2 = matix.get_R_A_ud_st_b_2()
            R_A_ud_lt_b_2 = matix.get_R_A_ud_lt_b_2()
            R_A_dim_b_2 = matix.get_R_A_dim_b_2()
            M_A_dr_st_b_1 = matix.get_M_A_dr_st_b_1()
            M_A_dr_lt_b_1 = matix.get_M_A_dr_lt_b_1()
            M_A_ud_st_b_1 = matix.get_M_A_ud_st_b_1()
            M_A_ud_lt_b_1 = matix.get_M_A_ud_lt_b_1()
            M_A_dim_b_1 = matix.get_M_A_dim_b_1()
            M_A_dr_st_b_2 = matix.get_M_A_dr_st_b_2()
            M_A_dr_lt_b_2 = matix.get_M_A_dr_lt_b_2()
            M_A_ud_st_b_2 = matix.get_M_A_ud_st_b_2()
            M_A_ud_lt_b_2 = matix.get_M_A_ud_lt_b_2()
            M_A_dim_b_2 = matix.get_M_A_dim_b_2()
            M_r_dr_st_b_1 = matix.get_M_r_dr_st_b_1(x)
            M_r_dr_lt_b_1 = matix.get_M_r_dr_lt_b_1(x)
            M_r_ud_st_b_1 = matix.get_M_r_ud_st_b_1(x)
            M_r_ud_lt_b_1 = matix.get_M_r_ud_lt_b_1(x)
            M_r_dim_b_1 = matix.get_M_r_dim_b_1(x)
            M_r_dr_st_b_2 = matix.get_M_r_dr_st_b_2(x)
            M_r_dr_lt_b_2 = matix.get_M_r_dr_lt_b_2(x)
            M_r_ud_st_b_2 = matix.get_M_r_ud_st_b_2(x)
            M_r_ud_lt_b_2 = matix.get_M_r_ud_lt_b_2(x)
            M_r_dim_b_2 = matix.get_M_r_dim_b_2(x)
            M_g_dr_st_b_1 = matix.get_M_g_dr_st_b_1(x)
            M_g_dr_lt_b_1 = matix.get_M_g_dr_lt_b_1(x)
            M_g_ud_st_b_1 = matix.get_M_g_ud_st_b_1(x)
            M_g_ud_lt_b_1 = matix.get_M_g_ud_lt_b_1(x)
            M_g_dim_b_1 = matix.get_M_g_dim_b_1(x)
            M_g_dr_st_b_2 = matix.get_M_g_dr_st_b_2(x)
            M_g_dr_lt_b_2 = matix.get_M_g_dr_lt_b_2(x)
            M_g_ud_st_b_2 = matix.get_M_g_ud_st_b_2(x)
            M_g_ud_lt_b_2 = matix.get_M_g_ud_lt_b_2(x)
            M_g_dim_b_2 = matix.get_M_g_dim_b_2(x)
            M_c_dr_st_b_1 = matix.get_M_c_dr_st_b_1(x) 
            M_c_dr_lt_b_1 = matix.get_M_c_dr_lt_b_1(x)
            M_c_ud_st_b_1 = matix.get_M_c_ud_st_b_1(x)
            M_c_ud_lt_b_1 = matix.get_M_c_ud_lt_b_1(x)
            M_c_dim_b_1 = matix.get_M_c_dim_b_1(x)
            M_c_dr_st_b_2 = matix.get_M_c_dr_st_b_2(x)
            M_c_dr_lt_b_2 = matix.get_M_c_dr_lt_b_2(x)
            M_c_ud_st_b_2 = matix.get_M_c_ud_st_b_2(x)
            M_c_ud_lt_b_2 = matix.get_M_c_ud_lt_b_2(x)
            M_c_dim_b_2 = matix.get_M_c_dim_b_2(x)
            fn_M_dr_st_b = matix.get_fn_M_dr_st_b(x)
            fn_M_dr_lt_b = matix.get_fn_M_dr_lt_b(x)
            fn_M_ud_st_b = matix.get_fn_M_ud_st_b(x)
            fn_M_ud_lt_b = matix.get_fn_M_ud_lt_b(x)
            fn_M_dim_b = matix.get_fn_M_dim_b(x)
            fn_t_bez_b = matix.get_fn_t_bez_b(x)
            P_bez_0_dr_st_b = matix.get_P_bez_0_dr_st_b()
            P_bez_3_dr_st_b = matix.get_P_bez_3_dr_st_b()
            P_bez_1_dr_st_b = matix.get_P_bez_1_dr_st_b()
            P_bez_2_dr_st_b = matix.get_P_bez_2_dr_st_b()
            P_bez_0_dr_lt_b = matix.get_P_bez_0_dr_lt_b()
            P_bez_3_dr_lt_b = matix.get_P_bez_3_dr_lt_b()
            P_bez_1_dr_lt_b = matix.get_P_bez_1_dr_lt_b()
            P_bez_2_dr_lt_b = matix.get_P_bez_2_dr_lt_b()
            P_bez_0_ud_st_b = matix.get_P_bez_0_ud_st_b()
            P_bez_3_ud_st_b = matix.get_P_bez_3_ud_st_b()
            P_bez_1_ud_st_b = matix.get_P_bez_1_ud_st_b()
            P_bez_2_ud_st_b = matix.get_P_bez_2_ud_st_b()
            P_bez_0_ud_lt_b = matix.get_P_bez_0_ud_lt_b()
            P_bez_3_ud_lt_b = matix.get_P_bez_3_ud_lt_b()
            P_bez_1_ud_lt_b = matix.get_P_bez_1_ud_lt_b()
            P_bez_2_ud_lt_b = matix.get_P_bez_2_ud_lt_b()
            P_bez_0_dim_b = matix.get_P_bez_0_dim_b()
            P_bez_3_dim_b = matix.get_P_bez_3_dim_b()
            P_bez_1_dim_b = matix.get_P_bez_1_dim_b()
            P_bez_2_dim_b = matix.get_P_bez_2_dim_b()
            fn_B_dr_st_b = matix.get_fn_B_dr_st_b(x)
            fn_B_dr_lt_b = matix.get_fn_B_dr_lt_b(x)
            fn_B_ud_st_b = matix.get_fn_B_ud_st_b(x)
            fn_B_ud_lt_b = matix.get_fn_B_ud_lt_b(x)
            fn_B_dim_b = matix.get_fn_B_dim_b(x)
        
            fn_M_dr_st_b_arr.push(matix.get_fn_M_dr_st_b_corr(x))
            fn_M_dr_lt_b_arr.push(matix.get_fn_M_dr_lt_b_corr(x))
            fn_M_ud_st_b_arr.push(matix.get_fn_M_ud_st_b_corr(x))
            fn_M_ud_lt_b_arr.push(matix.get_fn_M_ud_lt_b_corr(x))
        
            fn_M_dim_b_corr = matix.get_fn_M_dim_b_corr(x)
            V_r_dr_st_b_1 = matix.get_V_r_dr_st_b_1(x)
            V_r_dr_lt_b_1 = matix.get_V_r_dr_lt_b_1(x)
            V_r_ud_st_b_1 = matix.get_V_r_ud_st_b_1(x)
            V_r_ud_lt_b_1 = matix.get_V_r_ud_lt_b_1(x)
            V_r_dim_b_1 = matix.get_V_r_dim_b_1(x)
            V_r_dr_st_b_2 = matix.get_V_r_dr_st_b_2(x)
            V_r_dr_lt_b_2 = matix.get_V_r_dr_lt_b_2(x)
            V_r_ud_st_b_2 = matix.get_V_r_ud_st_b_2(x)
            V_r_ud_lt_b_2 = matix.get_V_r_ud_lt_b_2(x)
            V_r_dim_b_2 = matix.get_V_r_dim_b_2(x)
            V_g_dr_st_b_1 = matix.get_V_g_dr_st_b_1(x)
            V_g_dr_lt_b_1 = matix.get_V_g_dr_lt_b_1(x)
            V_g_ud_st_b_1 = matix.get_V_g_ud_st_b_1(x)
            V_g_ud_lt_b_1 = matix.get_V_g_ud_lt_b_1(x)
            V_g_dim_b_1 = matix.get_V_g_dim_b_1(x)
            V_g_dr_st_b_2 = matix.get_V_g_dr_st_b_2(x)
            V_g_dr_lt_b_2 = matix.get_V_g_dr_lt_b_2(x)
            V_g_ud_st_b_2 = matix.get_V_g_ud_st_b_2(x)
            V_g_ud_lt_b_2 = matix.get_V_g_ud_lt_b_2(x)
            V_g_dim_b_2 = matix.get_V_g_dim_b_2(x)
            V_c_dr_st_b_1 = matix.get_V_c_dr_st_b_1(x)
            V_c_dr_lt_b_1 = matix.get_V_c_dr_lt_b_1(x)
            V_c_ud_st_b_1 = matix.get_V_c_ud_st_b_1(x)
            V_c_ud_lt_b_1 = matix.get_V_c_ud_lt_b_1(x)
            V_c_dim_b_1 = matix.get_V_c_dim_b_1(x)
            V_c_dr_st_b_2 = matix.get_V_c_dr_st_b_2(x)
            V_c_dr_lt_b_2 = matix.get_V_c_dr_lt_b_2(x)
            V_c_ud_st_b_2 = matix.get_V_c_ud_st_b_2(x)
            V_c_ud_lt_b_2 = matix.get_V_c_ud_lt_b_2(x)
            V_c_dim_b_2 = matix.get_V_c_dim_b_2(x)
            fn_V_dr_st_b = matix.get_fn_V_dr_st_b(x)
            fn_V_dr_lt_b = matix.get_fn_V_dr_lt_b(x)
            fn_V_ud_st_b = matix.get_fn_V_ud_st_b(x)
            fn_V_ud_lt_b = matix.get_fn_V_ud_lt_b(x)
            fn_V_dim_b = matix.get_fn_V_dim_b(x)
            a_V_dr_st_b = matix.get_a_V_dr_st_b()
            b_V_dr_st_b = matix.get_b_V_dr_st_b()
            a_V_dr_lt_b = matix.get_a_V_dr_lt_b()
            b_V_dr_lt_b = matix.get_b_V_dr_lt_b()
            a_V_ud_st_b = matix.get_a_V_ud_st_b()
            b_V_ud_st_b = matix.get_b_V_ud_st_b()
            a_V_ud_lt_b = matix.get_a_V_ud_lt_b()
            b_V_ud_lt_b = matix.get_b_V_ud_lt_b()
            a_V_dim_b = matix.get_a_V_dim_b()
            b_V_dim_b = matix.get_b_V_dim_b()
            y_V_dr_st_b = matix.get_y_V_dr_st_b(x)
            y_V_dr_lt_b = matix.get_y_V_dr_lt_b(x)
            y_V_ud_st_b = matix.get_y_V_ud_st_b(x)
            y_V_ud_lt_b = matix.get_y_V_ud_lt_b(x)
            y_V_dim_b = matix.get_y_V_dim_b(x)
            fn_V_dr_st_b_corr = matix.get_fn_V_dr_st_b_corr(x)
            fn_V_dr_lt_b_corr = matix.get_fn_V_dr_lt_b_corr(x)
            fn_V_ud_st_b_corr = matix.get_fn_V_ud_st_b_corr(x)
            fn_V_ud_lt_b_corr = matix.get_fn_V_ud_lt_b_corr(x)
            fn_V_dim_b_corr = matix.get_fn_V_dim_b_corr(x)
        }

        //verification4b 
        M_dr_st_b = matix.get_M_dr_st_b()
        M_dr_lt_b = matix.get_M_dr_lt_b()
        M_ud_st_b = matix.get_M_ud_st_b()
        M_ud_lt_b = matix.get_M_ud_lt_b()
        M_Edp_dr_b = Math.max(M_dr_st_b, M_dr_lt_b)
        M_Edp_ud_b = Math.max(M_ud_st_b, M_ud_lt_b)
        M_Ed_b = Math.max(M_Edp_dr_b, M_Edp_ud_b)

        if(matix.verification4b() === 0) {
            v4b_matrix[i].push(0)
        } else {
            v4b_matrix[i].push(matix.get_volume())
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
    path: './matrices/v4b_matrix.csv'
})

csvWriter.writeRecords(v4b_matrix)
    .then(() => {
        console.log('...v4b_matrix.csv updated!');
    });