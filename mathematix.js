module.exports.get_volume = () => {
    if (point_foundation_shape == 'rectangular') {
        return length * width * height / 1000000000
    } else if (point_foundation_shape == 'circular') {
        return Math.PI * Math.pow(radius, 2) * height / 1000000000
    }
}

module.exports.get_q = () => depth / 1000 * ground_density

module.exports.get_g = () => {
    if (height < depth) {
        return ground_density * (depth - height) / 1000;
    } else if (height >= depth) {
            return 0;
    }
}

module.exports.get_af_pc = () => 1.2

module.exports.get_dr_st_af_d = () => 180 / Math.PI * Math.atan(Math.tan(dr_st_af_k * Math.PI / 180) / af_pc)

module.exports.get_dr_lt_af_d = () => 180 / Math.PI * Math.atan(Math.tan(dr_lt_af_k * Math.PI / 180) / af_pc)

module.exports.get_ud_st_af_d = () => 180 / Math.PI * Math.atan(Math.tan(ud_st_af_k * Math.PI / 180) / af_pc)

module.exports.get_ud_lt_af_d = () => 180 / Math.PI * Math.atan(Math.tan(ud_lt_af_k * Math.PI / 180) / af_pc)

module.exports.get_dr_cohesion_pc = () => 1.2

module.exports.get_ud_cohesion_pc = () => 1.8

module.exports.get_dr_st_cohesion_d = () => dr_st_cohesion_k / dr_cohesion_pc

module.exports.get_dr_lt_cohesion_d = () =>  dr_lt_cohesion_k / dr_cohesion_pc

module.exports.get_ud_st_cohesion_d = () =>  ud_st_cohesion_k / ud_cohesion_pc

module.exports.get_ud_lt_cohesion_d = () => ud_lt_cohesion_k / ud_cohesion_pc

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

module.exports.get_K_g_a_dr_st = () => (1 - Math.sin(dr_st_af_d * Math.PI / 180)) / (1 + Math.sin(dr_st_af_d * Math.PI / 180))

module.exports.get_K_g_a_dr_lt = () => (1 - Math.sin(dr_lt_af_d * Math.PI / 180)) / (1 + Math.sin(dr_lt_af_d * Math.PI / 180))

module.exports.get_K_g_a_ud_st = () => (1 - Math.sin(ud_st_af_d * Math.PI / 180)) / (1 + Math.sin(ud_st_af_d * Math.PI / 180))

module.exports.get_K_g_a_ud_lt = () => (1 - Math.sin(ud_lt_af_d * Math.PI / 180)) / (1 + Math.sin(ud_lt_af_d * Math.PI / 180))

module.exports.get_K_c_a_dr_st = () => -(2 * Math.cos(dr_st_af_d * Math.PI / 180)) / (1 + Math.sin(dr_st_af_d * Math.PI / 180))

module.exports.get_K_c_a_dr_lt = () => -(2 * Math.cos(dr_lt_af_d * Math.PI / 180)) / (1 + Math.sin(dr_lt_af_d * Math.PI / 180))

module.exports.get_K_c_a_ud_st = () => -(2 * Math.cos(ud_st_af_d * Math.PI / 180)) / (1 + Math.sin(ud_st_af_d * Math.PI / 180))

module.exports.get_K_c_a_ud_lt = () => -(2 * Math.cos(ud_lt_af_d * Math.PI / 180)) / (1 + Math.sin(ud_lt_af_d * Math.PI / 180))

module.exports.get_K_g_p_dr_st = () => (1 + Math.sin(dr_st_af_d * Math.PI / 180)) / (1 - Math.sin(dr_st_af_d * Math.PI / 180))

module.exports.get_K_g_p_dr_lt = () => (1 + Math.sin(dr_lt_af_d * Math.PI / 180)) / (1 - Math.sin(dr_lt_af_d * Math.PI / 180))

module.exports.get_K_g_p_ud_st = () => (1 + Math.sin(ud_st_af_d * Math.PI / 180)) / (1 - Math.sin(ud_st_af_d * Math.PI / 180))

module.exports.get_K_g_p_ud_lt = () => (1 + Math.sin(ud_lt_af_d * Math.PI / 180)) / (1 - Math.sin(ud_lt_af_d * Math.PI / 180))

module.exports.get_K_c_p_dr_st = () => (2 * Math.cos(dr_st_af_d * Math.PI / 180)) / (1 - Math.sin(dr_st_af_d * Math.PI / 180))

module.exports.get_K_c_p_dr_lt = () => (2 * Math.cos(dr_lt_af_d * Math.PI / 180)) / (1 - Math.sin(dr_lt_af_d * Math.PI / 180))

module.exports.get_K_c_p_ud_st = () => (2 * Math.cos(ud_st_af_d * Math.PI / 180)) / (1 - Math.sin(ud_st_af_d * Math.PI / 180))

module.exports.get_K_c_p_ud_lt = () => (2 * Math.cos(ud_lt_af_d * Math.PI / 180)) / (1 - Math.sin(ud_lt_af_d * Math.PI / 180))

module.exports.get_self_weight = () => volume * concrete_density

module.exports.get_ground_area = () => {
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

module.exports.get_ground_weight = () => ground_area * g

module.exports.get_vl_total_dr_st = () => {
    return self_weight + ground_weight + vl_external
}

module.exports.get_vl_total_dr_lt = () => {
    return self_weight + ground_weight + vl_external
}

module.exports.get_vl_total_ud_st = () => {
    return self_weight + ground_weight + vl_external
}

module.exports.get_vl_total_ud_lt = () => {
    return self_weight + ground_weight + vl_external
}

module.exports.get_vl_total = () => self_weight + ground_weight + vl_external

module.exports.get_vl_dim_total = () => vl_external + self_weight

module.exports.get_vl_total_internal = () => vl_external + self_weight

module.exports.get_vl_total_max = () => Math.max(vl_total_dr_st, vl_total_dr_lt, vl_total_ud_st, vl_total_ud_lt)

module.exports.get_hl_total = () => Math.sqrt(Math.pow(hl_length, 2) + Math.pow(hl_width, 2))

module.exports.get_d_0_dr_st = () => -((K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load) / (ground_density * K_g_a_dr_st)) * 1000

module.exports.get_d_0_dr_lt = () => -((K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load) / (ground_density * K_g_a_dr_lt)) * 1000

module.exports.get_d_0_ud_st = () => -((K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load) / (ground_density * K_g_a_ud_st)) * 1000

module.exports.get_d_0_ud_lt = () => -((K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load) / (ground_density * K_g_a_ud_lt)) * 1000

module.exports.get_F_a_dr_st_l = () => {
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

module.exports.get_F_a_dr_lt_l = () => {
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

module.exports.get_F_a_ud_st_l = () => {
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

module.exports.get_F_a_ud_lt_l = () => {
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

module.exports.get_F_p_dr_st_l = () => {
    if (height >= depth) {
        return width / 1000 * (depth / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_st) / 2)
    } else if (height < depth) {
       return width / 1000 * (height / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_st - height / 1000 * ground_density * K_g_p_dr_st) / 2)
    }
}

module.exports.get_F_p_dr_lt_l = () => {
    if (height >= depth) {
        return width / 1000 * (depth / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_lt) / 2)
    } else if (height < depth) {
        return width / 1000 * (height / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_lt - height / 1000 * ground_density * K_g_p_dr_lt) / 2)
    }
}

module.exports.get_F_p_ud_st_l = () => {
    if (height >= depth) {
        return width / 1000 * (depth / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_st) / 2)
    } else if (height < depth) {
        return width / 1000 * (height / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_st - height / 1000 * ground_density * K_g_p_ud_st) / 2)
    }
}

module.exports.get_F_p_ud_lt_l = () => {
    if (height >= depth) {
        return width / 1000 * (depth / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_lt) / 2)
    } else if (height < depth) {
        return width / 1000 * (height / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_lt - height / 1000 * ground_density * K_g_p_ud_lt) / 2)
    }
}

module.exports.get_F_a_dr_st_b = () => {
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

module.exports.get_F_a_dr_lt_b = () => {
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

module.exports.get_F_a_ud_st_b = () => {
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

module.exports.get_F_a_ud_lt_b = () => {
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

module.exports.get_F_p_dr_st_b = () => {
    if (height >= depth) {
        return length / 1000 * (depth / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_st) / 2)
        } else if (height < depth) {
        return length / 1000 * (height / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_st - height / 1000 * ground_density * K_g_p_dr_st) / 2)
   }
}

module.exports.get_F_p_dr_lt_b = () => {
    if (height >= depth) {
        return length / 1000 * (depth / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_lt) / 2)
    } else if (height < depth) {
        return length / 1000 * (height / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_lt - height / 1000 * ground_density * K_g_p_dr_lt) / 2)
    }
}

module.exports.get_F_p_ud_st_b = () => {
    if (height >= depth) {
        return length / 1000 * (depth / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_st) / 2)
    } else if (height < depth) {
        return length / 1000 * (height / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_st - height / 1000 * ground_density * K_g_p_ud_st) / 2)
    }
}

module.exports.get_F_p_ud_lt_b = () => {
    if (height >= depth) {
        return length / 1000 * (depth / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_lt) / 2)  
    } else if (height < depth) {
        return length / 1000 * (height / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_lt - height / 1000 * ground_density * K_g_p_ud_lt) / 2)
    }
}

module.exports.get_F_a_dr_st_r = () => {
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

module.exports.get_F_a_dr_lt_r = () => {
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

module.exports.get_F_a_ud_st_r = () => {
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

module.exports.get_F_a_ud_lt_r = () => {
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

module.exports.get_F_p_dr_st_r = () => {
    if (height >= depth) {
        return Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_st) / 2)
    } else if (height < depth) {
        return Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_st - height / 1000 * ground_density * K_g_p_dr_st) / 2)
    }
}

module.exports.get_F_p_dr_lt_r = () => {
    if (height >= depth) {
        return Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_lt) / 2)
    } else if (height < depth) {
        return Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_lt - height / 1000 * ground_density * K_g_p_dr_lt) / 2)
    }
}

module.exports.get_F_p_ud_st_r = () => {
    if (height >= depth) {
        return Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_st) / 2)
    } else if (height < depth) {
        return Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_st - height / 1000 * ground_density * K_g_p_ud_st) / 2)
    }
}

module.exports.get_F_p_ud_lt_r = () => {
    if (height >= depth) {
        return Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_lt) / 2)
    } else if (height < depth) {
        return Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_lt - height / 1000 * ground_density * K_g_p_ud_lt) / 2)
    }
}

