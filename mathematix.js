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

module.exports.get_af_pc = () => 1.2

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

module.exports.get_vl_total_dr_st = (self_weight, ground_weight, vl_external) => {
    return self_weight + ground_weight + vl_external
}

module.exports.get_vl_total_dr_lt = (self_weight, ground_weight, vl_external) => {
    return self_weight + ground_weight + vl_external
}

module.exports.get_vl_total_ud_st = (self_weight, ground_weight, vl_external) => {
    return self_weight + ground_weight + vl_external
}

module.exports.get_vl_total_ud_lt = (self_weight, ground_weight, vl_external) => {
    return self_weight + ground_weight + vl_external
}

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

module.exports.get_m_F_a_ud_st_l = (h_cg_a_ud_st, F_a_ud_st_l) => {
    return h_cg_a_ud_st / 1000 * F_a_ud_st_l
}

module.exports.get_m_F_a_ud_lt_l = (h_cg_a_ud_lt, F_a_ud_lt_l) => {
    return h_cg_a_ud_lt / 1000 * F_a_ud_lt_l
}

module.exports.get_m_F_p_dr_st_l = (h_cg_p_dr_st, F_p_dr_st_l) => {
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

module.exports.get_m_total_dr_st_b = (m_F_p_dr_st_b, m_h_width, m_v_dr_st_width, m_width, m_F_a_dr_st_b) => {
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



module.exports.get_ef_dr_st_l = (point_foundation_shape, length, e_total_dr_st_l, A_eff_dr_st, ef_dr_st_b) => {
    if (point_foundation_shape == 'rectangular') {
        return length - 2 * e_total_dr_st_l
    } else if (point_foundation_shape == 'circular') {
        return A_eff_dr_st * 1000000 / ef_dr_st_b
    }
}

module.exports.get_ef_dr_lt_l = (point_foundation_shape, length, e_total_dr_lt_l, A_eff_dr_lt, ef_dr_lt_b) => {
    if (point_foundation_shape == 'rectangular') {
        var ef_dr_lt_l = length - 2 * e_total_dr_lt_l
    } else if (point_foundation_shape == 'circular') {
        var ef_dr_lt_l = A_eff_dr_lt * 1000000 / ef_dr_lt_b
    }
}

module.exports.get_ef_ud_st_l = (point_foundation_shape, length, e_total_ud_st_l, A_eff_ud_st, ef_ud_st_b) => {
    if (point_foundation_shape == 'rectangular') {
        return length - 2 * e_total_ud_st_l
    } else if (point_foundation_shape == 'circular') {
        return A_eff_ud_st * 1000000 / ef_ud_st_b
    }
}

module.exports.get_ef_ud_lt_l = (point_foundation_shape, length, e_total_ud_lt_l, A_eff_ud_lt, ef_ud_lt_b) => {
    if (point_foundation_shape == 'rectangular') {
        return length - 2 * e_total_ud_lt_l
    } else if (point_foundation_shape == 'circular') {
        return A_eff_ud_lt * 1000000 / ef_ud_lt_b
    }
}

module.exports.get_ef_dim_l = (point_foundation_shape, length, e_dim_l, A_dim_eff, ef_dim_b) => {
    if (point_foundation_shape == 'rectangular') {
        return length - 2 * e_dim_l
    } else if (point_foundation_shape == 'circular') {
        return A_dim_eff * 1000000 / ef_dim_b
    }
}

module.exports.get_ef_dr_st_b = (point_foundation_shape, width, e_total_dr_st_b, v_dr_st_r, A_eff_dr_st) => {
    if (point_foundation_shape == 'rectangular') {
        return width - 2 * e_total_dr_st_b
    } else if (point_foundation_shape == 'circular') {
        return Math.sqrt(Math.tan(v_dr_st_r * Math.PI / 180 / 4) * A_eff_dr_st * 1000000)
    }
}

module.exports.get_ef_dr_lt_b = (point_foundation_shape, width, e_total_dr_lt_b, v_dr_lt_r, A_eff_dr_lt) => {
    if (point_foundation_shape == 'rectangular') {
        return width - 2 * e_total_dr_lt_b
    } else if (point_foundation_shape == 'circular') {
        return Math.sqrt(Math.tan(v_dr_lt_r * Math.PI / 180 / 4) * A_eff_dr_lt * 1000000)
    }
}

module.exports.get_ef_ud_st_b = (point_foundation_shape, e_total_ud_st_b, v_ud_st_r, A_eff_ud_st) => {
    if (point_foundation_shape == 'rectangular') {
        return width - 2 * e_total_ud_st_b
    } else if (point_foundation_shape == 'circular') {
        return Math.sqrt(Math.tan(v_ud_st_r * Math.PI / 180 / 4) * A_eff_ud_st * 1000000)
    }
}

module.exports.get_ef_ud_lt_b = (point_foundation_shape, width, e_total_ud_lt_b, v_ud_lt_r, A_eff_ud_lt) => {
    if (point_foundation_shape == 'rectangular') {
        return width - 2 * e_total_ud_lt_b
    } else if (point_foundation_shape == 'circular') {
        return Math.sqrt(Math.tan(v_ud_lt_r * Math.PI / 180 / 4) * A_eff_ud_lt * 1000000)
    }
}

module.exports.get_ef_dim_b = (point_foundation_shape, width, e_dim_b, v_dim_r, A_dim_eff) => {
    if (point_foundation_shape == 'rectangular') {
        return width - 2 * e_dim_b
    } else if (point_foundation_shape == 'circular') {
        return Math.sqrt(Math.tan(v_dim_r * Math.PI / 180 / 4) * A_dim_eff * 1000000)
    }
}

module.exports.get_A_eff_dr_st = (point_foundation_shape, ef_dr_st_l, ef_dr_st_b, radius, v_dr_st_r) => {
    if (point_foundation_shape == 'rectangular') {
        return ef_dr_st_l * ef_dr_st_b / 1000000
    } else if (point_foundation_shape == 'circular') {
        return Math.pow(radius / 1000, 2) * (v_dr_st_r * Math.PI / 180 - Math.sin(v_dr_st_r * Math.PI / 180))
    }
}

module.exports.get_A_eff_dr_lt = (point_foundation_shape, ef_dr_lt_l, ef_dr_lt_b, radius, v_dr_lt_r) => {
    if (point_foundation_shape == 'rectangular') {
        return ef_dr_lt_l * ef_dr_lt_b / 1000000
    } else if (point_foundation_shape == 'circular') {
        return Math.pow(radius / 1000, 2) * (v_dr_lt_r * Math.PI / 180 - Math.sin(v_dr_lt_r * Math.PI / 180))
    }
}

module.exports.get_A_eff_ud_st = (point_foundation_shape, ef_ud_st_l, ef_ud_st_b, radius, v_ud_st_r) => {
    if (point_foundation_shape == 'rectangular') {
        return ef_ud_st_l * ef_ud_st_b / 1000000
    } else if (point_foundation_shape == 'circular') {
        return Math.pow(radius / 1000, 2) * (v_ud_st_r * Math.PI / 180 - Math.sin(v_ud_st_r * Math.PI / 180))
    }
}

module.exports.get_A_eff_ud_lt = (point_foundation_shape, ef_ud_lt_l, ef_ud_lt_b, radius, v_ud_lt_r) => {
    if (point_foundation_shape == 'rectangular') {
        return ef_ud_lt_l * ef_ud_lt_b / 1000000
    } else if (point_foundation_shape == 'circular') {
        return Math.pow(radius / 1000, 2) * (v_ud_lt_r * Math.PI / 180 - Math.sin(v_ud_lt_r * Math.PI / 180))
    }
}

module.exports.get_A_dim_eff = (point_foundation_shape, ef_dim_l, ef_dim_b, radius, v_dim_r) => {
    if (point_foundation_shape == 'rectangular') {
        return ef_dim_l * ef_dim_b / 1000000
    } else if (point_foundation_shape == 'circular') {
        return Math.pow(radius / 1000, 2) * (v_dim_r * Math.PI / 180 - Math.sin(v_dim_r * Math.PI / 180))
    }
}

// GROUND BEARING CAPACITY

module.exports.get_N_q_dr_st = (point_foundation_shape, e_total_dr_st_l, length, e_total_dr_st_b, width, dr_st_af_d, e_total_dr_st_r, radius) => {
    if (point_foundation_shape == 'rectangular') {
        if (e_total_dr_st_l < 0.3 * length && e_total_dr_st_b < 0.3 * width) {
            return Math.exp(Math.PI * Math.tan(dr_st_af_d * Math.PI / 180)) * (1 + Math.sin(dr_st_af_d * Math.PI / 180)) / (1 - Math.sin(dr_st_af_d * Math.PI / 180))
        } else if (e_total_dr_st_l >= 0.3 * length || e_total_dr_st_b >= 0.3 * width) {
            return Math.exp(Math.PI * Math.tan(dr_st_af_d * Math.PI / 180)) * (1 + Math.sin(dr_st_af_d * Math.PI / 180)) / (1 - Math.sin(dr_st_af_d * Math.PI / 180))  
        }
    } else if (point_foundation_shape == 'circular') {
        if (e_total_dr_st_r < 0.3 * 2 * radius) {
            return Math.exp(Math.PI * Math.tan(dr_st_af_d * Math.PI / 180)) * (1 + Math.sin(dr_st_af_d * Math.PI / 180)) / (1 - Math.sin(dr_st_af_d * Math.PI / 180))
        } else if (e_total_dr_st_r >= 0.3 * 2 * radius) {
            return Math.exp(Math.PI * Math.tan(dr_st_af_d * Math.PI / 180)) * (1 + Math.sin(dr_st_af_d * Math.PI / 180)) / (1 - Math.sin(dr_st_af_d * Math.PI / 180))
        }
    }
}

module.exports.get_N_c_dr_st = (point_foundation_shape, e_total_dr_st_l, length, e_total_dr_st_b, width, N_q_dr_st, dr_st_af_d, e_total_dr_st_r, radius) => {
    if (point_foundation_shape == 'rectangular') {
        if (e_total_dr_st_l < 0.3 * length && e_total_dr_st_b < 0.3 * width) {
            return (N_q_dr_st - 1) / Math.tan(dr_st_af_d * Math.PI / 180)
        } else if (e_total_dr_st_l >= 0.3 * length || e_total_dr_st_b >= 0.3 * width) {
            return (1.05 + Math.pow(Math.tan(dr_st_af_d * Math.PI / 180), 3)) * (N_q_dr_st - 1) / Math.tan(dr_st_af_d * Math.PI / 180)
        }
    } else if (point_foundation_shape == 'circular') {
        if (e_total_dr_st_r < 0.3 * 2 * radius) {
            return (N_q_dr_st - 1) / Math.tan(dr_st_af_d * Math.PI / 180)
        } else if (e_total_dr_st_r >= 0.3 * 2 * radius) {
            return (1.05 + Math.pow(Math.tan(dr_st_af_d * Math.PI / 180), 3)) * (N_q_dr_st - 1) / Math.tan(dr_st_af_d * Math.PI / 180)
        }
    }
}

module.exports.get_N_g_dr_st = (point_foundation_shape, e_total_dr_st_l, length, e_total_dr_st_b, width, N_q_dr_st, dr_st_af_d, e_total_dr_st_r, radius) => {
    if (point_foundation_shape == 'rectangular') {

        if (e_total_dr_st_l < 0.3 * length && e_total_dr_st_b < 0.3 * width) {
            return 1 / 4 * Math.pow((N_q_dr_st - 1) * Math.cos(dr_st_af_d * Math.PI / 180), (3 / 2))
        } else if (e_total_dr_st_l >= 0.3 * length || e_total_dr_st_b >= 0.3 * width) {
            return 2 * (1 / 4 * Math.pow((N_q_dr_st - 1) * Math.cos(dr_st_af_d * Math.PI / 180), (3 / 2)))
        }
    } else if (point_foundation_shape == 'circular') {
        if (e_total_dr_st_r < 0.3 * 2 * radius) {
            return 1 / 4 * Math.pow((N_q_dr_st - 1) * Math.cos(dr_st_af_d * Math.PI / 180), (3 / 2))
        } else if (e_total_dr_st_r >= 0.3 * 2 * radius) {
            return 2 * (1 / 4 * Math.pow((N_q_dr_st - 1) * Math.cos(dr_st_af_d * Math.PI / 180), (3 / 2)))
        }
    }
}

module.exports.get_N_q_dr_lt = (point_foundation_shape, e_total_dr_lt_l, length, e_total_dr_lt_b, width, dr_lt_af_d, e_total_dr_lt_r, radius) => {
    if (point_foundation_shape == 'rectangular') {
        if (e_total_dr_lt_l < 0.3 * length && e_total_dr_lt_b < 0.3 * width) {
            return Math.exp(Math.PI * Math.tan(dr_lt_af_d * Math.PI / 180)) * (1 + Math.sin(dr_lt_af_d * Math.PI / 180)) / (1 - Math.sin(dr_lt_af_d * Math.PI / 180))
        } else if (e_total_dr_lt_l >= 0.3 * length || e_total_dr_lt_b >= 0.3 * width) {
            return Math.exp(Math.PI * Math.tan(dr_lt_af_d * Math.PI / 180)) * (1 + Math.sin(dr_lt_af_d * Math.PI / 180)) / (1 - Math.sin(dr_lt_af_d * Math.PI / 180))
        }
    } else if (point_foundation_shape == 'circular') {
        if (e_total_dr_lt_r < 0.3 * 2 * radius) {
            return Math.exp(Math.PI * Math.tan(dr_lt_af_d * Math.PI / 180)) * (1 + Math.sin(dr_lt_af_d * Math.PI / 180)) / (1 - Math.sin(dr_lt_af_d * Math.PI / 180))
        } else if (e_total_dr_lt_r >= 0.3 * 2 * radius) {
            return Math.exp(Math.PI * Math.tan(dr_lt_af_d * Math.PI / 180)) * (1 + Math.sin(dr_lt_af_d * Math.PI / 180)) / (1 - Math.sin(dr_lt_af_d * Math.PI / 180))
        }
    }
}

module.exports.get_N_c_dr_lt = (point_foundation_shape, e_total_dr_lt_l, length, e_total_dr_lt_b, width, N_q_dr_lt, dr_lt_af_d, e_total_dr_lt_r, radius) => {
    if (point_foundation_shape == 'rectangular') {
        if (e_total_dr_lt_l < 0.3 * length && e_total_dr_lt_b < 0.3 * width) {
            return (N_q_dr_lt - 1) / Math.tan(dr_lt_af_d * Math.PI / 180)
        } else if (e_total_dr_lt_l >= 0.3 * length || e_total_dr_lt_b >= 0.3 * width) {
            return (1.05 + Math.pow(Math.tan(dr_lt_af_d * Math.PI / 180), 3)) * (N_q_dr_lt - 1) / Math.tan(dr_lt_af_d * Math.PI / 180)
        }
    } else if (point_foundation_shape == 'circular') {
        if (e_total_dr_lt_r < 0.3 * 2 * radius) {
            return (N_q_dr_lt - 1) / Math.tan(dr_lt_af_d * Math.PI / 180)
        } else if (e_total_dr_lt_r >= 0.3 * 2 * radius) {
            return (1.05 + Math.pow(Math.tan(dr_lt_af_d * Math.PI / 180), 3)) * (N_q_dr_lt - 1) / Math.tan(dr_lt_af_d * Math.PI / 180)
        }
    }
}

module.exports.get_N_g_dr_lt = (point_foundation_shape, e_total_dr_lt_l, length, e_total_dr_lt_b, width, N_q_dr_lt, dr_lt_af_d, e_total_dr_lt_r, radius) => {
    if (point_foundation_shape == 'rectangular') {
        if (e_total_dr_lt_l < 0.3 * length && e_total_dr_lt_b < 0.3 * width) {
            return 1 / 4 * Math.pow((N_q_dr_lt - 1) * Math.cos(dr_lt_af_d * Math.PI / 180), (3 / 2))
        } else if (e_total_dr_lt_l >= 0.3 * length || e_total_dr_lt_b >= 0.3 * width) {
            return 2 * (1 / 4 * Math.pow((N_q_dr_lt - 1) * Math.cos(dr_lt_af_d * Math.PI / 180), (3 / 2)))
        }

    } else if (point_foundation_shape == 'circular') {
        if (e_total_dr_lt_r < 0.3 * 2 * radius) {
            return 1 / 4 * Math.pow((N_q_dr_lt - 1) * Math.cos(dr_lt_af_d * Math.PI / 180), (3 / 2))
        } else if (e_total_dr_lt_r >= 0.3 * 2 * radius) {
            return 2 * (1 / 4 * Math.pow((N_q_dr_lt - 1) * Math.cos(dr_lt_af_d * Math.PI / 180), (3 / 2)))
        }
    }
}

module.exports.get_ = (arg1, arg2) => {
    if (point_foundation_shape == 'rectangular') {

    } else if (point_foundation_shape == 'circular') {
    
    }
}

module.exports.get_N_q_ud_st = (point_foundation_shape, e_total_ud_st_l, length, e_total_ud_st_b, width, e_total_ud_st_r, radius) => {
    if (point_foundation_shape == 'rectangular') {
        if (e_total_ud_st_l < 0.3 * length && e_total_ud_st_b < 0.3 * width) {
            return 1
        } else if (e_total_ud_st_l >= 0.3 * length || e_total_ud_st_b >= 0.3 * width) {
            return 1    
        }
    } else if (point_foundation_shape == 'circular') {
        if (e_total_ud_st_r < 0.3 * 2 * radius) {
            return 1
        } else if (e_total_ud_st_r >= 0.3 * 2 * radius) {
            return 1
        }
    }
}

module.exports.get_N_c_ud_st = (point_foundation_shape, e_total_ud_st_l, length, e_total_ud_st_b, width, ud_st_af_d, e_total_ud_st_r, radius) => {
    if (point_foundation_shape == 'rectangular') {
        if (e_total_ud_st_l < 0.3 * length && e_total_ud_st_b < 0.3 * width) {
            return 2 + Math.PI // + (N_q_ud_st - 1) / Math.tan(ud_st_af_d * Math.PI / 180) 
        } else if (e_total_ud_st_l >= 0.3 * length || e_total_ud_st_b >= 0.3 * width) {
            return (1.05 + Math.pow(Math.tan(ud_st_af_d * Math.PI / 180), 3)) * (2 + Math.PI) // + (N_q_ud_st - 1) / Math.tan(ud_st_af_d * Math.PI / 180)) 
        }
    } else if (point_foundation_shape == 'circular') {
        if (e_total_ud_st_r < 0.3 * 2 * radius) {
            return 2 + Math.PI // + (N_q_ud_st - 1) / Math.tan(ud_st_af_d * Math.PI / 180)     
        } else if (e_total_ud_st_r >= 0.3 * 2 * radius) {
            return (1.05 + Math.pow(Math.tan(ud_st_af_d * Math.PI / 180), 3)) * (2 + Math.PI) // + (N_q_ud_st - 1) / Math.tan(ud_st_af_d * Math.PI / 180))
        }
    }
}

module.exports.get_N_g_ud_st = (point_foundation_shape, e_total_ud_st_l, length, e_total_ud_st_b, width, e_total_ud_st_r, radius) => {
    if (point_foundation_shape == 'rectangular') {
        if (e_total_ud_st_l < 0.3 * length && e_total_ud_st_b < 0.3 * width) {    
            return 0
        } else if (e_total_ud_st_l >= 0.3 * length || e_total_ud_st_b >= 0.3 * width) {
            return 0      
        }
    } else if (point_foundation_shape == 'circular') {
        if (e_total_ud_st_r < 0.3 * 2 * radius) {    
            return 0
        } else if (e_total_ud_st_r >= 0.3 * 2 * radius) {
            return 0
        }
    }
}

module.exports.get_N_q_ud_lt = (point_foundation_shape, e_total_ud_lt_l, length, e_total_ud_lt_b, width, ud_lt_af_d, e_total_ud_lt_r, radius) => {
    if (point_foundation_shape == 'rectangular') {
        if (e_total_ud_lt_l < 0.3 * length && e_total_ud_lt_b < 0.3 * width) {
            if (ud_lt_af_d == 0) {
                return 1
            } else {
                return Math.exp(Math.PI * Math.tan(ud_lt_af_d * Math.PI / 180)) * (1 + Math.sin(ud_lt_af_d * Math.PI / 180)) / (1 - Math.sin(ud_lt_af_d * Math.PI / 180))
            }
        } else if (e_total_ud_lt_l >= 0.3 * length || e_total_ud_lt_b >= 0.3 * width) {
            if (ud_lt_af_d == 0) {
                return 1
            } else {
                return Math.exp(Math.PI * Math.tan(ud_lt_af_d * Math.PI / 180)) * (1 + Math.sin(ud_lt_af_d * Math.PI / 180)) / (1 - Math.sin(ud_lt_af_d * Math.PI / 180))
            }
        }
    } else if (point_foundation_shape == 'circular') {
        if (e_total_ud_lt_r < 0.3 * 2 * radius) {
            if (ud_lt_af_d == 0) {
                return 1
            } else {
                return Math.exp(Math.PI * Math.tan(ud_lt_af_d * Math.PI / 180)) * (1 + Math.sin(ud_lt_af_d * Math.PI / 180)) / (1 - Math.sin(ud_lt_af_d * Math.PI / 180))
            }
        } else if (e_total_ud_lt_r >= 0.3 * 2 * radius) {
            if (ud_lt_af_d == 0) {
                return 1
            } else {
                return Math.exp(Math.PI * Math.tan(ud_lt_af_d * Math.PI / 180)) * (1 + Math.sin(ud_lt_af_d * Math.PI / 180)) / (1 - Math.sin(ud_lt_af_d * Math.PI / 180))
            }
        }
    }
}

module.exports.get_N_c_ud_lt = (point_foundation_shape, e_total_ud_lt_l, length, e_total_ud_lt_b, width, ud_lt_af_d, N_q_ud_lt, e_total_ud_lt_r, radius) => {
    if (point_foundation_shape == 'rectangular') {

        if (e_total_ud_lt_l < 0.3 * length && e_total_ud_lt_b < 0.3 * width) {

            if (ud_lt_af_d == 0) {     
                return 2 + Math.PI // + (N_q_ud_lt - 1) / Math.tan(ud_lt_af_d * Math.PI / 180)
            } else {
                return (N_q_ud_lt - 1) / Math.tan(ud_lt_af_d * Math.PI / 180)
            }
        } else if (e_total_ud_lt_l >= 0.3 * length || e_total_ud_lt_b >= 0.3 * width) {
            if (ud_lt_af_d == 0) {
                return (1.05 + Math.pow(Math.tan(ud_lt_af_d * Math.PI / 180), 3)) * (2 + Math.PI) // + (N_q_ud_lt - 1) / Math.tan(ud_lt_af_d * Math.PI / 180))
            } else {
                return (1.05 + Math.pow(Math.tan(ud_lt_af_d * Math.PI / 180), 3)) * (N_q_ud_lt - 1) / Math.tan(ud_lt_af_d * Math.PI / 180)
            }
        }
    } else if (point_foundation_shape == 'circular') {
        if (e_total_ud_lt_r < 0.3 * 2 * radius) {

            if (ud_lt_af_d == 0) {
                return 2 + Math.PI // + (N_q_ud_lt - 1) / Math.tan(ud_lt_af_d * Math.PI / 180)
            } else {
                return (N_q_ud_lt - 1) / Math.tan(ud_lt_af_d * Math.PI / 180)
            }
        } else if (e_total_ud_lt_r >= 0.3 * 2 * radius) {
            if (ud_lt_af_d == 0) {
                return (1.05 + Math.pow(Math.tan(ud_lt_af_d * Math.PI / 180), 3)) * (2 + Math.PI) // + (N_q_ud_lt - 1) / Math.tan(ud_lt_af_d * Math.PI / 180))
            } else {
                return (1.05 + Math.pow(Math.tan(ud_lt_af_d * Math.PI / 180), 3)) * (N_q_ud_lt - 1) / Math.tan(ud_lt_af_d * Math.PI / 180)
            }
        }
    }
}

module.exports.get_ = (point_foundation_shape, e_total_ud_lt_l, length, e_total_ud_lt_b, width, ud_lt_af_d, N_q_ud_lt, e_total_ud_lt_r, radius) => {
    if (point_foundation_shape == 'rectangular') {
        if (e_total_ud_lt_l < 0.3 * length && e_total_ud_lt_b < 0.3 * width) {
            if (ud_lt_af_d == 0) {
                return 0
            } else {
                return 1 / 4 * Math.pow((N_q_ud_lt - 1) * Math.cos(ud_lt_af_d * Math.PI / 180), (3 / 2))
            }
        } else if (e_total_ud_lt_l >= 0.3 * length || e_total_ud_lt_b >= 0.3 * width) {
            if (ud_lt_af_d == 0) {
                return 0
            } else {
                return 2 * (1 / 4 * Math.pow((N_q_ud_lt - 1) * Math.cos(ud_lt_af_d * Math.PI / 180), (3 / 2)))
            }
        }
    } else if (point_foundation_shape == 'circular') {
        if (e_total_ud_lt_r < 0.3 * 2 * radius) {
            if (ud_lt_af_d == 0) {
                return 0

            } else {
                return 1 / 4 * Math.pow((N_q_ud_lt - 1) * Math.cos(ud_lt_af_d * Math.PI / 180), (3 / 2))
            }
        } else if (e_total_ud_lt_r >= 0.3 * 2 * radius) {
            if (ud_lt_af_d == 0) {
                return 0
            } else {
                return 2 * (1 / 4 * Math.pow((N_q_ud_lt - 1) * Math.cos(ud_lt_af_d * Math.PI / 180), (3 / 2)))
            }
        }
    }
}

module.exports.get_s_g_dr_st = (ef_dr_st_l, ef_dr_st_b) => {
    return 1 - 0.4 * Math.min(ef_dr_st_l , ef_dr_st_b) / Math.max(ef_dr_st_l , ef_dr_st_b)
}

module.exports.get_s_g_dr_lt = (ef_dr_lt_l, ef_dr_lt_b) => {
    return 1 - 0.4 * Math.min(ef_dr_lt_l , ef_dr_lt_b) / Math.max(ef_dr_lt_l , ef_dr_lt_b)
}

module.exports.get_s_g_ud_st = (ef_ud_st_l, ef_ud_st_b) => {
    return 1 - 0.4 * Math.min(ef_ud_st_l , ef_ud_st_b) / Math.max(ef_ud_st_l , ef_ud_st_b)
}

module.exports.get_s_g_ud_lt = (ef_ud_lt_l, ef_ud_lt_b) => {
    return 1 - 0.4 * Math.min(ef_ud_lt_l , ef_ud_lt_b) / Math.max(ef_ud_lt_l , ef_ud_lt_b)
}

module.exports.get_s_q_dr_st = (ef_dr_st_l, ef_dr_st_b) => {
    return 1 + 0.2 * Math.min(ef_dr_st_l , ef_dr_st_b) / Math.max(ef_dr_st_l , ef_dr_st_b)
}

module.exports.get_s_q_dr_lt = (ef_dr_lt_l, ef_dr_lt_b) => {
    return 1 + 0.2 * Math.min(ef_dr_lt_l , ef_dr_lt_b) / Math.max(ef_dr_lt_l , ef_dr_lt_b)
}

module.exports.get_s_q_ud_st = (ef_ud_st_l, ef_ud_st_b) => {
    return 1 + 0.2 * Math.min(ef_ud_st_l , ef_ud_st_b) / Math.max(ef_ud_st_l , ef_ud_st_b)
}

module.exports.get_s_q_ud_lt = (ef_ud_lt_l, ef_ud_lt_b) => {
    return 1 + 0.2 * Math.min(ef_ud_lt_l , ef_ud_lt_b) / Math.max(ef_ud_lt_l , ef_ud_lt_b)
}

module.exports.get_s_c_dr_st = (s_q_dr_st) => {
    return s_q_dr_st
}

module.exports.get_s_c_dr_lt = (s_q_dr_lt) => {
    return s_q_dr_lt
}

module.exports.get_s_c_ud_st = (s_q_ud_st) => {
    return s_q_ud_st
}

module.exports.get_s_c_ud_lt = (s_q_ud_lt) => {
    return s_q_ud_lt
}

module.exports.get_i_q_dr_st = (H_res_dr_st, vl_total_dr_st, A_eff_dr_st, dr_st_cohesion_d, dr_st_af_d) => {
    if (H_res_dr_st == 0) {
        return 1
    } else if (H_res_dr_st != 0) {
        return Math.pow(1 - H_res_dr_st / (vl_total_dr_st + A_eff_dr_st * dr_st_cohesion_d / Math.tan(dr_st_af_d * Math.PI / 180)), 2)
    }
}

module.exports.get_i_g_dr_st = (H_res_dr_st, vl_total_dr_st, point_foundation_shape, e_total_dr_st_l, length, e_total_dr_st_b, width, e_total_dr_st_r, radius) => {
    if (H_res_dr_st == 0) {
        return 1
    } else if (H_res_dr_st != 0) {
        if (point_foundation_shape == 'rectangular') {

            if (e_total_dr_st_l < 0.3 * length && e_total_dr_st_b < 0.3 * width) {
                return Math.pow(i_q_dr_st, 2)
            } else if (e_total_dr_st_l >= 0.3 * length || e_total_dr_st_b >= 0.3 * width) {
                return 1 + 3 * H_res_dr_st / vl_total_dr_st
            }
        } else if (point_foundation_shape == 'circular') {
            if (e_total_dr_st_r < 0.3 * 2 * radius) {
                return Math.pow(i_q_dr_st, 2)
            } else if (e_total_dr_st_r >= 0.3 * 2 * radius) {
                return 1 + 3 * H_res_dr_st / vl_total_dr_st
            }
        }
    }
}

module.exports.get_i_c_dr_st = (H_res_dr_st, point_foundation_shape, e_total_dr_st_l, length, e_total_dr_st_b, width, vl_total_dr_st, dr_st_af_d, e_total_dr_st_r, radius) => {
    if (H_res_dr_st == 0) {
        return 1
    } else if (H_res_dr_st != 0) {
        if (point_foundation_shape == 'rectangular') {
            if (e_total_dr_st_l < 0.3 * length && e_total_dr_st_b < 0.3 * width) {
                return i_q_dr_st
            } else if (e_total_dr_st_l >= 0.3 * length || e_total_dr_st_b >= 0.3 * width) {
                return 1 + 4 * H_res_dr_st / vl_total_dr_st * Math.tan(dr_st_af_d * Math.PI / 180)
            }
        } else if (point_foundation_shape == 'circular') {
            if (e_total_dr_st_r < 0.3 * 2 * radius) {
                return i_q_dr_st
            } else if (e_total_dr_st_r >= 0.3 * 2 * radius) {
                return 1 + 4 * H_res_dr_st / vl_total_dr_st * Math.tan(dr_st_af_d * Math.PI / 180)
            }
        }
    }
}

module.exports.get_i_q_dr_lt = (H_res_dr_lt, vl_total_dr_lt, A_eff_dr_lt, dr_lt_cohesion_d, dr_lt_af_d) => {
    if (H_res_dr_lt == 0) {
        return 1
    } else if (H_res_dr_lt != 0) {
        return Math.pow(1 - H_res_dr_lt / (vl_total_dr_lt + A_eff_dr_lt * dr_lt_cohesion_d / Math.tan(dr_lt_af_d * Math.PI / 180)), 2)
    }
}

module.exports.get_i_g_dr_lt = (H_res_dr_lt, vl_total_dr_lt, A_eff_dr_lt, dr_lt_cohesion_d, dr_lt_af_d, point_foundation_shape, e_total_dr_lt_l, length, e_total_dr_lt_b, width, e_total_dr_lt_r, radius) => {
    if (H_res_dr_lt == 0) {
        return 1
    } else if (H_res_dr_lt != 0) {
        var i_q_dr_lt = Math.pow(1 - H_res_dr_lt / (vl_total_dr_lt + A_eff_dr_lt * dr_lt_cohesion_d / Math.tan(dr_lt_af_d * Math.PI / 180)), 2)
        if (point_foundation_shape == 'rectangular') {
            if (e_total_dr_lt_l < 0.3 * length && e_total_dr_lt_b < 0.3 * width) {
                return Math.pow(i_q_dr_lt, 2)
            } else if (e_total_dr_lt_l >= 0.3 * length || e_total_dr_lt_b >= 0.3 * width) {
                return 1 + 3 * H_res_dr_lt / vl_total_dr_lt
            }
        } else if (point_foundation_shape == 'circular') {
            if (e_total_dr_lt_r < 0.3 * 2 * radius) {
                return Math.pow(i_q_dr_lt, 2)
            } else if (e_total_dr_lt_r >= 0.3 * 2 * radius) {
                return 1 + 3 * H_res_dr_lt / vl_total_dr_lt
            }
        }
    }
}

module.exports.get_i_c_dr_lt = (H_res_dr_lt, vl_total_dr_lt, A_eff_dr_lt, dr_lt_cohesion_d, dr_lt_af_d, point_foundation_shape, e_total_dr_lt_l, length, e_total_dr_lt_b, width, e_total_dr_lt_r, radius) => {
    if (H_res_dr_lt == 0) {
        return 1
    } else if (H_res_dr_lt != 0) {
        var i_q_dr_lt = Math.pow(1 - H_res_dr_lt / (vl_total_dr_lt + A_eff_dr_lt * dr_lt_cohesion_d / Math.tan(dr_lt_af_d * Math.PI / 180)), 2)
        if (point_foundation_shape == 'rectangular') {
            if (e_total_dr_lt_l < 0.3 * length && e_total_dr_lt_b < 0.3 * width) {
                return i_q_dr_lt
            } else if (e_total_dr_lt_l >= 0.3 * length || e_total_dr_lt_b >= 0.3 * width) {
                return 1 + 4 * H_res_dr_lt / vl_total_dr_lt * Math.tan(dr_lt_af_d * Math.PI / 180)
            }
        } else if (point_foundation_shape == 'circular') {
            if (e_total_dr_lt_r < 0.3 * 2 * radius) {
                return i_q_dr_lt
            } else if (e_total_dr_lt_r >= 0.3 * 2 * radius) {
                return 1 + 4 * H_res_dr_lt / vl_total_dr_lt * Math.tan(dr_lt_af_d * Math.PI / 180)
            }
        }
    }
}

module.exports.get_i_q_ud_st = (H_res_ud_st) => {
    if (H_res_ud_st == 0) {
        return 1
    } else if (H_res_ud_st != 0) {
        return 0
    }
}

module.exports.get_i_g_ud_st = (H_res_ud_st, point_foundation_shape, e_total_ud_st_l, length, e_total_ud_st_b, width, vl_total_ud_st, e_total_ud_st_r, radius) => {
    if (H_res_ud_st == 0) {
        return 1
    } else if (H_res_ud_st != 0) {
        if (point_foundation_shape == 'rectangular') {
            if (e_total_ud_st_l < 0.3 * length && e_total_ud_st_b < 0.3 * width) {
                return 0
            } else if (e_total_ud_st_l >= 0.3 * length || e_total_ud_st_b >= 0.3 * width) {
                return 1 + 3 * H_res_ud_st / vl_total_ud_st
            }
        } else if (point_foundation_shape == 'circular') {
            if (e_total_ud_st_r < 0.3 * 2 * radius) {
                return 0
               } else if (e_total_ud_st_r >= 0.3 * 2 * radius) {
                return 1 + 3 * H_res_ud_st / vl_total_ud_st
            }
        }
    }
}

module.exports.get_i_c_ud_st = (H_res_ud_st, point_foundation_shape, e_total_ud_st_l, length, e_total_ud_st_b, width, A_eff_ud_st, ud_st_cohesion_d, ud_st_af_d, e_total_ud_st_r, radius, vl_total_ud_st) => {
    if (H_res_ud_st == 0) {
        return 1
    } else if (H_res_ud_st != 0) {
        if (point_foundation_shape == 'rectangular') {
            if (e_total_ud_st_l < 0.3 * length && e_total_ud_st_b < 0.3 * width) {
                if (H_res_ud_st / (A_eff_ud_st * ud_st_cohesion_d) > 1) {
                    return 0.5
                } else {
                    return 0.5 + 0.5 * Math.sqrt(1 - H_res_ud_st / (A_eff_ud_st * ud_st_cohesion_d))
                }
            } else if (e_total_ud_st_l >= 0.3 * length || e_total_ud_st_b >= 0.3 * width) {
                return 1 + 4 * H_res_ud_st / vl_total_ud_st * Math.tan(ud_st_af_d * Math.PI / 180)
            }
        } else if (point_foundation_shape == 'circular') {
            if (e_total_ud_st_r < 0.3 * 2 * radius) {
                if (H_res_ud_st / (A_eff_ud_st * ud_st_cohesion_d) > 1) {
                    return 0.5
                } else {
                    return 0.5 + 0.5 * Math.sqrt(1 - H_res_ud_st / (A_eff_ud_st * ud_st_cohesion_d))
                }
               } else if (e_total_ud_st_r >= 0.3 * 2 * radius) {
                    return 1 + 4 * H_res_ud_st / vl_total_ud_st * Math.tan(ud_st_af_d * Math.PI / 180)
            }
        }
    }
}

module.exports.get_i_q_ud_lt = (H_res_ud_lt, ud_lt_af_d, vl_total_ud_lt, A_eff_ud_lt, ud_lt_cohesion_d) => {
    if (H_res_ud_lt == 0) {
        return 1
    } else if (H_res_ud_lt != 0) {
        if (ud_lt_af_d == 0) {
            return 0
        } else {
            return Math.pow(1 - H_res_ud_lt / (vl_total_ud_lt + A_eff_ud_lt * ud_lt_cohesion_d / Math.tan(ud_lt_af_d * Math.PI / 180)), 2)
        }
    }
}

module.exports.get_i_g_ud_lt = (H_res_ud_lt, point_foundation_shape, e_total_ud_lt_l, length, e_total_ud_lt_b, width, ud_lt_af_d, i_q_ud_lt, e_total_ud_lt_r, radius, vl_total_ud_lt) => {
    if (H_res_ud_lt == 0) {
        return 1
    } else if (H_res_ud_lt != 0) {
        if (point_foundation_shape == 'rectangular') {
            if (e_total_ud_lt_l < 0.3 * length && e_total_ud_lt_b < 0.3 * width) {

                if (ud_lt_af_d == 0) {
                    return 0
                } else {
                    return Math.pow(i_q_ud_lt, 2)
                }
            } else if (e_total_ud_lt_l >= 0.3 * length || e_total_ud_lt_b >= 0.3 * width) {
                return 1 + 3 * H_res_ud_lt / vl_total_ud_lt
            }
        } else if (point_foundation_shape == 'circular') {
            if (e_total_ud_lt_r < 0.3 * 2 * radius) {
                if (ud_lt_af_d == 0) {
                    return 0
                     } else {
                    return Math.pow(i_q_ud_lt, 2)
                }
            } else if (e_total_ud_lt_r >= 0.3 * 2 * radius) {
                return 1 + 3 * H_res_ud_lt / vl_total_ud_lt
            }
        }
    }
}

module.exports.get_i_c_ud_lt = (H_res_ud_lt, point_foundation_shape, e_total_ud_lt_l, length, e_total_ud_lt_b, width, ud_lt_af_d, A_eff_ud_lt, ud_lt_cohesion_d, i_q_ud_lt, vl_total_ud_lt, e_total_ud_lt_r, radius) => {
    if (H_res_ud_lt == 0) {
        return 1
    } else if (H_res_ud_lt != 0) {
        if (point_foundation_shape == 'rectangular') {
            if (e_total_ud_lt_l < 0.3 * length && e_total_ud_lt_b < 0.3 * width) {
                if (ud_lt_af_d == 0) {
                    return 0.5 + 0.5 * Math.sqrt(1 - H_res_ud_lt / (A_eff_ud_lt * ud_lt_cohesion_d))
                } else {
                    return i_q_ud_lt
                }
            } else if (e_total_ud_lt_l >= 0.3 * length || e_total_ud_lt_b >= 0.3 * width) {
                return 1 + 4 * H_res_ud_lt / vl_total_ud_lt * Math.tan(ud_lt_af_d * Math.PI / 180)
            }
        } else if (point_foundation_shape == 'circular') {
            if (e_total_ud_lt_r < 0.3 * 2 * radius) {
                if (ud_lt_af_d == 0) {
                    return 0.5 + 0.5 * Math.sqrt(1 - H_res_ud_lt / (A_eff_ud_lt * ud_lt_cohesion_d))
                } else {
                    return i_q_ud_lt
                }
            } else if (e_total_ud_lt_r >= 0.3 * 2 * radius) {
                return 1 + 4 * H_res_ud_lt / vl_total_ud_lt * Math.tan(ud_lt_af_d * Math.PI / 180)
            }
        }
    }
}

module.exports.get_R_q_dr_st = (q, N_q_dr_st, s_q_dr_st, i_q_dr_st, d_q) => {
    return q * N_q_dr_st * s_q_dr_st * i_q_dr_st * d_q
}

module.exports.get_R_q_dr_lt = (q, N_q_dr_lt, s_q_dr_lt, i_q_dr_lt, d_q) => {
    return q * N_q_dr_lt * s_q_dr_lt * i_q_dr_lt * d_q
}

module.exports.get_R_q_ud_st = (q) => {
    return q
}

module.exports.get_R_q_ud_lt = (ud_lt_af_d, q, N_q_ud_lt, s_q_ud_lt, i_q_ud_lt, d_q) => {
    if (ud_lt_af_d == 0) {
        return q
    } else {
        return q * N_q_ud_lt * s_q_ud_lt * i_q_ud_lt * d_q
    }
}

module.exports.get_R_c_dr_st = (dr_st_cohesion_d, N_c_dr_st, s_c_dr_st, i_c_dr_st, d_c) => {
    return dr_st_cohesion_d * N_c_dr_st * s_c_dr_st * i_c_dr_st * d_c
}

module.exports.get_R_c_dr_lt = (dr_lt_cohesion_d, N_c_dr_lt, s_c_dr_lt, i_c_dr_lt, d_c) => {
    return dr_lt_cohesion_d * N_c_dr_lt * s_c_dr_lt * i_c_dr_lt * d_c
}

module.exports.get_R_c_ud_st = (ud_st_cohesion_d, N_c_ud_st, s_c_ud_st, i_c_ud_st) => {
    return ud_st_cohesion_d * N_c_ud_st * s_c_ud_st * i_c_ud_st
}

module.exports.get_R_c_ud_lt = (ud_lt_af_d, ud_lt_cohesion_d, N_c_ud_lt, s_c_ud_lt, i_c_ud_lt, d_c) => {
    if (ud_lt_af_d == 0) {
        return ud_lt_cohesion_d * N_c_ud_lt * s_c_ud_lt * i_c_ud_lt
    } else {
        return ud_lt_cohesion_d * N_c_ud_lt * s_c_ud_lt * i_c_ud_lt * d_c
    }
}

module.exports.get_R_g_dr_st = (ground_density, ef_dr_st_l, ef_dr_st_b, N_g_dr_st, s_g_dr_st, i_g_dr_st) => {
    return 1 / 2 * ground_density * Math.min(ef_dr_st_l, ef_dr_st_b) / 1000 * N_g_dr_st * s_g_dr_st * i_g_dr_st
}

module.exports.get_R_g_dr_lt = (ground_density, ef_dr_lt_l, ef_dr_lt_b, N_g_dr_lt, s_g_dr_lt, i_g_dr_lt) => {
    return 1 / 2 * ground_density * Math.min(ef_dr_lt_l, ef_dr_lt_b) / 1000 * N_g_dr_lt * s_g_dr_lt * i_g_dr_lt
}

module.exports.get_R_g_ud_st = () => {
    return 0
}

module.exports.get_R_g_ud_lt = (ud_lt_af_d, ground_density, ef_ud_lt_l, ef_ud_lt_b, N_g_ud_lt, s_g_ud_lt, i_g_ud_lt) => {
    if (ud_lt_af_d == 0) {
        return 0
    } else {
        return 1 / 2 * ground_density * Math.min(ef_ud_lt_l, ef_ud_lt_b) / 1000 * N_g_ud_lt * s_g_ud_lt * i_g_ud_lt
    }
}

module.exports.get_R_total_dr_st = (R_q_dr_st, R_c_dr_st, R_g_dr_st, A_eff_dr_st) => {
    return (R_q_dr_st + R_c_dr_st + R_g_dr_st) * A_eff_dr_st
}

module.exports.get_R_total_dr_lt = (R_q_dr_lt, R_c_dr_lt, R_g_dr_lt, A_eff_dr_lt) => {
    return (R_q_dr_lt + R_c_dr_lt + R_g_dr_lt) * A_eff_dr_lt
}

module.exports.get_R_total_ud_st = (R_q_ud_st, R_c_ud_st, R_g_ud_st, A_eff_ud_st) => {
    return (R_q_ud_st + R_c_ud_st + R_g_ud_st) * A_eff_ud_st
}

module.exports.get_R_total_ud_lt = (R_q_ud_lt, R_c_ud_lt, R_g_ud_lt, A_eff_ud_lt) => {
    return (R_q_ud_lt + R_c_ud_lt + R_g_ud_lt) * A_eff_ud_lt
}

module.exports.get_R_total = (R_total_dr_st, R_total_dr_lt, R_total_ud_st, R_total_ud_lt) => {
    return Math.min(R_total_dr_st, R_total_dr_lt, R_total_ud_st, R_total_ud_lt)
}

module.exports.get_H_dr_st = (vl_total_dr_st, dr_st_af_d, A_eff_dr_st, a_d_dr_st) => {
    return vl_total_dr_st * Math.tan(dr_st_af_d * Math.PI / 180) + A_eff_dr_st * a_d_dr_st
}

module.exports.get_H_dr_lt = (vl_total_dr_lt, dr_lt_af_d, A_eff_dr_lt, a_d_dr_lt) => {
    return vl_total_dr_lt * Math.tan(dr_lt_af_d * Math.PI / 180) + A_eff_dr_lt * a_d_dr_lt
}

module.exports.get_H_ud_st = (A_eff_ud_st, ud_st_cohesion_d, vl_total_ud_st) => {
    return Math.min(A_eff_ud_st * ud_st_cohesion_d, 0.4 * vl_total_ud_st)
}

module.exports.get_H_ud_lt = (ud_lt_af_d, A_eff_ud_lt, ud_lt_cohesion_d, vl_total_ud_lt) => {
    if (ud_lt_af_d == 0) {
        return Math.min(A_eff_ud_lt * ud_lt_cohesion_d, 0.4 * vl_total_ud_lt)
    } else {
        return vl_total_ud_lt * Math.tan(ud_lt_af_d * Math.PI / 180) + A_eff_ud_lt * ud_lt_cohesion_d
    }
}

module.exports.get_H_total = (H_dr_st, H_dr_lt, H_ud_st, H_ud_lt) => {
    return Math.min(H_dr_st, H_dr_lt, H_ud_st, H_ud_lt);
}

// MOMENT CAPACITY

module.exports.get_f_cd = (f_ck, gamma_c) => {
    return f_ck / gamma_c
}

module.exports.get_f_cm = (f_ck) => {
    return f_ck + 8
}

module.exports.get_f_ctm = (f_ck) => {
    return 0.393 * Math.pow(f_ck, (2 / 3));
}

module.exports.get_E_cm = (f_cm) => {
    return 22 * Math.pow(f_cm / 10, (0.3));
}

module.exports.get_sigma_r1 = (f_R_1) => {
    return 0.45 * f_R_1
}

module.exports.get_sigma_r4 = (f_R_4) => {
    return 0.37 * f_R_4;
}

module.exports.get_gamma_m = () => {
    return 1.5
}

module.exports.get_f_ctd_fl = (height, f_ctm, gamma_m) => {
    if (height < 600) {
        return 1.1 * f_ctm / gamma_m * (1.6 - height / 1000);
    } else {
        return 1.1 * f_ctm / gamma_m;
    }
}

module.exports.get_M_n = (f_ctd_fl, height) => {
    return f_ctd_fl * 1000 * (Math.pow(height / 1000, 2) / 6);

}

module.exports.get_f_yd = (f_yk, gamma_s) => {
    return f_yk / gamma_s;
}

module.exports.get_A_c = (height) => {
    return height / 1000;
}

module.exports.get_rho = (include_steel, A_s, A_c) => {
    if (include_steel != 'on') {
        return 0;
    } else  {
        return A_s / (1000 * 1000) / A_c * 100;
    }
}

module.exports.get_h_ux = (rho, height, sigma_r1, sigma_r4, A_s, f_yk, f_ck) => {
    var temp_h_ux;
    if (rho < 0.15) {
        temp_h_ux = 0.123 * height
    } else if (rho >= 0.15) {
        temp_h_ux = (height * (0.5 * sigma_r1 + 0.5 * sigma_r4) + A_s * f_yk / 1000) / (0.64 * f_ck + 0.5 * sigma_r1 + 0.5 * sigma_r4);
    }
    if (temp_h_ux > 0.9 * height) {
        return 0.9 * height
    } else {
        return temp_h_ux
    }
}

module.exports.get_ef_height = (rho, height, cover_layer) => {
    if (rho == 0) {
        return 0.75 * height
    } else if (rho > 0) {
        return height - cover_layer;
    }
}

module.exports.get_lambda = (f_ck) => {
    if (f_ck <= 50) {
        return 0.8 
    } else if (f_ck > 50) {
        return 0.8 - (f_ck - 50)/(400)
    }
}

module.exports.get_eta = (f_ck) => {
    if (f_ck <= 50) {
        return 1 
    } else if (f_ck > 50) {
        return 1.0 - (f_ck - 50)/(200)
    }
}

module.exports.get_omega = (A_s, f_yd, ef_height, eta, f_cd) => {
    return A_s * f_yd / (ef_height * eta * f_cd * 1000)
}

module.exports.get_mu = (omega) => {
    return omega*(1 - 1/2 * omega)
}

module.exports.get_M_p = (include_fiber, mu, ef_height, eta, f_cd, height, gamma_m, gamma_s, sigma_r4, sigma_r1, A_s, f_yk, h_ux) => {
    if (include_fiber != "on"){
        return mu * Math.pow(ef_height , 2) * eta * f_cd / 1000
    } else if (include_fiber == "on") {
        if (rho == 0) {
            return Math.pow(height / 1000, 2) / gamma_m * (0.29 * sigma_r4 * 1000 + 0.16 * sigma_r1 * 1000)
        } else if (rho > 0 && rho <= 0.15) {
            return Math.pow(height / 1000, 2) / gamma_m * (0.29 * sigma_r4 * 1000 + 0.16 * sigma_r1 * 1000) + A_s / (1000 * 1000) * f_yk * 1000 * (ef_height / 1000 - 0.048 * height / 1000) / gamma_s
        } else if (rho > 0.15) {
            return (0.5 * (sigma_r1 * 1000 - sigma_r4 * 1000) * (height / 1000 - h_ux / 1000) * (0.28 * h_ux / 1000 + 0.33 * height / 1000)) / gamma_m + (sigma_r4 * 1000 * (height / 1000 - h_ux / 1000) * (0.11 * h_ux / 1000 + 0.5 * height / 1000)) / gamma_m + (A_s / (1000 * 1000) * f_yk * 1000 * (ef_height / 1000 - 0.39 * h_ux / 1000)) / gamma_s
        }
    }
}

module.exports.get_M_p_l = (include_fiber, M_p, width, rho) => {
    if (include_fiber != "on"){
        return M_p * width / 1000
    } else if (include_fiber == "on") {
    
        if (rho == 0) {
            return M_p * width / 1000
        } else if (rho > 0 && rho <= 0.15) {
            return M_p * width / 1000
        } else if (rho > 0.15) {
            return M_p * width / 1000
        }
    }
}

module.exports.get_ = (include_fiber, M_p, length, rho) => {
    if (include_fiber != "on"){
        return M_p * length / 1000
    } else if (include_fiber == "on") {
        if (rho == 0) {
            return M_p * length / 1000
        } else if (rho > 0 && rho <= 0.15) {
            return M_p * length / 1000
        } else if (rho > 0.15) {
            return M_p * length / 1000
        }
    }
}

module.exports.get_M_p_internal = (M_p_l, M_p_b) => {
    return Math.min(M_p_l, M_p_b)
}

module.exports.get_w_dr_st_l = (vl_total, A_eff_dr_st, ef_dr_st_b) => {
    return vl_total / A_eff_dr_st * ef_dr_st_b / 1000
}

module.exports.get_w_dr_lt_l = (vl_total, A_eff_dr_lt, ef_dr_lt_b) => {
    return vl_total / A_eff_dr_lt * ef_dr_lt_b / 1000
}

module.exports.get_w_ud_st_l = (vl_total, A_eff_ud_st, ef_ud_st_b) => {
    return vl_total / A_eff_ud_st * ef_ud_st_b / 1000
}

module.exports.get_w_ud_lt_l = (vl_total, A_eff_ud_lt, ef_ud_lt_b) => {
    return vl_total / A_eff_ud_lt * ef_ud_lt_b / 1000
}

module.exports.get_w_dr_st_b = (vl_total, A_eff_dr_st, ef_dr_st_l) => {
    return vl_total / A_eff_dr_st * ef_dr_st_l / 1000
}

module.exports.get_w_dr_lt_b = (vl_total, A_eff_dr_lt, ef_dr_lt_l) => {
    return vl_total / A_eff_dr_lt * ef_dr_lt_l / 1000
}

module.exports.get_w_ud_st_b = (vl_total, A_eff_ud_st, ef_ud_st_l) => {
    return vl_total / A_eff_ud_st * ef_ud_st_l / 1000
}

module.exports.get_w_ud_lt_b = (vl_total, A_eff_ud_lt, ef_ud_lt_l) => {
    return vl_total / A_eff_ud_lt * ef_ud_lt_l / 1000
}

module.exports.get_w_dim_l = (vl_dim_total, A_dim_eff, ef_dim_b) => {
    return vl_dim_total / A_dim_eff * ef_dim_b / 1000
}

module.exports.get_w_dim_b = (vl_dim_total, A_dim_eff, ef_dim_l) => {
    return vl_dim_total / A_dim_eff * ef_dim_l / 1000
}

module.exports.get_w_sw_l = (dimensions_known, self_weight, length, ground_weight) => {
    if (dimensions_known == 'on') {
        return self_weight / (length / 1000)
    } else {
        return (self_weight + ground_weight) / (length / 1000)
    }
}

module.exports.get_w_sw_b = (dimensions_known, self_weight, width, ground_weight) => {
    if (dimensions_known == 'on') {
        return self_weight / (width / 1000)
    } else {
        return (self_weight + ground_weight) / (width / 1000)
    }
}

module.exports.get_b_dr_st_l_1 = () => {
    return 0
}

module.exports.get_b_dr_lt_l_1 = () => {
    return 0
}

module.exports.get_b_ud_st_l_1 = () => {
    return 0
}

module.exports.get_b_ud_lt_l_1 = () => {
    return 0
}

module.exports.get_b_dim_l_1 = () => {
    return 0
}

module.exports.get_a_dr_st_l_2 = () => {
    return 0
}

module.exports.get_a_dr_lt_l_2 = () => {
    return 0
}

module.exports.get_a_ud_st_l_2 = () => {
    return 0
}

module.exports.get_a_ud_lt_l_2 = () => {
    return 0
}

module.exports.get_a_dim_l_2 = () => {
    return 0
}

module.exports.get_a_dr_st_l_1 = (m_total_dr_st_l, point_foundation_shape, ef_dr_st_l, length, ec_vl_length, radius) => {
    if (m_total_dr_st_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_st_l < length / 2 - ec_vl_length) {
                return (length / 2 - ec_vl_length - ef_dr_st_l) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_st_l < radius - ec_vl_length) {
                return (radius - ec_vl_length - ef_dr_st_l) / 1000
            } else {
                return 0
            }
        }
    } else if (m_total_dr_st_l <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_st_l < length / 2 + ec_vl_length) {
                return (length / 2 + ec_vl_length - ef_dr_st_l) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_st_l < radius + ec_vl_length) {
                return (radius + ec_vl_length - ef_dr_st_l) / 1000
            } else {
                return 0
            }
        }
    }
}

