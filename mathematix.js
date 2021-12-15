module.exports.get_volume = (point_foundation_shape, length, width, radius, height) => {
    if (point_foundation_shape == 'rectangular') {
        return length * width * height / 1000000000
    } else if (point_foundation_shape == 'circular') {
        return Math.PI * Math.pow(radius, 2) * height / 1000000000
    }
}

module.exports.get_q = (depth, ground_density) => depth / 1000 * ground_density

module.exports.get_g = (ground_density, depth, height) => {
    if (height < depth) {
        return ground_density * (depth - height) / 1000;
    } else if (height >= depth) {
            return 0;
    }
}

module.exports.get_dr_st_af_d = (dr_st_af_k, af_pc) => 180 / Math.PI * Math.atan(Math.tan(dr_st_af_k * Math.PI / 180) / af_pc)

module.exports.get_dr_lt_af_d = (dr_lt_af_k, af_pc) => 180 / Math.PI * Math.atan(Math.tan(dr_lt_af_k * Math.PI / 180) / af_pc)

module.exports.get_ud_st_af_d = (ud_st_af_k, af_pc) => 180 / Math.PI * Math.atan(Math.tan(ud_st_af_k * Math.PI / 180) / af_pc)

module.exports.get_ud_lt_af_d = (ud_lt_af_k, af_pc) => 180 / Math.PI * Math.atan(Math.tan(ud_lt_af_k * Math.PI / 180) / af_pc)

module.exports.get_dr_cohesion_pc = () => 1.2

module.exports.get_ud_cohesion_pc = () => 1.8

module.exports.get_dr_st_cohesion_d = (dr_st_cohesion_k, dr_cohesion_pc) => dr_st_cohesion_k / dr_cohesion_pc

module.exports.get_dr_lt_cohesion_d = (dr_lt_cohesion_k, dr_cohesion_pc) =>  dr_lt_cohesion_k / dr_cohesion_pc

module.exports.get_ud_st_cohesion_d = (ud_st_cohesion_k, ud_cohesion_pc) =>  ud_st_cohesion_k / ud_cohesion_pc

module.exports.get_ud_lt_cohesion_d = (ud_lt_cohesion_k, ud_cohesion_pc) => ud_lt_cohesion_k / ud_cohesion_pc

module.exports.get_a_d_dr_st = (fabrication_method, dr_st_cohesion_d) => {
    if (fabrication_method == 'in_situ') {
        return a_d_dr_st = dr_st_cohesion_d
    } else if (fabrication_method == 'prefab') {
        return a_d_dr_st = 0   
    }
}

module.exports.get_a_d_dr_lt = (fabrication_method, dr_lt_cohesion_d) => {
    if (fabrication_method == 'in_situ') {
        return a_d_dr_lt = dr_lt_cohesion_d
    } else if (fabrication_method == 'prefab') {
        return a_d_dr_lt = 0   
    }
}

module.exports.get_d_c = () => 1

module.exports.get_d_q = () => 1

module.exports.get_K_g_a_dr_st = (dr_st_af_d) => (1 - Math.sin(dr_st_af_d * Math.PI / 180)) / (1 + Math.sin(dr_st_af_d * Math.PI / 180))

module.exports.get_K_g_a_dr_lt = (dr_lt_af_d) => (1 - Math.sin(dr_lt_af_d * Math.PI / 180)) / (1 + Math.sin(dr_lt_af_d * Math.PI / 180))

module.exports.get_K_g_a_ud_st = (ud_st_af_d) => (1 - Math.sin(ud_st_af_d * Math.PI / 180)) / (1 + Math.sin(ud_st_af_d * Math.PI / 180))

module.exports.get_K_g_a_ud_lt = (ud_lt_af_d) => (1 - Math.sin(ud_lt_af_d * Math.PI / 180)) / (1 + Math.sin(ud_lt_af_d * Math.PI / 180))

module.exports.get_K_c_a_dr_st = (dr_st_af_d) => -(2 * Math.cos(dr_st_af_d * Math.PI / 180)) / (1 + Math.sin(dr_st_af_d * Math.PI / 180))

module.exports.get_K_c_a_dr_lt = (dr_lt_af_d) => -(2 * Math.cos(dr_lt_af_d * Math.PI / 180)) / (1 + Math.sin(dr_lt_af_d * Math.PI / 180))

module.exports.get_K_c_a_ud_st = (ud_st_af_d) => -(2 * Math.cos(ud_st_af_d * Math.PI / 180)) / (1 + Math.sin(ud_st_af_d * Math.PI / 180))

module.exports.get_K_c_a_ud_lt = (ud_lt_af_d) => -(2 * Math.cos(ud_lt_af_d * Math.PI / 180)) / (1 + Math.sin(ud_lt_af_d * Math.PI / 180))

module.exports.get_K_g_p_dr_st = (dr_st_af_d) => (1 + Math.sin(dr_st_af_d * Math.PI / 180)) / (1 - Math.sin(dr_st_af_d * Math.PI / 180))

module.exports.get_K_g_p_dr_lt = (dr_lt_af_d) => (1 + Math.sin(dr_lt_af_d * Math.PI / 180)) / (1 - Math.sin(dr_lt_af_d * Math.PI / 180))

module.exports.get_K_g_p_ud_st = (ud_st_af_d) => (1 + Math.sin(ud_st_af_d * Math.PI / 180)) / (1 - Math.sin(ud_st_af_d * Math.PI / 180))

module.exports.get_K_g_p_ud_lt = (ud_lt_af_d) => (1 + Math.sin(ud_lt_af_d * Math.PI / 180)) / (1 - Math.sin(ud_lt_af_d * Math.PI / 180))

module.exports.get_K_c_p_dr_st = (dr_st_af_d) => (2 * Math.cos(dr_st_af_d * Math.PI / 180)) / (1 - Math.sin(dr_st_af_d * Math.PI / 180))

module.exports.get_K_c_p_dr_lt = (dr_lt_af_d) => (2 * Math.cos(dr_lt_af_d * Math.PI / 180)) / (1 - Math.sin(dr_lt_af_d * Math.PI / 180))

module.exports.get_K_c_p_ud_st = (ud_st_af_d) => (2 * Math.cos(ud_st_af_d * Math.PI / 180)) / (1 - Math.sin(ud_st_af_d * Math.PI / 180))

module.exports.get_K_c_p_ud_lt = (ud_lt_af_d) => (2 * Math.cos(ud_lt_af_d * Math.PI / 180)) / (1 - Math.sin(ud_lt_af_d * Math.PI / 180))

module.exports.get_self_weight = (volume, concrete_density) => volume * concrete_density

