get_volume = (point_foundation_shape, length, width, radius, height) => {
    if (point_foundation_shape == 'rectangular') {
        return length * width * height / 1000000000
    } else if (point_foundation_shape == 'circular') {
        return Math.PI * Math.pow(radius, 2) * height / 1000000000
    }
}

get_q = (depth, ground_density) => depth / 1000 * ground_density

get_g = (ground_density, depth, height) => {
    if (height < depth) {
        return ground_density * (depth - height) / 1000;
    } else if (height >= depth) {
            return 0;
    }
}

get_dr_st_af_d = (dr_st_af_k, af_pc) => 180 / Math.PI * Math.atan(Math.tan(dr_st_af_k * Math.PI / 180) / af_pc)

get_dr_lt_af_d = (dr_lt_af_k, af_pc) => 180 / Math.PI * Math.atan(Math.tan(dr_lt_af_k * Math.PI / 180) / af_pc)

get_ud_st_af_d = (ud_st_af_k, af_pc) => 180 / Math.PI * Math.atan(Math.tan(ud_st_af_k * Math.PI / 180) / af_pc)

get_ud_lt_af_d = (ud_lt_af_k, af_pc) => 180 / Math.PI * Math.atan(Math.tan(ud_lt_af_k * Math.PI / 180) / af_pc)

get_dr_cohesion_pc = () => 1.2

get_ud_cohesion_pc = () => 1.8

get_dr_st_cohesion_d = (dr_st_cohesion_k, dr_cohesion_pc) => dr_st_cohesion_k / dr_cohesion_pc

get_dr_lt_cohesion_d = (dr_lt_cohesion_k, dr_cohesion_pc) =>  dr_lt_cohesion_k / dr_cohesion_pc

get_ud_st_cohesion_d = (ud_st_cohesion_k, ud_cohesion_pc) =>  ud_st_cohesion_k / ud_cohesion_pc

get_ud_lt_cohesion_d = (ud_lt_cohesion_k, ud_cohesion_pc) => ud_lt_cohesion_k / ud_cohesion_pc

get_a_d_dr_st = (fabrication_method, dr_st_cohesion_d) => {
    if (fabrication_method == 'in_situ') {
        return a_d_dr_st = dr_st_cohesion_d
    } else if (fabrication_method == 'prefab') {
        return a_d_dr_st = 0   
    }
}

get_a_d_dr_lt = (fabrication_method, dr_lt_cohesion_d) => {
    if (fabrication_method == 'in_situ') {
        return a_d_dr_lt = dr_lt_cohesion_d
    } else if (fabrication_method == 'prefab') {
        return a_d_dr_lt = 0   
    }
}

get_d_c = () => 1

get_d_q = () => 1

get_K_g_a_dr_st = (dr_st_af_d) => (1 - Math.sin(dr_st_af_d * Math.PI / 180)) / (1 + Math.sin(dr_st_af_d * Math.PI / 180))

get_K_g_a_dr_lt = (dr_lt_af_d) => (1 - Math.sin(dr_lt_af_d * Math.PI / 180)) / (1 + Math.sin(dr_lt_af_d * Math.PI / 180))

get_K_g_a_ud_st = (ud_st_af_d) => (1 - Math.sin(ud_st_af_d * Math.PI / 180)) / (1 + Math.sin(ud_st_af_d * Math.PI / 180))

get_K_g_a_ud_lt = (ud_lt_af_d) => (1 - Math.sin(ud_lt_af_d * Math.PI / 180)) / (1 + Math.sin(ud_lt_af_d * Math.PI / 180))

get_K_c_a_dr_st = (dr_st_af_d) => -(2 * Math.cos(dr_st_af_d * Math.PI / 180)) / (1 + Math.sin(dr_st_af_d * Math.PI / 180))

get_K_c_a_dr_lt = (dr_lt_af_d) => -(2 * Math.cos(dr_lt_af_d * Math.PI / 180)) / (1 + Math.sin(dr_lt_af_d * Math.PI / 180))

get_K_c_a_ud_st = (ud_st_af_d) => -(2 * Math.cos(ud_st_af_d * Math.PI / 180)) / (1 + Math.sin(ud_st_af_d * Math.PI / 180))