module.exports.get_b_dr_st_l_2 = (m_total_dr_st_l, point_foundation_shape, ef_dr_st_l, length, ec_vl_length, radius) => {
    if (m_total_dr_st_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_st_l < length / 2 - ec_vl_length) {
                return (length / 2 + ec_vl_length) / 1000
            } else {
                return (length - ef_dr_st_l) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_st_l < radius - ec_vl_length) {
                return (radius + ec_vl_length) / 1000
            } else {
                return (2 * radius - ef_dr_st_l) / 1000
            }
        }
    } else if (m_total_dr_st_l <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_st_l < length / 2 + ec_vl_length) {
                return (length / 2 - ec_vl_length) / 1000
            } else {
                return (length - ef_dr_st_l) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_st_l < radius + ec_vl_length) {
                return (radius - ec_vl_length) / 1000
            } else {
                return (2 * radius - ef_dr_st_l) / 1000
            }
        }
    }
}

module.exports.get_L_w_dr_st_l_1 = (m_total_dr_st_l, point_foundation_shape, ef_dr_st_l, length, ec_vl_length, radius) => {
    if (m_total_dr_st_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_st_l < length / 2 - ec_vl_length) {
                return ef_dr_st_l / 1000
            } else {
                return (length / 2 - ec_vl_length) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_st_l < radius - ec_vl_length) {
                return ef_dr_st_l / 1000
            } else {
                return (radius - ec_vl_length) / 1000
            }
        }
    } else if (m_total_dr_st_l <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_st_l < length / 2 + ec_vl_length) {
                return ef_dr_st_l / 1000
            } else {
                return (length / 2 + ec_vl_length) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_st_l < radius + ec_vl_length) {
                return ef_dr_st_l / 1000
            } else {
                return (radius + ec_vl_length) / 1000
            }
        }
    }
}