module.exports.get_ground_area = (depth, height, column_shape, volume, column_length, column_width, column_radius) => {
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

module.exports.get_ground_weight = (ground_area, g) => ground_area * g

module.exports.get_vl_total = (self_weight, ground_weight, vl_external) => self_weight + ground_weight + vl_external

module.exports.get_vl_dim_total = (vl_external, self_weight) => vl_external + self_weight

module.exports.get_vl_total_internal = (vl_external, self_weight) => vl_external + self_weight

module.exports.get_vl_total_max = (vl_total_dr_st, vl_total_dr_lt, vl_total_ud_st, vl_total_ud_lt) => Math.max(vl_total_dr_st, vl_total_dr_lt, vl_total_ud_st, vl_total_ud_lt)

module.exports.get_hl_total = (hl_length, hl_width) => Math.sqrt(Math.pow(hl_length, 2) + Math.pow(hl_width, 2))

module.exports.get_d_0_dr_st = (K_c_a_dr_st, dr_st_cohesion_d, K_p_a_dr_st, terrain_live_load, ground_density, K_g_a_dr_st) => -((K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load) / (ground_density * K_g_a_dr_st)) * 1000

module.exports.get_d_0_dr_lt = (K_c_a_dr_lt, dr_lt_cohesion_d, K_p_a_dr_lt, terrain_live_load, ground_density, K_g_a_dr_lt) => -((K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load) / (ground_density * K_g_a_dr_lt)) * 1000

module.exports.get_d_0_ud_st = (K_c_a_ud_st, ud_st_cohesion_d, K_p_a_ud_st, terrain_live_load, ground_density, K_g_a_ud_st) => -((K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load) / (ground_density * K_g_a_ud_st)) * 1000

module.exports.get_d_0_ud_lt = (K_c_a_ud_lt, ud_lt_cohesion_d, K_p_a_ud_lt, terrain_live_load, ground_density, K_g_a_ud_lt) => -((K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load) / (ground_density * K_g_a_ud_lt)) * 1000

module.exports.get_F_a_dr_st_l = (d_0_dr_st, depth, height, width, K_c_a_dr_st, dr_st_cohesion_d, K_p_a_dr_st, terrain_live_load, ground_density, K_g_a_dr_st) => {
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

module.exports.get_F_a_dr_lt_l = (d_0_dr_lt, depth, height, width, K_c_a_dr_lt, dr_lt_cohesion_d, K_p_a_dr_lt, terrain_live_load, ground_density, K_g_a_dr_lt) => {
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

module.exports.get_F_a_ud_st_l = (d_0_ud_st, depth, height, width, K_c_a_ud_st, ud_st_cohesion_d, K_p_a_ud_st, terrain_live_load, ground_density, K_g_a_ud_st) => {
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

module.exports.get_F_a_ud_lt_l = (d_0_ud_lt, depth, height, width, K_c_a_ud_lt, ud_lt_cohesion_d, K_p_a_ud_lt, terrain_live_load, ground_density, K_g_a_ud_lt) => {
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

module.exports.get_F_p_dr_st_l = (height, depth, width, K_c_p_dr_st, dr_st_cohesion_d, ground_density, K_g_p_dr_st) => {
    if (height >= depth) {
        return width / 1000 * (depth / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_st) / 2)
    } else if (height < depth) {
       return width / 1000 * (height / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_st - height / 1000 * ground_density * K_g_p_dr_st) / 2)
    }
}

module.exports.get_F_p_dr_lt_l = (height, depth, width, K_c_p_dr_lt, dr_lt_cohesion_d, ground_density, K_g_p_dr_lt) => {
    if (height >= depth) {
        return width / 1000 * (depth / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_lt) / 2)
    } else if (height < depth) {
        return width / 1000 * (height / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_lt - height / 1000 * ground_density * K_g_p_dr_lt) / 2)
    }
}

module.exports.get_F_p_ud_st_l = (height, depth, width, K_c_p_ud_st, ud_st_cohesion_d, ground_density, K_g_p_ud_st) => {
    if (height >= depth) {
        return width / 1000 * (depth / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_st) / 2)
    } else if (height < depth) {
        return width / 1000 * (height / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_st - height / 1000 * ground_density * K_g_p_ud_st) / 2)
    }
}

module.exports.get_F_p_ud_lt_l = (height, depth, width, K_c_p_ud_lt, ud_lt_cohesion_d, ground_density, K_g_p_ud_lt) => {
    if (height >= depth) {
        return width / 1000 * (depth / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_lt) / 2)
    } else if (height < depth) {
        return width / 1000 * (height / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_lt - height / 1000 * ground_density * K_g_p_ud_lt) / 2)
    }
}

module.exports.get_F_a_dr_st_b = (d_0_dr_st, depth, height, length, K_c_a_dr_st, dr_st_cohesion_d, K_p_a_dr_st, terrain_live_load, ground_density, K_g_a_dr_st) => {
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

module.exports.get_F_a_dr_lt_b = (d_0_dr_lt, depth, height, length, K_c_a_dr_lt, dr_lt_cohesion_d, K_p_a_dr_lt, terrain_live_load, ground_density, K_g_a_dr_lt) => {
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

module.exports.get_F_a_ud_st_b = (d_0_ud_st, depth, height, length, K_c_a_ud_st, ud_st_cohesion_d, K_p_a_ud_st, terrain_live_load, ground_density, K_g_a_ud_st) => {
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

module.exports.get_F_a_ud_lt_b = (d_0_ud_lt, depth, height, length, K_c_a_ud_lt, ud_lt_cohesion_d, K_p_a_ud_lt, terrain_live_load, ground_density, K_g_a_ud_lt) => {
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

module.exports.get_F_p_dr_st_b = (height, depth, length, K_c_p_dr_st, dr_st_cohesion_d, ground_density, K_g_p_dr_st) => {
    if (height >= depth) {
        return length / 1000 * (depth / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_st) / 2)
        } else if (height < depth) {
        return length / 1000 * (height / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_st - height / 1000 * ground_density * K_g_p_dr_st) / 2)
   }
}

module.exports.get_F_p_dr_lt_b = (height, depth, length, K_c_p_dr_lt, dr_lt_cohesion_d, ground_density, K_g_p_dr_lt) => {
    if (height >= depth) {
        return length / 1000 * (depth / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_lt) / 2)
    } else if (height < depth) {
        return length / 1000 * (height / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_lt - height / 1000 * ground_density * K_g_p_dr_lt) / 2)
    }
}

module.exports.get_F_p_ud_st_b = (height, depth, length, K_c_p_ud_st, ud_st_cohesion_d, ground_density, K_g_p_ud_st) => {
    if (height >= depth) {
        return length / 1000 * (depth / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_st) / 2)
    } else if (height < depth) {
        return length / 1000 * (height / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_st - height / 1000 * ground_density * K_g_p_ud_st) / 2)
    }
}

module.exports.get_F_p_ud_lt_b = (height, depth, length, K_c_p_ud_lt, ud_lt_cohesion_d, ground_density, K_g_p_ud_lt) => {
    if (height >= depth) {
        return length / 1000 * (depth / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_lt) / 2)  
    } else if (height < depth) {
        return length / 1000 * (height / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_lt - height / 1000 * ground_density * K_g_p_ud_lt) / 2)
    }
}

module.exports.get_F_a_dr_st_r = (d_0_dr_st, depth, height, radius, K_c_a_dr_st, dr_st_cohesion_d, K_p_a_dr_st, terrain_live_load, ground_density, K_g_a_dr_st) => {
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

module.exports.get_F_a_dr_lt_r = (d_0_dr_lt, depth, height, radius, K_c_a_dr_lt, dr_lt_cohesion_d, K_p_a_dr_lt, terrain_live_load, ground_density, K_g_a_dr_lt) => {
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

module.exports.get_F_a_ud_st_r = (d_0_ud_st, depth, height, radius, K_c_a_ud_st, ud_st_cohesion_d, K_p_a_ud_st, terrain_live_load, ground_density, K_g_a_ud_st) => {
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

module.exports.get_F_a_ud_lt_r = (d_0_ud_lt, depth, height, radius, K_c_a_ud_lt, ud_lt_cohesion_d, K_p_a_ud_lt, terrain_live_load, ground_density, K_g_a_ud_lt) => {
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

module.exports.get_F_p_dr_st_r = (height, depth, radius, K_c_p_dr_st, dr_st_cohesion_d, ground_density, K_g_p_dr_st) => {
    if (height >= depth) {
        return Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_st) / 2)
    } else if (height < depth) {
        return Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_st - height / 1000 * ground_density * K_g_p_dr_st) / 2)
    }
}

module.exports.get_F_p_dr_lt_r = (height, depth, radius, K_c_p_dr_lt, dr_lt_cohesion_d, ground_density, K_g_p_dr_lt) => {
    if (height >= depth) {
        return Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_lt) / 2)
    } else if (height < depth) {
        return Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_lt - height / 1000 * ground_density * K_g_p_dr_lt) / 2)
    }
}