get_K_c_a_ud_lt = (ud_lt_af_d) => -(2 * Math.cos(ud_lt_af_d * Math.PI / 180)) / (1 + Math.sin(ud_lt_af_d * Math.PI / 180))

get_K_g_p_dr_st = (dr_st_af_d) => (1 + Math.sin(dr_st_af_d * Math.PI / 180)) / (1 - Math.sin(dr_st_af_d * Math.PI / 180))

get_K_g_p_dr_lt = (dr_lt_af_d) => (1 + Math.sin(dr_lt_af_d * Math.PI / 180)) / (1 - Math.sin(dr_lt_af_d * Math.PI / 180))

get_K_g_p_ud_st = (ud_st_af_d) => (1 + Math.sin(ud_st_af_d * Math.PI / 180)) / (1 - Math.sin(ud_st_af_d * Math.PI / 180))

get_K_g_p_ud_lt = (ud_lt_af_d) => (1 + Math.sin(ud_lt_af_d * Math.PI / 180)) / (1 - Math.sin(ud_lt_af_d * Math.PI / 180))

get_K_c_p_dr_st = (dr_st_af_d) => (2 * Math.cos(dr_st_af_d * Math.PI / 180)) / (1 - Math.sin(dr_st_af_d * Math.PI / 180))

get_K_c_p_dr_lt = (dr_lt_af_d) => (2 * Math.cos(dr_lt_af_d * Math.PI / 180)) / (1 - Math.sin(dr_lt_af_d * Math.PI / 180))

get_K_c_p_ud_st = (ud_st_af_d) => (2 * Math.cos(ud_st_af_d * Math.PI / 180)) / (1 - Math.sin(ud_st_af_d * Math.PI / 180))

get_K_c_p_ud_lt = (ud_lt_af_d) => (2 * Math.cos(ud_lt_af_d * Math.PI / 180)) / (1 - Math.sin(ud_lt_af_d * Math.PI / 180))

get_self_weight = (volume, concrete_density) => volume * concrete_density

get_ground_area = (depth, height, column_shape, volume, column_length, column_width, column_radius) => {
    if (depth > height) {
        if (column_shape == 'rectangular') {
            return (volume / (height / 1000) - column_length * column_width / 1000000)
        } else if (column_shape == 'circular') {
            return (volume / (height / 1000) - Math.PI * Math.pow(column_radius, 2) / 1000000)
        }
    } else if (depth <= height) {
        return  0
    }
} 

get_ground_weight = (ground_area, g) => ground_area * g

get_vl_total = (self_weight, ground_weight, vl_external) => self_weight + ground_weight + vl_external

get_vl_dim_total = (vl_external, self_weight) => vl_external + self_weight

get_vl_total_internal = (vl_external, self_weight) => vl_external + self_weight

get_vl_total_max = (vl_total_dr_st, vl_total_dr_lt, vl_total_ud_st, vl_total_ud_lt) => Math.max(vl_total_dr_st, vl_total_dr_lt, vl_total_ud_st, vl_total_ud_lt)

get_hl_total = (hl_length, hl_width) => Math.sqrt(Math.pow(hl_length, 2) + Math.pow(hl_width, 2))

get_d_0_dr_st = (K_c_a_dr_st, dr_st_cohesion_d, K_p_a_dr_st, terrain_live_load, ground_density, K_g_a_dr_st) => -((K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load) / (ground_density * K_g_a_dr_st)) * 1000

get_d_0_dr_lt = (K_c_a_dr_lt, dr_lt_cohesion_d, K_p_a_dr_lt, terrain_live_load, ground_density, K_g_a_dr_lt) => -((K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load) / (ground_density * K_g_a_dr_lt)) * 1000

get_d_0_ud_st = (K_c_a_ud_st, ud_st_cohesion_d, K_p_a_ud_st, terrain_live_load, ground_density, K_g_a_ud_st) => -((K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load) / (ground_density * K_g_a_ud_st)) * 1000