module.exports.get_L_w_dr_st_l_2 = (m_total_dr_st_l, point_foundation_shape, length, ec_vl_length, b_dr_st_l_2, radius) => {
    if (m_total_dr_st_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return (length / 2 + ec_vl_length) / 1000 - b_dr_st_l_2
        } else if (point_foundation_shape == 'circular') {
            return (radius + ec_vl_length) / 1000 - b_dr_st_l_2
        }
    } else if (m_total_dr_st_l <= 0) {
        if (point_foundation_shape == 'rectangular') {
            return (length / 2 - ec_vl_length) / 1000 - b_dr_st_l_2
        } else if (point_foundation_shape == 'circular') {
            return (radius - ec_vl_length) / 1000 - b_dr_st_l_2
        }
    }
}

module.exports.get_a_dr_lt_l_1 = (m_total_dr_lt_l, point_foundation_shape, ef_dr_lt_l, length, ec_vl_length, radius) => {
    if (m_total_dr_lt_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_lt_l < length / 2 - ec_vl_length) {
                return (length / 2 - ec_vl_length - ef_dr_lt_l) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_lt_l < radius - ec_vl_length) {
                return (radius - ec_vl_length - ef_dr_lt_l) / 1000
            } else {
                return 0
            }
        }
    } else if (m_total_dr_lt_l <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_lt_l < length / 2 + ec_vl_length) {
                return (length / 2 + ec_vl_length - ef_dr_lt_l) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_lt_l < radius + ec_vl_length) {
                return (radius + ec_vl_length - ef_dr_lt_l) / 1000
            } else {
                return 0
            }
        }
    }
}

