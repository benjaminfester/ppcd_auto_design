
if(lmd_known == 'on') {
    if(point_foundation_shape == 'rectangular') {
        // Only check for negative vl_external values
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
    } else if(point_foundation_shape == 'circular') {
        // Only check for negative vl_external values
        if (vl_external < 0) {
            pre_temp.push(pre_verification2())          
        } 
        pre_temp.push(pre_verification11())
        pre_temp.push(pre_verification12())
        pre_temp.push(pre_verification13())
        pre_temp.push(pre_verification14())
    }
} else {
    if(dimensions_known == 'on') {
        if(point_foundation_shape == 'rectangular') {
            // Only check for negative vl_external values
            if (vl_external < 0) {
                pre_temp.push(pre_verification1())          
            } 
            pre_temp.push(pre_verification15())
            pre_temp.push(pre_verification16())
        } else if(point_foundation_shape == 'circular') {
            // Only check for negative vl_external values
            if (vl_external < 0) {
                pre_temp.push(pre_verification1())          
            }
            pre_temp.push(pre_verification17())
        }
    } else {
        if(point_foundation_shape == 'rectangular') {
            // Only check for negative vl_external values
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
        } else if(point_foundation_shape == 'circular') {
            // Only check for negative vl_external values
            if (vl_external < 0) {
                pre_temp.push(pre_verification2())          
            }
            pre_temp.push(pre_verification11())
            pre_temp.push(pre_verification12())
            pre_temp.push(pre_verification13())
            pre_temp.push(pre_verification14())
        }
    }
}