module.exports.get_h_res_dr_st_l = () => {
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

module.exports.get_h_res_dr_lt_l = () => {

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

module.exports.get_h_res_ud_st_l = () => {
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

module.exports.get_h_res_ud_lt_l = () => {
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

module.exports.get_h_res_dr_st_b = () => {
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

module.exports.get_h_res_dr_lt_b = () => {
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

module.exports.get_h_res_ud_st_b = () => {
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

module.exports.get_h_res_ud_lt_b = () => {
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

module.exports.get_h_res_dr_st_rl = () => {
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

module.exports.get_h_res_dr_lt_rl = () => {
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

module.exports.get_h_res_ud_st_rl = () => {
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

module.exports.get_h_res_ud_lt_rl = () => {
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

module.exports.get_h_res_dr_st_rb = () => {
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

module.exports.get_h_res_dr_lt_rb = () => {
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

module.exports.get_h_res_ud_st_rb = () => {
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

module.exports.get_h_res_ud_lt_rb = () => {
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

module.exports.get_H_res_dr_st = () => {

    if (point_foundation_shape == 'rectangular') {
        return Math.sqrt(Math.pow(h_res_dr_st_l, 2) + Math.pow(h_res_dr_st_b, 2))
        
    } else if (point_foundation_shape == 'circular') {
        return Math.sqrt(Math.pow(h_res_dr_st_rl, 2) + Math.pow(h_res_dr_st_rb, 2))
    }
}

module.exports.get_H_res_dr_lt = () => {
    if (point_foundation_shape == 'rectangular') {
        return Math.sqrt(Math.pow(h_res_dr_lt_l, 2) + Math.pow(h_res_dr_lt_b, 2))
    } else if (point_foundation_shape == 'circular') {
        return Math.sqrt(Math.pow(h_res_dr_lt_rl, 2) + Math.pow(h_res_dr_lt_rb, 2))
    }
}

module.exports.get_H_res_ud_st = () => {
    if (point_foundation_shape == 'rectangular') {
        return Math.sqrt(Math.pow(h_res_ud_st_l, 2) + Math.pow(h_res_ud_st_b, 2))
    } else if (point_foundation_shape == 'circular') {
        return Math.sqrt(Math.pow(h_res_ud_st_rl, 2) + Math.pow(h_res_ud_st_rb, 2))
    }
}

module.exports.get_H_res_ud_lt = () => {
    if (point_foundation_shape == 'rectangular') {
        return Math.sqrt(Math.pow(h_res_ud_lt_l, 2) + Math.pow(h_res_ud_lt_b, 2))
    } else if (point_foundation_shape == 'circular') {
        return Math.sqrt(Math.pow(h_res_ud_lt_rl, 2) + Math.pow(h_res_ud_lt_rb, 2))
    }
}

module.exports.get_H_res_both = () => {
    return Math.max(H_res_dr_st, H_res_dr_lt, H_res_ud_st, H_res_ud_lt)
}

module.exports.get_h_cg_a_dr_st = () => {
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

module.exports.get_h_cg_a_dr_lt = () => {
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

module.exports.get_h_cg_a_ud_st = () => {
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

module.exports.get_h_cg_a_ud_lt = () => {
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

module.exports.get_h_cg_p_dr_st = () => {
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

module.exports.get_h_cg_p_dr_lt = () => {
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

module.exports.get_h_cg_p_ud_st = () => {
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

module.exports.get_h_cg_p_ud_lt = () => {
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

module.exports.get_m_h_length = () => {
    return height_p_hor / 1000 * hl_length
}

module.exports.get_m_h_width = () => {
    return height_p_hor / 1000 * hl_width
}

module.exports.get_m_h_r = () => {
    return height_p_hor / 1000 * hl_total
}
module.exports.get_m_v_dr_st_length = () => {
    return vl_external * ec_vl_length / 1000
}

module.exports.get_m_v_dr_lt_length = () => {
    return vl_external * ec_vl_length / 1000
}

module.exports.get_m_v_ud_st_length = () => {
    return vl_external * ec_vl_length / 1000
}

module.exports.get_m_v_ud_lt_length = () => {
    return vl_external * ec_vl_length / 1000
}

module.exports.get_m_v_dim_length = () => {
    return vl_external * ec_vl_length / 1000
}

module.exports.get_m_v_dr_st_width = () => {
    return vl_external * ec_vl_width / 1000
}

module.exports.get_m_v_dr_lt_width = () => {
    return vl_external * ec_vl_width / 1000
}

module.exports.get_m_v_ud_st_width = () => {
    return vl_external * ec_vl_width / 1000
}

module.exports.get_m_v_ud_lt_width = () => {
    return vl_external * ec_vl_width / 1000
}

module.exports.get_m_v_dim_width = () => {
    return vl_external * ec_vl_width / 1000
}

module.exports.get_m_F_a_dr_st_l = () => {
    return h_cg_a_dr_st / 1000 * F_a_dr_st_l
}

module.exports.get_m_F_a_dr_lt_l = () => {
    return h_cg_a_dr_lt / 1000 * F_a_dr_lt_l
}

module.exports.get_m_F_a_ud_st_l = () => {
    return h_cg_a_ud_st / 1000 * F_a_ud_st_l
}

module.exports.get_m_F_a_ud_lt_l = () => {
    return h_cg_a_ud_lt / 1000 * F_a_ud_lt_l
}

module.exports.get_m_F_p_dr_st_l = () => {
    return h_cg_p_dr_st / 1000 * F_p_dr_st_l
}

module.exports.get_m_F_p_dr_lt_l = () => {
    return h_cg_p_dr_lt / 1000 * F_p_dr_lt_l
}

module.exports.get_m_F_p_ud_st_l = () => {
    return h_cg_p_ud_st / 1000 * F_p_ud_st_l
}

module.exports.get_m_F_p_ud_lt_l = () => {
    return h_cg_p_ud_lt / 1000 * F_p_ud_lt_l
}

module.exports.get_m_F_a_dr_st_b = () => {
    return h_cg_a_dr_st / 1000 * F_a_dr_st_b
}

module.exports.get_m_F_a_dr_lt_b = () => {
    return h_cg_a_dr_lt / 1000 * F_a_dr_lt_b
}

module.exports.get_m_F_a_ud_st_b = () => {
    return h_cg_a_ud_st / 1000 * F_a_ud_st_b
}

module.exports.get_m_F_a_ud_lt_b = () => {
    return h_cg_a_ud_lt / 1000 * F_a_ud_lt_b
}

module.exports.get_m_F_p_dr_st_b = () => {
    return h_cg_p_dr_st / 1000 * F_p_dr_st_b
}

module.exports.get_m_F_p_dr_lt_b = () => {
    return h_cg_p_dr_lt / 1000 * F_p_dr_lt_b
}

module.exports.get_m_F_p_ud_st_b = () => {
    return h_cg_p_ud_st / 1000 * F_p_ud_st_b
}

module.exports.get_m_F_p_ud_lt_b = () => {
    return h_cg_p_ud_lt / 1000 * F_p_ud_lt_b
}

module.exports.get_m_F_a_dr_st_r = () => {
    return h_cg_a_dr_st / 1000 * F_a_dr_st_r
}

module.exports.get_m_F_a_dr_lt_r = () => {
    return h_cg_a_dr_lt / 1000 * F_a_dr_lt_r
}

module.exports.get_m_F_a_ud_st_r = () => {
    return h_cg_a_ud_st / 1000 * F_a_ud_st_r
}

module.exports.get_m_F_a_ud_lt_r = () => {
    return h_cg_a_ud_lt / 1000 * F_a_ud_lt_r
}

module.exports.get_m_F_p_dr_st_r = () => {
    return h_cg_p_dr_st / 1000 * F_p_dr_st_r
}

module.exports.get_m_F_p_dr_lt_r = () => {
    return h_cg_p_dr_lt / 1000 * F_p_dr_lt_r
}

module.exports.get_m_F_p_ud_st_r = () => {
    return h_cg_p_ud_st / 1000 * F_p_ud_st_r
}

module.exports.get_m_F_p_ud_lt_r = () => {
    return h_cg_p_ud_lt / 1000 * F_p_ud_lt_r
}

module.exports.get_m_r = () => {
    return Math.sqrt(Math.pow(m_length, 2) + Math.pow(m_width, 2))
}

module.exports.get_m_total_dr_st_l = () => {
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

module.exports.get_m_total_dr_lt_l = () => {
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

module.exports.get_m_total_ud_st_l = () => {
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

module.exports.get_m_total_ud_lt_l = () => {
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

module.exports.get_m_total_dr_st_b = () => {
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

module.exports.get_m_total_dr_lt_b = () => {
    if (m_F_p_dr_lt_b > Math.abs(m_h_width + m_v_dr_lt_width + m_width) + m_F_a_dr_lt_b) {
        return 0
    } else {
        if (m_h_width + m_v_dr_lt_width + m_width < 0) {
            return m_h_width + m_v_dr_lt_width + m_width - m_F_a_dr_lt_b + m_F_p_dr_lt_b
        } else if (m_h_width + m_v_dr_lt_width + m_width >= 0) {
            return m_h_width + m_v_dr_lt_width + m_width + m_F_a_dr_lt_b - m_F_p_dr_lt_b
        }
    }
}

module.exports.get_m_total_ud_st_b = () => {
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

module.exports.get_m_total_ud_lt_b = () => {
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

module.exports.get_m_total_dr_st_rl = () => {
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

module.exports.get_m_total_dr_lt_rl = () => {
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

module.exports.get_m_total_ud_st_rl = () => {
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

module.exports.get_m_total_ud_lt_rl = () => {
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

module.exports.get_m_total_dr_st_rb = () => {
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

module.exports.get_m_total_dr_lt_rb = () => {
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

module.exports.get_m_total_ud_st_rb = () => {
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

module.exports.get_m_total_ud_lt_rb = () => {
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

module.exports.get_m_dim_length = () => {
    return m_h_length + m_length + m_v_dim_length
}

module.exports.get_m_dim_width = () => {
    return m_h_width + m_width + m_v_dim_width
}

module.exports.get_m_dim_r_length = () => {
    return m_h_length + m_length + m_v_dim_length
}

module.exports.get_m_dim_r_width = () => {
    return m_h_width + m_width + m_v_dim_width
}

//EFFECTIVE DIMENSIONS

module.exports.get_e_total_dr_st_l = () => {
    return Math.abs(m_total_dr_st_l) / vl_total_dr_st * 1000
}

module.exports.get_e_total_dr_lt_l = () => {
    return Math.abs(m_total_dr_lt_l) / vl_total_dr_lt * 1000
}

module.exports.get_e_total_ud_st_l = () => {
    return Math.abs(m_total_ud_st_l) / vl_total_ud_st * 1000
}

module.exports.get_e_total_ud_lt_l = () => {
    return Math.abs(m_total_ud_lt_l) / vl_total_ud_lt * 1000
}

module.exports.get_e_total_dr_st_b = () => {
    return Math.abs(m_total_dr_st_b) / vl_total_dr_st * 1000
}

module.exports.get_e_total_dr_lt_b = () => {
    return Math.abs(m_total_dr_lt_b) / vl_total_dr_lt * 1000
}

module.exports.get_e_total_ud_st_b = () => {
    return Math.abs(m_total_ud_st_b) / vl_total_ud_st * 1000
}

module.exports.get_e_total_ud_lt_b = () => {
    return Math.abs(m_total_ud_lt_b) / vl_total_ud_lt * 1000
}

module.exports.get_e_total_dr_st_rl = () => {
    return Math.abs(m_total_dr_st_rl) / vl_total_dr_st * 1000
}

module.exports.get_e_total_dr_lt_rl = () => {
    return Math.abs(m_total_dr_lt_rl) / vl_total_dr_lt * 1000
}
module.exports.get_e_total_ud_st_rl = () => {
    return Math.abs(m_total_ud_st_rl) / vl_total_ud_st * 1000
}

module.exports.get_e_total_ud_lt_rl = () => {
    return Math.abs(m_total_ud_lt_rl) / vl_total_ud_lt * 1000
}

module.exports.get_e_total_dr_st_rb = () => {
    return Math.abs(m_total_dr_st_rb) / vl_total_dr_st * 1000
}

module.exports.get_e_total_dr_lt_rb = () => {
    return Math.abs(m_total_dr_lt_rb) / vl_total_dr_lt * 1000
}

module.exports.get_e_total_ud_st_rb = () => {
    return Math.abs(m_total_ud_st_rb) / vl_total_ud_st * 1000
}

module.exports.get_e_total_ud_lt_rb = () => {
    return Math.abs(m_total_ud_lt_rb) / vl_total_ud_lt * 1000
}

module.exports.get_e_total_dr_st_r = () => {
    return Math.sqrt(Math.pow(e_total_dr_st_rl, 2) + Math.pow(e_total_dr_st_rb, 2))
}

module.exports.get_e_total_dr_lt_r = () => {
    return Math.sqrt(Math.pow(e_total_dr_lt_rl, 2) + Math.pow(e_total_dr_lt_rb, 2))
}

module.exports.get_e_total_ud_st_r = () => {
    return Math.sqrt(Math.pow(e_total_ud_st_rl, 2) + Math.pow(e_total_ud_st_rb, 2))
}

module.exports.get_e_total_ud_lt_r = () => {
    return Math.sqrt(Math.pow(e_total_ud_lt_rl, 2) + Math.pow(e_total_ud_lt_rb, 2))
}

module.exports.get_e_dim_l = () => {
    return Math.abs(m_dim_length) / vl_dim_total * 1000
}

module.exports.get_e_dim_b = () => {
    return Math.abs(m_dim_width) / vl_dim_total * 1000
}

module.exports.get_e_dim_rl = () => {
    return Math.abs(m_dim_r_length) / vl_dim_total * 1000
}

module.exports.get_e_dim_rb = () => {
    return Math.abs(m_dim_r_width) / vl_dim_total * 1000
}

module.exports.get_e_dim_r = () => {
    return Math.sqrt(Math.pow(e_dim_rl, 2) + Math.pow(e_dim_rb, 2))
}

module.exports.get_v_dr_st_r = () => {
    return 2 * Math.acos(e_total_dr_st_r / radius) * 180 / Math.PI
}

module.exports.get_v_dr_lt_r = () => {
    return 2 * Math.acos(e_total_dr_lt_r / radius) * 180 / Math.PI
}

module.exports.get_v_ud_st_r = () => {
    return 2 * Math.acos(e_total_ud_st_r / radius) * 180 / Math.PI
}

module.exports.get_v_ud_lt_r = () => {
    return 2 * Math.acos(e_total_ud_lt_r / radius) * 180 / Math.PI
}

module.exports.get_v_dim_r = () => {
    return 2 * Math.acos(e_dim_r / radius) * 180 / Math.PI
}

module.exports.get_ef_dr_st_l = () => {
    if (point_foundation_shape == 'rectangular') {
        return length - 2 * e_total_dr_st_l
    } else if (point_foundation_shape == 'circular') {
        var A_eff_dr_st = Math.pow(radius / 1000, 2) * (v_dr_st_r * Math.PI / 180 - Math.sin(v_dr_st_r * Math.PI / 180))
        var ef_dr_st_b = Math.sqrt(Math.tan(v_dr_st_r * Math.PI / 180 / 4) * A_eff_dr_st * 1000000)
        return A_eff_dr_st * 1000000 / ef_dr_st_b
    }
}

module.exports.get_ef_dr_lt_l = () => {
    if (point_foundation_shape == 'rectangular') {
        return length - 2 * e_total_dr_lt_l
    } else if (point_foundation_shape == 'circular') {
        var A_eff_dr_lt = Math.pow(radius / 1000, 2) * (v_dr_lt_r * Math.PI / 180 - Math.sin(v_dr_lt_r * Math.PI / 180))
        var ef_dr_lt_b = Math.sqrt(Math.tan(v_dr_lt_r * Math.PI / 180 / 4) * A_eff_dr_lt * 1000000)
        return A_eff_dr_lt * 1000000 / ef_dr_lt_b
    }
}

module.exports.get_ef_ud_st_l = () => {
    if (point_foundation_shape == 'rectangular') {
        return length - 2 * e_total_ud_st_l
    } else if (point_foundation_shape == 'circular') { 
        var A_eff_ud_st = Math.pow(radius / 1000, 2) * (v_ud_st_r * Math.PI / 180 - Math.sin(v_ud_st_r * Math.PI / 180))
        var ef_ud_st_b = Math.sqrt(Math.tan(v_ud_st_r * Math.PI / 180 / 4) * A_eff_ud_st * 1000000)
        return A_eff_ud_st * 1000000 / ef_ud_st_b
    }
}

module.exports.get_ef_ud_lt_l = () => {
    if (point_foundation_shape == 'rectangular') {
        return length - 2 * e_total_ud_lt_l
    } else if (point_foundation_shape == 'circular') { 
        var A_eff_ud_lt = Math.pow(radius / 1000, 2) * (v_ud_lt_r * Math.PI / 180 - Math.sin(v_ud_lt_r * Math.PI / 180))
        var ef_ud_lt_b = Math.sqrt(Math.tan(v_ud_lt_r * Math.PI / 180 / 4) * A_eff_ud_lt * 1000000)
        return ef_ud_lt_l = A_eff_ud_lt * 1000000 / ef_ud_lt_b
    }
}

module.exports.get_ef_dim_l = () => {
    if (point_foundation_shape == 'rectangular') {
        return length - 2 * e_dim_l
    } else if (point_foundation_shape == 'circular') { 
        var A_dim_eff = Math.pow(radius / 1000, 2) * (v_dim_r * Math.PI / 180 - Math.sin(v_dim_r * Math.PI / 180))
        var ef_dim_b = Math.sqrt(Math.tan(v_dim_r * Math.PI / 180 / 4) * A_dim_eff * 1000000)
        return A_dim_eff * 1000000 / ef_dim_b
    }
}

module.exports.get_ef_dr_st_b = () => {
    if (point_foundation_shape == 'rectangular') {
        return width - 2 * e_total_dr_st_b
    } else if (point_foundation_shape == 'circular') { 
        var A_eff_dr_st = Math.pow(radius / 1000, 2) * (v_dr_st_r * Math.PI / 180 - Math.sin(v_dr_st_r * Math.PI / 180))
        return Math.sqrt(Math.tan(v_dr_st_r * Math.PI / 180 / 4) * A_eff_dr_st * 1000000)
    }
}

module.exports.get_ef_dr_lt_b = () => {
    if (point_foundation_shape == 'rectangular') {
        return width - 2 * e_total_dr_lt_b
    } else if (point_foundation_shape == 'circular') { 
        var A_eff_dr_lt = Math.pow(radius / 1000, 2) * (v_dr_lt_r * Math.PI / 180 - Math.sin(v_dr_lt_r * Math.PI / 180))
        return Math.sqrt(Math.tan(v_dr_lt_r * Math.PI / 180 / 4) * A_eff_dr_lt * 1000000)
    }
}

module.exports.get_ef_ud_st_b = () => {
    if (point_foundation_shape == 'rectangular') {
        return width - 2 * e_total_ud_st_b
    } else if (point_foundation_shape == 'circular') { 
        var A_eff_ud_st = Math.pow(radius / 1000, 2) * (v_ud_st_r * Math.PI / 180 - Math.sin(v_ud_st_r * Math.PI / 180))
        return Math.sqrt(Math.tan(v_ud_st_r * Math.PI / 180 / 4) * A_eff_ud_st * 1000000)
    }
}

module.exports.get_ef_ud_lt_b = () => {
    if (point_foundation_shape == 'rectangular') {
        return width - 2 * e_total_ud_lt_b
    } else if (point_foundation_shape == 'circular') { 
        var A_eff_ud_lt = Math.pow(radius / 1000, 2) * (v_ud_lt_r * Math.PI / 180 - Math.sin(v_ud_lt_r * Math.PI / 180))
        return Math.sqrt(Math.tan(v_ud_lt_r * Math.PI / 180 / 4) * A_eff_ud_lt * 1000000)
    }
}

module.exports.get_ef_dim_b = () => {
    if (point_foundation_shape == 'rectangular') {
        return width - 2 * e_dim_b
    } else if (point_foundation_shape == 'circular') { 
        var A_dim_eff = Math.pow(radius / 1000, 2) * (v_dim_r * Math.PI / 180 - Math.sin(v_dim_r * Math.PI / 180))
        return Math.sqrt(Math.tan(v_dim_r * Math.PI / 180 / 4) * A_dim_eff * 1000000)
    }
}

module.exports.get_A_eff_dr_st = () => {
    if (point_foundation_shape == 'rectangular') {
        return ef_dr_st_l * ef_dr_st_b / 1000000
    } else if (point_foundation_shape == 'circular') { 
        return Math.pow(radius / 1000, 2) * (v_dr_st_r * Math.PI / 180 - Math.sin(v_dr_st_r * Math.PI / 180))
    }
}

module.exports.get_A_eff_dr_lt = () => {
    if (point_foundation_shape == 'rectangular') {
        return ef_dr_lt_l * ef_dr_lt_b / 1000000
    } else if (point_foundation_shape == 'circular') { 
        return Math.pow(radius / 1000, 2) * (v_dr_lt_r * Math.PI / 180 - Math.sin(v_dr_lt_r * Math.PI / 180))
    }
}

module.exports.get_A_eff_ud_st = () => {
    if (point_foundation_shape == 'rectangular') {
        return ef_ud_st_l * ef_ud_st_b / 1000000
    } else if (point_foundation_shape == 'circular') { 
        return  Math.pow(radius / 1000, 2) * (v_ud_st_r * Math.PI / 180 - Math.sin(v_ud_st_r * Math.PI / 180))
    }
}

module.exports.get_A_eff_ud_lt = () => {
    if (point_foundation_shape == 'rectangular') {
        return ef_ud_lt_l * ef_ud_lt_b / 1000000
    } else if (point_foundation_shape == 'circular') { 
        return Math.pow(radius / 1000, 2) * (v_ud_lt_r * Math.PI / 180 - Math.sin(v_ud_lt_r * Math.PI / 180))
    }
}

module.exports.get_A_dim_eff = () => {
    if (point_foundation_shape == 'rectangular') {
        return ef_dim_l * ef_dim_b / 1000000
    } else if (point_foundation_shape == 'circular') { 
        return Math.pow(radius / 1000, 2) * (v_dim_r * Math.PI / 180 - Math.sin(v_dim_r * Math.PI / 180))
    }
}



// GROUND BEARING CAPACITY

module.exports.get_N_q_dr_st = () => {
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

module.exports.get_N_c_dr_st = () => {
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

module.exports.get_N_g_dr_st = () => {
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

module.exports.get_N_q_dr_lt = () => {
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

module.exports.get_N_c_dr_lt = () => {
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

module.exports.get_N_g_dr_lt = () => {
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


module.exports.get_N_q_ud_st = () => {
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

module.exports.get_N_c_ud_st = () => {
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

module.exports.get_N_g_ud_st = (e_total_ud_st_l, length, e_total_ud_st_b, width, e_total_ud_st_r, radius) => {
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

module.exports.get_N_q_ud_lt = () => {
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

module.exports.get_N_c_ud_lt = () => {
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

module.exports.get_N_g_ud_lt = () => {
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

module.exports.get_s_g_dr_st = () => {
    return 1 - 0.4 * Math.min(ef_dr_st_l , ef_dr_st_b) / Math.max(ef_dr_st_l , ef_dr_st_b)
}

module.exports.get_s_g_dr_lt = () => {
    return 1 - 0.4 * Math.min(ef_dr_lt_l , ef_dr_lt_b) / Math.max(ef_dr_lt_l , ef_dr_lt_b)
}

module.exports.get_s_g_ud_st = () => {
    return 1 - 0.4 * Math.min(ef_ud_st_l , ef_ud_st_b) / Math.max(ef_ud_st_l , ef_ud_st_b)
}

module.exports.get_s_g_ud_lt = () => {
    return 1 - 0.4 * Math.min(ef_ud_lt_l , ef_ud_lt_b) / Math.max(ef_ud_lt_l , ef_ud_lt_b)
}

module.exports.get_s_q_dr_st = () => {
    return 1 + 0.2 * Math.min(ef_dr_st_l , ef_dr_st_b) / Math.max(ef_dr_st_l , ef_dr_st_b)
}

module.exports.get_s_q_dr_lt = () => {
    return 1 + 0.2 * Math.min(ef_dr_lt_l , ef_dr_lt_b) / Math.max(ef_dr_lt_l , ef_dr_lt_b)
}

module.exports.get_s_q_ud_st = () => {
    return 1 + 0.2 * Math.min(ef_ud_st_l , ef_ud_st_b) / Math.max(ef_ud_st_l , ef_ud_st_b)
}

module.exports.get_s_q_ud_lt = () => {
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

module.exports.get_i_q_dr_st = () => {
    if (H_res_dr_st == 0) {
        return 1
    } else if (H_res_dr_st != 0) {
        return Math.pow(1 - H_res_dr_st / (vl_total_dr_st + A_eff_dr_st * dr_st_cohesion_d / Math.tan(dr_st_af_d * Math.PI / 180)), 2)
    }
}

module.exports.get_i_g_dr_st = () => {
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

module.exports.get_i_c_dr_st = () => {
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

module.exports.get_i_q_dr_lt = () => {
    if (H_res_dr_lt == 0) {
        return 1
    } else if (H_res_dr_lt != 0) {
        return Math.pow(1 - H_res_dr_lt / (vl_total_dr_lt + A_eff_dr_lt * dr_lt_cohesion_d / Math.tan(dr_lt_af_d * Math.PI / 180)), 2)
    }
}

module.exports.get_i_g_dr_lt = () => {
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

module.exports.get_i_c_dr_lt = () => {
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

module.exports.get_i_q_ud_st = () => {
    if (H_res_ud_st == 0) {
        return 1
    } else if (H_res_ud_st != 0) {
        return 0
    }
}

module.exports.get_i_g_ud_st = () => {
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

module.exports.get_i_c_ud_st = () => {
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

module.exports.get_i_q_ud_lt = () => {
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

module.exports.get_i_g_ud_lt = () => {
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

module.exports.get_i_c_ud_lt = () => {
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

module.exports.get_R_q_dr_st = () => {
    return q * N_q_dr_st * s_q_dr_st * i_q_dr_st * d_q
}

module.exports.get_R_q_dr_lt = () => {
    return q * N_q_dr_lt * s_q_dr_lt * i_q_dr_lt * d_q
}

module.exports.get_R_q_ud_st = () => {
    return q
}

module.exports.get_R_q_ud_lt = () => {
    if (ud_lt_af_d == 0) {
        return q
    } else {
        return q * N_q_ud_lt * s_q_ud_lt * i_q_ud_lt * d_q
    }
}

module.exports.get_R_c_dr_st = () => {
    return dr_st_cohesion_d * N_c_dr_st * s_c_dr_st * i_c_dr_st * d_c
}

module.exports.get_R_c_dr_lt = () => {
    return dr_lt_cohesion_d * N_c_dr_lt * s_c_dr_lt * i_c_dr_lt * d_c
}

module.exports.get_R_c_ud_st = () => {
    return ud_st_cohesion_d * N_c_ud_st * s_c_ud_st * i_c_ud_st
}

module.exports.get_R_c_ud_lt = () => {
    if (ud_lt_af_d == 0) {
        return ud_lt_cohesion_d * N_c_ud_lt * s_c_ud_lt * i_c_ud_lt
    } else {
        return ud_lt_cohesion_d * N_c_ud_lt * s_c_ud_lt * i_c_ud_lt * d_c
    }
}

module.exports.get_R_g_dr_st = () => {
    return 1 / 2 * ground_density * Math.min(ef_dr_st_l, ef_dr_st_b) / 1000 * N_g_dr_st * s_g_dr_st * i_g_dr_st
}

module.exports.get_R_g_dr_lt = () => {
    return 1 / 2 * ground_density * Math.min(ef_dr_lt_l, ef_dr_lt_b) / 1000 * N_g_dr_lt * s_g_dr_lt * i_g_dr_lt
}

module.exports.get_R_g_ud_st = () => {
    return 0
}

module.exports.get_R_g_ud_lt = () => {
    if (ud_lt_af_d == 0) {
        return 0
    } else {
        return 1 / 2 * ground_density * Math.min(ef_ud_lt_l, ef_ud_lt_b) / 1000 * N_g_ud_lt * s_g_ud_lt * i_g_ud_lt
    }
}

module.exports.get_R_total_dr_st = () => {
    return (R_q_dr_st + R_c_dr_st + R_g_dr_st) * A_eff_dr_st
}

module.exports.get_R_total_dr_lt = () => {
    return (R_q_dr_lt + R_c_dr_lt + R_g_dr_lt) * A_eff_dr_lt
}

module.exports.get_R_total_ud_st = () => {
    return (R_q_ud_st + R_c_ud_st + R_g_ud_st) * A_eff_ud_st
}

module.exports.get_R_total_ud_lt = () => {
    return (R_q_ud_lt + R_c_ud_lt + R_g_ud_lt) * A_eff_ud_lt
}

module.exports.get_R_total = () => {
    return Math.min(R_total_dr_st, R_total_dr_lt, R_total_ud_st, R_total_ud_lt)
}

module.exports.get_H_dr_st = () => {
    return vl_total_dr_st * Math.tan(dr_st_af_d * Math.PI / 180) + A_eff_dr_st * a_d_dr_st
}

module.exports.get_H_dr_lt = () => {
    return vl_total_dr_lt * Math.tan(dr_lt_af_d * Math.PI / 180) + A_eff_dr_lt * a_d_dr_lt
}

module.exports.get_H_ud_st = () => {
    return Math.min(A_eff_ud_st * ud_st_cohesion_d, 0.4 * vl_total_ud_st)
}

module.exports.get_H_ud_lt = () => {
    if (ud_lt_af_d == 0) {
        return Math.min(A_eff_ud_lt * ud_lt_cohesion_d, 0.4 * vl_total_ud_lt)
    } else {
        return vl_total_ud_lt * Math.tan(ud_lt_af_d * Math.PI / 180) + A_eff_ud_lt * ud_lt_cohesion_d
    }
}

module.exports.get_H_total = () => {
    return Math.min(H_dr_st, H_dr_lt, H_ud_st, H_ud_lt);
}

// MOMENT CAPACITY
module.exports.get_f_cd = () => {
    return f_ck / gamma_c
}

module.exports.get_f_cm = () => {
    return f_ck + 8
}

module.exports.get_f_ctm = () => {
    return 0.393 * Math.pow(f_ck, (2 / 3));
}

module.exports.get_E_cm = () => {
    return 22 * Math.pow(f_cm / 10, (0.3));
}

module.exports.get_sigma_r1 = () => {
    return 0.45 * f_R_1
}

module.exports.get_sigma_r4 = () => {
    return 0.37 * f_R_4;
}

module.exports.get_gamma_m = () => {
    return 1.5
}

module.exports.get_f_ctd_fl = () => {
    if (height < 600) {
        return 1.1 * f_ctm / gamma_m * (1.6 - height / 1000);
    } else {
        return 1.1 * f_ctm / gamma_m;
    }
}

module.exports.get_M_n = () => {
    return f_ctd_fl * 1000 * (Math.pow(height / 1000, 2) / 6);

}

module.exports.get_f_yd = () => {
    return f_yk / gamma_s;
}

module.exports.get_A_c = () => {
    return height / 1000;
}

module.exports.get_rho = () => {
    if (include_steel != 'on') {
        return 0;
    } else  {
        return A_s / (1000 * 1000) / A_c * 100;
    }
}

module.exports.get_h_ux = () => {
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

module.exports.get_ef_height = () => {
    if (rho == 0) {
        return 0.75 * height
    } else if (rho > 0) {
        return height - cover_layer;
    }
}

module.exports.get_lambda = () => {
    if (f_ck <= 50) {
        return 0.8 
    } else if (f_ck > 50) {
        return 0.8 - (f_ck - 50)/(400)
    }
}

module.exports.get_eta = () => {
    if (f_ck <= 50) {
        return 1 
    } else if (f_ck > 50) {
        return 1.0 - (f_ck - 50)/(200)
    }
}

module.exports.get_omega = () => {
    return A_s * f_yd / (ef_height * eta * f_cd * 1000)
}

module.exports.get_mu = () => {
    return omega*(1 - 1/2 * omega)
}

module.exports.get_M_p = () => {
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

module.exports.get_M_p_l = () => {
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

module.exports.get_M_p_b = () => {
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

module.exports.get_M_p_internal = () => {
    return Math.min(M_p_l, M_p_b)
}

module.exports.get_w_dr_st_l = () => {
    return vl_total / A_eff_dr_st * ef_dr_st_b / 1000
}

module.exports.get_w_dr_lt_l = () => {
    return vl_total / A_eff_dr_lt * ef_dr_lt_b / 1000
}

module.exports.get_w_ud_st_l = () => {
    return vl_total / A_eff_ud_st * ef_ud_st_b / 1000
}

module.exports.get_w_ud_lt_l = () => {
    return vl_total / A_eff_ud_lt * ef_ud_lt_b / 1000
}

module.exports.get_w_dr_st_b = () => {
    return vl_total / A_eff_dr_st * ef_dr_st_l / 1000
}

module.exports.get_w_dr_lt_b = () => {
    return vl_total / A_eff_dr_lt * ef_dr_lt_l / 1000
}

module.exports.get_w_ud_st_b = () => {
    return vl_total / A_eff_ud_st * ef_ud_st_l / 1000
}

module.exports.get_w_ud_lt_b = () => {
    return vl_total / A_eff_ud_lt * ef_ud_lt_l / 1000
}

module.exports.get_w_dim_l = () => {
    return vl_dim_total / A_dim_eff * ef_dim_b / 1000
}

module.exports.get_w_dim_b = () => {
    return vl_dim_total / A_dim_eff * ef_dim_l / 1000
}

module.exports.get_w_sw_l = () => {
    if (dimensions_known == 'on') {
        return self_weight / (length / 1000)
    } else {
        return (self_weight + ground_weight) / (length / 1000)
    }
}

module.exports.get_w_sw_b = () => {
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

module.exports.get_a_dr_st_l_1 = () => {
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

module.exports.get_b_dr_st_l_2 = () => {
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

module.exports.get_L_w_dr_st_l_1 = () => {
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

module.exports.get_L_w_dr_st_l_2 = () => {
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

module.exports.get_a_dr_lt_l_1 = () => {
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

module.exports.get_b_dr_lt_l_2 = () => {
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

module.exports.get_L_w_dr_lt_l_1 = () => {
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

module.exports.get_L_w_dr_lt_l_2 = () => {
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

module.exports.get_a_ud_st_l_1 = () => {
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

module.exports.get_b_ud_st_l_2 = () => {
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

module.exports.get_L_w_ud_st_l_1 = () => {
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

module.exports.get_L_w_ud_st_l_2 = () => {
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

module.exports.get_a_ud_lt_l_1 = () => {
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

module.exports.get_b_ud_lt_l_2 = () => {
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

module.exports.get_L_w_ud_lt_l_1 = () => {
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

module.exports.get_L_w_ud_lt_l_2 = () => {
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

module.exports.get_a_dim_l_1 = () => {
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

module.exports.get_b_dim_l_2 = () => {
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

module.exports.get_L_w_dim_l_1 = () => {
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

module.exports.get_L_w_dim_l_2 = () => {
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

module.exports.get_R_A_dr_st_l_1 = () => {
    return w_dr_st_l * L_w_dr_st_l_1
}

module.exports.get_R_A_dr_lt_l_1 = () => {
    return w_dr_lt_l * L_w_dr_lt_l_1
}

module.exports.get_R_A_ud_st_l_1 = () => {
    return w_ud_st_l * L_w_ud_st_l_1
}

module.exports.get_R_A_ud_lt_l_1 = () => {
    return w_ud_lt_l * L_w_ud_lt_l_1
}

module.exports.get_R_A_dim_l_1 = () => {
    return w_dim_l * L_w_dim_l_1
}

module.exports.get_R_A_dr_st_l_2 = () => {
    return w_dr_st_l * L_w_dr_st_l_2
}

module.exports.get_R_A_dr_lt_l_2 = () => {
    return w_dr_lt_l * L_w_dr_lt_l_2
}

module.exports.get_R_A_ud_st_l_2 = () => {
    return w_ud_st_l * L_w_ud_st_l_2
}

module.exports.get_R_A_ud_lt_l_2 = () => {
    return w_ud_lt_l * L_w_ud_lt_l_2
}

module.exports.get_R_A_dim_l_2 = () => {
    return w_dim_l * L_w_dim_l_2
}

module.exports.get_M_A_dr_st_l_1 = () => {
    return -w_dr_st_l * L_w_dr_st_l_1 * (a_dr_st_l_1 + L_w_dr_st_l_1 / 2)
}

module.exports.get_M_A_dr_lt_l_1 = () => {
    return -w_dr_lt_l * L_w_dr_lt_l_1 * (a_dr_lt_l_1 + L_w_dr_lt_l_1 / 2)
}

module.exports.get_M_A_ud_st_l_1 = () => {
    return -w_ud_st_l * L_w_ud_st_l_1 * (a_ud_st_l_1 + L_w_ud_st_l_1 / 2)
}

module.exports.get_M_A_ud_lt_l_1 = () => {
    return -w_ud_lt_l * L_w_ud_lt_l_1 * (a_ud_lt_l_1 + L_w_ud_lt_l_1 / 2)
}

module.exports.get_M_A_dim_l_1 = () => {
    return -w_dim_l * L_w_dim_l_1 * (a_dim_l_1 + L_w_dim_l_1 / 2)
}

module.exports.get_M_A_dr_st_l_2 = () => {
    return -w_dr_st_l * L_w_dr_st_l_2 * (a_dr_st_l_2 + L_w_dr_st_l_2 / 2)
}

module.exports.get_M_A_dr_lt_l_2 = () => {
    return -w_dr_lt_l * L_w_dr_lt_l_2 * (a_dr_lt_l_2 + L_w_dr_lt_l_2 / 2)
}

module.exports.get_M_A_ud_st_l_2 = () => {
    return -w_ud_st_l * L_w_ud_st_l_2 * (a_ud_st_l_2 + L_w_ud_st_l_2 / 2)
}

module.exports.get_M_A_ud_lt_l_2 = () => {
    return -w_ud_lt_l * L_w_ud_lt_l_2 * (a_ud_lt_l_2 + L_w_ud_lt_l_2 / 2)
}

module.exports.get_M_A_dim_l_2 = () => {
    return -w_dim_l * L_w_dim_l_2 * (a_dim_l_2 + L_w_dim_l_2 / 2)
}

get_M_r_dr_st_l_1 = (x) => {
    if (x <= a_dr_st_l_1) {
        return R_A_dr_st_l_1 * x + M_A_dr_st_l_1
    } else if (x > a_dr_st_l_1) {
        return R_A_dr_st_l_1 * x + M_A_dr_st_l_1 - w_dr_st_l * Math.pow(x - a_dr_st_l_1, 2) / 2
    }
}
module.exports.get_M_r_dr_st_l_1 = get_M_r_dr_st_l_1

get_M_r_dr_lt_l_1 = (x) => {
    if (x <= a_dr_lt_l_1) {
        return R_A_dr_lt_l_1 * x + M_A_dr_lt_l_1
    } else if (x > a_dr_lt_l_1) {
        return R_A_dr_lt_l_1 * x + M_A_dr_lt_l_1 - w_dr_lt_l * Math.pow(x - a_dr_lt_l_1, 2) / 2
    }
}
module.exports.get_M_r_dr_lt_l_1 = get_M_r_dr_lt_l_1

get_M_r_ud_st_l_1 = (x) => {
    if (x <= a_ud_st_l_1) {
        return R_A_ud_st_l_1 * x + M_A_ud_st_l_1
    } else if (x > a_ud_st_l_1) {
        return R_A_ud_st_l_1 * x + M_A_ud_st_l_1 - w_ud_st_l * Math.pow(x - a_ud_st_l_1, 2) / 2
    }
}
module.exports.get_M_r_ud_st_l_1 = get_M_r_ud_st_l_1

get_M_r_ud_lt_l_1 = (x) => {
    if (x <= a_ud_lt_l_1) {
        return R_A_ud_lt_l_1 * x + M_A_ud_lt_l_1
    } else if (x > a_ud_lt_l_1) {
        return R_A_ud_lt_l_1 * x + M_A_ud_lt_l_1 - w_ud_lt_l * Math.pow(x - a_ud_lt_l_1, 2) / 2
    }
}
module.exports.get_M_r_ud_lt_l_1 = get_M_r_ud_lt_l_1

get_M_r_dim_l_1 = (x) => {
    if (x <= a_dim_l_1) {
        return R_A_dim_l_1 * x + M_A_dim_l_1
    } else if (x > a_dim_l_1) {
        return R_A_dim_l_1 * x + M_A_dim_l_1 - w_dim_l * Math.pow(x - a_dim_l_1, 2) / 2
    }
}
module.exports.get_M_r_dim_l_1 = get_M_r_dim_l_1

get_M_r_dr_st_l_2 = (x) => {
    if (x < L_w_dr_st_l_2) {
        return R_A_dr_st_l_2 * x + M_A_dr_st_l_2 - w_dr_st_l * Math.pow(x - a_dr_st_l_2, 2) / 2
    } else if (x >= L_w_dr_st_l_2) {
        return 0
    }
}
module.exports.get_M_r_dr_st_l_2 = get_M_r_dr_st_l_2

get_M_r_dr_lt_l_2 = (x) => {
    if (x < L_w_dr_lt_l_2) {
        return R_A_dr_lt_l_2 * x + M_A_dr_lt_l_2 - w_dr_lt_l * Math.pow(x - a_dr_lt_l_2, 2) / 2
    } else if (x >= L_w_dr_lt_l_2) {
        return 0
    }
}
module.exports.get_M_r_dr_lt_l_2 = get_M_r_dr_lt_l_2

get_M_r_ud_st_l_2 = (x) => {
    if (x < L_w_ud_st_l_2) {
        return R_A_ud_st_l_2 * x + M_A_ud_st_l_2 - w_ud_st_l * Math.pow(x - a_ud_st_l_2, 2) / 2
    } else if (x >= L_w_ud_st_l_2) {
        return 0
    }
}
module.exports.get_M_r_ud_st_l_2 = get_M_r_ud_st_l_2

get_M_r_ud_lt_l_2 = (x) => {
    if (x < L_w_ud_lt_l_2) {
        return R_A_ud_lt_l_2 * x + M_A_ud_lt_l_2 - w_ud_lt_l * Math.pow(x - a_ud_lt_l_2, 2) / 2
    } else if (x >= L_w_ud_lt_l_2) {
        return 0
    }
}
module.exports.get_M_r_ud_lt_l_2 = get_M_r_ud_lt_l_2

get_M_r_dim_l_2 = (x) => {
    if (x < L_w_dim_l_2) {
        return R_A_dim_l_2 * x + M_A_dim_l_2 - w_dim_l * Math.pow(x - a_dim_l_2, 2) / 2
    } else if (x >= L_w_dim_l_2) {
        return 0
    }
}
module.exports.get_M_r_dim_l_2 = get_M_r_dim_l_2

get_M_g_dr_st_l_1 = (x) => {
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
module.exports.get_M_g_dr_st_l_1 = get_M_g_dr_st_l_1

get_M_g_dr_lt_l_1 = (x) => {
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
module.exports.get_M_g_dr_lt_l_1 = get_M_g_dr_lt_l_1

get_M_g_ud_st_l_1 = (x) => {
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
module.exports.get_M_g_ud_st_l_1 = get_M_g_ud_st_l_1

get_M_g_ud_lt_l_1 = (x) => {
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
module.exports.get_M_g_ud_lt_l_1 = get_M_g_ud_lt_l_1

get_M_g_dim_l_1 = (x) => {
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
module.exports.get_M_g_dim_l_1 = get_M_g_dim_l_1

get_M_g_dr_st_l_2 = (x) => {
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
module.exports.get_M_g_dr_st_l_2 = get_M_g_dr_st_l_2

get_M_g_dr_lt_l_2 = (x) => {
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
module.exports.get_M_g_dr_lt_l_2 = get_M_g_dr_lt_l_2

get_M_g_ud_st_l_2 = (x) => {
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
module.exports.get_M_g_ud_st_l_2 = get_M_g_ud_st_l_2

get_M_g_ud_lt_l_2 = (x) => {
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
module.exports.get_M_g_ud_lt_l_2 = get_M_g_ud_lt_l_2

get_M_g_dim_l_2 = (x) => {
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
module.exports.get_M_g_dim_l_2 = get_M_g_dim_l_2


get_M_c_dr_st_l_1 = (x) => {
    return get_M_r_dr_st_l_1(x) + get_M_g_dr_st_l_1(x)
}
module.exports.get_M_c_dr_st_l_1 = get_M_c_dr_st_l_1


get_M_c_dr_lt_l_1 = (x) => {
    return get_M_r_dr_lt_l_1(x) + get_M_g_dr_lt_l_1(x)
}
module.exports.get_M_c_dr_lt_l_1 = get_M_c_dr_lt_l_1

get_M_c_ud_st_l_1 = (x) => {
    return get_M_r_ud_st_l_1(x) + get_M_g_ud_st_l_1(x)
}
module.exports.get_M_c_ud_st_l_1 = get_M_c_ud_st_l_1

get_M_c_ud_lt_l_1 = (x) => {
    return get_M_r_ud_lt_l_1(x) + get_M_g_ud_lt_l_1(x)
}
module.exports.get_M_c_ud_lt_l_1 = get_M_c_ud_lt_l_1

get_M_c_dim_l_1 = (x) => {
    return get_M_r_dim_l_1(x) + get_M_g_dim_l_1(x)
}
module.exports.get_M_c_dim_l_1 = get_M_c_dim_l_1

get_M_c_dr_st_l_2 = (x) => {
    return get_M_r_dr_st_l_2(x) + get_M_g_dr_st_l_2(x)
}
module.exports.get_M_c_dr_st_l_2 = get_M_c_dr_st_l_2

get_M_c_dr_lt_l_2 = (x) => {
    return get_M_r_dr_lt_l_2(x) + get_M_g_dr_lt_l_2(x)
}
module.exports.get_M_c_dr_lt_l_2 = get_M_c_dr_lt_l_2

get_M_c_ud_st_l_2 = (x) => {
    return get_M_r_ud_st_l_2(x) + get_M_g_ud_st_l_2(x)
}
module.exports.get_M_c_ud_st_l_2 = get_M_c_ud_st_l_2

get_M_c_ud_lt_l_2 = (x) => {
    return get_M_r_ud_lt_l_2(x) + get_M_g_ud_lt_l_2(x)
}
module.exports.get_M_c_ud_lt_l_2 = get_M_c_ud_lt_l_2

get_M_c_dim_l_2 = (x) => {
    return get_M_r_dim_l_2(x) + get_M_g_dim_l_2(x)
}
module.exports.get_M_c_dim_l_2 = get_M_c_dim_l_2

get_fn_M_dr_st_l = (x) => {
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
module.exports.get_fn_M_dr_st_l = get_fn_M_dr_st_l

get_fn_M_dr_lt_l = (x) => {
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
module.exports.get_fn_M_dr_lt_l = get_fn_M_dr_lt_l

get_fn_M_ud_st_l = (x) => {
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
module.exports.get_fn_M_ud_st_l = get_fn_M_ud_st_l

get_fn_M_ud_lt_l = (x) => {
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
module.exports.get_fn_M_ud_lt_l = get_fn_M_ud_lt_l

get_fn_M_dim_l = (x) => {
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
module.exports.get_fn_M_dim_l = get_fn_M_dim_l

get_fn_t_bez_l = () => {
    if (column_shape == "rectangular") {
        return Math.abs(-column_length / 2 / 1000 - x) / (column_length / 1000)
    } else {
        return Math.abs(-column_radius / 1000 - x) / (2 * column_radius / 1000)
    }
}
module.exports.get_fn_t_bez_l = get_fn_t_bez_l

module.exports.get_P_bez_0_dr_st_l = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_dr_st_l(-column_length / 2 / 1000)
    } else {
        return get_fn_M_dr_st_l(-column_radius / 1000)
    }
}

module.exports.get_P_bez_3_dr_st_l = () => {
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


module.exports.get_P_bez_0_dr_lt_l = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_dr_lt_l(-column_length / 2 / 1000)
    } else {
        return get_fn_M_dr_lt_l(-column_radius / 1000)
    }
}

module.exports.get_P_bez_3_dr_lt_l = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_dr_lt_l(column_length / 2 / 1000)
    } else {
        return get_fn_M_dr_lt_l(column_radius / 1000)
    }
}

module.exports.get_P_bez_1_dr_lt_l = () => {
    return get_fn_M_dr_lt_l(-0.001)
}

module.exports.get_P_bez_2_dr_lt_l = () => {
    return get_fn_M_dr_lt_l(0.001)
}

module.exports.get_P_bez_0_ud_st_l = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_ud_st_l(-column_length / 2 / 1000)
    } else {
        return get_fn_M_ud_st_l(-column_radius / 1000)
    }
}

module.exports.get_P_bez_3_ud_st_l = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_ud_st_l(column_length / 2 / 1000)
    } else {
        return get_fn_M_ud_st_l(column_radius / 1000)
    }
}

module.exports.get_P_bez_1_ud_st_l = () => {
    return get_fn_M_ud_st_l(-0.001)
}

module.exports.get_P_bez_2_ud_st_l = () => {
    return get_fn_M_ud_st_l(0.001)
}

module.exports.get_P_bez_0_ud_lt_l = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_ud_lt_l(-column_length / 2 / 1000)
    } else {
        return get_fn_M_ud_lt_l(-column_radius / 1000)
    }
}

module.exports.get_P_bez_3_ud_lt_l = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_ud_lt_l(column_length / 2 / 1000)
    } else {
        return get_fn_M_ud_lt_l(column_radius / 1000)
    }
}

module.exports.get_P_bez_1_ud_lt_l = () => {
    return get_fn_M_ud_lt_l(-0.001, m_total_ud_lt_l)
}

module.exports.get_P_bez_2_ud_lt_l = () => {
    return get_fn_M_ud_lt_l(0.001, m_total_ud_lt_l)
}

module.exports.get_P_bez_0_dim_l = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_dim_l(-column_length / 2 / 1000)
    } else {
        return get_fn_M_dim_l(-column_radius / 1000)
    }
}

module.exports.get_P_bez_3_dim_l = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_dim_l(column_length / 2 / 1000)
    } else {
        return get_fn_M_dim_l(column_radius / 1000)
    }
}

module.exports.get_P_bez_1_dim_l = () => {
    return get_fn_M_dim_l(-0.001)
}

module.exports.get_P_bez_2_dim_l = () => {
    return get_fn_M_dim_l(0.001)
}

get_fn_B_dr_st_l = () => {
    if (Math.abs(P_bez_1_dr_st_l - P_bez_2_dr_st_l) < 0.1) {
        //Quadratic Bezier
        return Math.pow(1 - get_fn_t_bez_l(), 2) * P_bez_0_dr_st_l + 2 * (1 - get_fn_t_bez_l()) * get_fn_t_bez_l() * P_bez_2_dr_st_l + Math.pow(get_fn_t_bez_l(), 2) * P_bez_3_dr_st_l
    } else {
        //Cubic Bezier
        return Math.pow(1 - get_fn_t_bez_l(), 3) * P_bez_0_dr_st_l + 3 * Math.pow(1 - get_fn_t_bez_l(), 2) * get_fn_t_bez_l() * P_bez_1_dr_st_l + 3 * (1 - get_fn_t_bez_l()) * Math.pow(get_fn_t_bez_l(), 2) * P_bez_2_dr_st_l + Math.pow(get_fn_t_bez_l(), 3) * P_bez_3_dr_st_l
    }
}
module.exports.get_fn_B_dr_st_l = get_fn_B_dr_st_l

get_fn_B_dr_lt_l = () => {
    if (Math.abs(P_bez_1_dr_lt_l - P_bez_2_dr_lt_l) < 0.1) {
        //Quadratic Bezier
        return Math.pow(1 - get_fn_t_bez_l(), 2) * P_bez_0_dr_lt_l + 2 * (1 - get_fn_t_bez_l()) * get_fn_t_bez_l() * P_bez_2_dr_lt_l + Math.pow(get_fn_t_bez_l(), 2) * P_bez_3_dr_lt_l
    } else {
        //Cubic Bezier
        return Math.pow(1 - get_fn_t_bez_l(), 3) * P_bez_0_dr_lt_l + 3 * Math.pow(1 - get_fn_t_bez_l(), 2) * get_fn_t_bez_l() * P_bez_1_dr_lt_l + 3 * (1 - get_fn_t_bez_l()) * Math.pow(get_fn_t_bez_l(), 2) * P_bez_2_dr_lt_l + Math.pow(get_fn_t_bez_l(), 3) * P_bez_3_dr_lt_l
    }
}
module.exports.get_fn_B_dr_lt_l = get_fn_B_dr_lt_l

get_fn_B_ud_st_l = () => {
    if (Math.abs(P_bez_1_ud_st_l - P_bez_2_ud_st_l) < 0.1) {
        //Quaudatic Bezier
        return Math.pow(1 - get_fn_t_bez_l(), 2) * P_bez_0_ud_st_l + 2 * (1 - get_fn_t_bez_l()) * get_fn_t_bez_l() * P_bez_2_ud_st_l + Math.pow(get_fn_t_bez_l(), 2) * P_bez_3_ud_st_l
    } else {
        //Cubic Bezier
        return Math.pow(1 - get_fn_t_bez_l(), 3) * P_bez_0_ud_st_l + 3 * Math.pow(1 - get_fn_t_bez_l(), 2) * get_fn_t_bez_l() * P_bez_1_ud_st_l + 3 * (1 - get_fn_t_bez_l()) * Math.pow(get_fn_t_bez_l(), 2) * P_bez_2_ud_st_l + Math.pow(get_fn_t_bez_l(), 3) * P_bez_3_ud_st_l
    }
}
module.exports.get_fn_B_ud_st_l = get_fn_B_ud_st_l

get_fn_B_ud_lt_l = () => {
    if (Math.abs(P_bez_1_ud_lt_l - P_bez_2_ud_lt_l) < 0.1) {
        //Quaudatic Bezier
        return Math.pow(1 - get_fn_t_bez_l(), 2) * P_bez_0_ud_lt_l + 2 * (1 - get_fn_t_bez_l()) * get_fn_t_bez_l() * P_bez_2_ud_lt_l + Math.pow(get_fn_t_bez_l(), 2) * P_bez_3_ud_lt_l
    } else {
        //Cubic Bezier
        return Math.pow(1 - get_fn_t_bez_l(), 3) * P_bez_0_ud_lt_l + 3 * Math.pow(1 - get_fn_t_bez_l(), 2) * get_fn_t_bez_l() * P_bez_1_ud_lt_l + 3 * (1 - get_fn_t_bez_l()) * Math.pow(get_fn_t_bez_l(), 2) * P_bez_2_ud_lt_l + Math.pow(get_fn_t_bez_l(), 3) * P_bez_3_ud_lt_l
    }
}
module.exports.get_fn_B_ud_lt_l = get_fn_B_ud_lt_l

get_fn_B_dim_l = () => {
    if (Math.abs(P_bez_1_dim_l - P_bez_2_dim_l) < 0.1) {
        //Quaudatic Bezier
        return Math.pow(1 - get_fn_t_bez_l(), 2) * P_bez_0_dim_l + 2 * (1 - get_fn_t_bez_l()) * get_fn_t_bez_l() * P_bez_2_dim_l + Math.pow(get_fn_t_bez_l(), 2) * P_bez_3_dim_l
    } else {
        //Cubic Bezier
        return Math.pow(1 - get_fn_t_bez_l(), 3) * P_bez_0_dim_l + 3 * Math.pow(1 - get_fn_t_bez_l(), 2) * get_fn_t_bez_l() * P_bez_1_dim_l + 3 * (1 - get_fn_t_bez_l()) * Math.pow(get_fn_t_bez_l(), 2) * P_bez_2_dim_l + Math.pow(get_fn_t_bez_l(), 3) * P_bez_3_dim_l
    }
}
module.exports.get_fn_B_dim_l = get_fn_B_dim_l

module.exports.get_fn_M_dr_st_l_corr = (x) => {
    if (m_total_dr_st_l > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_M_c_dr_st_l_1(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_M_c_dr_st_l_2(-x)
            } else {
                return get_fn_B_dr_st_l()
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_M_c_dr_st_l_1(x)
            } else if (x < -column_radius / 1000) {
                return get_M_c_dr_st_l_2(-x)
            } else {
                return get_fn_B_dr_st_l()
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x < -column_length / 2 / 1000) {
                return get_M_c_dr_st_l_1(-x)
            } else if (x >= column_length / 2 / 1000) {
                return get_M_c_dr_st_l_2(x)
            } else {
                return get_fn_B_dr_st_l()
            }
        } else {
            if (x < -column_radius / 1000) {
                return get_M_c_dr_st_l_1(-x)
            } else if (x >= column_radius / 1000) {
                return get_M_c_dr_st_l_2(x)
            } else {
                return get_fn_B_dr_st_l()
            }
        }
    }
}

module.exports.get_fn_M_dr_lt_l_corr = (x) => {
    if (m_total_dr_lt_l > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_M_c_dr_lt_l_1(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_M_c_dr_lt_l_2(-x)
            } else {
                return get_fn_B_dr_lt_l()
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_M_c_dr_lt_l_1(x)
            } else if (x < -column_radius / 1000) {
                return get_M_c_dr_lt_l_2(-x)
            } else {
                return get_fn_B_dr_lt_l()
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x < -column_length / 2 / 1000) {
                return get_M_c_dr_lt_l_1(-x)
            } else if (x >= column_length / 2 / 1000) {
                return get_M_c_dr_lt_l_2(x)
            } else {
                return get_fn_B_dr_lt_l()
            }
        } else {
            if (x < -column_radius / 1000) {
                return get_M_c_dr_lt_l_1(-x)
            } else if (x >= column_radius / 1000) {
                return get_M_c_dr_lt_l_2(x)
            } else {
                return get_fn_B_dr_lt_l()
            }
        }
    }
}

module.exports.get_fn_M_ud_st_l_corr = (x) => {
    if (m_total_ud_st_l > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_M_c_ud_st_l_1(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_M_c_ud_st_l_2(-x)
            } else {
                return get_fn_B_ud_st_l()
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_M_c_ud_st_l_1(x)
            } else if (x < -column_radius / 1000) {
                return get_M_c_ud_st_l_2(-x)
            } else {
                return get_fn_B_ud_st_l()
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x < -column_length / 2 / 1000) {
                return get_M_c_ud_st_l_1(-x)
            } else if (x >= column_length / 2 / 1000) {
                return get_M_c_ud_st_l_2(x)
            } else {
                return get_fn_B_ud_st_l()
            }
        } else {
            if (x < -column_radius / 1000) {
                return get_M_c_ud_st_l_1(-x)
            } else if (x >= column_radius / 1000) {
                return get_M_c_ud_st_l_2(x)
            } else {
                return get_fn_B_ud_st_l()
            }
        }
    }
}

module.exports.get_fn_M_ud_lt_l_corr = (x) => {
    if (m_total_ud_lt_l > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_M_c_ud_lt_l_1(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_M_c_ud_lt_l_2(-x)
            } else {
                return get_fn_B_ud_lt_l()
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_M_c_ud_lt_l_1(x)
            } else if (x < -column_radius / 1000) {
                return get_M_c_ud_lt_l_2(-x)
            } else {
                return get_fn_B_ud_lt_l()
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x < -column_length / 2 / 1000) {
                return get_M_c_ud_lt_l_1(-x)
            } else if (x >= column_length / 2 / 1000) {
                return get_M_c_ud_lt_l_2(x)
            } else {
                return get_fn_B_ud_lt_l()
            }
        } else {
            if (x < -column_radius / 1000) {
                return get_M_c_ud_lt_l_1(-x)
            } else if (x >= column_radius / 1000) {
                return get_M_c_ud_lt_l_2(x)
            } else {
                return get_fn_B_ud_lt_l()
            }
        }
    }
}

module.exports.get_fn_M_dim_l_corr = (x) => {
    if (m_dim_length > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_M_c_dim_l_1(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_M_c_dim_l_2(-x)
            } else {
                return get_fn_B_dim_l()
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_M_c_dim_l_1(x)
            } else if (x < -column_radius / 1000) {
                return get_M_c_dim_l_2(-x)
            } else {
                return get_fn_B_dim_l()
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x < -column_length / 2 / 1000) {
                return get_M_c_dim_l_1(-x)
            } else if (x >= column_length / 2 / 1000) {
                return get_M_c_dim_l_2(x)
            } else {
                return get_fn_B_dim_l()
            }
        } else {
            if (x < -column_radius / 1000) {
                return get_M_c_dim_l_1(-x)
            } else if (x >= column_radius / 1000) {
                return get_M_c_dim_l_2(x)
            } else {
                return get_fn_B_dim_l()
            }
        }
    }
}

get_V_r_dr_st_l_1 = (x) => {
    if (x <= a_dr_st_l_1) {
        return R_A_dr_st_l_1
    } else {
        return R_A_dr_st_l_1 - w_dr_st_l * (x - a_dr_st_l_1)
    }
}
module.exports.get_V_r_dr_st_l_1 = get_V_r_dr_st_l_1

get_V_r_dr_lt_l_1 = (x) => {
    if (x <= a_dr_lt_l_1) {
        return R_A_dr_lt_l_1
    } else {
        return R_A_dr_lt_l_1 - w_dr_lt_l * (x - a_dr_lt_l_1)
    }
} 
module.exports.get_V_r_dr_lt_l_1 = get_V_r_dr_lt_l_1

get_V_r_ud_st_l_1 = (x) => {
    if (x <= a_ud_st_l_1) {
        return R_A_ud_st_l_1
    } else {
        return R_A_ud_st_l_1 - w_ud_st_l * (x - a_ud_st_l_1)
    }
} 
module.exports.get_V_r_ud_st_l_1 = get_V_r_ud_st_l_1


get_V_r_ud_lt_l_1 = (x) => {
    if (x <= a_ud_lt_l_1) {
        return R_A_ud_lt_l_1
    } else {
        return R_A_ud_lt_l_1 - w_ud_lt_l * (x - a_ud_lt_l_1)
    }
}
module.exports.get_V_r_ud_lt_l_1 = get_V_r_ud_lt_l_1

get_V_r_dim_l_1 = (x) => {
    if (x <= a_dim_l_1) {
        return R_A_dim_l_1
    } else {
        return R_A_dim_l_1 - w_dim_l * (x - a_dim_l_1)
    }
}
module.exports.get_V_r_dim_l_1 = get_V_r_dim_l_1

get_V_r_dr_st_l_2 = (x) => {
    if (x < L_w_dr_st_l_2) {
        return -(R_A_dr_st_l_2 - w_dr_st_l * (x - a_dr_st_l_2))
    } else {
        return 0
    }
}
module.exports.get_V_r_dr_st_l_2 = get_V_r_dr_st_l_2

get_V_r_dr_lt_l_2 = (x) => {
    if (x < L_w_dr_lt_l_2) {
        return -(R_A_dr_lt_l_2 - w_dr_lt_l * (x - a_dr_lt_l_2))
    } else {
        return 0
    }
}
module.exports.get_V_r_dr_lt_l_2 = get_V_r_dr_lt_l_2

get_V_r_ud_st_l_2 = (x) => {
    if (x < L_w_ud_st_l_2) {
        return -(R_A_ud_st_l_2 - w_ud_st_l * (x - a_ud_st_l_2))
    } else {
        return 0
    }
}
module.exports.get_V_r_ud_st_l_2 = get_V_r_ud_st_l_2

get_V_r_ud_lt_l_2 = (x) => {
    if (x < L_w_ud_lt_l_2) {
        return -(R_A_ud_lt_l_2 - w_ud_lt_l * (x - a_ud_lt_l_2))
    } else {
        return 0
    }
}
module.exports.get_V_r_ud_lt_l_2 = get_V_r_ud_lt_l_2

get_V_r_dim_l_2 = (x) => {
    if (x < L_w_dim_l_2) {
        return -(R_A_dim_l_2 - w_dim_l * (x - a_dim_l_2))
    } else {
        return 0
    }
}
module.exports.get_V_r_dim_l_2 = get_V_r_dim_l_2

get_V_g_dr_st_l_1 = (x) => {
    if (m_total_dr_st_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_l * (length / 1000 / 2 - ec_vl_length / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_l * (radius / 1000 - ec_vl_length / 1000 - x))
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_l * (length / 1000 / 2 + ec_vl_length / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_l * (radius / 1000 + ec_vl_length / 1000 - x))
        }
    }
}
module.exports.get_V_g_dr_st_l_1 = get_V_g_dr_st_l_1

get_V_g_dr_lt_l_1 = (x) => {
    if (m_total_dr_lt_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_l * (length / 1000 / 2 - ec_vl_length / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_l * (radius / 1000 - ec_vl_length / 1000 - x))
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_l * (length / 1000 / 2 + ec_vl_length / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_l * (radius / 1000 + ec_vl_length / 1000 - x))
        }
    }
} 
module.exports.get_V_g_dr_lt_l_1 = get_V_g_dr_lt_l_1

get_V_g_ud_st_l_1 = (x) => {
    if (m_total_ud_st_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_l * (length / 1000 / 2 - ec_vl_length / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_l * (radius / 1000 - ec_vl_length / 1000 - x))
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_l * (length / 1000 / 2 + ec_vl_length / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_l * (radius / 1000 + ec_vl_length / 1000 - x))
        }
    }
}
module.exports.get_V_g_ud_st_l_1 = get_V_g_ud_st_l_1

get_V_g_ud_lt_l_1 = (x) => {
    if (m_total_ud_lt_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_l * (length / 1000 / 2 - ec_vl_length / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_l * (radius / 1000 - ec_vl_length / 1000 - x))
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_l * (length / 1000 / 2 + ec_vl_length / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_l * (radius / 1000 + ec_vl_length / 1000 - x))
        }
    }
}
module.exports.get_V_g_ud_lt_l_1 = get_V_g_ud_lt_l_1

get_V_g_dim_l_1 = (x) => {
    if (m_dim_length > 0) {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_l * (length / 1000 / 2 - ec_vl_length / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_l * (radius / 1000 - ec_vl_length / 1000 - x))
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_l * (length / 1000 / 2 + ec_vl_length / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_l * (radius / 1000 + ec_vl_length / 1000 - x))
        }
    }
}
module.exports.get_V_g_dim_l_1 = get_V_g_dim_l_1

get_V_g_dr_st_l_2 = (x) => {
    if (m_total_dr_st_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_l * (length / 1000 / 2 + ec_vl_length / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_l * (radius / 1000 + ec_vl_length / 1000 - x)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_l * (length / 1000 / 2 - ec_vl_length / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_l * (radius / 1000 - ec_vl_length / 1000 - x)
        }
    }
}
module.exports.get_V_g_dr_st_l_2 = get_V_g_dr_st_l_2

get_V_g_dr_lt_l_2 = (x) => {
    if (m_total_dr_lt_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_l * (length / 1000 / 2 + ec_vl_length / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_l * (radius / 1000 + ec_vl_length / 1000 - x)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_l * (length / 1000 / 2 - ec_vl_length / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_l * (radius / 1000 - ec_vl_length / 1000 - x)
        }
    }
}
module.exports.get_V_g_dr_lt_l_2 = get_V_g_dr_lt_l_2

get_V_g_ud_st_l_2 = (x) => {
    if (m_total_ud_st_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_l * (length / 1000 / 2 + ec_vl_length / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_l * (radius / 1000 + ec_vl_length / 1000 - x)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_l * (length / 1000 / 2 - ec_vl_length / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_l * (radius / 1000 - ec_vl_length / 1000 - x)
        }
    }
}
module.exports.get_V_g_ud_st_l_2 = get_V_g_ud_st_l_2

get_V_g_ud_lt_l_2 = (x) => {
    if (m_total_ud_lt_l > 0) {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_l * (length / 1000 / 2 + ec_vl_length / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_l * (radius / 1000 + ec_vl_length / 1000 - x)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_l * (length / 1000 / 2 - ec_vl_length / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_l * (radius / 1000 - ec_vl_length / 1000 - x)
        }
    }
} 
module.exports.get_V_g_ud_lt_l_2 = get_V_g_ud_lt_l_2

get_V_g_dim_l_2 = (x) => {
    if (m_dim_length > 0) {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_l * (length / 1000 / 2 + ec_vl_length / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_l * (radius / 1000 + ec_vl_length / 1000 - x)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_l * (length / 1000 / 2 - ec_vl_length / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_l * (radius / 1000 - ec_vl_length / 1000 - x)
        }
    }
}
module.exports.get_V_g_dim_l_2 = get_V_g_dim_l_2


get_V_c_dr_st_l_1 = (x) => {
    return get_V_r_dr_st_l_1(x) + get_V_g_dr_st_l_1(x)
}
module.exports.get_V_c_dr_st_l_1 = get_V_c_dr_st_l_1

get_V_c_dr_lt_l_1 = (x) => {
    return get_V_r_dr_lt_l_1(x) + get_V_g_dr_lt_l_1(x)
}
module.exports.get_V_c_dr_lt_l_1 = get_V_c_dr_lt_l_1

get_V_c_ud_st_l_1 = (x) => {
    return get_V_r_ud_st_l_1(x) + get_V_g_ud_st_l_1(x)
}
module.exports.get_V_c_ud_st_l_1 = get_V_c_ud_st_l_1

get_V_c_ud_lt_l_1 = (x) => {
    return get_V_r_ud_lt_l_1(x) + get_V_g_ud_lt_l_1(x)
}
module.exports.get_V_c_ud_lt_l_1 = get_V_c_ud_lt_l_1

get_V_c_dim_l_1 = (x) => {
    return get_V_r_dim_l_1(x) + get_V_g_dim_l_1(x)
}
module.exports.get_V_c_dim_l_1 = get_V_c_dim_l_1

get_V_c_dr_st_l_2 = (x) => {
    return get_V_r_dr_st_l_2(x) + get_V_g_dr_st_l_2(x)
}
module.exports.get_V_c_dr_st_l_2 =

get_V_c_dr_lt_l_2 = (x) => {
    return get_V_r_dr_lt_l_2(x) + get_V_g_dr_lt_l_2(x)
}
module.exports.get_V_c_dr_lt_l_2 = get_V_c_dr_lt_l_2

get_V_c_ud_st_l_2 = (x) => {
    return get_V_r_ud_st_l_2(x) + get_V_g_ud_st_l_2(x)
}
module.exports.get_V_c_ud_st_l_2 = get_V_c_ud_st_l_2

get_V_c_ud_lt_l_2 = (x) => {
    return get_V_r_ud_lt_l_2(x) + get_V_g_ud_lt_l_2(x)
}
module.exports.get_V_c_ud_lt_l_2 = get_V_c_ud_lt_l_2

get_V_c_dim_l_2 = (x) => {
    return get_V_r_dim_l_2(x) + get_V_g_dim_l_2(x)
}
module.exports.get_V_c_dim_l_2 = get_V_c_dim_l_2

get_fn_V_dr_st_l = (x) => {
    if (m_total_dr_st_l > 0) {
        if (x >= 0) {
            return get_V_c_dr_st_l_1(x)
        } else {
            return get_V_c_dr_st_l_2(-x)
        }
    } else {
        if (x < 0) {
            return get_V_c_dr_st_l_1(-x)
        } else {
            return get_V_c_dr_st_l_2(x)
        }
    }
}
module.exports.get_fn_V_dr_st_l = get_fn_V_dr_st_l

get_fn_V_dr_lt_l = (x) => {
    if (m_total_dr_lt_l > 0) {
        if (x >= 0) {
            return get_V_c_dr_lt_l_1(x)
        } else {
            return get_V_c_dr_lt_l_2(-x)
        }
    } else {
        if (x < 0) {
            return get_V_c_dr_lt_l_1(-x)
        } else {
            return get_V_c_dr_lt_l_2(x)
        }
    }
}
module.exports.get_fn_V_dr_lt_l = get_fn_V_dr_lt_l

get_fn_V_ud_st_l = (x) => {
    if (m_total_ud_st_l > 0) {
        if (x >= 0) {
            return get_V_c_ud_st_l_1(x)
        } else {
            return get_V_c_ud_st_l_2(-x)
        }
    } else {
        if (x < 0) {
            return get_V_c_ud_st_l_1(-x)
        } else {
            return get_V_c_ud_st_l_2(x)
        }
    }
}
module.exports.get_fn_V_ud_st_l = get_fn_V_ud_st_l

get_fn_V_ud_lt_l = (x) => {
    if (m_total_ud_lt_l > 0) {
        if (x >= 0) {
            return get_V_c_ud_lt_l_1(x)
        } else {
            return get_V_c_ud_lt_l_2(-x)
        }
    } else {
        if (x < 0) {
            return get_V_c_ud_lt_l_1(-x)
        } else {
            return get_V_c_ud_lt_l_2(x)
        }
    }
}
module.exports.get_fn_V_ud_lt_l = get_fn_V_ud_lt_l

get_fn_V_dim_l = (x) => {
    if (m_dim_length > 0) {
        if (x >= 0) {
            return get_V_c_dim_l_1(x)
        } else {
            return get_V_c_dim_l_2(-x)
        }
    } else {
        if (x < 0) {
            return get_V_c_dim_l_1(-x)
        } else {
            return get_V_c_dim_l_2(x)
        }
    }
}
module.exports.get_fn_V_dim_l = get_fn_V_dim_l

module.exports.get_a_V_dr_st_l = () => {
    if (column_shape == "rectangular") {
        return (get_fn_V_dr_st_l(column_length / 2 / 1000) - get_fn_V_dr_st_l(-column_length / 2 / 1000)) / (column_length / 1000)
    } else {
        return (get_fn_V_dr_st_l(column_radius / 1000) - get_fn_V_dr_st_l(-column_radius / 1000)) / (2 * column_radius / 1000)
    }
}

module.exports.get_b_V_dr_st_l = () => {
    if (column_shape == "rectangular") {
        return get_fn_V_dr_st_l(column_length / 2 / 1000) - a_V_dr_st_l * (column_length / 2 / 1000)
    } else {
        return get_fn_V_dr_st_l(column_radius / 1000) - a_V_dr_st_l * (column_radius / 1000)
    }
}

module.exports.get_a_V_dr_lt_l = () => {
if (column_shape == "rectangular") {
        return (get_fn_V_dr_lt_l(column_length / 2 / 1000) - get_fn_V_dr_lt_l(-column_length / 2 / 1000)) / (column_length / 1000)
    } else {
        return (get_fn_V_dr_lt_l(column_radius / 1000) - get_fn_V_dr_lt_l(-column_radius / 1000)) / (2 * column_radius / 1000)
    }
}

module.exports.get_b_V_dr_lt_l = () => {
if (column_shape == "rectangular") {
        return get_fn_V_dr_lt_l(column_length / 2 / 1000) - a_V_dr_lt_l * (column_length / 2 / 1000)
    } else {
        return get_fn_V_dr_lt_l(column_radius / 1000) - a_V_dr_lt_l * (column_radius / 1000)
    }
}

module.exports.get_a_V_ud_st_l = () => {
    if (column_shape == "rectangular") {
        return (get_fn_V_ud_st_l(column_length / 2 / 1000) - get_fn_V_ud_st_l(-column_length / 2 / 1000)) / (column_length / 1000)
    } else {
        return (get_fn_V_ud_st_l(column_radius / 1000) - get_fn_V_ud_st_l(-column_radius / 1000)) / (2 * column_radius / 1000)
    }
}

module.exports.get_b_V_ud_st_l = () => {
    if (column_shape == "rectangular") {
        return get_fn_V_ud_st_l(column_length / 2 / 1000) - a_V_ud_st_l * (column_length / 2 / 1000)
    } else {
        return get_fn_V_ud_st_l(column_radius / 1000) - a_V_ud_st_l * (column_radius / 1000)
    }
}

module.exports.get_a_V_ud_lt_l = () => {
    if (column_shape == "rectangular") {
        return (get_fn_V_ud_lt_l(column_length / 2 / 1000) - get_fn_V_ud_lt_l(-column_length / 2 / 1000)) / (column_length / 1000)
    } else {
        return (get_fn_V_ud_lt_l(column_radius / 1000) - get_fn_V_ud_lt_l(-column_radius / 1000)) / (2 * column_radius / 1000)
    }
}

module.exports.get_b_V_ud_lt_l = () => {
    if (column_shape == "rectangular") {
        return get_fn_V_ud_lt_l(column_length / 2 / 1000) - a_V_ud_lt_l * (column_length / 2 / 1000)
    } else {
        return get_fn_V_ud_lt_l(column_radius / 1000) - a_V_ud_lt_l * (column_radius / 1000)
    }
}

module.exports.get_a_V_dim_l = () => {
    if (column_shape == "rectangular") {
        return (get_fn_V_dim_l(column_length / 2 / 1000) - get_fn_V_dim_l(-column_length / 2 / 1000)) / (column_length / 1000)
    } else {
        return (get_fn_V_dim_l(column_radius / 1000) - get_fn_V_dim_l(-column_radius / 1000)) / (2 * column_radius / 1000)
    }
}

module.exports.get_b_V_dim_l = () => {
    if (column_shape == "rectangular") {
        return get_fn_V_dim_l(column_length / 2 / 1000) - a_V_dim_l * (column_length / 2 / 1000)
    } else {
        return get_fn_V_dim_l(column_radius / 1000) - a_V_dim_l * (column_radius / 1000)
    }
}

get_y_V_dr_st_l = (x) => {
    return a_V_dr_st_l * x + b_V_dr_st_l
}
module.exports.get_y_V_dr_st_l = get_y_V_dr_st_l

get_y_V_dr_lt_l = (x) => {
    return a_V_dr_lt_l * x + b_V_dr_lt_l
}
module.exports.get_y_V_dr_lt_l = get_y_V_dr_lt_l

get_y_V_ud_st_l = (x) => {
    return a_V_ud_st_l * x + b_V_ud_st_l
}
module.exports.get_y_V_ud_st_l = get_y_V_ud_st_l

get_y_V_ud_lt_l = (x) => {
    return a_V_ud_lt_l * x + b_V_ud_lt_l
}
module.exports.get_y_V_ud_lt_l = get_y_V_ud_lt_l

get_y_V_dim_l = (x) => {
    return a_V_dim_l * x + b_V_dim_l
}
module.exports.get_y_V_dim_l = get_y_V_dim_l

get_fn_V_dr_st_l_corr = (x) => {
    if (m_total_dr_st_l > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_V_c_dr_st_l_1(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_V_c_dr_st_l_2(-x)
            } else {
                return get_y_V_dr_st_l(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_dr_st_l_1(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_dr_st_l_2(-x)
            } else {
                return get_y_V_dr_st_l(x)
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_V_c_dr_st_l_2(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_V_c_dr_st_l_1(-x)
            } else {
                return get_y_V_dr_st_l(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_dr_st_l_2(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_dr_st_l_1(-x)
            } else {
                return get_y_V_dr_st_l(x)
            }
        }
    }
}
module.exports.get_fn_V_dr_st_l_corr = get_fn_V_dr_st_l_corr

get_fn_V_dr_lt_l_corr = (x) => {
    if (m_total_dr_lt_l > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_V_c_dr_lt_l_1(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_V_c_dr_lt_l_2(-x)
            } else {
                return get_y_V_dr_lt_l(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_dr_lt_l_1(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_dr_lt_l_2(-x)
            } else {
                return get_y_V_dr_lt_l(x)
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_V_c_dr_lt_l_2(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_V_c_dr_lt_l_1(-x)
            } else {
                return get_y_V_dr_lt_l(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_dr_lt_l_2(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_dr_lt_l_1(-x)
            } else {
                return get_y_V_dr_lt_l(x)
            }
        }
    }
}
module.exports.get_fn_V_dr_lt_l_corr = get_fn_V_dr_lt_l_corr

get_fn_V_ud_st_l_corr = (x) => {
    if (m_total_ud_st_l > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_V_c_ud_st_l_1(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_V_c_ud_st_l_2(-x)
            } else {
                return get_y_V_ud_st_l(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_ud_st_l_1(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_ud_st_l_2(-x)
            } else {
                return get_y_V_ud_st_l(x)
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_V_c_ud_st_l_2(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_V_c_ud_st_l_1(-x)
            } else {
                return get_y_V_ud_st_l(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_ud_st_l_2(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_ud_st_l_1(-x)
            } else {
                return get_y_V_ud_st_l(x)
            }
        }
    }
}
module.exports.get_fn_V_ud_st_l_corr = get_fn_V_ud_st_l_corr

get_fn_V_ud_lt_l_corr = (x) => {
    if (m_total_ud_lt_l > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_V_c_ud_lt_l_1(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_V_c_ud_lt_l_2(-x)
            } else {
                return get_y_V_ud_lt_l(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_ud_lt_l_1(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_ud_lt_l_2(-x)
            } else {
                return get_y_V_ud_lt_l(x)
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_V_c_ud_lt_l_2(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_V_c_ud_lt_l_1(-x)
            } else {
                return get_y_V_ud_lt_l(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_ud_lt_l_2(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_ud_lt_l_1(-x)
            } else {
                return get_y_V_ud_lt_l(x)
            }
        }
    }
}
module.exports.get_fn_V_ud_lt_l_corr = get_fn_V_ud_lt_l_corr

get_fn_V_dim_l_corr = (x) => {
    if (m_dim_length > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_V_c_dim_l_1(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_V_c_dim_l_2(-x)
            } else {
                return get_y_V_dim_l(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_dim_l_1(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_dim_l_2(-x)
            } else {
                return get_y_V_dim_l(x)
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_V_c_dim_l_2(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_V_c_dim_l_1(-x)
            } else {
                return get_y_V_dim_l(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_dim_l_2(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_dim_l_1(-x)
            } else {
                return get_y_V_dim_l(x)
            }
        }
    }
}
module.exports.get_fn_V_dim_l_corr = get_fn_V_dim_l_corr

get_fn_V_dim_l_corr = (x) => {
    if (m_dim_length > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_V_c_dim_l_1(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_V_c_dim_l_2(-x)
            } else {
                return get_y_V_dim_l(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_dim_l_1(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_dim_l_2(-x)
            } else {
                return get_y_V_dim_l(x)
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x >= column_length / 2 / 1000) {
                return get_V_c_dim_l_2(x)
            } else if (x < -column_length / 2 / 1000) {
                return get_V_c_dim_l_1(-x)
            } else {
                return get_y_V_dim_l(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_dim_l_2(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_dim_l_1(-x)
            } else {
                return get_y_V_dim_l(x)
            }
        }
    }
}
module.exports.get_fn_V_dim_l_corr = get_fn_V_dim_l_corr

get_a_dr_st_b_1 = () => {
    if (m_total_dr_st_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_st_b < width / 2 - ec_vl_width) {
                return (width / 2 - ec_vl_width - ef_dr_st_b) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_st_b < radius - ec_vl_width) {
                return (radius - ec_vl_width - ef_dr_st_b) / 1000
            } else {
                return 0
            }
        }
    } else if (m_total_dr_st_b <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_st_b < width / 2 + ec_vl_width) {
                return (width / 2 + ec_vl_width - ef_dr_st_b) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_st_b < radius + ec_vl_width) {
            } else {
                return 0
            }
        }
    }
}
module.exports.get_a_dr_st_b_1 = get_a_dr_st_b_1

get_b_dr_st_b_2 = () => {
    if (m_total_dr_st_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_st_b < width / 2 - ec_vl_width) {
                return (width / 2 + ec_vl_width) / 1000
            } else {
                return (width - ef_dr_st_b) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_st_b < radius - ec_vl_width) {
                return (radius + ec_vl_width) / 1000
            } else {
                return (2 * radius - ef_dr_st_b) / 1000
            }
        }
    } else if (m_total_dr_st_b <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_st_b < width / 2 + ec_vl_width) {
                return (width / 2 - ec_vl_width) / 1000
            } else {
                return (width - ef_dr_st_b) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_st_b < radius + ec_vl_width) {
                return (radius - ec_vl_width) / 1000
            } else {
                return (2 * radius - ef_dr_st_b) / 1000
            }
        }
    }
}
module.exports.get_b_dr_st_b_2 = get_b_dr_st_b_2

get_L_w_dr_st_b_1 = () => {
    if (m_total_dr_st_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_st_b < width / 2 - ec_vl_width) {
                return ef_dr_st_b / 1000
            } else {
                return (width / 2 - ec_vl_width) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_st_b < radius - ec_vl_width) {
                return ef_dr_st_b / 1000
            } else {
                return (radius - ec_vl_width) / 1000
            }
        }
    } else if (m_total_dr_st_b <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_st_b < width / 2 + ec_vl_width) {
                return ef_dr_st_b / 1000
            } else {
                return (width / 2 + ec_vl_width) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_st_b < radius + ec_vl_width) {
                return ef_dr_st_b / 1000
            } else {
                return (radius + ec_vl_width) / 1000
            }
        }
    }
}
module.exports.get_L_w_dr_st_b_1 = get_L_w_dr_st_b_1

get_L_w_dr_st_b_2 = () => {
    if (m_total_dr_st_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return (width / 2 + ec_vl_width) / 1000 - b_dr_st_b_2
        } else if (point_foundation_shape == 'circular') {
            return (radius + ec_vl_width) / 1000 - b_dr_st_b_2
        }
    } else if (m_total_dr_st_b <= 0) {
        if (point_foundation_shape == 'rectangular') {
            return (width / 2 - ec_vl_width) / 1000 - b_dr_st_b_2
        } else if (point_foundation_shape == 'circular') {
            return (radius - ec_vl_width) / 1000 - b_dr_st_b_2
        }
    }
}
module.exports.get_L_w_dr_st_b_2 = get_L_w_dr_st_b_2

get_a_dr_lt_b_1 = () => {
    if (m_total_dr_lt_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_lt_b < width / 2 - ec_vl_width) {
                return (width / 2 - ec_vl_width - ef_dr_lt_b) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_lt_b < radius - ec_vl_width) {
                return (radius - ec_vl_width - ef_dr_lt_b) / 1000
            } else {
                return 0
            }
        }
    } else if (m_total_dr_lt_b <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_lt_b < width / 2 + ec_vl_width) {
                return (width / 2 + ec_vl_width - ef_dr_lt_b) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_lt_b < radius + ec_vl_width) {
                return (radius + ec_vl_width - ef_dr_lt_b) / 1000
            } else {
                return 0
            }
        }
    }
}
module.exports.get_a_dr_lt_b_1 = get_a_dr_lt_b_1

get_b_dr_lt_b_2 = () => {
    if (m_total_dr_lt_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_lt_b < width / 2 - ec_vl_width) {
                return (width / 2 + ec_vl_width) / 1000
            } else {
                return (width - ef_dr_lt_b) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_lt_b < radius - ec_vl_width) {
                return (radius + ec_vl_width) / 1000
            } else {
                return (2 * radius - ef_dr_lt_b) / 1000
            }
        }
    } else if (m_total_dr_lt_b <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_lt_b < width / 2 + ec_vl_width) {
                return (width / 2 - ec_vl_width) / 1000
            } else {
                return (width - ef_dr_lt_b) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_lt_b < radius + ec_vl_width) {
                return (radius - ec_vl_width) / 1000
            } else {
                return (2 * radius - ef_dr_lt_b) / 1000
            }
        }
    }
}
module.exports.get_b_dr_lt_b_2 = get_b_dr_lt_b_2

get_L_w_dr_lt_b_1 = () => {
    if (m_total_dr_lt_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_lt_b < width / 2 - ec_vl_width) {
                return ef_dr_lt_b / 1000
            } else {
                return (width / 2 - ec_vl_width) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_lt_b < radius - ec_vl_width) {
                return ef_dr_lt_b / 1000
            } else {
                return (radius - ec_vl_width) / 1000
            }
        }
    } else if (m_total_dr_lt_b <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dr_lt_b < width / 2 + ec_vl_width) {
                return ef_dr_lt_b / 1000
            } else {
                return (width / 2 + ec_vl_width) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dr_lt_b < radius + ec_vl_width) {
                return ef_dr_lt_b / 1000
            } else {
                return (radius + ec_vl_width) / 1000
            }
        }
    }
}
module.exports.get_L_w_dr_lt_b_1 = get_L_w_dr_lt_b_1

get_L_w_dr_lt_b_2 = () => {
    if (m_total_dr_lt_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return (width / 2 + ec_vl_width) / 1000 - b_dr_lt_b_2
        } else if (point_foundation_shape == 'circular') {
            return (radius + ec_vl_width) / 1000 - b_dr_lt_b_2
        }
    } else if (m_total_dr_lt_b <= 0) {
        if (point_foundation_shape == 'rectangular') {
            return (width / 2 - ec_vl_width) / 1000 - b_dr_lt_b_2
        } else if (point_foundation_shape == 'circular') {
            return (radius - ec_vl_width) / 1000 - b_dr_lt_b_2
        }
    }
}
module.exports.get_L_w_dr_lt_b_2 = get_L_w_dr_lt_b_2

get_a_ud_st_b_1 = () => {
    if (m_total_ud_st_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_st_b < width / 2 - ec_vl_width) {
                return (width / 2 - ec_vl_width - ef_ud_st_b) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_st_b < radius - ec_vl_width) {
                return (radius - ec_vl_width - ef_ud_st_b) / 1000
            } else {
                return 0
            }
        }
    } else if (m_total_ud_st_b <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_st_b < width / 2 + ec_vl_width) {
                return (width / 2 + ec_vl_width - ef_ud_st_b) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_st_b < radius + ec_vl_width) {
                return (radius + ec_vl_width - ef_ud_st_b) / 1000
            } else {
                return 0
            }
        }
    }
}
module.exports.get_a_ud_st_b_1 = get_a_ud_st_b_1

get_b_ud_st_b_2 = () => {
    if (m_total_ud_st_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_st_b < width / 2 - ec_vl_width) {
                return (width / 2 + ec_vl_width) / 1000
            } else {
                return (width - ef_ud_st_b) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_st_b < radius - ec_vl_width) {
                return (radius + ec_vl_width) / 1000
            } else {
                return (2 * radius - ef_ud_st_b) / 1000
            }
        }
    } else if (m_total_ud_st_b <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_st_b < width / 2 + ec_vl_width) {
                return (width / 2 - ec_vl_width) / 1000
            } else {
                return (width - ef_ud_st_b) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_st_b < radius + ec_vl_width) {
                return (radius - ec_vl_width) / 1000
            } else {
                return (2 * radius - ef_ud_st_b) / 1000
            }
        }
    }
}
module.exports.get_b_ud_st_b_2 = get_b_ud_st_b_2

get_L_w_ud_st_b_1 = () => {
    if (m_total_ud_st_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_st_b < width / 2 - ec_vl_width) {
                return ef_ud_st_b / 1000
            } else {
                return (width / 2 - ec_vl_width) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_st_b < radius - ec_vl_width) {
                return ef_ud_st_b / 1000
            } else {
                return (radius - ec_vl_width) / 1000
            }
        }
    } else if (m_total_ud_st_b <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_st_b < width / 2 + ec_vl_width) {
                return ef_ud_st_b / 1000
            } else {
                return (width / 2 + ec_vl_width) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_st_b < radius + ec_vl_width) {
                return ef_ud_st_b / 1000
            } else {
                return (radius + ec_vl_width) / 1000
            }
        }
    }
}
module.exports.get_L_w_ud_st_b_1 = get_L_w_ud_st_b_1

get_L_w_ud_st_b_2 = () => {
    if (m_total_ud_st_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return (width / 2 + ec_vl_width) / 1000 - b_ud_st_b_2
        } else if (point_foundation_shape == 'circular') {
            return (radius + ec_vl_width) / 1000 - b_ud_st_b_2
        }
    } else if (m_total_ud_st_b <= 0) {
        if (point_foundation_shape == 'rectangular') {
            return (width / 2 - ec_vl_width) / 1000 - b_ud_st_b_2
        } else if (point_foundation_shape == 'circular') {
            return (radius - ec_vl_width) / 1000 - b_ud_st_b_2
        }
    }
}
module.exports.get_L_w_ud_st_b_2 = get_L_w_ud_st_b_2

get_a_ud_lt_b_1 = () => {

    if (m_total_ud_lt_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_lt_b < width / 2 - ec_vl_width) {
                return (width / 2 - ec_vl_width - ef_ud_lt_b) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_lt_b < radius - ec_vl_width) {
                return (radius - ec_vl_width - ef_ud_lt_b) / 1000
            } else {
                return 0
            }
        }
    } else if (m_total_ud_lt_b <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_lt_b < width / 2 + ec_vl_width) {
                return (width / 2 + ec_vl_width - ef_ud_lt_b) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_lt_b < radius + ec_vl_width) {
                return (radius + ec_vl_width - ef_ud_lt_b) / 1000
            } else {
                return 0
            }
        }
    }
}
module.exports.get_a_ud_lt_b_1 = get_a_ud_lt_b_1

get_b_ud_lt_b_2 = () => {
    if (m_total_ud_lt_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_lt_b < width / 2 - ec_vl_width) {
                return (width / 2 + ec_vl_width) / 1000
            } else {
                return (width - ef_ud_lt_b) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_lt_b < radius - ec_vl_width) {
                return (radius + ec_vl_width) / 1000
            } else {
                return (2 * radius - ef_ud_lt_b) / 1000
            }
        }
    } else if (m_total_ud_lt_b <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_lt_b < width / 2 + ec_vl_width) {
                return (width / 2 - ec_vl_width) / 1000
            } else {
                return (width - ef_ud_lt_b) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_lt_b < radius + ec_vl_width) {
                return (radius - ec_vl_width) / 1000
            } else {
                return (2 * radius - ef_ud_lt_b) / 1000
            }
        }
    }
}
module.exports.get_b_ud_lt_b_2 = get_b_ud_lt_b_2

get_L_w_ud_lt_b_1 = () => {
    if (m_total_ud_lt_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_lt_b < width / 2 - ec_vl_width) {
                return ef_ud_lt_b / 1000
            } else {
                return (width / 2 - ec_vl_width) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_lt_b < radius - ec_vl_width) {
                return ef_ud_lt_b / 1000
            } else {
                return (radius - ec_vl_width) / 1000
            }
        }
    } else if (m_total_ud_lt_b <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_ud_lt_b < width / 2 + ec_vl_width) {
                return ef_ud_lt_b / 1000
            } else {
                return (width / 2 + ec_vl_width) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_ud_lt_b < radius + ec_vl_width) {
                return ef_ud_lt_b / 1000
            } else {
                return (radius + ec_vl_width) / 1000
            }
        }
    }
}
module.exports.get_L_w_ud_lt_b_1 = get_L_w_ud_lt_b_1

get_L_w_ud_lt_b_2 = () => {
    if (m_total_ud_lt_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return (width / 2 + ec_vl_width) / 1000 - b_ud_lt_b_2
        } else if (point_foundation_shape == 'circular') {
            return (radius + ec_vl_width) / 1000 - b_ud_lt_b_2
        }
    } else if (m_total_ud_lt_b <= 0) {
        if (point_foundation_shape == 'rectangular') {
            return (width / 2 - ec_vl_width) / 1000 - b_ud_lt_b_2
        } else if (point_foundation_shape == 'circular') {
            return (radius - ec_vl_width) / 1000 - b_ud_lt_b_2
        }
    }
}
module.exports.get_L_w_ud_lt_b_2 = get_L_w_ud_lt_b_2

get_a_dim_b_1 = () => {
    if (m_dim_width > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dim_b < width / 2 - ec_vl_width) {
                return (width / 2 - ec_vl_width - ef_dim_b) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dim_b < radius - ec_vl_width) {
                return (radius - ec_vl_width - ef_dim_b) / 1000
            } else {
                return 0
            }
        }
    } else if (m_dim_width <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dim_b < width / 2 + ec_vl_width) {
                return (width / 2 + ec_vl_width - ef_dim_b) / 1000
            } else {
                return 0
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dim_b < radius + ec_vl_width) {
                return (radius + ec_vl_width - ef_dim_b) / 1000
            } else {
                return 0
            }
        }
    }
}
module.exports.get_a_dim_b_1 = get_a_dim_b_1

get_b_dim_b_2 = () => {
    if (m_dim_width > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dim_b < width / 2 - ec_vl_width) {
                return (width / 2 + ec_vl_width) / 1000
            } else {
                return (width - ef_dim_b) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dim_b < radius - ec_vl_width) {
                return (radius + ec_vl_width) / 1000
            } else {
                return (2 * radius - ef_dim_b) / 1000
            }
        }
    } else if (m_dim_width <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dim_b < width / 2 + ec_vl_width) {
                return (width / 2 - ec_vl_width) / 1000
            } else {
                return (width - ef_dim_b) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dim_b < radius + ec_vl_width) {
                return (radius - ec_vl_width) / 1000
            } else {
                return (2 * radius - ef_dim_b) / 1000
            }
        }
    }
}
module.exports.get_b_dim_b_2 = get_b_dim_b_2

get_L_w_dim_b_1 = () => {
    if (m_dim_width > 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dim_b < width / 2 - ec_vl_width) {
                return ef_dim_b / 1000
            } else {
                return (width / 2 - ec_vl_width) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dim_b < radius - ec_vl_width) {
                return ef_dim_b / 1000
            } else {
                return (radius - ec_vl_width) / 1000
            }
        }
    } else if (m_dim_width <= 0) {
        if (point_foundation_shape == 'rectangular') {
            if (ef_dim_b < width / 2 + ec_vl_width) {
                return ef_dim_b / 1000
            } else {
                return (width / 2 + ec_vl_width) / 1000
            }
        } else if (point_foundation_shape == 'circular') {
            if (ef_dim_b < radius + ec_vl_width) {
                return ef_dim_b / 1000
            } else {
                return (radius + ec_vl_width) / 1000
            }
        }
    }
}
module.exports.get_L_w_dim_b_1 = get_L_w_dim_b_1

get_L_w_dim_b_2 = () => {
    if (m_dim_width > 0) {
        if (point_foundation_shape == 'rectangular') {
            return (width / 2 + ec_vl_width) / 1000 - b_dim_b_2
        } else if (point_foundation_shape == 'circular') {
            return (radius + ec_vl_width) / 1000 - b_dim_b_2
        }
    } else if (m_dim_width <= 0) {
        if (point_foundation_shape == 'rectangular') {
            return (width / 2 - ec_vl_width) / 1000 - b_dim_b_2
        } else if (point_foundation_shape == 'circular') {
            return (radius - ec_vl_width) / 1000 - b_dim_b_2
        }
    }
}
module.exports.get_L_w_dim_b_2 = get_L_w_dim_b_2

get_R_A_dr_st_b_1 = () => {
    return w_dr_st_b * L_w_dr_st_b_1
}
module.exports.get_R_A_dr_st_b_1 = get_R_A_dr_st_b_1

get_R_A_dr_lt_b_1 = () => {
    return w_dr_lt_b * L_w_dr_lt_b_1
}
module.exports.get_R_A_dr_lt_b_1 = get_R_A_dr_lt_b_1

get_R_A_ud_st_b_1 = () => {
    return w_ud_st_b * L_w_ud_st_b_1
}
module.exports.get_R_A_ud_st_b_1 = get_R_A_ud_st_b_1

get_R_A_ud_lt_b_1 = () => {
    return w_ud_lt_b * L_w_ud_lt_b_1
}
module.exports.get_R_A_ud_lt_b_1 = get_R_A_ud_lt_b_1

get_R_A_dim_b_1 = () => {
    return w_dim_b * L_w_dim_b_1
}
module.exports.get_R_A_dim_b_1 = get_R_A_dim_b_1

get_R_A_dr_st_b_2 = () => {
    return w_dr_st_b * L_w_dr_st_b_2
}
module.exports.get_R_A_dr_st_b_2 = get_R_A_dr_st_b_2

get_R_A_dr_lt_b_2 = () => {
    return w_dr_lt_b * L_w_dr_lt_b_2
}
module.exports.get_R_A_dr_lt_b_2 = get_R_A_dr_lt_b_2

get_R_A_ud_st_b_2 = () => {
    return w_ud_st_b * L_w_ud_st_b_2
}
module.exports.get_R_A_ud_st_b_2 = get_R_A_ud_st_b_2

get_R_A_ud_lt_b_2 = () => {
    return w_ud_lt_b * L_w_ud_lt_b_2
}
module.exports.get_R_A_ud_lt_b_2 = get_R_A_ud_lt_b_2

get_R_A_dim_b_2 = () => {
    return w_dim_b * L_w_dim_b_2
}
module.exports.get_R_A_dim_b_2 = get_R_A_dim_b_2

get_M_A_dr_st_b_1 = () => {
    return -w_dr_st_b * L_w_dr_st_b_1 * (a_dr_st_b_1 + L_w_dr_st_b_1 / 2)
}
module.exports.get_M_A_dr_st_b_1 = get_M_A_dr_st_b_1

get_M_A_dr_lt_b_1 = () => {
    return -w_dr_lt_b * L_w_dr_lt_b_1 * (a_dr_lt_b_1 + L_w_dr_lt_b_1 / 2)
}
module.exports.get_M_A_dr_lt_b_1 = get_M_A_dr_lt_b_1

get_M_A_ud_st_b_1 = () => {
    return -w_ud_st_b * L_w_ud_st_b_1 * (a_ud_st_b_1 + L_w_ud_st_b_1 / 2)
}
module.exports.get_M_A_ud_st_b_1 = get_M_A_ud_st_b_1

get_M_A_ud_lt_b_1 = () => {
    return -w_ud_lt_b * L_w_ud_lt_b_1 * (a_ud_lt_b_1 + L_w_ud_lt_b_1 / 2)
}
module.exports.get_M_A_ud_lt_b_1 = get_M_A_ud_lt_b_1

get_M_A_dim_b_1 = () => {
    return -w_dim_b * L_w_dim_b_1 * (a_dim_b_1 + L_w_dim_b_1 / 2)
}
module.exports.get_M_A_dim_b_1 = get_M_A_dim_b_1

get_M_A_dr_st_b_2 = () => {
    return -w_dr_st_b * L_w_dr_st_b_2 * (a_dr_st_b_2 + L_w_dr_st_b_2 / 2)
}
module.exports.get_M_A_dr_st_b_2 = get_M_A_dr_st_b_2

get_M_A_dr_lt_b_2 = () => {
    return -w_dr_lt_b * L_w_dr_lt_b_2 * (a_dr_lt_b_2 + L_w_dr_lt_b_2 / 2)
}
module.exports.get_M_A_dr_lt_b_2 = get_M_A_dr_lt_b_2

get_M_A_ud_st_b_2 = () => {
    return -w_ud_st_b * L_w_ud_st_b_2 * (a_ud_st_b_2 + L_w_ud_st_b_2 / 2)
}
module.exports.get_M_A_ud_st_b_2 = get_M_A_ud_st_b_2

get_M_A_ud_lt_b_2 = () => {
    return -w_ud_lt_b * L_w_ud_lt_b_2 * (a_ud_lt_b_2 + L_w_ud_lt_b_2 / 2)
}
module.exports.get_M_A_ud_lt_b_2 = get_M_A_ud_lt_b_2

get_M_A_dim_b_2 = () => {
    return -w_dim_b * L_w_dim_b_2 * (a_dim_b_2 + L_w_dim_b_2 / 2)
}
module.exports.get_M_A_dim_b_2 = get_M_A_dim_b_2

get_M_r_dr_st_b_1 = (x) => {
    if (x <= a_dr_st_b_1) {
        return R_A_dr_st_b_1 * x + M_A_dr_st_b_1
    } else if (x > a_dr_st_b_1) {
        return R_A_dr_st_b_1 * x + M_A_dr_st_b_1 - w_dr_st_b * Math.pow(x - a_dr_st_b_1, 2) / 2
    }
}
module.exports.get_M_r_dr_st_b_1 = get_M_r_dr_st_b_1

get_M_r_dr_lt_b_1 = (x) => {
    if (x <= a_dr_lt_b_1) {
        return R_A_dr_lt_b_1 * x + M_A_dr_lt_b_1
    } else if (x > a_dr_lt_b_1) {
        return R_A_dr_lt_b_1 * x + M_A_dr_lt_b_1 - w_dr_lt_b * Math.pow(x - a_dr_lt_b_1, 2) / 2
    }
}
module.exports.get_M_r_dr_lt_b_1 = get_M_r_dr_lt_b_1

get_M_r_ud_st_b_1 = (x) => {
    if (x <= a_ud_st_b_1) {
        return R_A_ud_st_b_1 * x + M_A_ud_st_b_1
    } else if (x > a_ud_st_b_1) {
        return R_A_ud_st_b_1 * x + M_A_ud_st_b_1 - w_ud_st_b * Math.pow(x - a_ud_st_b_1, 2) / 2
    }
}
module.exports.get_M_r_ud_st_b_1 = get_M_r_ud_st_b_1

get_M_r_ud_lt_b_1 = (x) => {
    if (x <= a_ud_lt_b_1) {
        return R_A_ud_lt_b_1 * x + M_A_ud_lt_b_1
    } else if (x > a_ud_lt_b_1) {
        return R_A_ud_lt_b_1 * x + M_A_ud_lt_b_1 - w_ud_lt_b * Math.pow(x - a_ud_lt_b_1, 2) / 2
    }
}
module.exports.get_M_r_ud_lt_b_1 = get_M_r_ud_lt_b_1

get_M_r_dim_b_1 = (x) => {
    if (x <= a_dim_b_1) {
        return R_A_dim_b_1 * x + M_A_dim_b_1
    } else if (x > a_dim_b_1) {
        return R_A_dim_b_1 * x + M_A_dim_b_1 - w_dim_b * Math.pow(x - a_dim_b_1, 2) / 2
    }
}
module.exports.get_M_r_dim_b_1 = get_M_r_dim_b_1

get_M_r_dr_st_b_2 = (x) => {
    if (x < L_w_dr_st_b_2) {
        return R_A_dr_st_b_2 * x + M_A_dr_st_b_2 - w_dr_st_b * Math.pow(x - a_dr_st_b_2, 2) / 2
    } else if (x >= L_w_dr_st_b_2) {
        return 0
    }
}
module.exports.get_M_r_dr_st_b_2 = get_M_r_dr_st_b_2

get_M_r_dr_lt_b_2 = (x) => {
    if (x < L_w_dr_lt_b_2) {
        return R_A_dr_lt_b_2 * x + M_A_dr_lt_b_2 - w_dr_lt_b * Math.pow(x - a_dr_lt_b_2, 2) / 2
    } else if (x >= L_w_dr_lt_b_2) {
        return 0
    }
}
module.exports.get_M_r_dr_lt_b_2 = get_M_r_dr_lt_b_2

get_M_r_ud_st_b_2 = (z) => {
    if (x < L_w_ud_st_b_2) {
        return R_A_ud_st_b_2 * x + M_A_ud_st_b_2 - w_ud_st_b * Math.pow(x - a_ud_st_b_2, 2) / 2
    } else if (x >= L_w_ud_st_b_2) {
        return 0
    }
}
module.exports.get_M_r_ud_st_b_2 = get_M_r_ud_st_b_2

get_M_r_ud_lt_b_2 = (x) => {
    if (x < L_w_ud_lt_b_2) {
        return R_A_ud_lt_b_2 * x + M_A_ud_lt_b_2 - w_ud_lt_b * Math.pow(x - a_ud_lt_b_2, 2) / 2
    } else if (x >= L_w_ud_lt_b_2) {
        return 0
    }
}
module.exports.get_M_r_ud_lt_b_2 = get_M_r_ud_lt_b_2

get_M_r_dim_b_2 = (x) => {
    if (x < L_w_dim_b_2) {
        return R_A_dim_b_2 * x + M_A_dim_b_2 - w_dim_b * Math.pow(x - a_dim_b_2, 2) / 2
    } else if (x >= L_w_dim_b_2) {
        return 0
    }
}
module.exports.get_M_r_dim_b_2 = get_M_r_dim_b_2

get_M_g_dr_st_b_1 = (x) => {
    if (m_total_dr_st_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 - ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 - ec_vl_width / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 + ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 + ec_vl_width / 1000 - x, 2)
        }
    }
}
module.exports.get_M_g_dr_st_b_1 = get_M_g_dr_st_b_1

get_M_g_dr_lt_b_1 = (x) => {
    if (m_total_dr_lt_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 - ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 - ec_vl_width / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 + ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 + ec_vl_width / 1000 - x, 2)
        }
    }
}
module.exports.get_M_g_dr_lt_b_1 = get_M_g_dr_lt_b_1

get_M_g_ud_st_b_1 = (x) => {
    if (m_total_ud_st_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 - ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 - ec_vl_width / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 + ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 + ec_vl_width / 1000 - x, 2)
        }
    }
}
module.exports.get_M_g_ud_st_b_1 = get_M_g_ud_st_b_1

get_M_g_ud_lt_b_1 = (x) => {
    if (m_total_ud_lt_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 - ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 - ec_vl_width / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 + ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 + ec_vl_width / 1000 - x, 2)
        }
    }
}
module.exports.get_M_g_ud_lt_b_1 = get_M_g_ud_lt_b_1

get_M_g_dim_b_1 = (x) => {
    if (m_dim_width > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 - ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 - ec_vl_width / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 + ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 + ec_vl_width / 1000 - x, 2)
        }
    }
}
module.exports.get_M_g_dim_b_1 = get_M_g_dim_b_1

get_M_g_dr_st_b_2 = (x) => {
    if (m_total_dr_st_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 + ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 + ec_vl_width / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 - ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 - ec_vl_width / 1000 - x, 2)
        }
    }
}
module.exports.get_M_g_dr_st_b_2 = get_M_g_dr_st_b_2

get_M_g_dr_lt_b_2 = (x) => {
    if (m_total_dr_lt_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 + ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 + ec_vl_width / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 - ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 - ec_vl_width / 1000 - x, 2)
        }
    }
}
module.exports.get_M_g_dr_lt_b_2 = get_M_g_dr_lt_b_2

get_M_g_ud_st_b_2 = (x) => {
    if (m_total_ud_st_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 + ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 + ec_vl_width / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 - ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 - ec_vl_width / 1000 - x, 2)
        }
    }
}
module.exports.get_M_g_ud_st_b_2 = get_M_g_ud_st_b_2

get_M_g_ud_lt_b_2 = (x) => {
    if (m_total_ud_lt_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 + ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 + ec_vl_width / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 - ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 - ec_vl_width / 1000 - x, 2)
        }
    }
}
module.exports.get_M_g_ud_lt_b_2 = get_M_g_ud_lt_b_2


get_M_g_dim_b_2 = (x) => {
    if (m_dim_width > 0) {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 + ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 + ec_vl_width / 1000 - x, 2)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return 1 / 2 * w_sw_b * Math.pow(width / 1000 / 2 - ec_vl_width / 1000 - x, 2)
        } else if (point_foundation_shape == 'circular') {
            return 1 / 2 * w_sw_b * Math.pow(radius / 1000 - ec_vl_width / 1000 - x, 2)
        }
    }
}
module.exports.get_M_g_dim_b_2 = get_M_g_dim_b_2

get_M_c_dr_st_b_1 = (x) => {
    return get_M_r_dr_st_b_1(x) + get_M_g_dr_st_b_1(x)
}
module.exports.get_M_c_dr_st_b_1 = get_M_c_dr_st_b_1

get_M_c_dr_lt_b_1 = (x) => {
    return get_M_r_dr_lt_b_1(x) + get_M_g_dr_lt_b_1(x)
}
module.exports.get_M_c_dr_lt_b_1 = get_M_c_dr_lt_b_1

get_M_c_ud_st_b_1 = (x) => {
    return get_M_r_ud_st_b_1(x) + get_M_g_ud_st_b_1(x)
}
module.exports.get_M_c_ud_st_b_1 = get_M_c_ud_st_b_1

get_M_c_ud_lt_b_1 = (x) => {
    return get_M_r_ud_lt_b_1(x) + get_M_g_ud_lt_b_1(x)
}
module.exports.get_M_c_ud_lt_b_1 = get_M_c_ud_lt_b_1

get_M_c_dim_b_1 = (x) => {
    return get_M_r_dim_b_1(x) + get_M_g_dim_b_1(x)
}
module.exports.get_M_c_dim_b_1 = get_M_c_dim_b_1

get_M_c_dr_st_b_2 = (x) => {
    return get_M_r_dr_st_b_2(x) + get_M_g_dr_st_b_2(x)
}
module.exports.get_M_c_dr_st_b_2 = get_M_c_dr_st_b_2

get_M_c_dr_lt_b_2 = (x) => {
    return get_M_r_dr_lt_b_2(x) + get_M_g_dr_lt_b_2(x)
}
module.exports.get_M_c_dr_lt_b_2 = get_M_c_dr_lt_b_2

get_M_c_ud_st_b_2 = (x) => {
    return get_M_r_ud_st_b_2(x) + get_M_g_ud_st_b_2(x)
}
module.exports.get_M_c_ud_st_b_2 = get_M_c_ud_st_b_2

get_M_c_ud_lt_b_2 = (x) => {
    return get_M_r_ud_lt_b_2(x) + get_M_g_ud_lt_b_2(x)
}
module.exports.get_M_c_ud_lt_b_2 = get_M_c_ud_lt_b_2

get_M_c_dim_b_2 = (x) => {
    return get_M_r_dim_b_2(x) + get_M_g_dim_b_2(x)
}
module.exports.get_M_c_dim_b_2 = get_M_c_dim_b_2

get_fn_M_dr_st_b = (x) => {
    if (m_total_dr_st_b > 0) {
        if (x >= 0) {
            return get_M_c_dr_st_b_1(x)
        } else {
            return get_M_c_dr_st_b_2(-x)
        }
    } else {
        if (x < 0) {
            return get_M_c_dr_st_b_1(-x)
        } else {
            return get_M_c_dr_st_b_2(x)
        }
    }
}
module.exports.get_fn_M_dr_st_b = get_fn_M_dr_st_b

get_fn_M_dr_lt_b = (x) => {
    if (m_total_dr_lt_b > 0) {
        if (x >= 0) {
            return get_M_c_dr_lt_b_1(x)
        } else {
            return get_M_c_dr_lt_b_2(-x)
        }
    } else {
        if (x < 0) {
            return get_M_c_dr_lt_b_1(-x)
        } else {
            return get_M_c_dr_lt_b_2(x)
        }
    }
}
module.exports.get_fn_M_dr_lt_b = get_fn_M_dr_lt_b

get_fn_M_ud_st_b = (x) => {
    if (m_total_ud_st_b > 0) {
        if (x >= 0) {
            return get_M_c_ud_st_b_1(x)
        } else {
            return get_M_c_ud_st_b_2(-x)
        }
    } else {
        if (x < 0) {
            return get_M_c_ud_st_b_1(-x)
        } else {
            return get_M_c_ud_st_b_2(x)
        }
    }
}
module.exports.get_fn_M_ud_st_b = get_fn_M_ud_st_b

get_fn_M_ud_lt_b = (x) => {
    if (m_total_ud_lt_b > 0) {
        if (x >= 0) {
            return get_M_c_ud_lt_b_1(x)
        } else {
            return get_M_c_ud_lt_b_2(-x)
        }
    } else {
        if (x < 0) {
            return get_M_c_ud_lt_b_1(-x)
        } else {
            return get_M_c_ud_lt_b_2(x)
        }
    }
}
module.exports.get_fn_M_ud_lt_b = get_fn_M_ud_lt_b

get_fn_M_dim_b = (x) => {
    if (m_dim_width > 0) {
        if (x >= 0) {
            return get_M_c_dim_b_1(x)
        } else {
            return get_M_c_dim_b_2(-x)
        }
    } else {
        if (x < 0) {
            return get_M_c_dim_b_1(-x)
        } else {
            return get_M_c_dim_b_2(x)
        }
    }
}
module.exports.get_fn_M_dim_b = get_fn_M_dim_b

get_fn_t_bez_b = (x) => {
    if (column_shape == "rectangular") {
        return Math.abs(-column_width / 2 / 1000 - x) / (column_width / 1000)
    } else {
        return Math.abs(-column_radius / 1000 - x) / (2 * column_radius / 1000)
    }
}
module.exports.get_fn_t_bez_b = get_fn_t_bez_b

get_P_bez_0_dr_st_b = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_dr_st_b(-column_width / 2 / 1000)
    } else {
        return get_fn_M_dr_st_b(-column_radius / 1000)
    }
}
module.exports.get_P_bez_0_dr_st_b = get_P_bez_0_dr_st_b

get_P_bez_3_dr_st_b = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_dr_st_b(column_width / 2 / 1000)
    } else {
        return get_fn_M_dr_st_b(column_radius / 1000)
    }
}
module.exports.get_P_bez_3_dr_st_b = get_P_bez_3_dr_st_b

get_P_bez_1_dr_st_b = () => {
    return get_fn_M_dr_st_b(-0.001)
}
module.exports.get_P_bez_1_dr_st_b = get_P_bez_1_dr_st_b

get_P_bez_2_dr_st_b = () => {
    return get_fn_M_dr_st_b(0.001)
}
module.exports.get_P_bez_2_dr_st_b = get_P_bez_2_dr_st_b

get_P_bez_0_dr_lt_b = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_dr_lt_b(-column_width / 2 / 1000)
    } else {
        return get_fn_M_dr_lt_b(-column_radius / 1000)
    }
}
module.exports.get_P_bez_0_dr_lt_b = get_P_bez_0_dr_lt_b

get_P_bez_3_dr_lt_b = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_dr_lt_b(column_width / 2 / 1000)
    } else {
        return get_fn_M_dr_lt_b(column_radius / 1000)
    }
}
module.exports.get_P_bez_3_dr_lt_b = get_P_bez_3_dr_lt_b

get_P_bez_1_dr_lt_b = () => {
    return get_fn_M_dr_lt_b(-0.001)
}
module.exports.get_P_bez_1_dr_lt_b = get_P_bez_1_dr_lt_b

get_P_bez_2_dr_lt_b = () => {
    return get_fn_M_dr_lt_b(0.001)
}
module.exports.get_P_bez_2_dr_lt_b = get_P_bez_2_dr_lt_b

get_P_bez_0_ud_st_b = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_ud_st_b(-column_width / 2 / 1000)
    } else {
        return get_fn_M_ud_st_b(-column_radius / 1000)
    }
}
module.exports.get_P_bez_0_ud_st_b = get_P_bez_0_ud_st_b

get_P_bez_3_ud_st_b = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_ud_st_b(column_width / 2 / 1000)
    } else {
        return get_fn_M_ud_st_b(column_radius / 1000)
    }
}
module.exports.get_P_bez_3_ud_st_b = get_P_bez_3_ud_st_b

get_P_bez_1_ud_st_b = () => {
    return get_fn_M_ud_st_b(-0.001)
}
module.exports.get_P_bez_1_ud_st_b = get_P_bez_1_ud_st_b

get_P_bez_2_ud_st_b = () => {
    return get_fn_M_ud_st_b(0.001)
}
module.exports.get_P_bez_2_ud_st_b = get_P_bez_2_ud_st_b


get_P_bez_0_ud_lt_b = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_ud_lt_b(-column_width / 2 / 1000)
    } else {
        return get_fn_M_ud_lt_b(-column_radius / 1000)
    }
}
module.exports.get_P_bez_0_ud_lt_b = get_P_bez_0_ud_lt_b

get_P_bez_3_ud_lt_b = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_ud_lt_b(column_width / 2 / 1000)
    } else {
        return get_fn_M_ud_lt_b(column_radius / 1000)
    }
}
module.exports.get_P_bez_3_ud_lt_b = get_P_bez_3_ud_lt_b

get_P_bez_1_ud_lt_b = () => {
    return get_fn_M_ud_lt_b(-0.001)
}
module.exports.get_P_bez_1_ud_lt_b = get_P_bez_1_ud_lt_b

get_P_bez_2_ud_lt_b = () => {
    return get_fn_M_ud_lt_b(0.001)
}
module.exports.get_P_bez_2_ud_lt_b = get_P_bez_2_ud_lt_b

get_P_bez_0_dim_b = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_dim_b(-column_width / 2 / 1000)
    } else {
        return get_fn_M_dim_b(-column_radius / 1000)
    }
}
module.exports.get_P_bez_0_dim_b = get_P_bez_0_dim_b

get_P_bez_3_dim_b = () => {
    if (column_shape == "rectangular") {
        return get_fn_M_dim_b(column_width / 2 / 1000)
    } else {
        return get_fn_M_dim_b(column_radius / 1000)
    }
}
module.exports.get_P_bez_3_dim_b = get_P_bez_3_dim_b

get_P_bez_1_dim_b = () => {
    return get_fn_M_dim_b(-0.001)
}
module.exports.get_P_bez_1_dim_b = get_P_bez_1_dim_b

get_P_bez_2_dim_b = () => {
    return get_fn_M_dim_b(0.001)
}
module.exports.get_P_bez_2_dim_b = get_P_bez_2_dim_b

get_fn_B_dr_st_b = (x) => {
    if (Math.abs(P_bez_1_dr_st_b - P_bez_2_dr_st_b) < 0.1) {
        //Quadratic Bezier
        return Math.pow(1 - get_fn_t_bez_b(x), 2) * P_bez_0_dr_st_b + 2 * (1 - get_fn_t_bez_b(x)) * get_fn_t_bez_b(x) * P_bez_2_dr_st_b + Math.pow(get_fn_t_bez_b(x), 2) * P_bez_3_dr_st_b
    } else {
        //Cubic Bezier
        return Math.pow(1 - get_fn_t_bez_b(x), 3) * P_bez_0_dr_st_b + 3 * Math.pow(1 - get_fn_t_bez_b(x), 2) * get_fn_t_bez_b(x) * P_bez_1_dr_st_b + 3 * (1 - get_fn_t_bez_b(x)) * Math.pow(get_fn_t_bez_b(x), 2) * P_bez_2_dr_st_b + Math.pow(get_fn_t_bez_b(x), 3) * P_bez_3_dr_st_b
    }
}
module.exports.get_fn_B_dr_st_b = get_fn_B_dr_st_b

get_fn_B_dr_lt_b = (x) => {
    if (Math.abs(P_bez_1_dr_lt_b - P_bez_2_dr_lt_b) < 0.1) {
        //Quadratic Bezier
        return Math.pow(1 - get_fn_t_bez_b(x), 2) * P_bez_0_dr_lt_b + 2 * (1 - get_fn_t_bez_b(x)) * get_fn_t_bez_b(x) * P_bez_2_dr_lt_b + Math.pow(get_fn_t_bez_b(x), 2) * P_bez_3_dr_lt_b
    } else {
        //Cubic Bezier
        return Math.pow(1 - get_fn_t_bez_b(x), 3) * P_bez_0_dr_lt_b + 3 * Math.pow(1 - get_fn_t_bez_b(x), 2) * get_fn_t_bez_b(x) * P_bez_1_dr_lt_b + 3 * (1 - get_fn_t_bez_b(x)) * Math.pow(get_fn_t_bez_b(x), 2) * P_bez_2_dr_lt_b + Math.pow(get_fn_t_bez_b(x), 3) * P_bez_3_dr_lt_b
    }
}
module.exports.get_fn_B_dr_lt_b = get_fn_B_dr_lt_b

get_fn_B_ud_st_b = (x) => {
    if (Math.abs(P_bez_1_ud_st_b - P_bez_2_ud_st_b) < 0.1) {
        //Quaudatic Bezier
        return Math.pow(1 - get_fn_t_bez_b(x), 2) * P_bez_0_ud_st_b + 2 * (1 - get_fn_t_bez_b(x)) * get_fn_t_bez_b(x) * P_bez_2_ud_st_b + Math.pow(get_fn_t_bez_b(x), 2) * P_bez_3_ud_st_b
    } else {
        //Cubic Bezier
        return Math.pow(1 - get_fn_t_bez_b(x), 3) * P_bez_0_ud_st_b + 3 * Math.pow(1 - get_fn_t_bez_b(x), 2) * get_fn_t_bez_b(x) * P_bez_1_ud_st_b + 3 * (1 - get_fn_t_bez_b(x)) * Math.pow(get_fn_t_bez_b(x), 2) * P_bez_2_ud_st_b + Math.pow(get_fn_t_bez_b(x), 3) * P_bez_3_ud_st_b
    }
}
module.exports.get_fn_B_ud_st_b = get_fn_B_ud_st_b

get_fn_B_ud_lt_b = (x) => {
    if (Math.abs(P_bez_1_ud_lt_b - P_bez_2_ud_lt_b) < 0.1) {
        //Quaudatic Bezier
        return Math.pow(1 - get_fn_t_bez_b(x), 2) * P_bez_0_ud_lt_b + 2 * (1 - get_fn_t_bez_b(x)) * get_fn_t_bez_b(x) * P_bez_2_ud_lt_b + Math.pow(get_fn_t_bez_b(x), 2) * P_bez_3_ud_lt_b
    } else {
        //Cubic Bezier
        return Math.pow(1 - get_fn_t_bez_b(x), 3) * P_bez_0_ud_lt_b + 3 * Math.pow(1 - get_fn_t_bez_b(x), 2) * get_fn_t_bez_b(x) * P_bez_1_ud_lt_b + 3 * (1 - get_fn_t_bez_b(x)) * Math.pow(get_fn_t_bez_b(x), 2) * P_bez_2_ud_lt_b + Math.pow(get_fn_t_bez_b(x), 3) * P_bez_3_ud_lt_b
    }
}
module.exports.get_fn_B_ud_lt_b = get_fn_B_ud_lt_b

get_fn_B_dim_b = (x) => {
    if (Math.abs(P_bez_1_dim_b - P_bez_2_dim_b) < 0.1) {
        //Quaudatic Bezier
        return Math.pow(1 - get_fn_t_bez_b(x), 2) * P_bez_0_dim_b + 2 * (1 - get_fn_t_bez_b(x)) * get_fn_t_bez_b(x) * P_bez_2_dim_b + Math.pow(get_fn_t_bez_b(x), 2) * P_bez_3_dim_b
    } else {
        //Cubic Bezier
        return Math.pow(1 - get_fn_t_bez_b(x), 3) * P_bez_0_dim_b + 3 * Math.pow(1 - get_fn_t_bez_b(x), 2) * get_fn_t_bez_b(x) * P_bez_1_dim_b + 3 * (1 - get_fn_t_bez_b(x)) * Math.pow(get_fn_t_bez_b(x), 2) * P_bez_2_dim_b + Math.pow(get_fn_t_bez_b(x), 3) * P_bez_3_dim_b
    }
}
module.exports.get_fn_B_dim_b = get_fn_B_dim_b

get_fn_M_dr_st_b_corr = (x) => {
    if (m_total_dr_st_b > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_width / 2 / 1000) {
                return get_M_c_dr_st_b_1(x)
            } else if (x < -column_width / 2 / 1000) {
                return get_M_c_dr_st_b_2(-x)
            } else {
                return get_fn_B_dr_st_b(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_M_c_dr_st_b_1(x)
            } else if (x < -column_radius / 1000) {
                return get_M_c_dr_st_b_2(-x)
            } else {
                return get_fn_B_dr_st_b(x)
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x < -column_width / 2 / 1000) {
                return get_M_c_dr_st_b_1(-x)
            } else if (x >= column_width / 2 / 1000) {
                return get_M_c_dr_st_b_2(x)
            } else {
                return get_fn_B_dr_st_b(x)
            }
        } else {
            if (x < -column_radius / 1000) {
                return get_M_c_dr_st_b_1(-x)
            } else if (x >= column_radius / 1000) {
                return get_M_c_dr_st_b_2(x)
            } else {
                return get_fn_B_dr_st_b(x)
            }
        }
    }
}
module.exports.get_fn_M_dr_st_b_corr = get_fn_M_dr_st_b_corr

get_fn_M_dr_lt_b_corr = (x) => {
    if (m_total_dr_st_b > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_width / 2 / 1000) {
                return get_M_c_dr_lt_b_1(x)
            } else if (x < -column_width / 2 / 1000) {
                return get_M_c_dr_lt_b_2(-x)
            } else {
                return get_fn_B_dr_lt_b(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_M_c_dr_lt_b_1(x)
            } else if (x < -column_radius / 1000) {
                return get_M_c_dr_lt_b_2(-x)
            } else {
                return get_fn_B_dr_lt_b(x)
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x < -column_width / 2 / 1000) {
                return get_M_c_dr_lt_b_1(-x)
            } else if (x >= column_width / 2 / 1000) {
                return get_M_c_dr_lt_b_2(x)
            } else {
                return get_fn_B_dr_lt_b(x)
            }
        } else {
            if (x < -column_radius / 1000) {
                return get_M_c_dr_lt_b_1(-x)
            } else if (x >= column_radius / 1000) {
                return get_M_c_dr_lt_b_2(x)
            } else {
                return get_fn_B_dr_lt_b(x)
            }
        }
    }
}
module.exports.get_fn_M_dr_lt_b_corr = get_fn_M_dr_lt_b_corr