module.exports.get_b_dr_lt_l_2 = (m_total_dr_lt_l, point_foundation_shape, ef_dr_lt_l, length, ec_vl_length, radius) => {
    if (m_total_dr_lt_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_lt_l < length / 2 - ec_vl_length) {
                return (length / 2 + ec_vl_length) / 1000
            } else {
                return (length - ef_dr_lt_l) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_lt_l < radius - ec_vl_length) {
                return (radius + ec_vl_length) / 1000
            } else {
                return (2 * radius - ef_dr_lt_l) / 1000
            }
        }
    } else if (m_total_dr_lt_l <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_lt_l < length / 2 + ec_vl_length) {
                return (length / 2 - ec_vl_length) / 1000
            } else {
                return (length - ef_dr_lt_l) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_lt_l < radius + ec_vl_length) {
                return (radius - ec_vl_length) / 1000
            } else {
                return (2 * radius - ef_dr_lt_l) / 1000
            }
        }
    }
}

module.exports.get_L_w_dr_lt_l_1 = (m_total_dr_lt_l, point_foundation_shape, ef_dr_lt_l, length, ec_vl_length, radius) => {
    if (m_total_dr_lt_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_lt_l < length / 2 - ec_vl_length) {
                return ef_dr_lt_l / 1000
            } else {
                return (length / 2 - ec_vl_length) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_lt_l < radius - ec_vl_length) {
                return ef_dr_lt_l / 1000
            } else {
                return (radius - ec_vl_length) / 1000
            }
        }
    } else if (m_total_dr_lt_l <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_lt_l < length / 2 + ec_vl_length) {
                return ef_dr_lt_l / 1000
            } else {
                return (length / 2 + ec_vl_length) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_lt_l < radius + ec_vl_length) {
                return ef_dr_lt_l / 1000
            } else {
                return (radius + ec_vl_length) / 1000
            }
        }
    }
}