module.exports.get_F_p_ud_st_r = (height, depth, radius, K_c_p_ud_st, ud_st_cohesion_d, ground_density, K_g_p_ud_st) => {
    if (height >= depth) {
        return Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_st) / 2)
    } else if (height < depth) {
        return Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_st - height / 1000 * ground_density * K_g_p_ud_st) / 2)
    }
}

module.exports.get_F_p_ud_lt_r = (height, depth, radius, K_c_p_ud_lt, ud_lt_cohesion_d, ground_density, K_g_p_ud_lt) => {
    if (height >= depth) {
        return Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_lt) / 2)
    } else if (height < depth) {
        return Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_lt - height / 1000 * ground_density * K_g_p_ud_lt) / 2)
    }
}

module.exports.get_h_res_dr_st_l = (F_p_dr_st_l, hl_length, F_a_dr_st_l) => {
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

module.exports.get_h_res_dr_lt_l = (F_p_dr_lt_l, hl_length, F_a_dr_lt_l) => {

    if (F_p_dr_lt_l >= Math.abs(hl_length) + F_a_dr_lt_l) {
        return 0
    } else {
        if (hl_length < 0) {
            return hl_length - F_a_dr_lt_l + F_p_dr_lt_l
        } else if (hl_length >= 0) {
            return hl_length + F_a_dr_lt_l - F_p_dr_lt_l
        }
    }
}

module.exports.get_h_res_ud_st_l = (F_p_ud_st_l, hl_length, F_a_ud_st_l) => {
    if (F_p_ud_st_l >= Math.abs(hl_length) + F_a_ud_st_l) {
        return 0
    } else {
        if (hl_length < 0) {
            return hl_length - F_a_ud_st_l + F_p_ud_st_l
        } else if (hl_length >= 0) {
            return hl_length + F_a_ud_st_l - F_p_ud_st_l
        }
    }
}

module.exports.get_h_res_ud_lt_l = (F_p_ud_lt_l, hl_length, F_a_ud_lt_l) => {
    if (F_p_ud_lt_l >= Math.abs(hl_length) + F_a_ud_lt_l) {
        return 0
    } else {
        if (hl_length < 0) {
            return hl_length - F_a_ud_lt_l + F_p_ud_lt_l
        } else if (hl_length >= 0) {
            return hl_length + F_a_ud_lt_l - F_p_ud_lt_l
        }
    }
}

module.exports.get_h_res_dr_st_b = (F_p_dr_st_b, hl_width, F_a_dr_st_b) => {
    if (F_p_dr_st_b >= Math.abs(hl_width) + F_a_dr_st_b) {
        return 0
    } else {
        if (hl_width < 0) {
            return hl_width - F_a_dr_st_b + F_p_dr_st_b
        } else if (hl_width >= 0) {
            return hl_width + F_a_dr_st_b - F_p_dr_st_b
        }
    }
}

module.exports.get_h_res_dr_lt_b = (F_p_dr_lt_b, hl_width, F_a_dr_lt_b) => {
    if (F_p_dr_lt_b >= Math.abs(hl_width) + F_a_dr_lt_b) {
        return 0
    } else {
        if (hl_width < 0) {
            return hl_width - F_a_dr_lt_b + F_p_dr_lt_b
        } else if (hl_width >= 0) {
            return hl_width + F_a_dr_lt_b - F_p_dr_lt_b
        }
    }
}

module.exports.get_h_res_ud_st_b = (F_p_ud_st_b, hl_width, F_a_ud_st_b) => {
    if (F_p_ud_st_b >= Math.abs(hl_width) + F_a_ud_st_b) {
        return 0
    } else {
        if (hl_width < 0) {
            return hl_width - F_a_ud_st_b + F_p_ud_st_b
        } else if (hl_width >= 0) {
            return hl_width + F_a_ud_st_b - F_p_ud_st_b
        }
    }
}

module.exports.get_h_res_ud_lt_b = (F_p_ud_lt_b, hl_width, F_a_ud_lt_b) => {
    if (F_p_ud_lt_b >= Math.abs(hl_width) + F_a_ud_lt_b) {
        return 0
    } else {
        if (hl_width < 0) {
            return hl_width - F_a_ud_lt_b + F_p_ud_lt_b
        } else if (hl_width >= 0) {
            return hl_width + F_a_ud_lt_b - F_p_ud_lt_b
        }
    }
}

module.exports.get_h_res_dr_st_rl = (F_p_dr_st_r, hl_length, F_a_dr_st_r) => {
    if (F_p_dr_st_r >= Math.abs(hl_length) + F_a_dr_st_r) {
        return 0
    } else {
        if (hl_length < 0) {
            return hl_length - F_a_dr_st_r + F_p_dr_st_r
        } else if (hl_length >= 0) {
            return hl_length + F_a_dr_st_r - F_p_dr_st_r
        }
    }
}

module.exports.get_h_res_dr_lt_rl = (F_p_dr_lt_r, hl_length, F_a_dr_lt_r) => {
    if (F_p_dr_lt_r >= Math.abs(hl_length) + F_a_dr_lt_r) {
        return 0
    } else {
        if (hl_length < 0) {
            return hl_length - F_a_dr_lt_r + F_p_dr_lt_r
        } else if (hl_length >= 0) {
            return hl_length + F_a_dr_lt_r - F_p_dr_lt_r
        }
    }
}

module.exports.get_h_res_ud_st_rl = (F_p_ud_st_r, hl_length, F_a_ud_st_r) => {
    if (F_p_ud_st_r >= Math.abs(hl_length) + F_a_ud_st_r) {
        return 0
    } else {
        if (hl_length < 0) {
            return hl_length - F_a_ud_st_r + F_p_ud_st_r
        } else if (hl_length >= 0) {
            return hl_length + F_a_ud_st_r - F_p_ud_st_r
        }
    }
}

module.exports.get_h_res_ud_lt_rl = (F_p_ud_lt_r, hl_length, F_a_ud_lt_r) => {
    if (F_p_ud_lt_r >= Math.abs(hl_length) + F_a_ud_lt_r) {
        return 0
    } else {
        if (hl_length < 0) {
            return hl_length - F_a_ud_lt_r + F_p_ud_lt_r
        } else if (hl_length >= 0) {
            return hl_length + F_a_ud_lt_r - F_p_ud_lt_r
        }
    }
}

module.exports.get_h_res_dr_st_rb = (F_p_dr_st_r, hl_width, F_a_dr_st_r) => {
    if (F_p_dr_st_r >= Math.abs(hl_width) + F_a_dr_st_r) {
        return 0
    } else {
        if (hl_width < 0) {
            return hl_width - F_a_dr_st_r + F_p_dr_st_r
        } else if (hl_width >= 0) {
            return hl_width + F_a_dr_st_r - F_p_dr_st_r
        }
    }
}

module.exports.get_h_res_dr_lt_rb = (F_p_dr_lt_r, hl_width, F_a_dr_lt_r) => {
    if (F_p_dr_lt_r >= Math.abs(hl_width) + F_a_dr_lt_r) {
        return 0
    } else {
        if (hl_width < 0) {
            return hl_width - F_a_dr_lt_r + F_p_dr_lt_r
        } else if (hl_width >= 0) {
            return hl_width + F_a_dr_lt_r - F_p_dr_lt_r
        }
    }
}

module.exports.get_h_res_ud_st_rb = (F_p_ud_st_r, hl_width, F_a_ud_st_r) => {
    if (F_p_ud_st_r >= Math.abs(hl_width) + F_a_ud_st_r) {
        return 0
    } else {
        if (hl_width < 0) {
            return hl_width - F_a_ud_st_r + F_p_ud_st_r
        } else if (hl_width >= 0) {
            return hl_width + F_a_ud_st_r - F_p_ud_st_r
        }
    }
}

module.exports.get_h_res_ud_lt_rb = (F_p_ud_lt_r, hl_width, F_a_ud_lt_r) => {
    if (F_p_ud_lt_r >= Math.abs(hl_width) + F_a_ud_lt_r) {
        return 0
    } else {
        if (hl_width < 0) {
            return hl_width - F_a_ud_lt_r + F_p_ud_lt_r
        } else if (hl_width >= 0) {
            return hl_width + F_a_ud_lt_r - F_p_ud_lt_r
        }
    }
}

module.exports.get_H_res_dr_st = (point_foundation_shape, h_res_dr_st_l, h_res_dr_st_b,h_res_dr_st_rl,h_res_dr_st_rb) => {

    if (point_foundation_shape == 'rectangular') {
        return Math.sqrt(Math.pow(h_res_dr_st_l, 2) + Math.pow(h_res_dr_st_b, 2))
        
    } else if (point_foundation_shape == 'circular') {
        return Math.sqrt(Math.pow(h_res_dr_st_rl, 2) + Math.pow(h_res_dr_st_rb, 2))
    }
}

module.exports.get_H_res_dr_lt = (point_foundation_shape, h_res_dr_lt_l, h_res_dr_lt_b, h_res_dr_lt_rl, h_res_dr_lt_rb) => {
    if (point_foundation_shape == 'rectangular') {
        var H_res_dr_lt = Math.sqrt(Math.pow(h_res_dr_lt_l, 2) + Math.pow(h_res_dr_lt_b, 2))
    } else if (point_foundation_shape == 'circular') {
        var H_res_dr_lt = Math.sqrt(Math.pow(h_res_dr_lt_rl, 2) + Math.pow(h_res_dr_lt_rb, 2))
    }
}

module.exports.get_H_res_ud_st = (point_foundation_shape, h_res_ud_st_l, h_res_ud_st_b, h_res_ud_st_rl, h_res_ud_st_rb) => {
    if (point_foundation_shape == 'rectangular') {
        return Math.sqrt(Math.pow(h_res_ud_st_l, 2) + Math.pow(h_res_ud_st_b, 2))
    } else if (point_foundation_shape == 'circular') {
        return Math.sqrt(Math.pow(h_res_ud_st_rl, 2) + Math.pow(h_res_ud_st_rb, 2))
    }
}

module.exports.get_H_res_ud_lt = (point_foundation_shape, h_res_ud_lt_l, h_res_ud_lt_b, h_res_ud_lt_rl, h_res_ud_lt_rb) => {
    if (point_foundation_shape == 'rectangular') {
        var H_res_ud_lt = Math.sqrt(Math.pow(h_res_ud_lt_l, 2) + Math.pow(h_res_ud_lt_b, 2))
    } else if (point_foundation_shape == 'circular') {
        var H_res_ud_lt = Math.sqrt(Math.pow(h_res_ud_lt_rl, 2) + Math.pow(h_res_ud_lt_rb, 2))
    }
}

module.exports.get_H_res_both = (H_res_dr_st, H_res_dr_lt, H_res_ud_st, H_res_ud_lt) => {
    return Math.max(H_res_dr_st, H_res_dr_lt, H_res_ud_st, H_res_ud_lt)
}

module.exports.get_h_cg_a_dr_st = (d_0_dr_st, depth, height, K_c_a_dr_st, dr_st_cohesion_d, K_p_a_dr_st, terrain_live_load, ground_density, K_g_a_dr_st) => {
    if (d_0_dr_st >= depth) {
        return 0
    } else if (d_0_dr_st < depth && (depth - height) > 0) {
        if ((depth - height) <= d_0_dr_st) {
            return 1000 * (depth / 1000 - (2 * depth / 1000 / 3 - (K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load) / (3 * ground_density * K_g_a_dr_st)))
        } else if ((depth - height) > d_0_dr_st) {
            return 1000 * (depth / 1000 - (depth / 1000 - height / 1000 / 2 + Math.pow(height / 1000, 2) * ground_density * K_g_a_dr_st / (6 * (2 * K_c_a_dr_st * dr_st_cohesion_d + 2 * K_p_a_dr_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_st - height / 1000 * ground_density * K_g_a_dr_st))))
        }
    } else if (d_0_dr_st < depth && (depth - height) <= 0) {
        if (0 <= d_0_dr_st) {
            return 1000 * (depth / 1000 - (2 * depth / 1000 / 3 - (K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load) / (3 * ground_density * K_g_a_dr_st)))
        } else if (0 > d_0_dr_st) {
            return 1000 * (depth / 1000 - depth / 1000 * (3 * K_c_a_dr_st * dr_st_cohesion_d + 3 * K_p_a_dr_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_st) / (3 * (2 * K_c_a_dr_st * dr_st_cohesion_d + 2 * K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st)))
        }
    }
}

module.exports.get_h_cg_a_dr_lt = (d_0_dr_lt, depth, height, K_c_a_dr_lt, dr_lt_cohesion_d, K_p_a_dr_lt, terrain_live_load, ground_density, K_g_a_dr_lt) => {
    if (d_0_dr_lt >= depth) {
        return 0
    } else if (d_0_dr_lt < depth && (depth - height) > 0) {
        if ((depth - height) <= d_0_dr_lt) {
            return 1000 * (depth / 1000 - (2 * depth / 1000 / 3 - (K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load) / (3 * ground_density * K_g_a_dr_lt)))
        } else if ((depth - height) > d_0_dr_lt) {
            return 1000 * (depth / 1000 - (depth / 1000 - height / 1000 / 2 + Math.pow(height / 1000, 2) * ground_density * K_g_a_dr_lt / (6 * (2 * K_c_a_dr_lt * dr_lt_cohesion_d + 2 * K_p_a_dr_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_lt - height / 1000 * ground_density * K_g_a_dr_lt))))
        }
    } else if (d_0_dr_lt < depth && (depth - height) <= 0) {
        if (0 <= d_0_dr_lt) {
            return 1000 * (depth / 1000 - (2 * depth / 1000 / 3 - (K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load) / (3 * ground_density * K_g_a_dr_lt)))
        } else if (0 > d_0_dr_lt) {
            return 1000 * (depth / 1000 - depth / 1000 * (3 * K_c_a_dr_lt * dr_lt_cohesion_d + 3 * K_p_a_dr_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_lt) / (3 * (2 * K_c_a_dr_lt * dr_lt_cohesion_d + 2 * K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt)))
        }
    }
}

module.exports.get_h_cg_a_ud_st = (d_0_ud_st, depth, height, K_c_a_ud_st, ud_st_cohesion_d, K_p_a_ud_st, terrain_live_load, ground_density, K_g_a_ud_st) => {
    if (d_0_ud_st >= depth) {
        return 0
    } else if (d_0_ud_st < depth && (depth - height) > 0) {
        if ((depth - height) <= d_0_ud_st) {
            return 1000 * (depth / 1000 - (2 * depth / 1000 / 3 - (K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load) / (3 * ground_density * K_g_a_ud_st)))
        } else if ((depth - height) > d_0_ud_st) {
            return 1000 * (depth / 1000 - (depth / 1000 - height / 1000 / 2 + Math.pow(height / 1000, 2) * ground_density * K_g_a_ud_st / (6 * (2 * K_c_a_ud_st * ud_st_cohesion_d + 2 * K_p_a_ud_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_st - height / 1000 * ground_density * K_g_a_ud_st))))
        }
    } else if (d_0_ud_st < depth && (depth - height) <= 0) {
        if (0 <= d_0_ud_st) {
            return 1000 * (depth / 1000 - (2 * depth / 1000 / 3 - (K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load) / (3 * ground_density * K_g_a_ud_st)))
        } else if (0 > d_0_ud_st) {
            return 1000 * (depth / 1000 - depth / 1000 * (3 * K_c_a_ud_st * ud_st_cohesion_d + 3 * K_p_a_ud_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_st) / (3 * (2 * K_c_a_ud_st * ud_st_cohesion_d + 2 * K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st)))
        }
    }
}

module.exports.get_h_cg_a_ud_lt = (d_0_ud_lt, depth, height, K_c_a_ud_lt, ud_lt_cohesion_d, K_p_a_ud_lt, terrain_live_load, ground_density, K_g_a_ud_lt) => {
    if (d_0_ud_lt >= depth) {
        return 0
    } else if (d_0_ud_lt < depth && (depth - height) > 0) {
        if ((depth - height) <= d_0_ud_lt) {
            return 1000 * (depth / 1000 - (2 * depth / 1000 / 3 - (K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load) / (3 * ground_density * K_g_a_ud_lt)))
        } else if ((depth - height) > d_0_ud_lt) {
            return 1000 * (depth / 1000 - (depth / 1000 - height / 1000 / 2 + Math.pow(height / 1000, 2) * ground_density * K_g_a_ud_lt / (6 * (2 * K_c_a_ud_lt * ud_lt_cohesion_d + 2 * K_p_a_ud_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_lt - height / 1000 * ground_density * K_g_a_ud_lt))))
        }
    } else if (d_0_ud_lt < depth && (depth - height) <= 0) {
        if (0 <= d_0_ud_lt) {
            return 1000 * (depth / 1000 - (2 * depth / 1000 / 3 - (K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load) / (3 * ground_density * K_g_a_ud_lt)))
        } else if (0 > d_0_ud_lt) {
            return 1000 * (depth / 1000 - depth / 1000 * (3 * K_c_a_ud_lt * ud_lt_cohesion_d + 3 * K_p_a_ud_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_lt) / (3 * (2 * K_c_a_ud_lt * ud_lt_cohesion_d + 2 * K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt)))
        }
    }
}

module.exports.get_h_cg_p_dr_st = (depth, height, K_c_p_dr_st, dr_st_cohesion_d, K_p_p_dr_st, terrain_live_load, ground_density, K_g_p_dr_st) => {
    if (depth == 0) {
        return 0
    } else if (depth > 0) {
        if (height >= depth) {
            return 1000 * (depth / 1000 - depth / 1000 * (3 * K_c_p_dr_st * dr_st_cohesion_d + 3 * K_p_p_dr_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_p_dr_st) / (3 * (2 * K_c_p_dr_st * dr_st_cohesion_d + 2 * K_p_p_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_p_dr_st)))
        } else if (height < depth) {
            return 1000 * (depth / 1000 - (depth / 1000 - height / 1000 / 2 + Math.pow(height / 1000, 2) * ground_density * K_g_p_dr_st / (6 * (2 * K_c_p_dr_st * dr_st_cohesion_d + 2 * K_p_p_dr_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_p_dr_st - height / 1000 * ground_density * K_g_p_dr_st))))
        }
    }
}

module.exports.get_h_cg_p_dr_lt = (depth, height, K_c_p_dr_lt, dr_lt_cohesion_d, K_p_p_dr_lt, terrain_live_load, ground_density, K_g_p_dr_lt) => {
    if (depth ==0) {
        return 0
    } else if (depth > 0) {
        if (height >= depth) {
            return 1000 * (depth / 1000 - depth / 1000 * (3 * K_c_p_dr_lt * dr_lt_cohesion_d + 3 * K_p_p_dr_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_p_dr_lt) / (3 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + 2 * K_p_p_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_p_dr_lt)))
        } else if (height < depth) {
            return 1000 * (depth / 1000 - (depth / 1000 - height / 1000 / 2 + Math.pow(height / 1000, 2) * ground_density * K_g_p_dr_lt / (6 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + 2 * K_p_p_dr_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_p_dr_lt - height / 1000 * ground_density * K_g_p_dr_lt))))
        }
    }
}