get_fn_M_ud_st_b_corr = (x) => {
    if (m_total_ud_st_b > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_width / 2 / 1000) {
                return get_M_c_ud_st_b_1(x)
            } else if (x < -column_width / 2 / 1000) {
                return get_M_c_ud_st_b_2(-x)
            } else {
                return get_fn_B_ud_st_b(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_M_c_ud_st_b_1(x)
            } else if (x < -column_radius / 1000) {
                return get_M_c_ud_st_b_2(-x)
            } else {
                return get_fn_B_ud_st_b(x)
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x < -column_width / 2 / 1000) {
                return get_M_c_ud_st_b_1(-x)
            } else if (x >= column_width / 2 / 1000) {
                return get_M_c_ud_st_b_2(x)
            } else {
                return get_fn_B_ud_st_b(x)
            }
        } else {
            if (x < -column_radius / 1000) {
                return get_M_c_ud_st_b_1(-x)
            } else if (x >= column_radius / 1000) {
                return get_M_c_ud_st_b_2(x)
            } else {
                return get_fn_B_ud_st_b(x)
            }
        }
    }
}
module.exports.get_fn_M_ud_st_b_corr = get_fn_M_ud_st_b_corr

get_fn_M_ud_lt_b_corr = (x) => {
    if (m_total_ud_lt_b > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_width / 2 / 1000) {
                return get_M_c_ud_lt_b_1(x)
            } else if (x < -column_width / 2 / 1000) {
                return get_M_c_ud_lt_b_2(-x)
            } else {
                return get_fn_B_ud_lt_b(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_M_c_ud_lt_b_1(x)
            } else if (x < -column_radius / 1000) {
                return get_M_c_ud_lt_b_2(-x)
            } else {
                return get_fn_B_ud_lt_b(x)
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x < -column_width / 2 / 1000) {
                return get_M_c_ud_lt_b_1(-x)
            } else if (x >= column_width / 2 / 1000) {
                return get_M_c_ud_lt_b_2(x)
            } else {
                return get_fn_B_ud_lt_b(x)
            }
        } else {
            if (x < -column_radius / 1000) {
                return get_M_c_ud_lt_b_1(-x)
            } else if (x >= column_radius / 1000) {
                return get_M_c_ud_lt_b_2(x)
            } else {
                return get_fn_B_ud_lt_b(x)
            }
        }
    }
}
module.exports.get_fn_M_ud_lt_b_corr = get_fn_M_ud_lt_b_corr