module.exports.get_L_w_dr_lt_l_2 = (m_total_dr_lt_l, point_foundation_shape, length, ec_vl_length, b_dr_lt_l_2, radius) => {
    if (m_total_dr_lt_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return (length / 2 + ec_vl_length) / 1000 - b_dr_lt_l_2
        } else if (point_foundation_shape == 'circular') {
            return (radius + ec_vl_length) / 1000 - b_dr_lt_l_2
        }
    } else if (m_total_dr_lt_l <= 0) {
        if (point_foundation_shape == 'rectangular') {
            return (length / 2 - ec_vl_length) / 1000 - b_dr_lt_l_2
        } else if (point_foundation_shape == 'circular') {
            return (radius - ec_vl_length) / 1000 - b_dr_lt_l_2
        }
    }
}

module.exports.get_a_ud_st_l_1 = (m_total_ud_st_l, point_foundation_shape, ef_ud_st_l, length, ec_vl_length, radius) => {
    if (m_total_ud_st_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_st_l < length / 2 - ec_vl_length) {
                return (length / 2 - ec_vl_length - ef_ud_st_l) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_st_l < radius - ec_vl_length) {
                return (radius - ec_vl_length - ef_ud_st_l) / 1000
            } else {
                return 0
            }
        }
    } else if (m_total_ud_st_l <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_st_l < length / 2 + ec_vl_length) {
                return (length / 2 + ec_vl_length - ef_ud_st_l) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_st_l < radius + ec_vl_length) {
                return (radius + ec_vl_length - ef_ud_st_l) / 1000
            } else {
                return 0
            }
        }
    }
}