get_d_0_ud_lt = (K_c_a_ud_lt, ud_lt_cohesion_d, K_p_a_ud_lt, terrain_live_load, ground_density, K_g_a_ud_lt) => -((K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load) / (ground_density * K_g_a_ud_lt)) * 1000

get_F_a_dr_st_l = (d_0_dr_st, depth, height, width, K_c_a_dr_st, dr_st_cohesion_d, K_p_a_dr_st, terrain_live_load, ground_density, K_g_a_dr_st) => {
    if (d_0_dr_st >= depth) {
        return 0
    } else if (d_0_dr_st < depth && (depth - height) > 0) {
        if ((depth - height) <= d_0_dr_st) {
            return width / 1000 * (Math.pow(K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st, 2) / (2 * ground_density * K_g_a_dr_st))
        } else if ((depth - height) > d_0_dr_st) {
            return width / 1000 * (height / 1000 * (2 * K_c_a_dr_st * dr_st_cohesion_d + 2 * K_p_a_dr_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_st - height / 1000 * ground_density * K_g_a_dr_st) / 2)
        }
    } else if (d_0_dr_st < depth && (depth - height) <= 0) {
        if (0 <= d_0_dr_st) {
            return width / 1000 * (Math.pow(K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st, 2) / (2 * ground_density * K_g_a_dr_st))
        } else if (0 > d_0_dr_st) {
            return width / 1000 * (depth / 1000 * (2 * K_c_a_dr_st * dr_st_cohesion_d + 2 * K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st) / 2)
        }
    }
}

get_F_a_dr_lt_l = (d_0_dr_lt, depth, height, width, K_c_a_dr_lt, dr_lt_cohesion_d, K_p_a_dr_lt, terrain_live_load, ground_density, K_g_a_dr_lt) => {
    if (d_0_dr_lt >= depth) {
        return 0
    } else if (d_0_dr_lt < depth && (depth - height) > 0) {
        if ((depth - height) <= d_0_dr_lt) {
            return width / 1000 * (Math.pow(K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt, 2) / (2 * ground_density * K_g_a_dr_lt))
        } else if ((depth - height) > d_0_dr_lt) {
            return width / 1000 * (height / 1000 * (2 * K_c_a_dr_lt * dr_lt_cohesion_d + 2 * K_p_a_dr_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_lt - height / 1000 * ground_density * K_g_a_dr_lt) / 2)
        }
    } else if (d_0_dr_lt < depth && (depth - height) <= 0) {
        if (0 <= d_0_dr_lt) {
            return width / 1000 * (Math.pow(K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt, 2) / (2 * ground_density * K_g_a_dr_lt))
        } else if (0 > d_0_dr_lt) {
            return width / 1000 * (depth / 1000 * (2 * K_c_a_dr_lt * dr_lt_cohesion_d + 2 * K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt) / 2)
        }
    }
}

get_F_a_ud_st_l = (d_0_ud_st, depth, height, width, K_c_a_ud_st, ud_st_cohesion_d, K_p_a_ud_st, terrain_live_load, ground_density, K_g_a_ud_st) => {
    if (d_0_ud_st >= depth) {
        return 0
    } else if (d_0_ud_st < depth && (depth - height) > 0) {
        if ((depth - height) <= d_0_ud_st) {
            return width / 1000 * (Math.pow(K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st, 2) / (2 * ground_density * K_g_a_ud_st))
        } else if ((depth - height) > d_0_ud_st) {
            return width / 1000 * (height / 1000 * (2 * K_c_a_ud_st * ud_st_cohesion_d + 2 * K_p_a_ud_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_st - height / 1000 * ground_density * K_g_a_ud_st) / 2)
        }
    } else if (d_0_ud_st < depth && (depth - height) <= 0) {
        if (0 <= d_0_ud_st) {
            return width / 1000 * (Math.pow(K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st, 2) / (2 * ground_density * K_g_a_ud_st))
        } else if (0 > d_0_ud_st) {
            return width / 1000 * (depth / 1000 * (2 * K_c_a_ud_st * ud_st_cohesion_d + 2 * K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st) / 2)
        }
    }
}