module.exports.get_h_cg_p_ud_st = (depth, height, K_c_p_ud_st, ud_st_cohesion_d, K_p_p_ud_st, terrain_live_load, ground_density, K_g_p_ud_st) => {
    if (depth == 0) {
        return 0
    } else if (depth > 0) {
        if (height >= depth) {
            return 1000 * (depth / 1000 - depth / 1000 * (3 * K_c_p_ud_st * ud_st_cohesion_d + 3 * K_p_p_ud_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_p_ud_st) / (3 * (2 * K_c_p_ud_st * ud_st_cohesion_d + 2 * K_p_p_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_p_ud_st)))
        } else if (height < depth) {
            return 1000 * (depth / 1000 - (depth / 1000 - height / 1000 / 2 + Math.pow(height / 1000, 2) * ground_density * K_g_p_ud_st / (6 * (2 * K_c_p_ud_st * ud_st_cohesion_d + 2 * K_p_p_ud_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_p_ud_st - height / 1000 * ground_density * K_g_p_ud_st))))
        }
    }
}

module.exports.get_h_cg_p_ud_lt = (depth, height, K_c_p_ud_lt, ud_lt_cohesion_d, K_p_p_ud_lt, terrain_live_load, ground_density, K_g_p_ud_lt) => {
    if (depth == 0) {
        return 0
    } else if (depth > 0) {
        if (height >= depth) {
            return 1000 * (depth / 1000 - depth / 1000 * (3 * K_c_p_ud_lt * ud_lt_cohesion_d + 3 * K_p_p_ud_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_p_ud_lt) / (3 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + 2 * K_p_p_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_p_ud_lt)))
        } else if (height < depth) {
            return 1000 * (depth / 1000 - (depth / 1000 - height / 1000 / 2 + Math.pow(height / 1000, 2) * ground_density * K_g_p_ud_lt / (6 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + 2 * K_p_p_ud_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_p_ud_lt - height / 1000 * ground_density * K_g_p_ud_lt))))
        }
    }
}

