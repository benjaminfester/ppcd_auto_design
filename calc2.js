const matix = require('./mathematix')
const createCsvWriter  = require('csv-writer').createArrayCsvWriter
const { v4: uuidv4 } = require('uuid')

national_annex = 'Denmark'
lmd_known = undefined
dimensions_known = undefined
point_foundation_shape = 'rectangular'
gamma_c = (national_annex === 'Denmark') ? 1.45 : 1.5
gamma_s = (national_annex === 'Denmark') ? 1.2 : 1.15
f_R_1 = 1.8
f_R_2 = 1.9
f_R_3 = 2.1
f_R_4 = 2
column_shape = 'rectangular'
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

check_until = 8000
lengths = matix.range(0, 50, check_until)
widths = matix.range(0, 50, check_until)


for(i = 0; i < 2; i++) {

    height = matix.randomIntInSteps(200, 200, 1200)
    height_p_hor = height
    depth = matix.randomIntInSteps(0, 200, 1200)
    column_length = matix.randomIntInSteps(0, 100, 400)
    column_width = matix.randomIntInSteps(0, 100, 400)
    ec_vl_length = matix.randomIntInSteps(0, 100, 300)
    ec_vl_width = matix.randomIntInSteps(0, 100, 300)
    vl_external = matix.randomIntInSteps(-60, 20, 200)
    hl_length = matix.randomIntInSteps(0, 5, 20)
    hl_width = matix.randomIntInSteps(0, 5, 20)
    m_length = matix.randomIntInSteps(0, 5, 10)
    m_width = matix.randomIntInSteps(0, 5, 10)

    
    matrix = []
    verified_sets = []

    lengthLoop:
    for(l in lengths) {
        
        length = lengths[l]
        //write all length values to first row
        matrix.push([length])

        if(length < 2 * (column_length / 2 + Math.abs(ec_vl_length))) {
            matrix[l].push(null)
            continue lengthLoop
        }

        widthLoop:
        for(w in widths) {
            
            width = widths[w]

            if(width < 2 * (column_width / 2 + Math.abs(ec_vl_width))) {
                matrix[l].push(null)
                continue widthLoop
            }

            if(matix.verification0() === 0) {
                matrix[l].push(null)
                continue widthLoop
            }

            if(verified_sets.length > 0) {
                if(width == verified_sets.at(-1)[1]) {
                    matrix[l].push(null)
                    continue lengthLoop
                }
                if(length > verified_sets.at(-1)[0] && width > verified_sets.at(-1)[1]) {
                    continue lengthLoop
                }
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
            vl_total = matix.get_vl_total()
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

            // F_a_dr_st_r = matix.get_F_a_dr_st_r()
            // F_a_dr_lt_r = matix.get_F_a_dr_lt_r()
            // F_a_ud_st_r = matix.get_F_a_ud_st_r()
            // F_a_ud_lt_r = matix.get_F_a_ud_lt_r()
            // F_p_dr_st_r = matix.get_F_p_dr_st_r()
            // F_p_dr_lt_r = matix.get_F_p_dr_lt_r()
            // F_p_ud_st_r = matix.get_F_p_ud_st_r()
            // F_p_ud_lt_r = matix.get_F_p_ud_lt_r()
            h_res_dr_st_l = matix.get_h_res_dr_st_l()
            h_res_dr_lt_l = matix.get_h_res_dr_lt_l()
            h_res_ud_st_l = matix.get_h_res_ud_st_l()
            h_res_ud_lt_l = matix.get_h_res_ud_lt_l()
            h_res_dr_st_b = matix.get_h_res_dr_st_b()
            h_res_dr_lt_b = matix.get_h_res_dr_lt_b()
            h_res_ud_st_b = matix.get_h_res_ud_st_b()
            h_res_ud_lt_b = matix.get_h_res_ud_lt_b()
            // h_res_dr_st_rl = matix.get_h_res_dr_st_rl()
            // h_res_dr_lt_rl = matix.get_h_res_dr_lt_rl()
            // h_res_ud_st_rl = matix.get_h_res_ud_st_rl()
            // h_res_ud_lt_rl = matix.get_h_res_ud_lt_rl()
            // h_res_dr_st_rb = matix.get_h_res_dr_st_rb()
            // h_res_dr_lt_rb = matix.get_h_res_dr_lt_rb()
            // h_res_ud_st_rb = matix.get_h_res_ud_st_rb()
            // h_res_ud_lt_rb = matix.get_h_res_ud_lt_rb()
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
            // m_F_a_dr_st_r = matix.get_m_F_a_dr_st_r()
            // m_F_a_dr_lt_r = matix.get_m_F_a_dr_lt_r()
            // m_F_a_ud_st_r = matix.get_m_F_a_ud_st_r()
            // m_F_a_ud_lt_r = matix.get_m_F_a_ud_lt_r()
            // m_F_p_dr_st_r = matix.get_m_F_p_dr_st_r()
            // m_F_p_dr_lt_r = matix.get_m_F_p_dr_lt_r()
            // m_F_p_ud_st_r = matix.get_m_F_p_ud_st_r()
            // m_F_p_ud_lt_r = matix.get_m_F_p_ud_lt_r()
            m_r = matix.get_m_r()
            m_total_dr_st_l = matix.get_m_total_dr_st_l()
            m_total_dr_lt_l = matix.get_m_total_dr_lt_l()
            m_total_ud_st_l = matix.get_m_total_ud_st_l()
            m_total_ud_lt_l = matix.get_m_total_ud_lt_l()
            m_total_dr_st_b = matix.get_m_total_dr_st_b()
            m_total_dr_lt_b = matix.get_m_total_dr_lt_b()
            m_total_ud_st_b = matix.get_m_total_ud_st_b()
            m_total_ud_lt_b = matix.get_m_total_ud_lt_b()
            // m_total_dr_st_rl = matix.get_m_total_dr_st_rl()
            // m_total_dr_lt_rl = matix.get_m_total_dr_lt_rl()
            // m_total_ud_st_rl = matix.get_m_total_ud_st_rl()
            // m_total_ud_lt_rl = matix.get_m_total_ud_lt_rl()
            // m_total_dr_st_rb = matix.get_m_total_dr_st_rb()
            // m_total_dr_lt_rb = matix.get_m_total_dr_lt_rb()
            // m_total_ud_st_rb = matix.get_m_total_ud_st_rb()
            // m_total_ud_lt_rb = matix.get_m_total_ud_lt_rb()
            m_dim_length = matix.get_m_dim_length()
            m_dim_width = matix.get_m_dim_width()
            m_dim_r_length = matix.get_m_dim_r_length()
            m_dim_r_width = matix.get_m_dim_r_width()

            // //EFFECTIVE DIMENSIONS
            e_total_dr_st_l = matix.get_e_total_dr_st_l()
            e_total_dr_lt_l = matix.get_e_total_dr_lt_l()
            e_total_ud_st_l = matix.get_e_total_ud_st_l()
            e_total_ud_lt_l = matix.get_e_total_ud_lt_l()
            e_total_dr_st_b = matix.get_e_total_dr_st_b()
            e_total_dr_lt_b = matix.get_e_total_dr_lt_b()
            e_total_ud_st_b = matix.get_e_total_ud_st_b()
            e_total_ud_lt_b = matix.get_e_total_ud_lt_b()
            // e_total_dr_st_rl = matix.get_e_total_dr_st_rl()
            // e_total_dr_lt_rl = matix.get_e_total_dr_lt_rl()
            // e_total_ud_st_rl = matix.get_e_total_ud_st_rl()
            // e_total_ud_lt_rl = matix.get_e_total_ud_lt_rl()
            // e_total_dr_st_rb = matix.get_e_total_dr_st_rb()
            // e_total_dr_lt_rb = matix.get_e_total_dr_lt_rb()
            // e_total_ud_st_rb = matix.get_e_total_ud_st_rb()
            // e_total_ud_lt_rb = matix.get_e_total_ud_lt_rb()
            // e_total_dr_st_r = matix.get_e_total_dr_st_r()
            // e_total_dr_lt_r = matix.get_e_total_dr_lt_r()
            // e_total_ud_st_r = matix.get_e_total_ud_st_r()
            // e_total_ud_lt_r = matix.get_e_total_ud_lt_r()
            e_dim_l = matix.get_e_dim_l()
            e_dim_b = matix.get_e_dim_b()
            // e_dim_rl = matix.get_e_dim_rl() 
            // e_dim_rb = matix.get_e_dim_rb()
            // e_dim_r = matix.get_e_dim_r()
            // v_dr_st_r = matix.get_v_dr_st_r()
            // v_dr_lt_r = matix.get_v_dr_lt_r()
            // v_ud_st_r = matix.get_v_ud_st_r() 
            // v_ud_lt_r = matix.get_v_ud_lt_r()
            // v_dim_r = matix.get_v_dim_r() 
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

            // // GROUND BEARING CAPACITY
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

            // // MOMENT CAPACITY
            f_cd = matix.get_f_cd()
            f_cm = matix.get_f_cm()
            f_ctm = matix.get_f_ctm()
            E_cm = matix.get_E_cm()
            sigma_r1 = matix.get_sigma_r1()
            sigma_r4 = matix.get_sigma_r4()
            gamma_m = matix.get_gamma_m()
            f_ctd_fl = matix.get_f_ctd_fl()
            M_n = matix.get_M_n()
            f_yd = matix.get_f_yd()
            A_c = matix.get_A_c()
            rho = matix.get_rho()
            h_ux = matix.get_h_ux()
            ef_height = matix.get_ef_height()
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



            //PRE_VERIFICATIONS
            
            pre_temp = []

            if (vl_external < 0) {
                pre_temp.push(pre_verification2())          
            }
            pre_temp.push(pre_verification3())
            pre_temp.push(pre_verification4())
            pre_temp.push(pre_verification5())
            pre_temp.push(pre_verification6())
            pre_temp.push(pre_verification7())
            pre_temp.push(pre_verification8())
            pre_temp.push(pre_verification9())
            pre_temp.push(pre_verification10())

            if(pre_temp.includes(0)) {
                matrix[l].push(null)
                continue widthLoop
            }

            
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
            fn_M_dim_l_arr = []
            // // Y Values Chart 2
            fn_M_dim_b_arr = []
            // // Y Values Chart 3
            fn_V_dim_l_arr = []
            // // Y Values Chart 4
            fn_V_dim_b_arr = []

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
        
                fn_M_dr_st_l_arr.push(matix.get_fn_M_dr_st_l_corr(x))
                fn_M_dr_lt_l_arr.push(matix.get_fn_M_dr_lt_l_corr(x))
                fn_M_ud_st_l_arr.push(matix.get_fn_M_ud_st_l_corr(x))
                fn_M_ud_lt_l_arr.push(matix.get_fn_M_ud_lt_l_corr(x))
                fn_M_dim_l_arr.push(matix.get_fn_M_dim_l_corr(x))
                
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
                fn_M_dim_b_arr.push(matix.get_fn_M_dim_b_corr(x))
            
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

            
            M_dr_st_l = matix.get_M_dr_st_l()
            M_dr_lt_l = matix.get_M_dr_lt_l()
            M_ud_st_l = matix.get_M_ud_st_l()
            M_ud_lt_l = matix.get_M_ud_lt_l()
            M_Edp_dr_l = matix.get_M_Edp_dr_l()
            M_Edp_ud_l = matix.get_M_Edp_ud_l()
            M_Ed_l = matix.get_M_Ed_l()

            M_dr_st_b = matix.get_M_dr_st_b()
            M_dr_lt_b = matix.get_M_dr_lt_b()
            M_ud_st_b = matix.get_M_ud_st_b()
            M_ud_lt_b = matix.get_M_ud_lt_b()
            M_Edp_dr_b = matix.get_M_Edp_dr_b()
            M_Edp_ud_b = matix.get_M_Edp_ud_b()
            M_Ed_b = matix.get_M_Ed_b()
            
            v = matix.get_v()
            rho_total = matix.get_rho_total()
            k = matix.get_k()
            v_max = matix.get_v_max()
            v_c = matix.get_v_c()
            v_r = matix.get_v_r()
            v_f = matix.get_v_f()
            u_0 = matix.get_u_0()
            u_1 = matix.get_u_1()
            P_u_0 = matix.get_P_u_0()
            P_u_1 = matix.get_P_u_1()
            P_u = matix.get_P_u()

            temp = []
            temp.push(matix.verification4a())
            temp.push(matix.verification4b())
            temp.push(matix.verification5())
            temp.push(matix.verification6())
            temp.push(matix.verification7())


            if(temp.includes(0)) { 


                matrix[l].push(null)
            } else { 
                

                
                if(verified_sets.length > 0) {

                    if((length > verified_sets.at(-1)[0] && width >= verified_sets.at(-1)[1]) || (width > verified_sets.at(-1)[1] && length >= verified_sets.at(-1)[0])) {

                        matrix[l].push(7)
                        continue lengthLoop
                    } 
                }

                //verified

                matrix[l].push(volume)
                verified_sets.push([length, width, volume])
                continue lengthLoop
            } 

        }

    }


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

    // widths.unshift(0)
    // csvWriter  = createCsvWriter({
    //     header: widths,
    //     path: './matrices/matrix2.csv'
    // })

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

    // csvWriter.writeRecords(matrix)
    //     .then(() => {
    //         console.log('...loops completed and matrix2.csv file updated!')
    //     });

    

}