get_fn_M_dim_b_corr = (x) => {
    if (m_dim_width > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_width / 2 / 1000) {
                return get_M_c_dim_b_1(x)
            } else if (x < -column_width / 2 / 1000) {
                return get_M_c_dim_b_2(-x)
            } else {
                return get_fn_B_dim_b(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_M_c_dim_b_1(x)
            } else if (x < -column_radius / 1000) {
                return get_M_c_dim_b_2(-x)
            } else {
                return get_fn_B_dim_b(x)
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x < -column_width / 2 / 1000) {
                return get_M_c_dim_b_1(-x)
            } else if (x >= column_width / 2 / 1000) {
                return get_M_c_dim_b_2(x)
            } else {
                return get_fn_B_dim_b(x)
            }
        } else {
            if (x < -column_radius / 1000) {
                return get_M_c_dim_b_1(-x)
            } else if (x >= column_radius / 1000) {
                return get_M_c_dim_b_2(x)
            } else {
                return get_fn_B_dim_b(x)
            }
        }
    }
}
module.exports.get_fn_M_dim_b_corr = get_fn_M_dim_b_corr

get_V_r_dr_st_b_1 = (x) => {
    if (x < a_dr_st_b_1) {
        return R_A_dr_st_b_1
    } else {
        return R_A_dr_st_b_1 - w_dr_st_b * (x - a_dr_st_b_1)
    }
}
module.exports.get_V_r_dr_st_b_1 = get_V_r_dr_st_b_1