module.exports.get_m_h_length = (height_p_hor, hl_length) => {
    return height_p_hor / 1000 * hl_length
}

module.exports.get_m_h_width = (height_p_hor, hl_width) => {
    return height_p_hor / 1000 * hl_width
}

module.exports.get_m_h_r = (height_p_hor, hl_total) => {
    return height_p_hor / 1000 * hl_total
}
module.exports.get_m_v_dr_st_length = (vl_external, ec_vl_length) => {
    return vl_external * ec_vl_length / 1000
}

module.exports.get_m_v_dr_lt_length = (vl_external, ec_vl_length) => {
    return vl_external * ec_vl_length / 1000
}

module.exports.get_m_v_ud_st_length = (vl_external, ec_vl_length) => {
    return vl_external * ec_vl_length / 1000
}

module.exports.get_m_v_ud_lt_length = (vl_external, ec_vl_length) => {
    return vl_external * ec_vl_length / 1000
}

module.exports.get_m_v_dim_length = (vl_external, ec_vl_length) => {
    return vl_external * ec_vl_length / 1000
}

module.exports.get_m_v_dr_st_width = (vl_external, ec_vl_width) => {
    return vl_external * ec_vl_width / 1000
}

module.exports.get_m_v_dr_lt_width = (vl_external, ec_vl_width) => {
    return vl_external * ec_vl_width / 1000
}

module.exports.get_m_v_ud_st_width = (vl_external, ec_vl_width) => {
    return vl_external * ec_vl_width / 1000
}

module.exports.get_m_v_ud_lt_width = (vl_external, ec_vl_width) => {
    return vl_external * ec_vl_width / 1000
}

module.exports.get_m_v_dim_width = (vl_external, ec_vl_width) => {
    return vl_external * ec_vl_width / 1000
}

module.exports.get_m_F_a_dr_st_l = (h_cg_a_dr_st, F_a_dr_st_l) => {
    return h_cg_a_dr_st / 1000 * F_a_dr_st_l
}

module.exports.get_m_F_a_dr_lt_l = (h_cg_a_dr_lt, F_a_dr_lt_l) => {
    return h_cg_a_dr_lt / 1000 * F_a_dr_lt_l
}

module.exports.get_m_F_a_ud_st_l = (h_cg_a_ud_st, argF_a_ud_st_l2) => {
    return h_cg_a_ud_st / 1000 * F_a_ud_st_l
}