module.exports.get_b_ud_st_l_2 = (m_total_ud_st_l, point_foundation_shape, ef_ud_st_l, length, ec_vl_length, radius) => {
    if (m_total_ud_st_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_st_l < length / 2 - ec_vl_length) {
                return (length / 2 + ec_vl_length) / 1000
            } else {
                return (length - ef_ud_st_l) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_st_l < radius - ec_vl_length) {
                return (radius + ec_vl_length) / 1000
            } else {
                return (2 * radius - ef_ud_st_l) / 1000
            }
        }
    } else if (m_total_ud_st_l <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_st_l < length / 2 + ec_vl_length) {
                return (length / 2 - ec_vl_length) / 1000
            } else {
                return (length - ef_ud_st_l) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_st_l < radius + ec_vl_length) {
                return (radius - ec_vl_length) / 1000
            } else {
                return (2 * radius - ef_ud_st_l) / 1000
            }
        }
    }
}

module.exports.get_ = (m_total_ud_st_l, point_foundation_shape, ef_ud_st_l, length, ec_vl_length, radius) => {
    if (m_total_ud_st_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_st_l < length / 2 - ec_vl_length) {
                return ef_ud_st_l / 1000
            } else {
                return (length / 2 - ec_vl_length) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_st_l < radius - ec_vl_length) {
                return ef_ud_st_l / 1000
            } else {
                return (radius - ec_vl_length) / 1000
            }
        }
    } else if (m_total_ud_st_l <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_st_l < length / 2 + ec_vl_length) {
                return ef_ud_st_l / 1000
            } else {
                return (length / 2 + ec_vl_length) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_st_l < radius + ec_vl_length) {
                return ef_ud_st_l / 1000
            } else {
                return (radius + ec_vl_length) / 1000
            }
        }
    }
}

module.exports.get_L_w_ud_st_l_2 = (m_total_ud_st_l, point_foundation_shape, length, ec_vl_length, b_ud_st_l_2, radius) => {
    if (m_total_ud_st_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return (length / 2 + ec_vl_length) / 1000 - b_ud_st_l_2
        } else if (point_foundation_shape == 'circular') {
            return (radius + ec_vl_length) / 1000 - b_ud_st_l_2
        }
    } else if (m_total_ud_st_l <= 0) {
        if (point_foundation_shape == 'rectangular') {
            return (length / 2 - ec_vl_length) / 1000 - b_ud_st_l_2
        } else if (point_foundation_shape == 'circular') {
            return (radius - ec_vl_length) / 1000 - b_ud_st_l_2
        }
    }
}

module.exports.get_a_ud_lt_l_1 = (m_total_ud_lt_l, point_foundation_shape, ef_ud_lt_l, length, ec_vl_length, radius) => {
    if (m_total_ud_lt_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_lt_l < length / 2 - ec_vl_length) {
                return (length / 2 - ec_vl_length - ef_ud_lt_l) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_lt_l < radius - ec_vl_length) {
                return (radius - ec_vl_length - ef_ud_lt_l) / 1000
            } else {
                return 0
            }
        }
    } else if (m_total_ud_lt_l <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_lt_l < length / 2 + ec_vl_length) {
                return (length / 2 + ec_vl_length - ef_ud_lt_l) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_lt_l < radius + ec_vl_length) {
                return (radius + ec_vl_length - ef_ud_lt_l) / 1000
            } else {
                return 0
            }
        }
    }
}

module.exports.get_b_ud_lt_l_2 = (m_total_ud_lt_l, point_foundation_shape, ef_ud_lt_l, length, ec_vl_length, radius) => {
    if (m_total_ud_lt_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_lt_l < length / 2 - ec_vl_length) {
                return (length / 2 + ec_vl_length) / 1000
            } else {
                return (length - ef_ud_lt_l) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_lt_l < radius - ec_vl_length) {
                return (radius + ec_vl_length) / 1000
            } else {
                return (2 * radius - ef_ud_lt_l) / 1000
            }
        }
    } else if (m_total_ud_lt_l <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_lt_l < length / 2 + ec_vl_length) {
                return (length / 2 - ec_vl_length) / 1000
            } else {
                return (length - ef_ud_lt_l) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_lt_l < radius + ec_vl_length) {
                return (radius - ec_vl_length) / 1000
            } else {
                return (2 * radius - ef_ud_lt_l) / 1000
            }
        }
    }
}