get_V_r_dr_lt_b_1 = (x) => {
    if (x < a_dr_lt_b_1) {
        return R_A_dr_lt_b_1
    } else {
        return R_A_dr_lt_b_1 - w_dr_lt_b * (x - a_dr_lt_b_1)
    }
}
module.exports.get_V_r_dr_lt_b_1 = get_V_r_dr_lt_b_1

get_V_r_ud_st_b_1 = (x) => {
    if (x < a_ud_st_b_1) {
        return R_A_ud_st_b_1
    } else {
        return R_A_ud_st_b_1 - w_ud_st_b * (x - a_ud_st_b_1)
    }
}
module.exports.get_V_r_ud_st_b_1 = get_V_r_ud_st_b_1

get_V_r_ud_lt_b_1 = (x) => {
    if (x < a_ud_lt_b_1) {
        return R_A_ud_lt_b_1
    } else {
        return R_A_ud_lt_b_1 - w_ud_lt_b * (x - a_ud_lt_b_1)
    }
}
module.exports.get_V_r_ud_lt_b_1 = get_V_r_ud_lt_b_1

get_V_r_dim_b_1 = (x) => {
    if (x < a_dim_b_1) {
        return R_A_dim_b_1
    } else {
        return R_A_dim_b_1 - w_dim_b * (x - a_dim_b_1)
    }
}
module.exports.get_V_r_dim_b_1 = get_V_r_dim_b_1