module.exports.get_m_F_a_ud_lt_l = (h_cg_a_ud_lt, F_a_ud_lt_l) => {
    return h_cg_a_ud_lt / 1000 * F_a_ud_lt_l
}

module.exports.get_m_F_p_dr_st_l = (h_cg_p_dr_st, arF_p_dr_st_lg2) => {
    return h_cg_p_dr_st / 1000 * F_p_dr_st_l
}

module.exports.get_m_F_p_dr_lt_l = (h_cg_p_dr_lt, F_p_dr_lt_l) => {
    return h_cg_p_dr_lt / 1000 * F_p_dr_lt_l
}

module.exports.get_m_F_p_ud_st_l = (h_cg_p_ud_st, F_p_ud_st_l) => {
    return h_cg_p_ud_st / 1000 * F_p_ud_st_l
}

module.exports.get_m_F_p_ud_lt_l = (h_cg_p_ud_lt, F_p_ud_lt_l) => {
    return h_cg_p_ud_lt / 1000 * F_p_ud_lt_l
}

module.exports.get_m_F_a_dr_st_b = (h_cg_a_dr_st, F_a_dr_st_b) => {
    return h_cg_a_dr_st / 1000 * F_a_dr_st_b
}

module.exports.get_m_F_a_dr_lt_b = (h_cg_a_dr_lt, F_a_dr_lt_b) => {
    return h_cg_a_dr_lt / 1000 * F_a_dr_lt_b
}

module.exports.get_m_F_a_ud_st_b = (h_cg_a_ud_st, F_a_ud_st_b) => {
    return h_cg_a_ud_st / 1000 * F_a_ud_st_b
}

module.exports.get_m_F_a_ud_lt_b = (h_cg_a_ud_lt, F_a_ud_lt_b) => {
    return h_cg_a_ud_lt / 1000 * F_a_ud_lt_b
}

module.exports.get_m_F_p_dr_st_b = (h_cg_p_dr_st, F_p_dr_st_b) => {
    return h_cg_p_dr_st / 1000 * F_p_dr_st_b
}

module.exports.get_m_F_p_dr_lt_b = (h_cg_p_dr_lt, F_p_dr_lt_b) => {
    return h_cg_p_dr_lt / 1000 * F_p_dr_lt_b
}

module.exports.get_m_F_p_ud_st_b = (h_cg_p_ud_st, F_p_ud_st_b) => {
    return h_cg_p_ud_st / 1000 * F_p_ud_st_b
}

module.exports.get_m_F_p_ud_lt_b = (h_cg_p_ud_lt, F_p_ud_lt_b) => {
    return h_cg_p_ud_lt / 1000 * F_p_ud_lt_b
}

module.exports.get_m_F_a_dr_st_r = (h_cg_a_dr_st, F_a_dr_st_r) => {
    return h_cg_a_dr_st / 1000 * F_a_dr_st_r
}

module.exports.get_m_F_a_dr_lt_r = (h_cg_a_dr_lt, F_a_dr_lt_r) => {
    return h_cg_a_dr_lt / 1000 * F_a_dr_lt_r
}

module.exports.get_m_F_a_ud_st_r = (h_cg_a_ud_st, F_a_ud_st_r) => {
    return h_cg_a_ud_st / 1000 * F_a_ud_st_r
}

module.exports.get_m_F_a_ud_lt_r = (h_cg_a_ud_lt, F_a_ud_lt_r) => {
    return h_cg_a_ud_lt / 1000 * F_a_ud_lt_r
}

module.exports.get_m_F_p_dr_st_r = (h_cg_p_dr_st, F_p_dr_st_r) => {
    return h_cg_p_dr_st / 1000 * F_p_dr_st_r
}

module.exports.get_m_F_p_dr_lt_r = (h_cg_p_dr_lt, F_p_dr_lt_r) => {
    return h_cg_p_dr_lt / 1000 * F_p_dr_lt_r
}

module.exports.get_m_F_p_ud_st_r = (h_cg_p_ud_st, F_p_ud_st_r) => {
    return h_cg_p_ud_st / 1000 * F_p_ud_st_r
}

module.exports.get_m_F_p_ud_lt_r = (h_cg_p_ud_lt, F_p_ud_lt_r) => {
    return h_cg_p_ud_lt / 1000 * F_p_ud_lt_r
}

module.exports.get_m_r = (m_length, m_width) => {
    return Math.sqrt(Math.pow(m_length, 2) + Math.pow(m_width, 2))
}

module.exports.get_m_total_dr_st_l = (m_F_p_dr_st_l, m_h_length, m_v_dr_st_length, m_length, m_F_a_dr_st_l) => {
    if (m_F_p_dr_st_l > Math.abs(m_h_length + m_v_dr_st_length + m_length) + m_F_a_dr_st_l) {
        return 0
    } else {
        if (m_h_length + m_v_dr_st_length + m_length < 0) {
            return m_h_length + m_v_dr_st_length + m_length - m_F_a_dr_st_l + m_F_p_dr_st_l
        } else if (m_h_length + m_v_dr_st_length + m_length >= 0) {
            return m_h_length + m_v_dr_st_length + m_length + m_F_a_dr_st_l - m_F_p_dr_st_l
        }
    }
}

module.exports.get_m_total_dr_lt_l = (m_F_p_dr_lt_l, m_h_length, m_v_dr_lt_length, m_length, m_F_a_dr_lt_l) => {
    if (m_F_p_dr_lt_l > Math.abs(m_h_length + m_v_dr_lt_length + m_length) + m_F_a_dr_lt_l) {
        return 0
    } else {
        if (m_h_length + m_v_dr_lt_length + m_length < 0) {
            return m_h_length + m_v_dr_lt_length + m_length - m_F_a_dr_lt_l + m_F_p_dr_lt_l
        } else if (m_h_length + m_v_dr_lt_length + m_length >= 0) {
            return m_h_length + m_v_dr_lt_length + m_length + m_F_a_dr_lt_l - m_F_p_dr_lt_l
        }
    }
}

module.exports.get_m_total_ud_st_l = (m_F_p_ud_st_l, m_h_length, m_v_ud_st_length, m_length, m_F_a_ud_st_l) => {
    if (m_F_p_ud_st_l > Math.abs(m_h_length + m_v_ud_st_length + m_length) + m_F_a_ud_st_l) {
        return  0
    } else {
        if (m_h_length + m_v_ud_st_length + m_length < 0) {
            return  m_h_length + m_v_ud_st_length + m_length - m_F_a_ud_st_l + m_F_p_ud_st_l
        } else if (m_h_length + m_v_ud_st_length + m_length >= 0) {
            return  m_h_length + m_v_ud_st_length + m_length + m_F_a_ud_st_l - m_F_p_ud_st_l
        }
    }
}

module.exports.get_m_total_ud_lt_l = (m_F_p_ud_lt_l, m_h_length, m_v_ud_lt_length, m_length, m_F_a_ud_lt_l) => {
    if (m_F_p_ud_lt_l > Math.abs(m_h_length + m_v_ud_lt_length + m_length) + m_F_a_ud_lt_l) {
        return 0
    } else {
        if (m_h_length + m_v_ud_lt_length + m_length < 0) {
            return m_h_length + m_v_ud_lt_length + m_length - m_F_a_ud_lt_l + m_F_p_ud_lt_l
        } else if (m_h_length + m_v_ud_lt_length + m_length >= 0) {
            return m_h_length + m_v_ud_lt_length + m_length + m_F_a_ud_lt_l - m_F_p_ud_lt_l
        }
    }
}

module.exports.get_m_F_p_dr_st_b = (m_F_p_dr_st_b, m_h_width, m_v_dr_st_width, m_width, m_F_a_dr_st_b) => {
    if (m_F_p_dr_st_b > Math.abs(m_h_width + m_v_dr_st_width + m_width) + m_F_a_dr_st_b) {
        return 0
    } else {
        if (m_h_width + m_v_dr_st_width + m_width < 0) {
            return m_h_width + m_v_dr_st_width + m_width - m_F_a_dr_st_b + m_F_p_dr_st_b
        } else if (m_h_width + m_v_dr_st_width + m_width >= 0) {
            return m_h_width + m_v_dr_st_width + m_width + m_F_a_dr_st_b - m_F_p_dr_st_b
        }
    }
}