get_F_a_ud_lt_l = (d_0_ud_lt, depth, height, width, K_c_a_ud_lt, ud_lt_cohesion_d, K_p_a_ud_lt, terrain_live_load, ground_density, K_g_a_ud_lt) => {
    if (d_0_ud_lt >= depth) {
        return 0
    } else if (d_0_ud_lt < depth && (depth - height) > 0) {
        if ((depth - height) <= d_0_ud_lt) {
            return width / 1000 * (Math.pow(K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt, 2) / (2 * ground_density * K_g_a_ud_lt))
        } else if ((depth - height) > d_0_ud_lt) {
            return width / 1000 * (height / 1000 * (2 * K_c_a_ud_lt * ud_lt_cohesion_d + 2 * K_p_a_ud_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_lt - height / 1000 * ground_density * K_g_a_ud_lt) / 2)
        }
    } else if (d_0_ud_lt < depth && (depth - height) <= 0) {
        if (0 <= d_0_ud_lt) {
            return width / 1000 * (Math.pow(K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt, 2) / (2 * ground_density * K_g_a_ud_lt))
        } else if (0 > d_0_ud_lt) {
            return width / 1000 * (depth / 1000 * (2 * K_c_a_ud_lt * ud_lt_cohesion_d + 2 * K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt) / 2)
        }
    }
}

get_F_p_dr_st_l = (height, depth, width, K_c_p_dr_st, dr_st_cohesion_d, ground_density, K_g_p_dr_st) => {
    if (height >= depth) {
        return width / 1000 * (depth / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_st) / 2)
    } else if (height < depth) {
       return width / 1000 * (height / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_st - height / 1000 * ground_density * K_g_p_dr_st) / 2)
    }
}

get_F_p_dr_lt_l = (height, depth, width, K_c_p_dr_lt, dr_lt_cohesion_d, ground_density, K_g_p_dr_lt) => {
    if (height >= depth) {
        return width / 1000 * (depth / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_lt) / 2)
    } else if (height < depth) {
        return width / 1000 * (height / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_lt - height / 1000 * ground_density * K_g_p_dr_lt) / 2)
    }
}

get_F_p_ud_st_l = (height, depth, width, K_c_p_ud_st, ud_st_cohesion_d, ground_density, K_g_p_ud_st) => {
    if (height >= depth) {
        return width / 1000 * (depth / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_st) / 2)
    } else if (height < depth) {
        return width / 1000 * (height / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_st - height / 1000 * ground_density * K_g_p_ud_st) / 2)
    }
}

get_F_p_ud_lt_l = (height, depth, width, K_c_p_ud_lt, ud_lt_cohesion_d, ground_density, K_g_p_ud_lt) => {
    if (height >= depth) {
        return width / 1000 * (depth / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_lt) / 2)
    } else if (height < depth) {
        return width / 1000 * (height / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_lt - height / 1000 * ground_density * K_g_p_ud_lt) / 2)
    }
}

get_F_a_dr_st_b = (d_0_dr_st, depth, height, length, K_c_a_dr_st, dr_st_cohesion_d, K_p_a_dr_st, terrain_live_load, ground_density, K_g_a_dr_st) => {
    if (d_0_dr_st >= depth) {
        return 0
    } else if (d_0_dr_st < depth && (depth - height) > 0) {
        if ((depth - height) <= d_0_dr_st) {
            return length / 1000 * (Math.pow(K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st, 2) / (2 * ground_density * K_g_a_dr_st))
        } else if ((depth - height) > d_0_dr_st) {
            return length / 1000 * (height / 1000 * (2 * K_c_a_dr_st * dr_st_cohesion_d + 2 * K_p_a_dr_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_st - height / 1000 * ground_density * K_g_a_dr_st) / 2)
        }
    } else if (d_0_dr_st < depth && (depth - height) <= 0) {
        if (0 <= d_0_dr_st) {
            return length / 1000 * (Math.pow(K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st, 2) / (2 * ground_density * K_g_a_dr_st))
        } else if (0 > d_0_dr_st) {
            return length / 1000 * (depth / 1000 * (2 * K_c_a_dr_st * dr_st_cohesion_d + 2 * K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st) / 2)
        }
    }
}