get_V_r_dr_st_b_2 = (x) => {
    if (x < L_w_dr_st_b_2) {
        return -(R_A_dr_st_b_2 - w_dr_st_b * (x - a_dr_st_b_2))
    } else {
        return 0
    }
}
module.exports.get_V_r_dr_st_b_2 = get_V_r_dr_st_b_2

get_V_r_dr_lt_b_2 = (x) => {
    if (x < L_w_dr_lt_b_2) {
        return -(R_A_dr_lt_b_2 - w_dr_lt_b * (x - a_dr_lt_b_2))
    } else {
        return 0
    }
}
module.exports.get_V_r_dr_lt_b_2 = get_V_r_dr_lt_b_2

get_V_r_ud_st_b_2 = (x) => {
    if (x < L_w_ud_st_b_2) {
        return -(R_A_ud_st_b_2 - w_ud_st_b * (x - a_ud_st_b_2))
    } else {
        return 0
    }
}
module.exports.get_V_r_ud_st_b_2 = get_V_r_ud_st_b_2

get_V_r_ud_lt_b_2 = (x) => {
    if (x < L_w_ud_lt_b_2) {
        return -(R_A_ud_lt_b_2 - w_ud_lt_b * (x - a_ud_lt_b_2))
    } else {
        return 0
    }
}
module.exports.get_V_r_ud_lt_b_2 = get_V_r_ud_lt_b_2