module.exports.get_m_total_dr_lt_b = (m_F_p_dr_lt_b, m_h_width, m_v_dr_lt_width, m_width, m_F_a_dr_lt_b) => {
    if (m_F_p_dr_lt_b > Math.abs(m_h_width + m_v_dr_lt_width + m_width) + m_F_a_dr_lt_b) {
        var m_total_dr_lt_b = 0
    } else {
        if (m_h_width + m_v_dr_lt_width + m_width < 0) {
            var m_total_dr_lt_b = m_h_width + m_v_dr_lt_width + m_width - m_F_a_dr_lt_b + m_F_p_dr_lt_b
        } else if (m_h_width + m_v_dr_lt_width + m_width >= 0) {
            var m_total_dr_lt_b = m_h_width + m_v_dr_lt_width + m_width + m_F_a_dr_lt_b - m_F_p_dr_lt_b
        }
    }
}

module.exports.get_m_total_ud_st_b = (m_F_p_ud_st_b, m_h_width, m_v_ud_st_width, m_width, m_F_a_ud_st_b) => {
    if (m_F_p_ud_st_b > Math.abs(m_h_width + m_v_ud_st_width + m_width) + m_F_a_ud_st_b) {
        return 0
    } else {
        if (m_h_width + m_v_ud_st_width + m_width < 0) {
            return m_h_width + m_v_ud_st_width + m_width - m_F_a_ud_st_b + m_F_p_ud_st_b
        } else if (m_h_width + m_v_ud_st_width + m_width >= 0) {
            return m_h_width + m_v_ud_st_width + m_width + m_F_a_ud_st_b - m_F_p_ud_st_b
        }
    }
}

module.exports.get_m_total_ud_lt_b = (m_F_p_ud_lt_b, m_h_width, m_v_ud_lt_width, m_width, m_F_a_ud_lt_b) => {
    if (m_F_p_ud_lt_b > Math.abs(m_h_width + m_v_ud_lt_width + m_width) + m_F_a_ud_lt_b) {
        return 0
    } else {
        if (m_h_width + m_v_ud_lt_width + m_width < 0) {
            return m_h_width + m_v_ud_lt_width + m_width - m_F_a_ud_lt_b + m_F_p_ud_lt_b
        } else if (m_h_width + m_v_ud_lt_width + m_width >= 0) {
            return m_h_width + m_v_ud_lt_width + m_width + m_F_a_ud_lt_b - m_F_p_ud_lt_b
        }
    }
}

module.exports.get_m_total_dr_st_rl = (m_F_p_dr_st_r, m_h_length, m_v_dr_st_length, m_length, m_F_a_dr_st_r) => {
    if (m_F_p_dr_st_r > Math.abs(m_h_length + m_v_dr_st_length + m_length) + m_F_a_dr_st_r) {
        return 0
    } else {
        if (m_h_length + m_v_dr_st_length + m_length < 0) {
            return m_h_length + m_v_dr_st_length + m_length - m_F_a_dr_st_r + m_F_p_dr_st_r
        } else if (m_h_length + m_v_dr_st_length + m_length >= 0) {
            return m_h_length + m_v_dr_st_length + m_length + m_F_a_dr_st_r - m_F_p_dr_st_r
        }
    }
}

module.exports.get_m_total_dr_lt_rl = (m_F_p_dr_lt_r, m_h_length, m_v_dr_lt_length, m_length, m_F_a_dr_lt_r) => {
    if (m_F_p_dr_lt_r > Math.abs(m_h_length + m_v_dr_lt_length + m_length) + m_F_a_dr_lt_r) {
        return 0
    } else {
        if (m_h_length + m_v_dr_lt_length + m_length < 0) {
            return m_h_length + m_v_dr_lt_length + m_length - m_F_a_dr_lt_r + m_F_p_dr_lt_r
        } else if (m_h_length + m_v_dr_lt_length + m_length >= 0) {
            return m_h_length + m_v_dr_lt_length + m_length + m_F_a_dr_lt_r - m_F_p_dr_lt_r
        }
    }
}

module.exports.get_m_total_ud_st_rl = (m_F_p_ud_st_r, m_h_length, m_v_ud_st_length, m_length, m_F_a_ud_st_r) => {
    if (m_F_p_ud_st_r > Math.abs(m_h_length + m_v_ud_st_length + m_length) + m_F_a_ud_st_r) {
        return 0
    } else {
        if (m_h_length + m_v_ud_st_length + m_length < 0) {
            return m_h_length + m_v_ud_st_length + m_length - m_F_a_ud_st_r + m_F_p_ud_st_r
        } else if (m_h_length + m_v_ud_st_length + m_length >= 0) {
            return m_h_length + m_v_ud_st_length + m_length + m_F_a_ud_st_r - m_F_p_ud_st_r
        }
    }
}

module.exports.get_m_total_ud_lt_rl = (m_F_p_ud_lt_r, m_h_length, m_v_ud_lt_length, m_length, m_F_a_ud_lt_r) => {
    if (m_F_p_ud_lt_r > Math.abs(m_h_length + m_v_ud_lt_length + m_length) + m_F_a_ud_lt_r) {
        return 0
    } else {
        if (m_h_length + m_v_ud_lt_length + m_length < 0) {
            return m_h_length + m_v_ud_lt_length + m_length - m_F_a_ud_lt_r + m_F_p_ud_lt_r
        } else if (m_h_length + m_v_ud_lt_length + m_length >= 0) {
            return m_h_length + m_v_ud_lt_length + m_length + m_F_a_ud_lt_r - m_F_p_ud_lt_r
        }
    }
}

module.exports.get_m_total_dr_st_rb = (m_F_p_dr_st_r, m_h_width, m_v_dr_st_width, m_width, m_F_a_dr_st_r) => {
    if (m_F_p_dr_st_r > Math.abs(m_h_width + m_v_dr_st_width + m_width) + m_F_a_dr_st_r) {
        return 0
    } else {
        if (m_h_width + m_v_dr_st_width + m_width < 0) {
            return m_h_width + m_v_dr_st_width + m_width - m_F_a_dr_st_r + m_F_p_dr_st_r
        } else if (m_h_width + m_v_dr_st_width + m_width >= 0) {
            return m_h_width + m_v_dr_st_width + m_width + m_F_a_dr_st_r - m_F_p_dr_st_r
        }
    }
}

module.exports.get_m_total_dr_lt_rb = (m_F_p_dr_lt_r, m_h_width, m_v_dr_lt_width, m_width, m_F_a_dr_lt_r) => {
    if (m_F_p_dr_lt_r > Math.abs(m_h_width + m_v_dr_lt_width + m_width) + m_F_a_dr_lt_r) {
        return 0
    } else {
        if (m_h_width + m_v_dr_lt_width + m_width < 0) {
            return m_h_width + m_v_dr_lt_width + m_width - m_F_a_dr_lt_r + m_F_p_dr_lt_r
        } else if (m_h_width + m_v_dr_lt_width + m_width >= 0) {
            return m_h_width + m_v_dr_lt_width + m_width + m_F_a_dr_lt_r - m_F_p_dr_lt_r
        }
    }
}

module.exports.get_m_total_ud_st_rb = (m_F_p_ud_st_r, m_h_width, m_v_ud_st_width, m_width, m_F_a_ud_st_r) => {
    if (m_F_p_ud_st_r > Math.abs(m_h_width + m_v_ud_st_width + m_width) + m_F_a_ud_st_r) {
        return 0
    } else {
        if (m_h_width + m_v_ud_st_width + m_width < 0) {
            return m_h_width + m_v_ud_st_width + m_width - m_F_a_ud_st_r + m_F_p_ud_st_r
        } else if (m_h_width + m_v_ud_st_width + m_width >= 0) {
            return m_h_width + m_v_ud_st_width + m_width + m_F_a_ud_st_r - m_F_p_ud_st_r
        }
    }
}