module.exports.get_L_w_ud_lt_l_1 = (m_total_ud_lt_l, point_foundation_shape, ef_ud_lt_l, length, ec_vl_length, radius) => {
    if (m_total_ud_lt_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_lt_l < length / 2 - ec_vl_length) {
                return ef_ud_lt_l / 1000
            } else {
                return (length / 2 - ec_vl_length) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_lt_l < radius - ec_vl_length) {
                return ef_ud_lt_l / 1000
            } else {
                return (radius - ec_vl_length) / 1000
            }
        }
    } else if (m_total_ud_lt_l <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_lt_l < length / 2 + ec_vl_length) {
                return ef_ud_lt_l / 1000
            } else {
                return (length / 2 + ec_vl_length) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_lt_l < radius + ec_vl_length) {
                return ef_ud_lt_l / 1000
            } else {
                return (radius + ec_vl_length) / 1000
            }
        }
    }
}

module.exports.get_ = (m_total_ud_lt_l, point_foundation_shape, length, ec_vl_length, b_ud_lt_l_2, radius) => {
    if (m_total_ud_lt_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return (length / 2 + ec_vl_length) / 1000 - b_ud_lt_l_2
        } else if (point_foundation_shape == 'circular') {
            return (radius + ec_vl_length) / 1000 - b_ud_lt_l_2
        }
    } else if (m_total_ud_lt_l <= 0) {
        if (point_foundation_shape == 'rectangular') {
            return (length / 2 - ec_vl_length) / 1000 - b_ud_lt_l_2
        } else if (point_foundation_shape == 'circular') {
            return (radius - ec_vl_length) / 1000 - b_ud_lt_l_2
        }
    }
}

module.exports.get_a_dim_l_1 = (m_dim_length, point_foundation_shape, ef_dim_l, length, ec_vl_length, radius) => {
    if (m_dim_length > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dim_l < length / 2 - ec_vl_length) {
                return (length / 2 - ec_vl_length - ef_dim_l) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dim_l < radius - ec_vl_length) {
                return (radius - ec_vl_length - ef_dim_l) / 1000
            } else {
                return 0
            }
        }
    } else if (m_dim_length <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dim_l < length / 2 + ec_vl_length) {
                return (length / 2 + ec_vl_length - ef_dim_l) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dim_l < radius + ec_vl_length) {
                return (radius + ec_vl_length - ef_dim_l) / 1000
            } else {
                return 0
            }
        }
    }
}

module.exports.get_b_dim_l_2 = (m_dim_length, point_foundation_shape, ef_dim_l, length, ec_vl_length, radius) => {
    if (m_dim_length > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dim_l < length / 2 - ec_vl_length) {
                return (length / 2 + ec_vl_length) / 1000
            } else {
                return (length - ef_dim_l) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dim_l < radius - ec_vl_length) {
                return (radius + ec_vl_length) / 1000
            } else {
                return (2 * radius - ef_dim_l) / 1000
            }
        }
    } else if (m_dim_length <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dim_l < length / 2 + ec_vl_length) {
                return (length / 2 - ec_vl_length) / 1000
            } else {
                return (length - ef_dim_l) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dim_l < radius + ec_vl_length) {
                return (radius - ec_vl_length) / 1000
            } else {
                return (2 * radius - ef_dim_l) / 1000
            }
        }
    }
}

module.exports.get_L_w_dim_l_1 = (m_dim_length, point_foundation_shape, ef_dim_l, length, ec_vl_length, radius) => {
    if (m_dim_length > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dim_l < length / 2 - ec_vl_length) {
                return ef_dim_l / 1000
            } else {
                return (length / 2 - ec_vl_length) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dim_l < radius - ec_vl_length) {
                return ef_dim_l / 1000
            } else {
                return (radius - ec_vl_length) / 1000
            }
        }
    } else if (m_dim_length <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dim_l < length / 2 + ec_vl_length) {
                return ef_dim_l / 1000
            } else {
                return (length / 2 + ec_vl_length) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dim_l < radius + ec_vl_length) {
                return ef_dim_l / 1000
            } else {
                return (radius + ec_vl_length) / 1000
            }
        }
    }
}

module.exports.get_ = (m_dim_length, point_foundation_shape, ec_vl_length, b_dim_l_2, radius) => {
    if (m_dim_length > 0) {
        if (point_foundation_shape == 'rectangular') {
            return (length / 2 + ec_vl_length) / 1000 - b_dim_l_2
        } else if (point_foundation_shape == 'circular') {
            return (radius + ec_vl_length) / 1000 - b_dim_l_2
        }
    } else if (m_dim_length <= 0) {
        if (point_foundation_shape == 'rectangular') {
            return (length / 2 - ec_vl_length) / 1000 - b_dim_l_2
        } else if (point_foundation_shape == 'circular') {
            return (radius - ec_vl_length) / 1000 - b_dim_l_2
        }
    }
}

module.exports.get_R_A_dr_st_l_1 = (w_dr_st_l, L_w_dr_st_l_1) => {
    return w_dr_st_l * L_w_dr_st_l_1
}

module.exports.get_R_A_dr_lt_l_1 = (w_dr_lt_l, L_w_dr_lt_l_1) => {
    return w_dr_lt_l * L_w_dr_lt_l_1
}

module.exports.get_R_A_ud_st_l_1 = (w_ud_st_l, L_w_ud_st_l_1) => {
    return w_ud_st_l * L_w_ud_st_l_1
}

module.exports.get_R_A_ud_lt_l_1 = (w_ud_lt_l, L_w_ud_lt_l_1) => {
    return w_ud_lt_l * L_w_ud_lt_l_1
}

module.exports.get_R_A_dim_l_1 = (w_dim_l, L_w_dim_l_1) => {
    return w_dim_l * L_w_dim_l_1
}

module.exports.get_R_A_dr_st_l_2 = (w_dr_st_l, L_w_dr_st_l_2) => {
    return w_dr_st_l * L_w_dr_st_l_2
}

module.exports.get_R_A_dr_lt_l_2 = (w_dr_lt_l, L_w_dr_lt_l_2) => {
    return w_dr_lt_l * L_w_dr_lt_l_2
}

module.exports.get_R_A_ud_st_l_2 = (w_ud_st_l, L_w_ud_st_l_2) => {
    return w_ud_st_l * L_w_ud_st_l_2
}

module.exports.get_R_A_ud_lt_l_2 = (w_ud_lt_l, L_w_ud_lt_l_2) => {
    return w_ud_lt_l * L_w_ud_lt_l_2
}

module.exports.get_R_A_dim_l_2 = (w_dim_l, L_w_dim_l_2) => {
    return w_dim_l * L_w_dim_l_2
}

module.exports.get_M_A_dr_st_l_1 = (w_dr_st_l, L_w_dr_st_l_1, a_dr_st_l_1) => {
    return -w_dr_st_l * L_w_dr_st_l_1 * (a_dr_st_l_1 + L_w_dr_st_l_1 / 2)
}

module.exports.get_M_A_dr_lt_l_1 = (w_dr_lt_l, L_w_dr_lt_l_1, a_dr_lt_l_1) => {
    return -w_dr_lt_l * L_w_dr_lt_l_1 * (a_dr_lt_l_1 + L_w_dr_lt_l_1 / 2)
}

module.exports.get_M_A_ud_st_l_1 = (w_ud_st_l, L_w_ud_st_l_1, a_ud_st_l_1) => {
    return -w_ud_st_l * L_w_ud_st_l_1 * (a_ud_st_l_1 + L_w_ud_st_l_1 / 2)
}

module.exports.get_M_A_ud_lt_l_1 = (w_ud_lt_l, L_w_ud_lt_l_1, a_ud_lt_l_1) => {
    return -w_ud_lt_l * L_w_ud_lt_l_1 * (a_ud_lt_l_1 + L_w_ud_lt_l_1 / 2)
}

module.exports.get_M_A_dim_l_1 = (w_dim_l, L_w_dim_l_1, a_dim_l_1) => {
    return -w_dim_l * L_w_dim_l_1 * (a_dim_l_1 + L_w_dim_l_1 / 2)
}

module.exports.get_M_A_dr_st_l_2 = (w_dr_st_l, L_w_dr_st_l_2, a_dr_st_l_2) => {
    return -w_dr_st_l * L_w_dr_st_l_2 * (a_dr_st_l_2 + L_w_dr_st_l_2 / 2)
}

module.exports.get_M_A_dr_lt_l_2 = (w_dr_lt_l, L_w_dr_lt_l_2, a_dr_lt_l_2) => {
    return -w_dr_lt_l * L_w_dr_lt_l_2 * (a_dr_lt_l_2 + L_w_dr_lt_l_2 / 2)
}

module.exports.get_M_A_ud_st_l_2 = (w_ud_st_l, L_w_ud_st_l_2, a_ud_st_l_2) => {
    return -w_ud_st_l * L_w_ud_st_l_2 * (a_ud_st_l_2 + L_w_ud_st_l_2 / 2)
}

module.exports.get_M_A_ud_lt_l_2 = (w_ud_lt_l, L_w_ud_lt_l_2, a_ud_lt_l_2) => {
    return -w_ud_lt_l * L_w_ud_lt_l_2 * (a_ud_lt_l_2 + L_w_ud_lt_l_2 / 2)
}

module.exports.get_M_A_dim_l_2 = (w_dim_l, L_w_dim_l_2, a_dim_l_2) => {
    return -w_dim_l * L_w_dim_l_2 * (a_dim_l_2 + L_w_dim_l_2 / 2)
}

module.exports.get_M_r_dr_st_l_1 = (x, a_dr_st_l_1, R_A_dr_st_l_1, M_A_dr_st_l_1, w_dr_st_l) => {
    if (x <= a_dr_st_l_1) {
        return R_A_dr_st_l_1 * x + M_A_dr_st_l_1
    } else if (x > a_dr_st_l_1) {
        return R_A_dr_st_l_1 * x + M_A_dr_st_l_1 - w_dr_st_l * Math.pow(x - a_dr_st_l_1, 2) / 2
    }
}

module.exports.get_M_r_dr_lt_l_1 = (x, a_dr_lt_l_1, R_A_dr_lt_l_1, M_A_dr_lt_l_1, w_dr_lt_l) => {
    if (x <= a_dr_lt_l_1) {
        return R_A_dr_lt_l_1 * x + M_A_dr_lt_l_1
    } else if (x > a_dr_lt_l_1) {
        return R_A_dr_lt_l_1 * x + M_A_dr_lt_l_1 - w_dr_lt_l * Math.pow(x - a_dr_lt_l_1, 2) / 2
    }
}

module.exports.get_M_r_ud_st_l_1 = (x, a_ud_st_l_1, R_A_ud_st_l_1, M_A_ud_st_l_1, w_ud_st_l) => {
    if (x <= a_ud_st_l_1) {
        return R_A_ud_st_l_1 * x + M_A_ud_st_l_1
    } else if (x > a_ud_st_l_1) {
        return R_A_ud_st_l_1 * x + M_A_ud_st_l_1 - w_ud_st_l * Math.pow(x - a_ud_st_l_1, 2) / 2
    }
}

module.exports.get_M_r_ud_lt_l_1 = (x, a_ud_lt_l_1, R_A_ud_lt_l_1, M_A_ud_lt_l_1, w_ud_lt_l) => {
    if (x <= a_ud_lt_l_1) {
        return R_A_ud_lt_l_1 * x + M_A_ud_lt_l_1
    } else if (x > a_ud_lt_l_1) {
        return R_A_ud_lt_l_1 * x + M_A_ud_lt_l_1 - w_ud_lt_l * Math.pow(x - a_ud_lt_l_1, 2) / 2
    }
}