get_V_r_dim_b_2 = (x) => {
    if (x < L_w_dim_b_2) {
        return -(R_A_dim_b_2 - w_dim_b * (x - a_dim_b_2))
    } else {
        return 0
    }
}
module.exports.get_V_r_dim_b_2 = get_V_r_dim_b_2

get_V_g_dr_st_b_1 = (x) => {
    if (m_total_dr_st_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_b * (width / 1000 / 2 - ec_vl_width / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_b * (radius / 1000 - ec_vl_width / 1000 - x))
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_b * (width / 1000 / 2 + ec_vl_width / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_b * (radius / 1000 + ec_vl_width / 1000 - x))
        }
    }
}
module.exports.get_V_g_dr_st_b_1 = get_V_g_dr_st_b_1

get_V_g_dr_lt_b_1 = (x) => {
    if (m_total_dr_lt_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_b * (width / 1000 / 2 - ec_vl_width / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_b * (radius / 1000 - ec_vl_width / 1000 - x))
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_b * (width / 1000 / 2 + ec_vl_width / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_b * (radius / 1000 + ec_vl_width / 1000 - x))
        }
    }
}
module.exports.get_V_g_dr_lt_b_1 = get_V_g_dr_lt_b_1

get_V_g_ud_st_b_1 = (x) => {
    if (m_total_ud_st_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_b * (width / 1000 / 2 - ec_vl_width / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_b * (radius / 1000 - ec_vl_width / 1000 - x))
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_b * (width / 1000 / 2 + ec_vl_width / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_b * (radius / 1000 + ec_vl_width / 1000 - x))
        }
    }
}
module.exports.get_V_g_ud_st_b_1 = get_V_g_ud_st_b_1