get_F_a_dr_lt_b = (d_0_dr_lt, depth, height, length, K_c_a_dr_lt, dr_lt_cohesion_d, K_p_a_dr_lt, terrain_live_load, ground_density, K_g_a_dr_lt) => {
    if (d_0_dr_lt >= depth) {
        return 0
    } else if (d_0_dr_lt < depth && (depth - height) > 0) {
        if ((depth - height) <= d_0_dr_lt) {
            return length / 1000 * (Math.pow(K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt, 2) / (2 * ground_density * K_g_a_dr_lt))
        } else if ((depth - height) > d_0_dr_lt) {
            return length / 1000 * (height / 1000 * (2 * K_c_a_dr_lt * dr_lt_cohesion_d + 2 * K_p_a_dr_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_lt - height / 1000 * ground_density * K_g_a_dr_lt) / 2)
        }
    } else if (d_0_dr_lt < depth && (depth - height) <= 0) {
        if (0 <= d_0_dr_lt) {
            return length / 1000 * (Math.pow(K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt, 2) / (2 * ground_density * K_g_a_dr_lt))
        } else if (0 > d_0_dr_lt) {
            return length / 1000 * (depth / 1000 * (2 * K_c_a_dr_lt * dr_lt_cohesion_d + 2 * K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt) / 2)
        }
    }
}

get_F_a_ud_st_b = (d_0_ud_st, depth, height, length, K_c_a_ud_st, ud_st_cohesion_d, K_p_a_ud_st, terrain_live_load, ground_density, K_g_a_ud_st) => {
    if (d_0_ud_st >= depth) {
        return 0
    } else if (d_0_ud_st < depth && (depth - height) > 0) {
        if ((depth - height) <= d_0_ud_st) {
            return length / 1000 * (Math.pow(K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st, 2) / (2 * ground_density * K_g_a_ud_st))
        } else if ((depth - height) > d_0_ud_st) {
            return length / 1000 * (height / 1000 * (2 * K_c_a_ud_st * ud_st_cohesion_d + 2 * K_p_a_ud_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_st - height / 1000 * ground_density * K_g_a_ud_st) / 2)
        }
    } else if (d_0_ud_st < depth && (depth - height) <= 0) {
        if (0 <= d_0_ud_st) {
            return length / 1000 * (Math.pow(K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st, 2) / (2 * ground_density * K_g_a_ud_st))
        } else if (0 > d_0_ud_st) {
            return length / 1000 * (depth / 1000 * (2 * K_c_a_ud_st * ud_st_cohesion_d + 2 * K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st) / 2)
        }
    }
}

get_F_a_ud_lt_b = (d_0_ud_lt, depth, height, length, K_c_a_ud_lt, ud_lt_cohesion_d, K_p_a_ud_lt, terrain_live_load, ground_density, K_g_a_ud_lt) => {
    if (d_0_ud_lt >= depth) {
        return 0
    } else if (d_0_ud_lt < depth && (depth - height) > 0) {
        if ((depth - height) <= d_0_ud_lt) {
            return length / 1000 * (Math.pow(K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt, 2) / (2 * ground_density * K_g_a_ud_lt))
        } else if ((depth - height) > d_0_ud_lt) {
            return length / 1000 * (height / 1000 * (2 * K_c_a_ud_lt * ud_lt_cohesion_d + 2 * K_p_a_ud_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_lt - height / 1000 * ground_density * K_g_a_ud_lt) / 2)
        }
    } else if (d_0_ud_lt < depth && (depth - height) <= 0) {
        if ((depth - height) <= d_0_ud_lt) {
            return length / 1000 * (Math.pow(K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt, 2) / (2 * ground_density * K_g_a_ud_lt))
        } else if ((depth - height) > d_0_ud_lt) {
            return length / 1000 * (depth / 1000 * (2 * K_c_a_ud_lt * ud_lt_cohesion_d + 2 * K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt) / 2)
        }
    }
}

get_F_p_dr_st_b = (height, depth, length, K_c_p_dr_st, dr_st_cohesion_d, ground_density, K_g_p_dr_st) => {
    if (height >= depth) {
        return length / 1000 * (depth / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_st) / 2)
        } else if (height < depth) {
        return length / 1000 * (height / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_st - height / 1000 * ground_density * K_g_p_dr_st) / 2)
   }
}