module.exports.get_m_total_ud_lt_rb = (m_F_p_ud_lt_r, m_h_width, m_v_ud_lt_width, m_width, m_F_a_ud_lt_r) => {
    if (m_F_p_ud_lt_r > Math.abs(m_h_width + m_v_ud_lt_width + m_width) + m_F_a_ud_lt_r) {
        return 0
    } else {
        if (m_h_width + m_v_ud_lt_width + m_width < 0) {
            return m_h_width + m_v_ud_lt_width + m_width - m_F_a_ud_lt_r + m_F_p_ud_lt_r
        } else if (m_h_width + m_v_ud_lt_width + m_width >= 0) {
            return m_h_width + m_v_ud_lt_width + m_width + m_F_a_ud_lt_r - m_F_p_ud_lt_r
        }
    }
}

module.exports.get_m_dim_length = (m_h_length, m_length, m_v_dim_length) => {
    return m_h_length + m_length + m_v_dim_length
}

module.exports.get_m_dim_width = (m_h_width, m_width, m_v_dim_width) => {
    return m_h_width + m_width + m_v_dim_width
}

module.exports.get_m_dim_r_length = (m_h_length, m_length, m_v_dim_length) => {
    return m_h_length + m_length + m_v_dim_length
}

module.exports.get_m_dim_r_width = (m_h_width, m_width, m_v_dim_width) => {
    return m_h_width + m_width + m_v_dim_width
}

//EFFECTIVE DIMENSIONS

module.exports.get_e_total_dr_st_l = (arg1, arg2) => {
    return Math.abs(m_total_dr_st_l) / vl_total_dr_st * 1000
}

module.exports.get_e_total_dr_lt_l = (m_total_dr_lt_l, vl_total_dr_lt) => {
    return Math.abs(m_total_dr_lt_l) / vl_total_dr_lt * 1000
}

module.exports.get_e_total_ud_st_l = (m_total_ud_st_l, vl_total_ud_st) => {
    return Math.abs(m_total_ud_st_l) / vl_total_ud_st * 1000
}

module.exports.get_e_total_ud_lt_l = (m_total_ud_lt_l, vl_total_ud_lt) => {
    return Math.abs(m_total_ud_lt_l) / vl_total_ud_lt * 1000
}

module.exports.get_e_total_dr_st_b = (m_total_dr_st_b, vl_total_dr_st) => {
    return Math.abs(m_total_dr_st_b) / vl_total_dr_st * 1000
}

module.exports.get_e_total_dr_lt_b = (m_total_dr_lt_b, vl_total_dr_lt) => {
    return Math.abs(m_total_dr_lt_b) / vl_total_dr_lt * 1000
}

module.exports.get_e_total_ud_st_b = (m_total_ud_st_b, vl_total_ud_st) => {
    return Math.abs(m_total_ud_st_b) / vl_total_ud_st * 1000
}

module.exports.get_e_total_ud_lt_b = (m_total_ud_lt_b, vl_total_ud_lt) => {
    return Math.abs(m_total_ud_lt_b) / vl_total_ud_lt * 1000
}

module.exports.get_e_total_dr_st_rl = (m_total_dr_st_rl, vl_total_dr_st) => {
    return Math.abs(m_total_dr_st_rl) / vl_total_dr_st * 1000
}

module.exports.get_e_total_dr_lt_rl = (m_total_dr_lt_rl, vl_total_dr_lt) => {
    return Math.abs(m_total_dr_lt_rl) / vl_total_dr_lt * 1000
}
module.exports.get_e_total_ud_st_rl = (m_total_ud_st_rl, vl_total_ud_st) => {
    return Math.abs(m_total_ud_st_rl) / vl_total_ud_st * 1000
}

module.exports.get_e_total_ud_lt_rl = (m_total_ud_lt_rl, vl_total_ud_lt) => {
    return Math.abs(m_total_ud_lt_rl) / vl_total_ud_lt * 1000
}

module.exports.get_e_total_dr_st_rb = (m_total_dr_st_rb, vl_total_dr_st) => {
    return Math.abs(m_total_dr_st_rb) / vl_total_dr_st * 1000
}

module.exports.get_e_total_dr_lt_rb = (m_total_dr_lt_rb, vl_total_dr_lt) => {
    return Math.abs(m_total_dr_lt_rb) / vl_total_dr_lt * 1000
}

module.exports.get_e_total_ud_st_rb = (m_total_ud_st_rb, vl_total_ud_st) => {
    return Math.abs(m_total_ud_st_rb) / vl_total_ud_st * 1000
}

module.exports.get_e_total_ud_lt_rb = (m_total_ud_lt_rb, vl_total_ud_lt) => {
    return Math.abs(m_total_ud_lt_rb) / vl_total_ud_lt * 1000
}

module.exports.get_e_total_dr_st_r = (e_total_dr_st_rl, e_total_dr_st_rb) => {
    return Math.sqrt(Math.pow(e_total_dr_st_rl, 2) + Math.pow(e_total_dr_st_rb, 2))
}

module.exports.get_e_total_dr_lt_r = (e_total_dr_lt_rl, e_total_dr_lt_rb) => {
    return Math.sqrt(Math.pow(e_total_dr_lt_rl, 2) + Math.pow(e_total_dr_lt_rb, 2))
}

module.exports.get_e_total_ud_st_r = (e_total_ud_st_rl, e_total_ud_st_rb) => {
    return Math.sqrt(Math.pow(e_total_ud_st_rl, 2) + Math.pow(e_total_ud_st_rb, 2))
}

module.exports.get_e_total_ud_lt_r = (e_total_ud_lt_rl, e_total_ud_lt_rb) => {
    return Math.sqrt(Math.pow(e_total_ud_lt_rl, 2) + Math.pow(e_total_ud_lt_rb, 2))
}

module.exports.get_e_dim_l = (m_dim_length, vl_dim_total) => {
    return Math.abs(m_dim_length) / vl_dim_total * 1000
}

module.exports.get_e_dim_b = (m_dim_width, vl_dim_total) => {
    return Math.abs(m_dim_width) / vl_dim_total * 1000
}

module.exports.get_e_dim_rl = (m_dim_r_length, vl_dim_total) => {
    return Math.abs(m_dim_r_length) / vl_dim_total * 1000
}

module.exports.get_e_dim_rb = (m_dim_r_width, vl_dim_total) => {
    return Math.abs(m_dim_r_width) / vl_dim_total * 1000
}

module.exports.get_e_dim_r = (e_dim_rl, e_dim_rb) => {
    return Math.sqrt(Math.pow(e_dim_rl, 2) + Math.pow(e_dim_rb, 2))
}

module.exports.get_v_dr_st_r = (e_total_dr_st_r, radius) => {
    return 2 * Math.acos(e_total_dr_st_r / radius) * 180 / Math.PI
}

module.exports.get_v_dr_lt_r = (e_total_dr_lt_r, radius) => {
    return 2 * Math.acos(e_total_dr_lt_r / radius) * 180 / Math.PI
}

module.exports.get_v_ud_st_r = (e_total_ud_st_r, radius) => {
    return 2 * Math.acos(e_total_ud_st_r / radius) * 180 / Math.PI
}

module.exports.get_v_ud_lt_r = (e_total_ud_lt_r, radius) => {
    return 2 * Math.acos(e_total_ud_lt_r / radius) * 180 / Math.PI
}

module.exports.get_v_dim_r = (e_dim_r, radius) => {
    return 2 * Math.acos(e_dim_r / radius) * 180 / Math.PI
}

module.exports.get_ = (arg1, arg2) => {

}




















