get_V_g_ud_lt_b_1 = (x) => {
    if (m_total_ud_lt_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_b * (width / 1000 / 2 - ec_vl_width / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_b * (radius / 1000 - ec_vl_width / 1000 - x))
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_b * (width / 1000 / 2 + ec_vl_width / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_b * (radius / 1000 + ec_vl_width / 1000 - x))
        }
    }
}
module.exports.get_V_g_ud_lt_b_1 = get_V_g_ud_lt_b_1

get_V_g_dim_b_1 = (x) => {
    if (m_dim_width > 0) {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_b * (width / 1000 / 2 - ec_vl_width / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_b * (radius / 1000 - ec_vl_width / 1000 - x))
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return -(w_sw_b * (width / 1000 / 2 + ec_vl_width / 1000 - x))
        } else if (point_foundation_shape == 'circular') {
            return -(w_sw_b * (radius / 1000 + ec_vl_width / 1000 - x))
        }
    }
}
module.exports.get_V_g_dim_b_1 = get_V_g_dim_b_1

get_V_g_dr_st_b_2 = (x) => {
    if (m_total_dr_st_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_b * (width / 1000 / 2 + ec_vl_width / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_b * (radius / 1000 + ec_vl_width / 1000 - x)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_b * (width / 1000 / 2 - ec_vl_width / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_b * (radius / 1000 - ec_vl_width / 1000 - x)
        }
    }
}
module.exports.get_V_g_dr_st_b_2 = get_V_g_dr_st_b_2

get_V_g_dr_lt_b_2 = (x) => {
    if (m_total_dr_lt_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_b * (width / 1000 / 2 + ec_vl_width / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_b * (radius / 1000 + ec_vl_width / 1000 - x)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_b * (width / 1000 / 2 - ec_vl_width / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_b * (radius / 1000 - ec_vl_width / 1000 - x)
        }
    }
}
module.exports.get_V_g_dr_lt_b_2 = get_V_g_dr_lt_b_2

get_V_g_ud_st_b_2 = (x) => {
    if (m_total_ud_st_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_b * (width / 1000 / 2 + ec_vl_width / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_b * (radius / 1000 + ec_vl_width / 1000 - x)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_b * (width / 1000 / 2 - ec_vl_width / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_b * (radius / 1000 - ec_vl_width / 1000 - x)
        }
    }
}
module.exports.get_V_g_ud_st_b_2 = get_V_g_ud_st_b_2

get_V_g_ud_lt_b_2 = (x) => {
    if (m_total_ud_lt_b > 0) {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_b * (width / 1000 / 2 + ec_vl_width / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_b * (radius / 1000 + ec_vl_width / 1000 - x)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_b * (width / 1000 / 2 - ec_vl_width / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_b * (radius / 1000 - ec_vl_width / 1000 - x)
        }
    }
}
module.exports.get_V_g_ud_lt_b_2 = get_V_g_ud_lt_b_2

get_V_g_dim_b_2 = (x) => {
    if (m_dim_width > 0) {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_b * (width / 1000 / 2 + ec_vl_width / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_b * (radius / 1000 + ec_vl_width / 1000 - x)
        }
    } else {
        if (point_foundation_shape == 'rectangular') {
            return w_sw_b * (width / 1000 / 2 - ec_vl_width / 1000 - x)
        } else if (point_foundation_shape == 'circular') {
            return w_sw_b * (radius / 1000 - ec_vl_width / 1000 - x)
        }
    }
}
module.exports.get_V_g_dim_b_2 = get_V_g_dim_b_2

get_V_c_dr_st_b_1 = (x) => {
    return get_V_r_dr_st_b_1(x) + get_V_g_dr_st_b_1(x)
}
module.exports.get_V_c_dr_st_b_1 = get_V_c_dr_st_b_1

get_V_c_dr_lt_b_1 = (x) => {
    return get_V_r_dr_lt_b_1(x) + get_V_g_dr_lt_b_1(x)
}
module.exports.get_V_c_dr_lt_b_1 = get_V_c_dr_lt_b_1

get_V_c_ud_st_b_1 = (x) => {
    return get_V_r_ud_st_b_1(x) + get_V_g_ud_st_b_1(x)
}
module.exports.get_V_c_ud_st_b_1 = get_V_c_ud_st_b_1

get_V_c_ud_lt_b_1 = (x) => {
    return get_V_r_ud_lt_b_1(x) + get_V_g_ud_lt_b_1(x)
}
module.exports.get_V_c_ud_lt_b_1 = get_V_c_ud_lt_b_1

get_V_c_dim_b_1 = (x) => {
    return get_V_r_dim_b_1(x) + get_V_g_dim_b_1(x)
}
module.exports.get_V_c_dim_b_1 = get_V_c_dim_b_1


get_V_c_dr_st_b_2 = (x) => {
    return get_V_r_dr_st_b_2(x) + get_V_g_dr_st_b_2(x)
}
module.exports.get_V_c_dr_st_b_2 = get_V_c_dr_st_b_2

get_V_c_dr_lt_b_2 = (x) => {
    return get_V_r_dr_lt_b_2(x) + get_V_g_dr_lt_b_2(x)
}
module.exports.get_V_c_dr_lt_b_2 = get_V_c_dr_lt_b_2

get_V_c_ud_st_b_2 = (x) => {
    return get_V_r_ud_st_b_2(x) + get_V_g_ud_st_b_2(x)
}
module.exports.get_V_c_ud_st_b_2 = get_V_c_ud_st_b_2

get_V_c_ud_lt_b_2 = (x) => {
    return get_V_r_ud_lt_b_2(x) + get_V_g_ud_lt_b_2(x)
}
module.exports.get_V_c_ud_lt_b_2 = get_V_c_ud_lt_b_2

get_V_c_dim_b_2 = (x) => {
    return get_V_r_dim_b_2(x) + get_V_g_dim_b_2(x)
}
module.exports.get_V_c_dim_b_2 = get_V_c_dim_b_2

get_fn_V_dr_st_b = (x) => {
    if (m_total_dr_st_b > 0) {
        if (x >= 0) {
            return get_V_c_dr_st_b_1(x)
        } else {
            return get_V_c_dr_st_b_2(-x)
        }
    } else {
        if (x < 0) {
            return get_V_c_dr_st_b_1(-x)
        } else {
            return get_V_c_dr_st_b_2(x)
        }
    }
}
module.exports.get_fn_V_dr_st_b = get_fn_V_dr_st_b

get_fn_V_dr_lt_b = (x) => {
    if (m_total_dr_lt_b > 0) {
        if (x >= 0) {
            return get_V_c_dr_lt_b_1(x)
        } else {
            return get_V_c_dr_lt_b_2(-x)
        }
    } else {
        if (x < 0) {
            return get_V_c_dr_lt_b_1(-x)
        } else {
            return get_V_c_dr_lt_b_2(x)
        }
    }
}
module.exports.get_fn_V_dr_lt_b = get_fn_V_dr_lt_b

get_fn_V_ud_st_b = (x) => {
    if (m_total_ud_st_b > 0) {
        if (x >= 0) {
            return get_V_c_ud_st_b_1(x)
        } else {
            return get_V_c_ud_st_b_2(-x)
        }
    } else {
        if (x < 0) {
            return get_V_c_ud_st_b_1(-x)
        } else {
            return get_V_c_ud_st_b_2(x)
        }
    }
}
module.exports.get_fn_V_ud_st_b = get_fn_V_ud_st_b

get_fn_V_ud_lt_b = (x) => {
    if (m_total_ud_lt_b > 0) {
        if (x >= 0) {
            return get_V_c_ud_lt_b_1(x)
        } else {
            return get_V_c_ud_lt_b_2(-x)
        }
    } else {
        if (x < 0) {
            return get_V_c_ud_lt_b_1(-x)
        } else {
            return get_V_c_ud_lt_b_2(x)
        }
    }
}
module.exports.get_fn_V_ud_lt_b = get_fn_V_ud_lt_b

get_fn_V_dim_b = (x) => {
    if (m_dim_width > 0) {
        if (x >= 0) {
            return get_V_c_dim_b_1(x)
        } else {
            return get_V_c_dim_b_2(-x)
        }
    } else {
        if (x < 0) {
            return get_V_c_dim_b_1(-x)
        } else {
            return get_V_c_dim_b_2(x)
        }
    }
}
module.exports.get_fn_V_dim_b = get_fn_V_dim_b


get_a_V_dr_st_b = () => {
    if (column_shape == "rectangular") {
        return (get_fn_V_dr_st_b(column_width / 2 / 1000) - get_fn_V_dr_st_b(-column_width / 2 / 1000)) / (column_width / 1000)
    } else {
        return (get_fn_V_dr_st_b(column_radius / 1000) - get_fn_V_dr_st_b(-column_radius / 1000)) / (2 * column_radius / 1000)
    }
}
module.exports.get_a_V_dr_st_b = get_a_V_dr_st_b

get_b_V_dr_st_b = () => {
    if (column_shape == "rectangular") {
        return get_fn_V_dr_st_b(column_width / 2 / 1000) - a_V_dr_st_b * (column_width / 2 / 1000)
    } else {
        return get_fn_V_dr_st_b(column_radius / 1000) - a_V_dr_st_b * (column_radius / 1000)
    }
}
module.exports.get_b_V_dr_st_b = get_b_V_dr_st_b

get_a_V_dr_lt_b = () => {
    if (column_shape == "rectangular") {
        return (get_fn_V_dr_lt_b(column_width / 2 / 1000) - get_fn_V_dr_lt_b(-column_width / 2 / 1000)) / (column_width / 1000)
    } else {
        return (get_fn_V_dr_lt_b(column_radius / 1000) - get_fn_V_dr_lt_b(-column_radius / 1000)) / (2 * column_radius / 1000)
    }
}
module.exports.get_a_V_dr_lt_b = get_a_V_dr_lt_b

get_b_V_dr_lt_b = () => {
    if (column_shape == "rectangular") {
        return get_fn_V_dr_lt_b(column_width / 2 / 1000) - a_V_dr_lt_b * (column_width / 2 / 1000)
    } else {
        return get_fn_V_dr_lt_b(column_radius / 1000) - a_V_dr_lt_b * (column_radius / 1000)
    }
}
module.exports.get_b_V_dr_lt_b = get_b_V_dr_lt_b

get_a_V_ud_st_b = () => {
if (column_shape == "rectangular") {
        return(get_fn_V_ud_st_b(column_width / 2 / 1000) - get_fn_V_ud_st_b(-column_width / 2 / 1000)) / (column_width / 1000)
    } else {
        return(get_fn_V_ud_st_b(column_radius / 1000) - get_fn_V_ud_st_b(-column_radius / 1000)) / (2 * column_radius / 1000)
    }
}
module.exports.get_a_V_ud_st_b = get_a_V_ud_st_b

get_b_V_ud_st_b = () => {
if (column_shape == "rectangular") {
        return get_fn_V_ud_st_b(column_width / 2 / 1000) - a_V_ud_st_b * (column_width / 2 / 1000)
    } else {
        return get_fn_V_ud_st_b(column_radius / 1000) - a_V_ud_st_b * (column_radius / 1000)
    }
}
module.exports.get_b_V_ud_st_b = get_b_V_ud_st_b

get_a_V_ud_lt_b = () => {
if (column_shape == "rectangular") {
        return (get_fn_V_ud_lt_b(column_width / 2 / 1000) - get_fn_V_ud_lt_b(-column_width / 2 / 1000)) / (column_width / 1000)
    } else {
        return (get_fn_V_ud_lt_b(column_radius / 1000) - get_fn_V_ud_lt_b(-column_radius / 1000)) / (2 * column_radius / 1000)
    }
}
module.exports.get_a_V_ud_lt_b = get_a_V_ud_lt_b

get_b_V_ud_lt_b = () => {
if (column_shape == "rectangular") {
        return get_fn_V_ud_lt_b(column_width / 2 / 1000) - a_V_ud_lt_b * (column_width / 2 / 1000)
    } else {
        return get_fn_V_ud_lt_b(column_radius / 1000) - a_V_ud_lt_b * (column_radius / 1000)
    }
}
module.exports.get_b_V_ud_lt_b = get_b_V_ud_lt_b

get_a_V_dim_b = () => {
if (column_shape == "rectangular") {
        return (get_fn_V_dim_b(column_width / 2 / 1000) - get_fn_V_dim_b(-column_width / 2 / 1000)) / (column_width / 1000)
    } else {
        return (get_fn_V_dim_b(column_radius / 1000) - get_fn_V_dim_b(-column_radius / 1000)) / (2 * column_radius / 1000)
    }
}
module.exports.get_a_V_dim_b = get_a_V_dim_b

get_b_V_dim_b = () => {
if (column_shape == "rectangular") {
        return get_fn_V_dim_b(column_width / 2 / 1000) - a_V_dim_b * (column_width / 2 / 1000)
    } else {
        return get_fn_V_dim_b(column_radius / 1000) - a_V_dim_b * (column_radius / 1000)
    }
}
module.exports.get_b_V_dim_b = get_b_V_dim_b

get_y_V_dr_st_b = (x) => {
    return a_V_dr_st_b * x + b_V_dr_st_b
}
module.exports.get_y_V_dr_st_b = get_y_V_dr_st_b

get_y_V_dr_lt_b = (x) => {
    return a_V_dr_lt_b * x + b_V_dr_lt_b
}
module.exports.get_y_V_dr_lt_b = get_y_V_dr_lt_b

get_y_V_ud_st_b = (x) => {
    return a_V_ud_st_b * x + b_V_ud_st_b
}
module.exports.get_y_V_ud_st_b = get_y_V_ud_st_b

get_y_V_ud_lt_b = (x) => {
    return a_V_ud_lt_b * x + b_V_ud_lt_b
}
module.exports.get_y_V_ud_lt_b = get_y_V_ud_lt_b

get_y_V_dim_b = (x) => {
    return a_V_dim_b * x + b_V_dim_b
}
module.exports.get_y_V_dim_b = get_y_V_dim_b

get_fn_V_dr_st_b_corr = (x) => {
    if (m_total_dr_st_b > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_width / 2 / 1000) {
                return get_V_c_dr_st_b_1(x)
            } else if (x < -column_width / 2 / 1000) {
                return get_V_c_dr_st_b_2(-x)
            } else {
                return get_y_V_dr_st_b(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_dr_st_b_1(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_dr_st_b_2(-x)
            } else {
                return get_y_V_dr_st_b(x)
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x >= column_width / 2 / 1000) {
                return get_V_c_dr_st_b_2(x)
            } else if (x < -column_width / 2 / 1000) {
                return get_V_c_dr_st_b_1(-x)
            } else {
                return get_y_V_dr_st_b(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_dr_st_b_2(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_dr_st_b_1(-x)
            } else {
                return get_y_V_dr_st_b(x)
            }
        }
    }
}
module.exports.get_fn_V_dr_st_b_corr = get_fn_V_dr_st_b_corr

get_fn_V_dr_lt_b_corr = (x) => {
    if (m_total_dr_lt_b > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_width / 2 / 1000) {
                return get_V_c_dr_lt_b_1(x)
            } else if (x < -column_width / 2 / 1000) {
                return get_V_c_dr_lt_b_2(-x)
            } else {
                return get_y_V_dr_lt_b(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_dr_lt_b_1(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_dr_lt_b_2(-x)
            } else {
                return get_y_V_dr_lt_b(x)
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x >= column_width / 2 / 1000) {
                return get_V_c_dr_lt_b_2(x)
            } else if (x < -column_width / 2 / 1000) {
                return get_V_c_dr_lt_b_1(-x)
            } else {
                return get_y_V_dr_lt_b(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_dr_lt_b_2(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_dr_lt_b_1(-x)
            } else {
                return get_y_V_dr_lt_b(x)
            }
        }
    }
}
module.exports.get_fn_V_dr_lt_b_corr = get_fn_V_dr_lt_b_corr

get_fn_V_ud_st_b_corr = (x) => {
    if (m_total_ud_st_b > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_width / 2 / 1000) {
                return get_V_c_ud_st_b_1(x)
            } else if (x < -column_width / 2 / 1000) {
                return get_V_c_ud_st_b_2(-x)
            } else {
                return get_y_V_ud_st_b(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_ud_st_b_1(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_ud_st_b_2(-x)
            } else {
                return get_y_V_ud_st_b(x)
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x >= column_width / 2 / 1000) {
                return get_V_c_ud_st_b_2(x)
            } else if (x < -column_width / 2 / 1000) {
                return get_V_c_ud_st_b_1(-x)
            } else {
                return get_y_V_ud_st_b(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_ud_st_b_2(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_ud_st_b_1(-x)
            } else {
                return get_y_V_ud_st_b(x)
            }
        }
    }
}
module.exports.get_fn_V_ud_st_b_corr = get_fn_V_ud_st_b_corr

get_fn_V_ud_lt_b_corr = (x) => {
    if (m_total_ud_lt_b > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_width / 2 / 1000) {
                return get_V_c_ud_lt_b_1(x)
            } else if (x < -column_width / 2 / 1000) {
                return get_V_c_ud_lt_b_2(-x)
            } else {
                return get_y_V_ud_lt_b(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_ud_lt_b_1(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_ud_lt_b_2(-x)
            } else {
                return get_y_V_ud_lt_b(x)
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x >= column_width / 2 / 1000) {
                return get_V_c_ud_lt_b_2(x)
            } else if (x < -column_width / 2 / 1000) {
                return get_V_c_ud_lt_b_1(-x)
            } else {
                return get_y_V_ud_lt_b(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_ud_lt_b_2(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_ud_lt_b_1(-x)
            } else {
                return get_y_V_ud_lt_b(x)
            }
        }
    }
}
module.exports.get_fn_V_ud_lt_b_corr = get_fn_V_ud_lt_b_corr

get_fn_V_dim_b_corr = (x) => {
    if (m_dim_width > 0) {
        if (column_shape == "rectangular") {
            if (x >= column_width / 2 / 1000) {
                return get_V_c_dim_b_1(x)
            } else if (x < -column_width / 2 / 1000) {
                return get_V_c_dim_b_2(-x)
            } else {
                return get_y_V_dim_b(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_dim_b_1(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_dim_b_2(-x)
            } else {
                return get_y_V_dim_b(x)
            }
        }
    } else {
        if (column_shape == "rectangular") {
            if (x >= column_width / 2 / 1000) {
                return get_V_c_dim_b_2(x)
            } else if (x < -column_width / 2 / 1000) {
                return get_V_c_dim_b_1(-x)
            } else {
                return get_y_V_dim_b(x)
            }
        } else {
            if (x >= column_radius / 1000) {
                return get_V_c_dim_b_2(x)
            } else if (x < -column_radius / 1000) {
                return get_V_c_dim_b_1(-x)
            } else {
                return get_y_V_dim_b(x)
            }
        }
    }
}
module.exports.get_fn_V_dim_b_corr = get_fn_V_dim_b_corr

get_x_length_value_start = () => {
    if (point_foundation_shape == 'rectangular') {
        return -(length / 2 + ec_vl_length)

    } else if (point_foundation_shape == 'circular') {
        return -(radius + ec_vl_length)
    }
}
module.exports.get_x_length_value_start = get_x_length_value_start

get_x_length_value_end = () => {
    if (point_foundation_shape == 'rectangular') {
        return (length / 2 - ec_vl_length)
    } else if (point_foundation_shape == 'circular') {
        return (radius - ec_vl_length)
    }
}
module.exports.get_x_length_value_end = get_x_length_value_end

get_x_length_value_interval = () => {
    if (point_foundation_shape == 'rectangular') {
        return length / delta
    } else if (point_foundation_shape == 'circular') {
        return 2 * radius / delta
    }
}
module.exports.get_x_length_value_interval = get_x_length_value_interval

get_x_width_value_start = () => {
    if (point_foundation_shape == 'rectangular') {
        return -(width / 2 + ec_vl_width)
    } else if (point_foundation_shape == 'circular') {
        return -(radius + ec_vl_width)
    }
}
module.exports.get_x_width_value_start = get_x_width_value_start

get_x_width_value_end = () => {
    if (point_foundation_shape == 'rectangular') {
        return (width / 2 - ec_vl_width)
    } else if (point_foundation_shape == 'circular') {
        return (radius - ec_vl_width)
    }
}
module.exports.get_x_width_value_end = get_x_width_value_end

get_x_width_value_interval = () => {
    if (point_foundation_shape == 'rectangular') {
        return width / delta
    } else if (point_foundation_shape == 'circular') {
        return 2 * radius / delta
    }
}
module.exports.get_x_width_value_interval = get_x_width_value_interval

