get_F_p_dr_lt_b = (height, depth, length, K_c_p_dr_lt, dr_lt_cohesion_d, ground_density, K_g_p_dr_lt) => {
    if (height >= depth) {
        return length / 1000 * (depth / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_lt) / 2)
    } else if (height < depth) {
        return length / 1000 * (height / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_lt - height / 1000 * ground_density * K_g_p_dr_lt) / 2)
    }
}

get_F_p_ud_st_b = (height, depth, length, K_c_p_ud_st, ud_st_cohesion_d, ground_density, K_g_p_ud_st) => {
    if (height >= depth) {
        return length / 1000 * (depth / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_st) / 2)
    } else if (height < depth) {
        return length / 1000 * (height / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_st - height / 1000 * ground_density * K_g_p_ud_st) / 2)
    }
}

get_F_p_ud_lt_b = (height, depth, length, K_c_p_ud_lt, ud_lt_cohesion_d, ground_density, K_g_p_ud_lt) => {
    if (height >= depth) {
        return length / 1000 * (depth / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_lt) / 2)  
    } else if (height < depth) {
        return length / 1000 * (height / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_lt - height / 1000 * ground_density * K_g_p_ud_lt) / 2)
    }
}



get_F_a_dr_st_r = (d_0_dr_st, depth, height, radius, K_c_a_dr_st, dr_st_cohesion_d, K_p_a_dr_st, terrain_live_load, ground_density, K_g_a_dr_st) => {
    if (d_0_dr_st >= depth) {
        return 0
    } else if (d_0_dr_st < depth && (depth - height) > 0) {
        if ((depth - height) <= d_0_dr_st) {
            return Math.PI / 2 * radius / 1000 * (Math.pow(K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st, 2) / (2 * ground_density * K_g_a_dr_st))
        } else if ((depth - height) > d_0_dr_st) {
            return Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_a_dr_st * dr_st_cohesion_d + 2 * K_p_a_dr_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_st - height / 1000 * ground_density * K_g_a_dr_st) / 2)
        }
    } else if (d_0_dr_st < depth && (depth - height) <= 0) {
        if (0 <= d_0_dr_st) {
            return Math.PI / 2 * radius / 1000 * (Math.pow(K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st, 2) / (2 * ground_density * K_g_a_dr_st))
        } else if (0 > d_0_dr_st) {
            return Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_a_dr_st * dr_st_cohesion_d + 2 * K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st) / 2)
        }
    }
}

get_F_a_dr_lt_r = (d_0_dr_lt, depth, height, radius, K_c_a_dr_lt, dr_lt_cohesion_d, K_p_a_dr_lt, terrain_live_load, ground_density, K_g_a_dr_lt) => {
    if (d_0_dr_lt >= depth) {
        return 0
    } else if (d_0_dr_lt < depth && (depth - height) > 0) {
        if ((depth - height) <= d_0_dr_lt) {
            return Math.PI / 2 * radius / 1000 * (Math.pow(K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt, 2) / (2 * ground_density * K_g_a_dr_lt))
        } else if ((depth - height) > d_0_dr_lt) {
            return Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_a_dr_lt * dr_lt_cohesion_d + 2 * K_p_a_dr_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_lt - height / 1000 * ground_density * K_g_a_dr_lt) / 2)
        }
    } else if (d_0_dr_lt < depth && (depth - height) <= 0) {
        if (0 <= d_0_dr_lt) {
            return Math.PI / 2 * radius / 1000 * (Math.pow(K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt, 2) / (2 * ground_density * K_g_a_dr_lt))
        } else if (0 > d_0_dr_lt) {
            return Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_a_dr_lt * dr_lt_cohesion_d + 2 * K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt) / 2)
        }
    }
}