module.exports.get_M_r_dim_l_1 = (x, a_dim_l_1, R_A_dim_l_1, M_A_dim_l_1, w_dim_l) => {
    if (x <= a_dim_l_1) {
        return R_A_dim_l_1 * x + M_A_dim_l_1
    } else if (x > a_dim_l_1) {
        return R_A_dim_l_1 * x + M_A_dim_l_1 - w_dim_l * Math.pow(x - a_dim_l_1, 2) / 2
    }
}

module.exports.get_M_r_dr_st_l_2 = (x, L_w_dr_st_l_2, R_A_dr_st_l_2, M_A_dr_st_l_2, w_dr_st_l, a_dr_st_l_2) => {
    if (x < L_w_dr_st_l_2) {
        return R_A_dr_st_l_2 * x + M_A_dr_st_l_2 - w_dr_st_l * Math.pow(x - a_dr_st_l_2, 2) / 2
    } else if (x >= L_w_dr_st_l_2) {
        return 0
    }
}

module.exports.get_M_r_dr_lt_l_2 = (x, L_w_dr_lt_l_2, R_A_dr_lt_l_2, M_A_dr_lt_l_2, w_dr_lt_l, a_dr_lt_l_2) => {
    if (x < L_w_dr_lt_l_2) {
        return R_A_dr_lt_l_2 * x + M_A_dr_lt_l_2 - w_dr_lt_l * Math.pow(x - a_dr_lt_l_2, 2) / 2
    } else if (x >= L_w_dr_lt_l_2) {
        return 0
    }
}

module.exports.get_M_r_ud_st_l_2 = (x, L_w_ud_st_l_2, R_A_ud_st_l_2, M_A_ud_st_l_2, w_ud_st_l, a_ud_st_l_2) => {
    if (x < L_w_ud_st_l_2) {
        return R_A_ud_st_l_2 * x + M_A_ud_st_l_2 - w_ud_st_l * Math.pow(x - a_ud_st_l_2, 2) / 2
    } else if (x >= L_w_ud_st_l_2) {
        return 0
    }
}

module.exports.get_M_r_ud_lt_l_2 = (x, L_w_ud_lt_l_2, R_A_ud_lt_l_2, M_A_ud_lt_l_2, w_ud_lt_l, a_ud_lt_l_2) => {
    if (x < L_w_ud_lt_l_2) {
        return R_A_ud_lt_l_2 * x + M_A_ud_lt_l_2 - w_ud_lt_l * Math.pow(x - a_ud_lt_l_2, 2) / 2
    } else if (x >= L_w_ud_lt_l_2) {
        return 0
    }
}

module.exports.get_M_r_dim_l_2 = (x, L_w_dim_l_2, R_A_dim_l_2, M_A_dim_l_2, w_dim_l, a_dim_l_2) => {
    if (x < L_w_dim_l_2) {
        return R_A_dim_l_2 * x + M_A_dim_l_2 - w_dim_l * Math.pow(x - a_dim_l_2, 2) / 2
    } else if (x >= L_w_dim_l_2) {
        return 0
    }
}

module.exports.get_M_g_dr_st_l_1 = (x, m_total_dr_st_l, point_foundation_shape, w_sw_l, length, ec_vl_length, radius) => {
    if (m_total_dr_st_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 - ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 - ec_vl_length / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 + ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 + ec_vl_length / 1000 - x, 2)
        }
    }
}

module.exports.get_M_g_dr_lt_l_1 = (x, m_total_dr_lt_l, point_foundation_shape, w_sw_l, length, ec_vl_length, radius) => {
    if (m_total_dr_lt_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 - ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 - ec_vl_length / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 + ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 + ec_vl_length / 1000 - x, 2)
        }
    }
}

module.exports.get_M_g_ud_st_l_1 = (x, m_total_ud_st_l, point_foundation_shape, w_sw_l, length, ec_vl_length, radius) => {
    if (m_total_ud_st_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 - ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 - ec_vl_length / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 + ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 + ec_vl_length / 1000 - x, 2)
        }
    }
}

module.exports.get_M_g_ud_lt_l_1 = (x, m_total_ud_lt_l, point_foundation_shape, w_sw_l, length, ec_vl_length, radius) => {
    if (m_total_ud_lt_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 - ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 - ec_vl_length / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 + ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 + ec_vl_length / 1000 - x, 2)
        }
    }
}

module.exports.get_M_g_dim_l_1 = (x, m_dim_length, point_foundation_shape, w_sw_l, length, ec_vl_length, radius) => {
    if (m_dim_length > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 - ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 - ec_vl_length / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 + ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 + ec_vl_length / 1000 - x, 2)
        }
    }
}

module.exports.get_M_g_dr_st_l_2 = (x, m_total_dr_st_l, point_foundation_shape, w_sw_l, length, ec_vl_length, radius) => {
    if (m_total_dr_st_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 + ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 + ec_vl_length / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 - ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 - ec_vl_length / 1000 - x, 2)
        }
    }
}

module.exports.get_M_g_dr_lt_l_2 = (x, m_total_dr_lt_l, point_foundation_shape, w_sw_l, length, ec_vl_length, radius) => {
    if (m_total_dr_lt_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 + ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 + ec_vl_length / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 - ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 - ec_vl_length / 1000 - x, 2)
        }
    }
}

module.exports.get_M_g_ud_st_l_2 = (x, m_total_ud_st_l, point_foundation_shape, w_sw_l, length, ec_vl_length, radius) => {
    if (m_total_ud_st_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 + ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 + ec_vl_length / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 - ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 - ec_vl_length / 1000 - x, 2)
        }
    }
}

module.exports.get_M_g_ud_lt_l_2 = (x, m_total_ud_lt_l, point_foundation_shape, w_sw_l, length, ec_vl_length, radius) => {
    if (m_total_ud_lt_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 + ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 + ec_vl_length / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 - ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 - ec_vl_length / 1000 - x, 2)
        }
    }
}

module.exports.get_M_g_dim_l_2 = (x, m_dim_length, point_foundation_shape, w_sw_l, length, ec_vl_length, radius) => {
    if (m_dim_length > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 + ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 + ec_vl_length / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_l * Math.pow(length / 1000 / 2 - ec_vl_length / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_l * Math.pow(radius / 1000 - ec_vl_length / 1000 - x, 2)
        }
    }
}

module.exports.get_M_c_dr_st_l_1 = (x) => {
    return get_M_r_dr_st_l_1(x) + get_M_g_dr_st_l_1(x)
}

module.exports.get_M_c_dr_lt_l_1 = (x) => {
    return get_M_r_dr_lt_l_1(x) + get_M_g_dr_lt_l_1(x)
}

module.exports.get_M_c_ud_st_l_1 = (x) => {
    return get_M_r_ud_st_l_1(x) + get_M_g_ud_st_l_1(x)
}

module.exports.get_M_c_ud_lt_l_1 = (x) => {
    return get_M_r_ud_lt_l_1(x) + get_M_g_ud_lt_l_1(x)
}

module.exports.get_M_c_dim_l_1 = (x) => {
    return get_M_r_dim_l_1(x) + get_M_g_dim_l_1(x)
}

module.exports.get_M_c_dr_st_l_2 = (x) => {
    return get_M_r_dr_st_l_2(x) + get_M_g_dr_st_l_2(x)
}

module.exports.get_M_c_dr_lt_l_2 = (x) => {
    return get_M_r_dr_lt_l_2(x) + get_M_g_dr_lt_l_2(x)
}

module.exports.get_M_c_ud_st_l_2 = (x) => {
    return get_M_r_ud_st_l_2(x) + get_M_g_ud_st_l_2(x)
}

module.exports.get_M_c_ud_lt_l_2 = (x) => {
    return get_M_r_ud_lt_l_2(x) + get_M_g_ud_lt_l_2(x)
}

module.exports.get_M_c_dim_l_2 = (x) => {
    return get_M_r_dim_l_2(x) + get_M_g_dim_l_2(x)
}

module.exports.get_fn_M_dr_st_l = (x, m_total_dr_st_l) => {
    if (m_total_dr_st_l > 0) {
        if (x >= 0) {
            return get_M_c_dr_st_l_1(x)
        } else {
            return get_M_c_dr_st_l_2(-x)
        }
    } else {
        if (x < 0) {
            return get_M_c_dr_st_l_1(-x)
        } else {
            return get_M_c_dr_st_l_2(x)
        }
    }
}

module.exports.get_fn_M_dr_lt_l = (x, m_total_dr_lt_l) => {
    if (m_total_dr_lt_l > 0) {
        if (x >= 0) {
            return get_M_c_dr_lt_l_1(x)
        } else {
            return get_M_c_dr_lt_l_2(-x)
        }
    } else {
        if (x < 0) {
            return get_M_c_dr_lt_l_1(-x)
        } else {
            return get_M_c_dr_lt_l_2(x)
        }
    }
}

module.exports.get_fn_M_ud_st_l = (x, m_total_ud_st_l) => {
    if (m_total_ud_st_l > 0) {
        if (x >= 0) {
            return get_M_c_ud_st_l_1(x)
        } else {
            return get_M_c_ud_st_l_2(-x)
        }
    } else {
        if (x < 0) {
            return get_M_c_ud_st_l_1(-x)
        } else {
            return get_M_c_ud_st_l_2(x)
        }
    }
}

module.exports.get_fn_M_ud_lt_l = (x, m_total_ud_lt_l) => {
    if (m_total_ud_lt_l > 0) {
        if (x >= 0) {
            return get_M_c_ud_lt_l_1(x)
        } else {
            return get_M_c_ud_lt_l_2(-x)
        }
    } else {
        if (x < 0) {
            return get_M_c_ud_lt_l_1(-x)
        } else {
            return get_M_c_ud_lt_l_2(x)
        }
    }
}

module.exports.get_fn_M_dim_l = (x, m_dim_length) => {
    if (m_dim_length > 0) {
        if (x >= 0) {
            return get_M_c_dim_l_1(x)
        } else {
            return get_M_c_dim_l_2(-x)
        }
    } else {
        if (x < 0) {
            return get_M_c_dim_l_1(-x)
        } else {
            return get_M_c_dim_l_2(x)
        }
    }
}

module.exports.get_fn_t_bez_l = (column_shape, column_length, column_radius) => {
    if (column_shape == "rectangular") {
        return Math.abs(-column_length / 2 / 1000 - x) / (column_length / 1000)
    } else {
        return Math.abs(-column_radius / 1000 - x) / (2 * column_radius / 1000)
    }
}

module.exports.get_P_bez_0_dr_st_l = (column_shape, column_length) => {
    if (column_shape == "rectangular") {
        return get_fn_M_dr_st_l(-column_length / 2 / 1000)
    } else {
        return get_fn_M_dr_st_l(-column_radius / 1000)
    }
}

module.exports.get_P_bez_3_dr_st_l = (column_shape, column_length) => {
    if (column_shape == "rectangular") {
        return get_fn_M_dr_st_l(column_length / 2 / 1000)
    } else {
        return get_fn_M_dr_st_l(column_radius / 1000)
    }
}

module.exports.get_P_bez_1_dr_st_l = () => {
    return get_fn_M_dr_st_l(-0.001)
}

module.exports.get_P_bez_2_dr_st_l = () => {
    return get_fn_M_dr_st_l(0.001)
}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}

module.exports.get_ = (arg1, arg2, arg3, arg4, arg5) => {

}










