get_F_a_ud_st_r = (d_0_ud_st, depth, height, radius, K_c_a_ud_st, ud_st_cohesion_d, K_p_a_ud_st, terrain_live_load, ground_density, K_g_a_ud_st) => {
    if (d_0_ud_st >= depth) {
        return 0
    } else if (d_0_ud_st < depth && (depth - height) > 0) {
        if ((depth - height) <= d_0_ud_st) {
            return Math.PI / 2 * radius / 1000 * (Math.pow(K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st, 2) / (2 * ground_density * K_g_a_ud_st))
        } else if ((depth - height) > d_0_ud_st) {
            return Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_a_ud_st * ud_st_cohesion_d + 2 * K_p_a_ud_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_st - height / 1000 * ground_density * K_g_a_ud_st) / 2)
        }
    } else if (d_0_ud_st < depth && (depth - height) <= 0) {
        if (0 <= d_0_ud_st) {
            return Math.PI / 2 * radius / 1000 * (Math.pow(K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st, 2) / (2 * ground_density * K_g_a_ud_st))
        } else if (0 > d_0_ud_st) {
            return Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_a_ud_st * ud_st_cohesion_d + 2 * K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st) / 2)
        }
    }
}

get_F_a_ud_lt_r = (d_0_ud_lt, depth, height, radius, K_c_a_ud_lt, ud_lt_cohesion_d, K_p_a_ud_lt, terrain_live_load, ground_density, K_g_a_ud_lt) => {
    if (d_0_ud_lt >= depth) {
        return 0
    } else if (d_0_ud_lt < depth && (depth - height) > 0) {
        if ((depth - height) <= d_0_ud_lt) {
            return Math.PI / 2 * radius / 1000 * (Math.pow(K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt, 2) / (2 * ground_density * K_g_a_ud_lt))
        } else if ((depth - height) > d_0_ud_lt) {
            return Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_a_ud_lt * ud_lt_cohesion_d + 2 * K_p_a_ud_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_lt - height / 1000 * ground_density * K_g_a_ud_lt) / 2)
        }
    } else if (d_0_ud_lt < depth && (depth - height) <= 0) {
        if (0 <= d_0_ud_lt) {
            return Math.PI / 2 * radius / 1000 * (Math.pow(K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt, 2) / (2 * ground_density * K_g_a_ud_lt))
        } else if (0 > d_0_ud_lt) {
            return Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_a_ud_lt * ud_lt_cohesion_d + 2 * K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt) / 2)
        }
    }
}

get_F_p_dr_st_r = (height, depth, radius, K_c_p_dr_st, dr_st_cohesion_d, ground_density, K_g_p_dr_st) => {
    if (height >= depth) {
        return Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_st) / 2)
    } else if (height < depth) {
        return Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_st - height / 1000 * ground_density * K_g_p_dr_st) / 2)
    }
}

get_F_p_dr_lt_r = (height, depth, radius, K_c_p_dr_lt, dr_lt_cohesion_d, ground_density, K_g_p_dr_lt) => {
    if (height >= depth) {
        return Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_lt) / 2)
    } else if (height < depth) {
        return Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_lt - height / 1000 * ground_density * K_g_p_dr_lt) / 2)
    }
}

get_F_p_ud_st_r = (height, depth, radius, K_c_p_ud_st, ud_st_cohesion_d, ground_density, K_g_p_ud_st) => {
    if (height >= depth) {
        return Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_st) / 2)
    } else if (height < depth) {
        return Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_st - height / 1000 * ground_density * K_g_p_ud_st) / 2)
    }
}

get_F_p_ud_lt_r = (height, depth, radius, K_c_p_ud_lt, ud_lt_cohesion_d, ground_density, K_g_p_ud_lt) => {
    if (height >= depth) {
        return Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_lt) / 2)
    } else if (height < depth) {
        return Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_lt - height / 1000 * ground_density * K_g_p_ud_lt) / 2)
    }
}

get_h_res_dr_st_l = (F_p_dr_st_l, hl_length, F_a_dr_st_l) => {
    if (F_p_dr_st_l >= Math.abs(hl_length) + F_a_dr_st_l) {
        return 0
    } else {
        if (hl_length < 0) {
            return hl_length - F_a_dr_st_l + F_p_dr_st_l
        } else if (hl_length >= 0) {
            return hl_length + F_a_dr_st_l - F_p_dr_st_l
        }
    }
}

































