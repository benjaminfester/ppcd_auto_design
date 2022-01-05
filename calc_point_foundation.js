// POINT FOUNDATION CALCULATION 
// 1. Log Active Users
// 2. Lookup Inputs (calculations_point_foundation)
// 3. Lookup Inputs (calculations_point_foundation_output)
// 4. Split Input Values
// 5. Point Foundation Calculation
// 5.1 Point Function Chart
// 5.2 MathJax Equations
// 6. SVG Diagrams
// 7. Show & Hide Page Elements (calculations_point_foundation)
// 8. Show & Hide Page Elements (calculations_point_foundation_output)
// 9. Pre-Verification Slide Out (calculations_point_foundation)
// 10. Validation & Restrictions (calculations_point_foundation)
// 11. Chart Slide Out
// 12. Verification Slide Out
// 13. Write Calculation Results to Printable Pages (calculations_point_foundation_output)


function calc() {

    // 1. Log active users    
       
         var calculation_type_id = 2;
       $.ajax({
           type: "POST",
           data: { "calculation_type_id" : calculation_type_id},
           url: "./includes/log_active.php"
       });
   
       var split_path = window.location.pathname.split("/");
       var location_name = split_path.slice(-1)[0];
   
   // 2. Lookup Inputs (calculations_point_foundation)
   
       if (location_name == 'calculations_point_foundation') {
   
            // GLOBAL VARS
            var national_annex = document.getElementById("national_annex").value;
   
            if (national_annex != "") {       
               var annex_split = national_annex.split(",");
               var gamma_c = parseFloat(annex_split[1]);
               var gamma_s = parseFloat(annex_split[2]);
               var national_annex = annex_split[0];
               } else {
               var gamma_c = 1.5;
               var gamma_s = 1.2;
    
            }
            
    
   
           var lmd_known = $('#lmd_known:checked').val();
           var dimensions_known = $('#dimensions_known:checked').val();
           var point_foundation_shape = $("input[name=point_foundation_shape]:checked").val()
           var length = parseFloat(document.getElementById("length").value);
           var width = parseFloat(document.getElementById("width").value);
           var radius = parseFloat(document.getElementById("radius").value);
           var height = parseFloat(document.getElementById("height").value);
           var depth = parseFloat(document.getElementById("depth").value);
           var include_shaft = $('#include_shaft:checked').val();
           var shaft_height = parseFloat(document.getElementById("shaft_height").value);
           var surface_type = document.getElementById("surface_type").options[document.getElementById("surface_type").selectedIndex].value;
   
           var column_shape = $("input[name=column_shape]:checked").val()
           var column_length = parseFloat(document.getElementById("column_length").value);
           var column_width = parseFloat(document.getElementById("column_width").value);
           var column_radius = parseFloat(document.getElementById("column_radius").value);
           var ec_vl_length = parseFloat(document.getElementById("ec_vl_length").value);
           var ec_vl_width = parseFloat(document.getElementById("ec_vl_width").value);
           var geo_known = $('#geo_tech_known:checked').val();
   
           var internal_moment = parseFloat(document.getElementById("internal_moment").value);
           // var ground_type = document.getElementById("ground_type").options[document.getElementById("ground_type").selectedIndex].value;
           var ground_type = $("input[name=ground_type]:checked").val()
   
   
           
           //GLOBAL VARS
           lmd_known_chart = lmd_known
           dimensions_known_chart = dimensions_known
           ground_type_chart = ground_type
           point_foundation_shape_chart = point_foundation_shape
           column_shape_chart = column_shape
           column_length_chart = column_length
           column_width_chart = column_width
           column_radius_chart = column_radius
                       
   
   
           if (geo_known == 'on') {
               var ground_density = parseFloat(document.getElementById("ground_density").value);
           } else{
               var ground_density = 18
           }
   
           if (geo_known == 'on') {
               var dr_st_af_k = parseFloat(document.getElementById("dr_st_af_k").value);
               var dr_lt_af_k = parseFloat(document.getElementById("dr_lt_af_k").value);
               var ud_st_af_k = 0;
               var ud_lt_af_k = parseFloat(document.getElementById("ud_lt_af_k").value);
           } else{
               var dr_st_af_k = 33;
               var dr_lt_af_k = 33;
               var ud_st_af_k = 0;
               var ud_lt_af_k = 25;
           }
   
           if (geo_known == 'on') {
               var dr_st_cohesion_k = 0;
               var dr_lt_cohesion_k = 0;
               var ud_st_cohesion_k = parseFloat(document.getElementById("ud_st_cohesion_k").value);
               var ud_lt_cohesion_k = parseFloat(document.getElementById("ud_lt_cohesion_k").value);
           } else{
               var dr_st_cohesion_k = 0
               var dr_lt_cohesion_k = 0
               var ud_st_cohesion_k = 80
               var ud_lt_cohesion_k = 8
           }
   
        
           var vl_external = parseFloat(document.getElementById("vl_external").value);
           var terrain_live_load = parseFloat(document.getElementById("terrain_live_load").value);
           var concrete_density = 24
           var hl_length = parseFloat(document.getElementById("hl_length").value);
           var hl_width = parseFloat(document.getElementById("hl_width").value);
           var height_p_hor = height; // height_p_hor now uses height
           var m_length = parseFloat(document.getElementById("m_length").value);
           var m_width = parseFloat(document.getElementById("m_width").value);
           var concrete_type = document.getElementById("concrete_type").options[document.getElementById("concrete_type").selectedIndex].value;
           var f_ck = parseFloat(concrete_type);
           var fabrication_method = $('#fabrication_method:checked').val();
           var fiber_dosage = document.getElementById("fiber_dosage").options[document.getElementById("fiber_dosage").selectedIndex].value;
           var include_steel = $('#include_steel:checked').val();       
           var include_fiber = $('#include_fiber:checked').val();
           var steel_quality = document.getElementById("steel_quality").options[document.getElementById("steel_quality").selectedIndex].value;
           var f_yk = parseFloat(steel_quality)
           var steel_mesh_type = document.getElementById("steel_mesh_type").options[document.getElementById("steel_mesh_type").selectedIndex].value;
                  
           var steel_diameter_bottom = parseFloat(steel_mesh_type.split(',')[1])
           var A_s_eq = "$$ A_s = $$"
           var cover_layer_env = document.getElementById("cover_layer_dropdown").options[document.getElementById("cover_layer_dropdown").selectedIndex].innerHTML
           var cover_layer_dropdown = document.getElementById("cover_layer_dropdown").options[document.getElementById("cover_layer_dropdown").selectedIndex].value;
           var cover_layer_custom = parseFloat(document.getElementById("cover_layer_custom").value);
           if (cover_layer_dropdown == '0') {
               cover_layer_custom_row.classList.remove('hidden');
               var cover_layer = cover_layer_custom
           } else if (cover_layer_dropdown > 0) {
               cover_layer_custom_row.classList.add('hidden');
               var cover_layer = parseFloat(cover_layer_dropdown)
           } else {
               cover_layer_custom_row.classList.add('hidden');
           }
   
   
   
           var shaft_bars_diameter = document.getElementById("shaft_bars_diameter").options[document.getElementById("shaft_bars_diameter").selectedIndex].value;
           var shaft_bars_number = document.getElementById("shaft_bars_number").options[document.getElementById("shaft_bars_number").selectedIndex].value;
           var include_stirrups = $('#include_stirrups:checked').val();
           var shaft_stirrup_diameter = document.getElementById("shaft_stirrup_diameter").options[document.getElementById("shaft_stirrup_diameter").selectedIndex].value;
           var shaft_stirrup_spacing = parseFloat(document.getElementById("shaft_stirrup_spacing").value);
   
         
   
   
               if (include_fiber != "on") {
                   // disable include steel and set as yes
                   include_steel = "on";
                   document.getElementById("include_steel").checked = true;
                   document.getElementById("include_steel").className = 'onoffswitch_disabled-checkbox';
                   document.getElementById("include_steel_label").className = 'onoffswitch_disabled-label';
                   document.getElementById("include_steel_onoffswitch-inner").className = 'onoffswitch_disabled-inner';
                   document.getElementById("include_steel_onoffswitch-switch").className = 'onoffswitch_disabled-switch';
               } else {
                   // leave include steel as an option
                   document.getElementById("include_steel").className = 'onoffswitch-checkbox';
                   document.getElementById("include_steel_label").className = 'onoffswitch-label';
                   document.getElementById("include_steel_onoffswitch-inner").className = 'onoffswitch-inner';
                   document.getElementById("include_steel_onoffswitch-switch").className = 'onoffswitch-switch';
               }
   
   
   
               // Show / Hide custom cover layer 
               if (cover_layer_dropdown == '0') {
                   cover_layer_custom_row.classList.remove('hidden');
                   var cover_layer = cover_layer_custom
   
               } else if (cover_layer_dropdown > 0) {
                   cover_layer_custom_row.classList.add('hidden');
                   var cover_layer = parseFloat(cover_layer_dropdown)
               } else {
                   cover_layer_custom_row.classList.add('hidden');
               }
   
   
       }
   
   
   
   
   // 3. Lookup Inputs (calculations_point_foundation_output)
   
       if (location_name == 'calculations_point_foundation_output') {
   
             // GLOBAL VARS
             var national_annex = document.getElementById("national_annex").value;
   
             if (national_annex != "") {       
             var annex_split = national_annex.split(",");
             var gamma_c = parseFloat(annex_split[1]);
             var gamma_s = parseFloat(annex_split[2]);
             var national_annex = annex_split[0];
             } else {
             var gamma_c = 1.5;
             var gamma_s = 1.2;
     
             }
            
   
   
           var lmd_known = document.getElementById("lmd_known").value;
           var dimensions_known = document.getElementById("dimensions_known").value;
           var point_foundation_shape = document.getElementById("point_foundation_shape").value;
   
           var length = parseFloat(document.getElementById("length").value);
           var length_eq = "$$ l = $$"
   
           var width = parseFloat(document.getElementById("width").value);
           var width_eq = "$$ b = $$"
   
           var radius = parseFloat(document.getElementById("radius").value);
           var radius_eq = "$$ r = $$"
   
           var height = parseFloat(document.getElementById("height").value);
           var height_eq = "$$ h = $$"
   
           var depth = parseFloat(document.getElementById("depth").value);
           var depth_eq = "$$ d = $$"
   
           var column_shape = document.getElementById("column_shape").value;
   
           var column_length = parseFloat(document.getElementById("column_length").value);
           var column_length_eq = "$$ l_c = $$"
   
           var column_width = parseFloat(document.getElementById("column_width").value);
           var column_width_eq = "$$ b_c = $$"
   
           var column_radius = parseFloat(document.getElementById("column_radius").value);
           var column_radius_eq = "$$ r_c = $$"
   
           var ec_vl_length = parseFloat(document.getElementById("ec_vl_length").value);
           var ec_vl_length_eq = "$$ e_{c,l} = $$"
   
           var ec_vl_width = parseFloat(document.getElementById("ec_vl_width").value);
           var ec_vl_width_eq = "$$ e_{c,b} = $$"
   
           var geo_known = document.getElementById("geo_tech_known").value;
   
           var internal_moment = parseFloat(document.getElementById("internal_moment").value);
           var internal_moment_eq = "$$ M_{Ed} = $$"
   
           var ground_type = document.getElementById("ground_type").value;
   
   
   
           if (geo_known == 'on') {
               var ground_density = parseFloat(document.getElementById("ground_density").value);
           } else{
               var ground_density = 18
           }
           ground_density_eq = "$$ \\gamma = $$"
   
   
   
           if (geo_known == 'on') {
               var dr_st_af_k = parseFloat(document.getElementById("dr_st_af_k").value);
               var dr_lt_af_k = parseFloat(document.getElementById("dr_lt_af_k").value);
               var ud_st_af_k = 0;
               var ud_lt_af_k = parseFloat(document.getElementById("ud_lt_af_k").value);
           } else{
               var dr_st_af_k = 33;
               var dr_lt_af_k = 33;
               var ud_st_af_k = 0;
               var ud_lt_af_k = 25;
           }
           var dr_st_af_k_eq = "$$ \\phi_{pl,k} = $$"
           var dr_lt_af_k_eq = "$$ \\phi'_{pl,k} = $$"
           var ud_st_af_k_eq = "$$ \\phi_{pl,u,k} = $$"
           var ud_lt_af_k_eq = "$$ \\phi'_{pl,u,k} = $$"
   
   
           if (geo_known == 'on') {
               var dr_st_cohesion_k = 0;
               var dr_lt_cohesion_k = 0;
               var ud_st_cohesion_k = parseFloat(document.getElementById("ud_st_cohesion_k").value);
               var ud_lt_cohesion_k = parseFloat(document.getElementById("ud_lt_cohesion_k").value);
           } else{
               var dr_st_cohesion_k = 0
               var dr_lt_cohesion_k = 0
               var ud_st_cohesion_k = 80
               var ud_lt_cohesion_k = 8
           }
   
           var dr_st_cohesion_k_eq = "$$ c_k = $$"
           var dr_lt_cohesion_k_eq = "$$ c'_k = $$"
           var ud_st_cohesion_k_eq = "$$ c_{u,k} = $$"
           var ud_lt_cohesion_k_eq = "$$ c'_{u,k} = $$"
   
   
   
           // var m = 1
           // var m_eq = "$$ m = $$"
   
   
   
           var vl_external = parseFloat(document.getElementById("vl_external").value);
           var vl_external_eq = "$$ V_e = $$"
   
           var terrain_live_load = parseFloat(document.getElementById("terrain_live_load").value);
           var terrain_live_load_eq = "$$ p_d = $$"
   
           var concrete_density = 24
           var concrete_density_eq = "$$ \\rho_c = $$"
   
           var hl_length = parseFloat(document.getElementById("hl_length").value);
           var hl_length_eq = "$$ H_l = $$"
   
           var hl_width = parseFloat(document.getElementById("hl_width").value);
           var hl_width_eq = "$$ H_b = $$"
   
           var height_p_hor = parseFloat(document.getElementById("height").value);
           var height_p_hor_eq = "$$ h_H = h = $$"
   
           var m_length = parseFloat(document.getElementById("m_length").value);
           var m_length_eq = "$$ M_l = $$"
   
           var m_width = parseFloat(document.getElementById("m_width").value);
           var m_width_eq = "$$ M_b = $$"
   
           var concrete_type = document.getElementById("concrete_type").value;
                
           var f_ck = parseFloat(concrete_type)
           var f_ck_eq = "$$ f_{ck} = $$"
           var fabrication_method = document.getElementById("fabrication_method").value;
           var fiber_dosage = document.getElementById("fiber_dosage").value;
   
           
           
   
           var include_steel = document.getElementById("include_steel").value;
           var include_fiber = document.getElementById("include_fiber").value;
           var steel_quality = parseFloat(document.getElementById("steel_quality").value);
           var f_yk = parseFloat(steel_quality)
           var f_yk_eq = "$$ f_{yk} = $$"
   
   
           var steel_mesh_type = document.getElementById("steel_mesh_type").value;
           var A_s_eq = "$$ A_s = $$"
           var cover_layer_dropdown = parseFloat(document.getElementById("cover_layer_dropdown").value);
           var cover_layer_custom = parseFloat(document.getElementById("cover_layer_custom").value);
           var m = 1
           var N_m = 0.2
           var concrete_density = 24
   
       }
   
   
   // 4. Split Input Values
   
           var split_concrete =  concrete_type.split(",");
           var concrete_type = parseFloat(split_concrete[0]);
           var concrete_type_text = split_concrete[1];
   
   
           var split_fiber = fiber_dosage.split(",");
           var f_R_1 = parseFloat(split_fiber[0]);
           var f_R_2 = parseFloat(split_fiber[1]);
           var f_R_3 = parseFloat(split_fiber[2]);
           var f_R_4 = parseFloat(split_fiber[3]);
           var fiber_dosage_kg = parseFloat(split_fiber[4]);
   
   
           if (steel_mesh_type == null) {
               var split_steel_mesh = ""
           } else {
               var split_steel_mesh = steel_mesh_type.split(",");
           }
           var A_s = parseFloat(split_steel_mesh[0]);
           var steel_diameter = parseFloat(split_steel_mesh[1]);
           var steel_distance = parseFloat(split_steel_mesh[2]);
           var steel_mesh_type = split_steel_mesh[3];
   
   
           if (surface_type == null) {
               var split_surface_type = ""
           } else {
               var split_surface_type = surface_type.split(",");
           }
           var c_cast = parseFloat(split_surface_type[0]);
           var mu_friction = parseFloat(split_surface_type[1]);
           var surface_type_text = split_surface_type[2];
   
   
   
   
   
   // 5. Point Foundation Calculation
   
      
   
       if (point_foundation_shape == 'rectangular') {
           var volume = length * width * height / 1000000000
       } else if (point_foundation_shape == 'circular') {
           var volume = Math.PI * Math.pow(radius, 2) * height / 1000000000
       }
       var volume = matix.get_volume()
   
       var q = depth / 1000 * ground_density
   
   
       if (height < depth) {
           var g = ground_density * (depth - height) / 1000;
       } else if (height >= depth) {
           var g = 0;
       }
   
       var af_pc = 1.2;
       var dr_st_af_d = 180 / Math.PI * Math.atan(Math.tan(dr_st_af_k * Math.PI / 180) / af_pc)
   
       var dr_lt_af_d = 180 / Math.PI * Math.atan(Math.tan(dr_lt_af_k * Math.PI / 180) / af_pc)
   
       var ud_st_af_d = 180 / Math.PI * Math.atan(Math.tan(ud_st_af_k * Math.PI / 180) / af_pc)
   
       var ud_lt_af_d = 180 / Math.PI * Math.atan(Math.tan(ud_lt_af_k * Math.PI / 180) / af_pc)
   
       var dr_cohesion_pc = 1.2
   
       var ud_cohesion_pc = 1.8
   
       var dr_st_cohesion_d = dr_st_cohesion_k / dr_cohesion_pc
   
       var dr_lt_cohesion_d = dr_lt_cohesion_k / dr_cohesion_pc
   
       var ud_st_cohesion_d = ud_st_cohesion_k / ud_cohesion_pc
   
       var ud_lt_cohesion_d = ud_lt_cohesion_k / ud_cohesion_pc
   
   
       if (fabrication_method == 'in_situ') {
           var a_d_dr_st = dr_st_cohesion_d
           var a_d_dr_lt = dr_lt_cohesion_d
       } else if (fabrication_method == 'prefab') {
           var a_d_dr_st = 0
           var a_d_dr_lt = 0     
       }
       
       var d_c = 1
       var d_q = 1
       var K_g_a_dr_st = (1 - Math.sin(dr_st_af_d * Math.PI / 180)) / (1 + Math.sin(dr_st_af_d * Math.PI / 180))
   
       var K_g_a_dr_lt = (1 - Math.sin(dr_lt_af_d * Math.PI / 180)) / (1 + Math.sin(dr_lt_af_d * Math.PI / 180))
   
       var K_g_a_ud_st = (1 - Math.sin(ud_st_af_d * Math.PI / 180)) / (1 + Math.sin(ud_st_af_d * Math.PI / 180))
   
       var K_g_a_ud_lt = (1 - Math.sin(ud_lt_af_d * Math.PI / 180)) / (1 + Math.sin(ud_lt_af_d * Math.PI / 180))
   
       var K_p_a_dr_st = K_g_a_dr_st
   
       var K_p_a_dr_lt = K_g_a_dr_lt
   
       var K_p_a_ud_st = K_g_a_ud_st
   
       var K_p_a_ud_lt = K_g_a_ud_lt
   
       var K_c_a_dr_st = -(2 * Math.cos(dr_st_af_d * Math.PI / 180)) / (1 + Math.sin(dr_st_af_d * Math.PI / 180))
   
       var K_c_a_dr_lt = -(2 * Math.cos(dr_lt_af_d * Math.PI / 180)) / (1 + Math.sin(dr_lt_af_d * Math.PI / 180))
   
       var K_c_a_ud_st = -(2 * Math.cos(ud_st_af_d * Math.PI / 180)) / (1 + Math.sin(ud_st_af_d * Math.PI / 180))
   
       var K_c_a_ud_lt = -(2 * Math.cos(ud_lt_af_d * Math.PI / 180)) / (1 + Math.sin(ud_lt_af_d * Math.PI / 180))
   
       var K_g_p_dr_st = (1 + Math.sin(dr_st_af_d * Math.PI / 180)) / (1 - Math.sin(dr_st_af_d * Math.PI / 180))
   
       var K_g_p_dr_lt = (1 + Math.sin(dr_lt_af_d * Math.PI / 180)) / (1 - Math.sin(dr_lt_af_d * Math.PI / 180))
   
       var K_g_p_ud_st = (1 + Math.sin(ud_st_af_d * Math.PI / 180)) / (1 - Math.sin(ud_st_af_d * Math.PI / 180))
   
       var K_g_p_ud_lt = (1 + Math.sin(ud_lt_af_d * Math.PI / 180)) / (1 - Math.sin(ud_lt_af_d * Math.PI / 180))
   
       var K_p_p_dr_st = K_g_p_dr_st
   
       var K_p_p_dr_lt = K_g_p_dr_lt
   
       var K_p_p_ud_st = K_g_p_ud_st
   
       var K_p_p_ud_lt = K_g_p_ud_lt
   
       var K_c_p_dr_st = (2 * Math.cos(dr_st_af_d * Math.PI / 180)) / (1 - Math.sin(dr_st_af_d * Math.PI / 180))
   
       var K_c_p_dr_lt = (2 * Math.cos(dr_lt_af_d * Math.PI / 180)) / (1 - Math.sin(dr_lt_af_d * Math.PI / 180))
   
       var K_c_p_ud_st = (2 * Math.cos(ud_st_af_d * Math.PI / 180)) / (1 - Math.sin(ud_st_af_d * Math.PI / 180))
   
       var K_c_p_ud_lt = (2 * Math.cos(ud_lt_af_d * Math.PI / 180)) / (1 - Math.sin(ud_lt_af_d * Math.PI / 180))
   
       var self_weight = volume * concrete_density
   
       if (depth > height) {
           if (column_shape == 'rectangular') {
               var ground_area = (volume / (height / 1000) - column_length * column_width / 1000000)
           } else if (column_shape == 'circular') {
               var ground_area = (volume / (height / 1000) - Math.PI * Math.pow(column_radius, 2) / 1000000)
           }
       } else if (depth <= height) {
           var ground_area = 0
       }
   
       var ground_weight = ground_area * g
   
   
      
       var vl_total_dr_st = self_weight + ground_weight + vl_external
   
       var vl_total_dr_lt = self_weight + ground_weight + vl_external
   
       var vl_total_ud_st = self_weight + ground_weight + vl_external
   
       var vl_total_ud_lt = self_weight + ground_weight + vl_external
   
       var vl_dim_total = vl_external + self_weight
   
       var vl_total_internal = vl_external + self_weight
   
       var vl_total = Math.max(vl_total_dr_st, vl_total_dr_lt, vl_total_ud_st, vl_total_ud_lt)
   
       // var vl_total_dr = Math.max(vl_total_dr_st, vl_total_dr_lt)
       // var vl_total_ud = Math.max(vl_total_ud_st, vl_total_ud_lt)
   
       var hl_total = Math.sqrt(Math.pow(hl_length, 2) + Math.pow(hl_width, 2))
   
   
       var d_0_dr_st = -((K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load) / (ground_density * K_g_a_dr_st)) * 1000
   
       var d_0_dr_lt = -((K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load) / (ground_density * K_g_a_dr_lt)) * 1000
   
       var d_0_ud_st = -((K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load) / (ground_density * K_g_a_ud_st)) * 1000
   
       var d_0_ud_lt = -((K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load) / (ground_density * K_g_a_ud_lt)) * 1000
   
   
   
       if (d_0_dr_st >= depth) {
           var F_a_dr_st_l = 0
       } else if (d_0_dr_st < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_dr_st) {
               var F_a_dr_st_l = width / 1000 * (Math.pow(K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st, 2) / (2 * ground_density * K_g_a_dr_st))
           } else if ((depth - height) > d_0_dr_st) {
               var F_a_dr_st_l = width / 1000 * (height / 1000 * (2 * K_c_a_dr_st * dr_st_cohesion_d + 2 * K_p_a_dr_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_st - height / 1000 * ground_density * K_g_a_dr_st) / 2)
           }
       } else if (d_0_dr_st < depth && (depth - height) <= 0) {
           if (0 <= d_0_dr_st) {
               var F_a_dr_st_l = width / 1000 * (Math.pow(K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st, 2) / (2 * ground_density * K_g_a_dr_st))
           } else if (0 > d_0_dr_st) {
               var F_a_dr_st_l = width / 1000 * (depth / 1000 * (2 * K_c_a_dr_st * dr_st_cohesion_d + 2 * K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st) / 2)
           }
       }
   
       if (d_0_dr_lt >= depth) {
           var F_a_dr_lt_l = 0
       } else if (d_0_dr_lt < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_dr_lt) {
               var F_a_dr_lt_l = width / 1000 * (Math.pow(K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt, 2) / (2 * ground_density * K_g_a_dr_lt))
           } else if ((depth - height) > d_0_dr_lt) {
               var F_a_dr_lt_l = width / 1000 * (height / 1000 * (2 * K_c_a_dr_lt * dr_lt_cohesion_d + 2 * K_p_a_dr_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_lt - height / 1000 * ground_density * K_g_a_dr_lt) / 2)
           }
       } else if (d_0_dr_lt < depth && (depth - height) <= 0) {
           if (0 <= d_0_dr_lt) {
               var F_a_dr_lt_l = width / 1000 * (Math.pow(K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt, 2) / (2 * ground_density * K_g_a_dr_lt))
           } else if (0 > d_0_dr_lt) {
               var F_a_dr_lt_l = width / 1000 * (depth / 1000 * (2 * K_c_a_dr_lt * dr_lt_cohesion_d + 2 * K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt) / 2)
           }
       }
   
       if (d_0_ud_st >= depth) {
           var F_a_ud_st_l = 0
       } else if (d_0_ud_st < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_ud_st) {
               var F_a_ud_st_l = width / 1000 * (Math.pow(K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st, 2) / (2 * ground_density * K_g_a_ud_st))
           } else if ((depth - height) > d_0_ud_st) {
               var F_a_ud_st_l = width / 1000 * (height / 1000 * (2 * K_c_a_ud_st * ud_st_cohesion_d + 2 * K_p_a_ud_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_st - height / 1000 * ground_density * K_g_a_ud_st) / 2)
           }
       } else if (d_0_ud_st < depth && (depth - height) <= 0) {
           if (0 <= d_0_ud_st) {
               var F_a_ud_st_l = width / 1000 * (Math.pow(K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st, 2) / (2 * ground_density * K_g_a_ud_st))
           } else if (0 > d_0_ud_st) {
               var F_a_ud_st_l = width / 1000 * (depth / 1000 * (2 * K_c_a_ud_st * ud_st_cohesion_d + 2 * K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st) / 2)
           }
       }
   
   
       if (d_0_ud_lt >= depth) {
           var F_a_ud_lt_l = 0
       } else if (d_0_ud_lt < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_ud_lt) {
               var F_a_ud_lt_l = width / 1000 * (Math.pow(K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt, 2) / (2 * ground_density * K_g_a_ud_lt))
           } else if ((depth - height) > d_0_ud_lt) {
               var F_a_ud_lt_l = width / 1000 * (height / 1000 * (2 * K_c_a_ud_lt * ud_lt_cohesion_d + 2 * K_p_a_ud_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_lt - height / 1000 * ground_density * K_g_a_ud_lt) / 2)
           }
       } else if (d_0_ud_lt < depth && (depth - height) <= 0) {
           if (0 <= d_0_ud_lt) {
               var F_a_ud_lt_l = width / 1000 * (Math.pow(K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt, 2) / (2 * ground_density * K_g_a_ud_lt))
           } else if (0 > d_0_ud_lt) {
               var F_a_ud_lt_l = width / 1000 * (depth / 1000 * (2 * K_c_a_ud_lt * ud_lt_cohesion_d + 2 * K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt) / 2)
           }
       }
   
   
       if (height >= depth) {
             var F_p_dr_st_l = width / 1000 * (depth / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_st) / 2)
           } else if (height < depth) {
            var F_p_dr_st_l = width / 1000 * (height / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_st - height / 1000 * ground_density * K_g_p_dr_st) / 2)
       }
    
   
       if (height >= depth) {
            var F_p_dr_lt_l = width / 1000 * (depth / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_lt) / 2)
            } else if (height < depth) {
           var F_p_dr_lt_l = width / 1000 * (height / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_lt - height / 1000 * ground_density * K_g_p_dr_lt) / 2)
       }
     
       if (height >= depth) {
              var F_p_ud_st_l = width / 1000 * (depth / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_st) / 2)
              } else if (height < depth) {
           var F_p_ud_st_l = width / 1000 * (height / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_st - height / 1000 * ground_density * K_g_p_ud_st) / 2)
       }
    
       if (height >= depth) {
            var F_p_ud_lt_l = width / 1000 * (depth / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_lt) / 2)
            } else if (height < depth) {
             var F_p_ud_lt_l = width / 1000 * (height / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_lt - height / 1000 * ground_density * K_g_p_ud_lt) / 2)
       }
    
   
   
       if (d_0_dr_st >= depth) {
           var F_a_dr_st_b = 0
       } else if (d_0_dr_st < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_dr_st) {
               var F_a_dr_st_b = length / 1000 * (Math.pow(K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st, 2) / (2 * ground_density * K_g_a_dr_st))
           } else if ((depth - height) > d_0_dr_st) {
               var F_a_dr_st_b = length / 1000 * (height / 1000 * (2 * K_c_a_dr_st * dr_st_cohesion_d + 2 * K_p_a_dr_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_st - height / 1000 * ground_density * K_g_a_dr_st) / 2)
           }
       } else if (d_0_dr_st < depth && (depth - height) <= 0) {
           if (0 <= d_0_dr_st) {
               var F_a_dr_st_b = length / 1000 * (Math.pow(K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st, 2) / (2 * ground_density * K_g_a_dr_st))
           } else if (0 > d_0_dr_st) {
               var F_a_dr_st_b = length / 1000 * (depth / 1000 * (2 * K_c_a_dr_st * dr_st_cohesion_d + 2 * K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st) / 2)
           }
       }
   
   
       if (d_0_dr_lt >= depth) {
           var F_a_dr_lt_b = 0
       } else if (d_0_dr_lt < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_dr_lt) {
               var F_a_dr_lt_b = length / 1000 * (Math.pow(K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt, 2) / (2 * ground_density * K_g_a_dr_lt))
           } else if ((depth - height) > d_0_dr_lt) {
               var F_a_dr_lt_b = length / 1000 * (height / 1000 * (2 * K_c_a_dr_lt * dr_lt_cohesion_d + 2 * K_p_a_dr_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_lt - height / 1000 * ground_density * K_g_a_dr_lt) / 2)
           }
       } else if (d_0_dr_lt < depth && (depth - height) <= 0) {
           if (0 <= d_0_dr_lt) {
               var F_a_dr_lt_b = length / 1000 * (Math.pow(K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt, 2) / (2 * ground_density * K_g_a_dr_lt))
           } else if (0 > d_0_dr_lt) {
               var F_a_dr_lt_b = length / 1000 * (depth / 1000 * (2 * K_c_a_dr_lt * dr_lt_cohesion_d + 2 * K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt) / 2)
           }
       }
   
   
       if (d_0_ud_st >= depth) {
           var F_a_ud_st_b = 0
       } else if (d_0_ud_st < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_ud_st) {
               var F_a_ud_st_b = length / 1000 * (Math.pow(K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st, 2) / (2 * ground_density * K_g_a_ud_st))
           } else if ((depth - height) > d_0_ud_st) {
               var F_a_ud_st_b = length / 1000 * (height / 1000 * (2 * K_c_a_ud_st * ud_st_cohesion_d + 2 * K_p_a_ud_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_st - height / 1000 * ground_density * K_g_a_ud_st) / 2)
           }
       } else if (d_0_ud_st < depth && (depth - height) <= 0) {
           if (0 <= d_0_ud_st) {
               var F_a_ud_st_b = length / 1000 * (Math.pow(K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st, 2) / (2 * ground_density * K_g_a_ud_st))
           } else if (0 > d_0_ud_st) {
               var F_a_ud_st_b = length / 1000 * (depth / 1000 * (2 * K_c_a_ud_st * ud_st_cohesion_d + 2 * K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st) / 2)
           }
       }
   
   
       if (d_0_ud_lt >= depth) {
           var F_a_ud_lt_b = 0
       } else if (d_0_ud_lt < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_ud_lt) {
               var F_a_ud_lt_b = length / 1000 * (Math.pow(K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt, 2) / (2 * ground_density * K_g_a_ud_lt))
           } else if ((depth - height) > d_0_ud_lt) {
               var F_a_ud_lt_b = length / 1000 * (height / 1000 * (2 * K_c_a_ud_lt * ud_lt_cohesion_d + 2 * K_p_a_ud_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_lt - height / 1000 * ground_density * K_g_a_ud_lt) / 2)
           }
       } else if (d_0_ud_lt < depth && (depth - height) <= 0) {
           if ((depth - height) <= d_0_ud_lt) {
               var F_a_ud_lt_b = length / 1000 * (Math.pow(K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt, 2) / (2 * ground_density * K_g_a_ud_lt))
           } else if ((depth - height) > d_0_ud_lt) {
               var F_a_ud_lt_b = length / 1000 * (depth / 1000 * (2 * K_c_a_ud_lt * ud_lt_cohesion_d + 2 * K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt) / 2)
           }
       }
   
   
       if (height >= depth) {
            var F_p_dr_st_b = length / 1000 * (depth / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_st) / 2)
            } else if (height < depth) {
            var F_p_dr_st_b = length / 1000 * (height / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_st - height / 1000 * ground_density * K_g_p_dr_st) / 2)
       }
     
   
       if (height >= depth) {
           var F_p_dr_lt_b = length / 1000 * (depth / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_lt) / 2)
           } else if (height < depth) {
            var F_p_dr_lt_b = length / 1000 * (height / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_lt - height / 1000 * ground_density * K_g_p_dr_lt) / 2)
            }
    
       if (height >= depth) {
          var F_p_ud_st_b = length / 1000 * (depth / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_st) / 2)
          } else if (height < depth) {
            var F_p_ud_st_b = length / 1000 * (height / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_st - height / 1000 * ground_density * K_g_p_ud_st) / 2)
        }
   
   
   
       if (height >= depth) {
         var F_p_ud_lt_b = length / 1000 * (depth / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_lt) / 2)  
       } else if (height < depth) {
           var F_p_ud_lt_b = length / 1000 * (height / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_lt - height / 1000 * ground_density * K_g_p_ud_lt) / 2)
       }
    
   
   
       if (d_0_dr_st >= depth) {
           var F_a_dr_st_r = 0
       } else if (d_0_dr_st < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_dr_st) {
               var F_a_dr_st_r = Math.PI / 2 * radius / 1000 * (Math.pow(K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st, 2) / (2 * ground_density * K_g_a_dr_st))
           } else if ((depth - height) > d_0_dr_st) {
               var F_a_dr_st_r = Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_a_dr_st * dr_st_cohesion_d + 2 * K_p_a_dr_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_st - height / 1000 * ground_density * K_g_a_dr_st) / 2)
           }
       } else if (d_0_dr_st < depth && (depth - height) <= 0) {
           if (0 <= d_0_dr_st) {
               var F_a_dr_st_r = Math.PI / 2 * radius / 1000 * (Math.pow(K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st, 2) / (2 * ground_density * K_g_a_dr_st))
           } else if (0 > d_0_dr_st) {
               var F_a_dr_st_r = Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_a_dr_st * dr_st_cohesion_d + 2 * K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st) / 2)
           }
       }
   
   
       if (d_0_dr_lt >= depth) {
           var F_a_dr_lt_r = 0
       } else if (d_0_dr_lt < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_dr_lt) {
               var F_a_dr_lt_r = Math.PI / 2 * radius / 1000 * (Math.pow(K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt, 2) / (2 * ground_density * K_g_a_dr_lt))
           } else if ((depth - height) > d_0_dr_lt) {
               var F_a_dr_lt_r = Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_a_dr_lt * dr_lt_cohesion_d + 2 * K_p_a_dr_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_lt - height / 1000 * ground_density * K_g_a_dr_lt) / 2)
           }
       } else if (d_0_dr_lt < depth && (depth - height) <= 0) {
           if (0 <= d_0_dr_lt) {
               var F_a_dr_lt_r = Math.PI / 2 * radius / 1000 * (Math.pow(K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt, 2) / (2 * ground_density * K_g_a_dr_lt))
           } else if (0 > d_0_dr_lt) {
               var F_a_dr_lt_r = Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_a_dr_lt * dr_lt_cohesion_d + 2 * K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt) / 2)
           }
       }
   
   
       if (d_0_ud_st >= depth) {
           var F_a_ud_st_r = 0
       } else if (d_0_ud_st < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_ud_st) {
               var F_a_ud_st_r = Math.PI / 2 * radius / 1000 * (Math.pow(K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st, 2) / (2 * ground_density * K_g_a_ud_st))
           } else if ((depth - height) > d_0_ud_st) {
               var F_a_ud_st_r = Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_a_ud_st * ud_st_cohesion_d + 2 * K_p_a_ud_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_st - height / 1000 * ground_density * K_g_a_ud_st) / 2)
           }
       } else if (d_0_ud_st < depth && (depth - height) <= 0) {
           if (0 <= d_0_ud_st) {
               var F_a_ud_st_r = Math.PI / 2 * radius / 1000 * (Math.pow(K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st, 2) / (2 * ground_density * K_g_a_ud_st))
           } else if (0 > d_0_ud_st) {
               var F_a_ud_st_r = Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_a_ud_st * ud_st_cohesion_d + 2 * K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st) / 2)
           }
       }
   
       if (d_0_ud_lt >= depth) {
           var F_a_ud_lt_r = 0
       } else if (d_0_ud_lt < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_ud_lt) {
               var F_a_ud_lt_r = Math.PI / 2 * radius / 1000 * (Math.pow(K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt, 2) / (2 * ground_density * K_g_a_ud_lt))
           } else if ((depth - height) > d_0_ud_lt) {
               var F_a_ud_lt_r = Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_a_ud_lt * ud_lt_cohesion_d + 2 * K_p_a_ud_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_lt - height / 1000 * ground_density * K_g_a_ud_lt) / 2)
           }
       } else if (d_0_ud_lt < depth && (depth - height) <= 0) {
           if (0 <= d_0_ud_lt) {
               var F_a_ud_lt_r = Math.PI / 2 * radius / 1000 * (Math.pow(K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt, 2) / (2 * ground_density * K_g_a_ud_lt))
           } else if (0 > d_0_ud_lt) {
               var F_a_ud_lt_r = Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_a_ud_lt * ud_lt_cohesion_d + 2 * K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt) / 2)
           }
       }
   
       if (height >= depth) {
           var F_p_dr_st_r = Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_st) / 2)
       } else if (height < depth) {
           var F_p_dr_st_r = Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_p_dr_st * dr_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_st - height / 1000 * ground_density * K_g_p_dr_st) / 2)
       }
   
   
       if (height >= depth) {
             var F_p_dr_lt_r = Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_dr_lt) / 2)
         } else if (height < depth) {
           var F_p_dr_lt_r = Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_dr_lt - height / 1000 * ground_density * K_g_p_dr_lt) / 2)
       }
   
       if (height >= depth) {
             var F_p_ud_st_r = Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_st) / 2)
       } else if (height < depth) {
            var F_p_ud_st_r = Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_p_ud_st * ud_st_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_st - height / 1000 * ground_density * K_g_p_ud_st) / 2)
       }
   
       if (height >= depth) {
             var F_p_ud_lt_r = Math.PI / 2 * radius / 1000 * (depth / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + depth / 1000 * ground_density * K_g_p_ud_lt) / 2)
       } else if (height < depth) {
           var F_p_ud_lt_r = Math.PI / 2 * radius / 1000 * (height / 1000 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + 2 * depth / 1000 * ground_density * K_g_p_ud_lt - height / 1000 * ground_density * K_g_p_ud_lt) / 2)
       }
   
       if (F_p_dr_st_l >= Math.abs(hl_length) + F_a_dr_st_l) {
           var h_res_dr_st_l = 0
       } else {
           if (hl_length < 0) {
               var h_res_dr_st_l = hl_length - F_a_dr_st_l + F_p_dr_st_l
           } else if (hl_length >= 0) {
               var h_res_dr_st_l = hl_length + F_a_dr_st_l - F_p_dr_st_l
           }
       }
   
       if (F_p_dr_lt_l >= Math.abs(hl_length) + F_a_dr_lt_l) {
           var h_res_dr_lt_l = 0
       } else {
           if (hl_length < 0) {
               var h_res_dr_lt_l = hl_length - F_a_dr_lt_l + F_p_dr_lt_l
           } else if (hl_length >= 0) {
               var h_res_dr_lt_l = hl_length + F_a_dr_lt_l - F_p_dr_lt_l
           }
       }
   
       if (F_p_ud_st_l >= Math.abs(hl_length) + F_a_ud_st_l) {
           var h_res_ud_st_l = 0
       } else {
           if (hl_length < 0) {
               var h_res_ud_st_l = hl_length - F_a_ud_st_l + F_p_ud_st_l
           } else if (hl_length >= 0) {
               var h_res_ud_st_l = hl_length + F_a_ud_st_l - F_p_ud_st_l
           }
       }
   
       if (F_p_ud_lt_l >= Math.abs(hl_length) + F_a_ud_lt_l) {
           var h_res_ud_lt_l = 0
       } else {
           if (hl_length < 0) {
               var h_res_ud_lt_l = hl_length - F_a_ud_lt_l + F_p_ud_lt_l
           } else if (hl_length >= 0) {
               var h_res_ud_lt_l = hl_length + F_a_ud_lt_l - F_p_ud_lt_l
           }
       }
   
   
       if (F_p_dr_st_b >= Math.abs(hl_width) + F_a_dr_st_b) {
           var h_res_dr_st_b = 0
       } else {
           if (hl_width < 0) {
               var h_res_dr_st_b = hl_width - F_a_dr_st_b + F_p_dr_st_b
           } else if (hl_width >= 0) {
               var h_res_dr_st_b = hl_width + F_a_dr_st_b - F_p_dr_st_b
           }
       }
   
       if (F_p_dr_lt_b >= Math.abs(hl_width) + F_a_dr_lt_b) {
           var h_res_dr_lt_b = 0
       } else {
           if (hl_width < 0) {
               var h_res_dr_lt_b = hl_width - F_a_dr_lt_b + F_p_dr_lt_b
           } else if (hl_width >= 0) {
               var h_res_dr_lt_b = hl_width + F_a_dr_lt_b - F_p_dr_lt_b
           }
       }
   
       if (F_p_ud_st_b >= Math.abs(hl_width) + F_a_ud_st_b) {
           var h_res_ud_st_b = 0
       } else {
           if (hl_width < 0) {
               var h_res_ud_st_b = hl_width - F_a_ud_st_b + F_p_ud_st_b
           } else if (hl_width >= 0) {
               var h_res_ud_st_b = hl_width + F_a_ud_st_b - F_p_ud_st_b
           }
       }
   
       if (F_p_ud_lt_b >= Math.abs(hl_width) + F_a_ud_lt_b) {
           var h_res_ud_lt_b = 0
       } else {
           if (hl_width < 0) {
               var h_res_ud_lt_b = hl_width - F_a_ud_lt_b + F_p_ud_lt_b
           } else if (hl_width >= 0) {
               var h_res_ud_lt_b = hl_width + F_a_ud_lt_b - F_p_ud_lt_b
           }
       }
   
   
   
       if (F_p_dr_st_r >= Math.abs(hl_length) + F_a_dr_st_r) {
           var h_res_dr_st_rl = 0
       } else {
           if (hl_length < 0) {
               var h_res_dr_st_rl = hl_length - F_a_dr_st_r + F_p_dr_st_r
           } else if (hl_length >= 0) {
               var h_res_dr_st_rl = hl_length + F_a_dr_st_r - F_p_dr_st_r
           }
       }
   
       if (F_p_dr_lt_r >= Math.abs(hl_length) + F_a_dr_lt_r) {
           var h_res_dr_lt_rl = 0
       } else {
           if (hl_length < 0) {
               var h_res_dr_lt_rl = hl_length - F_a_dr_lt_r + F_p_dr_lt_r
           } else if (hl_length >= 0) {
               var h_res_dr_lt_rl = hl_length + F_a_dr_lt_r - F_p_dr_lt_r
           }
       }
   
       if (F_p_ud_st_r >= Math.abs(hl_length) + F_a_ud_st_r) {
           var h_res_ud_st_rl = 0
       } else {
           if (hl_length < 0) {
               var h_res_ud_st_rl = hl_length - F_a_ud_st_r + F_p_ud_st_r
           } else if (hl_length >= 0) {
               var h_res_ud_st_rl = hl_length + F_a_ud_st_r - F_p_ud_st_r
           }
       }
   
       if (F_p_ud_lt_r >= Math.abs(hl_length) + F_a_ud_lt_r) {
           var h_res_ud_lt_rl = 0
       } else {
           if (hl_length < 0) {
               var h_res_ud_lt_rl = hl_length - F_a_ud_lt_r + F_p_ud_lt_r
           } else if (hl_length >= 0) {
               var h_res_ud_lt_rl = hl_length + F_a_ud_lt_r - F_p_ud_lt_r
           }
       }
   
       if (F_p_dr_st_r >= Math.abs(hl_width) + F_a_dr_st_r) {
           var h_res_dr_st_rb = 0
       } else {
           if (hl_width < 0) {
               var h_res_dr_st_rb = hl_width - F_a_dr_st_r + F_p_dr_st_r
           } else if (hl_width >= 0) {
               var h_res_dr_st_rb = hl_width + F_a_dr_st_r - F_p_dr_st_r
           }
       }
   
       if (F_p_dr_lt_r >= Math.abs(hl_width) + F_a_dr_lt_r) {
           var h_res_dr_lt_rb = 0
       } else {
           if (hl_width < 0) {
               var h_res_dr_lt_rb = hl_width - F_a_dr_lt_r + F_p_dr_lt_r
           } else if (hl_width >= 0) {
               var h_res_dr_lt_rb = hl_width + F_a_dr_lt_r - F_p_dr_lt_r
           }
       }
   
       if (F_p_ud_st_r >= Math.abs(hl_width) + F_a_ud_st_r) {
           var h_res_ud_st_rb = 0
       } else {
           if (hl_width < 0) {
               var h_res_ud_st_rb = hl_width - F_a_ud_st_r + F_p_ud_st_r
           } else if (hl_width >= 0) {
               var h_res_ud_st_rb = hl_width + F_a_ud_st_r - F_p_ud_st_r
           }
       }
   
       if (F_p_ud_lt_r >= Math.abs(hl_width) + F_a_ud_lt_r) {
           var h_res_ud_lt_rb = 0
       } else {
           if (hl_width < 0) {
               var h_res_ud_lt_rb = hl_width - F_a_ud_lt_r + F_p_ud_lt_r
           } else if (hl_width >= 0) {
               var h_res_ud_lt_rb = hl_width + F_a_ud_lt_r - F_p_ud_lt_r
           }
       }
   
   
   
   
       if (point_foundation_shape == 'rectangular') {
           var H_res_dr_st = Math.sqrt(Math.pow(h_res_dr_st_l, 2) + Math.pow(h_res_dr_st_b, 2))
           var H_res_dr_lt = Math.sqrt(Math.pow(h_res_dr_lt_l, 2) + Math.pow(h_res_dr_lt_b, 2))
           var H_res_ud_st = Math.sqrt(Math.pow(h_res_ud_st_l, 2) + Math.pow(h_res_ud_st_b, 2))
           var H_res_ud_lt = Math.sqrt(Math.pow(h_res_ud_lt_l, 2) + Math.pow(h_res_ud_lt_b, 2))
       } else if (point_foundation_shape == 'circular') {
           var H_res_dr_st = Math.sqrt(Math.pow(h_res_dr_st_rl, 2) + Math.pow(h_res_dr_st_rb, 2))
           var H_res_dr_lt = Math.sqrt(Math.pow(h_res_dr_lt_rl, 2) + Math.pow(h_res_dr_lt_rb, 2))
           var H_res_ud_st = Math.sqrt(Math.pow(h_res_ud_st_rl, 2) + Math.pow(h_res_ud_st_rb, 2))
           var H_res_ud_lt = Math.sqrt(Math.pow(h_res_ud_lt_rl, 2) + Math.pow(h_res_ud_lt_rb, 2))
       }
       var H_res_both = Math.max(H_res_dr_st, H_res_dr_lt, H_res_ud_st, H_res_ud_lt)
   
   
       if (d_0_dr_st >= depth) {
           var h_cg_a_dr_st = 0
       } else if (d_0_dr_st < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_dr_st) {
               var h_cg_a_dr_st = 1000 * (depth / 1000 - (2 * depth / 1000 / 3 - (K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load) / (3 * ground_density * K_g_a_dr_st)))
           } else if ((depth - height) > d_0_dr_st) {
               var h_cg_a_dr_st = 1000 * (depth / 1000 - (depth / 1000 - height / 1000 / 2 + Math.pow(height / 1000, 2) * ground_density * K_g_a_dr_st / (6 * (2 * K_c_a_dr_st * dr_st_cohesion_d + 2 * K_p_a_dr_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_st - height / 1000 * ground_density * K_g_a_dr_st))))
           }
       } else if (d_0_dr_st < depth && (depth - height) <= 0) {
           if (0 <= d_0_dr_st) {
               var h_cg_a_dr_st = 1000 * (depth / 1000 - (2 * depth / 1000 / 3 - (K_c_a_dr_st * dr_st_cohesion_d + K_p_a_dr_st * terrain_live_load) / (3 * ground_density * K_g_a_dr_st)))
           } else if (0 > d_0_dr_st) {
               var h_cg_a_dr_st = 1000 * (depth / 1000 - depth / 1000 * (3 * K_c_a_dr_st * dr_st_cohesion_d + 3 * K_p_a_dr_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_st) / (3 * (2 * K_c_a_dr_st * dr_st_cohesion_d + 2 * K_p_a_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_st)))
           }
       }
   
   
       if (d_0_dr_lt >= depth) {
           var h_cg_a_dr_lt = 0
       } else if (d_0_dr_lt < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_dr_lt) {
               var h_cg_a_dr_lt = 1000 * (depth / 1000 - (2 * depth / 1000 / 3 - (K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load) / (3 * ground_density * K_g_a_dr_lt)))
           } else if ((depth - height) > d_0_dr_lt) {
               var h_cg_a_dr_lt = 1000 * (depth / 1000 - (depth / 1000 - height / 1000 / 2 + Math.pow(height / 1000, 2) * ground_density * K_g_a_dr_lt / (6 * (2 * K_c_a_dr_lt * dr_lt_cohesion_d + 2 * K_p_a_dr_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_lt - height / 1000 * ground_density * K_g_a_dr_lt))))
           }
       } else if (d_0_dr_lt < depth && (depth - height) <= 0) {
           if (0 <= d_0_dr_lt) {
               var h_cg_a_dr_lt = 1000 * (depth / 1000 - (2 * depth / 1000 / 3 - (K_c_a_dr_lt * dr_lt_cohesion_d + K_p_a_dr_lt * terrain_live_load) / (3 * ground_density * K_g_a_dr_lt)))
           } else if (0 > d_0_dr_lt) {
               var h_cg_a_dr_lt = 1000 * (depth / 1000 - depth / 1000 * (3 * K_c_a_dr_lt * dr_lt_cohesion_d + 3 * K_p_a_dr_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_dr_lt) / (3 * (2 * K_c_a_dr_lt * dr_lt_cohesion_d + 2 * K_p_a_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_dr_lt)))
           }
       }
   
   
       if (d_0_ud_st >= depth) {
           var h_cg_a_ud_st = 0
       } else if (d_0_ud_st < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_ud_st) {
               var h_cg_a_ud_st = 1000 * (depth / 1000 - (2 * depth / 1000 / 3 - (K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load) / (3 * ground_density * K_g_a_ud_st)))
           } else if ((depth - height) > d_0_ud_st) {
               var h_cg_a_ud_st = 1000 * (depth / 1000 - (depth / 1000 - height / 1000 / 2 + Math.pow(height / 1000, 2) * ground_density * K_g_a_ud_st / (6 * (2 * K_c_a_ud_st * ud_st_cohesion_d + 2 * K_p_a_ud_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_st - height / 1000 * ground_density * K_g_a_ud_st))))
           }
       } else if (d_0_ud_st < depth && (depth - height) <= 0) {
           if (0 <= d_0_ud_st) {
               var h_cg_a_ud_st = 1000 * (depth / 1000 - (2 * depth / 1000 / 3 - (K_c_a_ud_st * ud_st_cohesion_d + K_p_a_ud_st * terrain_live_load) / (3 * ground_density * K_g_a_ud_st)))
           } else if (0 > d_0_ud_st) {
               var h_cg_a_ud_st = 1000 * (depth / 1000 - depth / 1000 * (3 * K_c_a_ud_st * ud_st_cohesion_d + 3 * K_p_a_ud_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_st) / (3 * (2 * K_c_a_ud_st * ud_st_cohesion_d + 2 * K_p_a_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_st)))
           }
       }
   
       if (d_0_ud_lt >= depth) {
           var h_cg_a_ud_lt = 0
       } else if (d_0_ud_lt < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_ud_lt) {
               var h_cg_a_ud_lt = 1000 * (depth / 1000 - (2 * depth / 1000 / 3 - (K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load) / (3 * ground_density * K_g_a_ud_lt)))
           } else if ((depth - height) > d_0_ud_lt) {
               var h_cg_a_ud_lt = 1000 * (depth / 1000 - (depth / 1000 - height / 1000 / 2 + Math.pow(height / 1000, 2) * ground_density * K_g_a_ud_lt / (6 * (2 * K_c_a_ud_lt * ud_lt_cohesion_d + 2 * K_p_a_ud_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_lt - height / 1000 * ground_density * K_g_a_ud_lt))))
           }
       } else if (d_0_ud_lt < depth && (depth - height) <= 0) {
           if (0 <= d_0_ud_lt) {
               var h_cg_a_ud_lt = 1000 * (depth / 1000 - (2 * depth / 1000 / 3 - (K_c_a_ud_lt * ud_lt_cohesion_d + K_p_a_ud_lt * terrain_live_load) / (3 * ground_density * K_g_a_ud_lt)))
           } else if (0 > d_0_ud_lt) {
               var h_cg_a_ud_lt = 1000 * (depth / 1000 - depth / 1000 * (3 * K_c_a_ud_lt * ud_lt_cohesion_d + 3 * K_p_a_ud_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_a_ud_lt) / (3 * (2 * K_c_a_ud_lt * ud_lt_cohesion_d + 2 * K_p_a_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_a_ud_lt)))
           }
       }
   
   
       if (depth == 0) {
           var h_cg_p_dr_st = 0
       } else if (depth > 0) {
           if (height >= depth) {
               var h_cg_p_dr_st = 1000 * (depth / 1000 - depth / 1000 * (3 * K_c_p_dr_st * dr_st_cohesion_d + 3 * K_p_p_dr_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_p_dr_st) / (3 * (2 * K_c_p_dr_st * dr_st_cohesion_d + 2 * K_p_p_dr_st * terrain_live_load + depth / 1000 * ground_density * K_g_p_dr_st)))
           } else if (height < depth) {
               var h_cg_p_dr_st = 1000 * (depth / 1000 - (depth / 1000 - height / 1000 / 2 + Math.pow(height / 1000, 2) * ground_density * K_g_p_dr_st / (6 * (2 * K_c_p_dr_st * dr_st_cohesion_d + 2 * K_p_p_dr_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_p_dr_st - height / 1000 * ground_density * K_g_p_dr_st))))
           }
       }
   
   
   
       if (depth ==0) {
           var h_cg_p_dr_lt = 0
       } else if (depth > 0) {
           if (height >= depth) {
               var h_cg_p_dr_lt = 1000 * (depth / 1000 - depth / 1000 * (3 * K_c_p_dr_lt * dr_lt_cohesion_d + 3 * K_p_p_dr_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_p_dr_lt) / (3 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + 2 * K_p_p_dr_lt * terrain_live_load + depth / 1000 * ground_density * K_g_p_dr_lt)))
           } else if (height < depth) {
               var h_cg_p_dr_lt = 1000 * (depth / 1000 - (depth / 1000 - height / 1000 / 2 + Math.pow(height / 1000, 2) * ground_density * K_g_p_dr_lt / (6 * (2 * K_c_p_dr_lt * dr_lt_cohesion_d + 2 * K_p_p_dr_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_p_dr_lt - height / 1000 * ground_density * K_g_p_dr_lt))))
           }
       }
   
       if (depth == 0) {
           var h_cg_p_ud_st = 0
       } else if (depth > 0) {
           if (height >= depth) {
               var h_cg_p_ud_st = 1000 * (depth / 1000 - depth / 1000 * (3 * K_c_p_ud_st * ud_st_cohesion_d + 3 * K_p_p_ud_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_p_ud_st) / (3 * (2 * K_c_p_ud_st * ud_st_cohesion_d + 2 * K_p_p_ud_st * terrain_live_load + depth / 1000 * ground_density * K_g_p_ud_st)))
           } else if (height < depth) {
               var h_cg_p_ud_st = 1000 * (depth / 1000 - (depth / 1000 - height / 1000 / 2 + Math.pow(height / 1000, 2) * ground_density * K_g_p_ud_st / (6 * (2 * K_c_p_ud_st * ud_st_cohesion_d + 2 * K_p_p_ud_st * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_p_ud_st - height / 1000 * ground_density * K_g_p_ud_st))))
           }
       }
   
       if (depth == 0) {
           var h_cg_p_ud_lt = 0
       } else if (depth > 0) {
           if (height >= depth) {
               var h_cg_p_ud_lt = 1000 * (depth / 1000 - depth / 1000 * (3 * K_c_p_ud_lt * ud_lt_cohesion_d + 3 * K_p_p_ud_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_p_ud_lt) / (3 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + 2 * K_p_p_ud_lt * terrain_live_load + depth / 1000 * ground_density * K_g_p_ud_lt)))
           } else if (height < depth) {
               var h_cg_p_ud_lt = 1000 * (depth / 1000 - (depth / 1000 - height / 1000 / 2 + Math.pow(height / 1000, 2) * ground_density * K_g_p_ud_lt / (6 * (2 * K_c_p_ud_lt * ud_lt_cohesion_d + 2 * K_p_p_ud_lt * terrain_live_load + 2 * depth / 1000 * ground_density * K_g_p_ud_lt - height / 1000 * ground_density * K_g_p_ud_lt))))
           }
       }
   
   
       var m_h_length = height_p_hor / 1000 * hl_length
       var m_h_width = height_p_hor / 1000 * hl_width
       var m_h_r = height_p_hor / 1000 * hl_total
       var m_v_dr_st_length = vl_external * ec_vl_length / 1000
       var m_v_dr_lt_length = vl_external * ec_vl_length / 1000
       var m_v_ud_st_length = vl_external * ec_vl_length / 1000
       var m_v_ud_lt_length = vl_external * ec_vl_length / 1000
       var m_v_dim_length = vl_external * ec_vl_length / 1000
       var m_v_dr_st_width = vl_external * ec_vl_width / 1000
       var m_v_dr_lt_width = vl_external * ec_vl_width / 1000
       var m_v_ud_st_width = vl_external * ec_vl_width / 1000
       var m_v_ud_lt_width = vl_external * ec_vl_width / 1000
       var m_v_dim_width = vl_external * ec_vl_width / 1000
       var m_F_a_dr_st_l = h_cg_a_dr_st / 1000 * F_a_dr_st_l
       var m_F_a_dr_lt_l = h_cg_a_dr_lt / 1000 * F_a_dr_lt_l
       var m_F_a_ud_st_l = h_cg_a_ud_st / 1000 * F_a_ud_st_l
       var m_F_a_ud_lt_l = h_cg_a_ud_lt / 1000 * F_a_ud_lt_l
       var m_F_p_dr_st_l = h_cg_p_dr_st / 1000 * F_p_dr_st_l
       var m_F_p_dr_lt_l = h_cg_p_dr_lt / 1000 * F_p_dr_lt_l
       var m_F_p_ud_st_l = h_cg_p_ud_st / 1000 * F_p_ud_st_l
       var m_F_p_ud_lt_l = h_cg_p_ud_lt / 1000 * F_p_ud_lt_l
       var m_F_a_dr_st_b = h_cg_a_dr_st / 1000 * F_a_dr_st_b
       var m_F_a_dr_lt_b = h_cg_a_dr_lt / 1000 * F_a_dr_lt_b
       var m_F_a_ud_st_b = h_cg_a_ud_st / 1000 * F_a_ud_st_b
       var m_F_a_ud_lt_b = h_cg_a_ud_lt / 1000 * F_a_ud_lt_b
       var m_F_p_dr_st_b = h_cg_p_dr_st / 1000 * F_p_dr_st_b
       var m_F_p_dr_lt_b = h_cg_p_dr_lt / 1000 * F_p_dr_lt_b
       var m_F_p_ud_st_b = h_cg_p_ud_st / 1000 * F_p_ud_st_b
       var m_F_p_ud_lt_b = h_cg_p_ud_lt / 1000 * F_p_ud_lt_b
       var m_F_a_dr_st_r = h_cg_a_dr_st / 1000 * F_a_dr_st_r
       var m_F_a_dr_lt_r = h_cg_a_dr_lt / 1000 * F_a_dr_lt_r
       var m_F_a_ud_st_r = h_cg_a_ud_st / 1000 * F_a_ud_st_r
       var m_F_a_ud_lt_r = h_cg_a_ud_lt / 1000 * F_a_ud_lt_r
       var m_F_p_dr_st_r = h_cg_p_dr_st / 1000 * F_p_dr_st_r
       var m_F_p_dr_lt_r = h_cg_p_dr_lt / 1000 * F_p_dr_lt_r
       var m_F_p_ud_st_r = h_cg_p_ud_st / 1000 * F_p_ud_st_r
       var m_F_p_ud_lt_r = h_cg_p_ud_lt / 1000 * F_p_ud_lt_r
       var m_r = Math.sqrt(Math.pow(m_length, 2) + Math.pow(m_width, 2))
   
   
       if (m_F_p_dr_st_l > Math.abs(m_h_length + m_v_dr_st_length + m_length) + m_F_a_dr_st_l) {
           var m_total_dr_st_l = 0
       } else {
           if (m_h_length + m_v_dr_st_length + m_length < 0) {
               var m_total_dr_st_l = m_h_length + m_v_dr_st_length + m_length - m_F_a_dr_st_l + m_F_p_dr_st_l
           } else if (m_h_length + m_v_dr_st_length + m_length >= 0) {
               var m_total_dr_st_l = m_h_length + m_v_dr_st_length + m_length + m_F_a_dr_st_l - m_F_p_dr_st_l
           }
       }
   
       if (m_F_p_dr_lt_l > Math.abs(m_h_length + m_v_dr_lt_length + m_length) + m_F_a_dr_lt_l) {
           var m_total_dr_lt_l = 0
       } else {
           if (m_h_length + m_v_dr_lt_length + m_length < 0) {
               var m_total_dr_lt_l = m_h_length + m_v_dr_lt_length + m_length - m_F_a_dr_lt_l + m_F_p_dr_lt_l
           } else if (m_h_length + m_v_dr_lt_length + m_length >= 0) {
               var m_total_dr_lt_l = m_h_length + m_v_dr_lt_length + m_length + m_F_a_dr_lt_l - m_F_p_dr_lt_l
           }
       }
   
       if (m_F_p_ud_st_l > Math.abs(m_h_length + m_v_ud_st_length + m_length) + m_F_a_ud_st_l) {
           var m_total_ud_st_l = 0
       } else {
           if (m_h_length + m_v_ud_st_length + m_length < 0) {
               var m_total_ud_st_l = m_h_length + m_v_ud_st_length + m_length - m_F_a_ud_st_l + m_F_p_ud_st_l
           } else if (m_h_length + m_v_ud_st_length + m_length >= 0) {
               var m_total_ud_st_l = m_h_length + m_v_ud_st_length + m_length + m_F_a_ud_st_l - m_F_p_ud_st_l
           }
       }
   
       if (m_F_p_ud_lt_l > Math.abs(m_h_length + m_v_ud_lt_length + m_length) + m_F_a_ud_lt_l) {
           var m_total_ud_lt_l = 0
       } else {
           if (m_h_length + m_v_ud_lt_length + m_length < 0) {
               var m_total_ud_lt_l = m_h_length + m_v_ud_lt_length + m_length - m_F_a_ud_lt_l + m_F_p_ud_lt_l
           } else if (m_h_length + m_v_ud_lt_length + m_length >= 0) {
               var m_total_ud_lt_l = m_h_length + m_v_ud_lt_length + m_length + m_F_a_ud_lt_l - m_F_p_ud_lt_l
           }
       }
   
   
       if (m_F_p_dr_st_b > Math.abs(m_h_width + m_v_dr_st_width + m_width) + m_F_a_dr_st_b) {
           var m_total_dr_st_b = 0
       } else {
           if (m_h_width + m_v_dr_st_width + m_width < 0) {
               var m_total_dr_st_b = m_h_width + m_v_dr_st_width + m_width - m_F_a_dr_st_b + m_F_p_dr_st_b
           } else if (m_h_width + m_v_dr_st_width + m_width >= 0) {
               var m_total_dr_st_b = m_h_width + m_v_dr_st_width + m_width + m_F_a_dr_st_b - m_F_p_dr_st_b
           }
       }
   
       if (m_F_p_dr_lt_b > Math.abs(m_h_width + m_v_dr_lt_width + m_width) + m_F_a_dr_lt_b) {
           var m_total_dr_lt_b = 0
       } else {
           if (m_h_width + m_v_dr_lt_width + m_width < 0) {
               var m_total_dr_lt_b = m_h_width + m_v_dr_lt_width + m_width - m_F_a_dr_lt_b + m_F_p_dr_lt_b
           } else if (m_h_width + m_v_dr_lt_width + m_width >= 0) {
               var m_total_dr_lt_b = m_h_width + m_v_dr_lt_width + m_width + m_F_a_dr_lt_b - m_F_p_dr_lt_b
           }
       }
   
       if (m_F_p_ud_st_b > Math.abs(m_h_width + m_v_ud_st_width + m_width) + m_F_a_ud_st_b) {
           var m_total_ud_st_b = 0
       } else {
           if (m_h_width + m_v_ud_st_width + m_width < 0) {
               var m_total_ud_st_b = m_h_width + m_v_ud_st_width + m_width - m_F_a_ud_st_b + m_F_p_ud_st_b
           } else if (m_h_width + m_v_ud_st_width + m_width >= 0) {
               var m_total_ud_st_b = m_h_width + m_v_ud_st_width + m_width + m_F_a_ud_st_b - m_F_p_ud_st_b
           }
       }
   
       if (m_F_p_ud_lt_b > Math.abs(m_h_width + m_v_ud_lt_width + m_width) + m_F_a_ud_lt_b) {
           var m_total_ud_lt_b = 0
       } else {
           if (m_h_width + m_v_ud_lt_width + m_width < 0) {
               var m_total_ud_lt_b = m_h_width + m_v_ud_lt_width + m_width - m_F_a_ud_lt_b + m_F_p_ud_lt_b
           } else if (m_h_width + m_v_ud_lt_width + m_width >= 0) {
               var m_total_ud_lt_b = m_h_width + m_v_ud_lt_width + m_width + m_F_a_ud_lt_b - m_F_p_ud_lt_b
           }
       }
   
   
   
       if (m_F_p_dr_st_r > Math.abs(m_h_length + m_v_dr_st_length + m_length) + m_F_a_dr_st_r) {
           var m_total_dr_st_rl = 0
       } else {
           if (m_h_length + m_v_dr_st_length + m_length < 0) {
               var m_total_dr_st_rl = m_h_length + m_v_dr_st_length + m_length - m_F_a_dr_st_r + m_F_p_dr_st_r
           } else if (m_h_length + m_v_dr_st_length + m_length >= 0) {
               var m_total_dr_st_rl = m_h_length + m_v_dr_st_length + m_length + m_F_a_dr_st_r - m_F_p_dr_st_r
           }
       }
   
       if (m_F_p_dr_lt_r > Math.abs(m_h_length + m_v_dr_lt_length + m_length) + m_F_a_dr_lt_r) {
           var m_total_dr_lt_rl = 0
       } else {
           if (m_h_length + m_v_dr_lt_length + m_length < 0) {
               var m_total_dr_lt_rl = m_h_length + m_v_dr_lt_length + m_length - m_F_a_dr_lt_r + m_F_p_dr_lt_r
           } else if (m_h_length + m_v_dr_lt_length + m_length >= 0) {
               var m_total_dr_lt_rl = m_h_length + m_v_dr_lt_length + m_length + m_F_a_dr_lt_r - m_F_p_dr_lt_r
           }
       }
   
       if (m_F_p_ud_st_r > Math.abs(m_h_length + m_v_ud_st_length + m_length) + m_F_a_ud_st_r) {
           var m_total_ud_st_rl = 0
       } else {
           if (m_h_length + m_v_ud_st_length + m_length < 0) {
               var m_total_ud_st_rl = m_h_length + m_v_ud_st_length + m_length - m_F_a_ud_st_r + m_F_p_ud_st_r
           } else if (m_h_length + m_v_ud_st_length + m_length >= 0) {
               var m_total_ud_st_rl = m_h_length + m_v_ud_st_length + m_length + m_F_a_ud_st_r - m_F_p_ud_st_r
           }
       }
   
       if (m_F_p_ud_lt_r > Math.abs(m_h_length + m_v_ud_lt_length + m_length) + m_F_a_ud_lt_r) {
           var m_total_ud_lt_rl = 0
       } else {
           if (m_h_length + m_v_ud_lt_length + m_length < 0) {
               var m_total_ud_lt_rl = m_h_length + m_v_ud_lt_length + m_length - m_F_a_ud_lt_r + m_F_p_ud_lt_r
           } else if (m_h_length + m_v_ud_lt_length + m_length >= 0) {
               var m_total_ud_lt_rl = m_h_length + m_v_ud_lt_length + m_length + m_F_a_ud_lt_r - m_F_p_ud_lt_r
           }
       }
   
   
       if (m_F_p_dr_st_r > Math.abs(m_h_width + m_v_dr_st_width + m_width) + m_F_a_dr_st_r) {
           var m_total_dr_st_rb = 0
       } else {
           if (m_h_width + m_v_dr_st_width + m_width < 0) {
               var m_total_dr_st_rb = m_h_width + m_v_dr_st_width + m_width - m_F_a_dr_st_r + m_F_p_dr_st_r
           } else if (m_h_width + m_v_dr_st_width + m_width >= 0) {
               var m_total_dr_st_rb = m_h_width + m_v_dr_st_width + m_width + m_F_a_dr_st_r - m_F_p_dr_st_r
           }
       }
   
       if (m_F_p_dr_lt_r > Math.abs(m_h_width + m_v_dr_lt_width + m_width) + m_F_a_dr_lt_r) {
           var m_total_dr_lt_rb = 0
       } else {
           if (m_h_width + m_v_dr_lt_width + m_width < 0) {
               var m_total_dr_lt_rb = m_h_width + m_v_dr_lt_width + m_width - m_F_a_dr_lt_r + m_F_p_dr_lt_r
           } else if (m_h_width + m_v_dr_lt_width + m_width >= 0) {
               var m_total_dr_lt_rb = m_h_width + m_v_dr_lt_width + m_width + m_F_a_dr_lt_r - m_F_p_dr_lt_r
           }
       }
   
       if (m_F_p_ud_st_r > Math.abs(m_h_width + m_v_ud_st_width + m_width) + m_F_a_ud_st_r) {
           var m_total_ud_st_rb = 0
       } else {
           if (m_h_width + m_v_ud_st_width + m_width < 0) {
               var m_total_ud_st_rb = m_h_width + m_v_ud_st_width + m_width - m_F_a_ud_st_r + m_F_p_ud_st_r
           } else if (m_h_width + m_v_ud_st_width + m_width >= 0) {
               var m_total_ud_st_rb = m_h_width + m_v_ud_st_width + m_width + m_F_a_ud_st_r - m_F_p_ud_st_r
           }
       }
   
       if (m_F_p_ud_lt_r > Math.abs(m_h_width + m_v_ud_lt_width + m_width) + m_F_a_ud_lt_r) {
           var m_total_ud_lt_rb = 0
       } else {
           if (m_h_width + m_v_ud_lt_width + m_width < 0) {
               var m_total_ud_lt_rb = m_h_width + m_v_ud_lt_width + m_width - m_F_a_ud_lt_r + m_F_p_ud_lt_r
           } else if (m_h_width + m_v_ud_lt_width + m_width >= 0) {
               var m_total_ud_lt_rb = m_h_width + m_v_ud_lt_width + m_width + m_F_a_ud_lt_r - m_F_p_ud_lt_r
           }
       }
   
       var m_dim_length = m_h_length + m_length + m_v_dim_length
       var m_dim_width = m_h_width + m_width + m_v_dim_width
       var m_dim_r_length = m_h_length + m_length + m_v_dim_length
       var m_dim_r_width = m_h_width + m_width + m_v_dim_width
   
   
       // effective dimensions
   
       var e_total_dr_st_l = Math.abs(m_total_dr_st_l) / vl_total_dr_st * 1000
       var e_total_dr_lt_l = Math.abs(m_total_dr_lt_l) / vl_total_dr_lt * 1000
       var e_total_ud_st_l = Math.abs(m_total_ud_st_l) / vl_total_ud_st * 1000
       var e_total_ud_lt_l = Math.abs(m_total_ud_lt_l) / vl_total_ud_lt * 1000
       var e_total_dr_st_b = Math.abs(m_total_dr_st_b) / vl_total_dr_st * 1000
       var e_total_dr_lt_b = Math.abs(m_total_dr_lt_b) / vl_total_dr_lt * 1000
       var e_total_ud_st_b = Math.abs(m_total_ud_st_b) / vl_total_ud_st * 1000
       var e_total_ud_lt_b = Math.abs(m_total_ud_lt_b) / vl_total_ud_lt * 1000
       var e_total_dr_st_rl = Math.abs(m_total_dr_st_rl) / vl_total_dr_st * 1000
       var e_total_dr_lt_rl = Math.abs(m_total_dr_lt_rl) / vl_total_dr_lt * 1000
       var e_total_ud_st_rl = Math.abs(m_total_ud_st_rl) / vl_total_ud_st * 1000
       var e_total_ud_lt_rl = Math.abs(m_total_ud_lt_rl) / vl_total_ud_lt * 1000
       var e_total_dr_st_rb = Math.abs(m_total_dr_st_rb) / vl_total_dr_st * 1000
       var e_total_dr_lt_rb = Math.abs(m_total_dr_lt_rb) / vl_total_dr_lt * 1000
       var e_total_ud_st_rb = Math.abs(m_total_ud_st_rb) / vl_total_ud_st * 1000
       var e_total_ud_lt_rb = Math.abs(m_total_ud_lt_rb) / vl_total_ud_lt * 1000
       var e_total_dr_st_r = Math.sqrt(Math.pow(e_total_dr_st_rl, 2) + Math.pow(e_total_dr_st_rb, 2))
       var e_total_dr_lt_r = Math.sqrt(Math.pow(e_total_dr_lt_rl, 2) + Math.pow(e_total_dr_lt_rb, 2))
       var e_total_ud_st_r = Math.sqrt(Math.pow(e_total_ud_st_rl, 2) + Math.pow(e_total_ud_st_rb, 2))
       var e_total_ud_lt_r = Math.sqrt(Math.pow(e_total_ud_lt_rl, 2) + Math.pow(e_total_ud_lt_rb, 2))
       var e_dim_l = Math.abs(m_dim_length) / vl_dim_total * 1000
       var e_dim_b = Math.abs(m_dim_width) / vl_dim_total * 1000
       var e_dim_rl = Math.abs(m_dim_r_length) / vl_dim_total * 1000
       var e_dim_rb = Math.abs(m_dim_r_width) / vl_dim_total * 1000
       var e_dim_r = Math.sqrt(Math.pow(e_dim_rl, 2) + Math.pow(e_dim_rb, 2))
       var v_dr_st_r = 2 * Math.acos(e_total_dr_st_r / radius) * 180 / Math.PI
       var v_dr_lt_r = 2 * Math.acos(e_total_dr_lt_r / radius) * 180 / Math.PI
       var v_ud_st_r = 2 * Math.acos(e_total_ud_st_r / radius) * 180 / Math.PI
       var v_ud_lt_r = 2 * Math.acos(e_total_ud_lt_r / radius) * 180 / Math.PI
       var v_dim_r = 2 * Math.acos(e_dim_r / radius) * 180 / Math.PI
   
   
       if (point_foundation_shape == 'rectangular') {
           var ef_dr_st_l = length - 2 * e_total_dr_st_l
           var ef_dr_lt_l = length - 2 * e_total_dr_lt_l
           var ef_ud_st_l = length - 2 * e_total_ud_st_l
           var ef_ud_lt_l = length - 2 * e_total_ud_lt_l
           var ef_dim_l = length - 2 * e_dim_l
   
           var ef_dr_st_b = width - 2 * e_total_dr_st_b
           var ef_dr_lt_b = width - 2 * e_total_dr_lt_b
           var ef_ud_st_b = width - 2 * e_total_ud_st_b
           var ef_ud_lt_b = width - 2 * e_total_ud_lt_b
           var ef_dim_b = width - 2 * e_dim_b
   
           var A_eff_dr_st = ef_dr_st_l * ef_dr_st_b / 1000000
           var A_eff_dr_lt = ef_dr_lt_l * ef_dr_lt_b / 1000000
           var A_eff_ud_st = ef_ud_st_l * ef_ud_st_b / 1000000
           var A_eff_ud_lt = ef_ud_lt_l * ef_ud_lt_b / 1000000
           var A_dim_eff = ef_dim_l * ef_dim_b / 1000000
   
           var ef_dr_st_l_eq = "$$ l_{eff} = l - 2\\,e_l = $$"
           var ef_dr_lt_l_eq = "$$ l'_{eff} = l - 2\\,e'_l = $$"
           var ef_ud_st_l_eq = "$$ l_{eff,u} = l - 2\\,e_{l,u} = $$"
           var ef_ud_lt_l_eq = "$$ l'_{eff,u} = l - 2\\,e'_{l,u} = $$"
           var ef_dim_l_eq = "$$ l_{eff} = l - 2\\,e_l = $$"
   
           var ef_dr_st_b_eq = "$$ b_{eff} = b - 2\\,e_b = $$"
           var ef_dr_lt_b_eq = "$$ b'_{eff} = b - 2\\,e'_b = $$"
           var ef_ud_st_b_eq = "$$ b_{eff,u} = b - 2\\,e_{b,u} = $$"
           var ef_ud_lt_b_eq = "$$ b'_{eff,u} = b - 2\\,e'_{b,u} = $$"
           var ef_dim_b_eq = "$$ b_{eff} = b - 2\\,e_b = $$"
   
           var A_eff_dr_st_eq = "$$ A_{eff} = l_{eff}\\,b_{eff} = $$"
           var A_eff_dr_lt_eq = "$$ A'_{eff} = l'_{eff}\\,b'_{eff} = $$"
           var A_eff_ud_st_eq = "$$ A_{eff,u} = l_{eff,u}\\,b_{eff,u} = $$"
           var A_eff_ud_lt_eq = "$$ A'_{eff,u} = l'_{eff,u}\\,b'_{eff,u} = $$"
           var A_dim_eff_eq = "$$ A_{eff} = l_{eff}\\,b_{eff} = $$"
   
       } else if (point_foundation_shape == 'circular') {
   
          
   
           var A_eff_dr_st = Math.pow(radius / 1000, 2) * (v_dr_st_r * Math.PI / 180 - Math.sin(v_dr_st_r * Math.PI / 180))
           var A_eff_dr_lt = Math.pow(radius / 1000, 2) * (v_dr_lt_r * Math.PI / 180 - Math.sin(v_dr_lt_r * Math.PI / 180))
           var A_eff_ud_st = Math.pow(radius / 1000, 2) * (v_ud_st_r * Math.PI / 180 - Math.sin(v_ud_st_r * Math.PI / 180))
           var A_eff_ud_lt = Math.pow(radius / 1000, 2) * (v_ud_lt_r * Math.PI / 180 - Math.sin(v_ud_lt_r * Math.PI / 180))
           
   
           var A_dim_eff = Math.pow(radius / 1000, 2) * (v_dim_r * Math.PI / 180 - Math.sin(v_dim_r * Math.PI / 180))
   
           var ef_dr_st_b = Math.sqrt(Math.tan(v_dr_st_r * Math.PI / 180 / 4) * A_eff_dr_st * 1000000)
           var ef_dr_lt_b = Math.sqrt(Math.tan(v_dr_lt_r * Math.PI / 180 / 4) * A_eff_dr_lt * 1000000)
           var ef_ud_st_b = Math.sqrt(Math.tan(v_ud_st_r * Math.PI / 180 / 4) * A_eff_ud_st * 1000000)
           var ef_ud_lt_b = Math.sqrt(Math.tan(v_ud_lt_r * Math.PI / 180 / 4) * A_eff_ud_lt * 1000000)
           var ef_dim_b = Math.sqrt(Math.tan(v_dim_r * Math.PI / 180 / 4) * A_dim_eff * 1000000)
   
           var ef_dr_st_l = A_eff_dr_st * 1000000 / ef_dr_st_b
           var ef_dr_lt_l = A_eff_dr_lt * 1000000 / ef_dr_lt_b
           var ef_ud_st_l = A_eff_ud_st * 1000000 / ef_ud_st_b
           var ef_ud_lt_l = A_eff_ud_lt * 1000000 / ef_ud_lt_b
           var ef_dim_l = A_dim_eff * 1000000 / ef_dim_b
   
           var ef_dr_st_l_eq = "$$ l_{eff} = \\frac{A_{eff}}{b_{eff}} = $$"
           var ef_dr_lt_l_eq = "$$ l'_{eff} = \\frac{A'_{eff}}{b'_{eff}} = $$"
           var ef_ud_st_l_eq = "$$ l_{eff,u} = \\frac{A_{eff,u}}{b_{eff,u}} = $$"
           var ef_ud_lt_l_eq = "$$ l'_{eff,u} =\\frac{A'_{eff,u}}{b'_{eff,u}}  = $$"
           var ef_dim_l_eq = "$$ l_{eff} = \\frac{A_{eff}}{b_{eff}} = $$"
   
           var ef_dr_st_b_eq = "$$ b_{eff} = \\sqrt{\\tan\\left(\\frac{v}{4}\\right)A_{eff}} = $$"
           var ef_dr_lt_b_eq = "$$ b'_{eff} = \\sqrt{\\tan\\left(\\frac{v'}{4}\\right)A'_{eff}} = $$"
           var ef_ud_st_b_eq = "$$ b_{eff,u} = \\sqrt{\\tan\\left(\\frac{v_u}{4}\\right)A_{eff,u}} = $$"
           var ef_ud_lt_b_eq = "$$ b'_{eff,u} = \\sqrt{\\tan\\left(\\frac{v'_u}{4}\\right)A'_{eff,u}} = $$"
           var ef_dim_b_eq = "$$ b_{eff} = \\sqrt{\\tan\\left(\\frac{v}{4}\\right)A_{eff}} = $$"
   
           var A_eff_dr_st_eq = "$$ A_{eff} = r^2\\,\\left(v-\\sin\\left(v\\right)\\right) = $$"
           var A_eff_dr_lt_eq = "$$ A'_{eff} = r^2\\,\\left(v-\\sin\\left(v'\\right)\\right) = $$"
           var A_eff_ud_st_eq = "$$ A_{eff,u} = r^2\\,\\left(v-\\sin\\left(v_u\\right)\\right) = $$"
           var A_eff_ud_lt_eq = "$$ A'_{eff,u} = r^2\\,\\left(v-\\sin\\left(v'_u\\right)\\right) = $$"
           var A_dim_eff_eq = "$$ A_{eff} = r^2\\,\\left(v-\\sin\\left(v\\right)\\right) = $$"
   
       }
   
       //ground bearing capacity
   
       if (point_foundation_shape == 'rectangular') {
           if (e_total_dr_st_l < 0.3 * length && e_total_dr_st_b < 0.3 * width) {
   
               var N_q_dr_st = Math.exp(Math.PI * Math.tan(dr_st_af_d * Math.PI / 180)) * (1 + Math.sin(dr_st_af_d * Math.PI / 180)) / (1 - Math.sin(dr_st_af_d * Math.PI / 180))
               var N_c_dr_st = (N_q_dr_st - 1) / Math.tan(dr_st_af_d * Math.PI / 180)
               var N_g_dr_st = 1 / 4 * Math.pow((N_q_dr_st - 1) * Math.cos(dr_st_af_d * Math.PI / 180), (3 / 2))
           } else if (e_total_dr_st_l >= 0.3 * length || e_total_dr_st_b >= 0.3 * width) {
   
               var N_q_dr_st = Math.exp(Math.PI * Math.tan(dr_st_af_d * Math.PI / 180)) * (1 + Math.sin(dr_st_af_d * Math.PI / 180)) / (1 - Math.sin(dr_st_af_d * Math.PI / 180))
               var N_c_dr_st = (1.05 + Math.pow(Math.tan(dr_st_af_d * Math.PI / 180), 3)) * (N_q_dr_st - 1) / Math.tan(dr_st_af_d * Math.PI / 180)
               var N_g_dr_st = 2 * (1 / 4 * Math.pow((N_q_dr_st - 1) * Math.cos(dr_st_af_d * Math.PI / 180), (3 / 2)))
           }
   
           if (e_total_dr_lt_l < 0.3 * length && e_total_dr_lt_b < 0.3 * width) {
   
               var N_q_dr_lt = Math.exp(Math.PI * Math.tan(dr_lt_af_d * Math.PI / 180)) * (1 + Math.sin(dr_lt_af_d * Math.PI / 180)) / (1 - Math.sin(dr_lt_af_d * Math.PI / 180))
               var N_c_dr_lt = (N_q_dr_lt - 1) / Math.tan(dr_lt_af_d * Math.PI / 180)
               var N_g_dr_lt = 1 / 4 * Math.pow((N_q_dr_lt - 1) * Math.cos(dr_lt_af_d * Math.PI / 180), (3 / 2))
           } else if (e_total_dr_lt_l >= 0.3 * length || e_total_dr_lt_b >= 0.3 * width) {
   
               var N_q_dr_lt = Math.exp(Math.PI * Math.tan(dr_lt_af_d * Math.PI / 180)) * (1 + Math.sin(dr_lt_af_d * Math.PI / 180)) / (1 - Math.sin(dr_lt_af_d * Math.PI / 180))
               var N_c_dr_lt = (1.05 + Math.pow(Math.tan(dr_lt_af_d * Math.PI / 180), 3)) * (N_q_dr_lt - 1) / Math.tan(dr_lt_af_d * Math.PI / 180)
               var N_g_dr_lt = 2 * (1 / 4 * Math.pow((N_q_dr_lt - 1) * Math.cos(dr_lt_af_d * Math.PI / 180), (3 / 2)))
           }
   
           if (e_total_ud_st_l < 0.3 * length && e_total_ud_st_b < 0.3 * width) {
   
               var N_q_ud_st = 1
               var N_c_ud_st = 2 + Math.PI // + (N_q_ud_st - 1) / Math.tan(ud_st_af_d * Math.PI / 180)       
               var N_g_ud_st = 0
           } else if (e_total_ud_st_l >= 0.3 * length || e_total_ud_st_b >= 0.3 * width) {
   
               //var N_q_ud_st = Math.exp(Math.PI * Math.tan(ud_st_af_d * Math.PI / 180)) * (1 + Math.sin(ud_st_af_d * Math.PI / 180)) / (1 - Math.sin(ud_st_af_d * Math.PI / 180))
               var N_q_ud_st = 1
               var N_c_ud_st = (1.05 + Math.pow(Math.tan(ud_st_af_d * Math.PI / 180), 3)) * (2 + Math.PI) // + (N_q_ud_st - 1) / Math.tan(ud_st_af_d * Math.PI / 180))
               var N_g_ud_st = 0      
           }
   
           if (e_total_ud_lt_l < 0.3 * length && e_total_ud_lt_b < 0.3 * width) {
   
               if (ud_lt_af_d == 0) {
                   var N_q_ud_lt = 1       
                   var N_c_ud_lt = 2 + Math.PI // + (N_q_ud_lt - 1) / Math.tan(ud_lt_af_d * Math.PI / 180)
                   var N_g_ud_lt = 0
   
               } else {
                   var N_q_ud_lt = Math.exp(Math.PI * Math.tan(ud_lt_af_d * Math.PI / 180)) * (1 + Math.sin(ud_lt_af_d * Math.PI / 180)) / (1 - Math.sin(ud_lt_af_d * Math.PI / 180))
                   var N_c_ud_lt = (N_q_ud_lt - 1) / Math.tan(ud_lt_af_d * Math.PI / 180)
                   var N_g_ud_lt = 1 / 4 * Math.pow((N_q_ud_lt - 1) * Math.cos(ud_lt_af_d * Math.PI / 180), (3 / 2))
               }
   
           } else if (e_total_ud_lt_l >= 0.3 * length || e_total_ud_lt_b >= 0.3 * width) {
               if (ud_lt_af_d == 0) {
                   var N_q_ud_lt = 1
                   var N_c_ud_lt = (1.05 + Math.pow(Math.tan(ud_lt_af_d * Math.PI / 180), 3)) * (2 + Math.PI) // + (N_q_ud_lt - 1) / Math.tan(ud_lt_af_d * Math.PI / 180))
                   var N_g_ud_lt = 0
               } else {
                   var N_q_ud_lt = Math.exp(Math.PI * Math.tan(ud_lt_af_d * Math.PI / 180)) * (1 + Math.sin(ud_lt_af_d * Math.PI / 180)) / (1 - Math.sin(ud_lt_af_d * Math.PI / 180))
                   var N_c_ud_lt = (1.05 + Math.pow(Math.tan(ud_lt_af_d * Math.PI / 180), 3)) * (N_q_ud_lt - 1) / Math.tan(ud_lt_af_d * Math.PI / 180)
                   var N_g_ud_lt = 2 * (1 / 4 * Math.pow((N_q_ud_lt - 1) * Math.cos(ud_lt_af_d * Math.PI / 180), (3 / 2)))
               }
   
           }
   
       } else if (point_foundation_shape == 'circular') {
           if (e_total_dr_st_r < 0.3 * 2 * radius) {
   
               var N_q_dr_st = Math.exp(Math.PI * Math.tan(dr_st_af_d * Math.PI / 180)) * (1 + Math.sin(dr_st_af_d * Math.PI / 180)) / (1 - Math.sin(dr_st_af_d * Math.PI / 180))
               var N_c_dr_st = (N_q_dr_st - 1) / Math.tan(dr_st_af_d * Math.PI / 180)
               var N_g_dr_st = 1 / 4 * Math.pow((N_q_dr_st - 1) * Math.cos(dr_st_af_d * Math.PI / 180), (3 / 2))
           } else if (e_total_dr_st_r >= 0.3 * 2 * radius) {
               var N_q_dr_st = Math.exp(Math.PI * Math.tan(dr_st_af_d * Math.PI / 180)) * (1 + Math.sin(dr_st_af_d * Math.PI / 180)) / (1 - Math.sin(dr_st_af_d * Math.PI / 180))
               var N_c_dr_st = (1.05 + Math.pow(Math.tan(dr_st_af_d * Math.PI / 180), 3)) * (N_q_dr_st - 1) / Math.tan(dr_st_af_d * Math.PI / 180)
               var N_g_dr_st = 2 * (1 / 4 * Math.pow((N_q_dr_st - 1) * Math.cos(dr_st_af_d * Math.PI / 180), (3 / 2)))
                 }
   
           if (e_total_dr_lt_r < 0.3 * 2 * radius) {
               var N_q_dr_lt = Math.exp(Math.PI * Math.tan(dr_lt_af_d * Math.PI / 180)) * (1 + Math.sin(dr_lt_af_d * Math.PI / 180)) / (1 - Math.sin(dr_lt_af_d * Math.PI / 180))
               var N_c_dr_lt = (N_q_dr_lt - 1) / Math.tan(dr_lt_af_d * Math.PI / 180)
               var N_g_dr_lt = 1 / 4 * Math.pow((N_q_dr_lt - 1) * Math.cos(dr_lt_af_d * Math.PI / 180), (3 / 2))
           } else if (e_total_dr_lt_r >= 0.3 * 2 * radius) {
               var N_q_dr_lt = Math.exp(Math.PI * Math.tan(dr_lt_af_d * Math.PI / 180)) * (1 + Math.sin(dr_lt_af_d * Math.PI / 180)) / (1 - Math.sin(dr_lt_af_d * Math.PI / 180))
               var N_c_dr_lt = (1.05 + Math.pow(Math.tan(dr_lt_af_d * Math.PI / 180), 3)) * (N_q_dr_lt - 1) / Math.tan(dr_lt_af_d * Math.PI / 180)
               var N_g_dr_lt = 2 * (1 / 4 * Math.pow((N_q_dr_lt - 1) * Math.cos(dr_lt_af_d * Math.PI / 180), (3 / 2)))
           }
   
           if (e_total_ud_st_r < 0.3 * 2 * radius) {
               var N_q_ud_st = 1
               var N_c_ud_st = 2 + Math.PI // + (N_q_ud_st - 1) / Math.tan(ud_st_af_d * Math.PI / 180)       
               var N_g_ud_st = 0
           } else if (e_total_ud_st_r >= 0.3 * 2 * radius) {
               var N_q_ud_st = 1
               var N_c_ud_st = (1.05 + Math.pow(Math.tan(ud_st_af_d * Math.PI / 180), 3)) * (2 + Math.PI) // + (N_q_ud_st - 1) / Math.tan(ud_st_af_d * Math.PI / 180))
               var N_g_ud_st = 0
           }
   
           if (e_total_ud_lt_r < 0.3 * 2 * radius) {
   
               if (ud_lt_af_d == 0) {
                   var N_q_ud_lt = 1
                   var N_c_ud_lt = 2 + Math.PI // + (N_q_ud_lt - 1) / Math.tan(ud_lt_af_d * Math.PI / 180)
                   var N_g_ud_lt = 0
   
               } else {
                   var N_q_ud_lt = Math.exp(Math.PI * Math.tan(ud_lt_af_d * Math.PI / 180)) * (1 + Math.sin(ud_lt_af_d * Math.PI / 180)) / (1 - Math.sin(ud_lt_af_d * Math.PI / 180))
                   var N_c_ud_lt = (N_q_ud_lt - 1) / Math.tan(ud_lt_af_d * Math.PI / 180)
                   var N_g_ud_lt = 1 / 4 * Math.pow((N_q_ud_lt - 1) * Math.cos(ud_lt_af_d * Math.PI / 180), (3 / 2))
               }
   
           } else if (e_total_ud_lt_r >= 0.3 * 2 * radius) {
   
               if (ud_lt_af_d == 0) {
                   var N_q_ud_lt = 1
                   var N_c_ud_lt = (1.05 + Math.pow(Math.tan(ud_lt_af_d * Math.PI / 180), 3)) * (2 + Math.PI) // + (N_q_ud_lt - 1) / Math.tan(ud_lt_af_d * Math.PI / 180))
                   var N_g_ud_lt = 0
               } else {
                   var N_q_ud_lt = Math.exp(Math.PI * Math.tan(ud_lt_af_d * Math.PI / 180)) * (1 + Math.sin(ud_lt_af_d * Math.PI / 180)) / (1 - Math.sin(ud_lt_af_d * Math.PI / 180))
                   var N_c_ud_lt = (1.05 + Math.pow(Math.tan(ud_lt_af_d * Math.PI / 180), 3)) * (N_q_ud_lt - 1) / Math.tan(ud_lt_af_d * Math.PI / 180)
                   var N_g_ud_lt = 2 * (1 / 4 * Math.pow((N_q_ud_lt - 1) * Math.cos(ud_lt_af_d * Math.PI / 180), (3 / 2)))
               }
   
           }
       }
   
   
   
   
       var s_g_dr_st = 1 - 0.4 * Math.min(ef_dr_st_l , ef_dr_st_b) / Math.max(ef_dr_st_l , ef_dr_st_b)
       var s_g_dr_lt = 1 - 0.4 * Math.min(ef_dr_lt_l , ef_dr_lt_b) / Math.max(ef_dr_lt_l , ef_dr_lt_b)
       var s_g_ud_st = 1 - 0.4 * Math.min(ef_ud_st_l , ef_ud_st_b) / Math.max(ef_ud_st_l , ef_ud_st_b)
       var s_g_ud_lt = 1 - 0.4 * Math.min(ef_ud_lt_l , ef_ud_lt_b) / Math.max(ef_ud_lt_l , ef_ud_lt_b)
       var s_q_dr_st = 1 + 0.2 * Math.min(ef_dr_st_l , ef_dr_st_b) / Math.max(ef_dr_st_l , ef_dr_st_b)
       var s_q_dr_lt = 1 + 0.2 * Math.min(ef_dr_lt_l , ef_dr_lt_b) / Math.max(ef_dr_lt_l , ef_dr_lt_b)
       var s_q_ud_st = 1 + 0.2 * Math.min(ef_ud_st_l , ef_ud_st_b) / Math.max(ef_ud_st_l , ef_ud_st_b)
       var s_q_ud_lt = 1 + 0.2 * Math.min(ef_ud_lt_l , ef_ud_lt_b) / Math.max(ef_ud_lt_l , ef_ud_lt_b)
       var s_c_dr_st = s_q_dr_st
       var s_c_dr_lt = s_q_dr_lt
       var s_c_ud_st = s_q_ud_st
       var s_c_ud_lt = s_q_ud_lt
   
   
       if (H_res_dr_st == 0) {
   
           var i_q_dr_st = 1
           var i_g_dr_st = 1
           var i_c_dr_st = 1
   
       } else if (H_res_dr_st != 0) {
   
           var i_q_dr_st = Math.pow(1 - H_res_dr_st / (vl_total_dr_st + A_eff_dr_st * dr_st_cohesion_d / Math.tan(dr_st_af_d * Math.PI / 180)), 2)
   
           if (point_foundation_shape == 'rectangular') {
   
               if (e_total_dr_st_l < 0.3 * length && e_total_dr_st_b < 0.3 * width) {
                   var i_g_dr_st = Math.pow(i_q_dr_st, 2)
                   var i_c_dr_st = i_q_dr_st
   
               } else if (e_total_dr_st_l >= 0.3 * length || e_total_dr_st_b >= 0.3 * width) {
                   var i_g_dr_st = 1 + 3 * H_res_dr_st / vl_total_dr_st
                   var i_c_dr_st = 1 + 4 * H_res_dr_st / vl_total_dr_st * Math.tan(dr_st_af_d * Math.PI / 180)
               }
   
           } else if (point_foundation_shape == 'circular') {
   
               if (e_total_dr_st_r < 0.3 * 2 * radius) {
                   var i_g_dr_st = Math.pow(i_q_dr_st, 2)
                   var i_c_dr_st = i_q_dr_st
               } else if (e_total_dr_st_r >= 0.3 * 2 * radius) {
                   var i_g_dr_st = 1 + 3 * H_res_dr_st / vl_total_dr_st
                   var i_c_dr_st = 1 + 4 * H_res_dr_st / vl_total_dr_st * Math.tan(dr_st_af_d * Math.PI / 180)
               }
           }
       }
   
   
   
       if (H_res_dr_lt == 0) {
           var i_q_dr_lt = 1
           var i_g_dr_lt = 1
           var i_c_dr_lt = 1
       } else if (H_res_dr_lt != 0) {
           var i_q_dr_lt = Math.pow(1 - H_res_dr_lt / (vl_total_dr_lt + A_eff_dr_lt * dr_lt_cohesion_d / Math.tan(dr_lt_af_d * Math.PI / 180)), 2)
           if (point_foundation_shape == 'rectangular') {
               if (e_total_dr_lt_l < 0.3 * length && e_total_dr_lt_b < 0.3 * width) {
                   var i_g_dr_lt = Math.pow(i_q_dr_lt, 2)
                   var i_c_dr_lt = i_q_dr_lt
               } else if (e_total_dr_lt_l >= 0.3 * length || e_total_dr_lt_b >= 0.3 * width) {
                   var i_g_dr_lt = 1 + 3 * H_res_dr_lt / vl_total_dr_lt
                   var i_c_dr_lt = 1 + 4 * H_res_dr_lt / vl_total_dr_lt * Math.tan(dr_lt_af_d * Math.PI / 180)
               }
   
           } else if (point_foundation_shape == 'circular') {
               if (e_total_dr_lt_r < 0.3 * 2 * radius) {
                   var i_g_dr_lt = Math.pow(i_q_dr_lt, 2)
                   var i_c_dr_lt = i_q_dr_lt
               } else if (e_total_dr_lt_r >= 0.3 * 2 * radius) {
                   var i_g_dr_lt = 1 + 3 * H_res_dr_lt / vl_total_dr_lt
                   var i_c_dr_lt = 1 + 4 * H_res_dr_lt / vl_total_dr_lt * Math.tan(dr_lt_af_d * Math.PI / 180)
               }
           }
       }
   
   
   
   
   
       if (H_res_ud_st == 0) {
   
           var i_q_ud_st = 1
           var i_g_ud_st = 1
           var i_c_ud_st = 1
       } else if (H_res_ud_st != 0) {
   
           var i_q_ud_st = 0
           if (point_foundation_shape == 'rectangular') {
   
               if (e_total_ud_st_l < 0.3 * length && e_total_ud_st_b < 0.3 * width) {
                   var i_g_ud_st = 0
                   if (H_res_ud_st / (A_eff_ud_st * ud_st_cohesion_d) > 1) {
                       var i_c_ud_st = 0.5
                   } else {
                       var i_c_ud_st = 0.5 + 0.5 * Math.sqrt(1 - H_res_ud_st / (A_eff_ud_st * ud_st_cohesion_d))
                   }
               } else if (e_total_ud_st_l >= 0.3 * length || e_total_ud_st_b >= 0.3 * width) {
                   var i_g_ud_st = 1 + 3 * H_res_ud_st / vl_total_ud_st
                   var i_c_ud_st = 1 + 4 * H_res_ud_st / vl_total_ud_st * Math.tan(ud_st_af_d * Math.PI / 180)
               }
   
           } else if (point_foundation_shape == 'circular') {
   
               if (e_total_ud_st_r < 0.3 * 2 * radius) {
                   var i_g_ud_st = 0
                   if (H_res_ud_st / (A_eff_ud_st * ud_st_cohesion_d) > 1) {
                       var i_c_ud_st = 0.5
                   } else {
                       var i_c_ud_st = 0.5 + 0.5 * Math.sqrt(1 - H_res_ud_st / (A_eff_ud_st * ud_st_cohesion_d))
                   }
                  } else if (e_total_ud_st_r >= 0.3 * 2 * radius) {
                   var i_g_ud_st = 1 + 3 * H_res_ud_st / vl_total_ud_st
                   var i_c_ud_st = 1 + 4 * H_res_ud_st / vl_total_ud_st * Math.tan(ud_st_af_d * Math.PI / 180)
               }
           }
       }
   
   
   
   
       if (H_res_ud_lt == 0) {
   
           var i_q_ud_lt = 1
           var i_g_ud_lt = 1
           var i_c_ud_lt = 1
   
       } else if (H_res_ud_lt != 0) {
   
           if (ud_lt_af_d == 0) {
               var i_q_ud_lt = 0
           } else {
               var i_q_ud_lt = Math.pow(1 - H_res_ud_lt / (vl_total_ud_lt + A_eff_ud_lt * ud_lt_cohesion_d / Math.tan(ud_lt_af_d * Math.PI / 180)), 2)
           }
   
           if (point_foundation_shape == 'rectangular') {
   
               if (e_total_ud_lt_l < 0.3 * length && e_total_ud_lt_b < 0.3 * width) {
   
                   if (ud_lt_af_d == 0) {
                       var i_g_ud_lt = 0
                       var i_c_ud_lt = 0.5 + 0.5 * Math.sqrt(1 - H_res_ud_lt / (A_eff_ud_lt * ud_lt_cohesion_d))
                   } else {
                       var i_g_ud_lt = Math.pow(i_q_ud_lt, 2)
                       var i_c_ud_lt = i_q_ud_lt
                   }
   
               } else if (e_total_ud_lt_l >= 0.3 * length || e_total_ud_lt_b >= 0.3 * width) {
                   var i_g_ud_lt = 1 + 3 * H_res_ud_lt / vl_total_ud_lt
                   var i_c_ud_lt = 1 + 4 * H_res_ud_lt / vl_total_ud_lt * Math.tan(ud_lt_af_d * Math.PI / 180)
               }
   
           } else if (point_foundation_shape == 'circular') {
   
               if (e_total_ud_lt_r < 0.3 * 2 * radius) {
   
                   if (ud_lt_af_d == 0) {
                       var i_g_ud_lt = 0
                       var i_c_ud_lt = 0.5 + 0.5 * Math.sqrt(1 - H_res_ud_lt / (A_eff_ud_lt * ud_lt_cohesion_d))
                        } else {
                       var i_g_ud_lt = Math.pow(i_q_ud_lt, 2)
                       var i_c_ud_lt = i_q_ud_lt
                   }
               } else if (e_total_ud_lt_r >= 0.3 * 2 * radius) {
                   var i_g_ud_lt = 1 + 3 * H_res_ud_lt / vl_total_ud_lt
                   var i_c_ud_lt = 1 + 4 * H_res_ud_lt / vl_total_ud_lt * Math.tan(ud_lt_af_d * Math.PI / 180)
               }
           }
       }
   
   
       var R_q_dr_st = q * N_q_dr_st * s_q_dr_st * i_q_dr_st * d_q
       var R_q_dr_lt = q * N_q_dr_lt * s_q_dr_lt * i_q_dr_lt * d_q
       var R_q_ud_st = q
       if (ud_lt_af_d == 0) {
           var R_q_ud_lt = q
       } else {
           var R_q_ud_lt = q * N_q_ud_lt * s_q_ud_lt * i_q_ud_lt * d_q
       }
   
       var R_c_dr_st = dr_st_cohesion_d * N_c_dr_st * s_c_dr_st * i_c_dr_st * d_c
       var R_c_dr_lt = dr_lt_cohesion_d * N_c_dr_lt * s_c_dr_lt * i_c_dr_lt * d_c
       var R_c_ud_st = ud_st_cohesion_d * N_c_ud_st * s_c_ud_st * i_c_ud_st
   
       if (ud_lt_af_d == 0) {
           var R_c_ud_lt = ud_lt_cohesion_d * N_c_ud_lt * s_c_ud_lt * i_c_ud_lt
       } else {
           var R_c_ud_lt = ud_lt_cohesion_d * N_c_ud_lt * s_c_ud_lt * i_c_ud_lt * d_c
       }
   
   
       var R_g_dr_st = 1 / 2 * ground_density * Math.min(ef_dr_st_l, ef_dr_st_b) / 1000 * N_g_dr_st * s_g_dr_st * i_g_dr_st
       var R_g_dr_lt = 1 / 2 * ground_density * Math.min(ef_dr_lt_l, ef_dr_lt_b) / 1000 * N_g_dr_lt * s_g_dr_lt * i_g_dr_lt
       var R_g_ud_st = 0
       if (ud_lt_af_d == 0) {
           var R_g_ud_lt = 0
       } else {
           var R_g_ud_lt = 1 / 2 * ground_density * Math.min(ef_ud_lt_l, ef_ud_lt_b) / 1000 * N_g_ud_lt * s_g_ud_lt * i_g_ud_lt
       }
   
       var R_total_dr_st = (R_q_dr_st + R_c_dr_st + R_g_dr_st) * A_eff_dr_st
       var R_total_dr_lt = (R_q_dr_lt + R_c_dr_lt + R_g_dr_lt) * A_eff_dr_lt
       var R_total_ud_st = (R_q_ud_st + R_c_ud_st + R_g_ud_st) * A_eff_ud_st
       var R_total_ud_lt = (R_q_ud_lt + R_c_ud_lt + R_g_ud_lt) * A_eff_ud_lt
       var R_total = Math.min(R_total_dr_st, R_total_dr_lt, R_total_ud_st, R_total_ud_lt)
       var H_dr_st = vl_total_dr_st * Math.tan(dr_st_af_d * Math.PI / 180) + A_eff_dr_st * a_d_dr_st
       var H_dr_lt = vl_total_dr_lt * Math.tan(dr_lt_af_d * Math.PI / 180) + A_eff_dr_lt * a_d_dr_lt
       var H_ud_st = Math.min(A_eff_ud_st * ud_st_cohesion_d, 0.4 * vl_total_ud_st);
       if (ud_lt_af_d == 0) {
           var H_ud_lt = Math.min(A_eff_ud_lt * ud_lt_cohesion_d, 0.4 * vl_total_ud_lt)
       } else {
           var H_ud_lt = vl_total_ud_lt * Math.tan(ud_lt_af_d * Math.PI / 180) + A_eff_ud_lt * ud_lt_cohesion_d
       }
       var H_total = Math.min(H_dr_st, H_dr_lt, H_ud_st, H_ud_lt);
   
       // moment capacity calculations
   
       // var gamma_c = 1.5;
       var f_cd = f_ck / gamma_c;
       var f_cm = f_ck + 8;
       var f_ctm = 0.393 * Math.pow(f_ck, (2 / 3));
       var E_cm = 22 * Math.pow(f_cm / 10, (0.3));
       var sigma_r1 = 0.45 * f_R_1;
       var sigma_r4 = 0.37 * f_R_4;
       var gamma_m = 1.5;
       if (height < 600) {
           var f_ctd_fl = 1.1 * f_ctm / gamma_m * (1.6 - height / 1000);
       } else {
           var f_ctd_fl = 1.1 * f_ctm / gamma_m;
       }
       var M_n = f_ctd_fl * 1000 * (Math.pow(height / 1000, 2) / 6);
   
       var f_yd = f_yk / gamma_s;
       var A_c = height / 1000;
       
       if (include_steel != 'on') {
           var rho = 0;
       } else  {
           var rho = A_s / (1000 * 1000) / A_c * 100;
       }
   
       if (rho < 0.15) {
           var h_ux = 0.123 * height
       } else if (rho >= 0.15) {
           var h_ux = (height * (0.5 * sigma_r1 + 0.5 * sigma_r4) + A_s * f_yk / 1000) / (0.64 * f_ck + 0.5 * sigma_r1 + 0.5 * sigma_r4);
       }
   
       if (h_ux > 0.9 * height) {
           var h_ux = 0.9 * height
       }
   
       // choose cover layer from drop down or custom
       if (cover_layer_dropdown == '0') {
           var cover_layer = cover_layer_custom
       } else if (cover_layer_dropdown > 0) {
           var cover_layer = parseFloat(cover_layer_dropdown)
       }   
   
       if (rho == 0) {
           var ef_height = 0.75 * height
       } else if (rho > 0) {
           var ef_height = height - cover_layer;
       }
   
       if (f_ck <= 50) {
           var lambda = 0.8 
           var eta = 1 
       } else if (f_ck > 50) {
           var lambda = 0.8 - (f_ck - 50)/(400)
           var eta = 1.0 - (f_ck - 50)/(200)
       }
   
       var omega = A_s * f_yd / (ef_height * eta * f_cd * 1000)
       var mu = omega*(1 - 1/2 * omega)
       if (include_fiber != "on"){
   
           var M_p = mu * Math.pow(ef_height , 2) * eta * f_cd / 1000
           var M_p_l = M_p * width / 1000
           var M_p_b = M_p * length / 1000
   
       } else if (include_fiber == "on") {
       
           if (rho == 0) {
               var M_p = Math.pow(height / 1000, 2) / gamma_m * (0.29 * sigma_r4 * 1000 + 0.16 * sigma_r1 * 1000)
               var M_p_l = M_p * width / 1000
               var M_p_b = M_p * length / 1000
           } else if (rho > 0 && rho <= 0.15) {
               var M_p = Math.pow(height / 1000, 2) / gamma_m * (0.29 * sigma_r4 * 1000 + 0.16 * sigma_r1 * 1000) + A_s / (1000 * 1000) * f_yk * 1000 * (ef_height / 1000 - 0.048 * height / 1000) / gamma_s
               var M_p_l = M_p * width / 1000
               var M_p_b = M_p * length / 1000
           } else if (rho > 0.15) {
               var M_p = (0.5 * (sigma_r1 * 1000 - sigma_r4 * 1000) * (height / 1000 - h_ux / 1000) * (0.28 * h_ux / 1000 + 0.33 * height / 1000)) / gamma_m + (sigma_r4 * 1000 * (height / 1000 - h_ux / 1000) * (0.11 * h_ux / 1000 + 0.5 * height / 1000)) / gamma_m + (A_s / (1000 * 1000) * f_yk * 1000 * (ef_height / 1000 - 0.39 * h_ux / 1000)) / gamma_s
               var M_p_l = M_p * width / 1000
               var M_p_b = M_p * length / 1000
           }
       }
   
       var M_p_internal = Math.min(M_p_l, M_p_b)
   
   
       // 5.1 Point Function Chart
   
           
           
       //Reactions ('Line loads')
   
       w_dr_st_l = vl_total / A_eff_dr_st * ef_dr_st_b / 1000
       w_dr_lt_l = vl_total / A_eff_dr_lt * ef_dr_lt_b / 1000
       w_ud_st_l = vl_total / A_eff_ud_st * ef_ud_st_b / 1000
       w_ud_lt_l = vl_total / A_eff_ud_lt * ef_ud_lt_b / 1000
   
       w_dr_st_b = vl_total / A_eff_dr_st * ef_dr_st_l / 1000
       w_dr_lt_b = vl_total / A_eff_dr_lt * ef_dr_lt_l / 1000
       w_ud_st_b = vl_total / A_eff_ud_st * ef_ud_st_l / 1000
       w_ud_lt_b = vl_total / A_eff_ud_lt * ef_ud_lt_l / 1000
   
       w_dim_l = vl_dim_total / A_dim_eff * ef_dim_b / 1000
       w_dim_b = vl_dim_total / A_dim_eff * ef_dim_l / 1000
   
   
       if (dimensions_known == 'on') {
           w_sw_l = self_weight / (length / 1000)
           w_sw_b = self_weight / (width / 1000)
       } else {
           w_sw_l = (self_weight + ground_weight) / (length / 1000)
           w_sw_b = (self_weight + ground_weight) / (width / 1000)
       }
   
     
   
       //Section forces (Internal moments and shear) (functions for diagrams)
   
        //... length direction (l)
   
        b_dr_st_l_1 = 0
        b_dr_lt_l_1 = 0
        b_ud_st_l_1 = 0
        b_ud_lt_l_1 = 0
    
        b_dim_l_1 = 0
    
        a_dr_st_l_2 = 0
        a_dr_lt_l_2 = 0
        a_ud_st_l_2 = 0
        a_ud_lt_l_2 = 0
    
        a_dim_l_2 = 0
    
    
    
        if (m_total_dr_st_l > 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_dr_st_l < length / 2 - ec_vl_length) {
                   var a_dr_st_l_1 = (length / 2 - ec_vl_length - ef_dr_st_l) / 1000
                   var b_dr_st_l_2 = (length / 2 + ec_vl_length) / 1000
                   var L_w_dr_st_l_1 = ef_dr_st_l / 1000
               } else {
                   var a_dr_st_l_1 = 0
                   var b_dr_st_l_2 = (length - ef_dr_st_l) / 1000
                   var L_w_dr_st_l_1 = (length / 2 - ec_vl_length) / 1000
               }
               var L_w_dr_st_l_2 = (length / 2 + ec_vl_length) / 1000 - b_dr_st_l_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_dr_st_l < radius - ec_vl_length) {
                   var a_dr_st_l_1 = (radius - ec_vl_length - ef_dr_st_l) / 1000
                   var b_dr_st_l_2 = (radius + ec_vl_length) / 1000
                   var L_w_dr_st_l_1 = ef_dr_st_l / 1000
               } else {
                   var a_dr_st_l_1 = 0
                   var b_dr_st_l_2 = (2 * radius - ef_dr_st_l) / 1000
                   var L_w_dr_st_l_1 = (radius - ec_vl_length) / 1000
               }
               var L_w_dr_st_l_2 = (radius + ec_vl_length) / 1000 - b_dr_st_l_2
           }
       } else if (m_total_dr_st_l <= 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_dr_st_l < length / 2 + ec_vl_length) {
                   var a_dr_st_l_1 = (length / 2 + ec_vl_length - ef_dr_st_l) / 1000
                   var b_dr_st_l_2 = (length / 2 - ec_vl_length) / 1000
                   var L_w_dr_st_l_1 = ef_dr_st_l / 1000
               } else {
                   var a_dr_st_l_1 = 0
                   var b_dr_st_l_2 = (length - ef_dr_st_l) / 1000
                   var L_w_dr_st_l_1 = (length / 2 + ec_vl_length) / 1000
               }
               var L_w_dr_st_l_2 = (length / 2 - ec_vl_length) / 1000 - b_dr_st_l_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_dr_st_l < radius + ec_vl_length) {
                   var a_dr_st_l_1 = (radius + ec_vl_length - ef_dr_st_l) / 1000
                   var b_dr_st_l_2 = (radius - ec_vl_length) / 1000
                   var L_w_dr_st_l_1 = ef_dr_st_l / 1000
               } else {
                   var a_dr_st_l_1 = 0
                   var b_dr_st_l_2 = (2 * radius - ef_dr_st_l) / 1000
                   var L_w_dr_st_l_1 = (radius + ec_vl_length) / 1000
               }
               var L_w_dr_st_l_2 = (radius - ec_vl_length) / 1000 - b_dr_st_l_2
           }
       }
   
       if (m_total_dr_lt_l > 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_dr_lt_l < length / 2 - ec_vl_length) {
                   var a_dr_lt_l_1 = (length / 2 - ec_vl_length - ef_dr_lt_l) / 1000
                   var b_dr_lt_l_2 = (length / 2 + ec_vl_length) / 1000
                   var L_w_dr_lt_l_1 = ef_dr_lt_l / 1000
               } else {
                   var a_dr_lt_l_1 = 0
                   var b_dr_lt_l_2 = (length - ef_dr_lt_l) / 1000
                   var L_w_dr_lt_l_1 = (length / 2 - ec_vl_length) / 1000
               }
               var L_w_dr_lt_l_2 = (length / 2 + ec_vl_length) / 1000 - b_dr_lt_l_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_dr_lt_l < radius - ec_vl_length) {
                   var a_dr_lt_l_1 = (radius - ec_vl_length - ef_dr_lt_l) / 1000
                   var b_dr_lt_l_2 = (radius + ec_vl_length) / 1000
                   var L_w_dr_lt_l_1 = ef_dr_lt_l / 1000
               } else {
                   var a_dr_lt_l_1 = 0
                   var b_dr_lt_l_2 = (2 * radius - ef_dr_lt_l) / 1000
                   var L_w_dr_lt_l_1 = (radius - ec_vl_length) / 1000
               }
               var L_w_dr_lt_l_2 = (radius + ec_vl_length) / 1000 - b_dr_lt_l_2
           }
       } else if (m_total_dr_lt_l <= 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_dr_lt_l < length / 2 + ec_vl_length) {
                   var a_dr_lt_l_1 = (length / 2 + ec_vl_length - ef_dr_lt_l) / 1000
                   var b_dr_lt_l_2 = (length / 2 - ec_vl_length) / 1000
                   var L_w_dr_lt_l_1 = ef_dr_lt_l / 1000
               } else {
                   var a_dr_lt_l_1 = 0
                   var b_dr_lt_l_2 = (length - ef_dr_lt_l) / 1000
                   var L_w_dr_lt_l_1 = (length / 2 + ec_vl_length) / 1000
               }
               var L_w_dr_lt_l_2 = (length / 2 - ec_vl_length) / 1000 - b_dr_lt_l_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_dr_lt_l < radius + ec_vl_length) {
                   var a_dr_lt_l_1 = (radius + ec_vl_length - ef_dr_lt_l) / 1000
                   var b_dr_lt_l_2 = (radius - ec_vl_length) / 1000
                   var L_w_dr_lt_l_1 = ef_dr_lt_l / 1000
               } else {
                   var a_dr_lt_l_1 = 0
                   var b_dr_lt_l_2 = (2 * radius - ef_dr_lt_l) / 1000
                   var L_w_dr_lt_l_1 = (radius + ec_vl_length) / 1000
               }
               var L_w_dr_lt_l_2 = (radius - ec_vl_length) / 1000 - b_dr_lt_l_2
           }
       }
   
       if (m_total_ud_st_l > 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_ud_st_l < length / 2 - ec_vl_length) {
                   var a_ud_st_l_1 = (length / 2 - ec_vl_length - ef_ud_st_l) / 1000
                   var b_ud_st_l_2 = (length / 2 + ec_vl_length) / 1000
                   var L_w_ud_st_l_1 = ef_ud_st_l / 1000
               } else {
                   var a_ud_st_l_1 = 0
                   var b_ud_st_l_2 = (length - ef_ud_st_l) / 1000
                   var L_w_ud_st_l_1 = (length / 2 - ec_vl_length) / 1000
               }
               var L_w_ud_st_l_2 = (length / 2 + ec_vl_length) / 1000 - b_ud_st_l_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_ud_st_l < radius - ec_vl_length) {
                   var a_ud_st_l_1 = (radius - ec_vl_length - ef_ud_st_l) / 1000
                   var b_ud_st_l_2 = (radius + ec_vl_length) / 1000
                   var L_w_ud_st_l_1 = ef_ud_st_l / 1000
               } else {
                   var a_ud_st_l_1 = 0
                   var b_ud_st_l_2 = (2 * radius - ef_ud_st_l) / 1000
                   var L_w_ud_st_l_1 = (radius - ec_vl_length) / 1000
               }
               var L_w_ud_st_l_2 = (radius + ec_vl_length) / 1000 - b_ud_st_l_2
           }
       } else if (m_total_ud_st_l <= 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_ud_st_l < length / 2 + ec_vl_length) {
                   var a_ud_st_l_1 = (length / 2 + ec_vl_length - ef_ud_st_l) / 1000
                   var b_ud_st_l_2 = (length / 2 - ec_vl_length) / 1000
                   var L_w_ud_st_l_1 = ef_ud_st_l / 1000
               } else {
                   var a_ud_st_l_1 = 0
                   var b_ud_st_l_2 = (length - ef_ud_st_l) / 1000
                   var L_w_ud_st_l_1 = (length / 2 + ec_vl_length) / 1000
               }
               var L_w_ud_st_l_2 = (length / 2 - ec_vl_length) / 1000 - b_ud_st_l_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_ud_st_l < radius + ec_vl_length) {
                   var a_ud_st_l_1 = (radius + ec_vl_length - ef_ud_st_l) / 1000
                   var b_ud_st_l_2 = (radius - ec_vl_length) / 1000
                   var L_w_ud_st_l_1 = ef_ud_st_l / 1000
               } else {
                   var a_ud_st_l_1 = 0
                   var b_ud_st_l_2 = (2 * radius - ef_ud_st_l) / 1000
                   var L_w_ud_st_l_1 = (radius + ec_vl_length) / 1000
               }
               var L_w_ud_st_l_2 = (radius - ec_vl_length) / 1000 - b_ud_st_l_2
           }
       }
   
       if (m_total_ud_lt_l > 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_ud_lt_l < length / 2 - ec_vl_length) {
                   var a_ud_lt_l_1 = (length / 2 - ec_vl_length - ef_ud_lt_l) / 1000
                   var b_ud_lt_l_2 = (length / 2 + ec_vl_length) / 1000
                   var L_w_ud_lt_l_1 = ef_ud_lt_l / 1000
               } else {
                   var a_ud_lt_l_1 = 0
                   var b_ud_lt_l_2 = (length - ef_ud_lt_l) / 1000
                   var L_w_ud_lt_l_1 = (length / 2 - ec_vl_length) / 1000
               }
               var L_w_ud_lt_l_2 = (length / 2 + ec_vl_length) / 1000 - b_ud_lt_l_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_ud_lt_l < radius - ec_vl_length) {
                   var a_ud_lt_l_1 = (radius - ec_vl_length - ef_ud_lt_l) / 1000
                   var b_ud_lt_l_2 = (radius + ec_vl_length) / 1000
                   var L_w_ud_lt_l_1 = ef_ud_lt_l / 1000
               } else {
                   var a_ud_lt_l_1 = 0
                   var b_ud_lt_l_2 = (2 * radius - ef_ud_lt_l) / 1000
                   var L_w_ud_lt_l_1 = (radius - ec_vl_length) / 1000
               }
               var L_w_ud_lt_l_2 = (radius + ec_vl_length) / 1000 - b_ud_lt_l_2
           }
       } else if (m_total_ud_lt_l <= 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_ud_lt_l < length / 2 + ec_vl_length) {
                   var a_ud_lt_l_1 = (length / 2 + ec_vl_length - ef_ud_lt_l) / 1000
                   var b_ud_lt_l_2 = (length / 2 - ec_vl_length) / 1000
                   var L_w_ud_lt_l_1 = ef_ud_lt_l / 1000
               } else {
                   var a_ud_lt_l_1 = 0
                   var b_ud_lt_l_2 = (length - ef_ud_lt_l) / 1000
                   var L_w_ud_lt_l_1 = (length / 2 + ec_vl_length) / 1000
               }
               var L_w_ud_lt_l_2 = (length / 2 - ec_vl_length) / 1000 - b_ud_lt_l_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_ud_lt_l < radius + ec_vl_length) {
                   var a_ud_lt_l_1 = (radius + ec_vl_length - ef_ud_lt_l) / 1000
                   var b_ud_lt_l_2 = (radius - ec_vl_length) / 1000
                   var L_w_ud_lt_l_1 = ef_ud_lt_l / 1000
               } else {
                   var a_ud_lt_l_1 = 0
                   var b_ud_lt_l_2 = (2 * radius - ef_ud_lt_l) / 1000
                   var L_w_ud_lt_l_1 = (radius + ec_vl_length) / 1000
               }
               var L_w_ud_lt_l_2 = (radius - ec_vl_length) / 1000 - b_ud_lt_l_2
           }
       }
   
       if (m_dim_length > 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_dim_l < length / 2 - ec_vl_length) {
                   var a_dim_l_1 = (length / 2 - ec_vl_length - ef_dim_l) / 1000
                   var b_dim_l_2 = (length / 2 + ec_vl_length) / 1000
                   var L_w_dim_l_1 = ef_dim_l / 1000
               } else {
                   var a_dim_l_1 = 0
                   var b_dim_l_2 = (length - ef_dim_l) / 1000
                   var L_w_dim_l_1 = (length / 2 - ec_vl_length) / 1000
               }
               var L_w_dim_l_2 = (length / 2 + ec_vl_length) / 1000 - b_dim_l_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_dim_l < radius - ec_vl_length) {
                   var a_dim_l_1 = (radius - ec_vl_length - ef_dim_l) / 1000
                   var b_dim_l_2 = (radius + ec_vl_length) / 1000
                   var L_w_dim_l_1 = ef_dim_l / 1000
               } else {
                   var a_dim_l_1 = 0
                   var b_dim_l_2 = (2 * radius - ef_dim_l) / 1000
                   var L_w_dim_l_1 = (radius - ec_vl_length) / 1000
               }
               var L_w_dim_l_2 = (radius + ec_vl_length) / 1000 - b_dim_l_2
           }
       } else if (m_dim_length <= 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_dim_l < length / 2 + ec_vl_length) {
                   var a_dim_l_1 = (length / 2 + ec_vl_length - ef_dim_l) / 1000
                   var b_dim_l_2 = (length / 2 - ec_vl_length) / 1000
                   var L_w_dim_l_1 = ef_dim_l / 1000
               } else {
                   var a_dim_l_1 = 0
                   var b_dim_l_2 = (length - ef_dim_l) / 1000
                   var L_w_dim_l_1 = (length / 2 + ec_vl_length) / 1000
               }
               var L_w_dim_l_2 = (length / 2 - ec_vl_length) / 1000 - b_dim_l_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_dim_l < radius + ec_vl_length) {
                   var a_dim_l_1 = (radius + ec_vl_length - ef_dim_l) / 1000
                   var b_dim_l_2 = (radius - ec_vl_length) / 1000
                   var L_w_dim_l_1 = ef_dim_l / 1000
               } else {
                   var a_dim_l_1 = 0
                   var b_dim_l_2 = (2 * radius - ef_dim_l) / 1000
                   var L_w_dim_l_1 = (radius + ec_vl_length) / 1000
               }
               var L_w_dim_l_2 = (radius - ec_vl_length) / 1000 - b_dim_l_2
           }
       }
   
   
       var R_A_dr_st_l_1 = w_dr_st_l * L_w_dr_st_l_1
       var R_A_dr_lt_l_1 = w_dr_lt_l * L_w_dr_lt_l_1
       var R_A_ud_st_l_1 = w_ud_st_l * L_w_ud_st_l_1
       var R_A_ud_lt_l_1 = w_ud_lt_l * L_w_ud_lt_l_1
   
       var R_A_dim_l_1 = w_dim_l * L_w_dim_l_1
   
       var R_A_dr_st_l_2 = w_dr_st_l * L_w_dr_st_l_2
       var R_A_dr_lt_l_2 = w_dr_lt_l * L_w_dr_lt_l_2
       var R_A_ud_st_l_2 = w_ud_st_l * L_w_ud_st_l_2
       var R_A_ud_lt_l_2 = w_ud_lt_l * L_w_ud_lt_l_2
   
       var R_A_dim_l_2 = w_dim_l * L_w_dim_l_2
   
   
       var M_A_dr_st_l_1 = -w_dr_st_l * L_w_dr_st_l_1 * (a_dr_st_l_1 + L_w_dr_st_l_1 / 2)
       var M_A_dr_lt_l_1 = -w_dr_lt_l * L_w_dr_lt_l_1 * (a_dr_lt_l_1 + L_w_dr_lt_l_1 / 2)
       var M_A_ud_st_l_1 = -w_ud_st_l * L_w_ud_st_l_1 * (a_ud_st_l_1 + L_w_ud_st_l_1 / 2)
       var M_A_ud_lt_l_1 = -w_ud_lt_l * L_w_ud_lt_l_1 * (a_ud_lt_l_1 + L_w_ud_lt_l_1 / 2)
   
       var M_A_dim_l_1 = -w_dim_l * L_w_dim_l_1 * (a_dim_l_1 + L_w_dim_l_1 / 2)
   
       var M_A_dr_st_l_2 = -w_dr_st_l * L_w_dr_st_l_2 * (a_dr_st_l_2 + L_w_dr_st_l_2 / 2)
       var M_A_dr_lt_l_2 = -w_dr_lt_l * L_w_dr_lt_l_2 * (a_dr_lt_l_2 + L_w_dr_lt_l_2 / 2)
       var M_A_ud_st_l_2 = -w_ud_st_l * L_w_ud_st_l_2 * (a_ud_st_l_2 + L_w_ud_st_l_2 / 2)
       var M_A_ud_lt_l_2 = -w_ud_lt_l * L_w_ud_lt_l_2 * (a_ud_lt_l_2 + L_w_ud_lt_l_2 / 2)
   
       var M_A_dim_l_2 = -w_dim_l * L_w_dim_l_2 * (a_dim_l_2 + L_w_dim_l_2 / 2)
   
   
       function M_r_dr_st_l_1(x) {
           if (x <= a_dr_st_l_1) {
               return R_A_dr_st_l_1 * x + M_A_dr_st_l_1
           } else if (x > a_dr_st_l_1) {
               return R_A_dr_st_l_1 * x + M_A_dr_st_l_1 - w_dr_st_l * Math.pow(x - a_dr_st_l_1, 2) / 2
           }
       }
   
       function M_r_dr_lt_l_1(x) {
           if (x <= a_dr_lt_l_1) {
               return R_A_dr_lt_l_1 * x + M_A_dr_lt_l_1
           } else if (x > a_dr_lt_l_1) {
               return R_A_dr_lt_l_1 * x + M_A_dr_lt_l_1 - w_dr_lt_l * Math.pow(x - a_dr_lt_l_1, 2) / 2
           }
       }
   
       function M_r_ud_st_l_1(x) {
           if (x <= a_ud_st_l_1) {
               return R_A_ud_st_l_1 * x + M_A_ud_st_l_1
           } else if (x > a_ud_st_l_1) {
               return R_A_ud_st_l_1 * x + M_A_ud_st_l_1 - w_ud_st_l * Math.pow(x - a_ud_st_l_1, 2) / 2
           }
       }
   
       function M_r_ud_lt_l_1(x) {
           if (x <= a_ud_lt_l_1) {
               return R_A_ud_lt_l_1 * x + M_A_ud_lt_l_1
           } else if (x > a_ud_lt_l_1) {
               return R_A_ud_lt_l_1 * x + M_A_ud_lt_l_1 - w_ud_lt_l * Math.pow(x - a_ud_lt_l_1, 2) / 2
           }
       }
   
   
   
       function M_r_dim_l_1(x) {
           if (x <= a_dim_l_1) {
               return R_A_dim_l_1 * x + M_A_dim_l_1
           } else if (x > a_dim_l_1) {
               return R_A_dim_l_1 * x + M_A_dim_l_1 - w_dim_l * Math.pow(x - a_dim_l_1, 2) / 2
           }
       }
   
   
       
   
   
       function M_r_dr_st_l_2(x) {
           if (x < L_w_dr_st_l_2) {
               return R_A_dr_st_l_2 * x + M_A_dr_st_l_2 - w_dr_st_l * Math.pow(x - a_dr_st_l_2, 2) / 2
           } else if (x >= L_w_dr_st_l_2) {
               return 0
           }
       }
   
       function M_r_dr_lt_l_2(x) {
           if (x < L_w_dr_lt_l_2) {
               return R_A_dr_lt_l_2 * x + M_A_dr_lt_l_2 - w_dr_lt_l * Math.pow(x - a_dr_lt_l_2, 2) / 2
           } else if (x >= L_w_dr_lt_l_2) {
               return 0
           }
       }
   
       function M_r_ud_st_l_2(x) {
           if (x < L_w_ud_st_l_2) {
               return R_A_ud_st_l_2 * x + M_A_ud_st_l_2 - w_ud_st_l * Math.pow(x - a_ud_st_l_2, 2) / 2
           } else if (x >= L_w_ud_st_l_2) {
               return 0
           }
       }
   
       function M_r_ud_lt_l_2(x) {
           if (x < L_w_ud_lt_l_2) {
               return R_A_ud_lt_l_2 * x + M_A_ud_lt_l_2 - w_ud_lt_l * Math.pow(x - a_ud_lt_l_2, 2) / 2
           } else if (x >= L_w_ud_lt_l_2) {
               return 0
           }
       }
   
       function M_r_dim_l_2(x) {
           if (x < L_w_dim_l_2) {
               return R_A_dim_l_2 * x + M_A_dim_l_2 - w_dim_l * Math.pow(x - a_dim_l_2, 2) / 2
           } else if (x >= L_w_dim_l_2) {
               return 0
           }
       }
   
   
       function M_g_dr_st_l_1(x) {
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
   
       function M_g_dr_lt_l_1(x) {
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
   
       function M_g_ud_st_l_1(x) {
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
   
       function M_g_ud_lt_l_1(x) {
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
   
       function M_g_dim_l_1(x) {
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
   
   
   
   
   
   
       function M_g_dr_st_l_2(x) {
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
   
       function M_g_dr_lt_l_2(x) {
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
   
       function M_g_ud_st_l_2(x) {
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
   
       function M_g_ud_lt_l_2(x) {
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
   
       function M_g_dim_l_2(x) {
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
   
   
       function M_c_dr_st_l_1(x) {
           return M_r_dr_st_l_1(x) + M_g_dr_st_l_1(x)
       }
   
       function M_c_dr_lt_l_1(x) {
           return M_r_dr_lt_l_1(x) + M_g_dr_lt_l_1(x)
       }
   
       function M_c_ud_st_l_1(x) {
           return M_r_ud_st_l_1(x) + M_g_ud_st_l_1(x)
       }
   
       function M_c_ud_lt_l_1(x) {
           return M_r_ud_lt_l_1(x) + M_g_ud_lt_l_1(x)
       }
   
       function M_c_dim_l_1(x) {
           return M_r_dim_l_1(x) + M_g_dim_l_1(x)
       }
   
   
   
   
       function M_c_dr_st_l_2(x) {
           return M_r_dr_st_l_2(x) + M_g_dr_st_l_2(x)
       }
   
       function M_c_dr_lt_l_2(x) {
           return M_r_dr_lt_l_2(x) + M_g_dr_lt_l_2(x)
       }
   
       function M_c_ud_st_l_2(x) {
           return M_r_ud_st_l_2(x) + M_g_ud_st_l_2(x)
       }
   
       function M_c_ud_lt_l_2(x) {
           return M_r_ud_lt_l_2(x) + M_g_ud_lt_l_2(x)
       }
   
       function M_c_dim_l_2(x) {
           return M_r_dim_l_2(x) + M_g_dim_l_2(x)
       }
   
   
       function fn_M_dr_st_l(x) {
           if (m_total_dr_st_l > 0) {
               if (x >= 0) {
                   return M_c_dr_st_l_1(x)
               } else {
                   return M_c_dr_st_l_2(-x)
               }
           } else {
               if (x < 0) {
                   return M_c_dr_st_l_1(-x)
               } else {
                   return M_c_dr_st_l_2(x)
               }
           }
       }
   
       function fn_M_dr_lt_l(x) {
           if (m_total_dr_lt_l > 0) {
               if (x >= 0) {
                   return M_c_dr_lt_l_1(x)
               } else {
                   return M_c_dr_lt_l_2(-x)
               }
           } else {
               if (x < 0) {
                   return M_c_dr_lt_l_1(-x)
               } else {
                   return M_c_dr_lt_l_2(x)
               }
           }
       }
   
       function fn_M_ud_st_l(x) {
           if (m_total_ud_st_l > 0) {
               if (x >= 0) {
                   return M_c_ud_st_l_1(x)
               } else {
                   return M_c_ud_st_l_2(-x)
               }
           } else {
               if (x < 0) {
                   return M_c_ud_st_l_1(-x)
               } else {
                   return M_c_ud_st_l_2(x)
               }
           }
       }
   
       function fn_M_ud_lt_l(x) {
           if (m_total_ud_lt_l > 0) {
               if (x >= 0) {
                   return M_c_ud_lt_l_1(x)
               } else {
                   return M_c_ud_lt_l_2(-x)
               }
           } else {
               if (x < 0) {
                   return M_c_ud_lt_l_1(-x)
               } else {
                   return M_c_ud_lt_l_2(x)
               }
           }
       }
   
       function fn_M_dim_l(x) {
           if (m_dim_length > 0) {
               if (x >= 0) {
                   return M_c_dim_l_1(x)
               } else {
                   return M_c_dim_l_2(-x)
               }
           } else {
               if (x < 0) {
                   return M_c_dim_l_1(-x)
               } else {
                   return M_c_dim_l_2(x)
               }
           }
       }
   
   
       // Bezier correction
   
       function fn_t_bez_l(x) {
           if (column_shape == "rectangular") {
               return Math.abs(-column_length / 2 / 1000 - x) / (column_length / 1000)
           } else {
               return Math.abs(-column_radius / 1000 - x) / (2 * column_radius / 1000)
           }
       }
   
   
       if (column_shape == "rectangular") {
           var P_bez_0_dr_st_l = fn_M_dr_st_l(-column_length / 2 / 1000)
           var P_bez_3_dr_st_l = fn_M_dr_st_l(column_length / 2 / 1000)
       } else {
           var P_bez_0_dr_st_l = fn_M_dr_st_l(-column_radius / 1000)
           var P_bez_3_dr_st_l = fn_M_dr_st_l(column_radius / 1000)
       }
   
       var P_bez_1_dr_st_l = fn_M_dr_st_l(-0.001)
       var P_bez_2_dr_st_l = fn_M_dr_st_l(0.001)
   
   
       if (column_shape == "rectangular") {
           var P_bez_0_dr_lt_l = fn_M_dr_lt_l(-column_length / 2 / 1000)
           var P_bez_3_dr_lt_l = fn_M_dr_lt_l(column_length / 2 / 1000)
       } else {
           var P_bez_0_dr_lt_l = fn_M_dr_lt_l(-column_radius / 1000)
           var P_bez_3_dr_lt_l = fn_M_dr_lt_l(column_radius / 1000)
       }
   
       var P_bez_1_dr_lt_l = fn_M_dr_lt_l(-0.001)
       var P_bez_2_dr_lt_l = fn_M_dr_lt_l(0.001)
   
   
       if (column_shape == "rectangular") {
           var P_bez_0_ud_st_l = fn_M_ud_st_l(-column_length / 2 / 1000)
           var P_bez_3_ud_st_l = fn_M_ud_st_l(column_length / 2 / 1000)
       } else {
           var P_bez_0_ud_st_l = fn_M_ud_st_l(-column_radius / 1000)
           var P_bez_3_ud_st_l = fn_M_ud_st_l(column_radius / 1000)
       }
   
       var P_bez_1_ud_st_l = fn_M_ud_st_l(-0.001)
       var P_bez_2_ud_st_l = fn_M_ud_st_l(0.001)
   
   
       if (column_shape == "rectangular") {
           var P_bez_0_ud_lt_l = fn_M_ud_lt_l(-column_length / 2 / 1000)
           var P_bez_3_ud_lt_l = fn_M_ud_lt_l(column_length / 2 / 1000)
       } else {
           var P_bez_0_ud_lt_l = fn_M_ud_lt_l(-column_radius / 1000)
           var P_bez_3_ud_lt_l = fn_M_ud_lt_l(column_radius / 1000)
       }
   
       var P_bez_1_ud_lt_l = fn_M_ud_lt_l(-0.001)
       var P_bez_2_ud_lt_l = fn_M_ud_lt_l(0.001)
   
   
       if (column_shape == "rectangular") {
           var P_bez_0_dim_l = fn_M_dim_l(-column_length / 2 / 1000)
           var P_bez_3_dim_l = fn_M_dim_l(column_length / 2 / 1000)
       } else {
           var P_bez_0_dim_l = fn_M_dim_l(-column_radius / 1000)
           var P_bez_3_dim_l = fn_M_dim_l(column_radius / 1000)
       }
   
       var P_bez_1_dim_l = fn_M_dim_l(-0.001)
       var P_bez_2_dim_l = fn_M_dim_l(0.001)
   
   
   
   
       function fn_B_dr_st_l(x) {
           if (Math.abs(P_bez_1_dr_st_l - P_bez_2_dr_st_l) < 0.1) {
               //Quadratic Bezier
               return Math.pow(1 - fn_t_bez_l(x), 2) * P_bez_0_dr_st_l + 2 * (1 - fn_t_bez_l(x)) * fn_t_bez_l(x) * P_bez_2_dr_st_l + Math.pow(fn_t_bez_l(x), 2) * P_bez_3_dr_st_l
           } else {
               //Cubic Bezier
               return Math.pow(1 - fn_t_bez_l(x), 3) * P_bez_0_dr_st_l + 3 * Math.pow(1 - fn_t_bez_l(x), 2) * fn_t_bez_l(x) * P_bez_1_dr_st_l + 3 * (1 - fn_t_bez_l(x)) * Math.pow(fn_t_bez_l(x), 2) * P_bez_2_dr_st_l + Math.pow(fn_t_bez_l(x), 3) * P_bez_3_dr_st_l
           }
       }
   
       function fn_B_dr_lt_l(x) {
           if (Math.abs(P_bez_1_dr_lt_l - P_bez_2_dr_lt_l) < 0.1) {
               //Quadratic Bezier
               return Math.pow(1 - fn_t_bez_l(x), 2) * P_bez_0_dr_lt_l + 2 * (1 - fn_t_bez_l(x)) * fn_t_bez_l(x) * P_bez_2_dr_lt_l + Math.pow(fn_t_bez_l(x), 2) * P_bez_3_dr_lt_l
           } else {
               //Cubic Bezier
               return Math.pow(1 - fn_t_bez_l(x), 3) * P_bez_0_dr_lt_l + 3 * Math.pow(1 - fn_t_bez_l(x), 2) * fn_t_bez_l(x) * P_bez_1_dr_lt_l + 3 * (1 - fn_t_bez_l(x)) * Math.pow(fn_t_bez_l(x), 2) * P_bez_2_dr_lt_l + Math.pow(fn_t_bez_l(x), 3) * P_bez_3_dr_lt_l
           }
       }
   
       function fn_B_ud_st_l(x) {
           if (Math.abs(P_bez_1_ud_st_l - P_bez_2_ud_st_l) < 0.1) {
               //Quaudatic Bezier
               return Math.pow(1 - fn_t_bez_l(x), 2) * P_bez_0_ud_st_l + 2 * (1 - fn_t_bez_l(x)) * fn_t_bez_l(x) * P_bez_2_ud_st_l + Math.pow(fn_t_bez_l(x), 2) * P_bez_3_ud_st_l
           } else {
               //Cubic Bezier
               return Math.pow(1 - fn_t_bez_l(x), 3) * P_bez_0_ud_st_l + 3 * Math.pow(1 - fn_t_bez_l(x), 2) * fn_t_bez_l(x) * P_bez_1_ud_st_l + 3 * (1 - fn_t_bez_l(x)) * Math.pow(fn_t_bez_l(x), 2) * P_bez_2_ud_st_l + Math.pow(fn_t_bez_l(x), 3) * P_bez_3_ud_st_l
           }
       }
   
       function fn_B_ud_lt_l(x) {
           if (Math.abs(P_bez_1_ud_lt_l - P_bez_2_ud_lt_l) < 0.1) {
               //Quaudatic Bezier
               return Math.pow(1 - fn_t_bez_l(x), 2) * P_bez_0_ud_lt_l + 2 * (1 - fn_t_bez_l(x)) * fn_t_bez_l(x) * P_bez_2_ud_lt_l + Math.pow(fn_t_bez_l(x), 2) * P_bez_3_ud_lt_l
           } else {
               //Cubic Bezier
               return Math.pow(1 - fn_t_bez_l(x), 3) * P_bez_0_ud_lt_l + 3 * Math.pow(1 - fn_t_bez_l(x), 2) * fn_t_bez_l(x) * P_bez_1_ud_lt_l + 3 * (1 - fn_t_bez_l(x)) * Math.pow(fn_t_bez_l(x), 2) * P_bez_2_ud_lt_l + Math.pow(fn_t_bez_l(x), 3) * P_bez_3_ud_lt_l
           }
       }
   
       function fn_B_dim_l(x) {
           if (Math.abs(P_bez_1_dim_l - P_bez_2_dim_l) < 0.1) {
               //Quaudatic Bezier
               return Math.pow(1 - fn_t_bez_l(x), 2) * P_bez_0_dim_l + 2 * (1 - fn_t_bez_l(x)) * fn_t_bez_l(x) * P_bez_2_dim_l + Math.pow(fn_t_bez_l(x), 2) * P_bez_3_dim_l
           } else {
               //Cubic Bezier
               return Math.pow(1 - fn_t_bez_l(x), 3) * P_bez_0_dim_l + 3 * Math.pow(1 - fn_t_bez_l(x), 2) * fn_t_bez_l(x) * P_bez_1_dim_l + 3 * (1 - fn_t_bez_l(x)) * Math.pow(fn_t_bez_l(x), 2) * P_bez_2_dim_l + Math.pow(fn_t_bez_l(x), 3) * P_bez_3_dim_l
           }
       }
   
   
       function fn_M_dr_st_l_corr(x) {
           if (m_total_dr_st_l > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_length / 2 / 1000) {
                       return M_c_dr_st_l_1(x)
                   } else if (x < -column_length / 2 / 1000) {
                       return M_c_dr_st_l_2(-x)
                   } else {
                       return fn_B_dr_st_l(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return M_c_dr_st_l_1(x)
                   } else if (x < -column_radius / 1000) {
                       return M_c_dr_st_l_2(-x)
                   } else {
                       return fn_B_dr_st_l(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x < -column_length / 2 / 1000) {
                       return M_c_dr_st_l_1(-x)
                   } else if (x >= column_length / 2 / 1000) {
                       return M_c_dr_st_l_2(x)
                   } else {
                       return fn_B_dr_st_l(x)
                   }
               } else {
                   if (x < -column_radius / 1000) {
                       return M_c_dr_st_l_1(-x)
                   } else if (x >= column_radius / 1000) {
                       return M_c_dr_st_l_2(x)
                   } else {
                       return fn_B_dr_st_l(x)
                   }
               }
           }
       }
   
       function fn_M_dr_lt_l_corr(x) {
           if (m_total_dr_lt_l > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_length / 2 / 1000) {
                       return M_c_dr_lt_l_1(x)
                   } else if (x < -column_length / 2 / 1000) {
                       return M_c_dr_lt_l_2(-x)
                   } else {
                       return fn_B_dr_lt_l(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return M_c_dr_lt_l_1(x)
                   } else if (x < -column_radius / 1000) {
                       return M_c_dr_lt_l_2(-x)
                   } else {
                       return fn_B_dr_lt_l(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x < -column_length / 2 / 1000) {
                       return M_c_dr_lt_l_1(-x)
                   } else if (x >= column_length / 2 / 1000) {
                       return M_c_dr_lt_l_2(x)
                   } else {
                       return fn_B_dr_lt_l(x)
                   }
               } else {
                   if (x < -column_radius / 1000) {
                       return M_c_dr_lt_l_1(-x)
                   } else if (x >= column_radius / 1000) {
                       return M_c_dr_lt_l_2(x)
                   } else {
                       return fn_B_dr_lt_l(x)
                   }
               }
           }
       }
   
       function fn_M_ud_st_l_corr(x) {
           if (m_total_ud_st_l > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_length / 2 / 1000) {
                       return M_c_ud_st_l_1(x)
                   } else if (x < -column_length / 2 / 1000) {
                       return M_c_ud_st_l_2(-x)
                   } else {
                       return fn_B_ud_st_l(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return M_c_ud_st_l_1(x)
                   } else if (x < -column_radius / 1000) {
                       return M_c_ud_st_l_2(-x)
                   } else {
                       return fn_B_ud_st_l(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x < -column_length / 2 / 1000) {
                       return M_c_ud_st_l_1(-x)
                   } else if (x >= column_length / 2 / 1000) {
                       return M_c_ud_st_l_2(x)
                   } else {
                       return fn_B_ud_st_l(x)
                   }
               } else {
                   if (x < -column_radius / 1000) {
                       return M_c_ud_st_l_1(-x)
                   } else if (x >= column_radius / 1000) {
                       return M_c_ud_st_l_2(x)
                   } else {
                       return fn_B_ud_st_l(x)
                   }
               }
           }
       }
   
       function fn_M_ud_lt_l_corr(x) {
           if (m_total_ud_lt_l > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_length / 2 / 1000) {
                       return M_c_ud_lt_l_1(x)
                   } else if (x < -column_length / 2 / 1000) {
                       return M_c_ud_lt_l_2(-x)
                   } else {
                       return fn_B_ud_lt_l(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return M_c_ud_lt_l_1(x)
                   } else if (x < -column_radius / 1000) {
                       return M_c_ud_lt_l_2(-x)
                   } else {
                       return fn_B_ud_lt_l(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x < -column_length / 2 / 1000) {
                       return M_c_ud_lt_l_1(-x)
                   } else if (x >= column_length / 2 / 1000) {
                       return M_c_ud_lt_l_2(x)
                   } else {
                       return fn_B_ud_lt_l(x)
                   }
               } else {
                   if (x < -column_radius / 1000) {
                       return M_c_ud_lt_l_1(-x)
                   } else if (x >= column_radius / 1000) {
                       return M_c_ud_lt_l_2(x)
                   } else {
                       return fn_B_ud_lt_l(x)
                   }
               }
           }
       }
   
   
   
   
       function fn_M_dim_l_corr(x) {
           if (m_dim_length > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_length / 2 / 1000) {
                       return M_c_dim_l_1(x)
                   } else if (x < -column_length / 2 / 1000) {
                       return M_c_dim_l_2(-x)
                   } else {
                       return fn_B_dim_l(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return M_c_dim_l_1(x)
                   } else if (x < -column_radius / 1000) {
                       return M_c_dim_l_2(-x)
                   } else {
                       return fn_B_dim_l(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x < -column_length / 2 / 1000) {
                       return M_c_dim_l_1(-x)
                   } else if (x >= column_length / 2 / 1000) {
                       return M_c_dim_l_2(x)
                   } else {
                       return fn_B_dim_l(x)
                   }
               } else {
                   if (x < -column_radius / 1000) {
                       return M_c_dim_l_1(-x)
                   } else if (x >= column_radius / 1000) {
                       return M_c_dim_l_2(x)
                   } else {
                       return fn_B_dim_l(x)
                   }
               }
           }
       }
   
      
   
   
   
   
   
       function V_r_dr_st_l_1(x) {
           if (x <= a_dr_st_l_1) {
               return R_A_dr_st_l_1
           } else {
               return R_A_dr_st_l_1 - w_dr_st_l * (x - a_dr_st_l_1)
           }
       }
   
       function V_r_dr_lt_l_1(x) {
           if (x <= a_dr_lt_l_1) {
               return R_A_dr_lt_l_1
           } else {
               return R_A_dr_lt_l_1 - w_dr_lt_l * (x - a_dr_lt_l_1)
           }
       }
   
       function V_r_ud_st_l_1(x) {
           if (x <= a_ud_st_l_1) {
               return R_A_ud_st_l_1
           } else {
               return R_A_ud_st_l_1 - w_ud_st_l * (x - a_ud_st_l_1)
           }
       }
   
       function V_r_ud_lt_l_1(x) {
           if (x <= a_ud_lt_l_1) {
               return R_A_ud_lt_l_1
           } else {
               return R_A_ud_lt_l_1 - w_ud_lt_l * (x - a_ud_lt_l_1)
           }
       }
   
       function V_r_dim_l_1(x) {
           if (x <= a_dim_l_1) {
               return R_A_dim_l_1
           } else {
               return R_A_dim_l_1 - w_dim_l * (x - a_dim_l_1)
           }
       }
   
   
       function V_r_dr_st_l_2(x) {
           if (x < L_w_dr_st_l_2) {
               return -(R_A_dr_st_l_2 - w_dr_st_l * (x - a_dr_st_l_2))
           } else {
               return 0
           }
       }
   
       function V_r_dr_lt_l_2(x) {
           if (x < L_w_dr_lt_l_2) {
               return -(R_A_dr_lt_l_2 - w_dr_lt_l * (x - a_dr_lt_l_2))
           } else {
               return 0
           }
       }
   
       function V_r_ud_st_l_2(x) {
           if (x < L_w_ud_st_l_2) {
               return -(R_A_ud_st_l_2 - w_ud_st_l * (x - a_ud_st_l_2))
           } else {
               return 0
           }
       }
   
       function V_r_ud_lt_l_2(x) {
           if (x < L_w_ud_lt_l_2) {
               return -(R_A_ud_lt_l_2 - w_ud_lt_l * (x - a_ud_lt_l_2))
           } else {
               return 0
           }
       }
   
       function V_r_dim_l_2(x) {
           if (x < L_w_dim_l_2) {
               return -(R_A_dim_l_2 - w_dim_l * (x - a_dim_l_2))
           } else {
               return 0
           }
       }
   
   
       function V_g_dr_st_l_1(x) {
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
   
       function V_g_dr_lt_l_1(x) {
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
   
       function V_g_ud_st_l_1(x) {
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
   
       function V_g_ud_lt_l_1(x) {
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
   
       function V_g_dim_l_1(x) {
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
   
   
       function V_g_dr_st_l_2(x) {
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
   
       function V_g_dr_lt_l_2(x) {
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
   
       function V_g_ud_st_l_2(x) {
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
   
       function V_g_ud_lt_l_2(x) {
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
   
       function V_g_dim_l_2(x) {
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
   
   
       function V_c_dr_st_l_1(x) {
           return V_r_dr_st_l_1(x) + V_g_dr_st_l_1(x)
       }
   
       function V_c_dr_lt_l_1(x) {
           return V_r_dr_lt_l_1(x) + V_g_dr_lt_l_1(x)
       }
   
       function V_c_ud_st_l_1(x) {
           return V_r_ud_st_l_1(x) + V_g_ud_st_l_1(x)
       }
   
       function V_c_ud_lt_l_1(x) {
           return V_r_ud_lt_l_1(x) + V_g_ud_lt_l_1(x)
       }
   
       function V_c_dim_l_1(x) {
           return V_r_dim_l_1(x) + V_g_dim_l_1(x)
       }
   
   
       function V_c_dr_st_l_2(x) {
           return V_r_dr_st_l_2(x) + V_g_dr_st_l_2(x)
       }
   
       function V_c_dr_lt_l_2(x) {
           return V_r_dr_lt_l_2(x) + V_g_dr_lt_l_2(x)
       }
   
       function V_c_ud_st_l_2(x) {
           return V_r_ud_st_l_2(x) + V_g_ud_st_l_2(x)
       }
   
       function V_c_ud_lt_l_2(x) {
           return V_r_ud_lt_l_2(x) + V_g_ud_lt_l_2(x)
       }
   
       function V_c_dim_l_2(x) {
           return V_r_dim_l_2(x) + V_g_dim_l_2(x)
       }
   
   
       function fn_V_dr_st_l(x) {
           if (m_total_dr_st_l > 0) {
               if (x >= 0) {
                   return V_c_dr_st_l_1(x)
               } else {
                   return V_c_dr_st_l_2(-x)
               }
           } else {
               if (x < 0) {
                   return V_c_dr_st_l_1(-x)
               } else {
                   return V_c_dr_st_l_2(x)
               }
           }
       }
   
       function fn_V_dr_lt_l(x) {
           if (m_total_dr_lt_l > 0) {
               if (x >= 0) {
                   return V_c_dr_lt_l_1(x)
               } else {
                   return V_c_dr_lt_l_2(-x)
               }
           } else {
               if (x < 0) {
                   return V_c_dr_lt_l_1(-x)
               } else {
                   return V_c_dr_lt_l_2(x)
               }
           }
       }
   
       function fn_V_ud_st_l(x) {
           if (m_total_ud_st_l > 0) {
               if (x >= 0) {
                   return V_c_ud_st_l_1(x)
               } else {
                   return V_c_ud_st_l_2(-x)
               }
           } else {
               if (x < 0) {
                   return V_c_ud_st_l_1(-x)
               } else {
                   return V_c_ud_st_l_2(x)
               }
           }
       }
   
       function fn_V_ud_lt_l(x) {
           if (m_total_ud_lt_l > 0) {
               if (x >= 0) {
                   return V_c_ud_lt_l_1(x)
               } else {
                   return V_c_ud_lt_l_2(-x)
               }
           } else {
               if (x < 0) {
                   return V_c_ud_lt_l_1(-x)
               } else {
                   return V_c_ud_lt_l_2(x)
               }
           }
       }
   
       function fn_V_dim_l(x) {
           if (m_dim_length > 0) {
               if (x >= 0) {
                   return V_c_dim_l_1(x)
               } else {
                   return V_c_dim_l_2(-x)
               }
           } else {
               if (x < 0) {
                   return V_c_dim_l_1(-x)
               } else {
                   return V_c_dim_l_2(x)
               }
           }
       }
   
   
       // Corrected moment functions
   
   
   
       // Corrected shear functions
   
       if (column_shape == "rectangular") {
           var a_V_dr_st_l = (fn_V_dr_st_l(column_length / 2 / 1000) - fn_V_dr_st_l(-column_length / 2 / 1000)) / (column_length / 1000)
           var b_V_dr_st_l = fn_V_dr_st_l(column_length / 2 / 1000) - a_V_dr_st_l * (column_length / 2 / 1000)
       } else {
           var a_V_dr_st_l = (fn_V_dr_st_l(column_radius / 1000) - fn_V_dr_st_l(-column_radius / 1000)) / (2 * column_radius / 1000)
           var b_V_dr_st_l = fn_V_dr_st_l(column_radius / 1000) - a_V_dr_st_l * (column_radius / 1000)
       }
   
       if (column_shape == "rectangular") {
           var a_V_dr_lt_l = (fn_V_dr_lt_l(column_length / 2 / 1000) - fn_V_dr_lt_l(-column_length / 2 / 1000)) / (column_length / 1000)
           var b_V_dr_lt_l = fn_V_dr_lt_l(column_length / 2 / 1000) - a_V_dr_lt_l * (column_length / 2 / 1000)
       } else {
           var a_V_dr_lt_l = (fn_V_dr_lt_l(column_radius / 1000) - fn_V_dr_lt_l(-column_radius / 1000)) / (2 * column_radius / 1000)
           var b_V_dr_lt_l = fn_V_dr_lt_l(column_radius / 1000) - a_V_dr_lt_l * (column_radius / 1000)
       }
   
       if (column_shape == "rectangular") {
           var a_V_ud_st_l = (fn_V_ud_st_l(column_length / 2 / 1000) - fn_V_ud_st_l(-column_length / 2 / 1000)) / (column_length / 1000)
           var b_V_ud_st_l = fn_V_ud_st_l(column_length / 2 / 1000) - a_V_ud_st_l * (column_length / 2 / 1000)
       } else {
           var a_V_ud_st_l = (fn_V_ud_st_l(column_radius / 1000) - fn_V_ud_st_l(-column_radius / 1000)) / (2 * column_radius / 1000)
           var b_V_ud_st_l = fn_V_ud_st_l(column_radius / 1000) - a_V_ud_st_l * (column_radius / 1000)
       }
   
       if (column_shape == "rectangular") {
           var a_V_ud_lt_l = (fn_V_ud_lt_l(column_length / 2 / 1000) - fn_V_ud_lt_l(-column_length / 2 / 1000)) / (column_length / 1000)
           var b_V_ud_lt_l = fn_V_ud_lt_l(column_length / 2 / 1000) - a_V_ud_lt_l * (column_length / 2 / 1000)
       } else {
           var a_V_ud_lt_l = (fn_V_ud_lt_l(column_radius / 1000) - fn_V_ud_lt_l(-column_radius / 1000)) / (2 * column_radius / 1000)
           var b_V_ud_lt_l = fn_V_ud_lt_l(column_radius / 1000) - a_V_ud_lt_l * (column_radius / 1000)
       }
   
       if (column_shape == "rectangular") {
           var a_V_dim_l = (fn_V_dim_l(column_length / 2 / 1000) - fn_V_dim_l(-column_length / 2 / 1000)) / (column_length / 1000)
           var b_V_dim_l = fn_V_dim_l(column_length / 2 / 1000) - a_V_dim_l * (column_length / 2 / 1000)
       } else {
           var a_V_dim_l = (fn_V_dim_l(column_radius / 1000) - fn_V_dim_l(-column_radius / 1000)) / (2 * column_radius / 1000)
           var b_V_dim_l = fn_V_dim_l(column_radius / 1000) - a_V_dim_l * (column_radius / 1000)
       }
   
   
       function y_V_dr_st_l(x) {
           return a_V_dr_st_l * x + b_V_dr_st_l
       }
   
       function y_V_dr_lt_l(x) {
           return a_V_dr_lt_l * x + b_V_dr_lt_l
       }
   
       function y_V_ud_st_l(x) {
           return a_V_ud_st_l * x + b_V_ud_st_l
       }
   
       function y_V_ud_lt_l(x) {
           return a_V_ud_lt_l * x + b_V_ud_lt_l
       }
   
       function y_V_dim_l(x) {
           return a_V_dim_l * x + b_V_dim_l
       }
   
   
       function fn_V_dr_st_l_corr(x) {
           if (m_total_dr_st_l > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_length / 2 / 1000) {
                       return V_c_dr_st_l_1(x)
                   } else if (x < -column_length / 2 / 1000) {
                       return V_c_dr_st_l_2(-x)
                   } else {
                       return y_V_dr_st_l(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_dr_st_l_1(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_dr_st_l_2(-x)
                   } else {
                       return y_V_dr_st_l(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x >= column_length / 2 / 1000) {
                       return V_c_dr_st_l_2(x)
                   } else if (x < -column_length / 2 / 1000) {
                       return V_c_dr_st_l_1(-x)
                   } else {
                       return y_V_dr_st_l(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_dr_st_l_2(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_dr_st_l_1(-x)
                   } else {
                       return y_V_dr_st_l(x)
                   }
               }
           }
       }
   
       function fn_V_dr_lt_l_corr(x) {
           if (m_total_dr_lt_l > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_length / 2 / 1000) {
                       return V_c_dr_lt_l_1(x)
                   } else if (x < -column_length / 2 / 1000) {
                       return V_c_dr_lt_l_2(-x)
                   } else {
                       return y_V_dr_lt_l(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_dr_lt_l_1(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_dr_lt_l_2(-x)
                   } else {
                       return y_V_dr_lt_l(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x >= column_length / 2 / 1000) {
                       return V_c_dr_lt_l_2(x)
                   } else if (x < -column_length / 2 / 1000) {
                       return V_c_dr_lt_l_1(-x)
                   } else {
                       return y_V_dr_lt_l(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_dr_lt_l_2(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_dr_lt_l_1(-x)
                   } else {
                       return y_V_dr_lt_l(x)
                   }
               }
           }
       }
   
       function fn_V_ud_st_l_corr(x) {
           if (m_total_ud_st_l > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_length / 2 / 1000) {
                       return V_c_ud_st_l_1(x)
                   } else if (x < -column_length / 2 / 1000) {
                       return V_c_ud_st_l_2(-x)
                   } else {
                       return y_V_ud_st_l(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_ud_st_l_1(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_ud_st_l_2(-x)
                   } else {
                       return y_V_ud_st_l(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x >= column_length / 2 / 1000) {
                       return V_c_ud_st_l_2(x)
                   } else if (x < -column_length / 2 / 1000) {
                       return V_c_ud_st_l_1(-x)
                   } else {
                       return y_V_ud_st_l(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_ud_st_l_2(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_ud_st_l_1(-x)
                   } else {
                       return y_V_ud_st_l(x)
                   }
               }
           }
       }
   
       function fn_V_ud_lt_l_corr(x) {
           if (m_total_ud_lt_l > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_length / 2 / 1000) {
                       return V_c_ud_lt_l_1(x)
                   } else if (x < -column_length / 2 / 1000) {
                       return V_c_ud_lt_l_2(-x)
                   } else {
                       return y_V_ud_lt_l(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_ud_lt_l_1(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_ud_lt_l_2(-x)
                   } else {
                       return y_V_ud_lt_l(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x >= column_length / 2 / 1000) {
                       return V_c_ud_lt_l_2(x)
                   } else if (x < -column_length / 2 / 1000) {
                       return V_c_ud_lt_l_1(-x)
                   } else {
                       return y_V_ud_lt_l(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_ud_lt_l_2(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_ud_lt_l_1(-x)
                   } else {
                       return y_V_ud_lt_l(x)
                   }
               }
           }
       }
   
       function fn_V_dim_l_corr(x) {
           if (m_dim_length > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_length / 2 / 1000) {
                       return V_c_dim_l_1(x)
                   } else if (x < -column_length / 2 / 1000) {
                       return V_c_dim_l_2(-x)
                   } else {
                       return y_V_dim_l(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_dim_l_1(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_dim_l_2(-x)
                   } else {
                       return y_V_dim_l(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x >= column_length / 2 / 1000) {
                       return V_c_dim_l_2(x)
                   } else if (x < -column_length / 2 / 1000) {
                       return V_c_dim_l_1(-x)
                   } else {
                       return y_V_dim_l(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_dim_l_2(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_dim_l_1(-x)
                   } else {
                       return y_V_dim_l(x)
                   }
               }
           }
       }
   
   
   
   
       //... width direction (b)
   
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
   
   
       if (m_total_dr_st_b > 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_dr_st_b < width / 2 - ec_vl_width) {
                   var a_dr_st_b_1 = (width / 2 - ec_vl_width - ef_dr_st_b) / 1000
                   var b_dr_st_b_2 = (width / 2 + ec_vl_width) / 1000
                   var L_w_dr_st_b_1 = ef_dr_st_b / 1000
               } else {
                   var a_dr_st_b_1 = 0
                   var b_dr_st_b_2 = (width - ef_dr_st_b) / 1000
                   var L_w_dr_st_b_1 = (width / 2 - ec_vl_width) / 1000
               }
               var L_w_dr_st_b_2 = (width / 2 + ec_vl_width) / 1000 - b_dr_st_b_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_dr_st_b < radius - ec_vl_width) {
                   var a_dr_st_b_1 = (radius - ec_vl_width - ef_dr_st_b) / 1000
                   var b_dr_st_b_2 = (radius + ec_vl_width) / 1000
                   var L_w_dr_st_b_1 = ef_dr_st_b / 1000
               } else {
                   var a_dr_st_b_1 = 0
                   var b_dr_st_b_2 = (2 * radius - ef_dr_st_b) / 1000
                   var L_w_dr_st_b_1 = (radius - ec_vl_width) / 1000
               }
               var L_w_dr_st_b_2 = (radius + ec_vl_width) / 1000 - b_dr_st_b_2
           }
       } else if (m_total_dr_st_b <= 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_dr_st_b < width / 2 + ec_vl_width) {
                   var a_dr_st_b_1 = (width / 2 + ec_vl_width - ef_dr_st_b) / 1000
                   var b_dr_st_b_2 = (width / 2 - ec_vl_width) / 1000
                   var L_w_dr_st_b_1 = ef_dr_st_b / 1000
               } else {
                   var a_dr_st_b_1 = 0
                   var b_dr_st_b_2 = (width - ef_dr_st_b) / 1000
                   var L_w_dr_st_b_1 = (width / 2 + ec_vl_width) / 1000
               }
               var L_w_dr_st_b_2 = (width / 2 - ec_vl_width) / 1000 - b_dr_st_b_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_dr_st_b < radius + ec_vl_width) {
                   var a_dr_st_b_1 = (radius + ec_vl_width - ef_dr_st_b) / 1000
                   var b_dr_st_b_2 = (radius - ec_vl_width) / 1000
                   var L_w_dr_st_b_1 = ef_dr_st_b / 1000
               } else {
                   var a_dr_st_b_1 = 0
                   var b_dr_st_b_2 = (2 * radius - ef_dr_st_b) / 1000
                   var L_w_dr_st_b_1 = (radius + ec_vl_width) / 1000
               }
               var L_w_dr_st_b_2 = (radius - ec_vl_width) / 1000 - b_dr_st_b_2
           }
       }
   
       if (m_total_dr_lt_b > 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_dr_lt_b < width / 2 - ec_vl_width) {
                   var a_dr_lt_b_1 = (width / 2 - ec_vl_width - ef_dr_lt_b) / 1000
                   var b_dr_lt_b_2 = (width / 2 + ec_vl_width) / 1000
                   var L_w_dr_lt_b_1 = ef_dr_lt_b / 1000
               } else {
                   var a_dr_lt_b_1 = 0
                   var b_dr_lt_b_2 = (width - ef_dr_lt_b) / 1000
                   var L_w_dr_lt_b_1 = (width / 2 - ec_vl_width) / 1000
               }
               var L_w_dr_lt_b_2 = (width / 2 + ec_vl_width) / 1000 - b_dr_lt_b_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_dr_lt_b < radius - ec_vl_width) {
                   var a_dr_lt_b_1 = (radius - ec_vl_width - ef_dr_lt_b) / 1000
                   var b_dr_lt_b_2 = (radius + ec_vl_width) / 1000
                   var L_w_dr_lt_b_1 = ef_dr_lt_b / 1000
               } else {
                   var a_dr_lt_b_1 = 0
                   var b_dr_lt_b_2 = (2 * radius - ef_dr_lt_b) / 1000
                   var L_w_dr_lt_b_1 = (radius - ec_vl_width) / 1000
               }
               var L_w_dr_lt_b_2 = (radius + ec_vl_width) / 1000 - b_dr_lt_b_2
           }
       } else if (m_total_dr_lt_b <= 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_dr_lt_b < width / 2 + ec_vl_width) {
                   var a_dr_lt_b_1 = (width / 2 + ec_vl_width - ef_dr_lt_b) / 1000
                   var b_dr_lt_b_2 = (width / 2 - ec_vl_width) / 1000
                   var L_w_dr_lt_b_1 = ef_dr_lt_b / 1000
               } else {
                   var a_dr_lt_b_1 = 0
                   var b_dr_lt_b_2 = (width - ef_dr_lt_b) / 1000
                   var L_w_dr_lt_b_1 = (width / 2 + ec_vl_width) / 1000
               }
               var L_w_dr_lt_b_2 = (width / 2 - ec_vl_width) / 1000 - b_dr_lt_b_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_dr_lt_b < radius + ec_vl_width) {
                   var a_dr_lt_b_1 = (radius + ec_vl_width - ef_dr_lt_b) / 1000
                   var b_dr_lt_b_2 = (radius - ec_vl_width) / 1000
                   var L_w_dr_lt_b_1 = ef_dr_lt_b / 1000
               } else {
                   var a_dr_lt_b_1 = 0
                   var b_dr_lt_b_2 = (2 * radius - ef_dr_lt_b) / 1000
                   var L_w_dr_lt_b_1 = (radius + ec_vl_width) / 1000
               }
               var L_w_dr_lt_b_2 = (radius - ec_vl_width) / 1000 - b_dr_lt_b_2
           }
       }
   
       if (m_total_ud_st_b > 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_ud_st_b < width / 2 - ec_vl_width) {
                   var a_ud_st_b_1 = (width / 2 - ec_vl_width - ef_ud_st_b) / 1000
                   var b_ud_st_b_2 = (width / 2 + ec_vl_width) / 1000
                   var L_w_ud_st_b_1 = ef_ud_st_b / 1000
               } else {
                   var a_ud_st_b_1 = 0
                   var b_ud_st_b_2 = (width - ef_ud_st_b) / 1000
                   var L_w_ud_st_b_1 = (width / 2 - ec_vl_width) / 1000
               }
               var L_w_ud_st_b_2 = (width / 2 + ec_vl_width) / 1000 - b_ud_st_b_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_ud_st_b < radius - ec_vl_width) {
                   var a_ud_st_b_1 = (radius - ec_vl_width - ef_ud_st_b) / 1000
                   var b_ud_st_b_2 = (radius + ec_vl_width) / 1000
                   var L_w_ud_st_b_1 = ef_ud_st_b / 1000
               } else {
                   var a_ud_st_b_1 = 0
                   var b_ud_st_b_2 = (2 * radius - ef_ud_st_b) / 1000
                   var L_w_ud_st_b_1 = (radius - ec_vl_width) / 1000
               }
               var L_w_ud_st_b_2 = (radius + ec_vl_width) / 1000 - b_ud_st_b_2
           }
       } else if (m_total_ud_st_b <= 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_ud_st_b < width / 2 + ec_vl_width) {
                   var a_ud_st_b_1 = (width / 2 + ec_vl_width - ef_ud_st_b) / 1000
                   var b_ud_st_b_2 = (width / 2 - ec_vl_width) / 1000
                   var L_w_ud_st_b_1 = ef_ud_st_b / 1000
               } else {
                   var a_ud_st_b_1 = 0
                   var b_ud_st_b_2 = (width - ef_ud_st_b) / 1000
                   var L_w_ud_st_b_1 = (width / 2 + ec_vl_width) / 1000
               }
               var L_w_ud_st_b_2 = (width / 2 - ec_vl_width) / 1000 - b_ud_st_b_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_ud_st_b < radius + ec_vl_width) {
                   var a_ud_st_b_1 = (radius + ec_vl_width - ef_ud_st_b) / 1000
                   var b_ud_st_b_2 = (radius - ec_vl_width) / 1000
                   var L_w_ud_st_b_1 = ef_ud_st_b / 1000
               } else {
                   var a_ud_st_b_1 = 0
                   var b_ud_st_b_2 = (2 * radius - ef_ud_st_b) / 1000
                   var L_w_ud_st_b_1 = (radius + ec_vl_width) / 1000
               }
               var L_w_ud_st_b_2 = (radius - ec_vl_width) / 1000 - b_ud_st_b_2
           }
       }
   
       if (m_total_ud_lt_b > 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_ud_lt_b < width / 2 - ec_vl_width) {
                   var a_ud_lt_b_1 = (width / 2 - ec_vl_width - ef_ud_lt_b) / 1000
                   var b_ud_lt_b_2 = (width / 2 + ec_vl_width) / 1000
                   var L_w_ud_lt_b_1 = ef_ud_lt_b / 1000
               } else {
                   var a_ud_lt_b_1 = 0
                   var b_ud_lt_b_2 = (width - ef_ud_lt_b) / 1000
                   var L_w_ud_lt_b_1 = (width / 2 - ec_vl_width) / 1000
               }
               var L_w_ud_lt_b_2 = (width / 2 + ec_vl_width) / 1000 - b_ud_lt_b_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_ud_lt_b < radius - ec_vl_width) {
                   var a_ud_lt_b_1 = (radius - ec_vl_width - ef_ud_lt_b) / 1000
                   var b_ud_lt_b_2 = (radius + ec_vl_width) / 1000
                   var L_w_ud_lt_b_1 = ef_ud_lt_b / 1000
               } else {
                   var a_ud_lt_b_1 = 0
                   var b_ud_lt_b_2 = (2 * radius - ef_ud_lt_b) / 1000
                   var L_w_ud_lt_b_1 = (radius - ec_vl_width) / 1000
               }
               var L_w_ud_lt_b_2 = (radius + ec_vl_width) / 1000 - b_ud_lt_b_2
           }
       } else if (m_total_ud_lt_b <= 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_ud_lt_b < width / 2 + ec_vl_width) {
                   var a_ud_lt_b_1 = (width / 2 + ec_vl_width - ef_ud_lt_b) / 1000
                   var b_ud_lt_b_2 = (width / 2 - ec_vl_width) / 1000
                   var L_w_ud_lt_b_1 = ef_ud_lt_b / 1000
               } else {
                   var a_ud_lt_b_1 = 0
                   var b_ud_lt_b_2 = (width - ef_ud_lt_b) / 1000
                   var L_w_ud_lt_b_1 = (width / 2 + ec_vl_width) / 1000
               }
               var L_w_ud_lt_b_2 = (width / 2 - ec_vl_width) / 1000 - b_ud_lt_b_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_ud_lt_b < radius + ec_vl_width) {
                   var a_ud_lt_b_1 = (radius + ec_vl_width - ef_ud_lt_b) / 1000
                   var b_ud_lt_b_2 = (radius - ec_vl_width) / 1000
                   var L_w_ud_lt_b_1 = ef_ud_lt_b / 1000
               } else {
                   var a_ud_lt_b_1 = 0
                   var b_ud_lt_b_2 = (2 * radius - ef_ud_lt_b) / 1000
                   var L_w_ud_lt_b_1 = (radius + ec_vl_width) / 1000
               }
               var L_w_ud_lt_b_2 = (radius - ec_vl_width) / 1000 - b_ud_lt_b_2
           }
       }
   
       if (m_dim_width > 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_dim_b < width / 2 - ec_vl_width) {
                   var a_dim_b_1 = (width / 2 - ec_vl_width - ef_dim_b) / 1000
                   var b_dim_b_2 = (width / 2 + ec_vl_width) / 1000
                   var L_w_dim_b_1 = ef_dim_b / 1000
               } else {
                   var a_dim_b_1 = 0
                   var b_dim_b_2 = (width - ef_dim_b) / 1000
                   var L_w_dim_b_1 = (width / 2 - ec_vl_width) / 1000
               }
               var L_w_dim_b_2 = (width / 2 + ec_vl_width) / 1000 - b_dim_b_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_dim_b < radius - ec_vl_width) {
                   var a_dim_b_1 = (radius - ec_vl_width - ef_dim_b) / 1000
                   var b_dim_b_2 = (radius + ec_vl_width) / 1000
                   var L_w_dim_b_1 = ef_dim_b / 1000
               } else {
                   var a_dim_b_1 = 0
                   var b_dim_b_2 = (2 * radius - ef_dim_b) / 1000
                   var L_w_dim_b_1 = (radius - ec_vl_width) / 1000
               }
               var L_w_dim_b_2 = (radius + ec_vl_width) / 1000 - b_dim_b_2
           }
       } else if (m_dim_width <= 0) {
           if (point_foundation_shape == 'rectangular') {
               if (ef_dim_b < width / 2 + ec_vl_width) {
                   var a_dim_b_1 = (width / 2 + ec_vl_width - ef_dim_b) / 1000
                   var b_dim_b_2 = (width / 2 - ec_vl_width) / 1000
                   var L_w_dim_b_1 = ef_dim_b / 1000
               } else {
                   var a_dim_b_1 = 0
                   var b_dim_b_2 = (width - ef_dim_b) / 1000
                   var L_w_dim_b_1 = (width / 2 + ec_vl_width) / 1000
               }
               var L_w_dim_b_2 = (width / 2 - ec_vl_width) / 1000 - b_dim_b_2
           } else if (point_foundation_shape == 'circular') {
               if (ef_dim_b < radius + ec_vl_width) {
                   var a_dim_b_1 = (radius + ec_vl_width - ef_dim_b) / 1000
                   var b_dim_b_2 = (radius - ec_vl_width) / 1000
                   var L_w_dim_b_1 = ef_dim_b / 1000
               } else {
                   var a_dim_b_1 = 0
                   var b_dim_b_2 = (2 * radius - ef_dim_b) / 1000
                   var L_w_dim_b_1 = (radius + ec_vl_width) / 1000
               }
               var L_w_dim_b_2 = (radius - ec_vl_width) / 1000 - b_dim_b_2
           }
       }
   
   
       var R_A_dr_st_b_1 = w_dr_st_b * L_w_dr_st_b_1
       var R_A_dr_lt_b_1 = w_dr_lt_b * L_w_dr_lt_b_1
       var R_A_ud_st_b_1 = w_ud_st_b * L_w_ud_st_b_1
       var R_A_ud_lt_b_1 = w_ud_lt_b * L_w_ud_lt_b_1
   
       var R_A_dim_b_1 = w_dim_b * L_w_dim_b_1
   
       var R_A_dr_st_b_2 = w_dr_st_b * L_w_dr_st_b_2
       var R_A_dr_lt_b_2 = w_dr_lt_b * L_w_dr_lt_b_2
       var R_A_ud_st_b_2 = w_ud_st_b * L_w_ud_st_b_2
       var R_A_ud_lt_b_2 = w_ud_lt_b * L_w_ud_lt_b_2
   
       var R_A_dim_b_2 = w_dim_b * L_w_dim_b_2
   
   
       var M_A_dr_st_b_1 = -w_dr_st_b * L_w_dr_st_b_1 * (a_dr_st_b_1 + L_w_dr_st_b_1 / 2)
       var M_A_dr_lt_b_1 = -w_dr_lt_b * L_w_dr_lt_b_1 * (a_dr_lt_b_1 + L_w_dr_lt_b_1 / 2)
       var M_A_ud_st_b_1 = -w_ud_st_b * L_w_ud_st_b_1 * (a_ud_st_b_1 + L_w_ud_st_b_1 / 2)
       var M_A_ud_lt_b_1 = -w_ud_lt_b * L_w_ud_lt_b_1 * (a_ud_lt_b_1 + L_w_ud_lt_b_1 / 2)
   
       var M_A_dim_b_1 = -w_dim_b * L_w_dim_b_1 * (a_dim_b_1 + L_w_dim_b_1 / 2)
   
       var M_A_dr_st_b_2 = -w_dr_st_b * L_w_dr_st_b_2 * (a_dr_st_b_2 + L_w_dr_st_b_2 / 2)
       var M_A_dr_lt_b_2 = -w_dr_lt_b * L_w_dr_lt_b_2 * (a_dr_lt_b_2 + L_w_dr_lt_b_2 / 2)
       var M_A_ud_st_b_2 = -w_ud_st_b * L_w_ud_st_b_2 * (a_ud_st_b_2 + L_w_ud_st_b_2 / 2)
       var M_A_ud_lt_b_2 = -w_ud_lt_b * L_w_ud_lt_b_2 * (a_ud_lt_b_2 + L_w_ud_lt_b_2 / 2)
   
       var M_A_dim_b_2 = -w_dim_b * L_w_dim_b_2 * (a_dim_b_2 + L_w_dim_b_2 / 2)
   
   
       function M_r_dr_st_b_1(x) {
           if (x <= a_dr_st_b_1) {
               return R_A_dr_st_b_1 * x + M_A_dr_st_b_1
           } else if (x > a_dr_st_b_1) {
               return R_A_dr_st_b_1 * x + M_A_dr_st_b_1 - w_dr_st_b * Math.pow(x - a_dr_st_b_1, 2) / 2
           }
       }
   
       function M_r_dr_lt_b_1(x) {
           if (x <= a_dr_lt_b_1) {
               return R_A_dr_lt_b_1 * x + M_A_dr_lt_b_1
           } else if (x > a_dr_lt_b_1) {
               return R_A_dr_lt_b_1 * x + M_A_dr_lt_b_1 - w_dr_lt_b * Math.pow(x - a_dr_lt_b_1, 2) / 2
           }
       }
   
       function M_r_ud_st_b_1(x) {
           if (x <= a_ud_st_b_1) {
               return R_A_ud_st_b_1 * x + M_A_ud_st_b_1
           } else if (x > a_ud_st_b_1) {
               return R_A_ud_st_b_1 * x + M_A_ud_st_b_1 - w_ud_st_b * Math.pow(x - a_ud_st_b_1, 2) / 2
           }
       }
   
       function M_r_ud_lt_b_1(x) {
           if (x <= a_ud_lt_b_1) {
               return R_A_ud_lt_b_1 * x + M_A_ud_lt_b_1
           } else if (x > a_ud_lt_b_1) {
               return R_A_ud_lt_b_1 * x + M_A_ud_lt_b_1 - w_ud_lt_b * Math.pow(x - a_ud_lt_b_1, 2) / 2
           }
       }
   
       function M_r_dim_b_1(x) {
           if (x <= a_dim_b_1) {
               return R_A_dim_b_1 * x + M_A_dim_b_1
           } else if (x > a_dim_b_1) {
               return R_A_dim_b_1 * x + M_A_dim_b_1 - w_dim_b * Math.pow(x - a_dim_b_1, 2) / 2
           }
       }
   
   
       function M_r_dr_st_b_2(x) {
           if (x < L_w_dr_st_b_2) {
               return R_A_dr_st_b_2 * x + M_A_dr_st_b_2 - w_dr_st_b * Math.pow(x - a_dr_st_b_2, 2) / 2
           } else if (x >= L_w_dr_st_b_2) {
               return 0
           }
       }
   
       function M_r_dr_lt_b_2(x) {
           if (x < L_w_dr_lt_b_2) {
               return R_A_dr_lt_b_2 * x + M_A_dr_lt_b_2 - w_dr_lt_b * Math.pow(x - a_dr_lt_b_2, 2) / 2
           } else if (x >= L_w_dr_lt_b_2) {
               return 0
           }
       }
   
       function M_r_ud_st_b_2(x) {
           if (x < L_w_ud_st_b_2) {
               return R_A_ud_st_b_2 * x + M_A_ud_st_b_2 - w_ud_st_b * Math.pow(x - a_ud_st_b_2, 2) / 2
           } else if (x >= L_w_ud_st_b_2) {
               return 0
           }
       }
   
       function M_r_ud_lt_b_2(x) {
           if (x < L_w_ud_lt_b_2) {
               return R_A_ud_lt_b_2 * x + M_A_ud_lt_b_2 - w_ud_lt_b * Math.pow(x - a_ud_lt_b_2, 2) / 2
           } else if (x >= L_w_ud_lt_b_2) {
               return 0
           }
       }
   
       function M_r_dim_b_2(x) {
           if (x < L_w_dim_b_2) {
               return R_A_dim_b_2 * x + M_A_dim_b_2 - w_dim_b * Math.pow(x - a_dim_b_2, 2) / 2
           } else if (x >= L_w_dim_b_2) {
               return 0
           }
       }
   
   
       function M_g_dr_st_b_1(x) {
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
   
       function M_g_dr_lt_b_1(x) {
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
   
       function M_g_ud_st_b_1(x) {
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
   
       function M_g_ud_lt_b_1(x) {
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
   
       function M_g_dim_b_1(x) {
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
   
   
       function M_g_dr_st_b_2(x) {
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
   
       function M_g_dr_lt_b_2(x) {
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
   
       function M_g_ud_st_b_2(x) {
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
   
       function M_g_ud_lt_b_2(x) {
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
   
       function M_g_dim_b_2(x) {
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
   
   
       function M_c_dr_st_b_1(x) {
           return M_r_dr_st_b_1(x) + M_g_dr_st_b_1(x)
       }
   
       function M_c_dr_lt_b_1(x) {
           return M_r_dr_lt_b_1(x) + M_g_dr_lt_b_1(x)
       }
   
       function M_c_ud_st_b_1(x) {
           return M_r_ud_st_b_1(x) + M_g_ud_st_b_1(x)
       }
   
       function M_c_ud_lt_b_1(x) {
           return M_r_ud_lt_b_1(x) + M_g_ud_lt_b_1(x)
       }
   
       function M_c_dim_b_1(x) {
           return M_r_dim_b_1(x) + M_g_dim_b_1(x)
       }
   
   
       function M_c_dr_st_b_2(x) {
           return M_r_dr_st_b_2(x) + M_g_dr_st_b_2(x)
       }
   
       function M_c_dr_lt_b_2(x) {
           return M_r_dr_lt_b_2(x) + M_g_dr_lt_b_2(x)
       }
   
       function M_c_ud_st_b_2(x) {
           return M_r_ud_st_b_2(x) + M_g_ud_st_b_2(x)
       }
   
       function M_c_ud_lt_b_2(x) {
           return M_r_ud_lt_b_2(x) + M_g_ud_lt_b_2(x)
       }
   
       function M_c_dim_b_2(x) {
           return M_r_dim_b_2(x) + M_g_dim_b_2(x)
       }
   
   
       function fn_M_dr_st_b(x) {
           if (m_total_dr_st_b > 0) {
               if (x >= 0) {
                   return M_c_dr_st_b_1(x)
               } else {
                   return M_c_dr_st_b_2(-x)
               }
           } else {
               if (x < 0) {
                   return M_c_dr_st_b_1(-x)
               } else {
                   return M_c_dr_st_b_2(x)
               }
           }
       }
   
       function fn_M_dr_lt_b(x) {
           if (m_total_dr_lt_b > 0) {
               if (x >= 0) {
                   return M_c_dr_lt_b_1(x)
               } else {
                   return M_c_dr_lt_b_2(-x)
               }
           } else {
               if (x < 0) {
                   return M_c_dr_lt_b_1(-x)
               } else {
                   return M_c_dr_lt_b_2(x)
               }
           }
       }
   
       function fn_M_ud_st_b(x) {
           if (m_total_ud_st_b > 0) {
               if (x >= 0) {
                   return M_c_ud_st_b_1(x)
               } else {
                   return M_c_ud_st_b_2(-x)
               }
           } else {
               if (x < 0) {
                   return M_c_ud_st_b_1(-x)
               } else {
                   return M_c_ud_st_b_2(x)
               }
           }
       }
   
       function fn_M_ud_lt_b(x) {
           if (m_total_ud_lt_b > 0) {
               if (x >= 0) {
                   return M_c_ud_lt_b_1(x)
               } else {
                   return M_c_ud_lt_b_2(-x)
               }
           } else {
               if (x < 0) {
                   return M_c_ud_lt_b_1(-x)
               } else {
                   return M_c_ud_lt_b_2(x)
               }
           }
       }
   
       function fn_M_dim_b(x) {
           if (m_dim_width > 0) {
               if (x >= 0) {
                   return M_c_dim_b_1(x)
               } else {
                   return M_c_dim_b_2(-x)
               }
           } else {
               if (x < 0) {
                   return M_c_dim_b_1(-x)
               } else {
                   return M_c_dim_b_2(x)
               }
           }
       }
   
   
       // Bezier correction
   
       function fn_t_bez_b(x) {
           if (column_shape == "rectangular") {
               return Math.abs(-column_width / 2 / 1000 - x) / (column_width / 1000)
           } else {
               return Math.abs(-column_radius / 1000 - x) / (2 * column_radius / 1000)
           }
       }
   
   
       if (column_shape == "rectangular") {
           var P_bez_0_dr_st_b = fn_M_dr_st_b(-column_width / 2 / 1000)
           var P_bez_3_dr_st_b = fn_M_dr_st_b(column_width / 2 / 1000)
       } else {
           var P_bez_0_dr_st_b = fn_M_dr_st_b(-column_radius / 1000)
           var P_bez_3_dr_st_b = fn_M_dr_st_b(column_radius / 1000)
       }
   
       var P_bez_1_dr_st_b = fn_M_dr_st_b(-0.001)
       var P_bez_2_dr_st_b = fn_M_dr_st_b(0.001)
   
   
       if (column_shape == "rectangular") {
           var P_bez_0_dr_lt_b = fn_M_dr_lt_b(-column_width / 2 / 1000)
           var P_bez_3_dr_lt_b = fn_M_dr_lt_b(column_width / 2 / 1000)
       } else {
           var P_bez_0_dr_lt_b = fn_M_dr_lt_b(-column_radius / 1000)
           var P_bez_3_dr_lt_b = fn_M_dr_lt_b(column_radius / 1000)
       }
   
       var P_bez_1_dr_lt_b = fn_M_dr_lt_b(-0.001)
       var P_bez_2_dr_lt_b = fn_M_dr_lt_b(0.001)
   
   
       if (column_shape == "rectangular") {
           var P_bez_0_ud_st_b = fn_M_ud_st_b(-column_width / 2 / 1000)
           var P_bez_3_ud_st_b = fn_M_ud_st_b(column_width / 2 / 1000)
       } else {
           var P_bez_0_ud_st_b = fn_M_ud_st_b(-column_radius / 1000)
           var P_bez_3_ud_st_b = fn_M_ud_st_b(column_radius / 1000)
       }
   
       var P_bez_1_ud_st_b = fn_M_ud_st_b(-0.001)
       var P_bez_2_ud_st_b = fn_M_ud_st_b(0.001)
   
   
       if (column_shape == "rectangular") {
           var P_bez_0_ud_lt_b = fn_M_ud_lt_b(-column_width / 2 / 1000)
           var P_bez_3_ud_lt_b = fn_M_ud_lt_b(column_width / 2 / 1000)
       } else {
           var P_bez_0_ud_lt_b = fn_M_ud_lt_b(-column_radius / 1000)
           var P_bez_3_ud_lt_b = fn_M_ud_lt_b(column_radius / 1000)
       }
   
       var P_bez_1_ud_lt_b = fn_M_ud_lt_b(-0.001)
       var P_bez_2_ud_lt_b = fn_M_ud_lt_b(0.001)
   
   
       if (column_shape == "rectangular") {
           var P_bez_0_dim_b = fn_M_dim_b(-column_width / 2 / 1000)
           var P_bez_3_dim_b = fn_M_dim_b(column_width / 2 / 1000)
       } else {
           var P_bez_0_dim_b = fn_M_dim_b(-column_radius / 1000)
           var P_bez_3_dim_b = fn_M_dim_b(column_radius / 1000)
       }
   
       var P_bez_1_dim_b = fn_M_dim_b(-0.001)
       var P_bez_2_dim_b = fn_M_dim_b(0.001)
   
   
   
   
       function fn_B_dr_st_b(x) {
           if (Math.abs(P_bez_1_dr_st_b - P_bez_2_dr_st_b) < 0.1) {
               //Quadratic Bezier
               return Math.pow(1 - fn_t_bez_b(x), 2) * P_bez_0_dr_st_b + 2 * (1 - fn_t_bez_b(x)) * fn_t_bez_b(x) * P_bez_2_dr_st_b + Math.pow(fn_t_bez_b(x), 2) * P_bez_3_dr_st_b
           } else {
               //Cubic Bezier
               return Math.pow(1 - fn_t_bez_b(x), 3) * P_bez_0_dr_st_b + 3 * Math.pow(1 - fn_t_bez_b(x), 2) * fn_t_bez_b(x) * P_bez_1_dr_st_b + 3 * (1 - fn_t_bez_b(x)) * Math.pow(fn_t_bez_b(x), 2) * P_bez_2_dr_st_b + Math.pow(fn_t_bez_b(x), 3) * P_bez_3_dr_st_b
           }
       }
   
       function fn_B_dr_lt_b(x) {
           if (Math.abs(P_bez_1_dr_lt_b - P_bez_2_dr_lt_b) < 0.1) {
               //Quadratic Bezier
               return Math.pow(1 - fn_t_bez_b(x), 2) * P_bez_0_dr_lt_b + 2 * (1 - fn_t_bez_b(x)) * fn_t_bez_b(x) * P_bez_2_dr_lt_b + Math.pow(fn_t_bez_b(x), 2) * P_bez_3_dr_lt_b
           } else {
               //Cubic Bezier
               return Math.pow(1 - fn_t_bez_b(x), 3) * P_bez_0_dr_lt_b + 3 * Math.pow(1 - fn_t_bez_b(x), 2) * fn_t_bez_b(x) * P_bez_1_dr_lt_b + 3 * (1 - fn_t_bez_b(x)) * Math.pow(fn_t_bez_b(x), 2) * P_bez_2_dr_lt_b + Math.pow(fn_t_bez_b(x), 3) * P_bez_3_dr_lt_b
           }
       }
   
       function fn_B_ud_st_b(x) {
           if (Math.abs(P_bez_1_ud_st_b - P_bez_2_ud_st_b) < 0.1) {
               //Quaudatic Bezier
               return Math.pow(1 - fn_t_bez_b(x), 2) * P_bez_0_ud_st_b + 2 * (1 - fn_t_bez_b(x)) * fn_t_bez_b(x) * P_bez_2_ud_st_b + Math.pow(fn_t_bez_b(x), 2) * P_bez_3_ud_st_b
           } else {
               //Cubic Bezier
               return Math.pow(1 - fn_t_bez_b(x), 3) * P_bez_0_ud_st_b + 3 * Math.pow(1 - fn_t_bez_b(x), 2) * fn_t_bez_b(x) * P_bez_1_ud_st_b + 3 * (1 - fn_t_bez_b(x)) * Math.pow(fn_t_bez_b(x), 2) * P_bez_2_ud_st_b + Math.pow(fn_t_bez_b(x), 3) * P_bez_3_ud_st_b
           }
       }
   
       function fn_B_ud_lt_b(x) {
           if (Math.abs(P_bez_1_ud_lt_b - P_bez_2_ud_lt_b) < 0.1) {
               //Quaudatic Bezier
               return Math.pow(1 - fn_t_bez_b(x), 2) * P_bez_0_ud_lt_b + 2 * (1 - fn_t_bez_b(x)) * fn_t_bez_b(x) * P_bez_2_ud_lt_b + Math.pow(fn_t_bez_b(x), 2) * P_bez_3_ud_lt_b
           } else {
               //Cubic Bezier
               return Math.pow(1 - fn_t_bez_b(x), 3) * P_bez_0_ud_lt_b + 3 * Math.pow(1 - fn_t_bez_b(x), 2) * fn_t_bez_b(x) * P_bez_1_ud_lt_b + 3 * (1 - fn_t_bez_b(x)) * Math.pow(fn_t_bez_b(x), 2) * P_bez_2_ud_lt_b + Math.pow(fn_t_bez_b(x), 3) * P_bez_3_ud_lt_b
           }
       }
   
       function fn_B_dim_b(x) {
           if (Math.abs(P_bez_1_dim_b - P_bez_2_dim_b) < 0.1) {
               //Quaudatic Bezier
               return Math.pow(1 - fn_t_bez_b(x), 2) * P_bez_0_dim_b + 2 * (1 - fn_t_bez_b(x)) * fn_t_bez_b(x) * P_bez_2_dim_b + Math.pow(fn_t_bez_b(x), 2) * P_bez_3_dim_b
           } else {
               //Cubic Bezier
               return Math.pow(1 - fn_t_bez_b(x), 3) * P_bez_0_dim_b + 3 * Math.pow(1 - fn_t_bez_b(x), 2) * fn_t_bez_b(x) * P_bez_1_dim_b + 3 * (1 - fn_t_bez_b(x)) * Math.pow(fn_t_bez_b(x), 2) * P_bez_2_dim_b + Math.pow(fn_t_bez_b(x), 3) * P_bez_3_dim_b
           }
       }
   
   
       function fn_M_dr_st_b_corr(x) {
           if (m_total_dr_st_b > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_width / 2 / 1000) {
                       return M_c_dr_st_b_1(x)
                   } else if (x < -column_width / 2 / 1000) {
                       return M_c_dr_st_b_2(-x)
                   } else {
                       return fn_B_dr_st_b(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return M_c_dr_st_b_1(x)
                   } else if (x < -column_radius / 1000) {
                       return M_c_dr_st_b_2(-x)
                   } else {
                       return fn_B_dr_st_b(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x < -column_width / 2 / 1000) {
                       return M_c_dr_st_b_1(-x)
                   } else if (x >= column_width / 2 / 1000) {
                       return M_c_dr_st_b_2(x)
                   } else {
                       return fn_B_dr_st_b(x)
                   }
               } else {
                   if (x < -column_radius / 1000) {
                       return M_c_dr_st_b_1(-x)
                   } else if (x >= column_radius / 1000) {
                       return M_c_dr_st_b_2(x)
                   } else {
                       return fn_B_dr_st_b(x)
                   }
               }
           }
       }
   
       function fn_M_dr_lt_b_corr(x) {
           if (m_total_dr_st_b > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_width / 2 / 1000) {
                       return M_c_dr_lt_b_1(x)
                   } else if (x < -column_width / 2 / 1000) {
                       return M_c_dr_lt_b_2(-x)
                   } else {
                       return fn_B_dr_lt_b(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return M_c_dr_lt_b_1(x)
                   } else if (x < -column_radius / 1000) {
                       return M_c_dr_lt_b_2(-x)
                   } else {
                       return fn_B_dr_lt_b(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x < -column_width / 2 / 1000) {
                       return M_c_dr_lt_b_1(-x)
                   } else if (x >= column_width / 2 / 1000) {
                       return M_c_dr_lt_b_2(x)
                   } else {
                       return fn_B_dr_lt_b(x)
                   }
               } else {
                   if (x < -column_radius / 1000) {
                       return M_c_dr_lt_b_1(-x)
                   } else if (x >= column_radius / 1000) {
                       return M_c_dr_lt_b_2(x)
                   } else {
                       return fn_B_dr_lt_b(x)
                   }
               }
           }
       }
   
       function fn_M_ud_st_b_corr(x) {
           if (m_total_ud_st_b > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_width / 2 / 1000) {
                       return M_c_ud_st_b_1(x)
                   } else if (x < -column_width / 2 / 1000) {
                       return M_c_ud_st_b_2(-x)
                   } else {
                       return fn_B_ud_st_b(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return M_c_ud_st_b_1(x)
                   } else if (x < -column_radius / 1000) {
                       return M_c_ud_st_b_2(-x)
                   } else {
                       return fn_B_ud_st_b(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x < -column_width / 2 / 1000) {
                       return M_c_ud_st_b_1(-x)
                   } else if (x >= column_width / 2 / 1000) {
                       return M_c_ud_st_b_2(x)
                   } else {
                       return fn_B_ud_st_b(x)
                   }
               } else {
                   if (x < -column_radius / 1000) {
                       return M_c_ud_st_b_1(-x)
                   } else if (x >= column_radius / 1000) {
                       return M_c_ud_st_b_2(x)
                   } else {
                       return fn_B_ud_st_b(x)
                   }
               }
           }
       }
   
       function fn_M_ud_lt_b_corr(x) {
           if (m_total_ud_lt_b > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_width / 2 / 1000) {
                       return M_c_ud_lt_b_1(x)
                   } else if (x < -column_width / 2 / 1000) {
                       return M_c_ud_lt_b_2(-x)
                   } else {
                       return fn_B_ud_lt_b(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return M_c_ud_lt_b_1(x)
                   } else if (x < -column_radius / 1000) {
                       return M_c_ud_lt_b_2(-x)
                   } else {
                       return fn_B_ud_lt_b(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x < -column_width / 2 / 1000) {
                       return M_c_ud_lt_b_1(-x)
                   } else if (x >= column_width / 2 / 1000) {
                       return M_c_ud_lt_b_2(x)
                   } else {
                       return fn_B_ud_lt_b(x)
                   }
               } else {
                   if (x < -column_radius / 1000) {
                       return M_c_ud_lt_b_1(-x)
                   } else if (x >= column_radius / 1000) {
                       return M_c_ud_lt_b_2(x)
                   } else {
                       return fn_B_ud_lt_b(x)
                   }
               }
           }
       }
   
       function fn_M_dim_b_corr(x) {
           if (m_dim_width > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_width / 2 / 1000) {
                       return M_c_dim_b_1(x)
                   } else if (x < -column_width / 2 / 1000) {
                       return M_c_dim_b_2(-x)
                   } else {
                       return fn_B_dim_b(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return M_c_dim_b_1(x)
                   } else if (x < -column_radius / 1000) {
                       return M_c_dim_b_2(-x)
                   } else {
                       return fn_B_dim_b(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x < -column_width / 2 / 1000) {
                       return M_c_dim_b_1(-x)
                   } else if (x >= column_width / 2 / 1000) {
                       return M_c_dim_b_2(x)
                   } else {
                       return fn_B_dim_b(x)
                   }
               } else {
                   if (x < -column_radius / 1000) {
                       return M_c_dim_b_1(-x)
                   } else if (x >= column_radius / 1000) {
                       return M_c_dim_b_2(x)
                   } else {
                       return fn_B_dim_b(x)
                   }
               }
           }
       }
   
   
   
       function V_r_dr_st_b_1(x) {
           if (x < a_dr_st_b_1) {
               return R_A_dr_st_b_1
           } else {
               return R_A_dr_st_b_1 - w_dr_st_b * (x - a_dr_st_b_1)
           }
       }
   
       function V_r_dr_lt_b_1(x) {
           if (x < a_dr_lt_b_1) {
               return R_A_dr_lt_b_1
           } else {
               return R_A_dr_lt_b_1 - w_dr_lt_b * (x - a_dr_lt_b_1)
           }
       }
   
       function V_r_ud_st_b_1(x) {
           if (x < a_ud_st_b_1) {
               return R_A_ud_st_b_1
           } else {
               return R_A_ud_st_b_1 - w_ud_st_b * (x - a_ud_st_b_1)
           }
       }
   
       function V_r_ud_lt_b_1(x) {
           if (x < a_ud_lt_b_1) {
               return R_A_ud_lt_b_1
           } else {
               return R_A_ud_lt_b_1 - w_ud_lt_b * (x - a_ud_lt_b_1)
           }
       }
   
       function V_r_dim_b_1(x) {
           if (x < a_dim_b_1) {
               return R_A_dim_b_1
           } else {
               return R_A_dim_b_1 - w_dim_b * (x - a_dim_b_1)
           }
       }
   
   
       function V_r_dr_st_b_2(x) {
           if (x < L_w_dr_st_b_2) {
               return -(R_A_dr_st_b_2 - w_dr_st_b * (x - a_dr_st_b_2))
           } else {
               return 0
           }
       }
   
       function V_r_dr_lt_b_2(x) {
           if (x < L_w_dr_lt_b_2) {
               return -(R_A_dr_lt_b_2 - w_dr_lt_b * (x - a_dr_lt_b_2))
           } else {
               return 0
           }
       }
   
       function V_r_ud_st_b_2(x) {
           if (x < L_w_ud_st_b_2) {
               return -(R_A_ud_st_b_2 - w_ud_st_b * (x - a_ud_st_b_2))
           } else {
               return 0
           }
       }
   
       function V_r_ud_lt_b_2(x) {
           if (x < L_w_ud_lt_b_2) {
               return -(R_A_ud_lt_b_2 - w_ud_lt_b * (x - a_ud_lt_b_2))
           } else {
               return 0
           }
       }
   
       function V_r_dim_b_2(x) {
           if (x < L_w_dim_b_2) {
               return -(R_A_dim_b_2 - w_dim_b * (x - a_dim_b_2))
           } else {
               return 0
           }
       }
   
   
       function V_g_dr_st_b_1(x) {
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
   
       function V_g_dr_lt_b_1(x) {
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
   
       function V_g_ud_st_b_1(x) {
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
   
       function V_g_ud_lt_b_1(x) {
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
   
       function V_g_dim_b_1(x) {
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
   
   
       function V_g_dr_st_b_2(x) {
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
   
       function V_g_dr_lt_b_2(x) {
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
   
       function V_g_ud_st_b_2(x) {
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
   
       function V_g_ud_lt_b_2(x) {
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
   
       function V_g_dim_b_2(x) {
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
   
       function V_c_dr_st_b_1(x) {
           return V_r_dr_st_b_1(x) + V_g_dr_st_b_1(x)
       }
   
       function V_c_dr_lt_b_1(x) {
           return V_r_dr_lt_b_1(x) + V_g_dr_lt_b_1(x)
       }
   
       function V_c_ud_st_b_1(x) {
           return V_r_ud_st_b_1(x) + V_g_ud_st_b_1(x)
       }
   
       function V_c_ud_lt_b_1(x) {
           return V_r_ud_lt_b_1(x) + V_g_ud_lt_b_1(x)
       }
   
       function V_c_dim_b_1(x) {
           return V_r_dim_b_1(x) + V_g_dim_b_1(x)
       }
   
   
       function V_c_dr_st_b_2(x) {
           return V_r_dr_st_b_2(x) + V_g_dr_st_b_2(x)
       }
   
       function V_c_dr_lt_b_2(x) {
           return V_r_dr_lt_b_2(x) + V_g_dr_lt_b_2(x)
       }
   
       function V_c_ud_st_b_2(x) {
           return V_r_ud_st_b_2(x) + V_g_ud_st_b_2(x)
       }
   
       function V_c_ud_lt_b_2(x) {
           return V_r_ud_lt_b_2(x) + V_g_ud_lt_b_2(x)
       }
   
       function V_c_dim_b_2(x) {
           return V_r_dim_b_2(x) + V_g_dim_b_2(x)
       }
   
   
       function fn_V_dr_st_b(x) {
           if (m_total_dr_st_b > 0) {
               if (x >= 0) {
                   return V_c_dr_st_b_1(x)
               } else {
                   return V_c_dr_st_b_2(-x)
               }
           } else {
               if (x < 0) {
                   return V_c_dr_st_b_1(-x)
               } else {
                   return V_c_dr_st_b_2(x)
               }
           }
       }
   
       function fn_V_dr_lt_b(x) {
           if (m_total_dr_lt_b > 0) {
               if (x >= 0) {
                   return V_c_dr_lt_b_1(x)
               } else {
                   return V_c_dr_lt_b_2(-x)
               }
           } else {
               if (x < 0) {
                   return V_c_dr_lt_b_1(-x)
               } else {
                   return V_c_dr_lt_b_2(x)
               }
           }
       }
   
       function fn_V_ud_st_b(x) {
           if (m_total_ud_st_b > 0) {
               if (x >= 0) {
                   return V_c_ud_st_b_1(x)
               } else {
                   return V_c_ud_st_b_2(-x)
               }
           } else {
               if (x < 0) {
                   return V_c_ud_st_b_1(-x)
               } else {
                   return V_c_ud_st_b_2(x)
               }
           }
       }
   
       function fn_V_ud_lt_b(x) {
           if (m_total_ud_lt_b > 0) {
               if (x >= 0) {
                   return V_c_ud_lt_b_1(x)
               } else {
                   return V_c_ud_lt_b_2(-x)
               }
           } else {
               if (x < 0) {
                   return V_c_ud_lt_b_1(-x)
               } else {
                   return V_c_ud_lt_b_2(x)
               }
           }
       }
   
       function fn_V_dim_b(x) {
           if (m_dim_width > 0) {
               if (x >= 0) {
                   return V_c_dim_b_1(x)
               } else {
                   return V_c_dim_b_2(-x)
               }
           } else {
               if (x < 0) {
                   return V_c_dim_b_1(-x)
               } else {
                   return V_c_dim_b_2(x)
               }
           }
       }
   
   
       // Corrected shear functions
   
       if (column_shape == "rectangular") {
           var a_V_dr_st_b = (fn_V_dr_st_b(column_width / 2 / 1000) - fn_V_dr_st_b(-column_width / 2 / 1000)) / (column_width / 1000)
           var b_V_dr_st_b = fn_V_dr_st_b(column_width / 2 / 1000) - a_V_dr_st_b * (column_width / 2 / 1000)
       } else {
           var a_V_dr_st_b = (fn_V_dr_st_b(column_radius / 1000) - fn_V_dr_st_b(-column_radius / 1000)) / (2 * column_radius / 1000)
           var b_V_dr_st_b = fn_V_dr_st_b(column_radius / 1000) - a_V_dr_st_b * (column_radius / 1000)
       }
   
       if (column_shape == "rectangular") {
           var a_V_dr_lt_b = (fn_V_dr_lt_b(column_width / 2 / 1000) - fn_V_dr_lt_b(-column_width / 2 / 1000)) / (column_width / 1000)
           var b_V_dr_lt_b = fn_V_dr_lt_b(column_width / 2 / 1000) - a_V_dr_lt_b * (column_width / 2 / 1000)
       } else {
           var a_V_dr_lt_b = (fn_V_dr_lt_b(column_radius / 1000) - fn_V_dr_lt_b(-column_radius / 1000)) / (2 * column_radius / 1000)
           var b_V_dr_lt_b = fn_V_dr_lt_b(column_radius / 1000) - a_V_dr_lt_b * (column_radius / 1000)
       }
   
       if (column_shape == "rectangular") {
           var a_V_ud_st_b = (fn_V_ud_st_b(column_width / 2 / 1000) - fn_V_ud_st_b(-column_width / 2 / 1000)) / (column_width / 1000)
           var b_V_ud_st_b = fn_V_ud_st_b(column_width / 2 / 1000) - a_V_ud_st_b * (column_width / 2 / 1000)
       } else {
           var a_V_ud_st_b = (fn_V_ud_st_b(column_radius / 1000) - fn_V_ud_st_b(-column_radius / 1000)) / (2 * column_radius / 1000)
           var b_V_ud_st_b = fn_V_ud_st_b(column_radius / 1000) - a_V_ud_st_b * (column_radius / 1000)
       }
   
       if (column_shape == "rectangular") {
           var a_V_ud_lt_b = (fn_V_ud_lt_b(column_width / 2 / 1000) - fn_V_ud_lt_b(-column_width / 2 / 1000)) / (column_width / 1000)
           var b_V_ud_lt_b = fn_V_ud_lt_b(column_width / 2 / 1000) - a_V_ud_lt_b * (column_width / 2 / 1000)
       } else {
           var a_V_ud_lt_b = (fn_V_ud_lt_b(column_radius / 1000) - fn_V_ud_lt_b(-column_radius / 1000)) / (2 * column_radius / 1000)
           var b_V_ud_lt_b = fn_V_ud_lt_b(column_radius / 1000) - a_V_ud_lt_b * (column_radius / 1000)
       }
   
       if (column_shape == "rectangular") {
           var a_V_dim_b = (fn_V_dim_b(column_width / 2 / 1000) - fn_V_dim_b(-column_width / 2 / 1000)) / (column_width / 1000)
           var b_V_dim_b = fn_V_dim_b(column_width / 2 / 1000) - a_V_dim_b * (column_width / 2 / 1000)
       } else {
           var a_V_dim_b = (fn_V_dim_b(column_radius / 1000) - fn_V_dim_b(-column_radius / 1000)) / (2 * column_radius / 1000)
           var b_V_dim_b = fn_V_dim_b(column_radius / 1000) - a_V_dim_b * (column_radius / 1000)
       }
   
   
       function y_V_dr_st_b(x) {
           return a_V_dr_st_b * x + b_V_dr_st_b
       }
   
       function y_V_dr_lt_b(x) {
           return a_V_dr_lt_b * x + b_V_dr_lt_b
       }
   
       function y_V_ud_st_b(x) {
           return a_V_ud_st_b * x + b_V_ud_st_b
       }
   
       function y_V_ud_lt_b(x) {
           return a_V_ud_lt_b * x + b_V_ud_lt_b
       }
   
       function y_V_dim_b(x) {
           return a_V_dim_b * x + b_V_dim_b
       }
   
   
       function fn_V_dr_st_b_corr(x) {
           if (m_total_dr_st_b > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_width / 2 / 1000) {
                       return V_c_dr_st_b_1(x)
                   } else if (x < -column_width / 2 / 1000) {
                       return V_c_dr_st_b_2(-x)
                   } else {
                       return y_V_dr_st_b(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_dr_st_b_1(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_dr_st_b_2(-x)
                   } else {
                       return y_V_dr_st_b(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x >= column_width / 2 / 1000) {
                       return V_c_dr_st_b_2(x)
                   } else if (x < -column_width / 2 / 1000) {
                       return V_c_dr_st_b_1(-x)
                   } else {
                       return y_V_dr_st_b(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_dr_st_b_2(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_dr_st_b_1(-x)
                   } else {
                       return y_V_dr_st_b(x)
                   }
               }
           }
       }
   
       function fn_V_dr_lt_b_corr(x) {
           if (m_total_dr_lt_b > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_width / 2 / 1000) {
                       return V_c_dr_lt_b_1(x)
                   } else if (x < -column_width / 2 / 1000) {
                       return V_c_dr_lt_b_2(-x)
                   } else {
                       return y_V_dr_lt_b(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_dr_lt_b_1(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_dr_lt_b_2(-x)
                   } else {
                       return y_V_dr_lt_b(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x >= column_width / 2 / 1000) {
                       return V_c_dr_lt_b_2(x)
                   } else if (x < -column_width / 2 / 1000) {
                       return V_c_dr_lt_b_1(-x)
                   } else {
                       return y_V_dr_lt_b(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_dr_lt_b_2(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_dr_lt_b_1(-x)
                   } else {
                       return y_V_dr_lt_b(x)
                   }
               }
           }
       }
   
       function fn_V_ud_st_b_corr(x) {
           if (m_total_ud_st_b > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_width / 2 / 1000) {
                       return V_c_ud_st_b_1(x)
                   } else if (x < -column_width / 2 / 1000) {
                       return V_c_ud_st_b_2(-x)
                   } else {
                       return y_V_ud_st_b(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_ud_st_b_1(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_ud_st_b_2(-x)
                   } else {
                       return y_V_ud_st_b(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x >= column_width / 2 / 1000) {
                       return V_c_ud_st_b_2(x)
                   } else if (x < -column_width / 2 / 1000) {
                       return V_c_ud_st_b_1(-x)
                   } else {
                       return y_V_ud_st_b(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_ud_st_b_2(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_ud_st_b_1(-x)
                   } else {
                       return y_V_ud_st_b(x)
                   }
               }
           }
       }
   
       function fn_V_ud_lt_b_corr(x) {
           if (m_total_ud_lt_b > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_width / 2 / 1000) {
                       return V_c_ud_lt_b_1(x)
                   } else if (x < -column_width / 2 / 1000) {
                       return V_c_ud_lt_b_2(-x)
                   } else {
                       return y_V_ud_lt_b(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_ud_lt_b_1(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_ud_lt_b_2(-x)
                   } else {
                       return y_V_ud_lt_b(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x >= column_width / 2 / 1000) {
                       return V_c_ud_lt_b_2(x)
                   } else if (x < -column_width / 2 / 1000) {
                       return V_c_ud_lt_b_1(-x)
                   } else {
                       return y_V_ud_lt_b(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_ud_lt_b_2(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_ud_lt_b_1(-x)
                   } else {
                       return y_V_ud_lt_b(x)
                   }
               }
           }
       }
   
       function fn_V_dim_b_corr(x) {
           if (m_dim_width > 0) {
               if (column_shape == "rectangular") {
                   if (x >= column_width / 2 / 1000) {
                       return V_c_dim_b_1(x)
                   } else if (x < -column_width / 2 / 1000) {
                       return V_c_dim_b_2(-x)
                   } else {
                       return y_V_dim_b(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_dim_b_1(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_dim_b_2(-x)
                   } else {
                       return y_V_dim_b(x)
                   }
               }
           } else {
               if (column_shape == "rectangular") {
                   if (x >= column_width / 2 / 1000) {
                       return V_c_dim_b_2(x)
                   } else if (x < -column_width / 2 / 1000) {
                       return V_c_dim_b_1(-x)
                   } else {
                       return y_V_dim_b(x)
                   }
               } else {
                   if (x >= column_radius / 1000) {
                       return V_c_dim_b_2(x)
                   } else if (x < -column_radius / 1000) {
                       return V_c_dim_b_1(-x)
                   } else {
                       return y_V_dim_b(x)
                   }
               }
           }
       }
   
   
       // Chart Variables
   
       var delta = 500
   
   
       if (point_foundation_shape == 'rectangular') {
           // Shared X Values Length
           var x_length_value_start = -(length / 2 + ec_vl_length)
           var x_length_value_end = (length / 2 - ec_vl_length)
           var x_length_value_interval = length / delta
   
           // Shared X Values width
           var x_width_value_start = -(width / 2 + ec_vl_width)
           var x_width_value_end = (width / 2 - ec_vl_width)
           var x_width_value_interval = width / delta
   
       } else if (point_foundation_shape == 'circular') {
           // Shared X Values Length
           var x_length_value_start = -(radius + ec_vl_length)
           var x_length_value_end = (radius - ec_vl_length)
           var x_length_value_interval = 2 * radius / delta
   
           // Shared X Values width
           var x_width_value_start = -(radius + ec_vl_width)
           var x_width_value_end = (radius - ec_vl_width)
           var x_width_value_interval = 2 * radius / delta
       }
   
       x_length_arr = [];
       x_width_arr = [];
   
   
       // Dimensions Known = Yes
   
       // Y Values Chart 1
       fn_M_dim_l_arr = [];
   
       // Y Values Chart 2
       fn_M_dim_b_arr = [];
   
       // Y Values Chart 3
       fn_V_dim_l_arr = [];
   
       // Y Values Chart 4
       fn_V_dim_b_arr = [];
   
   
   
   
   
       // Dimensions Known = No
   
       // !! do not use var = so variables accessed globally
   
       // Y Values Chart 1
       fn_M_dr_st_l_arr = [];
       fn_M_dr_lt_l_arr = [];
       fn_M_ud_st_l_arr = [];
       fn_M_ud_lt_l_arr = [];
   
       // Y Values Chart 2
       fn_M_dr_st_b_arr = [];
       fn_M_dr_lt_b_arr = [];
       fn_M_ud_st_b_arr = [];
       fn_M_ud_lt_b_arr = [];
   
       // Y Values Chart 3
       fn_V_dr_st_l_arr = [];
       fn_V_dr_lt_l_arr = [];
       fn_V_ud_st_l_arr = [];
       fn_V_ud_lt_l_arr = [];
   
       // Y Values Chart 4
       fn_V_dr_st_b_arr = [];
       fn_V_dr_lt_b_arr = [];
       fn_V_ud_st_b_arr = [];
       fn_V_ud_lt_b_arr = [];
   
   
       // Length Data Points
   
       for (var x = x_length_value_start / 1000; x <= x_length_value_end / 1000; x = x + x_length_value_interval / 1000) {
           x_length_arr.push(x);
   
           // Dimensions Known = Yes
           fn_M_dim_l_arr.push(fn_M_dim_l_corr(x));
           fn_V_dim_l_arr.push(fn_V_dim_l_corr(x));
   
           // Dimensions Known = No
           // y value calculations chart 1
           fn_M_dr_st_l_arr.push(fn_M_dr_st_l_corr(x));
           fn_M_dr_lt_l_arr.push(fn_M_dr_lt_l_corr(x));
           fn_M_ud_st_l_arr.push(fn_M_ud_st_l_corr(x));
           fn_M_ud_lt_l_arr.push(fn_M_ud_lt_l_corr(x));
   
           // y value calculations chart 3
           fn_V_dr_st_l_arr.push(fn_V_dr_st_l_corr(x));
           fn_V_dr_lt_l_arr.push(fn_V_dr_lt_l_corr(x));
           fn_V_ud_st_l_arr.push(fn_V_ud_st_l_corr(x));
           fn_V_ud_lt_l_arr.push(fn_V_ud_lt_l_corr(x));
   
   
   
       }
   
   
     
   
       
   
   
       // width Data Points  
   
   
       for (var x = x_width_value_start / 1000; x <= x_width_value_end / 1000; x = x + x_width_value_interval / 1000) {
           x_width_arr.push(x);
   
   
           // Dimensions Known = Yes
           fn_M_dim_b_arr.push(fn_M_dim_b_corr(x));
           fn_V_dim_b_arr.push(fn_V_dim_b_corr(x));
   
   
           // Dimensions Known = No
           // y value calculations chart 1 & 2
           fn_M_dr_st_b_arr.push(fn_M_dr_st_b_corr(x));
           fn_M_dr_lt_b_arr.push(fn_M_dr_lt_b_corr(x));
           fn_M_ud_st_b_arr.push(fn_M_ud_st_b_corr(x));
           fn_M_ud_lt_b_arr.push(fn_M_ud_lt_b_corr(x));
   
           // y value calculations chart 3 & 4
           fn_V_dr_st_b_arr.push(fn_V_dr_st_b_corr(x));
           fn_V_dr_lt_b_arr.push(fn_V_dr_lt_b_corr(x));
           fn_V_ud_st_b_arr.push(fn_V_ud_st_b_corr(x));
           fn_V_ud_lt_b_arr.push(fn_V_ud_lt_b_corr(x));
   
       }
   
   
   
   
   
       // Making the arrays absolute
   
       var fn_M_dim_l_arr_pos = fn_M_dim_l_arr.map(Math.abs)
       var fn_V_dim_l_arr_pos = fn_V_dim_l_arr.map(Math.abs)
   
       var fn_M_dr_st_l_arr_pos = fn_M_dr_st_l_arr.map(Math.abs)
       var fn_M_dr_lt_l_arr_pos = fn_M_dr_lt_l_arr.map(Math.abs)
       var fn_M_ud_st_l_arr_pos = fn_M_ud_st_l_arr.map(Math.abs)
       var fn_M_ud_lt_l_arr_pos = fn_M_ud_lt_l_arr.map(Math.abs)
       
       var fn_V_dr_st_l_arr_pos = fn_V_dr_st_l_arr.map(Math.abs)
       var fn_V_dr_lt_l_arr_pos = fn_V_dr_lt_l_arr.map(Math.abs)
       var fn_V_ud_st_l_arr_pos = fn_V_ud_st_l_arr.map(Math.abs)
       var fn_V_ud_lt_l_arr_pos = fn_V_ud_lt_l_arr.map(Math.abs)
   
   
       var fn_M_dim_b_arr_pos = fn_M_dim_b_arr.map(Math.abs)
       var fn_V_dim_b_arr_pos = fn_V_dim_b_arr.map(Math.abs)
   
       var fn_M_dr_st_b_arr_pos = fn_M_dr_st_b_arr.map(Math.abs)
       var fn_M_dr_lt_b_arr_pos = fn_M_dr_lt_b_arr.map(Math.abs)
       var fn_M_ud_st_b_arr_pos = fn_M_ud_st_b_arr.map(Math.abs)
       var fn_M_ud_lt_b_arr_pos = fn_M_ud_lt_b_arr.map(Math.abs)
       
       var fn_V_dr_st_b_arr_pos = fn_V_dr_st_b_arr.map(Math.abs)
       var fn_V_dr_lt_b_arr_pos = fn_V_dr_lt_b_arr.map(Math.abs)
       var fn_V_ud_st_b_arr_pos = fn_V_ud_st_b_arr.map(Math.abs)
       var fn_V_ud_lt_b_arr_pos = fn_V_ud_lt_b_arr.map(Math.abs)
   
   
   
       // Finding the maximum absolute value for verification
       
       var M_dim_l = Math.max(...fn_M_dim_l_arr_pos)
       var V_dim_l = Math.max(...fn_V_dim_l_arr_pos)
   
       var M_dr_st_l = Math.max(...fn_M_dr_st_l_arr_pos)
       var M_dr_lt_l = Math.max(...fn_M_dr_lt_l_arr_pos)
       var M_ud_st_l = Math.max(...fn_M_ud_st_l_arr_pos)
       var M_ud_lt_l = Math.max(...fn_M_ud_lt_l_arr_pos)
   
       var V_dr_st_l = Math.max(...fn_V_dr_st_l_arr_pos)
       var V_dr_lt_l = Math.max(...fn_V_dr_lt_l_arr_pos)
       var V_ud_st_l = Math.max(...fn_V_ud_st_l_arr_pos)
       var V_ud_lt_l = Math.max(...fn_V_ud_lt_l_arr_pos)
       
   
       
       var M_dim_b = Math.max(...fn_M_dim_b_arr_pos)
       var V_dim_b = Math.max(...fn_V_dim_b_arr_pos)
   
       var M_dr_st_b = Math.max(...fn_M_dr_st_b_arr_pos)
       var M_dr_lt_b = Math.max(...fn_M_dr_lt_b_arr_pos)
       var M_ud_st_b = Math.max(...fn_M_ud_st_b_arr_pos)
       var M_ud_lt_b = Math.max(...fn_M_ud_lt_b_arr_pos)
   
       var V_dr_st_b = Math.max(...fn_V_dr_st_b_arr_pos)
       var V_dr_lt_b = Math.max(...fn_V_dr_lt_b_arr_pos)
       var V_ud_st_b = Math.max(...fn_V_ud_st_b_arr_pos)
       var V_ud_lt_b = Math.max(...fn_V_ud_lt_b_arr_pos)
   
   
   
   
   
   
   
       var y_length_value = fn_M_dim_l_arr // chart1
       var y_width_value = fn_M_dim_b_arr //chart2
       var y_shear_length_value = fn_V_dim_l_arr //chart3
       var y_shear_width_value = fn_V_dim_b_arr //chart4
   
   
   
       // positive moment calculations
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_total_dr_st_l >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_l = length / 2 - ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_l = length / 2 - ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_l = length / 2 + Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_l = length / 2 + Math.abs(ec_vl_length)
       //             }
       //         }
       //     } else if (m_total_dr_st_l < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_l = length / 2 + ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_l = length / 2 + ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_l = length / 2 - Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_l = length / 2 - Math.abs(ec_vl_length)
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_total_dr_st_l >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_l = radius - ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_l = radius - ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_l = radius + Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_l = radius + Math.abs(ec_vl_length)
       //             }
       //         }
   
       //     } else if (m_total_dr_st_l < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_l = radius + ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_l = radius + ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_l = radius - Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_l = radius - Math.abs(ec_vl_length)
       //             }
       //         }
       //     }
       // }
   
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_total_dr_lt_l >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_l = length / 2 - ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_l = length / 2 - ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_l = length / 2 + Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_l = length / 2 + Math.abs(ec_vl_length)
       //             }
       //         }
       //     } else if (m_total_dr_lt_l < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_l = length / 2 + ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_l = length / 2 + ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_l = length / 2 - Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_l = length / 2 - Math.abs(ec_vl_length)
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_total_dr_lt_l >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_l = radius - ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_l = radius - ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_l = radius + Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_l = radius + Math.abs(ec_vl_length)
       //             }
       //         }
       //     } else if (m_total_dr_lt_l < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_l = radius + ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_l = radius + ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_l = radius - Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_l = radius - Math.abs(ec_vl_length)
       //             }
       //         }
       //     }
       // }
   
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_total_ud_st_l >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_l = length / 2 - ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_l = length / 2 - ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_l = length / 2 + Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_l = length / 2 + Math.abs(ec_vl_length)
       //             }
       //         }
       //     } else if (m_total_ud_st_l < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_l = length / 2 + ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_l = length / 2 + ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_l = length / 2 - Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_l = length / 2 - Math.abs(ec_vl_length)
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_total_ud_st_l >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_l = radius - ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_l = radius - ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_l = radius + Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_l = radius + Math.abs(ec_vl_length)
       //             }
       //         }
       //     } else if (m_total_ud_st_l < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_l = radius + ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_l = radius + ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_l = radius - Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_l = radius - Math.abs(ec_vl_length)
       //             }
       //         }
       //     }
       // }
   
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_total_ud_lt_l >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_l = length / 2 - ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_l = length / 2 - ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_l = length / 2 + Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_l = length / 2 + Math.abs(ec_vl_length)
       //             }
       //         }
       //     } else if (m_total_ud_lt_l < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_l = length / 2 + ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_l = length / 2 + ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_l = length / 2 - Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_l = length / 2 - Math.abs(ec_vl_length)
       //             }
       //         }
       //     }
   
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_total_ud_lt_l >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_l = radius - ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_l = radius - ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_l = radius + Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_l = radius + Math.abs(ec_vl_length)
       //             }
       //         }
       //     } else if (m_total_ud_lt_l < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_l = radius + ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_l = radius + ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_l = radius - Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_l = radius - Math.abs(ec_vl_length)
       //             }
       //         }
       //     }
       // }
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_total_dr_st_b >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_b = width / 2 - ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_b = width / 2 - ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_b = width / 2 + Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_b = width / 2 + Math.abs(ec_vl_width)
       //             }
       //         }
       //     } else if (m_total_dr_st_b < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_b = width / 2 + ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_b = width / 2 + ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_b = width / 2 - Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_b = width / 2 - Math.abs(ec_vl_width)
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_total_dr_st_b >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_b = radius - ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_b = radius - ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_b = radius + Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_b = radius + Math.abs(ec_vl_width)
       //             }
       //         }
       //     } else if (m_total_dr_st_b < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_b = radius + ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_b = radius + ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_b = radius - Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_b = radius - Math.abs(ec_vl_width)
       //             }
       //         }
       //     }
       // }
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_total_dr_lt_b >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_b = width / 2 - ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_b = width / 2 - ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_b = width / 2 + Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_b = width / 2 + Math.abs(ec_vl_width)
       //             }
       //         }
       //     } else if (m_total_dr_lt_b < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_b = width / 2 + ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_b = width / 2 + ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_b = width / 2 - Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_b = width / 2 - Math.abs(ec_vl_width)
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_total_dr_lt_b >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_b = radius - ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_b = radius - ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_b = radius + Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_b = radius + Math.abs(ec_vl_width)
       //             }
       //         }
       //     } else if (m_total_dr_lt_b < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_b = radius + ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_b = radius + ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_b = radius - Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_b = radius - Math.abs(ec_vl_width)
       //             }
       //         }
       //     }
       // }
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_total_ud_st_b >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_b = width / 2 - ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_b = width / 2 - ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_b = width / 2 + Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_b = width / 2 + Math.abs(ec_vl_width)
       //             }
       //         }
       //     } else if (m_total_ud_st_b < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_b = width / 2 + ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_b = width / 2 + ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_b = width / 2 - Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_b = width / 2 - Math.abs(ec_vl_width)
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_total_ud_st_b >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_b = radius - ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_b = radius - ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_b = radius + Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_b = radius + Math.abs(ec_vl_width)
       //             }
       //         }
       //     } else if (m_total_ud_st_b < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_b = radius + ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_b = radius + ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_b = radius - Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_b = radius - Math.abs(ec_vl_width)
       //             }
       //         }
       //     }
       // }
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_total_ud_lt_b >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_b = width / 2 - ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_b = width / 2 - ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_b = width / 2 + Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_b = width / 2 + Math.abs(ec_vl_width)
       //             }
       //         }
       //     } else if (m_total_ud_lt_b < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_b = width / 2 + ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_b = width / 2 + ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_b = width / 2 - Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_b = width / 2 - Math.abs(ec_vl_width)
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_total_ud_lt_b >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_b = radius - ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_b = radius - ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_b = radius + Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_b = radius + Math.abs(ec_vl_width)
       //             }
       //         }
       //     } else if (m_total_ud_lt_b < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_b = radius + ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_b = radius + ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_b = radius - Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_b = radius - Math.abs(ec_vl_width)
       //             }
       //         }
       //     }
       // }
   
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_dim_length >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_l = length / 2 - ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_l = length / 2 - ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_l = length / 2 + Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_l = length / 2 + Math.abs(ec_vl_length)
       //             }
       //         }
       //     } else if (m_dim_length < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_l = length / 2 + ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_l = length / 2 + ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_l = length / 2 - Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_l = length / 2 - Math.abs(ec_vl_length)
   
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_dim_length >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_l = radius - ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_l = radius - ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_l = radius + Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_l = radius + Math.abs(ec_vl_length)
       //             }
       //         }
   
       //     } else if (m_dim_length < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_l = radius + ec_vl_length
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_l = radius + ec_vl_length
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_l = radius - Math.abs(ec_vl_length)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_l = radius - Math.abs(ec_vl_length)
       //             }
       //         }
       //     }
       // }
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_dim_width >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_b = width / 2 - ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_b = width / 2 - ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_b = width / 2 + Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_b = width / 2 + Math.abs(ec_vl_width)
       //             }
       //         }
       //     } else if (m_dim_width < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_b = width / 2 + ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_b = width / 2 + ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_b = width / 2 - Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_b = width / 2 - Math.abs(ec_vl_width)
   
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_dim_width >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_b = radius - ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_b = radius - ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_b = radius + Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_b = radius + Math.abs(ec_vl_width)
       //             }
       //         }
   
       //     } else if (m_dim_width < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_b = radius + ec_vl_width
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_b = radius + ec_vl_width
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_b = radius - Math.abs(ec_vl_width)
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_b = radius - Math.abs(ec_vl_width)
       //             }
       //         }
       //     }
       // }
   
   
       // if (column_shape == 'rectangular') {
       //     var lever_dr_st_l_temp = lever_dr_st_l
       //     var lever_dr_st_l = (Math.sqrt(2) * Math.sqrt(8 * Math.pow(lever_dr_st_l , 2) - 4 * lever_dr_st_l * column_length + Math.pow(column_length, 2))) / 4
       //     var lever_dim_l_temp = lever_dim_l
       //     var lever_dim_l = (Math.sqrt(2) * Math.sqrt(8 * Math.pow(lever_dim_l , 2) - 4 * lever_dim_l * column_length + Math.pow(column_length, 2))) / 4
       //     var lever_dr_lt_l = (Math.sqrt(2) * Math.sqrt(8 * Math.pow(lever_dr_lt_l , 2) - 4 * lever_dr_lt_l * column_length + Math.pow(column_length, 2))) / 4
       //     var lever_ud_st_l = (Math.sqrt(2) * Math.sqrt(8 * Math.pow(lever_ud_st_l , 2) - 4 * lever_ud_st_l * column_length + Math.pow(column_length, 2))) / 4
       //     var lever_ud_lt_l = (Math.sqrt(2) * Math.sqrt(8 * Math.pow(lever_ud_lt_l , 2) - 4 * lever_ud_lt_l * column_length + Math.pow(column_length, 2))) / 4
       //     var lever_dr_st_b_temp = lever_dr_st_b
       //     var lever_dr_st_b = (Math.sqrt(2) * Math.sqrt(8 * Math.pow(lever_dr_st_b , 2) - 4 * lever_dr_st_b * column_width + Math.pow(column_width, 2))) / 4
       //     var lever_dim_b_temp = lever_dim_b
       //     var lever_dim_b = (Math.sqrt(2) * Math.sqrt(8 * Math.pow(lever_dim_b , 2) - 4 * lever_dim_b * column_width + Math.pow(column_width, 2))) / 4
       //     var lever_dr_lt_b = (Math.sqrt(2) * Math.sqrt(8 * Math.pow(lever_dr_lt_b , 2) - 4 * lever_dr_lt_b * column_width + Math.pow(column_width, 2))) / 4
       //     var lever_ud_st_b = (Math.sqrt(2) * Math.sqrt(8 * Math.pow(lever_ud_st_b , 2) - 4 * lever_ud_st_b * column_width + Math.pow(column_width, 2))) / 4
       //     var lever_ud_lt_b = (Math.sqrt(2) * Math.sqrt(8 * Math.pow(lever_ud_lt_b , 2) - 4 * lever_ud_lt_b * column_width + Math.pow(column_width, 2))) / 4
   
       // } else if (column_shape == 'circular') {
       //     var lever_dr_st_l_temp = lever_dr_st_l
       //     var lever_dr_st_l = (Math.sqrt(2) * Math.sqrt(2 * Math.pow(lever_dr_st_l , 2) - 2 * lever_dr_st_l * column_radius + Math.pow(column_radius, 2))) / 2
       //     var lever_dim_l_temp = lever_dim_l
       //     var lever_dim_l = (Math.sqrt(2) * Math.sqrt(2 * Math.pow(lever_dim_l , 2) - 2 * lever_dim_l * column_radius + Math.pow(column_radius, 2))) / 2
       //     var lever_dr_lt_l = (Math.sqrt(2) * Math.sqrt(2 * Math.pow(lever_dr_lt_l , 2) - 2 * lever_dr_lt_l * column_radius + Math.pow(column_radius, 2))) / 2
       //     var lever_ud_st_l = (Math.sqrt(2) * Math.sqrt(2 * Math.pow(lever_ud_st_l , 2) - 2 * lever_ud_st_l * column_radius + Math.pow(column_radius, 2))) / 2
       //     var lever_ud_lt_l = (Math.sqrt(2) * Math.sqrt(2 * Math.pow(lever_ud_lt_l , 2) - 2 * lever_ud_lt_l * column_radius + Math.pow(column_radius, 2))) / 2
       //     var lever_dr_st_b_temp = lever_dr_st_b
       //     var lever_dr_st_b = (Math.sqrt(2) * Math.sqrt(2 * Math.pow(lever_dr_st_b , 2) - 2 * lever_dr_st_b * column_radius + Math.pow(column_radius, 2))) / 2
       //     var lever_dim_b_temp = lever_dim_b
       //     var lever_dim_b = (Math.sqrt(2) * Math.sqrt(2 * Math.pow(lever_dim_b , 2) - 2 * lever_dim_b * column_radius + Math.pow(column_radius, 2))) / 2
       //     var lever_dr_lt_b = (Math.sqrt(2) * Math.sqrt(2 * Math.pow(lever_dr_lt_b , 2) - 2 * lever_dr_lt_b * column_radius + Math.pow(column_radius, 2))) / 2
       //     var lever_ud_st_b = (Math.sqrt(2) * Math.sqrt(2 * Math.pow(lever_ud_st_b , 2) - 2 * lever_ud_st_b * column_radius + Math.pow(column_radius, 2))) / 2
       //     var lever_ud_lt_b = (Math.sqrt(2) * Math.sqrt(2 * Math.pow(lever_ud_lt_b , 2) - 2 * lever_ud_lt_b * column_radius + Math.pow(column_radius, 2))) / 2
       // }
   
       // var M_yl_l = 1 / (2 * Math.PI) * vl_external * (length / 1000) / (width / 1000)
       // var M_yl_b = 1 / (2 * Math.PI) * vl_external * (width / 1000) / (length / 1000)
   
   
       // if (lever_dr_st_l <= ef_dr_st_l) {
       //     var M_dr_st_l = ((1 / 2 * vl_total_dr_st / A_eff_dr_st * lever_dr_st_l * lever_dr_st_l) / 1000000) * ef_dr_st_b / 1000
       // } else if (lever_dr_st_l > ef_dr_st_l) {
       //     var M_dr_st_l = ((vl_total_dr_st / A_eff_dr_st * ef_dr_st_l * (lever_dr_st_l - ef_dr_st_l / 2)) / 1000000) * ef_dr_st_b / 1000
       // }
   
       // if (lever_dr_lt_l <= ef_dr_lt_l) {
       //     var M_dr_lt_l = ((1 / 2 * vl_total_dr_lt / A_eff_dr_lt * lever_dr_lt_l * lever_dr_lt_l) / 1000000) * ef_dr_lt_b / 1000
       // } else if (lever_dr_lt_l > ef_dr_lt_l) {
       //     var M_dr_lt_l = ((vl_total_dr_st / A_eff_dr_lt * ef_dr_lt_l * (lever_dr_lt_l - ef_dr_lt_l / 2)) / 1000000) * ef_dr_lt_b / 1000
       // }
   
       // if (lever_ud_st_l <= ef_ud_st_l) {
       //     var M_ud_st_l = ((1 / 2 * vl_total_ud_st / A_eff_ud_st * lever_ud_st_l * lever_ud_st_l) / 1000000) * ef_ud_st_b / 1000
       // } else if (lever_ud_st_l > ef_ud_st_l) {
       //     var M_ud_st_l = ((vl_total_ud_st / A_eff_ud_st * ef_ud_st_l * (lever_ud_st_l - ef_ud_st_l / 2)) / 1000000) * ef_ud_st_b / 1000
       // }
       // if (lever_ud_lt_l <= ef_ud_lt_l) {
       //     var M_ud_lt_l = ((1 / 2 * vl_total_ud_lt / A_eff_ud_lt * lever_ud_lt_l * lever_ud_lt_l) / 1000000) * ef_ud_lt_b / 1000
       // } else if (lever_ud_lt_l > ef_ud_lt_l) {
       //     var M_ud_lt_l = ((vl_total_ud_lt / A_eff_ud_lt * ef_ud_lt_l * (lever_ud_lt_l - ef_ud_lt_l / 2)) / 1000000) * ef_ud_lt_b / 1000
       // }
   
   
       // if (lever_dim_l <= ef_dim_l) {
       //     var M_dim_l = ((1 / 2 * vl_dim_total / A_dim_eff * lever_dim_l * lever_dim_l) / 1000000) * ef_dim_b / 1000
       // } else if (lever_dim_l > ef_dim_l) {
       //     var M_dim_l = ((vl_dim_total / A_dim_eff * ef_dim_l * (lever_dim_l - ef_dim_l / 2)) / 1000000) * ef_dim_b / 1000
       // }
     
       // if (lever_dr_st_b <= ef_dr_st_b) {
       //     var M_dr_st_b = ((1 / 2 * vl_total_dr_st / A_eff_dr_st * lever_dr_st_b * lever_dr_st_b) / 1000000) * ef_dr_st_l / 1000
       // } else if (lever_dr_st_b > ef_dr_st_b) {
       //     var M_dr_st_b = ((vl_total_dr_st / A_eff_dr_st * ef_dr_st_b * (lever_dr_st_b - ef_dr_st_b / 2)) / 1000000) * ef_dr_st_l / 1000
       // }
   
       // if (lever_dr_lt_b <= ef_dr_lt_b) {
       //     var M_dr_lt_b = ((1 / 2 * vl_total_dr_lt / A_eff_dr_lt * lever_dr_lt_b * lever_dr_lt_b) / 1000000) * ef_dr_lt_l / 1000
   
       // } else if (lever_dr_lt_b > ef_dr_lt_b) {
       //     var M_dr_lt_b = ((vl_total_dr_lt / A_eff_dr_lt * ef_dr_lt_b * (lever_dr_lt_b - ef_dr_lt_b / 2)) / 1000000) * ef_dr_lt_l / 1000
       // }
   
       // if (lever_ud_st_b <= ef_ud_st_b) {
       //     var M_ud_st_b = ((1 / 2 * vl_total_ud_st / A_eff_ud_st * lever_ud_st_b * lever_ud_st_b) / 1000000) * ef_ud_st_l / 1000
       // } else if (lever_ud_st_b > ef_ud_st_b) {
       //     var M_ud_st_b = ((vl_total_ud_st / A_eff_ud_st * ef_ud_st_b * (lever_ud_st_b - ef_ud_st_b / 2)) / 1000000) * ef_ud_st_l / 1000
       // }
   
       // if (lever_ud_lt_b <= ef_ud_lt_b) {
       //     var M_ud_lt_b = ((1 / 2 * vl_total_ud_lt / A_eff_ud_lt * lever_ud_lt_b * lever_ud_lt_b) / 1000000) * ef_ud_lt_l / 1000
       // } else if (lever_ud_lt_b > ef_ud_lt_b) {
       //     var M_ud_lt_b = ((vl_total_ud_lt / A_eff_ud_lt * ef_ud_lt_b * (lever_ud_lt_b - ef_ud_lt_b / 2)) / 1000000) * ef_ud_lt_l / 1000
       // }
   
       // if (lever_dim_b <= ef_dim_b) {
       //     var M_dim_b = ((1 / 2 * vl_dim_total / A_dim_eff * lever_dim_b * lever_dim_b) / 1000000) * ef_dim_l / 1000
       // } else if (lever_dim_b > ef_dim_b) {
       //     var M_dim_b = ((vl_dim_total / A_dim_eff * ef_dim_b * (lever_dim_b - ef_dim_b / 2)) / 1000000) * ef_dim_l / 1000
       // }  
   
       var M_Edp_dr_l = Math.max(M_dr_st_l, M_dr_lt_l);
       var M_Edp_dr_b = Math.max(M_dr_st_b, M_dr_lt_b);
   
       var M_Edp_ud_l = Math.max(M_ud_st_l, M_ud_lt_l);
       var M_Edp_ud_b = Math.max(M_ud_st_b, M_ud_lt_b);
   
       var M_Edp_l = Math.max(M_Edp_dr_l, M_Edp_ud_l)
       var M_Edp_b = Math.max(M_Edp_dr_b, M_Edp_ud_b)
   
       // moment verifications
   
       // Used for geo both
       var M_final_l = Math.max(M_dr_st_l,M_dr_lt_l,M_ud_st_l,M_ud_lt_l)
       var M_final_b = Math.max(M_dr_st_b,M_dr_lt_b,M_ud_st_b,M_ud_lt_b)
       var M_Ed_dr_l = Math.max(M_Edp_dr_l)
       var M_Ed_ud_l = Math.max(M_Edp_ud_l)
       var M_Ed_l = Math.max(M_Edp_l)
       var M_Ed_b = Math.max(M_Edp_b)
       var M_Ed_dr_b = Math.max(M_Edp_dr_b)
       var M_Ed_ud_b = Math.max(M_Edp_ud_b)
       var M_dim_Ed_l = Math.max(M_dim_l)
       var M_dim_Ed_b = Math.max(M_dim_b)
   
           
       // punching shear calculations
   
       var v = 0.6 * (1 - f_ck / 250);
       var rho_total = Math.sqrt(rho * rho);
       if (rho_total == 0) {
           var k = Math.min(1 + Math.sqrt(200 / (ef_height)), 2);
       } else {
           var k = Math.min(1 + Math.sqrt(200 / ef_height), 2);
       }
   
   
       var v_max = 0.5 * v * f_cd;
       var v_c = 0.035 * Math.pow(k, 1.5) * Math.pow(f_ck, 0.5);
       var v_r = Math.max(0.18 * k / gamma_c * Math.pow(100 * rho_total / 100 * f_ck, 1 / 3),v_c);
       var v_f = 0.015 * (f_R_1 + f_R_2 + f_R_3 + f_R_4);
   
       if (column_shape == 'rectangular') {
           var u_0 = 2 * (column_length + column_width)
       } else if (column_shape == 'circular') {
           var u_0 = 2 * Math.PI * column_radius
       }
   
       if (column_shape == 'rectangular') {
           if (rho == 0) {
               var u_1 = 2 * (column_length + column_width + 2 * Math.PI * ef_height)
           } else {
               var u_1 = 2 * (column_length + column_width + 2 * Math.PI * ef_height)
           }
       } else if (column_shape == 'circular') {
           if (rho == 0) {
               var u_1 = 2 * Math.PI * (column_radius + 2 * ef_height)
           } else {
               var u_1 = 2 * Math.PI * (column_radius + 2 * ef_height)
           }
       }
   
   
       if (column_shape == 'rectangular') {
           var A_u_0 = column_length / 1000 * column_width / 1000
       } else if (column_shape == 'circular') {
           var A_u_0 = Math.PI * Math.pow(column_radius / 1000, 2)
       }
   
   
   
   
       if (column_shape == 'rectangular') {
           if (rho == 0) {
               var A_u_1 = column_length / 1000 * column_width / 1000 + 4 * ef_height / 1000 * (column_length / 1000 + column_width / 1000) + 4 * Math.PI * Math.pow(ef_height / 1000, 2)
           } else {
               var A_u_1 = column_length / 1000 * column_width / 1000 + 4 * ef_height / 1000 * (column_length / 1000 + column_width / 1000) + 4 * Math.PI * Math.pow(ef_height / 1000, 2)
           }
       } else if (column_shape == 'circular') {
           if (rho == 0) {
               var A_u_1 = Math.PI * Math.pow(column_radius / 1000 + 2 * ef_height / 1000, 2)
           } else {
               var A_u_1 = Math.PI * Math.pow(column_radius / 1000 + 2 * ef_height / 1000, 2)
           }
       }
   
   
       if (vl_total_dr_st >= (vl_total_dr_st - self_weight) * A_u_0 / A_eff_dr_st) {
           var V_Ed_red_0_dr_st = vl_total_dr_st - (vl_total_dr_st - self_weight) * A_u_0 / A_eff_dr_st
       } else if (vl_total_dr_st < (vl_total_dr_st - self_weight) * A_u_0 / A_eff_dr_st) {
           var V_Ed_red_0_dr_st = 0
       }
   
       if (vl_total_dr_lt >= (vl_total_dr_lt - self_weight) * A_u_0 / A_eff_dr_lt) {
           var V_Ed_red_0_dr_lt = vl_total_dr_lt - (vl_total_dr_lt - self_weight) * A_u_0 / A_eff_dr_lt
       } else if (vl_total_dr_lt < (vl_total_dr_lt - self_weight) * A_u_0 / A_eff_dr_lt) {
           var V_Ed_red_0_dr_lt = 0
       }
   
       if (vl_total_ud_st >= (vl_total_ud_st - self_weight) * A_u_0 / A_eff_ud_st) {
           var V_Ed_red_0_ud_st = vl_total_ud_st - (vl_total_ud_st - self_weight) * A_u_0 / A_eff_ud_st
       } else if (vl_total_ud_st < (vl_total_ud_st - self_weight) * A_u_0 / A_eff_ud_st) {
           var V_Ed_red_0_ud_st = 0
       }
   
       if (vl_total_ud_lt >= (vl_total_ud_lt - self_weight) * A_u_0 / A_eff_ud_lt) {
           var V_Ed_red_0_ud_lt = vl_total_ud_lt - (vl_total_ud_lt - self_weight) * A_u_0 / A_eff_ud_lt
       } else if (vl_total_ud_lt < (vl_total_ud_lt - self_weight) * A_u_0 / A_eff_ud_lt) {
           var V_Ed_red_0_ud_lt = 0
       }
   
       var V_Ed_red_0 = Math.max(V_Ed_red_0_dr_st, V_Ed_red_0_dr_lt, V_Ed_red_0_ud_st, V_Ed_red_0_ud_lt)
       var V_Ed_red_0_dr = Math.max(V_Ed_red_0_dr_st, V_Ed_red_0_dr_lt)
       var V_ed_red_0_ud = Math.max(V_Ed_red_0_ud_st, V_Ed_red_0_ud_lt)
   
       if (point_foundation_shape == 'rectangular') {
           if (vl_total_internal >= (vl_total_internal - self_weight) * A_u_0 / (length / 1000 * width / 1000)) {
               var V_Ed_red_0_internal = vl_total_internal - (vl_total_internal - self_weight) * A_u_0 / (length / 1000 * width / 1000)
           } else if (vl_total_internal < (vl_total_internal - self_weight) * A_u_0 / (length / 1000 * width / 1000)) {
               var V_Ed_red_0_internal = 0
           }
       } else if (point_foundation_shape == 'circular') {
           if (vl_total_internal >= (vl_total_internal - self_weight) * A_u_0 / (Math.PI * Math.pow(radius / 1000, 2))) {
               var V_Ed_red_0_internal = vl_total_internal - (vl_total_internal - self_weight) * A_u_0 / (Math.PI * Math.pow(radius / 1000, 2))
           } else if (vl_total_internal < (vl_total_internal - self_weight) * A_u_0 / (Math.PI * Math.pow(radius / 1000, 2))) {
               var V_Ed_red_0_internal = 0
           }
       }
   
       if (point_foundation_shape == 'rectangular') {
           if (vl_dim_total >= (vl_dim_total - self_weight) * A_u_0 / (length / 1000 * width / 1000)) {
               var V_Ed_red_0_dim = vl_dim_total - (vl_dim_total - self_weight) * A_u_0 / A_dim_eff
           } else if (vl_dim_total < (vl_dim_total - self_weight) * A_u_0 / (length / 1000 * width / 1000)) {
               var V_Ed_red_0_dim = 0
           }
       } else if (point_foundation_shape == 'circular') {
           if (vl_dim_total >= (vl_dim_total - self_weight) * A_u_0 / (Math.PI * Math.pow(radius / 1000, 2))) {
               var V_Ed_red_0_dim = vl_dim_total - (vl_dim_total - self_weight) * A_u_0 / A_dim_eff
           } else if (vl_dim_total < (vl_dim_total - self_weight) * A_u_0 / (Math.PI * Math.pow(radius / 1000, 2))) {
               var V_Ed_red_0_dim = 0
           }
       }
   
   
   
       if (vl_total_dr_st >= (vl_total_dr_st - self_weight) * A_u_1 / A_eff_dr_st) {
           var V_Ed_red_1_dr_st = vl_total_dr_st - (vl_total_dr_st - self_weight) * A_u_1 / A_eff_dr_st
       } else if (vl_total_dr_st < (vl_total_dr_st - self_weight) * A_u_1 / A_eff_dr_st) {
           var V_Ed_red_1_dr_st = 0
       }
   
       if (vl_total_dr_lt >= (vl_total_dr_lt - self_weight) * A_u_1 / A_eff_dr_lt) {
           var V_Ed_red_1_dr_lt = vl_total_dr_lt - (vl_total_dr_lt - self_weight) * A_u_1 / A_eff_dr_lt
       } else if (vl_total_dr_lt < (vl_total_dr_lt - self_weight) * A_u_1 / A_eff_dr_lt) {
           var V_Ed_red_1_dr_lt = 0
       }
   
       if (vl_total_ud_st >= (vl_total_ud_st - self_weight) * A_u_1 / A_eff_ud_st) {
           var V_Ed_red_1_ud_st = vl_total_ud_st - (vl_total_ud_st - self_weight) * A_u_1 / A_eff_ud_st
       } else if (vl_total_ud_st < (vl_total_ud_st - self_weight) * A_u_1 / A_eff_ud_st) {
           var V_Ed_red_1_ud_st = 0
       }
   
       if (vl_total_ud_lt >= (vl_total_ud_lt - self_weight) * A_u_1 / A_eff_ud_lt) {
           var V_Ed_red_1_ud_lt = vl_total_ud_lt - (vl_total_ud_lt - self_weight) * A_u_1 / A_eff_ud_lt
       } else if (vl_total_ud_lt < (vl_total_ud_lt - self_weight) * A_u_1 / A_eff_ud_lt) {
           var V_Ed_red_1_ud_lt = 0
       }
   
       var V_Ed_red_1 = Math.max(V_Ed_red_1_dr_st, V_Ed_red_1_dr_lt, V_Ed_red_1_ud_st, V_Ed_red_1_ud_lt)
   
       var V_Ed_red_1_dr = Math.max(V_Ed_red_1_dr_st, V_Ed_red_1_dr_lt)
       var V_Ed_red_1_ud = Math.max(V_Ed_red_1_ud_st, V_Ed_red_1_ud_lt)
   
       if (point_foundation_shape == 'rectangular') {
           if (vl_total_internal >= (vl_total_internal - self_weight) * A_u_1 / (length / 1000 * width / 1000)) {
               var V_Ed_red_1_internal = vl_total_internal - (vl_total_internal - self_weight) * A_u_1 / (length / 1000 * width / 1000)
           } else if (vl_total_internal < (vl_total_internal - self_weight) * A_u_1 / (length / 1000 * width / 1000)) {
               var V_Ed_red_1_internal = 0
           }
       } else if (point_foundation_shape == 'circular') {
           if (vl_total_internal >= (vl_total_internal - self_weight) * A_u_1 / (Math.PI * Math.pow(radius / 1000, 2))) {
               var V_Ed_red_1_internal = vl_total_internal - (vl_total_internal - self_weight) * A_u_1 / (Math.PI * Math.pow(radius / 1000, 2))
           } else if (vl_total_internal < (vl_total_internal - self_weight) * A_u_1 / (Math.PI * Math.pow(radius / 1000, 2))) {
               var V_Ed_red_1_internal = 0
   
           }
       }
   
       if (point_foundation_shape == 'rectangular') {
           if (vl_dim_total >= (vl_dim_total - self_weight) * A_u_1 / (length / 1000 * width / 1000)) {
               var V_Ed_red_1_dim = vl_dim_total - (vl_dim_total - self_weight) * A_u_1 / A_dim_eff
           } else if (vl_dim_total < (vl_dim_total - self_weight) * A_u_1 / (length / 1000 * width / 1000)) {
               var V_Ed_red_1_dim = 0
           }
       } else if (point_foundation_shape == 'circular') {
           if (vl_dim_total >= (vl_dim_total - self_weight) * A_u_1 / (Math.PI * Math.pow(radius / 1000, 2))) {
               var V_Ed_red_1_dim = vl_dim_total - (vl_dim_total - self_weight) * A_u_1 / A_dim_eff
           } else if (vl_dim_total < (vl_dim_total - self_weight) * A_u_1 / (Math.PI * Math.pow(radius / 1000, 2))) {
               var V_Ed_red_1_dim = 0
           }
       }
   
       var P_u_0 = v_max * 1000 * u_0 / 1000 * ef_height / 1000
   
       if (include_fiber != "on") {
           var P_u_1 = v_r * 1000 * u_1 / 1000 * ef_height / 1000
       } else {
           var P_u_1 = (v_r + v_f) * 1000 * u_1 / 1000 * ef_height / 1000
       }
       var P_u = Math.min(P_u_0,P_u_1)
   
   
   
   
   // 5.2 MathJax Equations
   
   function equationKeeper(eq, range, keeperIndex) {
       for(i = 1; i <= range; i++) {
           if(i == keeperIndex) {
               continue
           } else {
               $('.' + eq + i).remove()
           }
       }
   }
   
   if (point_foundation_shape == 'rectangular') {
       var volume_eq = "$$ V = l\\,b\\,h = $$"
       var ef_dr_st_l_eq = "$$ l_{eff} = l - 2\\,e_l = $$"
       var ef_dr_lt_l_eq = "$$ l'_{eff} = l - 2\\,e'_l = $$"
       equationKeeper('ef_dr_lt_l_eq', 2, 1)
       var ef_ud_st_l_eq = "$$ l_{eff,u} = l - 2\\,e_{l,u} = $$"
       equationKeeper('ef_ud_st_l_eq', 2, 1)
       var ef_ud_lt_l_eq = "$$ l'_{eff,u} = l - 2\\,e'_{l,u} = $$"
       equationKeeper('ef_ud_lt_l_eq', 2, 1)
       var ef_dim_l_eq = "$$ l_{eff} = l - 2\\,e_l = $$"
   
       var ef_dr_st_b_eq = "$$ b_{eff} = b - 2\\,e_b = $$"
       equationKeeper('ef_dr_st_b_eq', 2, 1)
   
       var ef_dr_lt_b_eq = "$$ b'_{eff} = b - 2\\,e'_b = $$"
       equationKeeper('ef_dr_lt_b_eq', 2, 1)
   
       var ef_ud_st_b_eq = "$$ b_{eff,u} = b - 2\\,e_{b,u} = $$"
       var ef_ud_lt_b_eq = "$$ b'_{eff,u} = b - 2\\,e'_{b,u} = $$"
       var ef_dim_b_eq = "$$ b_{eff} = b - 2\\,e_b = $$"
   
       var A_eff_dr_st_eq = "$$ A_{eff} = l_{eff}\\,b_{eff} = $$"
       var A_eff_dr_lt_eq = "$$ A'_{eff} = l'_{eff}\\,b'_{eff} = $$"
       var A_eff_ud_st_eq = "$$ A_{eff,u} = l_{eff,u}\\,b_{eff,u} = $$"
       var A_eff_ud_lt_eq = "$$ A'_{eff,u} = l'_{eff,u}\\,b'_{eff,u} = $$"
       var A_dim_eff_eq = "$$ A_{eff} = l_{eff}\\,b_{eff} = $$"
   
   } else if (point_foundation_shape == 'circular') {
       var volume_eq = "$$ V = \\pi\\,r^2\\,h = $$"
       var ef_dr_st_l_eq = "$$ l_{eff} = \\frac{A_{eff}}{b_{eff}} = $$"
       var ef_dr_lt_l_eq = "$$ l'_{eff} = \\frac{A'_{eff}}{b'_{eff}} = $$"
       equationKeeper('ef_dr_lt_l_eq', 2, 2)
       var ef_ud_st_l_eq = "$$ l_{eff,u} = \\frac{A_{eff,u}}{b_{eff,u}} = $$"
       equationKeeper('ef_ud_st_l_eq', 2, 2)
       var ef_ud_lt_l_eq = "$$ l'_{eff,u} =\\frac{A'_{eff,u}}{b'_{eff,u}} = $$"
       equationKeeper('ef_ud_lt_l_eq', 2, 2)
       var ef_dim_l_eq = "$$ l_{eff} = \\frac{A_{eff}}{b_{eff}} = $$"
   
       var ef_dr_st_b_eq = "$$ b_{eff} = \\sqrt{\\tan\\left(\\frac{v}{4}\\right)A_{eff}} = $$"
       equationKeeper('ef_dr_st_b_eq', 2, 2)
   
       var ef_dr_lt_b_eq = "$$ b'_{eff} = \\sqrt{\\tan\\left(\\frac{v'}{4}\\right)A'_{eff}} = $$"
       equationKeeper('ef_dr_lt_b_eq', 2, 2)
   
       var ef_ud_st_b_eq = "$$ b_{eff,u} = \\sqrt{\\tan\\left(\\frac{v_u}{4}\\right)A_{eff,u}} = $$"
       var ef_ud_lt_b_eq = "$$ b'_{eff,u} = \\sqrt{\\tan\\left(\\frac{v'_u}{4}\\right)A'_{eff,u}} = $$"
       var ef_dim_b_eq = "$$ b_{eff} = \\sqrt{\\tan\\left(\\frac{v}{4}\\right)A_{eff}} = $$"
   
       var A_eff_dr_st_eq = "$$ A_{eff} = r^2\\,\\left(v-\\sin\\left(v\\right)\\right) = $$"
       var A_eff_dr_lt_eq = "$$ A'_{eff} = r^2\\,\\left(v-\\sin\\left(v'\\right)\\right) = $$"
       var A_eff_ud_st_eq = "$$ A_{eff,u} = r^2\\,\\left(v-\\sin\\left(v_u\\right)\\right) = $$"
       var A_eff_ud_lt_eq = "$$ A'_{eff,u} = r^2\\,\\left(v-\\sin\\left(v'_u\\right)\\right) = $$"
       var A_dim_eff_eq = "$$ A_{eff} = r^2\\,\\left(v-\\sin\\left(v\\right)\\right) = $$"
   }
   
   var q_eq = "$$ q = d\\,\\gamma = $$"
   
   if (height < depth) {
       // var g_eq = "$$ g = \\left(d-h\\right)\\,\\gamma = $$"
       equationKeeper('g_eq', 2, 1)
   } else if (height >= depth) {
       // var g_eq = "$$ g = $$"
       equationKeeper('g_eq', 2, 2)
   }
   
   
   var af_pc_eq = "$$ \\gamma_{\\phi} = $$"
   var dr_st_af_d_eq = "$$ \\phi_{pl,d} = \\arctan\\left(\\frac{\\tan\\left(\\phi_{pl,k}\\right)}{\\gamma_{\\phi}}\\right) = $$"
   var dr_lt_af_d_eq = "$$ \\phi'_{pl,d} = \\arctan\\left(\\frac{\\tan\\left(\\phi'_{pl,k}\\right)}{\\gamma_{\\phi}}\\right) = $$"
   var ud_st_af_d_eq = "$$ \\phi_{pl,u,d} = \\arctan\\left(\\frac{\\tan\\left(\\phi_{pl,u,k}\\right)}{\\gamma_{\\phi}}\\right) = $$"
   var ud_lt_af_d_eq = "$$ \\phi'_{pl,u,d} =  \\arctan\\left(\\frac{\\tan\\left(\\phi'_{pl,u,k}\\right)}{\\gamma_{\\phi}}\\right) = $$"
   var dr_cohesion_pc_eq = "$$ \\gamma_{c} = $$"
   var ud_cohesion_pc_eq = "$$ \\gamma_{c_u} = $$"
   var dr_st_cohesion_d_eq = "$$ c_d = \\frac{c_k}{\\gamma_{c}} = $$"
   var dr_lt_cohesion_d_eq = "$$ c'_d = \\frac{c'_k}{\\gamma_{c}} = $$"
   var ud_st_cohesion_d_eq = "$$ c_{u,d} = \\frac{c_{u,k}}{\\gamma_{c_u}} = $$"
   var ud_lt_cohesion_d_eq = "$$ c'_{u,d} = \\frac{c'_{u,k}}{\\gamma_{c_u}} = $$"
   
   if (fabrication_method == 'in_situ') {
       var a_d_dr_st_eq = "$$ a_d = c_d = $$"
       var a_d_dr_lt_eq = "$$ a'_d = c'_d = $$"
   
       equationKeeper('a_d_dr_st_eq', 2, 1)
       equationKeeper('a_d_dr_lt_eq', 2, 1)
   
   } else if (fabrication_method == 'prefab') {
       var a_d_dr_st_eq = "$$ a_d = $$"
       var a_d_dr_lt_eq = "$$ a'_d = $$"
   
       equationKeeper('a_d_dr_st_eq', 2, 2)
       equationKeeper('a_d_dr_lt_eq', 2, 2)
   }
   
   var d_c_eq = "$$ d_c = $$"
   var d_q_eq = "$$ d_q = $$"
   var K_g_a_dr_st_eq = "$$ K_{\\gamma}^a =\\frac{1-\\sin\\left(\\phi_{pl,d}\\right)}{1+\\sin\\left(\\phi_{pl,d}\\right)} = $$"
   var K_g_a_dr_lt_eq = "$$ K_{\\gamma}^{'a} =\\frac{1-\\sin\\left(\\phi'_{pl,d}\\right)}{1+\\sin\\left(\\phi'_{pl,d}\\right)} = $$"
   var K_g_a_ud_st_eq = "$$ K_{\\gamma,u}^a = \\frac{1-\\sin\\left(\\phi_{pl,u,d}\\right)}{1+\\sin\\left(\\phi_{pl,u,d}\\right)} = $$"
   var K_g_a_ud_lt_eq = "$$ K_{\\gamma,u}^{'a} = \\frac{1-\\sin\\left(\\phi'_{pl,u,d}\\right)}{1+\\sin\\left(\\phi'_{pl,u,d}\\right)} = $$"
   var K_p_a_dr_st_eq = "$$ K_p^a = K_{\\gamma}^a = $$"
   var K_p_a_dr_lt_eq = "$$ K_p^{'a} = K_{\\gamma}^{'a} = $$"
   var K_p_a_ud_st_eq = "$$ K_{p,u}^a = K_{\\gamma,u}^a = $$"
   var K_p_a_ud_lt_eq = "$$ K_{p,u}^{'a} = K_{\\gamma,u}^{'a} = $$"
   var K_c_a_dr_st_eq = "$$ K_c^a = -\\frac{2\\cos\\left(\\phi_{pl,d}\\right)}{1+\\sin\\left(\\phi_{pl,d}\\right)} = $$"
   var K_c_a_dr_lt_eq = "$$ K_c^{'a} = -\\frac{2\\cos\\left(\\phi'_{pl,d}\\right)}{1+\\sin\\left(\\phi'_{pl,d}\\right)} = $$"
   var K_c_a_ud_st_eq = "$$ K_{c,u}^a = -\\frac{2\\cos\\left(\\phi_{pl,u,d}\\right)}{1+\\sin\\left(\\phi_{pl,u,d}\\right)} = $$"
   var K_c_a_ud_lt_eq = "$$ K_{c,u}^{'a} = -\\frac{2\\cos\\left(\\phi'_{pl,u,d}\\right)}{1+\\sin\\left(\\phi'_{pl,u,d}\\right)} = $$"
   var K_g_p_dr_st_eq = "$$ K_{\\gamma}^p = \\frac{1+\\sin\\left(\\phi_{pl,d}\\right)}{1-\\sin\\left(\\phi_{pl,d}\\right)} = $$"
   var K_g_p_dr_lt_eq = "$$ K_{\\gamma}^{'p} =\\frac{1+\\sin\\left(\\phi'_{pl,d}\\right)}{1-\\sin\\left(\\phi'_{pl,d}\\right)} = $$"
   var K_g_p_ud_st_eq = "$$ K_{\\gamma,u}^p = \\frac{1+\\sin\\left(\\phi_{pl,u,d}\\right)}{1-\\sin\\left(\\phi_{pl,u,d}\\right)} = $$"
   var K_g_p_ud_lt_eq = "$$ K_{\\gamma,u}^{'p} = \\frac{1+\\sin\\left(\\phi'_{pl,u,d}\\right)}{1-\\sin\\left(\\phi'_{pl,u,d}\\right)} = $$"
   var K_p_p_dr_st_eq = "$$ K_p^p = K_{\\gamma}^p = $$"
   var K_p_p_dr_lt_eq = "$$ K_p^{'p} = K_{\\gamma}^{'p} = $$"
   var K_p_p_ud_st_eq = "$$ K_{p,u}^p = K_{\\gamma,u}^p = $$"
   var K_p_p_ud_lt_eq = "$$ K_{p,u}^{'p} = K_{\\gamma,u}^{'p} = $$"
   var K_c_p_dr_st_eq = "$$ K_c^p = \\frac{2\\cos\\left(\\phi_{pl,d}\\right)}{1-\\sin\\left(\\phi_{pl,d}\\right)} = $$"
   var K_c_p_dr_lt_eq = "$$ K_c^{'p} = \\frac{2\\cos\\left(\\phi'_{pl,d}\\right)}{1-\\sin\\left(\\phi'_{pl,d}\\right)} = $$"
   var K_c_p_ud_st_eq = "$$ K_{c,u}^p = \\frac{2\\cos\\left(\\phi_{pl,u,d}\\right)}{1-\\sin\\left(\\phi_{pl,u,d}\\right)} = $$"
   var K_c_p_ud_lt_eq = "$$ K_{c,u}^{'p} =\\frac{2\\cos\\left(\\phi'_{pl,u,d}\\right)}{1-\\sin\\left(\\phi'_{pl,u,d}\\right)} = $$"
   var self_weight_eq = "$$ F_p = V \\,\\rho_c = $$"
   
   if (depth > height) {
       if (column_shape == 'rectangular') {
           // var ground_area_eq = "$$ A_g = \\frac{V}{h}-l_c\\,b_c = $$"
           equationKeeper('ground_area_eq', 3, 1)
   
       } else if (column_shape == 'circular') {
           // var ground_area_eq = "$$ A_g = \\frac{V}{h}-\\pi\\,r_c^2 = $$"
           equationKeeper('ground_area_eq', 3, 2)
       }
   } else if (depth <= height) {
       // var ground_area_eq = "$$ A_g = $$"
       equationKeeper('ground_area_eq', 3, 3)
   }
   
   var ground_weight_eq = "$$ F_g = A_g\\,g = $$"
   var vl_total_dr_st_eq = "$$ V_t = V_e + F_p + F_g = $$"
   var vl_total_dr_lt_eq = "$$ V'_t = V_e + F_p + F_g =  $$"
   var vl_total_ud_lt_eq = "$$ V'_{t,u} = V_e + F_p + F_g = $$"
   var vl_dim_total_eq = "$$V_t = V_e + F_p = $$"
   var vl_total_internal_eq = "$$V_t = V_e + F_p = $$"
   var hl_total_eq = "$$ H_t = \\sqrt{H_l^2+H_b^2} = $$"
   var d_0_dr_st_eq = "$$ d_0^a = -\\frac{K_c^a\\,c_d + K_p^a\\,p_d}{\\gamma\\,K_{\\gamma}^a} = $$"
   var d_0_dr_lt_eq = "$$ d_0^{'a} = -\\frac{K_c^{'a}\\,c'_d + K_p^{'a}\\,p_d}{\\gamma\\,K_{\\gamma}^{'a}} = $$"
   var d_0_ud_st_eq = "$$ d_{0,u}^a = -\\frac{K_{c,u}^a\\,c_{u,d} + K_{p,u}^a\\,p_d}{\\gamma\\,K_{\\gamma,u}^a} = $$"
   var d_0_ud_lt_eq = "$$ d_{0,u}^{'a} = -\\frac{K_{c,u}^{'a}\\,c'_{u,d} + K_{p,u}^{'a}\\,p_d}{\\gamma\\,K_{\\gamma,u}^{'a}} = $$"
   
   if (d_0_dr_st >= depth) {
       // var F_a_dr_st_l_eq = "$$ F_l^a = $$"
       equationKeeper("F_a_dr_st_l_eq", 5, 1)
   
   } else if (d_0_dr_st < depth && (depth - height) > 0) {
       if ((depth - height) <= d_0_dr_st) {
           // var F_a_dr_st_l_eq = "$$ F_l^a = b\\,E^a = b\\,\\int_{d_0^a}^d e^a(t)\\,\\text{dt} = b\\,\\int_{d_0^a}^d\\,\\gamma\\,t\\,K_{\\gamma}^a+p_d\\,K_p^a+c_d\\,K_c^a\\,\\text{dt} = $$"
           equationKeeper("F_a_dr_st_l_eq", 5, 2)
       } else if ((depth - height) > d_0_dr_st) {
           // var F_a_dr_st_l_eq = "$$ F_l^a = b\\,E^a = b\\,\\int_{d-h}^d e^a(t)\\,\\text{dt} = b\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma}^a+p_d\\,K_p^a+c_d\\,K_c^a\\,\\text{dt} = $$"
           equationKeeper("F_a_dr_st_l_eq", 5, 3)
       }
   } else if (d_0_dr_st < depth && (depth - height) <= 0) {
       if (0 <= d_0_dr_st) {
           // var F_a_dr_st_l_eq = "$$ F_l^a = b\\,E^a = b\\,\\int_{d_0^a}^d e^a(t)\\,\\text{dt} = b\\,\\int_{d_0^a}^d\\,\\gamma\\,t\\,K_{\\gamma}^a+p_d\\,K_p^a+c_d\\,K_c^a\\,\\text{dt} = $$"
           equationKeeper("F_a_dr_st_l_eq", 5, 4)
       } else if (0 > d_0_dr_st) {
           // var F_a_dr_st_l_eq = "$$ F_l^a = b\\,E^a = b\\,\\int_{0}^d e^a(t)\\,\\text{dt} = b\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma}^a+p_d\\,K_p^a+c_d\\,K_c^a\\,\\text{dt} = $$"
           equationKeeper("F_a_dr_st_l_eq", 5, 5)
       }
   }
   
   
   if (d_0_dr_lt >= depth) {
       var F_a_dr_lt_l = 0
       // var F_a_dr_lt_l_eq = "$$ F_l^{'a} = $$"
       equationKeeper("F_a_dr_lt_l_eq", 5, 1)
       
   
   } else if (d_0_dr_lt < depth && (depth - height) > 0) {
       if ((depth - height) <= d_0_dr_lt) {
           // var F_a_dr_lt_l_eq = "$$ F_l^{'a} = b\\,E^{'a} = b\\,\\int_{d_0^{'a}}^d e^{'a}(t)\\,\\text{dt} = b\\,\\int_{d_0^{'a}}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'a}+p_d\\,K_p^{'a}+c'_d\\,K_c^{'a}\\,\\text{dt} = $$"
           equationKeeper("F_a_dr_lt_l_eq", 5, 2)
       } else if ((depth - height) > d_0_dr_lt) {
           // var F_a_dr_lt_l_eq = "$$ F_l^{'a} = b\\,E^{'a} = b\\,\\int_{d-h}^d e^{'a}(t)\\,\\text{dt} = b\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'a}+p_d\\,K_p^{'a}+c'_d\\,K_c^{'a}\\,\\text{dt} = $$"
           equationKeeper("F_a_dr_lt_l_eq", 5, 3)
       }
   } else if (d_0_dr_lt < depth && (depth - height) <= 0) {
       if (0 <= d_0_dr_lt) {
           // var F_a_dr_lt_l_eq = "$$ F_l^{'a} = b\\,E^{'a} = b\\,\\int_{d_0^{'a}}^d e^{'a}(t)\\,\\text{dt} = b\\,\\int_{d_0^{'a}}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'a}+p_d\\,K_p^{'a}+c'_d\\,K_c^{'a}\\,\\text{dt} = $$"
           equationKeeper("F_a_dr_lt_l_eq", 5, 4)
       } else if (0 > d_0_dr_lt) {
           // var F_a_dr_lt_l_eq = "$$ F_l^{'a} = b\\,E^{'a} = b\\,\\int_{0}^d e^{'a}(t)\\,\\text{dt} = b\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'a}+p_d\\,K_p^{'a}+c'_d\\,K_c^{'a}\\,\\text{dt} = $$"
           equationKeeper("F_a_dr_lt_l_eq", 5, 5)
       }
   }
   
   if (d_0_ud_st >= depth) {
       var F_a_ud_st_l = 0
       // var F_a_ud_st_l_eq = "$$ F_{l,u}^a = $$"
       equationKeeper("F_a_ud_st_l_eq", 5, 1)
       
   } else if (d_0_ud_st < depth && (depth - height) > 0) {
       if ((depth - height) <= d_0_ud_st) {
           // var F_a_ud_st_l_eq = "$$ F_{l,u}^a = b\\,E_u^a = b\\,\\int_{d_{0,u}^a}^d e_u^a(t)\\,\\text{dt} = b\\,\\int_{d_{0,u}^a}^d\,\\gamma\,t\\,K_{\\gamma,u}^a+p_d\\,K_{p,u}^a+c_{u,d}\\,K_{c,u}^a\\,\\text{dt} = $$"
           equationKeeper("F_a_ud_st_l_eq", 5, 2)
       } else if ((depth - height) > d_0_ud_st) {
           // var F_a_ud_st_l_eq = "$$ F_{l,u}^a = b\\,E_u^a = b\\,\\int_{d-h}^d e_u^a(t)\\,\\text{dt} = b\\,\\int_{d-h}^d\,\\gamma\,t\\,K_{\\gamma,u}^a+p_d\\,K_{p,u}^a+c_{u,d}\\,K_{c,u}^a\\,\\text{dt} = $$"
           equationKeeper("F_a_ud_st_l_eq", 5, 3)
       }
   } else if (d_0_ud_st < depth && (depth - height) <= 0) {
       if (0 <= d_0_ud_st) {
           // var F_a_ud_st_l_eq = "$$ F_{l,u}^a = b\\,E_u^a = b\\,\\int_{d_{0,u}^a}^d e_u^a(t)\\,\\text{dt} = b\\,\\int_{d_{0,u}^a}^d\,\\gamma\,t\\,K_{\\gamma,u}^a+p_d\\,K_{p,u}^a+c_{u,d}\\,K_{c,u}^a\\,\\text{dt} = $$"
           equationKeeper("F_a_ud_st_l_eq", 5, 4)
       } else if (0 > d_0_ud_st) {
           // var F_a_ud_st_l_eq = "$$ F_{l,u}^a = b\\,E_u^a = b\\,\\int_{0}^d e_u^a(t)\\,\\text{dt} = b\\,\\int_{0}^d\,\\gamma\,t\\,K_{\\gamma,u}^a+p_d\\,K_{p,u}^a+c_{u,d}\\,K_{c,u}^a\\,\\text{dt} = $$"
           equationKeeper("F_a_ud_st_l_eq", 5, 5)
       }
   }
   
   if (d_0_ud_lt >= depth) {
       var F_a_ud_lt_l = 0
       // var F_a_ud_lt_l_eq = "$$ F_{l,u}^{'a} = $$"
       equationKeeper("F_a_ud_lt_l_eq", 5, 1)
   } else if (d_0_ud_lt < depth && (depth - height) > 0) {
       if ((depth - height) <= d_0_ud_lt) {
           // var F_a_ud_lt_l_eq = "$$ F_{l,u}^{'a} = b\\,E_u^{'a} = b\\,\\int_{d_{0,u}^{'a}}^d e_u^{'a}(t)\\,\\text{dt} = b\\,\\int_{d_{0,u}^{'a}}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'a}+p_d\\,K_{p,u}^{'a}+c'_{u,d}\\,K_{c,u}^{'a}\\,\\text{dt} = $$"
           equationKeeper("F_a_ud_lt_l_eq", 5, 2)
       } else if ((depth - height) > d_0_ud_lt) {
           // var F_a_ud_lt_l_eq = "$$ F_{l,u}^{'a} = b\\,E_u^{'a} = b\\,\\int_{d-h}^d e_u^{'a}(t)\\,\\text{dt} = b\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'a}+p_d\\,K_{p,u}^{'a}+c'_{u,d}\\,K_{c,u}^{'a}\\,\\text{dt} = $$"
           equationKeeper("F_a_ud_lt_l_eq", 5, 3)
       }
   } else if (d_0_ud_lt < depth && (depth - height) <= 0) {
       if (0 <= d_0_ud_lt) {
           // var F_a_ud_lt_l_eq = "$$ F_{l,u}^{'a} = b\\,E_u^{'a} = b\\,\\int_{d_{0,u}^{'a}}^d e_u^{'a}(t)\\,\\text{dt} = b\\,\\int_{d_{0,u}^{'a}}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'a}+p_d\\,K_{p,u}^{'a}+c'_{u,d}\\,K_{c,u}^{'a}\\,\\text{dt} = $$"
           equationKeeper("F_a_ud_lt_l_eq", 5, 4)
       } else if (0 > d_0_ud_lt) {
           // var F_a_ud_lt_l_eq = "$$ F_{l,u}^{'a} = b\\,E_u^{'a} = b\\,\\int_{0}^d e_u^{'a}(t)\\,\\text{dt} = b\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'a}+p_d\\,K_{p,u}^{'a}+c'_{u,d}\\,K_{c,u}^{'a}\\,\\text{dt} = $$"
           equationKeeper("F_a_ud_lt_l_eq", 5, 5)
       }
   }
   
   if (height >= depth) {
       //   var F_p_dr_st_l_eq = "$$ F_l^p = b\\,E^p = b\\,\\int_{0}^d e^p(t)\\,\\text{dt} = b\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma}^p+c_d\\,K_c^p\\,\\text{dt} = $$"
       $('.F_p_dr_st_l_eq2').remove()
   } else if (height < depth) {
       // var F_p_dr_st_l_eq = "$$ F_l^p = b\\,E^p = b\\,\\int_{d-h}^d e^p(t)\\,\\text{dt} = b\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma}^p+c_d\\,K_c^p\\,\\text{dt} = $$"
       $('.F_p_dr_st_l_eq1').remove()
   }
   
   if (height >= depth) {
       // var F_p_dr_lt_l_eq = "$$ F_l^{'p} = b\\,E^{'p} = b\\,\\int_{0}^d e^{'p}(t)\\,\\text{dt} = b\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'p}+c'_d\\,K_c^{'p}\\,\\text{dt} = $$"
       $('.F_p_dr_lt_l_eq2').remove()
      } else if (height < depth) {
       // var F_p_dr_lt_l_eq = "$$ F_l^{'p} = b\\,E^{'p} = b\\,\\int_{d-h}^d e^{'p}(t)\\,\\text{dt} = b\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'p}+c'_d\\,K_c^{'p}\\,\\text{dt} = $$"
       $('.F_p_dr_lt_l_eq1').remove()
   }
   
   if (height >= depth) {
       // var F_p_ud_st_l_eq = "$$ F_{l,u}^p = b\\,E_u^p = b\\,\\int_{0}^d e_u^p(t)\\,\\text{dt} = b\\,\\int_{0}^d\\, \\gamma\\,t\\,K_{\\gamma,u}^p+c_{u,d}\\,K_{c,u}^p\\,\\text{dt} = $$"
       $('.F_p_ud_st_l_eq2').remove()
        } else if (height < depth) {
       // var F_p_ud_st_l_eq = "$$ F_{l,u}^p = b\\,E_u^p = b\\,\\int_{d-h}^d e_u^p(t)\\,\\text{dt} = b\\,\\int_{d-h}^d\\, \\gamma\\,t\\,K_{\\gamma,u}^p+c_{u,d}\\,K_{c,u}^p\\,\\text{dt} = $$"
       $('.F_p_ud_st_l_eq1').remove()
   }
   
   if (height >= depth) {
       //  var F_p_ud_lt_l_eq = "$$ F_{l,u}^{'p = b\\,E_u^{'p} = b\\,\\int_{0}^d e_u^{'p}(t)\\,\\text{dt} = b\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'p}+c'_{u,d}\\,K_{c,u}^{'p}\\,\\text{dt} = $$"
       $('.F_p_ud_lt_l_eq2').remove()
      } else if (height < depth) {
        var F_p_ud_lt_l_eq = "$$ F_{l,u}^{'p = b\\,E_u^{'p} = b\\,\\int_{d-h}^d e_u^{'p}(t)\\,\\text{dt} = b\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'p}+c'_{u,d}\\,K_{c,u}^{'p}\\,\\text{dt} = $$"
        $('.F_p_ud_lt_l_eq1').remove()
      }
   
      if (d_0_dr_st >= depth) {
       var F_a_dr_st_b = 0
       // var F_a_dr_st_b_eq = "$$ F_b^a = $$"
       equationKeeper('F_a_dr_st_b_eq', 5, 1)
   } else if (d_0_dr_st < depth && (depth - height) > 0) {
       if ((depth - height) <= d_0_dr_st) {
           // var F_a_dr_st_b_eq = "$$ F_b^a = l\\,E^a = l\\,\\int_{d_0^a}^d e^a(t)\\,\\text{dt} = l\\,\\int_{d_0^a}^d\\,\\gamma\\,t\\,K_{\\gamma}^a+p_d\\,K_p^a+c_d\\,K_c^a\\,\\text{dt} = $$"
           equationKeeper('F_a_dr_st_b_eq', 5, 2)
       } else if ((depth - height) > d_0_dr_st) {
           // var F_a_dr_st_b_eq = "$$ F_b^a = l\\,E^a = l\\,\\int_{d-h}^d e^a(t)\\,\\text{dt} = l\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma}^a+p_d\\,K_p^a+c_d\\,K_c^a\\,\\text{dt} = $$"
           equationKeeper('F_a_dr_st_b_eq', 5, 3)
       }
   } else if (d_0_dr_st < depth && (depth - height) <= 0) {
       if (0 <= d_0_dr_st) {
           // var F_a_dr_st_b_eq = "$$ F_b^a = l\\,E^a = l\\,\\int_{d_0^a}^d e^a(t)\\,\\text{dt} = l\\,\\int_{d_0^a}^d\\,\\gamma\\,t\\,K_{\\gamma}^a+p_d\\,K_p^a+c_d\\,K_c^a\\,\\text{dt} = $$"
           equationKeeper('F_a_dr_st_b_eq', 5, 4)
       } else if (0 > d_0_dr_st) {
           // var F_a_dr_st_b_eq = "$$ F_b^a = l\\,E^a = l\\,\\int_{0}^d e^a(t)\\,\\text{dt} = l\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma}^a+p_d\\,K_p^a+c_d\\,K_c^a\\,\\text{dt} = $$"
           equationKeeper('F_a_dr_st_b_eq', 5, 5)
       }
   }
   
   if (d_0_dr_lt >= depth) {
       var F_a_dr_lt_b = 0
       // var F_a_dr_lt_b_eq = "$$ F_b^{'a} = $$"
       equationKeeper('F_a_dr_lt_b_eq', 5, 1)
   } else if (d_0_dr_lt < depth && (depth - height) > 0) {
       if ((depth - height) <= d_0_dr_lt) {
           // var F_a_dr_lt_b_eq = "$$ F_b^{'a} = l\\,E^{'a} = l\\,\\int_{d_0^{'a}}^d e^{'a}(t)\\,\\text{dt} = l\\,\\int_{d_0^{'a}}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'a}+p_d\\,K_p^{'a}+c'_d\\,K_c^{'a}\\,\\text{dt} = $$"
           equationKeeper('F_a_dr_lt_b_eq', 5, 2)
       } else if ((depth - height) > d_0_dr_lt) {
           // var F_a_dr_lt_b_eq = "$$ F_b^{'a} = l\\,E^{'a} = l\\,\\int_{d-h}^d e^{'a}(t)\\,\\text{dt} = l\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'a}+p_d\\,K_p^{'a}+c'_d\\,K_c^{'a}\\,\\text{dt} = $$"
           equationKeeper('F_a_dr_lt_b_eq', 5, 3)
       }
   } else if (d_0_dr_lt < depth && (depth - height) <= 0) {
       if (0 <= d_0_dr_lt) {
           // var F_a_dr_lt_b_eq = "$$ F_b^{'a} = l\\,E^{'a} = l\\,\\int_{d_0^{'a}}^d e^{'a}(t)\\,\\text{dt} = l\\,\\int_{d_0^{'a}}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'a}+p_d\\,K_p^{'a}+c'_d\\,K_c^{'a}\\,\\text{dt} = $$"
           equationKeeper('F_a_dr_lt_b_eq', 5, 4)
       } else if (0 > d_0_dr_lt) {
           // var F_a_dr_lt_b_eq = "$$ F_b^{'a} = l\\,E^{'a} = l\\,\\int_{0}^d e^{'a}(t)\\,\\text{dt} = l\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'a}+p_d\\,K_p^{'a}+c'_d\\,K_c^{'a}\\,\\text{dt} = $$"
           equationKeeper('F_a_dr_lt_b_eq', 5, 5)
       }
   }
   
   if (d_0_ud_st >= depth) {
       var F_a_ud_st_b = 0
       // var F_a_ud_st_b_eq = "$$ F_{b,u}^a = $$"
       equationKeeper('F_a_ud_st_b_eq', 5, 1)
   } else if (d_0_ud_st < depth && (depth - height) > 0) {
       if ((depth - height) <= d_0_ud_st) {
           // var F_a_ud_st_b_eq = "$$ F_{b,u}^a = l\\,E_u^a = l\\,\\int_{d_{0,u}^a}^d e_u^a(t)\\,\\text{dt} = l\\,\\int_{d_{0,u}^a}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^a+p_d\\,K_{p,u}^a+c_{u,d}\\,K_{c,u}^a\\,\\text{dt} = $$"
           equationKeeper('F_a_ud_st_b_eq', 5, 2)
       } else if ((depth - height) > d_0_ud_st) {
           // var F_a_ud_st_b_eq = "$$ F_{b,u}^a = l\\,E_u^a = l\\,\\int_{d-h}^d e_u^a(t)\\,\\text{dt} = l\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^a+p_d\\,K_{p,u}^a+c_{u,d}\\,K_{c,u}^a\\,\\text{dt} = $$"
           equationKeeper('F_a_ud_st_b_eq', 5, 3)
       }
   } else if (d_0_ud_st < depth && (depth - height) <= 0) {
       if (0 <= d_0_ud_st) {
           // var F_a_ud_st_b_eq = "$$ F_{b,u}^a = l\\,E_u^a = l\\,\\int_{d_{0,u}^a}^d e_u^a(t)\\,\\text{dt} = l\\,\\int_{d_{0,u}^a}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^a+p_d\\,K_{p,u}^a+c_{u,d}\\,K_{c,u}^a\\,\\text{dt} = $$"
           equationKeeper('F_a_ud_st_b_eq', 5, 4)
       } else if (0 > d_0_ud_st) {
           // var F_a_ud_st_b_eq = "$$ F_{b,u}^a = l\\,E_u^a = l\\,\\int_{0}^d e_u^a(t)\\,\\text{dt} = l\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^a+p_d\\,K_{p,u}^a+c_{u,d}\\,K_{c,u}^a\\,\\text{dt} = $$"
           equationKeeper('F_a_ud_st_b_eq', 5, 5)
       }
   }
   
   if (d_0_ud_lt >= depth) {
       var F_a_ud_lt_b = 0
       // var F_a_ud_lt_b_eq = "$$ F_{b,u}^{'a} = $$"
       equationKeeper('F_a_ud_lt_b_eq', 5, 1)
   } else if (d_0_ud_lt < depth && (depth - height) > 0) {
       if ((depth - height) <= d_0_ud_lt) {
           // var F_a_ud_lt_b_eq = "$$ F_{b,u}^{'a} = l\\,E_u^{'a} = l\\,\\int_{d_{0,u}^{'a}}^d e_u^{'a}(t)\\,\\text{dt} = l\\,\\int_{d_{0,u}^{'a}}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'a}+p_d\\,K_{p,u}^{'a}+c'_{u,d}\\,K_{c,u}^{'a}\\,\\text{dt} = $$"
           equationKeeper('F_a_ud_lt_b_eq', 5, 2)
       } else if ((depth - height) > d_0_ud_lt) {
           // var F_a_ud_lt_b_eq = "$$ F_{b,u}^{'a} = l\\,E_u^{'a} = l\\,\\int_{d-h}^d e_u^{'a}(t)\\,\\text{dt} = l\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'a}+p_d\\,K_{p,u}^{'a}+c'_{u,d}\\,K_{c,u}^{'a}\\,\\text{dt} = $$"
           equationKeeper('F_a_ud_lt_b_eq', 5, 3)
       }
   } else if (d_0_ud_lt < depth && (depth - height) <= 0) {
       if ((depth - height) <= d_0_ud_lt) {
           // var F_a_ud_lt_b_eq = "$$ F_{b,u}^{'a} = l\\,E_u^{'a} = l\\,\\int_{d_{0,u}^{'a}}^d e_u^{'a}(t)\\,\\text{dt} = l\\,\\int_{d_{0,u}^{'a}}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'a}+p_d\\,K_{p,u}^{'a}+c'_{u,d}\\,K_{c,u}^{'a}\\,\\text{dt} = $$"
           equationKeeper('F_a_ud_lt_b_eq', 5, 4)
       } else if ((depth - height) > d_0_ud_lt) {
           // var F_a_ud_lt_b_eq = "$$ F_{b,u}^{'a} = l\\,E_u^{'a} = l\\,\\int_{0}^d e_u^{'a}(t)\\,\\text{dt} = l\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'a}+p_d\\,K_{p,u}^{'a}+c'_{u,d}\\,K_{c,u}^{'a}\\,\\text{dt} = $$"
           equationKeeper('F_a_ud_lt_b_eq', 5, 5)
       }
   }
   
   if (height >= depth) {
       //   var F_p_dr_st_b_eq = "$$ F_b^p = l\\,E^p = l\\,\\int_{0}^d e^p(t)\\,\\text{dt} = l\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma}^p+c_d\\,K_c^p\\,\\text{dt} = $$"
       equationKeeper('F_p_dr_st_b_eq', 2, 1)
       //  var F_p_dr_lt_b_eq = "$$ F_b^{'p} = l\\,E^{'p} = l\\,\\int_{0}^d e^{'p}(t)\\,\\text{dt} = l\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'p}+c'_d\\,K_c^{'p}\\,\\text{dt} = $$"
       equationKeeper('F_p_dr_lt_b_eq', 2, 1)
       // var F_p_ud_st_b_eq = "$$ F_{b,u}^p = l\\,E_u^p = l\\,\\int_{0}^d e_u^p(t)\\,\\text{dt} = l\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^p+c_{u,d}\\,K_{c,u}^p\\,\\text{dt} = $$"
       equationKeeper('F_p_ud_st_b_eq', 2, 1)
       var F_p_ud_lt_b_eq = "$$ F_{b,u}^{'p} = l\\,E_u^{'p} = l\\,\\int_{0}^d e_u^{'p}(t)\\,\\text{dt} = l\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'p}+c'_{u,d}\\,K_{c,u}^{'p}\\,\\text{dt} = $$"
       equationKeeper('F_p_ud_lt_b_eq', 2, 1)
   } else if (height < depth) {
       // var F_p_dr_st_b_eq = "$$ F_b^p = l\\,E^p = l\\,\\int_{d-h}^d e^p(t)\\,\\text{dt} = l\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma}^p+c_d\\,K_c^p\\,\\text{dt} = $$"
       equationKeeper('F_p_dr_st_b_eq', 2, 2)
       // var F_p_dr_lt_b_eq = "$$ F_b^{'p} = l\\,E^{'p} = l\\,\\int_{d-h}^d e^{'p}(t)\\,\\text{dt} = l\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'p}+c'_d\\,K_c^{'p}\\,\\text{dt} = $$"
       equationKeeper('F_p_dr_lt_b_eq', 2, 2)
       // var F_p_ud_st_b_eq = "$$ F_{b,u}^p = l\\,E_u^p = l\\,\\int_{d-h}^d e_u^p(t)\\,\\text{dt} = l\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^p+c_{u,d}\\,K_{c,u}^p\\,\\text{dt} = $$"
       equationKeeper('F_p_ud_st_b_eq', 2, 2)
       // var F_p_ud_lt_b_eq = "$$ F_{b,u}^{'p} = l\\,E_u^{'p} = l\\,\\int_{d-h}^d e_u^{'p}(t)\\,\\text{dt} = l\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'p}+c'_{u,d}\\,K_{c,u}^{'p}\\,\\text{dt} = $$"
       equationKeeper('F_p_ud_lt_b_eq', 2, 2)
   }
   
   
   
   if (d_0_dr_st >= depth) {
       var F_a_dr_st_r_eq = "$$ F_r^a = $$"
       equationKeeper('F_a_dr_st_r_eq', 5, 1)
   } else if (d_0_dr_st < depth && (depth - height) > 0) {
       if ((depth - height) <= d_0_dr_st) {
           var F_a_dr_st_r_eq = "$$ F_r^a = \\frac{\\pi\\,r}{2}\\,E^a = \\frac{\\pi\\,r}{2}\\,\\int_{d_0^a}^d e^a(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{d_0^a}^d\\,\\gamma\\,t\\,K_{\\gamma}^a+p_d\\,K_p^a+c_d\\,K_c^a\\,\\text{dt} = $$"
           equationKeeper('F_a_dr_st_r_eq', 5, 2)
       } else if ((depth - height) > d_0_dr_st) {
           var F_a_dr_st_r_eq = "$$ F_r^a = \\frac{\\pi\\,r}{2}\\,E^a = \\frac{\\pi\\,r}{2}\\,\\int_{d-h}^d e^a(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma}^a+p_d\\,K_p^a+c_d\\,K_c^a\\,\\text{dt} = $$"
           equationKeeper('F_a_dr_st_r_eq', 5, 3)
       }
   } else if (d_0_dr_st < depth && (depth - height) <= 0) {
       if (0 <= d_0_dr_st) {
           var F_a_dr_st_r_eq = "$$ F_r^a = \\frac{\\pi\\,r}{2}\\,E^a = \\frac{\\pi\\,r}{2}\\,\\int_{d_0^a}^d e^a(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{d_0^a}^d\\,\\gamma\\,t\\,K_{\\gamma}^a+p_d\\,K_p^a+c_d\\,K_c^a\\,\\text{dt} = $$"
           equationKeeper('F_a_dr_st_r_eq', 5, 4)
       } else if (0 > d_0_dr_st) {
           var F_a_dr_st_r_eq = "$$ F_r^a = \\frac{\\pi\\,r}{2}\\,E^a = \\frac{\\pi\\,r}{2}\\,\\int_{0}^d e^a(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma}^a+p_d\\,K_p^a+c_d\\,K_c^a\\,\\text{dt} = $$"
           equationKeeper('F_a_dr_st_r_eq', 5, 5)
       }
   }
   
   
   if (d_0_dr_lt >= depth) {
       // var F_a_dr_lt_r_eq = "$$ F_r^{'a} = $$"
       equationKeeper('F_a_dr_lt_r_eq', 5, 1)
   } else if (d_0_dr_lt < depth && (depth - height) > 0) {
       if ((depth - height) <= d_0_dr_lt) {
           // var F_a_dr_lt_r_eq = "$$ F_r^{'a} = \\frac{\\pi\\,r}{2}\\,E^{'a} = \\frac{\\pi\\,r}{2}\\,\\int_{d_0^{'a}}^d e^{'a}(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{d_0^{'a}}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'a}+p_d\\,K_p^{'a}+c'_d\\,K_c^{'a}\\,\\text{dt} = $$"
           equationKeeper('F_a_dr_lt_r_eq', 5, 2)
       } else if ((depth - height) > d_0_dr_lt) {
           // var F_a_dr_lt_r_eq = "$$ F_r^{'a} = \\frac{\\pi\\,r}{2}\\,E^{'a} = \\frac{\\pi\\,r}{2}\\,\\int_{d-h}^d e^{'a}(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'a}+p_d\\,K_p^{'a}+c'_d\\,K_c^{'a}\\,\\text{dt} = $$"
           equationKeeper('F_a_dr_lt_r_eq', 5, 3)
       }
   } else if (d_0_dr_lt < depth && (depth - height) <= 0) {
       if (0 <= d_0_dr_lt) {
           // var F_a_dr_lt_r_eq = "$$ F_r^{'a} = \\frac{\\pi\\,r}{2}\\,E^{'a} = \\frac{\\pi\\,r}{2}\\,\\int_{d_0^{'a}}^d e^{'a}(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{d_0^{'a}}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'a}+p_d\\,K_p^{'a}+c'_d\\,K_c^{'a}\\,\\text{dt} = $$"
           equationKeeper('F_a_dr_lt_r_eq', 5, 4)
       } else if (0 > d_0_dr_lt) {
           // var F_a_dr_lt_r_eq = "$$ F_r^{'a} = \\frac{\\pi\\,r}{2}\\,E^{'a} = \\frac{\\pi\\,r}{2}\\,\\int_{0}^d e^{'a}(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'a}+p_d\\,K_p^{'a}+c'_d\\,K_c^{'a}\\,\\text{dt} = $$"
           equationKeeper('F_a_dr_lt_r_eq', 5, 5)
       }
   }
   
   if (d_0_ud_st >= depth) {
       // var F_a_ud_st_r_eq = "$$ F_{r,u}^a = $$"
       
       equationKeeper('F_a_ud_st_r_eq', 5, 1)
   } else if (d_0_ud_st < depth && (depth - height) > 0) {
       if ((depth - height) <= d_0_ud_st) {
           // var F_a_ud_st_r_eq = "$$ F_{r,u}^a = \\frac{\\pi\\,r}{2}\\,E_u^a = \\frac{\\pi\\,r}{2}\\,\\int_{d_{0,u}^a}^d e_u^a(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{d_{0,u}^a}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^a+p_d\\,K_{p,u}^a+c_{u,d}\\,K_{c,u}^a\\,\\text{dt} = $$"
           equationKeeper('F_a_ud_st_r_eq', 5, 2)
       } else if ((depth - height) > d_0_ud_st) {
           // var F_a_ud_st_r_eq = "$$ F_{r,u}^a = \\frac{\\pi\\,r}{2}\\,E_u^a = \\frac{\\pi\\,r}{2}\\,\\int_{d-h}^d e_u^a(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^a+p_d\\,K_{p,u}^a+c_{u,d}\\,K_{c,u}^a\\,\\text{dt} = $$"
           equationKeeper('F_a_ud_st_r_eq', 5, 3)
       }
   } else if (d_0_ud_st < depth && (depth - height) <= 0) {
       if (0 <= d_0_ud_st) {
           // var F_a_ud_st_r_eq = "$$ F_{r,u}^a = \\frac{\\pi\\,r}{2}\\,E_u^a = \\frac{\\pi\\,r}{2}\\,\\int_{d_{0,u}^a}^d e_u^a(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{d_{0,u}^a}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^a+p_d\\,K_{p,u}^a+c_{u,d}\\,K_{c,u}^a\\,\\text{dt} = $$"
           equationKeeper('F_a_ud_st_r_eq', 5, 4)
       } else if (0 > d_0_ud_st) {
           // var F_a_ud_st_r_eq = "$$ F_{r,u}^a = \\frac{\\pi\\,r}{2}\\,E_u^a = \\frac{\\pi\\,r}{2}\\,\\int_{0}^d e_u^a(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^a+p_d\\,K_{p,u}^a+c_{u,d}\\,K_{c,u}^a\\,\\text{dt} = $$"
           equationKeeper('F_a_ud_st_r_eq', 5, 5)
       }
   }
   
   if (d_0_ud_lt >= depth) {
       // var F_a_ud_lt_r_eq = "$$ F_{r,u}^{'a} = $$"
       equationKeeper('F_a_ud_lt_r_eq', 5, 1)
   } else if (d_0_ud_lt < depth && (depth - height) > 0) {
       if ((depth - height) <= d_0_ud_lt) {
           // var F_a_ud_lt_r_eq = "$$ F_{r,u}^{'a} = \\frac{\\pi\\,r}{2}\\,E_u^{'a} = \\frac{\\pi\\,r}{2}\\,\\int_{d_{0,u}^{'a}}^d e_u^{'a}(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{d_{0,u}^{'a}}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'a}+p_d\\,K_{p,u}^{'a}+c'_{u,d}\\,K_{c,u}^{'a}\\,\\text{dt} = $$"
           equationKeeper('F_a_ud_lt_r_eq', 5, 2)
       } else if ((depth - height) > d_0_ud_lt) {
           // var F_a_ud_lt_r_eq = "$$ F_{r,u}^{'a} = \\frac{\\pi\\,r}{2}\\,E_u^{'a} = \\frac{\\pi\\,r}{2}\\,\\int_{d-h}^d e_u^{'a}(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'a}+p_d\\,K_{p,u}^{'a}+c'_{u,d}\\,K_{c,u}^{'a}\\,\\text{dt} = $$"
           equationKeeper('F_a_ud_lt_r_eq', 5, 3)
       }
   } else if (d_0_ud_lt < depth && (depth - height) <= 0) {
       if (0 <= d_0_ud_lt) {
           // var F_a_ud_lt_r_eq = "$$ F_{r,u}^{'a} = \\frac{\\pi\\,r}{2}\\,E_u^{'a} = \\frac{\\pi\\,r}{2}\\,\\int_{d_{0,u}^{'a}}^d e_u^{'a}(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{d_{0,u}^{'a}}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'a}+p_d\\,K_{p,u}^{'a}+c'_{u,d}\\,K_{c,u}^{'a}\\,\\text{dt} = $$"
           equationKeeper('F_a_ud_lt_r_eq', 5, 4)
       } else if (0 > d_0_ud_lt) {
           // var F_a_ud_lt_r_eq = "$$ F_{r,u}^{'a} = \\frac{\\pi\\,r}{2}\\,E_u^{'a} = \\frac{\\pi\\,r}{2}\\,\\int_{0}^d e_u^{'a}(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'a}+p_d\\,K_{p,u}^{'a}+c'_{u,d}\\,K_{c,u}^{'a}\\,\\text{dt} = $$"
           equationKeeper('F_a_ud_lt_r_eq', 5, 5)
       }
   }
   
   if (height >= depth) {
       // var F_p_dr_st_r_eq = "$$ F_r^p = \\frac{\\pi\\,r}{2}\\,E^p = \\frac{\\pi\\,r}{2}\\,\\int_{0}^d e^p(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma}^p+c_d\\,K_c^p\\,\\text{dt} = $$"
       equationKeeper('F_p_dr_st_r_eq', 2, 1)
       //   var F_p_dr_lt_r_eq = "$$ F_r^{'p} = \\frac{\\pi\\,r}{2}\\,E^{'p} = \\frac{\\pi\\,r}{2}\\,\\int_{0}^d e^{'p}(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'p}+c'_d\,K_c^{'p}\\,\\text{dt} = $$"
       equationKeeper('F_p_dr_lt_r_eq', 2, 1)
       //   var F_p_ud_st_r_eq = "$$ F_{r,u}^p = \\frac{\\pi\\,r}{2}\\,E_u^p = \\frac{\\pi\\,r}{2}\\,\\int_{0}^d e_u^p(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^p+c_{u,d}\\,K_{c,u}^p\\,\\text{dt} = $$"
       equationKeeper('F_p_ud_st_r_eq', 2, 1)
       //   var F_p_ud_lt_r_eq = "$$ F_{r,u}^{'p} = \\frac{\\pi\\,r}{2}\\,E_u^{'p} = \\frac{\\pi\\,r}{2}\\,\\int_{0}^d e_u^{'p}(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{0}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'p}+c'_{u,d}\\,K_{c,u}^{'p}\\,\\text{dt} = $$"
       equationKeeper('F_p_ud_lt_r_eq', 2, 1)
   } else if (height < depth) {
       //   var F_p_dr_st_r_eq = "$$ F_r^p = \\frac{\\pi\\,r}{2}\\,E^p = \\frac{\\pi\\,r}{2}\\,\\int_{d-h}^d e^p(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma}^p+c_d\\,K_c^p\\,\\text{dt} = $$"
       equationKeeper('F_p_dr_st_r_eq', 2, 2)
       // var F_p_dr_lt_r_eq = "$$ F_r^{'p} = \\frac{\\pi\\,r}{2}\\,E^{'p} = \\frac{\\pi\\,r}{2}\\,\\int_{d-h}^d e^{'p}(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma}^{'p}+c'_d\,K_c^{'p}\\,\\text{dt} = $$"
       equationKeeper('F_p_dr_lt_r_eq', 2, 2)
       //  var F_p_ud_st_r_eq = "$$ F_{r,u}^p = \\frac{\\pi\\,r}{2}\\,E_u^p = \\frac{\\pi\\,r}{2}\\,\\int_{d-h}^d e_u^p(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^p+c_{u,d}\\,K_{c,u}^p\\,\\text{dt} = $$"
       equationKeeper('F_p_ud_st_r_eq', 2, 2)
       // var F_p_ud_lt_r_eq = "$$ F_{r,u}^{'p} = \\frac{\\pi\\,r}{2}\\,E_u^{'p} = \\frac{\\pi\\,r}{2}\\,\\int_{d-h}^d e_u^{'p}(t)\\,\\text{dt} = \\frac{\\pi\\,r}{2}\\,\\int_{d-h}^d\\,\\gamma\\,t\\,K_{\\gamma,u}^{'p}+c'_{u,d}\\,K_{c,u}^{'p}\\,\\text{dt} = $$"
       equationKeeper('F_p_ud_lt_r_eq', 2, 2)
   }
   
   if (F_p_dr_st_l >= Math.abs(hl_length) + F_a_dr_st_l) {
       // var h_res_dr_st_l_eq = "$$ H_{res,l} = $$"
       equationKeeper("h_res_dr_st_l_eq", 3, 1)
   } else {
       if (hl_length < 0) {
           // var h_res_dr_st_l_eq = "$$ H_{res,l} = H_l - F_l^a + F_l^p = $$"
           equationKeeper("h_res_dr_st_l_eq", 3, 2)
       } else if (hl_length >= 0) {
           // var h_res_dr_st_l_eq = "$$ H_{res,l} = H_l + F_l^a - F_l^p = $$"
           equationKeeper("h_res_dr_st_l_eq", 3, 3)
       }
   }
   
   if (F_p_dr_lt_l >= Math.abs(hl_length) + F_a_dr_lt_l) {
       // var h_res_dr_lt_l_eq = "$$ H'_{res,l} = $$"
       equationKeeper("h_res_dr_lt_l_eq", 3, 1)
   } else {
       if (hl_length < 0) {
           var h_res_dr_lt_l_eq = "$$ H'_{res,l} = H_l - F_l^{'a} + F_l^{'p} = $$"
           equationKeeper("h_res_dr_lt_l_eq", 3, 2)
       } else if (hl_length >= 0) {
           var h_res_dr_lt_l_eq = "$$ H'_{res,l} = H_l + F_l^{'a} - F_l^{'p} = $$"
           equationKeeper("h_res_dr_lt_l_eq", 3, 3)
       }
   }
   
   if (F_p_ud_st_l >= Math.abs(hl_length) + F_a_ud_st_l) {
       // var h_res_ud_st_l_eq = "$$ H_{res,u,l} = $$"
       equationKeeper("h_res_ud_st_l_eq", 3, 1)
   } else {
       if (hl_length < 0) {
           // var h_res_ud_st_l_eq = "$$ H_{res,u,l} = H_l - F_{l,u}^a + F_{l,u}^p = $$"
           equationKeeper("h_res_ud_st_l_eq", 3, 2)
       } else if (hl_length >= 0) {
           // var h_res_ud_st_l_eq = "$$ H_{res,u,l} = H_l + F_{l,u}^a - F_{l,u}^p = $$"
           equationKeeper("h_res_ud_st_l_eq", 3, 3)
       }
   }
   
   if (F_p_ud_lt_l >= Math.abs(hl_length) + F_a_ud_lt_l) {
       // var h_res_ud_lt_l_eq = "$$ H'_{res,u,l} = $$"
       equationKeeper("h_res_ud_lt_l_eq", 3, 1)
   } else {
       if (hl_length < 0) {
           // var h_res_ud_lt_l_eq = "$$ H'_{res,u,l} = H_l - F_{l,u}^{'a} + F_{l,u}^{'p} = $$"
           equationKeeper("h_res_ud_lt_l_eq", 3, 2)
       } else if (hl_length >= 0) {
           // var h_res_ud_lt_l_eq = "$$ H'_{res,u,l} = H_l + F_{l,u}^{'a} - F_{l,u}^{'p} = $$"
           equationKeeper("h_res_ud_lt_l_eq", 3, 3)
       }
   }
   
   if (F_p_dr_st_b >= Math.abs(hl_width) + F_a_dr_st_b) {
       // var h_res_dr_st_b_eq = "$$ H_{res,b} = $$"
       equationKeeper("h_res_dr_st_b_eq", 3, 1)
   } else {
       if (hl_width < 0) {
           // var h_res_dr_st_b_eq = "$$ H_{res,b} = H_b - F_b^a + F_b^p = $$"
           equationKeeper("h_res_dr_st_b_eq", 3, 2)
       } else if (hl_width >= 0) {
           // var h_res_dr_st_b_eq = "$$ H_{res,b} = H_b + F_b^a - F_b^p = $$"
           equationKeeper("h_res_dr_st_b_eq", 3, 3)
       }
   }
   
   if (F_p_dr_lt_b >= Math.abs(hl_width) + F_a_dr_lt_b) {
       // var h_res_dr_lt_b_eq = "$$ H'_{res,b} = $$"
       equationKeeper("h_res_dr_lt_b_eq", 3, 1)
   } else {
       if (hl_width < 0) {
           // var h_res_dr_lt_b_eq = "$$ H'_{res,b} = H_b - F_b^{'a} + F_b^{'p} = $$"
           equationKeeper("h_res_dr_lt_b_eq", 3, 2)
       } else if (hl_width >= 0) {
           // var h_res_dr_lt_b_eq = "$$ H'_{res,b} = H_b + F_b^{'a} - F_b^{'p} = $$"
           equationKeeper("h_res_dr_lt_b_eq", 3, 3)
       }
   }
   
   if (F_p_ud_st_b >= Math.abs(hl_width) + F_a_ud_st_b) {
       // var h_res_ud_st_b_eq = "$$ H_{res,u,b} = $$"
       equationKeeper("h_res_ud_st_b_eq", 3, 1)
   } else {
       if (hl_width < 0) {
           // var h_res_ud_st_b_eq = "$$ H_{res,u,b} = H_b - F_{b,u}^a + F_{b,u}^p = $$"
           equationKeeper("h_res_ud_st_b_eq", 3, 2)
       } else if (hl_width >= 0) {
           // var h_res_ud_st_b_eq = "$$ H_{res,u,b} = H_b + F_{b,u}^a - F_{b,u}^p = $$"
           equationKeeper("h_res_ud_st_b_eq", 3, 3)
       }
   }
   
   if (F_p_ud_lt_b >= Math.abs(hl_width) + F_a_ud_lt_b) {
       // var h_res_ud_lt_b_eq = "$$ H'_{res,u,b} = $$"
       equationKeeper("h_res_ud_lt_b_eq", 3, 1)
   } else {
       if (hl_width < 0) {
           // var h_res_ud_lt_b_eq = "$$ H'_{res,u,b} = H_b - F_{b,u}^{'a} + F_{b,u}^{'p} = $$"
           equationKeeper("h_res_ud_lt_b_eq", 3, 2)
       } else if (hl_width >= 0) {
           // var h_res_ud_lt_b_eq = "$$ H'_{res,u,b} = H_b + F_{b,u}^{'a} - F_{b,u}^{'p} = $$"
           equationKeeper("h_res_ud_lt_b_eq", 3, 3)
       }
   }
   
   if (F_p_dr_st_r >= Math.abs(hl_length) + F_a_dr_st_r) {
       var h_res_dr_st_rl_eq = "$$ H_{res,r,l} = $$"
   } else {
       if (hl_length < 0) {
           var h_res_dr_st_rl_eq = "$$ H_{res,r,l} = H_l - F_r^a + F_r^p = $$"
       } else if (hl_length >= 0) {
           var h_res_dr_st_rl_eq = "$$ H_{res,r,l} = H_l + F_r^a - F_r^p = $$"
       }
   }
   
   if (F_p_dr_lt_r >= Math.abs(hl_length) + F_a_dr_lt_r) {
       var h_res_dr_lt_rl_eq = "$$ H'_{res,r,l} = $$"
   } else {
       if (hl_length < 0) {
           var h_res_dr_lt_rl_eq = "$$ H'_{res,r,l} = H_l - F_r^{'a} + F_r^{'p} = $$"
       } else if (hl_length >= 0) {
           var h_res_dr_lt_rl_eq = "$$ H'_{res,r,l} = H_l + F_r^{'a} - F_r^{'p} = $$"
       }
   }
   
   if (F_p_ud_st_r >= Math.abs(hl_length) + F_a_ud_st_r) {
       var h_res_ud_st_rl_eq = "$$ H_{res,u,r,l} = $$"
   } else {
       if (hl_length < 0) {
           var h_res_ud_st_rl_eq = "$$ H_{res,u,r,l} = H_l - F_{r,u}^a + F_{r,u}^p = $$"
       } else if (hl_length >= 0) {
           var h_res_ud_st_rl_eq = "$$ H_{res,u,r,l} = H_l + F_{r,u}^a - F_{r,u}^p = $$"
       }
   }
   
   if (F_p_ud_lt_r >= Math.abs(hl_length) + F_a_ud_lt_r) {
       var h_res_ud_lt_rl_eq = "$$ H'_{res,u,r,l} = $$"
   } else {
       if (hl_length < 0) {
           var h_res_ud_lt_rl_eq = "$$ H'_{res,u,r,l} = H_l - F_{r,u}^{'a} + F_{r,u}^{'p} = $$"
       } else if (hl_length >= 0) {
           var h_res_ud_lt_rl_eq = "$$ H'_{res,u,r,l} = H_l + F_{r,u}^{'a} - F_{r,u}^{'p} = $$"
       }
   }
   
   if (F_p_dr_st_r >= Math.abs(hl_width) + F_a_dr_st_r) {
       var h_res_dr_st_rb_eq = "$$ H_{res,r,b} = $$"
   } else {
       if (hl_width < 0) {
           var h_res_dr_st_rb_eq = "$$ H_{res,r,b} = H_b - F_r^a + F_r^p = $$"
       } else if (hl_width >= 0) {
           var h_res_dr_st_rb_eq = "$$ H_{res,r,b} = H_b + F_r^a - F_r^p = $$"
       }
   }
   
   if (F_p_dr_lt_r >= Math.abs(hl_width) + F_a_dr_lt_r) {
       var h_res_dr_lt_rb_eq = "$$ H'_{res,r,b} = $$"
   } else {
       if (hl_width < 0) {
           var h_res_dr_lt_rb_eq = "$$ H'_{res,r,b} = H_b - F_r^{'a} + F_r^{'p} = $$"
       } else if (hl_width >= 0) {
           var h_res_dr_lt_rb_eq = "$$ H'_{res,r,b} = H_b + F_r^{'a} - F_r^{'p} = $$"
       }
   }
   
   if (F_p_ud_st_r >= Math.abs(hl_width) + F_a_ud_st_r) {
       var h_res_ud_st_rb_eq = "$$ H_{res,u,r,b} = $$"
   } else {
       if (hl_width < 0) {
           var h_res_ud_st_rb_eq = "$$ H_{res,u,r,b} = H_b - F_{r,u}^a + F_{r,u}^p = $$"
       } else if (hl_width >= 0) {
           var h_res_ud_st_rb_eq = "$$ H_{res,u,r,b} = H_b + F_{r,u}^a - F_{r,u}^p = $$"
       }
   }
   
   if (F_p_ud_lt_r >= Math.abs(hl_width) + F_a_ud_lt_r) {
       var h_res_ud_lt_rb_eq = "$$ H'_{res,u,r,b} = $$"
   } else {
       if (hl_width < 0) {
           var h_res_ud_lt_rb_eq = "$$ H'_{res,u,r,b} = H_b - F_{r,u}^{'a} + F_{r,u}^{'p} = $$"
       } else if (hl_width >= 0) {
           var h_res_ud_lt_rb_eq = "$$ H'_{res,u,r,b} = H_b + F_{r,u}^{'a} - F_{r,u}^{'p} = $$"
       }
   }
   
   
   
   if (point_foundation_shape == 'rectangular') {
        // var H_res_dr_st_eq = "$$ H_{res} = \\sqrt{H_{res,l}^2 + H_{res,b}^2} = $$"
        equationKeeper("H_res_dr_st_eq", 2, 1)
   
        // var H_res_dr_lt_eq = "$$ H'_{res} = \\sqrt{H_{res,l}^{'2} + H_{res,b}^{'2}} = $$"
        equationKeeper("H_res_dr_lt_eq", 2, 1)
    
        // var H_res_ud_st_eq = "$$ H_{res,u} = \\sqrt{H_{res,u,l}^2 + H_{res,u,b}^2} = $$"
        equationKeeper("H_res_ud_st_eq", 2, 1)
    
        // var H_res_ud_lt_eq = "$$ H'_{res,u} = \\sqrt{H_{res,u,l}^{'2} + H_{res,u,b}^{'2}} = $$"
        equationKeeper("H_res_ud_lt_eq", 2, 2)
   
   } else if (point_foundation_shape == 'circular') {
        // var H_res_dr_st_eq = "$$ H_{res} = \\sqrt{H_{res,r,l}^2 + H_{res,r,b}^2} = $$"
        equationKeeper("H_res_dr_st_eq", 2, 2)
   
        // var H_res_dr_lt_eq = "$$ H'_{res} = \\sqrt{H_{res,r,l}^{'2} + H_{res,r,b}^{'2}} = $$"
        equationKeeper("H_res_dr_lt_eq", 2, 2)
    
        // var H_res_ud_st_eq = "$$ H_{res,u} = \\sqrt{H_{res,u,r,l}^2 + H_{res,u,r,b}^2} = $$"
        equationKeeper("H_res_ud_st_eq", 2, 2)
    
        // var H_res_ud_lt_eq = "$$ H'_{res,u} = \\sqrt{H_{res,u,r,l}^{'2} + H_{res,u,r,b}^{'2}} = $$"
        equationKeeper("H_res_ud_lt_eq", 2, 2)
   }
       var H_res_both_eq = "$$ H_{res} = \\max\\left\\{\\begin{matrix} H_{res} \\\\ H'_{res} \\\\ H_{res,u} \\\\ H'_{res,u} \\end{matrix}\\right. = $$"
       var H_res_drained_eq = "$$ H_{res} = \\max\\left\\{\\begin{matrix} H_{res} \\\\ H'_{res} \\end{matrix}\\right. =  $$"
       var H_res_undrained_eq = "$$ H_{res} = \\max\\left\\{\\begin{matrix} H_{res,u} \\\\ H'_{res,u} \\end{matrix}\\right. = $$"
   
       if (d_0_dr_st >= depth) {
           var h_cg_a_dr_st = 0
           // var h_cg_a_dr_st_eq = "$$ d_0^a \\geq d \\rightarrow h^a = $$"
           equationKeeper("h_cg_a_dr_st_eq", 5, 1)
       } else if (d_0_dr_st < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_dr_st) {
               // var h_cg_a_dr_st_eq = "$$ h^a = d-\\left(\\frac{1}{E^a} \\int_{d_0^a}^d t\\,e^a(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_a_dr_st_eq", 5, 2)
           } else if ((depth - height) > d_0_dr_st) {
               // var h_cg_a_dr_st_eq = "$$ h^a = d-\\left(\\frac{1}{E^a} \\int_{d-h}^d t\\,e^a(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_a_dr_st_eq", 5, 3)
           }
       } else if (d_0_dr_st < depth && (depth - height) <= 0) {
           if (0 <= d_0_dr_st) {
               // var h_cg_a_dr_st_eq = "$$ h^a = d-\\left(\\frac{1}{E^a} \\int_{d_0^a}^d t\\,e^a(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_a_dr_st_eq", 5, 4)
           } else if (0 > d_0_dr_st) {
               // var h_cg_a_dr_st_eq = "$$ h^a = d-\\left(\\frac{1}{E^a} \\int_{0}^d t\\,e^a(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_a_dr_st_eq", 5, 5)
           }
       }
   
       if (d_0_dr_lt >= depth) {
           var h_cg_a_dr_lt = 0
           // var h_cg_a_dr_lt_eq = "$$ d_0^{'a} \\geq d \\rightarrow h^{'a} = $$"
           equationKeeper("h_cg_a_dr_lt_eq", 5, 1)
       } else if (d_0_dr_lt < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_dr_lt) {
               // var h_cg_a_dr_lt_eq = "$$ h^{'a} = d-\\left(\\frac{1}{E^{'a}} \\int_{d_0^{'a}}^d t\\,e^{'a}(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_a_dr_lt_eq", 5, 2)
           } else if ((depth - height) > d_0_dr_lt) {
               // var h_cg_a_dr_lt_eq = "$$ h^{'a} = d-\\left(\\frac{1}{E^{'a}} \\int_{d-h}^d t\\,e^{'a}(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_a_dr_lt_eq", 5, 3)
           }
       } else if (d_0_dr_lt < depth && (depth - height) <= 0) {
           if (0 <= d_0_dr_lt) {
               // var h_cg_a_dr_lt_eq = "$$ h^{'a} = d-\\left(\\frac{1}{E^{'a}} \\int_{d_0^{'a}}^d t\\,e^{'a}(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_a_dr_lt_eq", 5, 4)
           } else if (0 > d_0_dr_lt) {
               // var h_cg_a_dr_lt_eq = "$$ h^{'a} = d-\\left(\\frac{1}{E^{'a}} \\int_{0}^d t\\,e^{'a}(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_a_dr_lt_eq", 5, 5)
           }
       }
   
       if (d_0_ud_st >= depth) {
           var h_cg_a_ud_st = 0
           // var h_cg_a_ud_st_eq = "$$ d_{0,u}^a \\geq d \\rightarrow h_u^a = $$"
           equationKeeper("h_cg_a_ud_st_eq", 5, 1)
       } else if (d_0_ud_st < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_ud_st) {
               // var h_cg_a_ud_st_eq = "$$ h_u^a = d-\\left(\\frac{1}{E_u^a} \\int_{d_{0,u}^a}^d t\\,e_u^a(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_a_ud_st_eq", 5, 2)
           } else if ((depth - height) > d_0_ud_st) {
               // var h_cg_a_ud_st_eq = "$$ h_u^a = d-\\left(\\frac{1}{E_u^a} \\int_{d-h}^d t\\,e_u^a(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_a_ud_st_eq", 5, 3)
           }
       } else if (d_0_ud_st < depth && (depth - height) <= 0) {
           if (0 <= d_0_ud_st) {
               // var h_cg_a_ud_st_eq = "$$ h_u^a = d-\\left(\\frac{1}{E_u^a} \\int_{d_{0,u}^a}^d t\\,e_u^a(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_a_ud_st_eq", 5, 4)
           } else if (0 > d_0_ud_st) {
               // var h_cg_a_ud_st_eq = "$$ h_u^a = d-\\left(\\frac{1}{E_u^a} \\int_{0}^d t\\,e_u^a(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_a_ud_st_eq", 5, 5)
           }
       }
   
       if (d_0_ud_lt >= depth) {
           var h_cg_a_ud_lt = 0
           // var h_cg_a_ud_lt_eq = "$$ d_{0,u}^{'a} \\geq d \\rightarrow h_u^{'a} = $$"
           equationKeeper("h_cg_a_ud_lt_eq", 5, 1)
       } else if (d_0_ud_lt < depth && (depth - height) > 0) {
           if ((depth - height) <= d_0_ud_lt) {
               // var h_cg_a_ud_lt_eq = "$$ h_u^{'a} = d-\\left(\\frac{1}{E_u^{'a}} \\int_{d_{0,u}^{'a}}^d t\\,e_u^{'a}(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_a_ud_lt_eq", 5, 2)
           } else if ((depth - height) > d_0_ud_lt) {
               // var h_cg_a_ud_lt_eq = "$$ h_u^{'a} = d-\\left(\\frac{1}{E_u^{'a}} \\int_{d-h}^d t\\,e_u^{'a}(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_a_ud_lt_eq", 5, 3)
           }
       } else if (d_0_ud_lt < depth && (depth - height) <= 0) {
           if (0 <= d_0_ud_lt) {
               // var h_cg_a_ud_lt_eq = "$$ h_u^{'a} = d-\\left(\\frac{1}{E_u^{'a}} \\int_{d_{0,u}^{'a}}^d t\\,e_u^{'a}(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_a_ud_lt_eq", 5, 4)
           } else if (0 > d_0_ud_lt) {
               // var h_cg_a_ud_lt_eq = "$$ h_u^{'a} = d-\\left(\\frac{1}{E_u^{'a}} \\int_{0}^d t\\,e_u^{'a}(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_a_ud_lt_eq", 5, 5)
           }
       }
   
       if (depth ==0) {
           var h_cg_p_dr_st = 0
           // var h_cg_p_dr_st_eq = "$$ d=0 \\rightarrow h^p = $$"
           equationKeeper("h_cg_p_dr_st_eq", 3, 1)
           var h_cg_p_dr_lt = 0
           // var h_cg_p_dr_lt_eq = "$$ d=0 \\rightarrow h^{'p} = $$"
           equationKeeper("h_cg_p_dr_lt_eq", 3, 1)
           var h_cg_p_ud_st = 0
           // var h_cg_p_ud_st_eq = "$$ d=0 \\rightarrow h_u^{p} = $$"
           equationKeeper("h_cg_p_ud_st_eq", 3, 1)
           var h_cg_p_ud_lt = 0
           // var h_cg_p_ud_lt_eq = "$$ d=0 \\rightarrow h_u^{'p} = $$"
           equationKeeper("h_cg_p_ud_lt_eq", 3, 1)
       } else if (depth > 0) {
           if (height >= depth) {
               // var h_cg_p_dr_st_eq = "$$ h^p = d-\\left(\\frac{1}{E^p} \\int_{0}^d t\\,e^p(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_p_dr_st_eq", 3, 2)
               // var h_cg_p_dr_lt_eq = "$$ h^{'p} = d-\\left(\\frac{1}{E^{'p}} \\int_{0}^d t\\,e^{'p}(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_p_dr_lt_eq", 3, 2)
               // var h_cg_p_ud_st_eq = "$$ h_u^p = d-\\left(\\frac{1}{E_u^p} \\int_{0}^d t\\,e_u^p(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_p_ud_st_eq", 3, 2)
               // var h_cg_p_ud_lt_eq = "$$ h_u^{'p} = d-\\left(\\frac{1}{E_u^{'p}} \\int_{0}^d t\\,e_u^{'p}(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_p_ud_lt_eq", 3, 2)
           } else if (height < depth) {
               // var h_cg_p_dr_st_eq = "$$ h^p = d-\\left(\\frac{1}{E^p} \\int_{d-h}^d t\\,e^p(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_p_dr_st_eq", 3, 3)
               // var h_cg_p_dr_lt_eq = "$$ h^{'p} = d-\\left(\\frac{1}{E^{'p}} \\int_{d-h}^d t\\,e^{'p}(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_p_dr_lt_eq", 3, 3)
               // var h_cg_p_ud_st_eq = "$$ h_u^p = d-\\left(\\frac{1}{E_u^p} \\int_{d-h}^d t\\,e_u^p(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_p_ud_st_eq", 3, 3)
               // var h_cg_p_ud_lt_eq = "$$ h_u^{'p} = d-\\left(\\frac{1}{E_u^{'p}} \\int_{d-h}^d t\\,e_u^{'p}(t)\\,\\text{dt}\\right) = $$"
               equationKeeper("h_cg_p_ud_lt_eq", 3, 3)
           }
       }
   
   
   
       var m_h_length = height_p_hor / 1000 * hl_length
       var m_h_length_eq = "$$ M_{H_l} = h_H\\,H_l = $$"
   
       var m_h_width = height_p_hor / 1000 * hl_width
       var m_h_width_eq = "$$ M_{H_b} = h_H\\,H_b = $$"
   
       var m_h_r = height_p_hor / 1000 * hl_total
       var m_h_r_eq = "$$ M_{H_r} = h_H\\,H_t = $$"
   
       var m_v_dr_st_length_eq = "$$ M_{V,l} = e_l\\,V_e = $$"
   
       var m_v_dr_lt_length_eq = "$$ M'_{V,l} = e_l\\,V_e = $$"
   
       var m_v_ud_st_length_eq = "$$ M_{V,u,l} = e_l\\,V_e = $$"
   
       var m_v_ud_lt_length_eq = "$$ M'_{V,u,l} = e_l\\,V_e = $$"
   
       var m_v_dim_length_eq = "$$ M_{V,l} = e_l\\,V_e = $$"
   
       var m_v_dr_st_width_eq = "$$ M_{V,b} = e_b\\,V_e = $$"
   
       var m_v_dr_lt_width_eq = "$$ M'_{V,b} = e_b\\,V_e = $$"
   
       var m_v_ud_st_width_eq = "$$ M_{V,u,b} = e_b\\,V_e = $$"
   
       var m_v_ud_lt_width_eq = "$$ M'_{V,u,b} = e_b\\,V_e = $$"
   
       var m_v_dim_width_eq = "$$ M_{V,b} = e_b\\,V_e = $$"
   
       var m_F_a_dr_st_l_eq = "$$ M_{F_l^a} = h^a\\,F_l^a = $$"
   
       var m_F_a_dr_lt_l_eq = "$$ M_{F_l^{'a}} = h^{'a}\\,F_l^{'a} = $$"
   
       var m_F_a_ud_st_l_eq = "$$ M_{F_{l,u}^a} = h_u^a\\,F_{l,u}^a = $$"
   
       var m_F_a_ud_lt_l_eq = "$$ M_{F_{l,u}^{'a}} = h_u^{'a}\\,F_{l,u}^{'a} = $$"
   
       var m_F_p_dr_st_l_eq = "$$ M_{F_l^p} = h^p\\,F_l^p = $$"
   
       var m_F_p_dr_lt_l_eq = "$$ M_{F_l^{'p}} = h^{'p}\\,F_l^{'p} = $$"
   
       var m_F_p_ud_st_l_eq = "$$ M_{F_{l,u}^p} = h_u^p\\,F_{l,u}^p = $$"
   
       var m_F_p_ud_lt_l_eq = "$$ M_{F_{l,u}^{'p}} = h_u^{'p}\\,F_{l,u}^{'p} = $$"
   
       var m_F_a_dr_st_b_eq = "$$ M_{F_b^a} = h^a\\,F_b^a = $$"
   
       var m_F_a_dr_lt_b_eq = "$$ M_{F_b^{'a}} = h^{'a}\\,F_b^{'a} = $$"
   
       var m_F_a_ud_st_b_eq = "$$ M_{F_{b,u}^a} = h_u^a\\,F_{b,u}^a = $$"
   
       var m_F_a_ud_lt_b_eq = "$$ M_{F_{b,u}^{'a}} = h_u^{'a}\\,F_{b,u}^{'a} = $$"
   
       var m_F_p_dr_st_b_eq = "$$ M_{F_b^p} = h^p\\,F_b^p = $$"
   
       var m_F_p_dr_lt_b_eq = "$$ M_{F_b^{'p}} = h^{'p}\\,F_b^{'p} = $$"
   
       var m_F_p_ud_st_b_eq = "$$ M_{F_{b,u}^p} = h_u^p\\,F_{b,u}^p = $$"
   
       var m_F_p_ud_lt_b_eq = "$$ M_{F_{b,u}^{'p}} = h_u^{'p}\\,F_{b,u}^{'p} = $$"
   
       var m_F_a_dr_st_r_eq = "$$ M_{F_r^a} = h^a\\,F_r^a = $$"
   
       var m_F_a_dr_lt_r_eq = "$$ M_{F_r^{'a}} = h^{'a}\\,F_r^{'a} = $$"
   
       var m_F_a_ud_st_r_eq = "$$ M_{F_{r,u}^a} = h_u^a\\,F_{r,u}^a = $$"
   
       var m_F_a_ud_lt_r_eq = "$$ M_{F_{r,u}^{'a}} = h_u^{'a}\\,F_{r,u}^{'a} = $$"
   
       var m_F_p_dr_st_r_eq = "$$ M_{F_r^p} = h^p\\,F_r^p = $$"
   
       var m_F_p_dr_lt_r_eq = "$$ M_{F_r^{'p}} = h^{'p}\\,F_r^{'p} = $$"
   
       var m_F_p_ud_st_r_eq = "$$ M_{F_{r,u}^p} = h_u^p\\,F_{r,u}^p = $$"
   
       var m_F_p_ud_lt_r_eq = "$$ M_{F_{r,u}^{'p}} = h_u^{'p}\\,F_{r,u}^{'p} = $$"
   
       var m_r_eq = "$$ M_r = \\sqrt{M_l^2 + M_b^2} =  $$"
   
       if (m_F_p_dr_st_l > Math.abs(m_h_length + m_v_dr_st_length + m_length) + m_F_a_dr_st_l) {
           // var m_total_dr_st_l_eq = "$$ M_{t,l} = $$"
           equationKeeper('m_total_dr_st_l_eq', 3, 1)
       } else {
           if (m_h_length + m_v_dr_st_length + m_length < 0) {
               // var m_total_dr_st_l_eq = "$$ M_{t,l} = M_{H_l} + M_l + M_{V,l} - M_{F_l^a} + M_{F_l^p} = $$"
               equationKeeper('m_total_dr_st_l_eq', 3, 2)
           } else if (m_h_length + m_v_dr_st_length + m_length >= 0) {
               // var m_total_dr_st_l_eq = "$$ M_{t,l} = M_{H_l} + M_l + M_{V,l} + M_{F_l^a} - M_{F_l^p} = $$"
               equationKeeper('m_total_dr_st_l_eq', 3, 3)
           }
       }
   
       if (m_F_p_dr_lt_l > Math.abs(m_h_length + m_v_dr_lt_length + m_length) + m_F_a_dr_lt_l) {
           // var m_total_dr_lt_l_eq = "$$ M'_{t,l} = $$"
           equationKeeper('m_total_dr_lt_l_eq', 3, 1)
       } else {
           if (m_h_length + m_v_dr_lt_length + m_length < 0) {
               // var m_total_dr_lt_l_eq = "$$ M'_{t,l} = M_{H_l} + M_l + M_{V,l} - M_{F_l^{'a}} + M_{F_l^{'p}} = $$"
               equationKeeper('m_total_dr_lt_l_eq', 3, 2)
           } else if (m_h_length + m_v_dr_lt_length + m_length >= 0) {
               // var m_total_dr_lt_l_eq = "$$ M'_{t,l} = M_{H_l} + M_l + M_{V,l} + M_{F_l^{'a}} - M_{F_l^{'p}} = $$"
               equationKeeper('m_total_dr_lt_l_eq', 3, 3)
           }
       }
   
       if (m_F_p_ud_st_l > Math.abs(m_h_length + m_v_ud_st_length + m_length) + m_F_a_ud_st_l) {
           // var m_total_ud_st_l_eq = "$$ M_{t,l,u} = $$"
           equationKeeper('m_total_ud_st_l_eq', 3, 1)
       } else {
           if (m_h_length + m_v_ud_st_length + m_length < 0) {
               // var m_total_ud_st_l_eq = "$$ M_{t,l,u} = M_{H_l} + M_l + M_{V,l} - M_{F_{l,u}^a} + M_{F_{l,u}^p} = $$"
               equationKeeper('m_total_ud_st_l_eq', 3, 2)
           } else if (m_h_length + m_v_ud_st_length + m_length >= 0) {
               // var m_total_ud_st_l_eq = "$$ M_{t,l,u} = M_{H_l} + M_l + M_{V,l} + M_{F_{l,u}^a} - M_{F_{l,u}^p} = $$"
               equationKeeper('m_total_ud_st_l_eq', 3, 3)
           }
       }
   
       if (m_F_p_ud_lt_l > Math.abs(m_h_length + m_v_ud_lt_length + m_length) + m_F_a_ud_lt_l) {
           // var m_total_ud_lt_l_eq = "$$ M'_{t,l,u} = $$"
           equationKeeper('m_total_ud_lt_l_eq', 3, 1)
       } else {
           if (m_h_length + m_v_ud_lt_length + m_length < 0) {
               // var m_total_ud_lt_l_eq = "$$ M'_{t,l,u} = M_{H_l} + M_l + M_{V,l} - M_{F_{l,u}^{'a}} + M_{F_{l,u}^{'p}} = $$"
               equationKeeper('m_total_ud_lt_l_eq', 3, 2)
           } else if (m_h_length + m_v_ud_lt_length + m_length >= 0) {
               // var m_total_ud_lt_l_eq = "$$ M'_{t,l,u} = M_{H_l} + M_l + M_{V,l} + M_{F_{l,u}^{'a}} - M_{F_{l,u}^{'p}} = $$"
               equationKeeper('m_total_ud_lt_l_eq', 3, 3)
           }
       }
   
       if (m_F_p_dr_st_b > Math.abs(m_h_width + m_v_dr_st_width + m_width) + m_F_a_dr_st_b) {
           // var m_total_dr_st_b_eq = "$$ M_{t,b} = $$"
           equationKeeper('m_total_dr_st_b_eq', 3, 1)
       } else {
           if (m_h_width + m_v_dr_st_width + m_width < 0) {
               // var m_total_dr_st_b_eq = "$$ M_{t,b} = M_{H_b} + M_b + M_{V,b} - M_{F_b^a} + M_{F_b^p} = $$"
               equationKeeper('m_total_dr_st_b_eq', 3, 2)
           } else if (m_h_width + m_v_dr_st_width + m_width >= 0) {
               // var m_total_dr_st_b_eq = "$$ M_{t,b} = M_{H_b} + M_b + M_{V,b} + M_{F_b^a} - M_{F_b^p} = $$"
               equationKeeper('m_total_dr_st_b_eq', 3, 3)
           }
       }
   
       if (m_F_p_dr_lt_b > Math.abs(m_h_width + m_v_dr_lt_width + m_width) + m_F_a_dr_lt_b) {
           // var m_total_dr_lt_b_eq = "$$ M'_{t,b} = $$"
           equationKeeper('m_total_dr_lt_b_eq', 3, 1)
       } else {
           if (m_h_width + m_v_dr_lt_width + m_width < 0) {
               // var m_total_dr_lt_b_eq = "$$ M'_{t,b} = M_{H_b} + M_b + M_{V,b} - M_{F_b^{'a}} + M_{F_b^{'p}} = $$"
               equationKeeper('m_total_dr_lt_b_eq', 3, 2)
           } else if (m_h_width + m_v_dr_lt_width + m_width >= 0) {
               // var m_total_dr_lt_b_eq = "$$ M'_{t,b} = M_{H_b} + M_b + M_{V,b} + M_{F_b^{'a}} - M_{F_b^{'p}} = $$"
               equationKeeper('m_total_dr_lt_b_eq', 3, 3)
           }
       }
   
       if (m_F_p_ud_st_b > Math.abs(m_h_width + m_v_ud_st_width + m_width) + m_F_a_ud_st_b) {
           // var m_total_ud_st_b_eq = "$$ M_{t,b,u} = $$"
           equationKeeper('m_total_ud_st_b_eq', 3, 1)
       } else {
           if (m_h_width + m_v_ud_st_width + m_width < 0) {
               // var m_total_ud_st_b_eq = "$$ M_{t,b,u} = M_{H_b} + M_b + M_{V,b} - M_{F_{b,u}^a} + M_{F_{b,u}^p} = $$"
               equationKeeper('m_total_ud_st_b_eq', 3, 2)
           } else if (m_h_width + m_v_ud_st_width + m_width >= 0) {
               // var m_total_ud_st_b_eq = "$$ M_{t,b,u} = M_{H_b} + M_b + M_{V,b} + M_{F_{b,u}^a} - M_{F_{b,u}^p} = $$"
               equationKeeper('m_total_ud_st_b_eq', 3, 3)
           }
       }
   
       if (m_F_p_ud_lt_b > Math.abs(m_h_width + m_v_ud_lt_width + m_width) + m_F_a_ud_lt_b) {
           // var m_total_ud_lt_b_eq = "$$ M'_{t,b,u} = $$"
           equationKeeper('m_total_ud_lt_b_eq', 3, 1)
       } else {
           if (m_h_width + m_v_ud_lt_width + m_width < 0) {
               // var m_total_ud_lt_b_eq = "$$ M'_{t,b,u} = M_{H_b} + M_b + M_{V,b} - M_{F_{b,u}^{'a}} + M_{F_{b,u}^{'p}} = $$"
               equationKeeper('m_total_ud_lt_b_eq', 3, 2)
           } else if (m_h_width + m_v_ud_lt_width + m_width >= 0) {
               // var m_total_ud_lt_b_eq = "$$ M'_{t,b,u} = M_{H_b} + M_b + M_{V,b} + M_{F_{b,u}^{'a}} - M_{F_{b,u}^{'p}} = $$"
               equationKeeper('m_total_ud_lt_b_eq', 3, 3)
           }
       }
   
   
   
       if (m_F_p_dr_st_r > Math.abs(m_h_length + m_v_dr_st_length + m_length) + m_F_a_dr_st_r) {
           var m_total_dr_st_rl_eq = "$$ M_{t,r,l} = $$"
       } else {
           if (m_h_length + m_v_dr_st_length + m_length < 0) {
               var m_total_dr_st_rl_eq = "$$ M_{t,r,l} = M_{H_l} + M_l + M_{V,l} - M_{F_r^a} + M_{F_r^p} = $$"
           } else if (m_h_length + m_v_dr_st_length + m_length >= 0) {
               var m_total_dr_st_rl_eq = "$$ M_{t,r,l} = M_{H_l} + M_l + M_{V,l} + M_{F_r^a} - M_{F_r^p} = $$"
           }
       }
   
       if (m_F_p_dr_lt_r > Math.abs(m_h_length + m_v_dr_lt_length + m_length) + m_F_a_dr_lt_r) {
           var m_total_dr_lt_rl_eq = "$$ M'_{t,r,l} = $$"
       } else {
           if (m_h_length + m_v_dr_lt_length + m_length < 0) {
               var m_total_dr_lt_rl_eq = "$$ M'_{t,r,l} = M_{H_l} + M_l + M_{V,l} - M_{F_r^{'a}} + M_{F_r^{'p}} = $$"
           } else if (m_h_length + m_v_dr_lt_length + m_length >= 0) {
               var m_total_dr_lt_rl_eq = "$$ M'_{t,r,l} = M_{H_l} + M_l + M_{V,l} + M_{F_r^{'a}} - M_{F_r^{'p}} = $$"
           }
       }
   
       if (m_F_p_ud_st_r > Math.abs(m_h_length + m_v_ud_st_length + m_length) + m_F_a_ud_st_r) {
           var m_total_ud_st_rl_eq = "$$ M_{t,r,l,u} = $$"
       } else {
           if (m_h_length + m_v_ud_st_length + m_length < 0) {
               var m_total_ud_st_rl_eq = "$$ M_{t,r,l,u} = M_{H_l} + M_l + M_{V,l} - M_{F_{r,u}^a} + M_{F_{r,u}^p} = $$"
           } else if (m_h_length + m_v_ud_st_length + m_length >= 0) {
               var m_total_ud_st_rl_eq = "$$ M_{t,r,l,u} = M_{H_l} + M_l + M_{V,l} + M_{F_{r,u}^a} - M_{F_{r,u}^p} = $$"
           }
       }
   
       if (m_F_p_ud_lt_r > Math.abs(m_h_length + m_v_ud_lt_length + m_length) + m_F_a_ud_lt_r) {
           var m_total_ud_lt_rl_eq = "$$ M'_{t,r,l,u} = $$"
       } else {
           if (m_h_length + m_v_ud_lt_length + m_length < 0) {
               var m_total_ud_lt_rl_eq = "$$ M'_{t,r,l,u} = M_{H_l} + M_l + M_{V,l} - M_{F_{r,u}^{'a}} + M_{F_{r,u}^{'p}} = $$"
           } else if (m_h_length + m_v_ud_lt_length + m_length >= 0) {
               var m_total_ud_lt_rl_eq = "$$ M'_{t,r,l,u} = M_{H_l} + M_l + M_{V,l} + M_{F_{r,u}^{'a}} - M_{F_{r,u}^{'p}} = $$"
           }
       }
   
   
       if (m_F_p_dr_st_r > Math.abs(m_h_width + m_v_dr_st_width + m_width) + m_F_a_dr_st_r) {
           var m_total_dr_st_rb_eq = "$$ M_{t,r,b} = $$"
       } else {
           if (m_h_width + m_v_dr_st_width + m_width < 0) {
               var m_total_dr_st_rb_eq = "$$ M_{t,r,b} = M_{H_b} + M_b + M_{V,b} - M_{F_r^a} + M_{F_r^p} = $$"
           } else if (m_h_width + m_v_dr_st_width + m_width >= 0) {
               var m_total_dr_st_rb_eq = "$$ M_{t,r,b} = M_{H_b} + M_b + M_{V,b} + M_{F_r^a} - M_{F_r^p} = $$"
           }
       }
   
       if (m_F_p_dr_lt_r > Math.abs(m_h_width + m_v_dr_lt_width + m_width) + m_F_a_dr_lt_r) {
           var m_total_dr_lt_rb_eq = "$$M'_{t,r,b} = $$"
       } else {
           if (m_h_width + m_v_dr_lt_width + m_width < 0) {
               var m_total_dr_lt_rb_eq = "$$ M'_{t,r,b} = M_{H_b} + M_b + M_{V,b} - M_{F_r^{'a}} + M_{F_r^{'p}} = $$"
           } else if (m_h_width + m_v_dr_lt_width + m_width >= 0) {
               var m_total_dr_lt_rb_eq = "$$ M'_{t,r,b} = M_{H_b} + M_b + M_{V,b} + M_{F_r^{'a}} - M_{F_r^{'p}} = $$"
           }
       }
   
       if (m_F_p_ud_st_r > Math.abs(m_h_width + m_v_ud_st_width + m_width) + m_F_a_ud_st_r) {
           var m_total_ud_st_rb_eq = "$$ M_{t,r,b,u} = $$"
       } else {
           if (m_h_width + m_v_ud_st_width + m_width < 0) {
               var m_total_ud_st_rb_eq = "$$ M_{t,r,b,u} = M_{H_b} + M_b + M_{V,b} - M_{F_{r,u}^a} + M_{F_{r,u}^p} = $$"
           } else if (m_h_width + m_v_ud_st_width + m_width >= 0) {
               var m_total_ud_st_rb_eq = "$$ M_{t,r,b,u} = M_{H_b} + M_b + M_{V,b} + M_{F_{r,u}^a} - M_{F_{r,u}^p} = $$"
           }
       }
   
       if (m_F_p_ud_lt_r > Math.abs(m_h_width + m_v_ud_lt_width + m_width) + m_F_a_ud_lt_r) {
           var m_total_ud_lt_rb_eq = "$$ M'_{t,r,b,u} = $$"
       } else {
           if (m_h_width + m_v_ud_lt_width + m_width < 0) {
               var m_total_ud_lt_rb_eq = "$$ M'_{t,r,b,u} = M_{H_b} + M_b + M_{V,b} - M_{F_{r,u}^{'a}} + M_{F_{r,u}^{'p}} = $$"
           } else if (m_h_width + m_v_ud_lt_width + m_width >= 0) {
               var m_total_ud_lt_rb_eq = "$$ M'_{t,r,b,u} = M_{H_b} + M_b + M_{V,b} + M_{F_{r,u}^{'a}} - M_{F_{r,u}^{'p}} = $$"
           }
       }
   
   
       var m_dim_length_eq = "$$ M_{t,l} = M_{H_l} + M_l + M_{V,l} = $$"
       var m_dim_width_eq = "$$ M_{t,b} = M_{H_b} + M_b + M_{V,b} = $$"
       var m_dim_r_length_eq = "$$ M_{t,r,l} = M_{H_l} + M_l + M_{V,l} = $$"
       var m_dim_r_width_eq = "$$ M_{t,r,b} = M_{H_b} + M_b + M_{V,b} = $$"
   
   
       // effective dimensions
   
       var e_total_dr_st_l_eq = "$$ e_l = \\frac{|M_{t,l}|}{V_t} = $$"
       var e_total_dr_lt_l_eq = "$$ e'_l = \\frac{|M'_{t,l}|}{V_t} = $$"
       var e_total_ud_st_l_eq = "$$ e_{l,u} = \\frac{|M_{t,l,u}|}{V_t} = $$"
       var e_total_ud_lt_l_eq = "$$ e'_{l,u} = \\frac{|M'_{t,l,u}|}{V_t} = $$"
       var e_total_dr_st_b_eq = "$$ e_b = \\frac{|M_{t,b}|}{V_t} = $$"
       var e_total_dr_lt_b_eq = "$$ e'_b = \\frac{|M'_{t,b}|}{V_t} = $$"
       var e_total_ud_st_b_eq = "$$ e_{b,u} = \\frac{|M_{t,b,u}|}{V_t} = $$"
       var e_total_ud_lt_b_eq = "$$ e'_{b,u} = \\frac{|M'_{t,b,u}|}{V_t} = $$"
       var e_total_dr_st_rl_eq = "$$ e_{r,l} = \\frac{|M_{t,r,l}|}{V_t} = $$"
       var e_total_dr_lt_rl_eq = "$$ e'_{r,l} = \\frac{|M'_{t,r,l}|}{V_t} = $$"
       var e_total_ud_st_rl_eq = "$$ e_{r,l,u} = \\frac{|M_{t,r,l,u}|}{V_t} = $$"
       var e_total_ud_lt_rl_eq = "$$ e'_{r,l,u} = \\frac{|M'_{t,r,l,u}|}{V_t} = $$"
       var e_total_dr_st_rb_eq = "$$ e_{r,b} = \\frac{|M_{t,r,b}|}{V_t} = $$"
       var e_total_dr_lt_rb_eq = "$$ e'_{r,b} = \\frac{|M'_{t,r,b}|}{V_t} = $$"
       var e_total_ud_st_rb_eq = "$$ e_{r,b,u} = \\frac{|M_{t,r,b,u}|}{V_t} = $$"
       var e_total_ud_lt_rb_eq = "$$ e'_{r,b,u} = \\frac{|M'_{t,r,b,u}|}{V_t} = $$"
       var e_total_dr_st_r_eq = "$$ e_r = \\sqrt{e_{r,l}^2 + e_{r,b}^2} = $$"
       var e_total_dr_lt_r_eq = "$$ e'_r = \\sqrt{e_{r,l}^{'2} + e_{r,b}^{'2}} = $$"
       var e_total_ud_st_r_eq = "$$ e_{r,u} = \\sqrt{e_{r,l,u}^2 + e_{r,b,u}^2} = $$"
       var e_total_ud_lt_r_eq = "$$ e'_{r,u} = \\sqrt{e_{r,l,u}^{'2} + e_{r,b,u}^{'2}} = $$"
       var e_dim_l_eq = "$$ e_l = \\frac{|M_{t,l}|}{V_t} = $$"
       var e_dim_b_eq = "$$ e_b = \\frac{|M_{t,b}|}{V_t} = $$"
       var e_dim_rl_eq = "$$ e_{r,l} = \\frac{|M_{t,r,l}|}{V_t} = $$"
       var e_dim_rb_eq = "$$ e_{r,b} = \\frac{|M_{t,r,b}|}{V_t} =  $$"
       var e_dim_r_eq = "$$ e_r = \\sqrt{e_{r,l}^{2} + e_{r,b}^{2}} = $$"
       var v_dr_st_r_eq = "$$ v = 2\\,\\arccos\\left(\\frac{e_r}{r}\\right) = $$"
       var v_dr_lt_r_eq = "$$ v' = 2\\,\\arccos\\left(\\frac{e'_r}{r}\\right) = $$"
       var v_ud_st_r_eq = "$$ v_u = 2\\,\\arccos\\left(\\frac{e_{r,u}}{r}\\right) = $$"
       var v_ud_lt_r_eq = "$$ v'_u = 2\\,\\arccos\\left(\\frac{e'_{r,u}}{r}\\right) = $$"
       var v_dim_r_eq = "$$ v = 2\\,\\arccos\\left(\\frac{e_r}{r}\\right) = $$"
   
         //ground bearing capacity
   
         if (point_foundation_shape == 'rectangular') {
           if (e_total_dr_st_l < 0.3 * length && e_total_dr_st_b < 0.3 * width) {
               var N_q_dr_st_eq = "$$ N_q = e^{\\pi\\tan\\left(\\phi_{pl,d}\\right)}\\frac{1+\\sin\\left(\\phi_{pl,d}\\right)}{1-\\sin\\left(\\phi_{pl,d}\\right)} = $$"
               var N_c_dr_st_eq = "$$ N_c = \\frac{N_q-1}{\\tan\\left(\\phi_{pl,d}\\right)} = $$"
               equationKeeper('N_c_dr_st_eq', 2, 1)
               var N_g_dr_st_eq = "$$ N_{\\gamma} = \\frac{1}{4}\\left(\\left(N_q-1\\right)\\cos\\left(\\phi_{pl,d}\\right)\\right)^{3/2} = $$"
               equationKeeper('N_g_dr_st_eq', 2, 1)
   
           } else if (e_total_dr_st_l >= 0.3 * length || e_total_dr_st_b >= 0.3 * width) {
               var N_q_dr_st_eq = "$$ N_q = e^{\\pi\\tan\\left(\\phi_{pl,d}\\right)}\\frac{1+\\sin\\left(\\phi_{pl,d}\\right)}{1-\\sin\\left(\\phi_{pl,d}\\right)} = $$"
               var N_c_dr_st_eq = "$$ N_c = \\left(1.05+\\tan\\left(\\phi_{pl,d}\\right)^3\\right)\\,\\frac{N_q-1}{\\tan\\left(\\phi_{pl,d}\\right)} = $$"
               equationKeeper('N_c_dr_st_eq', 2, 2)
               var N_g_dr_st_eq = "$$ N_{\\gamma} = 2\\left(\\frac{1}{4}\\left(\\left(N_q-1\\right)\\cos\\left(\\phi_{pl,d}\\right)\\right)^{3/2}\\right) = $$"
               equationKeeper('N_g_dr_st_eq', 2, 2)
           }
   
           if (e_total_dr_lt_l < 0.3 * length && e_total_dr_lt_b < 0.3 * width) {
               var N_q_dr_lt_eq = "$$N'_q = e^{\\pi\\tan\\left(\\phi'_{pl,d}\\right)}\\frac{1+\\sin\\left(\\phi'_{pl,d}\\right)}{1-\\sin\\left(\\phi'_{pl,d}\\right)} = $$"
               var N_c_dr_lt_eq = "$$ N'_c = \\frac{N'_q-1}{\\tan\\left(\\phi'_{pl,d}\\right)} = $$"
               equationKeeper('N_c_dr_lt_eq', 2, 1)
               var N_g_dr_lt_eq = "$$ N'_{\\gamma} = \\frac{1}{4}\\left(\\left(N'_q-1\\right)\\cos\\left(\\phi'_{pl,d}\\right)\\right)^{3/2} = $$"
               equationKeeper('N_g_dr_lt_eq', 2, 1)
           } else if (e_total_dr_lt_l >= 0.3 * length || e_total_dr_lt_b >= 0.3 * width) {
               var N_q_dr_lt_eq = "$$N'_q = e^{\\pi\\tan\\left(\\phi'_{pl,d}\\right)}\\frac{1+\\sin\\left(\\phi'_{pl,d}\\right)}{1-\\sin\\left(\\phi'_{pl,d}\\right)} = $$"
               var N_c_dr_lt_eq = "$$ N'_c = \\left(1.05+\\tan\\left(\\phi'_{pl,d}\\right)^3\\right)\\,\\frac{N'_q-1}{\\tan\\left(\\phi'_{pl,d}\\right)} = $$"
               equationKeeper('N_c_dr_lt_eq', 2, 2)
               var N_g_dr_lt_eq = "$$ N'_{\\gamma} = 2\\left(\\frac{1}{4}\\left(\\left(N'_q-1\\right)\\cos\\left(\\phi'_{pl,d}\\right)\\right)^{3/2}\\right) = $$"
               equationKeeper('N_g_dr_lt_eq', 2, 2)
           }
   
           if (e_total_ud_st_l < 0.3 * length && e_total_ud_st_b < 0.3 * width) {
               var N_q_ud_st_eq = "$$ N_{q,u} = $$"
               var N_c_ud_st_eq = "$$ N_{c,u} = 2+ \\pi = $$" // + \\frac{N_{q,u}-1}{\\tan\\left(\\phi_{pl,u,d}\\right)} = $$"
               equationKeeper('N_c_ud_st_eq', 2, 1)
               var N_g_ud_st_eq = "$$ N_{\\gamma,u} = $$"
               equationKeeper('N_g_ud_st_eq', 2, 1)
   
           } else if (e_total_ud_st_l >= 0.3 * length || e_total_ud_st_b >= 0.3 * width) {
               var N_q_ud_st_eq = "$$ N_{q,u} = $$"
               var N_c_ud_st_eq = "$$ N_{c,u} = \\left(1.05+\\tan\\left(\\phi_{pl,u,d}\\right)^3\\right)\\,\\left(2+\\pi\\right) = $$" // + \\frac{N_{q,u}-1}{\\tan\\left(\\phi_{pl,u,d}\\right)}\\right) = $$"
               equationKeeper('N_c_ud_st_eq', 2, 2)
               var N_g_ud_st_eq = "$$ N_{\\gamma,u} = 2\\,N_{c,u} = $$"
               equationKeeper('N_g_ud_st_eq', 2, 2)
           }
   
           if (e_total_ud_lt_l < 0.3 * length && e_total_ud_lt_b < 0.3 * width) {
   
               if (ud_lt_af_d == 0) {
                   var N_q_ud_lt_eq = "$$ N'_{q,u} = $$"
                   equationKeeper('N_q_ud_lt_eq', 2, 1)
                   var N_c_ud_lt_eq = "$$ N'_{c,u} = 2 + \\pi = $$" // + \\frac{N'_{q,u}-1}{\\tan\\left(\\phi'_{pl,u,d}\\right)} = $$"
                   equationKeeper('N_c_ud_lt_eq', 4, 1)
                   
                   var N_g_ud_lt_eq = "$$ N'_{\\gamma,u} = $$"
                   equationKeeper('N_g_ud_lt_eq', 4, 1)
   
   
               } else {
                   var N_q_ud_lt_eq = "$$ N'_{q,u} = e^{\\pi\\tan\\left(\\phi'_{pl,u,d}\\right)}\\frac{1+\\sin\\left(\\phi'_{pl,u,d}\\right)}{1-\\sin\\left(\\phi'_{pl,u,d}\\right)} = $$"
                   equationKeeper('N_q_ud_lt_eq', 2, 2)
                   var N_c_ud_lt_eq = "$$ N'_{c,u} = \\frac{N'_{q,u}-1}{\\tan\\left(\\phi'_{pl,u,d}\\right)} = $$"
                   equationKeeper('N_c_ud_lt_eq', 4, 2)
                   var N_g_ud_lt_eq = "$$ N'_{\\gamma,u} = \\frac{1}{4}\\left(\\left(N'_{q,u}-1\\right)\\cos\\left(\\phi'_{pl,u,d}\\right)\\right)^{3/2} = $$"
                   equationKeeper('N_g_ud_lt_eq', 4, 2)
               }
   
   
           } else if (e_total_ud_lt_l >= 0.3 * length || e_total_ud_lt_b >= 0.3 * width) {
   
               if (ud_lt_af_d == 0) {
                   var N_q_ud_lt_eq = "$$ N'_{q,u} = $$"
                   equationKeeper('N_q_ud_lt_eq', 2, 1)
                   var N_c_ud_lt_eq = "$$ N'_{c,u} = \\left(1.05+\\tan\\left(\\phi'_{pl,u,d}\\right)^3\\right)\\,\\left(2+\\pi\\right) = $$" // + \\frac{N'_{q,u}-1}{\\tan\\left(\\phi'_{pl,u,d}\\right)}\\right) = $$"
                   equationKeeper('N_c_ud_lt_eq', 4, 3)
                   var N_g_ud_lt_eq = "$$ N'_{\\gamma,u} = 2\\,N'_{c,u} = $$"
                   equationKeeper('N_g_ud_lt_eq', 4, 3)
               } else {
                   var N_q_ud_lt_eq = "$$ N'_{q,u} = e^{\\pi\\tan\\left(\\phi'_{pl,u,d}\\right)}\\frac{1+\\sin\\left(\\phi'_{pl,u,d}\\right)}{1-\\sin\\left(\\phi'_{pl,u,d}\\right)} = $$"
                   equationKeeper('N_q_ud_lt_eq', 2, 2)
                   var N_c_ud_lt_eq = "$$ N'_{c,u} = \\left(1.05+\\tan\\left(\\phi'_{pl,u,d}\\right)^3\\right)\\,\\frac{N'_{q,u}-1}{\\tan\\left(\\phi'_{pl,u,d}\\right)} = $$"
                   equationKeeper('N_c_ud_lt_eq', 4, 4)
                   var N_g_ud_lt_eq = "$$ N'_{\\gamma,u} = 2\\left(\\frac{1}{4}\\left(\\left(N'_{q,u}-1\\right)\\cos\\left(\\phi'_{pl,u,d}\\right)\\right)^{3/2}\\right) = $$"
                   equationKeeper('N_g_ud_lt_eq', 4, 4)
   
               }
   
           }
   
       } else if (point_foundation_shape == 'circular') {
           if (e_total_dr_st_r < 0.3 * 2 * radius) {
               var N_q_dr_st_eq = "$$ N_q = e^{\\pi\\tan\\left(\\phi_{pl,d}\\right)}\\frac{1+\\sin\\left(\\phi_{pl,d}\\right)}{1-\\sin\\left(\\phi_{pl,d}\\right)} = $$"
               var N_c_dr_st_eq = "$$ N_c = \\frac{N_q-1}{\\tan\\left(\\phi_{pl,d}\\right)} = $$"
               equationKeeper('N_c_dr_st_eq', 2, 1)
               var N_g_dr_st_eq = "$$ N_{\\gamma} = \\frac{1}{4}\\left(\\left(N_q-1\\right)\\cos\\left(\\phi_{pl,d}\\right)\\right)^{3/2} = $$"
               equationKeeper('N_g_dr_st_eq', 2, 1)
           } else if (e_total_dr_st_r >= 0.3 * 2 * radius) {
               var N_q_dr_st_eq = "$$ N_q = e^{\\pi\\tan\\left(\\phi_{pl,d}\\right)}\\frac{1+\\sin\\left(\\phi_{pl,d}\\right)}{1-\\sin\\left(\\phi_{pl,d}\\right)} = $$"
               var N_c_dr_st_eq = "$$ N_c = \\left(1.05+\\tan\\left(\\phi_{pl,d}\\right)^3\\right)\\,\\frac{N_q-1}{\\tan\\left(\\phi_{pl,d}\\right)} = $$"
               equationKeeper('N_c_dr_st_eq', 2, 2)
               var N_g_dr_st_eq = "$$ N_{\\gamma} = 2\\left(\\frac{1}{4}\\left(\\left(N_q-1\\right)\\cos\\left(\\phi_{pl,d}\\right)\\right)^{3/2}\\right) = $$"
               equationKeeper('N_g_dr_st_eq', 2, 2)
           }
   
           if (e_total_dr_lt_r < 0.3 * 2 * radius) {
               var N_q_dr_lt_eq = "$$N'_q = e^{\\pi\\tan\\left(\\phi'_{pl,d}\\right)}\\frac{1+\\sin\\left(\\phi'_{pl,d}\\right)}{1-\\sin\\left(\\phi'_{pl,d}\\right)} = $$"
               var N_c_dr_lt_eq = "$$ N'_c = \\frac{N'_q-1}{\\tan\\left(\\phi'_{pl,d}\\right)} = $$"
               equationKeeper('N_c_dr_lt_eq', 2, 1)
               var N_g_dr_lt_eq = "$$ N'_{\\gamma} = \\frac{1}{4}\\left(\\left(N'_q-1\\right)\\cos\\left(\\phi'_{pl,d}\\right)\\right)^{3/2} = $$"
               equationKeeper('N_g_dr_lt_eq', 2, 1)
           } else if (e_total_dr_lt_r >= 0.3 * 2 * radius) {
               var N_q_dr_lt_eq = "$$N'_q = e^{\\pi\\tan\\left(\\phi'_{pl,d}\\right)}\\frac{1+\\sin\\left(\\phi'_{pl,d}\\right)}{1-\\sin\\left(\\phi'_{pl,d}\\right)} = $$"
               var N_c_dr_lt_eq = "$$ N'_c = \\left(1.05+\\tan\\left(\\phi'_{pl,d}\\right)^3\\right)\\,\\frac{N'_q-1}{\\tan\\left(\\phi'_{pl,d}\\right)} = $$"
               equationKeeper('N_c_dr_lt_eq', 2, 2)
               var N_g_dr_lt_eq = "$$ N'_{\\gamma} = 2\\left(\\frac{1}{4}\\left(\\left(N'_q-1\\right)\\cos\\left(\\phi'_{pl,d}\\right)\\right)^{3/2}\\right) = $$"
               equationKeeper('N_g_dr_lt_eq', 2, 2)
   
           }
   
           if (e_total_ud_st_r < 0.3 * 2 * radius) {
   
               var N_q_ud_st_eq = "$$ N_{q,u} = $$"
               var N_c_ud_st_eq = "$$ N_{c,u} = 2+ \\pi = $$" // + \\frac{N_{q,u}-1}{\\tan\\left(\\phi_{pl,u,d}\\right)} = $$"
               equationKeeper('N_c_ud_st_eq', 2, 1)
               var N_g_ud_st_eq = "$$ N_{\\gamma,u} = $$"
               equationKeeper('N_g_ud_st_eq', 2, 1)
   
           } else if (e_total_ud_st_r >= 0.3 * 2 * radius) {
   
       
               var N_q_ud_st_eq = "$$ N_{q,u} = $$"
               var N_c_ud_st_eq = "$$ N_{c,u} = \\left(1.05+\\tan\\left(\\phi_{pl,u,d}\\right)^3\\right)\\,\\left(2+\\pi\\right) = $$" // + \\frac{N_{q,u}-1}{\\tan\\left(\\phi_{pl,u,d}\\right)}\\right) = $$"
               equationKeeper('N_c_ud_st_eq', 2, 2)
               var N_g_ud_st_eq = "$$ N_{\\gamma,u} = 2\\,N_{c,u} = $$"
               equationKeeper('N_g_ud_st_eq', 2, 2)
   
           }
   
           if (e_total_ud_lt_r < 0.3 * 2 * radius) {
   
               if (ud_lt_af_d == 0) {
                   var N_q_ud_lt_eq = "$$ N'_{q,u} = $$"
                   equationKeeper('N_q_ud_lt_eq', 2, 1)
                   var N_c_ud_lt_eq = "$$ N'_{c,u} = 2 + \\pi = $$" // + \\frac{N'_{q,u}-1}{\\tan\\left(\\phi'_{pl,u,d}\\right)} = $$"
                   equationKeeper('N_c_ud_lt_eq', 4, 1)
                   var N_g_ud_lt_eq = "$$ N'_{\\gamma,u} = $$"
                   equationKeeper('N_g_ud_lt_eq', 4, 1)
               } else {
                   var N_q_ud_lt_eq = "$$ N'_{q,u} = e^{\\pi\\tan\\left(\\phi'_{pl,u,d}\\right)}\\frac{1+\\sin\\left(\\phi'_{pl,u,d}\\right)}{1-\\sin\\left(\\phi'_{pl,u,d}\\right)} = $$"
                   equationKeeper('N_q_ud_lt_eq', 2, 2)
                   var N_c_ud_lt_eq = "$$ N'_{c,u} = \\frac{N'_{q,u}-1}{\\tan\\left(\\phi'_{pl,u,d}\\right)} = $$"
                   equationKeeper('N_c_ud_lt_eq', 4, 2)
                   var N_g_ud_lt_eq = "$$ N'_{\\gamma,u} = \\frac{1}{4}\\left(\\left(N'_{q,u}-1\\right)\\cos\\left(\\phi'_{pl,u,d}\\right)\\right)^{3/2} = $$"
                   equationKeeper('N_g_ud_lt_eq', 4, 2)
               }
   
           } else if (e_total_ud_lt_r >= 0.3 * 2 * radius) {
   
               if (ud_lt_af_d == 0) {
                   var N_q_ud_lt_eq = "$$ N'_{q,u} = $$"
                   equationKeeper('N_q_ud_lt_eq', 2, 1)
                   var N_c_ud_lt_eq = "$$ N'_{c,u} = \\left(1.05+\\tan\\left(\\phi'_{pl,u,d}\\right)^3\\right)\\,\\left(2+\\pi\\right) = $$" // + \\frac{N'_{q,u}-1}{\\tan\\left(\\phi'_{pl,u,d}\\right)}\\right) = $$"
                   equationKeeper('N_c_ud_lt_eq', 4, 3)
                   var N_g_ud_lt_eq = "$$ N'_{\\gamma,u} = 2\\,N'_{c,u} = $$"
                   equationKeeper('N_g_ud_lt_eq', 4, 3)
   
               } else {
                   var N_q_ud_lt_eq = "$$ N'_{q,u} = e^{\\pi\\tan\\left(\\phi'_{pl,u,d}\\right)}\\frac{1+\\sin\\left(\\phi'_{pl,u,d}\\right)}{1-\\sin\\left(\\phi'_{pl,u,d}\\right)} = $$"
                   equationKeeper('N_q_ud_lt_eq', 2, 2)
                   var N_c_ud_lt_eq = "$$ N'_{c,u} = \\left(1.05+\\tan\\left(\\phi'_{pl,u,d}\\right)^3\\right)\\,\\frac{N'_{q,u}-1}{\\tan\\left(\\phi'_{pl,u,d}\\right)} = $$"
                   equationKeeper('N_c_ud_lt_eq', 4, 4)
                   var N_g_ud_lt_eq = "$$ N'_{\\gamma,u} = 2\\left(\\frac{1}{4}\\left(\\left(N'_{q,u}-1\\right)\\cos\\left(\\phi'_{pl,u,d}\\right)\\right)^{3/2}\\right) = $$"
                   equationKeeper('N_g_ud_lt_eq', 4, 4)
               }
   
           }
       }
   
       var s_g_dr_st_eq = "$$s_{\\gamma} = 1-0.4\\frac{\\min\\left(l_{eff} , b_{eff}\\right)}{\\max\\left(l_{eff} , b_{eff}\\right)} = $$"
       var s_g_dr_lt_eq = "$$s'_{\\gamma} = 1-0.4\\frac{\\min\\left(l'_{eff} , b'_{eff}\\right)}{\\max\\left(l'_{eff} , b'_{eff}\\right)} = $$"
       var s_g_ud_st_eq = "$$s_{\\gamma,u} = 1-0.4\\frac{\\min\\left(l_{eff,u} , b_{eff,u}\\right)}{\\max\\left(l_{eff,u} , b_{eff,u}\\right)} = $$"
       var s_g_ud_lt_eq = "$$s'_{\\gamma,u} = 1-0.4\\frac{\\min\\left(l'_{eff,u} , b'_{eff,u}\\right)}{\\max\\left(l'_{eff,u} , b'_{eff,u}\\right)} = $$"
       var s_q_dr_st_eq = "$$ s_q = s_c = $$"
       var s_q_dr_lt_eq = "$$ s'_q = s'_c = $$"
       var s_q_ud_st_eq = "$$ s_{q,u} = s_{c,u} = $$"
       var s_q_ud_lt_eq = "$$ s'_{q,u} = s'_{c,u} = $$"
       var s_c_dr_st_eq = "$$ s_c = 1 + 0.2\\frac{\\min\\left(l_{eff} , b_{eff}\\right)}{\\max\\left(l_{eff} , b_{eff}\\right)} = $$"
       var s_c_dr_lt_eq = "$$ s'_c = 1 + 0.2\\frac{\\min\\left(l'_{eff} , b'_{eff}\\right)}{\\max\\left(l'_{eff} , b'_{eff}\\right)} = $$"
       var s_c_ud_st_eq = "$$ s_{c,u} = 1 + 0.2\\frac{\\min\\left(l_{eff,u} , b_{eff,u}\\right)}{\\max\\left(l_{eff,u} , b_{eff,u}\\right)} = $$"
       var s_c_ud_lt_eq = "$$ s'_{c,u} = 1 + 0.2\\frac{\\min\\left(l'_{eff,u} , b'_{eff,u}\\right)}{\\max\\left(l'_{eff,u} , b'_{eff,u}\\right)} = $$"
   
   
       if (H_res_dr_st == 0) {
   
           var i_q_dr_st = 1
           var i_g_dr_st = 1
           var i_c_dr_st = 1
   
           var i_q_dr_st_eq = "$$ i_q = $$"
           equationKeeper('i_q_dr_st_eq', 2, 1)
           var i_g_dr_st_eq = "$$ i_{\\gamma} = $$"
           equationKeeper('i_g_dr_st_eq', 3, 1)
           var i_c_dr_st_eq = "$$ i_c = $$"
           equationKeeper('i_c_dr_st_eq', 3, 1)
   
       } else if (H_res_dr_st != 0) {
           var i_q_dr_st_eq = "$$ i_q = \\left(1-\\frac{H_{res}}{V_t+A_{eff}\\,c_d\\cot\\left(\\phi_{pl,d}\\right)}\\right)^2 = $$"
           equationKeeper('i_q_dr_st_eq', 2, 2)
           if (point_foundation_shape == 'rectangular') {
   
               if (e_total_dr_st_l < 0.3 * length && e_total_dr_st_b < 0.3 * width) {
                   var i_g_dr_st_eq = "$$ i_{\\gamma} = i_q^2 = $$"
                   equationKeeper('i_g_dr_st_eq', 3, 2)
                   var i_c_dr_st_eq = "$$ i_c = i_q = $$"
                   equationKeeper('i_c_dr_st_eq', 3, 2)
               } else if (e_total_dr_st_l >= 0.3 * length || e_total_dr_st_b >= 0.3 * width) {
                   var i_g_dr_st_eq = "$$ i_{\\gamma} = 1 + 3\\,\\frac{H_{res}}{V_t} = $$"
                   equationKeeper('i_g_dr_st_eq', 3, 3)
                   var i_c_dr_st_eq = "$$ i_c = 1 + 4\\,\\frac{H_{res}}{V_t}\\tan\\left(\\phi_{pl,d}\\right) = $$"
                   equationKeeper('i_c_dr_st_eq', 3, 3)
   
               }
   
           } else if (point_foundation_shape == 'circular') {
   
               if (e_total_dr_st_r < 0.3 * 2 * radius) {
                   var i_g_dr_st_eq = "$$ i_{\\gamma} = i_q^2 = $$"
                   equationKeeper('i_g_dr_st_eq', 3, 2)
                   var i_c_dr_st_eq = "$$ i_c = i_q = $$"
                   equationKeeper('i_c_dr_st_eq', 3, 2)
               } else if (e_total_dr_st_r >= 0.3 * 2 * radius) {
                   var i_g_dr_st_eq = "$$ i_{\\gamma} = 1 + 3\\,\\frac{H_{res}}{V_t} = $$"
                   equationKeeper('i_g_dr_st_eq', 3, 3)
                   var i_c_dr_st_eq = "$$ i_c = 1 + 4\\,\\frac{H_{res}}{V_t}\\tan\\left(\\phi_{pl,d}\\right) = $$"
                   equationKeeper('i_c_dr_st_eq', 3, 3)
   
               }
           }
       }
   
   
   
       if (H_res_dr_lt == 0) {
           var i_q_dr_lt_eq = "$$ i'_q = $$"
           equationKeeper('i_q_dr_lt_eq', 2, 1)
           var i_g_dr_lt_eq = "$$ i'_{\\gamma} = $$"
           equationKeeper('i_g_dr_lt_eq', 3, 1)
           var i_c_dr_lt_eq = "$$ i'_c = $$"
           equationKeeper('i_c_dr_lt_eq', 3, 1)
   
       } else if (H_res_dr_lt != 0) {
           var i_q_dr_lt_eq = "$$ i'_q = \\left(1-\\frac{H'_{res}}{V_t+A'_{eff}\\,c'_d\\cot\\left(\\phi'_{pl,d}\\right)}\\right)^2 = $$"
           equationKeeper('i_q_dr_lt_eq', 2, 2)
           if (point_foundation_shape == 'rectangular') {
   
               if (e_total_dr_lt_l < 0.3 * length && e_total_dr_lt_b < 0.3 * width) {
                   var i_g_dr_lt_eq = "$$ i'_{\\gamma} = i_q^{'2} = $$"
                   equationKeeper('i_g_dr_lt_eq', 3, 2)
                   var i_c_dr_lt_eq = "$$ i'_c = i'_q = $$"
                   equationKeeper('i_c_dr_lt_eq', 3, 2)
               } else if (e_total_dr_lt_l >= 0.3 * length || e_total_dr_lt_b >= 0.3 * width) {
                   var i_g_dr_lt_eq = "$$ i'_{\\gamma} = 1 + 3\\,\\frac{H'_{res}}{V_t} = $$"
                   equationKeeper('i_g_dr_lt_eq', 3, 3)
                   var i_c_dr_lt_eq = "$$ i'_c = 1 + 4\\,\\frac{H'_{res}}{V_t}\\tan\\left(\\phi'_{pl,d}\\right) = $$"
                   equationKeeper('i_c_dr_lt_eq', 3, 3)
               }
   
           } else if (point_foundation_shape == 'circular') {
   
               if (e_total_dr_lt_r < 0.3 * 2 * radius) {
                   var i_g_dr_lt_eq = "$$ i'_{\\gamma} = i_q^{'2} = $$"
                   equationKeeper('i_g_dr_lt_eq', 3, 2)
                   var i_c_dr_lt_eq = "$$ i'_c = i'_q = $$"
                   equationKeeper('i_c_dr_lt_eq', 3, 2)
   
               } else if (e_total_dr_lt_r >= 0.3 * 2 * radius) {
                   var i_g_dr_lt_eq = "$$ i'_{\\gamma} = 1 + 3\\,\\frac{H'_{res}}{V_t} = $$"
                   equationKeeper('i_g_dr_lt_eq', 3, 3)
                   var i_c_dr_lt_eq = "$$ i'_c = 1 + 4\\,\\frac{H'_{res}}{V_t}\\tan\\left(\\phi'_{pl,d}\\right) = $$"
                   equationKeeper('i_c_dr_lt_eq', 3, 3)
               }
           }
       }
   
   
   
   
   
       if (H_res_ud_st == 0) {
           var i_q_ud_st_eq = "$$ i_{q,u} = $$"
           var i_g_ud_st_eq = "$$ i_{\\gamma,u} = $$"
           equationKeeper('i_g_ud_st_eq', 3, 1)
           var i_c_ud_st_eq = "$$ i_{c,u} = $$"
           equationKeeper('i_c_ud_st_eq', 3, 1)
   
       } else if (H_res_ud_st != 0) {
           var i_q_ud_st_eq = "$$ i_{q,u} = $$"
           if (point_foundation_shape == 'rectangular') {
   
               if (e_total_ud_st_l < 0.3 * length && e_total_ud_st_b < 0.3 * width) {
                   var i_g_ud_st_eq = "$$ i_{\\gamma,u} = $$"
                   equationKeeper('i_g_ud_st_eq', 3, 1)
                   var i_c_ud_st_eq = "$$ i_{c,u} = 0.5 + 0.5\\,\\sqrt{1-\\frac{H_{res,u}}{A_{eff,u}\\,c_{u,d}}} = $$"
                   equationKeeper('i_c_ud_st_eq', 3, 2)
               } else if (e_total_ud_st_l >= 0.3 * length || e_total_ud_st_b >= 0.3 * width) {
                   var i_g_ud_st_eq = "$$ i_{\\gamma,u} = 1 + 3\\,\\frac{H_{res,u}}{V_t} = $$"
                   equationKeeper('i_g_ud_st_eq', 3, 2)
                   var i_c_ud_st_eq = "$$ i_{c,u} = 1 + 4\\,\\frac{H_{res,u}}{V_t}\\tan\\left(\\phi_{pl,u,d}\\right) = $$"
                   equationKeeper('i_c_ud_st_eq', 3, 3)
               }
   
           } else if (point_foundation_shape == 'circular') {
   
               if (e_total_ud_st_r < 0.3 * 2 * radius) {
                   var i_g_ud_st_eq = "$$ i_{\\gamma,u} = $$"
                   equationKeeper('i_g_ud_st_eq', 3, 1)
                   var i_c_ud_st_eq = "$$ i_{c,u} = 0.5 + 0.5\\,\\sqrt{1-\\frac{H_{res,u}}{A_{eff,u}\\,c_{u,d}}} = $$"
                   equationKeeper('i_c_ud_st_eq', 3, 2)
               } else if (e_total_ud_st_r >= 0.3 * 2 * radius) {
                   var i_g_ud_st_eq = "$$ i_{\\gamma,u} = 1 + 3\\,\\frac{H_{res,u}}{V_t} = $$"
                   equationKeeper('i_g_ud_st_eq', 3, 2)
                   var i_c_ud_st_eq = "$$ i_{c,u} = 1 + 4\\,\\frac{H_{res,u}}{V_t}\\tan\\left(\\phi_{pl,u,d}\\right) = $$"
                   equationKeeper('i_c_ud_st_eq', 3, 3)
   
               }
           }
       }
   
       if (H_res_ud_lt == 0) {
           var i_q_ud_lt_eq = "$$ i'_{q,u} = $$"
           equationKeeper('i_q_ud_lt_eq', 2, 1)
           var i_g_ud_lt_eq = "$$ i'_{\\gamma,u} = $$"
           equationKeeper('i_g_ud_lt_eq', 3, 1)
           var i_c_ud_lt_eq = "$$ i'_{c,u} = $$"
           equationKeeper('i_c_ud_lt_eq', 4, 1)
       } else if (H_res_ud_lt != 0) {
           if (ud_lt_af_d == 0) {
               var i_q_ud_lt_eq = "$$ i'_{q,u} = $$"
               equationKeeper('i_q_ud_lt_eq', 2, 1)
           } else {
               var i_q_ud_lt_eq = "$$ i'_{q,u} = \\left(1-\\frac{H'_{res,u}}{V_t+A'_{eff,u}\\,c'_{u,d}\\cot\\left(\\phi'_{pl,u,d}\\right)}\\right)^2 = $$"
               equationKeeper('i_q_ud_lt_eq', 2, 1)
           }
   
           if (point_foundation_shape == 'rectangular') {
   
               if (e_total_ud_lt_l < 0.3 * length && e_total_ud_lt_b < 0.3 * width) {
   
                   if (ud_lt_af_d == 0) {
                       var i_g_ud_lt_eq = "$$ i'_{\\gamma,u} = $$"
                       equationKeeper('i_g_ud_lt_eq', 3, 1)
                       var i_c_ud_lt_eq = "$$ i'_{c,u} = 0.5 + 0.5\\,\\sqrt{1-\\frac{H'_{res,u}}{A'_{eff,u}\\,c'_{u,d}}} = $$"
                       equationKeeper('i_c_ud_lt_eq', 4, 2)
   
                   } else {
                       var i_g_ud_lt_eq = "$$ i'_{\\gamma,u} = i_{q,u}^{'2} = $$"
                       equationKeeper('i_g_ud_lt_eq', 3, 2)
                       var i_c_ud_lt_eq = "$$ i'_{c,u} = i'_{q,u} = $$"
                       equationKeeper('i_c_ud_lt_eq', 4, 3)
                   }
   
               } else if (e_total_ud_lt_l >= 0.3 * length || e_total_ud_lt_b >= 0.3 * width) {
                   var i_g_ud_lt_eq = "$$ i'_{\\gamma,u} = 1 + 3\\,\\frac{H'_{res,u}}{V_t} = $$"
                   equationKeeper('i_g_ud_lt_eq', 3, 3)
                   var i_c_ud_lt_eq = "$$ i'_{c,u} = 1 + 4\\,\\frac{H'_{res,u}}{V_t}\\tan\\left(\\phi'_{pl,u,d}\\right) = $$"
                   equationKeeper('i_c_ud_lt_eq', 4, 4)
               }
   
           } else if (point_foundation_shape == 'circular') {
   
               if (e_total_ud_lt_r < 0.3 * 2 * radius) {
   
                   if (ud_lt_af_d == 0) {
                       var i_g_ud_lt_eq = "$$ i'_{\\gamma,u} = $$"
                       var i_c_ud_lt_eq = "$$ i'_{c,u} = 0.5 + 0.5\\,\\sqrt{1-\\frac{H_t}{A'_{eff,u}\\,c'_{u,d}}} = $$"
   
                   } else {
                       var i_g_ud_lt_eq = "$$ i'_{\\gamma,u} = i_{q,u}^{'2} = $$"
                       var i_c_ud_lt_eq = "$$ i'_{c,u} = i'_{q,u} = $$"
                   }
   
               } else if (e_total_ud_lt_r >= 0.3 * 2 * radius) {
                   var i_g_ud_lt_eq = "$$ i'_{\\gamma,u} = 1 + 3\\,\\frac{H'_{res,u}}{V_t} = $$"
                   var i_c_ud_lt_eq = "$$ i'_{c,u} = 1 + 4\\,\\frac{H'_{res,u}}{V_t}\\tan\\left(\\phi'_{pl,u,d}\\right) = $$"
               }
           }
       }
       
       var R_q_dr_st_eq = "$$ R_q = q\\,N_q\\,s_q\\,i_q\\,d_q = $$"
       var R_q_dr_lt_eq = "$$ R'_q = q\\,N'_q\\,s'_q\\,i'_q\\,d_q = $$"
       var R_q_ud_st_eq = "$$ R_{q,u} = q = $$"
   
       if (ud_lt_af_d == 0) {
           var R_q_ud_lt_eq = "$$ R'_{q,u} = q = $$"
           equationKeeper('R_q_ud_lt_eq', 2, 1)
       } else {
           var R_q_ud_lt_eq = "$$ R'_{q,u} = q\\,N'_{q,u}\\,s'_{q,u}\\,i'_{q,u}\\,d_q = $$"
           equationKeeper('R_q_ud_lt_eq', 2, 2)
       }
       var R_c_dr_st_eq = "$$ R_c = c_d\\,N_c\\,s_c\\,i_c\\,d_c = $$"
       var R_c_dr_lt_eq = "$$ R'_c = c'_d\\,N'_c\\,s'_c\\,i'_c\\,d_c = $$"
       var R_c_ud_st_eq = "$$ R_{c,u} = c_{u,d}\\,N_{c,u}\\,s_{c,u}\\,i_{c,u}\\,d_c = $$"
   
       if (ud_lt_af_d == 0) {
           var R_c_ud_lt_eq = "$$ R'_{c,u} = c'_{u,d}\\,N'_{c,u}\\,s'_{c,u}\\,i'_{c,u} = $$"
           equationKeeper('R_c_ud_lt_eq', 2, 1)
       } else {
           var R_c_ud_lt_eq = "$$ R'_{c,u} = c'_{u,d}\\,N'_{c,u}\\,s'_{c,u}\\,i'_{c,u}\\,d_c = $$"
           equationKeeper('R_c_ud_lt_eq', 2, 2)
       }
   
       var R_g_dr_st_eq = "$$ R_{\\gamma} = \\frac{1}{2}\\gamma\\min\\left(l_{eff},b_{eff}\\right)N_{\\gamma}\\,s_{\\gamma}\\,i_{\\gamma} = $$"
       var R_g_dr_lt_eq = "$$ R'_{\\gamma} = \\frac{1}{2}\\gamma\\min\\left(l'_{eff},b'_{eff}\\right)N'_{\\gamma}\\,s'_{\\gamma}\\,i'_{\\gamma} = $$"
       var R_g_ud_st = 0
       var R_g_ud_st_eq = "$$ R_{\\gamma,u} = \\frac{1}{2}\\gamma\\min\\left(l_{eff,u},b_{eff,u}\\right)N_{\\gamma,u}\\,s_{\\gamma,u}\\,i_{\\gamma,u} = $$"
   
       if (ud_lt_af_d == 0) {
           var R_g_ud_lt_eq = "$$ R'_{\\gamma,u} = $$"
           equationKeeper('R_g_ud_lt_eq', 2, 1)
       } else {
           var R_g_ud_lt_eq = "$$ R'_{\\gamma,u} = \\frac{1}{2}\\gamma\\min\\left(l'_{eff,u},b'_{eff,u}\\right)N'_{\\gamma,u}\\,s'_{\\gamma,u}\\,i'_{\\gamma,u} = $$"
           equationKeeper('R_g_ud_lt_eq', 2, 2)
       }
   
       var R_total_dr_st_eq = "$$ R_t = \\left(R_{\\gamma} + R_q + R_c\\right)\\,A_{eff} = $$"
       var R_total_dr_lt_eq = "$$ R'_t = \\left(R'_{\\gamma} + R'_q + R'_c\\right)\\,A'_{eff} = $$"
       var R_total_ud_st_eq = "$$ R_{t,u} = \\left(R_{\\gamma,u} + R_{q,u} + R_{c,u}\\right)\\,A_{eff,u} = $$"
       var R_total_ud_lt_eq = "$$ R'_{t,u} = \\left(R'_{\\gamma,u} + R'_{q,u} + R'_{c,u}\\right)\\,A'_{eff,u} = $$"
       var R_total_eq = "$$ R_t = \\min\\left\\{\\begin{matrix} R_t \\\\ R'_t \\\\ R_{t,u} \\\\ R'_{t,u} \\end{matrix}\\right. = $$"
      
       var H_dr_st_eq = "$$ H_R = V_t\\tan\\left(\\phi_{pl,d}\\right) + A_{eff}\\,a_d = $$"
       var H_dr_lt_eq = "$$ H'_R = V_t\\tan\\left(\\phi'_{pl,d}\\right) + A'_{eff}\\,a'_d = $$"
       var H_ud_st_eq = "$$ H_{R,u} = \\min\\left(A_{eff,u}\\,c_{u,d},0.4\\,V_t\\right) = $$"
   
       if (ud_lt_af_d == 0) {
           var H_ud_lt_eq = "$$ H'_{R,u} = \\min\\left(A'_{eff,u}\\,c'_{u,d},0.4\\,V_t\\right) = $$"
           equationKeeper('H_ud_lt_eq', 2, 1)
       } else {
           var H_ud_lt_eq = "$$ H'_{R,u} = V_t\\tan\\left(\\phi'_{pl,u,d}\\right) + A'_{eff,u}\\,c'_{u,d} = $$"
           equationKeeper('H_ud_lt_eq', 2, 2)
       }
       var H_total_eq = "$$ H_{R,t} = \\min\\left\\{\\begin{matrix} H_R \\\\ H'_R \\\\ H_{R,u} \\\\ H'_{R,u} \\end{matrix}\\right. = $$"
   
       // moment capacity calculations
   
       // var gamma_c = 1.5;
       var gamma_c_eq = "$$ \\gamma_c = $$"
       var f_cd_eq = "$$ f_{cd} = \\frac{f_{ck}}{\\gamma_c} = $$"
       var f_cm_eq = "$$ f_{cm} = f_{ck}+8 = $$"
       var f_ctm_eq = "$$ f_{ctm} = 0.393\\,f_{ck}^{2/3} = $$"
       var E_cm_eq = "$$ E_{cm} = 22\\,\\left(\\frac{f_{cm}}{10}\\right) = $$"
       var sigma_r1_eq = "$$ \\sigma_{r1} = 0.45\\,f_{R1} = $$"
       var sigma_r4_eq = "$$ \\sigma_{r4} = 0.37\\,f_{R4} = $$"
       var gamma_m_eq = "$$ \\gamma_m = $$"
   
       if (height < 600) {
           var f_ctd_fl_eq = "$$ f_{ctd,fl} = 1.1\\,\\frac{f_{ctm}}{\\gamma_m}\\,\\left(\\frac{1.6-h}{1000}\\right) = $$"
       } else {
           var f_ctd_fl_eq = "$$ f_{ctd,fl} = 1.1\\,\\frac{f_{ctm}}{\\gamma_m} = $$"
       }
       var M_n_eq = "$$ M_n = f_{ctd,fl}\\,\\left(\\frac{h^2}{6}\\right) = $$"
   
       //choose steel quality (drop down)
   
       // var gamma_s = 1.2;
       var gamma_s_eq = "$$ \\gamma_s = $$"
       var f_yd_eq = "$$ f_{yd} = \\frac{f_{yk}}{\\gamma_s} = $$"
       var A_c_eq = "$$ A_c = h = $$"
       
       if (include_steel != 'on') {
           var rho_eq = "$$\\rho = $$"
           equationKeeper('rho_eq', 2, 1)
           
       } else  {
           var rho_eq = "$$\\rho = \\frac{A_s}{A_c} = $$"
           equationKeeper('rho_eq', 2, 2)
       }
       if (rho < 0.15) {
           var h_ux_eq = "$$ h_{ux} = 0.123\\,h = $$"
           equationKeeper('h_ux_eq', 3, 1)
       } else if (rho >= 0.15) {
           var h_ux_eq = "$$ h_{ux} = \\frac{0.5h(\\sigma_{R1}+\\sigma_{R4})+A_s\\,f_{yk}}{0.64\\,f_{ck}+0.5(\\sigma_{R1}+\\sigma_{R4})} =  $$"
           equationKeeper('h_ux_eq', 3, 2)
       }
       if (h_ux > 0.9 * height) {
           var h_ux_eq = "$$ h_{ux} = 0.9\\,h = $$"
           equationKeeper('h_ux_eq', 3, 3)
       }
        
       var cover_layer_eq = "$$ c = $$"
       var cover_layer2_eq = "$$ c = $$"
   
       if (rho == 0) {
           // var ef_height_eq = "$$ \\rho = 0\\% \\rightarrow d_{eff} = 0.75\\,h = $$"
           equationKeeper('ef_height_eq', 2, 1)
       } else if (rho > 0) {
           // var ef_height_eq = "$$ \\rho > 0\\% \\rightarrow d_{eff} = h - c = $$"
           equationKeeper('ef_height_eq', 2, 2)
       }
   
       if (f_ck <= 50) {
           var lambda_eq = "$$ \\lambda = $$"
           var eta_eq = "$$ \\eta = $$"
           equationKeeper('eta_eq', 2, 1)
           
       } else if (f_ck > 50) {
           var lambda_eq = "$$ \\lambda = 0.8-\\frac{f_{ck}-50}{400} = $$"
           var eta_eq = "$$ \\eta = 1.0-\\frac{f_{ck}-50}{200} = $$"
           equationKeeper('eta_eq', 2, 2)
       }
   
       var omega_eq = "$$ \\omega = \\frac{A_s\\,f_{yd}}{d_{eff}\\,\\eta\\,f_{cd}} = $$"
       var mu_eq = "$$ \\mu = \\omega\\left(1 - \\frac{1}{2}\\omega\\right) = $$"
   
       if (include_fiber != "on"){
           var M_p_eq = "$$ M_p = \\mu\\,d_{eff}^2\\,\\eta\\, f_{cd} = $$"
           equationKeeper('M_p_eq', 4, 1)
           var M_p_l_eq = "$$ M_{p,l} = M_p\\,b = $$"
           equationKeeper('M_p_l_eq', 4, 1)
           var M_p_b_eq = "$$ M_{p,b} = M_p\\,l = $$"
           equationKeeper('M_p_b_eq', 4, 1)
   
       } else if (include_fiber == "on") {
       
           if (rho == 0) {
               var M_p_eq = "$$ \\rho = 0\\% \\rightarrow M_p = \\frac{h^2}{\\gamma_m}\\left(0.29\\sigma_{r4}+0.16\\sigma_{r1}\\right) = $$"
               equationKeeper('M_p_eq', 4, 2)
               var M_p_l_eq = "$$ M_{p,l} = M_p\\,b =  $$"
               equationKeeper('M_p_l_eq', 4, 1)
               var M_p_b_eq = "$$ M_{p,b} = M_p\\,l =  $$"
               equationKeeper('M_p_b_eq', 4, 1)
   
           } else if (rho > 0 && rho <= 0.15) {
               var M_p_eq = "$$ 0\\% < \\rho \\leq 0.15\\% \\rightarrow M_p = \\frac{h^2}{\\gamma_m}\\left(0.29\\sigma_{r4}+0.16\\sigma_{r1}\\right) + \\frac{A_sf_{yk}\\left(d_{eff}-0.048h\\right)}{\\gamma_s} = $$"
               equationKeeper('M_p_eq', 4, 3)
               var M_p_l_eq = "$$ M_{p,l} = M_p\\,b =  $$"
               equationKeeper('M_p_l_eq', 4, 1)
               var M_p_b_eq = "$$ M_{p,b} = M_p\\,l =  $$"
               equationKeeper('M_p_b_eq', 4, 1)
           } else if (rho > 0.15) {
               var M_p_eq = "$$ \\rho > 0.15\\% \\rightarrow M_p = \\frac{0.5(\\sigma_{r1}-\\sigma_{r4})(h-h_{ux})(0.28\\,h_{ux}+0.33\\,h)}{\\gamma_m} + \\frac{\\sigma_{r4}(h-h_{ux})(0.11\\,h_{ux}+0.5\\,h)}{\\gamma_m} + \\frac{A_s\\,f_{yk}(d_{eff}-0.39\\,h_{ux})}{\\gamma_s} = $$"
               equationKeeper('M_p_eq', 4, 4)
               var M_p_l_eq = "$$ M_{p,l} = M_p\\,b =  $$"
               equationKeeper('M_p_l_eq', 4, 1)
               var M_p_b_eq = "$$ M_{p,b} = M_p\\,l =  $$"
               equationKeeper('M_p_b_eq', 4, 1)
           }
       }
   
   
   
       // positive moment calculations
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_total_dr_st_l >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_l_eq = "$$ a_l = \\frac{l}{2} - e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_l_eq = "$$ a_l = \\frac{l}{2} - e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_l_eq = "$$ a_l = \\frac{l}{2} + |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_l_eq = "$$ a_l = \\frac{l}{2} + |e_{c,l}| = $$"
       //             }
       //         }
       //     } else if (m_total_dr_st_l < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_l_eq = "$$ a_l = \\frac{l}{2} + e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_l_eq = "$$ a_l = \\frac{l}{2} + e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_l_eq = "$$ a_l = \\frac{l}{2} - |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_l_eq = "$$ a_l = \\frac{l}{2} - |e_{c,l}| = $$"
   
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_total_dr_st_l >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_l_eq = "$$ a_l = r - e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_l_eq = "$$ a_l = r - e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_l_eq = "$$ a_l = r + |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_l_eq = "$$ a_l = r + |e_{c,l}| = $$"
       //             }
       //         }
   
       //     } else if (m_total_dr_st_l < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_l_eq = "$$ a_l = r + e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_l_eq = "$$ a_l = r + e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_l_eq = "$$ a_l = r - |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_l_eq = "$$ a_l = r - |e_{c,l}| = $$"
       //             }
       //         }
       //     }
       // }
   
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_total_dr_lt_l >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_l_eq = "$$ a = \\frac{l}{2} - e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_l_eq = "$$ a = \\frac{l}{2} - e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_l_eq = "$$ a = \\frac{l}{2} + |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_l_eq = "$$ a = \\frac{l}{2} + |e_{c,l}| = $$"
       //             }
       //         }
       //     } else if (m_total_dr_lt_l < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_l_eq = "$$ a = \\frac{l}{2} + e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_l_eq = "$$ a = \\frac{l}{2} + e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_l_eq = "$$ a = \\frac{l}{2} - |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_l_eq = "$$ a = \\frac{l}{2} - |e_{c,l}| = $$"
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_total_dr_lt_l >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_l_eq = "$$ a = r - e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_l_eq = "$$ a = r - e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_l_eq = "$$ a = r + |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_l_eq = "$$ a = r + |e_{c,l}| = $$"
       //             }
       //         }
       //     } else if (m_total_dr_lt_l < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_l_eq = "$$ a = r + e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_l_eq = "$$ a = r + |e_{c,l}| = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_l_eq = "$$ a = r - e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_l_eq = "$$ a = r - |e_{c,l}| = $$"
       //             }
       //         }
       //     }
       // }
   
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_total_ud_st_l >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_l_eq = "$$ a = \\frac{l}{2} - e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_l_eq = "$$ a = \\frac{l}{2} - e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_l_eq = "$$ a = \\frac{l}{2} + |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_l_eq = "$$ a = \\frac{l}{2} + |e_{c,l}| = $$"
       //             }
       //         }
       //     } else if (m_total_ud_st_l < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_l_eq = "$$ a = \\frac{l}{2} + e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_l_eq = "$$ a = \\frac{l}{2} + e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_l_eq = "$$ a = \\frac{l}{2} - |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_l_eq = "$$ a = \\frac{l}{2} - |e_{c,l}| = $$"
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_total_ud_st_l >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_l_eq = "$$ a = r - e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_l_eq = "$$ a = r - e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_l_eq = "$$ a = r + |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_l_eq = "$$ a = r + |e_{c,l}| = $$"
       //             }
       //         }
       //     } else if (m_total_ud_st_l < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_l_eq = "$$ a = r + e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_l_eq = "$$ a = r + e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_l_eq = "$$ a = r - |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_l_eq = "$$ a = r - |e_{c,l}| = $$"
       //             }
       //         }
       //     }
       // }
   
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_total_ud_lt_l >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_l_eq = "$$ a = \\frac{l}{2} - e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_l_eq = "$$ a = \\frac{l}{2} - e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_l_eq = "$$ a = \\frac{l}{2} + |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_l_eq = "$$ a = \\frac{l}{2} + |e_{c,l}| = $$"
       //             }
       //         }
       //     } else if (m_total_ud_lt_l < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_l_eq = "$$ a = \\frac{l}{2} + e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_l_eq = "$$ a = \\frac{l}{2} + e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_l_eq = "$$ a = \\frac{l}{2} - |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_l_eq = "$$ a = \\frac{l}{2} - |e_{c,l}| = $$"
       //             }
       //         }
       //     }
   
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_total_ud_lt_l >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_l_eq = "$$ a = r - e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_l_eq = "$$ a = r - e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_l_eq = "$$ a = r + |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_l_eq = "$$ a = r + |e_{c,l}| = $$"
       //             }
       //         }
       //     } else if (m_total_ud_lt_l < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_l_eq = "$$ a = r + e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_l_eq = "$$ a = r + e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_l_eq = "$$ a = r - |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_l_eq = "$$ a = r - |e_{c,l}| = $$"
       //             }
       //         }
       //     }
       // }
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_total_dr_st_b >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_b_eq = "$$ a_b = \\frac{b}{2} - e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_b_eq = "$$ a_b = \\frac{b}{2} - e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_b_eq = "$$ a_b = \\frac{b}{2} + |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_b_eq = "$$ a_b = \\frac{b}{2} + |e_{c,b}| = $$"
       //             }
       //         }
       //     } else if (m_total_dr_st_b < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_b_eq = "$$ a_b = \\frac{b}{2} + e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_b_eq = "$$ a_b = \\frac{b}{2} + e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_b_eq = "$$ a_b = \\frac{b}{2} - |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_b_eq = "$$ a_b = \\frac{b}{2} - |e_{c,b}| = $$"
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_total_dr_st_b >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_b_eq = "$$ a_b = r - e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_b_eq = "$$ a_b = r - e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_b_eq = "$$ a_b = r + |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_b_eq = "$$ a_b = r + |e_{c,b}| = $$"
       //             }
       //         }
       //     } else if (m_total_dr_st_b < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_b_eq = "$$ a_b = r + e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_b_eq = "$$ a_b = r + e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_st_b_eq = "$$ a_b = r - |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_st_b_eq = "$$ a_b = r - |e_{c,b}| = $$"
       //             }
       //         }
       //     }
       // }
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_total_dr_lt_b >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_b_eq = "$$ a = \\frac{b}{2} - e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_b_eq = "$$ a = \\frac{b}{2} - e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_b_eq = "$$ a = \\frac{b}{2} + |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_b_eq = "$$ a = \\frac{b}{2} + |e_{c,b}| = $$"
       //             }
       //         }
       //     } else if (m_total_dr_lt_b < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_b_eq = "$$ a = \\frac{b}{2} + e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_b_eq = "$$ a = \\frac{b}{2} + e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_b_eq = "$$ a = \\frac{b}{2} - |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_b_eq = "$$ a = \\frac{b}{2} - |e_{c,b}| = $$"
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_total_dr_lt_b >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_b_eq = "$$ a = r - e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_b_eq = "$$ a = r - e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_b_eq = "$$ a = r + |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_b_eq = "$$ a = r + |e_{c,b}| = $$"
       //             }
       //         }
       //     } else if (m_total_dr_lt_b < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_b = radius + ec_vl_width
       //                 var lever_dr_lt_b_eq = "$$ a = r + e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_b = radius + ec_vl_width
       //                 var lever_dr_lt_b_eq = "$$ a = r + e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dr_lt_b_eq = "$$ a = r - |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dr_lt_b_eq = "$$ a = r - |e_{c,b}| = $$"
       //             }
       //         }
       //     }
       // }
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_total_ud_st_b >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_b_eq = "$$ a = \\frac{b}{2} - e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_b_eq = "$$ a = \\frac{b}{2} - e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_b_eq = "$$ a = \\frac{b}{2} + |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_b_eq = "$$ a = \\frac{b}{2} + |e_{c,b}| = $$"
       //             }
       //         }
       //     } else if (m_total_ud_st_b < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_b_eq = "$$ a = \\frac{b}{2} + e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_b_eq = "$$ a = \\frac{b}{2} + e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_b_eq = "$$ a = \\frac{b}{2} - |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_b_eq = "$$ a = \\frac{b}{2} - |e_{c,b}| = $$"
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_total_ud_st_b >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_b_eq = "$$ a = r - e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_b_eq = "$$ a = r - e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_b_eq = "$$ a = r + |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_b_eq = "$$ a = r + |e_{c,b}| = $$"
       //             }
       //         }
       //     } else if (m_total_ud_st_b < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_b_eq = "$$ a = r + e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_b_eq = "$$ a = r + e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_st_b_eq = "$$ a = r - |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_st_b_eq = "$$ a = r - |e_{c,b}| = $$"
       //             }
       //         }
       //     }
       // }
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_total_ud_lt_b >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_b_eq = "$$ a = \\frac{b}{2} - e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_b_eq = "$$ a = \\frac{b}{2} - e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_b_eq = "$$ a = \\frac{b}{2} + |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_b_eq = "$$ a = \\frac{b}{2} + |e_{c,b}| = $$"
       //             }
       //         }
       //     } else if (m_total_ud_lt_b < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_b_eq = "$$ a = \\frac{b}{2} + e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_b_eq = "$$ a = \\frac{b}{2} + e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_b_eq = "$$ a = \\frac{b}{2} - |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_b_eq = "$$ a = \\frac{b}{2} - |e_{c,b}| = $$"
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_total_ud_lt_b >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_b_eq = "$$ a = r - e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_b_eq = "$$ a = r - e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_b_eq = "$$ a = r + |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_b_eq = "$$ a = r + |e_{c,b}| = $$"
       //             }
       //         }
       //     } else if (m_total_ud_lt_b < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_b_eq = "$$ a = r + e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_b_eq = "$$ a = r + e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_ud_lt_b_eq = "$$ a = r - |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_ud_lt_b_eq = "$$ a = r - |e_{c,b}| = $$"
       //             }
       //         }
       //     }
       // }
   
   
   
   
   
   
   
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_dim_length >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_l_eq = "$$ a_l = \\frac{l}{2} - e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_l_eq = "$$ a_l = \\frac{l}{2} - e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_l_eq = "$$ a_l = \\frac{l}{2} + |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_l_eq = "$$ a_l = \\frac{l}{2} + |e_{c,l}| = $$"
       //             }
       //         }
       //     } else if (m_dim_length < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_l_eq = "$$ a_l = \\frac{l}{2} + e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_l_eq = "$$ a_l = \\frac{l}{2} + e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_l_eq = "$$ a_l = \\frac{l}{2} - |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_l_eq = "$$ a_l = \\frac{l}{2} - |e_{c,l}| = $$"
   
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_dim_length >= 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_l_eq = "$$ a_l = r - e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_l_eq = "$$ a_l = r - e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_l_eq = "$$ a_l = r + |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_l_eq = "$$ a_l = r + |e_{c,l}| = $$"
       //             }
       //         }
   
       //     } else if (m_dim_length < 0) {
       //         if (ec_vl_length >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_l_eq = "$$ a_l = r + e_{c,l} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_l_eq = "$$ a_l = r + e_{c,l} = $$"
       //             }
       //         } else if (ec_vl_length < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_l_eq = "$$ a_l = r - |e_{c,l}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_l_eq = "$$ a_l = r - |e_{c,l}| = $$"
       //             }
       //         }
       //     }
       // }
   
       // if (point_foundation_shape == 'rectangular') {
       //     if (m_dim_width >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_b_eq = "$$ a_b = \\frac{b}{2} - e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_b_eq = "$$ a_b = \\frac{b}{2} - e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_b_eq = "$$ a_b = \\frac{b}{2} + |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_b_eq = "$$ a_b = \\frac{b}{2} + |e_{c,b}| = $$"
       //             }
       //         }
       //     } else if (m_dim_width < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_b_eq = "$$ a_b = \\frac{b}{2} + e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_b_eq = "$$ a_b = \\frac{b}{2} + e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_b_eq = "$$ a_b = \\frac{b}{2} - |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_b_eq = "$$ a_b = \\frac{b}{2} - |e_{c,b}| = $$"
   
       //             }
       //         }
       //     }
       // } else if (point_foundation_shape == 'circular') {
       //     if (m_dim_width >= 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_b_eq = "$$ a_b = r - e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_b_eq = "$$ a_b = r - e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_b_eq = "$$ a_b = r + |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_b_eq = "$$ a_b = r + |e_{c,b}| = $$"
       //             }
       //         }
   
       //     } else if (m_dim_width < 0) {
       //         if (ec_vl_width >= 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_b_eq = "$$ a_b = r + e_{c,b} = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_b_eq = "$$ a_b = r + e_{c,b} = $$"
       //             }
       //         } else if (ec_vl_width < 0) {
       //             if (column_shape == 'rectangular') {
       //                 var lever_dim_b_eq = "$$ a_b = r - |e_{c,b}| = $$"
       //             } else if (column_shape == 'circular') {
       //                 var lever_dim_b_eq = "$$ a_b = r - |e_{c,b}| = $$"
       //             }
       //         }
       //     }
       // }
   
   
    
   //     if (column_shape == 'rectangular') {
   //         var lever_dr_st_l_cor_eq = "$$ a_{l,cor} = \\frac{\\sqrt{2}\\, \\sqrt{8a_l^2-4a_l l_c+l_c^2}}{4} = $$"
   //         var lever_dim_l_cor_eq = "$$ a_{l,cor} = \\frac{\\sqrt{2}\\, \\sqrt{8a_l^2-4a_l l_c+l_c^2}}{4} = $$"
   //         var lever_dr_st_b_cor_eq = "$$ a_{b,cor} = \\frac{\\sqrt{2}\\, \\sqrt{8a_b^2-4a_b b_c+b_c^2}}{4} = $$"
   //         var lever_dim_b_cor_eq = "$$ a_{b,cor} = \\frac{\\sqrt{2}\\, \\sqrt{8a_b^2-4a_b b_c+b_c^2}}{4} = $$"
   //     } else if (column_shape == 'circular') {
   //         var lever_dr_st_l_cor_eq = "$$ a_{l,cor} = \\frac{\\sqrt{2}\\, \\sqrt{2a_l^2-2a_l r_c+r_c^2}}{2} = $$"
   //         var lever_dim_l_cor_eq = "$$ a_{l,cor} = \\frac{\\sqrt{2}\\, \\sqrt{2a_l^2-2a_l r_c+r_c^2}}{2} = $$"
   //         var lever_dr_st_b_cor_eq = "$$ a_{b,cor} = \\frac{\\sqrt{2}\\, \\sqrt{2a_b^2-2a_b r_c+r_c^2}}{2} = $$"
   //         var lever_dim_b_cor_eq = "$$ a_{b,cor} = \\frac{\\sqrt{2}\\, \\sqrt{2a_b^2-2a_b r_c+r_c^2}}{2} = $$"
   //  }
   
       // var M_yl_l_eq = "$$ M_{Ed,yl,l} = \\frac{1}{2\\pi}V_e\\frac{l}{b} \\, b = $$"
       // var M_yl_b_eq = "$$ M_{Ed,yl,b} = \\frac{1}{2\\pi}V_e\\frac{b}{l} \\, l = $$"
   
   
       // if (lever_dr_st_l <= ef_dr_st_l) {
       //     var M_dr_st_l_eq = "$$ M_{Ed,p,l} = \\frac{1}{2}\\frac{V_t}{A_{eff}}\\,a_{l,cor}^2 \\, b_{eff} = $$"
       // } else if (lever_dr_st_l > ef_dr_st_l) {
       //     var M_dr_st_l_eq = "$$ M_{Ed,p,l} = \\frac{V_t}{A_{eff}}\\,l_{eff}\\left(a_{l,cor} - \\frac{l_{eff}}{2}\\right) \\, b_{eff} = $$"
       // }
   
       // if (lever_dr_lt_l <= ef_dr_lt_l) {
       //     var M_dr_lt_l_eq = "$$ M'_{Ed,p,l} = \\frac{1}{2}\\frac{V_t}{A'_{eff}}\\,a_{l,cor}^2 \\, b'_{eff} = $$"
       // } else if (lever_dr_lt_l > ef_dr_lt_l) {
       //     var M_dr_lt_l_eq = "$$ M'_{Ed,p,l} = \\frac{V_t}{A'_{eff}}\\,l'_{eff}\\left(a_{l,cor} - \\frac{l'_{eff}}{2}\\right) \\, b'_{eff} = $$"
       // }
   
       
       // if (lever_ud_st_l <= ef_ud_st_l) {
       //     var M_ud_st_l_eq = "$$ M_{Ed,p,u,l} = \\frac{1}{2}\\frac{V_t}{A_{eff,u}}\\,a_{l,cor}^2 \\, b_{eff,u} = $$"
       // } else if (lever_ud_st_l > ef_ud_st_l) {
       //     var M_ud_st_l_eq = "$$ M_{Ed,p,u,l} = \\frac{V_t}{A_{eff,u}}\\,l_{eff,u}\\left(a_{l,cor} - \\frac{l_{eff,u}}{2}\\right) \\, b_{eff,u} = $$"
       // }
   
       // if (lever_ud_lt_l <= ef_ud_lt_l) {
       //     var M_ud_lt_l_eq = "$$ M'_{Ed,p,u,l} = \\frac{1}{2}\\frac{V_t}{A_{eff,u}}\\,a_{l,cor}^2 \\, b'_{eff,u} = $$"
       // } else if (lever_ud_lt_l > ef_ud_lt_l) {
       //     var M_ud_lt_l_eq = "$$ M'_{Ed,p,u,l} = \\frac{V_t}{A'_{eff,u}}\\,l'_{eff,u}\\left(a_{l,cor} - \\frac{l'_{eff,u}}{2}\\right) \\, b'_{eff,u} = $$"
       // }
   
       // if (lever_dim_l <= ef_dim_l) {
       //     var M_dim_l_eq = "$$ M_{Ed,p,l} = \\frac{1}{2}\\frac{V_t}{A_{eff}}\\,a_{l,cor}^2 \\, b_{eff} = $$"
       // } else if (lever_dim_l > ef_dim_l) {
       //     var M_dim_l_eq = "$$ M_{Ed,p,l} = \\frac{V_t}{A_{eff}}\\,l_{eff}\\left(a_{l,cor} - \\frac{l_{eff}}{2}\\right) \\, b_{eff} = $$"
       // }
   
       
       // if (lever_dr_st_b <= ef_dr_st_b) {
       //     var M_dr_st_b_eq = "$$ M_{Ed,p,b} = \\frac{1}{2}\\frac{V_t}{A_{eff}}\\,a_{b,cor}^2 \\, l_{eff} = $$"
       // } else if (lever_dr_st_b > ef_dr_st_b) {
       //     var M_dr_st_b_eq = "$$ M_{Ed,p,b} = \\frac{V_t}{A_{eff}}\\,b_{eff}\\left(a_{b,cor} - \\frac{b_{eff}}{2}\\right) \\, l_{eff} = $$"
       // }
   
       // if (lever_dr_lt_b <= ef_dr_lt_b) {
       //     var M_dr_lt_b_eq = "$$ M'_{Ed,p,b} = \\frac{1}{2}\\frac{V_t}{A'_{eff}}\\,a_{b,cor}^2 \\, l'_{eff} = $$"
       // } else if (lever_dr_lt_b > ef_dr_lt_b) {
       //     var M_dr_lt_b_eq = "$$ M'_{Ed,p,b} = \\frac{V_t}{A'_{eff}}\\,b'_{eff}\\left(a_{b,cor} - \\frac{b'_{eff}}{2}\\right) \\, l'_{eff} = $$"
       // }
   
       // if (lever_ud_st_b <= ef_ud_st_b) {
       //     var M_ud_st_b_eq = "$$ M_{Ed,p,u,b} = \\frac{1}{2}\\frac{V_t}{A_{eff,u}}\\,a_{b,cor}^2 \\, l_{eff,u} = $$"
       // } else if (lever_ud_st_b > ef_ud_st_b) {
       //     var M_ud_st_b_eq = "$$ M_{Ed,p,u,b} = \\frac{V_t}{A_{eff,u}}\\,b_{eff,u}\\left(a_{b,cor} - \\frac{b_{eff,u}}{2}\\right) \\, l_{eff,u} = $$"
       // }
   
       // if (lever_ud_lt_b <= ef_ud_lt_b) {
       //     var M_ud_lt_b_eq = "$$ M'_{Ed,p,u,b} = \\frac{1}{2}\\frac{V_t}{A_{eff,u}}\\,a_{b,cor}^2 \\, l'_{eff,u} = $$"
       // } else if (lever_ud_lt_b > ef_ud_lt_b) {
       //     var M_ud_lt_b_eq = "$$ M'_{Ed,p,u,b} = \\frac{V_t}{A'_{eff,u}}\\,b'_{eff,u}\\left(a_{b,cor} - \\frac{b'_{eff,u}}{2}\\right) \\, l'_{eff,u} = $$"
       // }
       // if (lever_dim_b <= ef_dim_b) {
       //     var M_dim_b_eq = "$$ M_{Ed,p,b} = \\frac{1}{2}\\frac{V_t}{A_{eff}}\\,a_{b,cor}^2 \\, l_{eff} = $$"
       // } else if (lever_dim_b > ef_dim_b) {
       //     var M_dim_b_eq = "$$ M_{Ed,p,b} = \\frac{V_t}{A_{eff}}\\,b_{eff}\\left(a_{b,cor} - \\frac{b_{eff}}{2}\\right) \\, l_{eff} = $$"
       // }  
   
   
       // // Used for geo both
       // var M_final_l_eq = "$$ M_{Ed,l} = \\max\\left(M_{Ed,yl,l} \\, , \\, M_{Ed,p,l} \\, , \\, M'_{Ed,p,l} \\, , \\, M_{Ed,p,u,l} \\, , \\, M'_{Ed,p,u,l} \\right) = $$"
       // var M_final_b_eq = "$$ M_{Ed,b} = \\max\\left(M_{Ed,yl,b} \\, , \\, M_{Ed,p,b} \\, , \\, M'_{Ed,p,b} \\, , \\, M_{Ed,p,u,b} \\, , \\, M'_{Ed,p,u,b} \\right) = $$"
          
       // punching shear calculations
       var v_eq = "$$ k_2 = 0.6\\left(1 - \\frac{f_{ck}}{250}\\right) = $$"
       var rho_total_eq = "$$ \\rho = $$"
   
       if (rho_total == 0) {
           // var k_eq = "$$ k = \\min\\left(1 + \\left(\\frac{200}{d_{eff}}\\right)^{1/2} \\, , \\, 2 \\right) = $$"
           equationKeeper('k_eq', 2, 1)
       } else {
           // var k_eq = "$$ k = \\min\\left(1 + \\left(\\frac{200}{d_{eff}}\\right)^{1/2} \\, , \\, 2 \\right) = $$"
           equationKeeper('k_eq', 2, 2)
       }
   
       var v_max_eq = "$$ v_{max} = 0.5\\,k_2\\,f_{cd} = $$"
       var v_c_eq = "$$ v_{Rd,c,min} = 0.035\\,k^{1.5}\\,f_{ck}^{0.5} = $$"
       var v_r_eq = "$$ v_{Rd,c} = \\max\\left(\\frac{0.18\\,k}{\\gamma_c}\\left(100\\,\\rho\\,f_{ck}\\right)^{1/3} \\, , \\, v_{Rd,c,min}\\right) =$$"
       var v_f_eq = "$$ v_{Rd,f} = 0.015\\left(f_{R1}+f_{R2}+f_{R3}+f_{R4}\\right) = $$"
   
       if (column_shape == 'rectangular') {
           var u_0_eq = "$$ u_0 = 2\\left(l_c+b_c\\right) = $$"
       } else if (column_shape == 'circular') {
           var u_0_eq = "$$ u_0 = 2\\,\\pi\\,r_c = $$"
       }
   
       if (column_shape == 'rectangular') {
           // var u_0_eq = "$$ u_0 = 2\\left(l_c+b_c\\right) = $$"
           equationKeeper('u_0_eq', 2, 1)
       } else if (column_shape == 'circular') {
           // var u_0_eq = "$$ u_0 = 2\\,\\pi\\,r_c = $$"
           equationKeeper('u_0_eq', 2, 2)
       }
   
       if (column_shape == 'rectangular') {
           if (rho == 0) {
               var u_1_eq = "$$ u_1 = 2\\,\\left(l_c + b_c + 2\\,\\pi\\,d_{eff}\\right) = $$"
               equationKeeper('u_1_eq', 4, 1)
   
           } else {
               var u_1_eq = "$$ u_1 = 2\\,\\left(l_c + b_c + 2\\,\\pi\\,d_{eff}\\right) = $$"
               equationKeeper('u_1_eq', 4, 2)
           }
       } else if (column_shape == 'circular') {
           if (rho == 0) {
               var u_1_eq = "$$ u_1 = 2\\,\\pi\\,\\left(r_c + 2\\,d_{eff}\\right) = $$"
               equationKeeper('u_1_eq', 4, 3)
           } else {
               var u_1_eq = "$$ u_1 = 2\\,\\pi\\,\\left(r_c + 2\\,d_{eff}\\right) = $$"
               equationKeeper('u_1_eq', 4, 4)
           }
       }
   
   
       if (column_shape == 'rectangular') {
           var A_u_0_eq = "$$ A_0 = l_c\\,b_c = $$"
   
       } else if (column_shape == 'circular') {
           var A_u_0_eq = "$$ A_0 = \\pi\\,r_c^2 = $$"
   
       }
   
   
   
   
       if (column_shape == 'rectangular') {
           if (rho == 0) {
               var A_u_1_eq = "$$ A_1 = l_c\\,b_c + 4\\cdot d\\left(l_c+b_c\\right)+4\\,\\pi\\,\\left(d\\right)^2 = $$"
   
           } else {
               var A_u_1_eq = "$$ A_1 = l_c\\,b_c + 4\\,d\\left(l_c+b_c\\right)+4\\,\\pi\\,d^2 = $$"
   
           }
       } else if (column_shape == 'circular') {
           if (rho == 0) {
               var A_u_1_eq = "$$ A_1 = \\pi\\,\\left(r_c + 2\\,d\\right)^2 = $$"
   
           } else {
               var A_u_1_eq = "$$ A_1 = \\pi\\,\\left(r_c + 2\\,d\\right)^2 = $$"
   
           }
       }
   
   
       if (vl_total_dr_st >= (vl_total_dr_st - self_weight) * A_u_0 / A_eff_dr_st) {
           var V_Ed_red_0_dr_st_eq = "$$ V_{Ed,red,0} =  $$"
       } else if (vl_total_dr_st < (vl_total_dr_st - self_weight) * A_u_0 / A_eff_dr_st) {
           var V_Ed_red_0_dr_st_eq = "$$ V_{Ed,red,0} =  $$"
       }
   
       if (vl_total_dr_lt >= (vl_total_dr_lt - self_weight) * A_u_0 / A_eff_dr_lt) {
           var V_Ed_red_0_dr_lt_eq = "$$ V'_{Ed,red,0} =  $$"
       } else if (vl_total_dr_lt < (vl_total_dr_lt - self_weight) * A_u_0 / A_eff_dr_lt) {
           var V_Ed_red_0_dr_lt_eq = "$$ V'_{Ed,red,0} =  $$"
       }
   
       if (vl_total_ud_st >= (vl_total_ud_st - self_weight) * A_u_0 / A_eff_ud_st) {
           var V_Ed_red_0_ud_st_eq = "$$ V_{Ed,red,0,u} =  $$"
   
       } else if (vl_total_ud_st < (vl_total_ud_st - self_weight) * A_u_0 / A_eff_ud_st) {
           var V_Ed_red_0_ud_st_eq = "$$ V_{Ed,red,0,u} =  $$"
       }
   
       if (vl_total_ud_lt >= (vl_total_ud_lt - self_weight) * A_u_0 / A_eff_ud_lt) {
           var V_Ed_red_0_ud_lt_eq = "$$ V'_{Ed,red,0,u} =  $$"
       } else if (vl_total_ud_lt < (vl_total_ud_lt - self_weight) * A_u_0 / A_eff_ud_lt) {
           var V_Ed_red_0_ud_lt_eq = "$$ V'_{Ed,red,0,u} =  $$"
       }
   
   
       if (point_foundation_shape == 'rectangular') {
           if (vl_total_internal >= (vl_total_internal - self_weight) * A_u_0 / (length / 1000 * width / 1000)) {
               var V_Ed_red_0_internal_eq = "$$ V_{Ed,red,0} =  $$"
           } else if (vl_total_internal < (vl_total_internal - self_weight) * A_u_0 / (length / 1000 * width / 1000)) {
               var V_Ed_red_0_internal_eq = "$$ V_{Ed,red,0} =  $$"
           }
       } else if (point_foundation_shape == 'circular') {
           if (vl_total_internal >= (vl_total_internal - self_weight) * A_u_0 / (Math.PI * Math.pow(radius / 1000, 2))) {
               var V_Ed_red_0_internal_eq = "$$ V_{Ed,red,0} =  $$"
           } else if (vl_total_internal < (vl_total_internal - self_weight) * A_u_0 / (Math.PI * Math.pow(radius / 1000, 2))) {
               var V_Ed_red_0_internal_eq = "$$ V_{Ed,red,0} =  $$"
           }
       }
   
       if (point_foundation_shape == 'rectangular') {
           if (vl_dim_total >= (vl_dim_total - self_weight) * A_u_0 / (length / 1000 * width / 1000)) {
               var V_Ed_red_0_dim_eq = "$$ V_{Ed,red,0} =  $$"
           } else if (vl_dim_total < (vl_dim_total - self_weight) * A_u_0 / (length / 1000 * width / 1000)) {
               var V_Ed_red_0_dim_eq = "$$ V_{Ed,red,0} =  $$"
           }
       } else if (point_foundation_shape == 'circular') {
           if (vl_dim_total >= (vl_dim_total - self_weight) * A_u_0 / (Math.PI * Math.pow(radius / 1000, 2))) {
               var V_Ed_red_0_dim_eq = "$$ V_{Ed,red,0} =  $$"
           } else if (vl_dim_total < (vl_dim_total - self_weight) * A_u_0 / (Math.PI * Math.pow(radius / 1000, 2))) {
               var V_Ed_red_0_dim_eq = "$$ V_{Ed,red,0} =  $$"
   
           }
       }
   
   
   
       if (vl_total_dr_st >= (vl_total_dr_st - self_weight) * A_u_1 / A_eff_dr_st) {
           var V_Ed_red_1_dr_st_eq = "$$ V_{Ed,red,1} =  $$"
   
       } else if (vl_total_dr_st < (vl_total_dr_st - self_weight) * A_u_1 / A_eff_dr_st) {
           var V_Ed_red_1_dr_st_eq = "$$ V_{Ed,red,1} =  $$"
   
       }
   
       if (vl_total_dr_lt >= (vl_total_dr_lt - self_weight) * A_u_1 / A_eff_dr_lt) {
           var V_Ed_red_1_dr_lt_eq = "$$ V'_{Ed,red,1} =  $$"
       } else if (vl_total_dr_lt < (vl_total_dr_lt - self_weight) * A_u_1 / A_eff_dr_lt) {
           var V_Ed_red_1_dr_lt_eq = "$$ V'_{Ed,red,1} =  $$"
   
       }
   
       if (vl_total_ud_st >= (vl_total_ud_st - self_weight) * A_u_1 / A_eff_ud_st) {
           var V_Ed_red_1_ud_st_eq = "$$ V_{Ed,red,1,u} =  $$"
   
       } else if (vl_total_ud_st < (vl_total_ud_st - self_weight) * A_u_1 / A_eff_ud_st) {
           var V_Ed_red_1_ud_st_eq = "$$ V_{Ed,red,1,u} =  $$"
   
       }
   
       if (vl_total_ud_lt >= (vl_total_ud_lt - self_weight) * A_u_1 / A_eff_ud_lt) {
           var V_Ed_red_1_ud_lt_eq = "$$ V'_{Ed,red,1,u} =  $$"
   
       } else if (vl_total_ud_lt < (vl_total_ud_lt - self_weight) * A_u_1 / A_eff_ud_lt) {
           var V_Ed_red_1_ud_lt_eq = "$$ V'_{Ed,red,1,u} =  $$"
       }
   
   
   
       if (point_foundation_shape == 'rectangular') {
           if (vl_total_internal >= (vl_total_internal - self_weight) * A_u_1 / (length / 1000 * width / 1000)) {
               var V_Ed_red_1_internal_eq = "$$ V_{Ed,red,1} =  $$"
           } else if (vl_total_internal < (vl_total_internal - self_weight) * A_u_1 / (length / 1000 * width / 1000)) {
               var V_Ed_red_1_internal_eq = "$$ V_{Ed,red,1} =  $$"
           }
       } else if (point_foundation_shape == 'circular') {
           if (vl_total_internal >= (vl_total_internal - self_weight) * A_u_1 / (Math.PI * Math.pow(radius / 1000, 2))) {
               var V_Ed_red_1_internal_eq = "$$ V_{Ed,red,1} =  $$"
           } else if (vl_total_internal < (vl_total_internal - self_weight) * A_u_1 / (Math.PI * Math.pow(radius / 1000, 2))) {
               var V_Ed_red_1_internal_eq = "$$ V_{Ed,red,1} =  $$"
           }
       }
   
       if (point_foundation_shape == 'rectangular') {
           if (vl_dim_total >= (vl_dim_total - self_weight) * A_u_1 / (length / 1000 * width / 1000)) {
               var V_Ed_red_1_dim_eq = "$$ V_{Ed,red,1} =  $$"
           } else if (vl_dim_total < (vl_dim_total - self_weight) * A_u_1 / (length / 1000 * width / 1000)) {
               var V_Ed_red_1_dim_eq = "$$ V_{Ed,red,1} =  $$"
           }
       } else if (point_foundation_shape == 'circular') {
           if (vl_dim_total >= (vl_dim_total - self_weight) * A_u_1 / (Math.PI * Math.pow(radius / 1000, 2))) {
               var V_Ed_red_1_dim_eq = "$$ V_{Ed,red,1} =  $$"
           } else if (vl_dim_total < (vl_dim_total - self_weight) * A_u_1 / (Math.PI * Math.pow(radius / 1000, 2))) {
               var V_Ed_red_1_dim_eq = "$$ V_{Ed,red,1} =  $$"
           }
       }
       var P_u_0_eq = "$$ P_0 = v_{max}\\,u_0\\,d_{eff} = $$"
   
       if (include_fiber != "on") {
           var P_u_1_eq = "$$ P_1 = v_{Rd,c}\\,u_1\\,d_{eff} = $$"
           equationKeeper('P_u_1_eq', 2, 1)
       } else {
           var P_u_1_eq = "$$ P_1 = \\left(v_{Rd,c} + v_{Rd,f}\\right)\\,u_1\\,d_{eff}= $$"
           equationKeeper('P_u_1_eq', 2, 2)
       }
   
       var P_u_eq = "$$ P = \\min\\left(P_0 \\, , \\, P_1 \\right) = $$"
   
   // 6. SVG Diagrams
   
           if (location_name == 'calculations_point_foundation_output') {
   
               // PDF Reduction factor
              // size reduced by half /2
   
               var slidewidth = 1200/2
               var slideheight = 2000/2
               var reduction_factor_length = Math.ceil(length / (slidewidth - 260))
   
               var reduction_factor_width = Math.ceil(width / (slidewidth - 260)) ;
   
               var reduction_factor_height = Math.ceil((height) / (slideheight - 380)) 
   
               var reduction_factor = Math.max(reduction_factor_length, reduction_factor_width, reduction_factor_height)
   
           }
   
           if (location_name == 'calculations_point_foundation') {
   
               // size reduced by half /2
               var slidewidth = (document.getElementById('slideOut_diagram').offsetWidth)/2;
               var slideheight = 1000/2;
   
               
               // Input Screen Slide out Reduction factor
               // var reduction_factor = 4  
   
               if(length > 0) {
                   reduction_length = length
               } else {
                   reduction_length = 300
               }
   
               if (point_foundation_shape == "rectangular") {
   
                   if(width > 0) {
                       reduction_width = width
                   } else {
                       reduction_width = 250
                   }
   
               } else if (point_foundation_shape == "circular") {
   
                   if(radius > 0) {
                       reduction_width = radius * 2
                   } else {
                       reduction_width = 250
                   }
   
               }
               
   
               if(height > 0) {
                   reduction_height = height
               } else {
                   reduction_height = 300
               }
   
               var reduction_factor_length = Math.ceil(reduction_length / (slidewidth - 260))
   
               var reduction_factor_width = Math.ceil(reduction_width / (slidewidth - 260)) ;
   
               var reduction_factor_height = Math.ceil((reduction_height) / (slideheight - 380)) 
   
               var reduction_factor = Math.max(reduction_factor_length, reduction_factor_width, reduction_factor_height)
               
           }
   
           
   
   
           
   
           // SVG Inputs
   
           if (depth > 0 ) {
               var svg_depth = depth/reduction_factor;
           }else if (depth == 0) {
               var svg_depth = 0;
           } else if (Number.isNaN(depth)) {
               var svg_depth = 200;
           }
   
   
           // Check point foundation shape
           if (point_foundation_shape == "rectangular") {
   
               if (width > 0 ) {
                   var svg_width = width/reduction_factor;
                   var svg_width_value = width;
                   } else {
                   var svg_width = 250; 
                   var svg_width_value = 0;
                   }
   
                   var svg_width_unit = 'b';    
   
   
                   if (length > 0 ) {
                       var svg_length = length/reduction_factor;
                       var svg_length_value = length;
                       } else {
                       var svg_length = 250; 
                       var svg_length_value = 0;
                       }
               
                       var svg_length_unit = 'l'; 
                       var svg_width_unit = 'b';
   
           } else if (point_foundation_shape == "circular") {
   
   
               
               if (radius > 0 ) {
                   var svg_width = 2 * radius/reduction_factor;
                   var svg_width_value = 2 * radius;
                   } else {
                   var svg_width = 250; 
                   var svg_width_value = 0;
                   }
   
                 
   
                   if (radius > 0  ) {
                       var svg_length = 2 * radius/reduction_factor;
                       var svg_length_value = 2 * radius;
                       var svg_radius = (radius)/reduction_factor;
                       } else {
                       var svg_length = 250; 
                       var svg_length_value = 0;
                       var svg_radius = 125;
                       }
   
                
   
                   var svg_length_unit = '2r';
                   var svg_width_unit = '2r';  
   
                   
                   var svg_radius_length_start = 100 + svg_radius;
                   var svg_radius_width_start = 140 + svg_radius
           }
   
   
      
   
           // Check columns shape
           if (column_shape == "rectangular") {
   
   
   
               if (column_width > 0 )  {
                   var svg_wall_width_sw = column_width/reduction_factor;
                   var svg_wall_value_sw = column_width;
                   } else {
                   var svg_wall_width_sw = 75; 
                   var svg_wall_value_sw = 0;        
                   }
   
   
                   if (column_length > 0 ) {
                       var svg_wall_width_sl = column_length/reduction_factor;
                       var svg_wall_value_sl = column_length;
                       } else {
                       var svg_wall_width_sl = 75; 
                       var svg_wall_value_sl = 0;            
                       }
                   
               
   
                   var svg_wall_unit_sw = 'b';
                   var svg_wall_unit_sl = 'l';
   
           } else if (column_shape == "circular") {
   
               if (column_radius > 0 ) {
                   var svg_wall_width_sw = column_radius;
                   var svg_wall_value_sw = column_radius*2;
                   var svg_wall_width_sl = column_radius;
                   var svg_wall_value_sl = column_radius*2;
                   }  else {
                   var svg_wall_width_sw = 75; 
                   var svg_wall_value_sw = 0;
                   var svg_wall_width_sl = 75; 
                   var svg_wall_value_sl = 0;
                   }
   
                   var svg_wall_unit_sw = '2r';
                   var svg_wall_unit_sl = '2r';
   
   
               }
   
   
   
   
   
           if (Number.isNaN(ec_vl_width)) {
           var svg_wall_eccentricity_sw = 0;
           } else {
           var svg_wall_eccentricity_sw = ec_vl_width/reduction_factor;  
           }
   
   
           if (Number.isNaN(ec_vl_length)) {
           var svg_wall_eccentricity_sl = 0;
           }  else {
           var svg_wall_eccentricity_sl = ec_vl_length/reduction_factor;
           }
   
   
   
           if (Number.isNaN(height)) {
           var svg_height = 300;
           } else {
           var svg_height = height/reduction_factor;
           }
   
           var svg_concrete_type = concrete_type_text;
           var svg_fiber_dosage = fiber_dosage_kg;
   
   
           if (include_steel == 'on') {
               if (cover_layer > 0) {
                   var svg_cover_layer = cover_layer / reduction_factor;
               } else {
                   var svg_cover_layer = 15 / reduction_factor;
               }
           }
   
           var svg_long_diameter = steel_diameter/reduction_factor;
           var svg_long_number = 5;
           var svg_bars = steel_mesh_type;
   
           var svg_steel_diameter = steel_diameter/reduction_factor;
           var svg_steel_distance = steel_distance/reduction_factor;
   
   
   
           // Calculated Variables
           var canvas_height = svg_height + 220;
           var canvas_width_sw = svg_width + 200;
           var canvas_width_pl = svg_width + 320;
           var canvas_width_sl = svg_length + 200;
   
           var middle_sw = (100 + (svg_width/2));
           var middle_sw_m30 = (100 + (svg_width/2))-30;
   
           var middle_sl = (100 + (svg_length/2));
           var middle_sl_m30 = (100 + (svg_length/2))-30;
   
           var plan_middle_w = (140 + (svg_width/2));
           var plan_middle_w_m10 = plan_middle_w-10;
           var plan_middle_w_m30 = plan_middle_w-30;
           var plan_middle_w_p10 = plan_middle_w+10;
   
           var plan_middle_l = (100 + (svg_length/2));
           var plan_middle_l_m10 = (100 + (svg_length/2))-10;
           var plan_middle_l_m20 = (100 + (svg_length/2))-20;
           var plan_middle_l_p10 = (100 + (svg_length/2))+10;
   
           var plan_wall_edge_w = plan_middle_w - (svg_wall_width_sw/2) + svg_wall_eccentricity_sw
           var plan_wall_bott_edge_w = plan_wall_edge_w + svg_wall_width_sw
   
   
           var plan_wall_middle_edge_w = -(plan_wall_edge_w + (svg_wall_width_sw/2)+30)
           var plan_line_w_label = svg_length + 100 + 30;
           var plan_wall_edge_l = plan_middle_l - (svg_wall_width_sl/2) + svg_wall_eccentricity_sl
           var plan_wall_middle_l = plan_middle_l + svg_wall_eccentricity_sl
           var plan_wall_middle_l_label = plan_middle_l + (svg_wall_eccentricity_sl/2)
           var plan_wall_middle_l_m10 = plan_wall_middle_l - 10
           var plan_wall_middle_l_m10_neg = plan_wall_middle_l + 10
           var plan_wall_middle_w = plan_middle_w + svg_wall_eccentricity_sw
           var plan_wall_middle_w_m10 = plan_wall_middle_w - 10
           var plan_wall_middle_w_m10_neg = plan_wall_middle_w + 10
           var plan_wall_middle_w_p30 = plan_wall_middle_w + 30
           var plan_wall_middle_w_label_p60 = -(plan_wall_middle_w + (svg_wall_eccentricity_sl/2)+60)
           var plan_wall_middle_w_label = -(plan_wall_middle_w + (svg_wall_eccentricity_sl/2))
   
   
   
           var ground_depth = (140 + (svg_height-svg_depth));
           var ground_depth_m10 = ground_depth-10;
           var ground_depth_m20 = ground_depth-20;
           var ground_depth_m30 = ground_depth-30;
   
           var ground_width_sw = (200 + svg_width);
           var ground_width_sw_m10 = ground_width_sw - 10;
           var ground_width_sw_p40 = ground_width_sw + 40;
   
           var ground_width_sl = (200 + svg_length);
           var ground_width_sl_m10 = ground_width_sl - 10;
   
           var ground_depth_base = ground_depth + svg_depth;
           var ground_depth_base_p15 = ground_depth_base + 15;
           var ground_depth_base_p100 = ground_depth_base +60;
   
           var cover_layer_top = 140 + svg_cover_layer + (svg_long_diameter/2);
           var cover_layer_base = ground_depth_base - svg_cover_layer;
           var cover_layer_base_label = cover_layer_base - (svg_long_diameter/2);
   
   
           var wall_edge_sw = middle_sw + svg_wall_eccentricity_sw - (svg_wall_width_sw/2);
           var wall_edge_sw_label = wall_edge_sw + (svg_wall_width_sw/2) - 30;
           var wall_edge_sw_label_p10 = wall_edge_sw_label + 10;
   
   
   
   
           var wall_edge_sl = middle_sl + svg_wall_eccentricity_sl - (svg_wall_width_sl/2);
           var wall_edge_sl_label = wall_edge_sl + (svg_wall_width_sl/2) - 30;
           var wall_edge_sl_label_p10 = wall_edge_sl_label + 10;
   
           var wall_middle_sw = middle_sw + svg_wall_eccentricity_sw;
           var wall_middle_sw_m10 = wall_middle_sw - 10;
           var wall_middle_sw_p20 = wall_middle_sw + 20;
           var wall_middle_sw_m20 = wall_middle_sw - 20;
           var wall_middle_sw_m50 = wall_middle_sw - 50;
           var wall_middle_sw_m60 = wall_middle_sw - 60;
   
           var wall_middle_sl = middle_sl + svg_wall_eccentricity_sl;
           var wall_middle_sl_m10 = wall_middle_sl - 10;
           var wall_middle_sl_m20 = wall_middle_sl - 20;
           var wall_middle_sl_m50 = wall_middle_sl - 50;
           var wall_middle_sl_m60 = wall_middle_sl - 60;
           var wall_middle_sl_p20 = wall_middle_sl + 20;
   
           var wall_eccentricity_label_sw = wall_middle_sw + 40;
           var wall_eccentricity_label_sw_negative = wall_middle_sw - 100;
   
           var wall_eccentricity_label_sl = wall_middle_sl + 40;
           var wall_eccentricity_label_sl_negative = wall_middle_sl - 100;
   
           var concrete_type_label = 140 + (svg_height / 2) - 20;
           var fiber_dosage_label = 140 + (svg_height / 2) + 20;
   
           var wall_width_label_sw = wall_edge_sw + svg_wall_width_sw;
           var wall_width_label_sw_p20 = wall_width_label_sw +20;
   
           var wall_width_label_sl = wall_edge_sl + svg_wall_width_sl;
           var wall_width_label_sl_p20 = wall_width_label_sl +20;
   
           var plan_width = svg_width + 100 + 40;
           var plan_width_p8 = plan_width + 8;
           var plan_width_m8 = plan_width - 8;
   
           var label_plan_width = -(140+(svg_width/2)+30);
   
   
           var height_line_sw = svg_width + 100 + 65;
           var height_line_sw_p20 = height_line_sw + 20;
   
           var height_line_sw_label = svg_width + 100 + 40;
   
           var height_line_sl = svg_length + 100 + 65;
           var height_line_sl_label = svg_length + 100 + 40;
   
           var label_depth = -(140+(svg_height-svg_depth)+(svg_depth/2)+30);
   
           var label_plan_eccentricity = -(plan_wall_middle_w_p30)
   
   
           var label_height = -(140+(svg_height/2)+30);
   
           var width_line_sw = svg_width + 100;
   
           var width_line_sl = svg_length + 100;
   
           var width_depth_s = ground_depth_base + 30;
   
           var width_depth_p = 140 + svg_width + 30;
   
           // Check columns shape
           if (column_shape == "circular") {
   
                   
               
   
           if (column_radius > 0) {
   
               var svg_column_radius = column_radius / 2;
           } else {
               var svg_column_radius = 50;
           }
   
           var svg_column_radius_length_start = plan_wall_middle_l;
               var svg_column_radius_width_start = plan_wall_middle_w;
   
           }
   
   
   
   
   
   
   
   
   
           var bar_diameter = svg_long_diameter;
           var bar_spacing = ((svg_width-(svg_cover_layer * 2))/(svg_long_number -1)-(0.1) )
           var bar_start_dots = svg_cover_layer + 100 + svg_steel_diameter/2;
           var bar_start = svg_cover_layer + 100;
           var bar_stop_w = 100 + svg_width - svg_cover_layer;
           var bar_stop_w_dots = 100 + svg_width - svg_cover_layer - svg_steel_diameter/2;
           var bar_stop_l = 100 + svg_length - svg_cover_layer;
           var bar_stop_l_dots = 100 + svg_length - svg_cover_layer - svg_steel_diameter/2;
   
           var bar_label = ground_depth_base - svg_long_diameter - svg_steel_diameter - svg_cover_layer - 10;
   
           var mesh_label_bottom = ground_depth_base - svg_long_diameter - svg_steel_diameter - svg_cover_layer - 25;
           var mesh_bottom = ground_depth_base - svg_long_diameter - (svg_steel_diameter/2) - svg_cover_layer;
   
           var mesh_label_bottom_width = ground_depth_base - svg_steel_diameter - svg_cover_layer - 10;
           var mesh_bottom_width = ground_depth_base  - (svg_steel_diameter/2) - svg_cover_layer;
   
   
           var bar_label_top = 145 + cover_layer + svg_long_diameter;
   
           var svg_vl_external = vl_external.toFixed(0);
   
   
           // *********  START Diagram Components Side View
   
           // Loop for ground force arrows & depth ground line
           var force_arrows_sw = "";
           var i;
           for (i = 5; i < ground_width_sw; i += 10) {
               force_arrows_sw += '<line x1="' + i + '" y1="'+ground_depth_m20+'" x2="' + i + '" y2="'+ground_depth_m10+'" stroke="#ff6622" stroke-width="3" marker-end="url(#arrow)" />'
           }
           var ground_force_sw = ""
           ground_force_sw += (svg_depth >= 0 ? '<line x1="0" y1="'+ground_depth+'" x2="'+ground_width_sw+'" y2="'+ground_depth+'" stroke="#444" stroke-dasharray="3" stroke-width="2"></line>' : '')
           ground_force_sw += (svg_depth >= 0 ? '<line x1="4" y1="'+ground_depth_m20+'" x2="'+ground_width_sw_m10+'" y2="'+ground_depth_m20+'" stroke="#ff6622" stroke-width="2"></line>' : '')
           ground_force_sw += (svg_depth >= 0 ? force_arrows_sw : '')
               // Pd known
               ground_force_sw += (svg_depth >= 0 && terrain_live_load > 0 ? '<text font-size="14px" x="20" y="'+ground_depth_m30+'" fill="black" text-anchor="start" style="white-space: pre;"> = '+terrain_live_load+' kN/m<tspan baseline-shift = "50%">2</tspan></text>' : '')
               ground_force_sw += (svg_depth >= 0 && terrain_live_load > 0 ? '<text font-size="14px" x="20" y="'+ground_depth_m30+'" fill="black" text-anchor="end" font-style="italic">p<tspan baseline-shift = "-50%">d</tspan></text>' : '')
               // Pd unknown
               ground_force_sw += (svg_depth >= 0 && Number.isNaN(terrain_live_load) ? '<text font-size="14px" x="20" y="'+ground_depth_m30+'" fill="black" text-anchor="end" font-style="italic">p<tspan baseline-shift = "-50%">d</tspan></text>' : '')
               ground_force_sw += (svg_depth >= 0 && Number.isNaN(terrain_live_load) ? '<text font-size="14px" x="20" y="'+ground_depth_m30+'" fill="black" text-anchor="start" style="white-space: pre;"> = ? kN/m<tspan baseline-shift = "50%">2</tspan></text>' : '')
   
   
               // Loop for ground force arrows & depth ground line
           var force_arrows_sl = "";
           var i;
           for (i = 5; i < ground_width_sl; i += 10) {
               force_arrows_sl += '<line x1="' + i + '" y1="'+ground_depth_m20+'" x2="' + i + '" y2="'+ground_depth_m10+'" stroke="#ff6622" stroke-width="3" marker-end="url(#arrow)" />'
           }
           var ground_force_sl = ""
           ground_force_sl += (svg_depth >= 0 ? '<line x1="0" y1="'+ground_depth+'" x2="'+ground_width_sl+'" y2="'+ground_depth+'" stroke="#444" stroke-dasharray="3" stroke-width="2"></line>' : '')
           ground_force_sl += (svg_depth >= 0 ? '<line x1="4" y1="'+ground_depth_m20+'" x2="'+ground_width_sl_m10+'" y2="'+ground_depth_m20+'" stroke="#ff6622" stroke-width="2"></line>' : '')
           ground_force_sl += (svg_depth >= 0 ? force_arrows_sl : '')
               // Pd known
               ground_force_sl += (svg_depth >= 0 && terrain_live_load > 0 ? '<text font-size="14px" x="20" y="'+ground_depth_m30+'" fill="black" text-anchor="start" style="white-space: pre;"> = '+terrain_live_load+' kN/m<tspan baseline-shift = "50%">2</tspan></text>' : '')
               ground_force_sl += (svg_depth >= 0 && terrain_live_load > 0 ? '<text font-size="14px" x="20" y="'+ground_depth_m30+'" fill="black" text-anchor="end" font-style="italic">p<tspan baseline-shift = "-50%">d</tspan></text>' : '')
               // Pd unknown
               ground_force_sl += (svg_depth >= 0 && Number.isNaN(terrain_live_load) ? '<text font-size="14px" x="20" y="'+ground_depth_m30+'" fill="black" text-anchor="end" font-style="italic">p<tspan baseline-shift = "-50%">d</tspan></text>' : '')
               ground_force_sl += (svg_depth >= 0 && Number.isNaN(terrain_live_load) ? '<text font-size="14px" x="20" y="'+ground_depth_m30+'" fill="black" text-anchor="start" style="white-space: pre;"> = ? kN/m<tspan baseline-shift = "50%">2</tspan></text>' : '')
   
   
           // Diagram parts
           var diagram_parts_sw = ""
           // reusable arrow head
           diagram_parts_sw +=  '<defs><marker id="arrow" markerWidth="10" markerHeight="8" refX="0" refY="3" orient="auto" markerUnits="strokeWidth" viewBox="0 0 20 20"> <path d="M0,0 L0,6 L9,3 z" fill="#ff6622" /></marker></defs>'
           // reusable dimension arrow head
           diagram_parts_sw += '<defs><marker id="dimension_arrow" markerWidth="10" markerHeight="8" refX="10" refY="8" orient="auto" markerUnits="strokeWidth" viewBox="0 0 20 16"><line x1="0" x2="20" y1="16"  y2="0" stroke="#000" stroke-width="2" /><line x1="10" x2="10" y1="0"  y2="16" stroke="#000" stroke-width="2" /></marker></defs>'
           // strip
           diagram_parts_sw += '<rect width="'+svg_width+'" height="'+svg_height+'" x="100" y="140" fill="#CCC"></rect>'
           // wall
           diagram_parts_sw += '<rect width="'+svg_wall_width_sw+'" height="100" x="'+wall_edge_sw+'" y="40" fill="#999"></rect>'
           // strip center
           diagram_parts_sw +=  (svg_wall_eccentricity_sw != 0 ? '<line x1="'+middle_sw+'" y1="0" x2="'+middle_sw+'" y2="140" stroke="#ff6622" stroke-dasharray="5" />' : '')
           // wall center
           diagram_parts_sw +=  (svg_wall_eccentricity_sw != 0 ? '<line x1="'+wall_middle_sw+'" y1="0" x2="'+wall_middle_sw+'" y2="40" stroke="#ff6622" stroke-dasharray="5" />' : '')
           // labels
   
           diagram_parts_sw += (concrete_type > 0 ? '<text font-size="14px" x="'+middle_sw+'" y="'+concrete_type_label+'" alignment-baseline="middle" dominant-baseline="middle" font-size="20" stroke-width="0" fill="#fff" text-anchor="middle" font-weight="bold">'+svg_concrete_type+'</text>' : '')
           diagram_parts_sw += (include_fiber == "on" && fiber_dosage_kg > 0 ? '<text font-size="14px" x="'+middle_sw+'" y="'+fiber_dosage_label+'" alignment-baseline="middle" dominant-baseline="middle" font-size="20" stroke-width="0" fill="#ff6622" text-anchor="middle" font-weight="bold">'+svg_fiber_dosage+' kg/m³ DURUS® EasyFinish</text>' : '')
               
   
           // Diagram parts
           var diagram_parts_sl = ""
           // reusable arrow head
           diagram_parts_sl +=  '<defs><marker id="arrow" markerWidth="10" markerHeight="8" refX="0" refY="3" orient="auto" markerUnits="strokeWidth" viewBox="0 0 20 20"> <path d="M0,0 L0,6 L9,3 z" fill="#ff6622" /></marker></defs>'
           // strip
           diagram_parts_sl += '<rect width="'+svg_length+'" height="'+svg_height+'" x="100" y="140" fill="#CCC"></rect>'
           // wall
           diagram_parts_sl += '<rect width="'+svg_wall_width_sl+'" height="100" x="'+wall_edge_sl+'" y="40" fill="#999"></rect>'
           // strip center
           diagram_parts_sl +=  (svg_wall_eccentricity_sl != 0 ? '<line x1="'+middle_sl+'" y1="0" x2="'+middle_sl+'" y2="140" stroke="#ff6622" stroke-dasharray="5" />' : '')
           // wall center
           diagram_parts_sl +=  (svg_wall_eccentricity_sl != 0 ? '<line x1="'+wall_middle_sl+'" y1="0" x2="'+wall_middle_sl+'" y2="40" stroke="#ff6622" stroke-dasharray="5" />' : '')
           // labels
           diagram_parts_sl += (concrete_type > 0 ? '<text font-size="14px" x="'+middle_sl+'" y="'+concrete_type_label+'" alignment-baseline="middle" dominant-baseline="middle" font-size="20" stroke-width="0" fill="#fff" text-anchor="middle" font-weight="bold">'+svg_concrete_type+'</text>' : '')
           diagram_parts_sl += (include_fiber == "on" && fiber_dosage_kg > 0 ? '<text font-size="14px" x="'+middle_sl+'" y="'+fiber_dosage_label+'" alignment-baseline="middle" dominant-baseline="middle" font-size="20" stroke-width="0" fill="#ff6622" text-anchor="middle" font-weight="bold">'+svg_fiber_dosage+' kg/m³ DURUS® EasyFinish</text>' : '')
               
   
           // Diagram parts
           var diagram_parts_pl = ""
           // point foundation shape
           diagram_parts_pl += (point_foundation_shape == "rectangular" ? '<rect width="'+svg_length+'" height="'+svg_width+'" x="100" y="140" fill="#CCC"></rect>': '')
   
           diagram_parts_pl += (point_foundation_shape == "circular" ? '<circle  cx="'+svg_radius_length_start+'" cy="'+svg_radius_width_start+'" r="'+svg_radius+'" fill="#ccc"/>': '')
   
           // wall shape
           diagram_parts_pl += (column_shape == "rectangular" ? '<rect width="'+svg_wall_width_sl+'" height="'+svg_wall_width_sw+'" x="'+plan_wall_edge_l+'" y="'+plan_wall_edge_w+'" fill="#999"></rect>': '')
           diagram_parts_pl += (column_shape == "circular" ? '<circle cx="'+svg_column_radius_length_start+'" cy="'+svg_column_radius_width_start+'" r="'+svg_column_radius+'" fill="#999"/>': '')
           // Wall center
           diagram_parts_pl += '<circle cx="'+plan_middle_l+'" cy="'+plan_middle_w+'" r="3"/>'
   
   
   
   
   
           // Depth dimension line
           var depth_dimension = ""
           depth_dimension += (svg_depth > 0 ? '<line x1="65" x2="65" y1="'+ground_depth+'"  y2="'+ground_depth_base+'" stroke="#000" stroke-width="2" marker-end="url(#dimension_arrow)" marker-start="url(#dimension_arrow)" />'  : '')      
           // depth_dimension += (svg_depth > 0 ? '<line x1="55" x2="75" y1="'+ground_depth+'"  y2="'+ground_depth+'" stroke="#000" stroke-width="2" />'  : '')
           // depth_dimension += (svg_depth > 0 ? '<line x1="55" x2="75" y1="'+ground_depth_m8+'"   y2="'+ground_depth_p8+'" stroke="#000" stroke-width="2" />' : '')
           // depth_dimension += (svg_depth > 0 ? '<line x1="55" x2="75" y1="'+ground_depth_base+'"  y2="'+ground_depth_base+'" stroke="#000" stroke-width="2" />'  : '')
           // depth_dimension += (svg_depth > 0 ? '<line x1="55" x2="75" y1="'+ground_depth_base_m8+'"  y2="'+ground_depth_base_p8+'" stroke="#000" stroke-width="2" />'  : '')
           depth_dimension += (svg_depth > 0 ? '<text font-size="14px" transform="rotate(-90)" x="'+label_depth+'" y="40" fill="black" text-anchor="end" font-style="italic">d</text>' : '')
           // d known 
           depth_dimension += (depth > 0 ? '<text font-size="14px" transform="rotate(-90)" x="'+label_depth+'" y="40" fill="black" text-anchor="start" style="white-space: pre;"> = '+depth+' mm</text>' : '')
           // d unknown
           depth_dimension += (Number.isNaN(depth) ? '<text font-size="14px" transform="rotate(-90)" x="'+label_depth+'" y="40" fill="black" text-anchor="start" style="white-space: pre;"> = ? mm</text>' : '')
           // depth equlas zero
           depth_dimension += (svg_depth == 0 ? '<text font-size="14px" x="40" y="'+ground_depth_base_p15+'" fill="black" text-anchor="end" font-style="italic">d</text>' : '')
           depth_dimension += (svg_depth == 0 ? '<text font-size="14px" x="40" y="'+ground_depth_base_p15+'" fill="black" text-anchor="start" font-style="italic">= 0</text>' : '')
   
           // Height dimension line WIDTH
           var height_dimension_sw = ""
           // height line
           height_dimension_sw += '<line x1="'+height_line_sw+'" x2="'+height_line_sw+'" y1="140"  y2="'+ground_depth_base+'" stroke="#000" stroke-width="2" marker-end="url(#dimension_arrow)" marker-start="url(#dimension_arrow)" />'       
           // height_dimension_sw += '<line x1="'+height_line_sw_m10+'" x2="'+height_line_sw_p10+'" y1="140"  y2="140" stroke="#000" stroke-width="2" />' 
           // height_dimension_sw += '<line x1="'+height_line_sw_m10+'" x2="'+height_line_sw_p10+'" y1="132"   y2="148" stroke="#000" stroke-width="2" />'
           // height_dimension_sw += '<line x1="'+height_line_sw_m10+'" x2="'+height_line_sw_p10+'" y1="'+ground_depth_base+'"  y2="'+ground_depth_base+'" stroke="#000" stroke-width="2" />' 
           // height_dimension_sw += '<line x1="'+height_line_sw_m10+'" x2="'+height_line_sw_p10+'" y1="'+ground_depth_base_m8+'"  y2="'+ground_depth_base_p8+'" stroke="#000" stroke-width="2" />' 
           height_dimension_sw += '<text font-size="14px" transform="rotate(-90)" x="'+label_height+'" y="'+height_line_sw_label+'" fill="black" text-anchor="end" font-style="italic">h</text>'
               // h known
               height_dimension_sw +=  (height > 0 ?  '<text font-size="14px" transform="rotate(-90)" x="'+label_height+'" y="'+height_line_sw_label+'" fill="black" text-anchor="start" style="white-space: pre;"> = '+height+' mm</text>': '')
               // h unknown
               height_dimension_sw +=  (Number.isNaN(height) ?  '<text font-size="14px" transform="rotate(-90)" x="'+label_height+'" y="'+height_line_sw_label+'" fill="black" text-anchor="start" style="white-space: pre;"> = ? mm</text>': '') 
   
   
   
               // Height dimension line LENGTH
           var height_dimension_sl = ""
           // height line
           height_dimension_sl += '<line x1="'+height_line_sl+'" x2="'+height_line_sl+'" y1="140"  y2="'+ground_depth_base+'" stroke="#000" stroke-width="2" marker-end="url(#dimension_arrow)" marker-start="url(#dimension_arrow)" />'       
           // height_dimension_sl += '<line x1="'+height_line_sl_m10+'" x2="'+height_line_sl_p10+'" y1="140"  y2="140" stroke="#000" stroke-width="2" />' 
           // height_dimension_sl += '<line x1="'+height_line_sl_m10+'" x2="'+height_line_sl_p10+'" y1="132"   y2="148" stroke="#000" stroke-width="2" />'
           // height_dimension_sl += '<line x1="'+height_line_sl_m10+'" x2="'+height_line_sl_p10+'" y1="'+ground_depth_base+'"  y2="'+ground_depth_base+'" stroke="#000" stroke-width="2" />' 
           // height_dimension_sl += '<line x1="'+height_line_sl_m10+'" x2="'+height_line_sl_p10+'" y1="'+ground_depth_base_m8+'"  y2="'+ground_depth_base_p8+'" stroke="#000" stroke-width="2" />' 
           height_dimension_sl += '<text font-size="14px" transform="rotate(-90)" x="'+label_height+'" y="'+height_line_sl_label+'" fill="black" text-anchor="end" font-style="italic">h</text>'
               // h known
               height_dimension_sl +=  (height > 0 ?  '<text font-size="14px" transform="rotate(-90)" x="'+label_height+'" y="'+height_line_sl_label+'" fill="black" text-anchor="start" style="white-space: pre;"> = '+height+' mm</text>': '')
               // h unknown
               height_dimension_sl +=  (Number.isNaN(height) ?  '<text font-size="14px" transform="rotate(-90)" x="'+label_height+'" y="'+height_line_sl_label+'" fill="black" text-anchor="start" style="white-space: pre;"> = ? mm</text>': '') 
   
   
               
           // Height dimension line PLAN
           var width_dimension_pl = ""
           // height line
           width_dimension_pl += '<line x1="65" x2="65" y1="140"  y2="'+plan_width+'" stroke="#000" stroke-width="2" marker-end="url(#dimension_arrow)" marker-start="url(#dimension_arrow)" />'       
           // width_dimension_pl += '<line x1="55" x2="75" y1="'+plan_width_m8+'"  y2="'+plan_width_p8+'" stroke="#000" stroke-width="2" />'
           // width_dimension_pl += '<line x1="55" x2="75" y1="'+plan_width+'"  y2="'+plan_width+'" stroke="#000" stroke-width="2" />'
           // width_dimension_pl += '<line x1="55" x2="75" y1="132"  y2="148" stroke="#000" stroke-width="2" />'
           // width_dimension_pl += '<line x1="55" x2="75" y1="140"  y2="140" stroke="#000" stroke-width="2" />'
           width_dimension_pl += '<text font-size="14px" transform="rotate(-90)" x="'+label_plan_width+'" y="40" fill="black" text-anchor="end" font-style="italic">'+svg_width_unit+'</text>'
               // h known
               width_dimension_pl +=  (svg_width_value > 0 ?  '<text font-size="14px" transform="rotate(-90)" x="'+label_plan_width+'" y="40" fill="black" text-anchor="start" style="white-space: pre;"> = '+svg_width_value+' mm</text>': '')
               // h unknown
               width_dimension_pl +=  (svg_width_value == 0 ?  '<text font-size="14px" transform="rotate(-90)" x="'+label_plan_width+'" y="40" fill="black" text-anchor="start" style="white-space: pre;"> = ? mm</text>': '') 
   
   
               
           // Wall Dimension line WIDTH
           var wall_dimension_sw = ""
           // wall width
           wall_dimension_sw  += '<line x1="'+wall_edge_sw+'" x2="'+wall_width_label_sw+'" y1="60"  y2="60" stroke="#000" stroke-width="2" marker-end="url(#dimension_arrow)" marker-start="url(#dimension_arrow)" />'   
   
           wall_dimension_sw  +=  '<text font-size="14px" x="'+wall_edge_sw_label_p10+'" y="90" fill="black" text-anchor="end" font-style="italic">'+svg_wall_unit_sw+'<tspan baseline-shift = "-50%">c</tspan></text>'
               // Bw known
               wall_dimension_sw  +=   (svg_wall_value_sw > 0 ? '<text font-size="14px" x="'+wall_edge_sw_label_p10+'" y="90" fill="black" text-anchor="start" style="white-space: pre;"> = '+svg_wall_value_sw+' mm</text>' : '')
               // Bw unknown
               wall_dimension_sw  +=   (svg_wall_value_sw == 0   ? '<text font-size="14px" x="'+wall_edge_sw_label_p10+'" y="90" fill="black" text-anchor="start" style="white-space: pre;"> = ? mm</text>' : '')
           
               
   
           // Wall Dimension line LENGTH
           var wall_dimension_sl = ""
           // wall width
           wall_dimension_sl  += '<line x1="'+wall_edge_sl+'" x2="'+wall_width_label_sl+'" y1="60"  y2="60" stroke="#000" stroke-width="2" marker-end="url(#dimension_arrow)" marker-start="url(#dimension_arrow)" />'   
   
           wall_dimension_sl  +=  '<text font-size="14px" x="'+wall_edge_sl_label_p10+'" y="90" fill="black" text-anchor="end" font-style="italic">'+svg_wall_unit_sl+'<tspan baseline-shift = "-50%">c</tspan></text>'
               // Bw known
               wall_dimension_sl  +=   (svg_wall_value_sl > 0 ? '<text font-size="14px" x="'+wall_edge_sl_label_p10+'" y="90" fill="black" text-anchor="start" style="white-space: pre;"> = '+svg_wall_value_sl+' mm</text>' : '')
               // Bw unknown
               wall_dimension_sl  +=   (svg_wall_value_sl == 0   ? '<text font-size="14px" x="'+wall_edge_sl_label_p10+'" y="90" fill="black" text-anchor="start" style="white-space: pre;"> = ? mm</text>' : '')
           
               
           // Wall Dimension line PLAN LENGTH
           var wall_dimension_pl = ""
           // wall width
           wall_dimension_pl  += '<line x1="'+wall_edge_sl+'" x2="'+wall_width_label_sl+'" y1="'+height_line_sw+'"  y2="'+height_line_sw+'"  stroke="#000" stroke-width="2" marker-end="url(#dimension_arrow)" marker-start="url(#dimension_arrow)" />'   
   
           wall_dimension_pl  +=  '<text font-size="14px" x="'+wall_edge_sl_label_p10+'" y="'+height_line_sw_p20+'" fill="black" text-anchor="end" font-style="italic">'+svg_wall_unit_sl+'<tspan baseline-shift = "-50%">c</tspan></text>'
               // Bw known
               wall_dimension_pl  +=   (svg_wall_value_sl > 0 ? '<text font-size="14px" x="'+wall_edge_sl_label_p10+'" y="'+height_line_sw_p20+'" fill="black" text-anchor="start" style="white-space: pre;"> = '+svg_wall_value_sl+' mm</text>' : '')
               // Bw unknown
               wall_dimension_pl  +=   (svg_wall_value_sl == 0   ? '<text font-size="14px" x="'+wall_edge_sl_label_p10+'" y="'+height_line_sw_p20+'" fill="black" text-anchor="start" style="white-space: pre;"> = ? mm</text>' : '')
                   
           
               
               // Wall Dimension line PLAN WIDTH
           var wall_dimension_pw = ""
           // wall width
           wall_dimension_pw  += '<line x1="'+height_line_sl+'" x2="'+height_line_sl+'" y1="'+plan_wall_edge_w+'"  y2="'+plan_wall_bott_edge_w+'" stroke="#000" stroke-width="2" marker-end="url(#dimension_arrow)" marker-start="url(#dimension_arrow)" />'   
           
           wall_dimension_pw  +=  '<text font-size="14px" transform="rotate(-90)" x="'+plan_wall_middle_edge_w+'" y="'+plan_line_w_label+'" fill="black" text-anchor="end" font-style="italic">'+svg_wall_unit_sw+'<tspan baseline-shift = "-50%">c</tspan></text>'
           // h known
               wall_dimension_pw +=  (svg_wall_value_sw > 0 ?  '<text font-size="14px" transform="rotate(-90)" x="'+plan_wall_middle_edge_w+'" y="'+plan_line_w_label+'" fill="black" text-anchor="start" style="white-space: pre;"> = '+svg_wall_value_sw+' mm</text>': '')
               // h unknown
               wall_dimension_pw +=  (svg_wall_value_sw == 0 ?  '<text font-size="14px" transform="rotate(-90)" x="'+plan_wall_middle_edge_w+'" y="'+plan_line_w_label+'" fill="black" text-anchor="start" style="white-space: pre;"> = ? mm</text>': '') 
   
   
   
           // Veritical Line Load  WIDTH
           var vertical_load_arrow_sw = ""
           var horizontal_load_arrow_sw = ""
           var moment_load_arrow_sw = ""
   
           // wall Ve
           vertical_load_arrow_sw += '<line x1="'+wall_middle_sw+'" y1="100" x2="'+wall_middle_sw+'" y2="130" stroke="#ff6622" stroke-width="3" marker-end="url(#arrow)" />'
           vertical_load_arrow_sw += '<text font-size="14px" x="'+wall_width_label_sw_p20+'" y="110" fill="black" text-anchor="end" font-style="italic">V<tspan baseline-shift = "-50%">e</tspan></text>'
               // Ve known
               vertical_load_arrow_sw += (vl_external > 0 ? '<text font-size="14px" x="'+wall_width_label_sw_p20+'" y="110" fill="black" text-anchor="start" style="white-space: pre;"> = '+svg_vl_external+' kN</text>' : '')
               // Ve unknown
               vertical_load_arrow_sw += (Number.isNaN(vl_external) ? '<text font-size="14px" x="'+wall_width_label_sw_p20+'" y="110" fill="black" text-anchor="start" style="white-space: pre;"> = ? kN</text>' : '')
               
           // Hb Arrow and label
           horizontal_load_arrow_sw += '<line x1="'+wall_middle_sw_m50+'" y1="140" x2="'+wall_middle_sw_m10+'" y2="140" stroke="#ff6622" stroke-width="3" marker-end="url(#arrow)" />'
           horizontal_load_arrow_sw += '<text font-size="14px" x="'+wall_middle_sw_m60+'" y="160" fill="black" text-anchor="end" font-style="italic">H<tspan baseline-shift = "-50%">b</tspan></text>'
           horizontal_load_arrow_sw += (Number.isNaN(hl_width) == false ? '<text font-size="14px" x="'+wall_middle_sw_m60+'" y="160" fill="black" text-anchor="start" style="white-space: pre;"> = '+hl_width+' kN</text>' : '')
           horizontal_load_arrow_sw += (Number.isNaN(hl_width) ? '<text font-size="14px" x="'+wall_middle_sw_m60+'" y="160" fill="black" text-anchor="start" style="white-space: pre;"> = ? kN</text>' : '')
   
   
           // Mb Arrow and label
           moment_load_arrow_sw += '<g><path d="M '+wall_middle_sw_m20+' 130 A 15 15, 0, 1, 1, '+wall_middle_sw_p20+' 130" stroke="#ff6622" stroke-width="3" fill="transparent" marker-end="url(#arrow)"/></g>'
           moment_load_arrow_sw += '<text font-size="14px" x="'+wall_middle_sw_p20+'" y="160" fill="black" text-anchor="end" font-style="italic">M<tspan baseline-shift = "-50%">b</tspan></text>'
           moment_load_arrow_sw += (Number.isNaN(m_width) == false ? '<text font-size="14px" x="'+wall_middle_sw_p20+'" y="160" fill="black" text-anchor="start" style="white-space: pre;"> = '+m_width+' kNm</text>' : '')
           moment_load_arrow_sw += (Number.isNaN(m_width) ? '<text font-size="14px" x="'+wall_middle_sw_p20+'" y="160" fill="black" text-anchor="start" style="white-space: pre;"> = ? kNm</text>' : '')
   
   
           // Veritical Line Load  LENGTH
           var vertical_load_arrow_sl = ""
           var horizontal_load_arrow_sl = ""
           var moment_load_arrow_sl = ""
   
           // wall Ve
           vertical_load_arrow_sl += '<line x1="'+wall_middle_sl+'" y1="100" x2="'+wall_middle_sl+'" y2="130" stroke="#ff6622" stroke-width="3" marker-end="url(#arrow)" />'
           vertical_load_arrow_sl += '<text font-size="14px" x="'+wall_width_label_sl_p20+'" y="110" fill="black" text-anchor="end" font-style="italic">V<tspan baseline-shift = "-50%">e</tspan></text>'
               // Ve known
               vertical_load_arrow_sl += (vl_external > 0 ? '<text font-size="14px" x="'+wall_width_label_sl_p20+'" y="110" fill="black" text-anchor="start" style="white-space: pre;"> = '+svg_vl_external+' kN</text>' : '')
               // Ve unknown
               vertical_load_arrow_sl += (Number.isNaN(vl_external) ? '<text font-size="14px" x="'+wall_width_label_sl_p20+'" y="110" fill="black" text-anchor="start" style="white-space: pre;"> = ? kN</text>' : '')
   
               // Hl Arrow and label
           horizontal_load_arrow_sl += '<line x1="'+wall_middle_sl_m50+'" y1="140" x2="'+wall_middle_sl_m10+'" y2="140" stroke="#ff6622" stroke-width="3" marker-end="url(#arrow)" />'
           horizontal_load_arrow_sl += '<text font-size="14px" x="'+wall_middle_sl_m60+'" y="160" fill="black" text-anchor="end" font-style="italic">H<tspan baseline-shift = "-50%">l</tspan></text>'
           horizontal_load_arrow_sl += (Number.isNaN(hl_length) == false? '<text font-size="14px" x="'+wall_middle_sl_m60+'" y="160" fill="black" text-anchor="start" style="white-space: pre;"> = '+hl_length+' kN</text>' : '')
           horizontal_load_arrow_sl += (Number.isNaN(hl_length) ? '<text font-size="14px" x="'+wall_middle_sl_m60+'" y="160" fill="black" text-anchor="start" style="white-space: pre;"> = ? kN</text>' : '')
   
           // Ml Arrow and label
           moment_load_arrow_sl += '<g><path d="M '+wall_middle_sl_m20+' 130 A 15 15, 0, 1, 1, '+wall_middle_sl_p20+' 130" stroke="#ff6622" stroke-width="3" fill="transparent" marker-end="url(#arrow)"/></g>'
           moment_load_arrow_sl += '<text font-size="14px" x="'+wall_middle_sl_p20+'" y="160" fill="black" text-anchor="end" font-style="italic">M<tspan baseline-shift = "-50%">l</tspan></text>'
           moment_load_arrow_sl += (Number.isNaN(m_length) == false ? '<text font-size="14px" x="'+wall_middle_sl_p20+'" y="160" fill="black" text-anchor="start" style="white-space: pre;"> = '+m_length+' kNm</text>' : '')
           moment_load_arrow_sl += (Number.isNaN(m_length) ? '<text font-size="14px" x="'+wall_middle_sl_p20+'" y="160" fill="black" text-anchor="start" style="white-space: pre;"> = ? kNm</text>' : '')
   
   
   
           // Eccentricity Dimension line WIDTH
           var eccentricity_dimension_sw = ""
           // wall eccentricity
           eccentricity_dimension_sw += (svg_wall_eccentricity_sw != 0 ? '<line x1="'+middle_sw+'" x2="'+wall_middle_sw+'" y1="10"  y2="10" stroke="#000" stroke-width="2" marker-end="url(#dimension_arrow)" marker-start="url(#dimension_arrow)" />' : '')
   
               // positive eccentricity
               eccentricity_dimension_sw += (ec_vl_width > 0 ? '<text font-size="14px" x="'+wall_eccentricity_label_sw+'" y="20" fill="black" text-anchor="end" font-style="italic">e<tspan baseline-shift = "-50%">b</tspan></text>' : '')
               eccentricity_dimension_sw += (ec_vl_width > 0 ? '<text font-size="14px" x="'+wall_eccentricity_label_sw+'" y="20" fill="black" text-anchor="start" style="white-space: pre;"> = '+ec_vl_width+' mm</text>' : '')
               // negative eccentricity
               eccentricity_dimension_sw += (ec_vl_width < 0 ? '<text font-size="14px" x="'+wall_eccentricity_label_sw_negative+'" y="20" fill="black" text-anchor="end" font-style="italic">e<tspan baseline-shift = "-50%">b</tspan></text>' : '')
               eccentricity_dimension_sw += (ec_vl_width < 0 ? '<text font-size="14px" x="'+wall_eccentricity_label_sw_negative+'" y="20" fill="black" text-anchor="start" style="white-space: pre;"> = '+ec_vl_width+' mm</text>' : '')
               // unknown eccentricity
               eccentricity_dimension_sw += (Number.isNaN(ec_vl_width) ? '<text font-size="14px" x="'+wall_eccentricity_label_sw+'" y="20" fill="black" text-anchor="end" font-style="italic">e<tspan baseline-shift = "-50%">b</tspan></text>' : '')
               eccentricity_dimension_sw += (Number.isNaN(ec_vl_width) ? '<text font-size="14px" x="'+wall_eccentricity_label_sw+'" y="20" fill="black" text-anchor="start" style="white-space: pre;"> = ? mm</text>' : '')
   
   
   
           // Eccentricity Dimension line LENGTH
           var eccentricity_dimension_sl = ""
           // wall eccentricity
           eccentricity_dimension_sl += (svg_wall_eccentricity_sl != 0 ? '<line x1="'+middle_sl+'" x2="'+wall_middle_sl+'" y1="10"  y2="10" stroke="#000" stroke-width="2" marker-end="url(#dimension_arrow)" marker-start="url(#dimension_arrow)" />' : '')
   
               // positive eccentricity
               eccentricity_dimension_sl += (ec_vl_length > 0 ? '<text font-size="14px" x="'+wall_eccentricity_label_sl+'" y="20" fill="black" text-anchor="end" font-style="italic">e<tspan baseline-shift = "-50%">l</tspan></text>' : '')
               eccentricity_dimension_sl += (ec_vl_length > 0 ? '<text font-size="14px" x="'+wall_eccentricity_label_sl+'" y="20" fill="black" text-anchor="start" style="white-space: pre;"> = '+ec_vl_length+' mm</text>' : '')
               // negative eccentricity
               eccentricity_dimension_sl += (ec_vl_length < 0 ? '<text font-size="14px" x="'+wall_eccentricity_label_sl_negative+'" y="20" fill="black" text-anchor="end" font-style="italic">e<tspan baseline-shift = "-50%">l</tspan></text>' : '')
               eccentricity_dimension_sl += (ec_vl_length < 0 ? '<text font-size="14px" x="'+wall_eccentricity_label_sl_negative+'" y="20" fill="black" text-anchor="start" style="white-space: pre;"> = '+ec_vl_length+' mm</text>' : '')
               // unknown eccentricity
               eccentricity_dimension_sl += (Number.isNaN(ec_vl_length) ? '<text font-size="14px" x="'+wall_eccentricity_label_sl+'" y="20" fill="black" text-anchor="end" font-style="italic">e<tspan baseline-shift = "-50%">l</tspan></text>' : '')
               eccentricity_dimension_sl += (Number.isNaN(ec_vl_length) ? '<text font-size="14px" x="'+wall_eccentricity_label_sl+'" y="20" fill="black" text-anchor="start" style="white-space: pre;"> = ? mm</text>' : '')
   
   
           // Eccentricity Dimension line PLAN
           var eccentricity_dimension_pl = ""
               // Wall center
               eccentricity_dimension_pl += '<defs><marker id="arrow_black" markerWidth="10" markerHeight="8" refX="0" refY="3" orient="auto" markerUnits="strokeWidth" viewBox="0 0 20 20"> <path d="M0,0 L0,6 L9,3 z" fill="#000" /></marker></defs>'
               eccentricity_dimension_pl += '<circle cx="'+plan_wall_middle_l+'" cy="'+plan_wall_middle_w+'" r="3"/>'
               eccentricity_dimension_pl += '<line x1="'+plan_wall_middle_l+'" x2="'+plan_wall_middle_l+'" y1="'+plan_middle_w+'"  y2="'+plan_wall_middle_w+'" stroke="#ff6622" stroke-dasharray="5"/>'
               eccentricity_dimension_pl += '<line x1="'+plan_wall_middle_l+'" x2="'+plan_middle_l+'" y1="'+plan_wall_middle_w+'"  y2="'+plan_wall_middle_w+'" stroke="#ff6622"  stroke-dasharray="5"/>'  
   
           // eccentricity length 
           // positive
           eccentricity_dimension_pl += (ec_vl_length > 0 ? '<text font-size="14px" x="'+plan_wall_middle_l_label+'" y="'+plan_middle_w_m30+'" fill="black" text-anchor="end" font-style="italic">e<tspan baseline-shift = "-50%">l</tspan></text>' : '')
           eccentricity_dimension_pl += (ec_vl_length > 0 ? '<text font-size="14px" x="'+plan_wall_middle_l_label+'" y="'+plan_middle_w_m30+'" fill="black" text-anchor="start" style="white-space: pre;"> = '+ec_vl_length+' mm</text>' : '')
           eccentricity_dimension_pl += (ec_vl_length > 0 ? '<line x1="'+plan_middle_l+'" x2="'+plan_wall_middle_l_m10+'" y1="'+plan_middle_w+'"  y2="'+plan_middle_w+'" stroke="#000" stroke-width="2" marker-end="url(#arrow_black)" />' : '')
           eccentricity_dimension_pl += (ec_vl_length > 0 ? '<line x1="'+plan_wall_middle_l+'" x2="'+plan_wall_middle_l+'" y1="'+plan_middle_w_p10+'"  y2="'+plan_middle_w_m10+'" stroke="#000" stroke-width="2" />' : '')
           // negative
           eccentricity_dimension_pl += (ec_vl_length < 0 ? '<text font-size="14px" x="'+plan_wall_middle_l_m10+'" y="'+plan_middle_w_m30+'" fill="black" text-anchor="end" font-style="italic">e<tspan baseline-shift = "-50%">l</tspan></text>' : '')
           eccentricity_dimension_pl += (ec_vl_length < 0 ? '<text font-size="14px" x="'+plan_wall_middle_l_m10+'" y="'+plan_middle_w_m30+'" fill="black" text-anchor="start" style="white-space: pre;"> = '+ec_vl_length+' mm</text>' : '')
           eccentricity_dimension_pl += (ec_vl_length < 0 ? '<line x1="'+plan_middle_l+'" x2="'+plan_wall_middle_l_m10_neg+'" y1="'+plan_middle_w+'"  y2="'+plan_middle_w+'" stroke="#000" stroke-width="2" marker-end="url(#arrow_black)" />' : '')
           eccentricity_dimension_pl += (ec_vl_length < 0 ? '<line x1="'+plan_wall_middle_l+'" x2="'+plan_wall_middle_l+'" y1="'+plan_middle_w_p10+'"  y2="'+plan_middle_w_m10+'" stroke="#000" stroke-width="2" />' : '')
   
           // eccentricity width 
           // positive
           eccentricity_dimension_pl += (ec_vl_width > 0 ? '<text font-size="14px" transform="rotate(-90)" x="'+plan_wall_middle_w_label+'" y="'+plan_middle_l_m20+'" fill="black" text-anchor="end" font-style="italic">e<tspan baseline-shift="-50%">b</tspan></text>' : '')
           eccentricity_dimension_pl += (ec_vl_width > 0 ? '<text font-size="14px" transform="rotate(-90)" x="'+plan_wall_middle_w_label+'" y="'+plan_middle_l_m20+'" fill="black" text-anchor="start" style="white-space: pre;"> = '+ec_vl_width+' mm</text>' : '')
           eccentricity_dimension_pl += (ec_vl_width > 0 ? '<line x1="'+plan_middle_l+'" x2="'+plan_middle_l+'" y1="'+plan_middle_w+'"  y2="'+plan_wall_middle_w_m10+'" stroke="#000" stroke-width="2" marker-end="url(#arrow_black)" />' : '')
           eccentricity_dimension_pl += (ec_vl_width > 0 ? '<line x1="'+plan_middle_l_m10+'" x2="'+plan_middle_l_p10+'" y1="'+plan_wall_middle_w+'"  y2="'+plan_wall_middle_w+'" stroke="#000" stroke-width="2" />' : '')
           // negative
           eccentricity_dimension_pl += (ec_vl_width < 0 ? '<text font-size="14px" transform="rotate(-90)" x="'+plan_wall_middle_w_label_p60+'" y="'+plan_middle_l_m20+'" fill="black" text-anchor="end" font-style="italic">e<tspan baseline-shift="-50%">b</tspan></text>' : '')
           eccentricity_dimension_pl += (ec_vl_width < 0 ? '<text font-size="14px" transform="rotate(-90)" x="'+plan_wall_middle_w_label_p60+'" y="'+plan_middle_l_m20+'" fill="black" text-anchor="start" style="white-space: pre;"> = '+ec_vl_width+' mm</text>' : '')
           eccentricity_dimension_pl += (ec_vl_width < 0 ? '<line x1="'+plan_middle_l+'" x2="'+plan_middle_l+'" y1="'+plan_middle_w+'"  y2="'+plan_wall_middle_w_m10_neg+'" stroke="#000" stroke-width="2" marker-end="url(#arrow_black)" />' : '')
           eccentricity_dimension_pl += (ec_vl_width < 0 ? '<line x1="'+plan_middle_l_m10+'" x2="'+plan_middle_l_p10+'" y1="'+plan_wall_middle_w+'"  y2="'+plan_wall_middle_w+'" stroke="#000" stroke-width="2" />' : '')
   
               
           // Width Dimension Line WIDTH
           var width_dimension_sw = ""
           // width line
           width_dimension_sw += '<line x1="100" x2="'+width_line_sw+'" y1="'+width_depth_s+'"  y2="'+width_depth_s+'" stroke="#000" stroke-width="2" marker-end="url(#dimension_arrow)" marker-start="url(#dimension_arrow)" />'
   
           width_dimension_sw += '<text font-size="14px" x="'+middle_sw_m30+'" y="'+ground_depth_base_p100+'" alignment-baseline="middle" dominant-baseline="middle"  text-anchor="end"  font-style="italic">'+svg_width_unit+'</text>'
               // Bw known
               width_dimension_sw +=  (svg_width_value > 0 ? '<text font-size="14px" x="'+middle_sw_m30+'" y="'+ground_depth_base_p100+'" alignment-baseline="middle" dominant-baseline="middle"  text-anchor="start" style="white-space: pre;"> = '+svg_width_value+' mm</text>' : '')
               // Bw unknown
               width_dimension_sw +=  (svg_width_value == 0 ? '<text font-size="14px" x="'+middle_sw_m30+'" y="'+ground_depth_base_p100+'" alignment-baseline="middle" dominant-baseline="middle"  text-anchor="start" style="white-space: pre;"> = ? mm</text>' : '')
   
           // Width Dimension Line LENGTH
           var width_dimension_sl = ""
           // width line
           width_dimension_sl += '<line x1="100" x2="'+width_line_sl+'" y1="'+width_depth_s+'"  y2="'+width_depth_s+'" stroke="#000" stroke-width="2" marker-end="url(#dimension_arrow)" marker-start="url(#dimension_arrow)" />'
   
           width_dimension_sl += '<text font-size="14px" x="'+middle_sl_m30+'" y="'+ground_depth_base_p100+'" alignment-baseline="middle" dominant-baseline="middle"  text-anchor="end"  font-style="italic">'+svg_length_unit+'</text>'
               
           // Bw known
               width_dimension_sl +=  (svg_length_value > 0 ? '<text font-size="14px" x="'+middle_sl_m30+'" y="'+ground_depth_base_p100+'" alignment-baseline="middle" dominant-baseline="middle"  text-anchor="start" style="white-space: pre;"> = '+svg_length_value+' mm</text>' : '')
               // Bw unknown
               width_dimension_sl +=  (svg_length_value == 0 ? '<text font-size="14px" x="'+middle_sl_m30+'" y="'+ground_depth_base_p100+'" alignment-baseline="middle" dominant-baseline="middle"  text-anchor="start" style="white-space: pre;"> = ? mm</text>' : '')
   
   
           // Width Dimension Line PLAN
           var length_dimension_pl = ""
           // width line
           length_dimension_pl += '<line x1="100" x2="'+width_line_sl+'" y1="'+ground_width_sw+'"  y2="'+ground_width_sw+'" stroke="#000" stroke-width="2" marker-end="url(#dimension_arrow)" marker-start="url(#dimension_arrow)" />'
   
           length_dimension_pl += '<text font-size="14px" x="'+middle_sl_m30+'" y="'+ground_width_sw_p40+'" alignment-baseline="middle" dominant-baseline="middle"  text-anchor="end"  font-style="italic">'+svg_length_unit+'</text>'
               // Bw known
               length_dimension_pl +=  (svg_length_value > 0 ? '<text font-size="14px" x="'+middle_sl_m30+'" y="'+ground_width_sw_p40+'" alignment-baseline="middle" dominant-baseline="middle"  text-anchor="start" style="white-space: pre;"> = '+svg_length_value+' mm</text>' : '')
               // Bw unknown
               length_dimension_pl +=  (svg_length_value == 0 ? '<text font-size="14px" x="'+middle_sl_m30+'" y="'+ground_width_sw_p40+'" alignment-baseline="middle" dominant-baseline="middle"  text-anchor="start" style="white-space: pre;"> = ? mm</text>' : '')
                   
   
               
   
           // Steel Reinforcement including cover layer
           var steel_reinforcement_sw = ""
   
   
   
           // bottom cover layer
           steel_reinforcement_sw += (include_steel == 'on' && svg_cover_layer > 0 ? '<rect width="'+svg_width+'" height="'+svg_cover_layer+'" x="100" y="'+cover_layer_base+'" fill="#eee"></rect>' : '')
           steel_reinforcement_sw += (include_steel == 'on' && svg_cover_layer > 0 ? '<text font-size="14px" x="'+middle_sw_m30+'" y="'+ground_depth_base_p15+'" alignment-baseline="bottom" dominant-baseline="bottom" text-anchor="end" font-style="italic">c</text>' : '')
           // cover layer known
           steel_reinforcement_sw += (include_steel == 'on' && cover_layer > 0 ? '<text font-size="14px" x="' + middle_sw_m30 + '" y="' + ground_depth_base_p15 + '" alignment-baseline="bottom" dominant-baseline="bottom" text-anchor="start" style="white-space: pre;"> = ' + cover_layer + ' mm</text>' : '')
           // cover layer unknown
           steel_reinforcement_sw += (include_steel == 'on' && cover_layer == undefined ? '<text font-size="14px" x="' + middle_sw_m30 + '" y="' + ground_depth_base_p15 + '" alignment-baseline="bottom" dominant-baseline="bottom" text-anchor="start" style="white-space: pre;"> = ? mm</text>' : '')
   
   
   
   
   
   
   
           // bottom bars long
           steel_reinforcement_sw += (include_steel == 'on' && svg_long_diameter > 0 ? '<line x1="'+bar_start_dots+'" x2="'+bar_stop_w_dots+'" y1="'+cover_layer_base_label+'" y2="'+cover_layer_base_label+'" stroke="#3434b7" stroke-width="'+bar_diameter+'" stroke-linecap="round" fill="none" stroke-dasharray="0, '+svg_steel_distance+'" ;=""></line>' : '')
           steel_reinforcement_sw += (include_steel == 'on' && svg_long_diameter > 0 ? '<text font-size="14px" x="'+middle_sw+'" y="'+bar_label+'" alignment-baseline="bottom" dominant-baseline="bottom" font-size="20" text-anchor="middle"  font-weight="bold" fill="#3434B7" >'+svg_bars+' </text>' : '')
           // bottom bars both
           steel_reinforcement_sw += (include_steel == 'on' && svg_long_diameter > 0 ? '<line x1="'+bar_start+'" x2="'+bar_stop_w+'" y1="'+mesh_bottom+'" y2="'+mesh_bottom+'" stroke="#3434b7" stroke-width="'+svg_steel_diameter+'"></line>' : '')
           // steel_reinforcement_sw += (include_steel == 'on' && svg_long_diameter > 0 ? '<text font-size="14px" x="'+middle_sw+'" y="'+mesh_label_bottom+'" alignment-baseline="bottom" dominant-baseline="bottom" font-size="20" text-anchor="middle"  font-weight="bold" fill="#3434B7" >'+steel_mesh_type+' </text>' : '')
   
           var steel_reinforcement_sl = ""
   
           // bottom cover layer
           steel_reinforcement_sl += (include_steel == 'on' && svg_cover_layer > 0 ? '<rect width="'+svg_length+'" height="'+svg_cover_layer+'" x="100" y="'+cover_layer_base+'" fill="#eee"></rect>' : '')
           steel_reinforcement_sl += (include_steel == 'on' && svg_cover_layer > 0 ? '<text font-size="14px" x="'+middle_sl_m30+'" y="'+ground_depth_base_p15+'" alignment-baseline="bottom" dominant-baseline="bottom" text-anchor="end" font-style="italic">c</text>' : '')
           // cover layer known
           steel_reinforcement_sl += (include_steel == 'on' && cover_layer > 0 ? '<text font-size="14px" x="' + middle_sl_m30 + '" y="' + ground_depth_base_p15 + '" alignment-baseline="bottom" dominant-baseline="bottom" text-anchor="start" style="white-space: pre;"> = ' + cover_layer + ' mm</text>' : '')
           // cover layer unknown
           steel_reinforcement_sl += (include_steel == 'on' && cover_layer == undefined ? '<text font-size="14px" x="' + middle_sl_m30 + '" y="' + ground_depth_base_p15 + '" alignment-baseline="bottom" dominant-baseline="bottom" text-anchor="start" style="white-space: pre;"> = ? mm</text>' : '')
   
   
   
           // bottom bars long
           steel_reinforcement_sl += (include_steel == 'on' && svg_long_diameter > 0 ? '<line x1="'+bar_start_dots+'" x2="'+bar_stop_l_dots+'" y1="'+mesh_bottom+'" y2="'+mesh_bottom+'" stroke="#3434b7" stroke-width="'+bar_diameter+'" stroke-linecap="round" fill="none" stroke-dasharray="0, '+svg_steel_distance+'" ;=""></line>' : '')
           steel_reinforcement_sl += (include_steel == 'on' && svg_long_diameter > 0 ? '<text font-size="14px" x="'+middle_sl+'" y="'+bar_label+'" alignment-baseline="bottom" dominant-baseline="bottom" font-size="20" text-anchor="middle"  font-weight="bold" fill="#3434B7" >'+svg_bars+' </text>' : '')
           steel_reinforcement_sl += (include_steel == 'on' && svg_long_diameter > 0 ? '<line x1="'+bar_start+'" x2="'+bar_stop_l+'" y1="'+cover_layer_base_label+'" y2="'+cover_layer_base_label+'" stroke="#3434b7" stroke-width="'+svg_steel_diameter+'"></line>' : '')
   
   
           // *********  END Diagram Components Side View
   
   
           // ***********  INTERNAL MOMENT ON
           if(lmd_known == 'on') {
           
               document.getElementById('diagram1').innerHTML 
               = '<svg width="'+canvas_width_sw+'" height="'+canvas_height+'">'   
               + diagram_parts_sw 
               + vertical_load_arrow_sw
               + height_dimension_sw
               + wall_dimension_sw
               + eccentricity_dimension_sw
               + width_dimension_sw
               + steel_reinforcement_sw
               + '</svg>';
   
   
               document.getElementById('diagram2').innerHTML 
               = '<svg width="'+canvas_width_sl+'" height="'+canvas_height+'">'   
               + diagram_parts_sl 
               + vertical_load_arrow_sl
               + height_dimension_sl
               + wall_dimension_sl
               + eccentricity_dimension_sl
               + width_dimension_sl
               + steel_reinforcement_sl
               + '</svg>';
   
               document.getElementById('diagram3').innerHTML 
               = '<svg width="'+canvas_width_sl+'" height="'+canvas_width_pl+'">'   
               + diagram_parts_pl
               + length_dimension_pl
               + (point_foundation_shape == "rectangular" ? width_dimension_pl  : '')
               + eccentricity_dimension_pl
               + wall_dimension_pl
               + (column_shape == "rectangular" ? wall_dimension_pw   : '')
               + '</svg>';
   
   
           }
   
   
           // ***********  INTERNAL MOMENT OFF & DIMENSIONS KNOWN = ON
           else if(lmd_known != 'on' && dimensions_known == 'on') {
           
               document.getElementById('diagram1').innerHTML 
               = '<svg width="'+canvas_width_sw+'" height="'+canvas_height+'">'
               + diagram_parts_sw 
               + vertical_load_arrow_sw
               + horizontal_load_arrow_sw
               + moment_load_arrow_sw
               + height_dimension_sw
               + wall_dimension_sw
               + eccentricity_dimension_sw
               + width_dimension_sw
               + steel_reinforcement_sw
               + '</svg>';
   
               document.getElementById('diagram2').innerHTML 
               = '<svg width="'+canvas_width_sl+'" height="'+canvas_height+'">'   
               + diagram_parts_sl 
               + vertical_load_arrow_sl
               + horizontal_load_arrow_sl
               + moment_load_arrow_sl
               + height_dimension_sl
               + wall_dimension_sl
               + eccentricity_dimension_sl
               + width_dimension_sl
               + steel_reinforcement_sl
               + '</svg>';
   
               document.getElementById('diagram3').innerHTML 
               = '<svg width="'+canvas_width_sl+'" height="'+canvas_width_pl+'">'   
               + diagram_parts_pl
               + length_dimension_pl
               + (point_foundation_shape == "rectangular" ? width_dimension_pl  : '')
               + eccentricity_dimension_pl
               + wall_dimension_pl
               + (column_shape == "rectangular" ? wall_dimension_pw   : '')
               + '</svg>';
   
   
   
           } 
   
   
           // ***********  INTERNAL MOMENT OFF & DIMENSIONS KNOWN = OFF
           else if(lmd_known != 'on' && dimensions_known != 'on')  {
   
   
               
           
   
               // Side view - Width    
               document.getElementById('diagram1').innerHTML 
               = '<svg width="'+canvas_width_sw+'" height="'+canvas_height+'">'
               + ground_force_sw
               + diagram_parts_sw 
               + vertical_load_arrow_sw
               + horizontal_load_arrow_sw
               + moment_load_arrow_sw
               + depth_dimension
               + height_dimension_sw
               + wall_dimension_sw
               + eccentricity_dimension_sw
               + width_dimension_sw
               + steel_reinforcement_sw
               + '</svg>';
   
               document.getElementById('diagram2').innerHTML 
               = '<svg width="'+canvas_width_sl+'" height="'+canvas_height+'">'   
               + ground_force_sl
               + diagram_parts_sl 
               + vertical_load_arrow_sl
               + horizontal_load_arrow_sl
               + moment_load_arrow_sl
               + depth_dimension
               + height_dimension_sl
               + wall_dimension_sl
               + eccentricity_dimension_sl
               + width_dimension_sl
               + steel_reinforcement_sl
               + '</svg>';
   
               document.getElementById('diagram3').innerHTML 
               = '<svg width="'+canvas_width_sl+'" height="'+canvas_width_pl+'">'   
               + diagram_parts_pl
               + length_dimension_pl
               + (point_foundation_shape == "rectangular" ? width_dimension_pl  : '')
               + eccentricity_dimension_pl
               + wall_dimension_pl
               + (column_shape == "rectangular" ? wall_dimension_pw   : '')
               + '</svg>';
   
           }
   
   
   // 7. Show & Hide Page Elements (calculations_point_foundation)
   
   
       if (location_name == 'calculations_point_foundation') {
   
   
           // check if shaft design included
           if (include_shaft == 'on') {
   
               // Geometry Inputs
               document.getElementById("row_shaft_height").classList.remove('hidden')
               document.getElementById("row_surface_type").classList.remove('hidden')
                   // Change labels
                   document.getElementById("column_length_label").innerHTML = "Shaft Length";
                   document.getElementById("column_width_label").innerHTML = "Shaft Width";
                   document.getElementById("column_radius_label").innerHTML = "Shaft Radius";
                   document.getElementById("ec_vl_length_label").innerHTML = "Shaft Eccentricity, Length Direction";
                   document.getElementById("ec_vl_width_label").innerHTML = "Shaft Eccentricity, Width Direction";
                   // Change Equations
                   document.getElementById("column_length_shaft_eq").classList.remove('hidden')
                   document.getElementById("column_width_shaft_eq").classList.remove('hidden')
                   document.getElementById("column_radius_shaft_eq").classList.remove('hidden')
                   document.getElementById("column_length_eq").classList.add('hidden')
                   document.getElementById("column_width_eq").classList.add('hidden')
                   document.getElementById("column_radius_eq").classList.add('hidden')
   
   
   
                   // Add default option to Steel Mesh Select                
                   if(isNaN(steel_diameter)) {
                   document.getElementById("steel_mesh_type").value = "0,0,0,No Reinforcement";
                   }
               // Show Shaft Reinforcement Section
               document.getElementById("include_shaft_design_section").classList.remove('hidden')
               // Hide Steel Mesh
               document.getElementById("steel_mesh_type_row").classList.add('hidden')
   
                   // Show Stirrup Section if Yes
                   if (include_stirrups == 'on') {
                       document.getElementById("include_stirrup_design_section").classList.remove('hidden')
                   } else {
                       document.getElementById("include_stirrup_design_section").classList.add('hidden')          
                   }
                   
               
           } else {
   
               // Geometry Inputs
               document.getElementById("row_shaft_height").classList.add('hidden');
               document.getElementById("row_surface_type").classList.add('hidden');
                   // Change labels
                   document.getElementById("column_length_label").innerHTML = "Column Length";
                   document.getElementById("column_width_label").innerHTML = "Column Width";
                   document.getElementById("column_radius_label").innerHTML = "Column Radius";
                   document.getElementById("ec_vl_length_label").innerHTML = "Column Eccentricity, Length Direction";
                   document.getElementById("ec_vl_width_label").innerHTML = "Column Eccentricity, Width Direction";
                   // Change Equations
                   document.getElementById("column_length_shaft_eq").classList.add('hidden')
                   document.getElementById("column_width_shaft_eq").classList.add('hidden')
                   document.getElementById("column_radius_shaft_eq").classList.add('hidden')
                   document.getElementById("column_length_eq").classList.remove('hidden')
                   document.getElementById("column_width_eq").classList.remove('hidden')
                   document.getElementById("column_radius_eq").classList.remove('hidden')
                   // Add default option to Steel Mesh Select
                   // $("#steel_mesh_type").prepend("<option value='' selected disabled hidden>Please choose steel mesh type</option>");       
               // Hide Reinforcement Section
               document.getElementById("include_shaft_design_section").classList.add('hidden')
               // Hide Stirrup Section
               document.getElementById("include_stirrup_design_section").classList.add('hidden')          
               // Show Steel Mesh
               document.getElementById("steel_mesh_type_row").classList.remove('hidden')
           }
   
   
    
           // check if steel included
           if (include_steel == 'on') {
               reinforcement_card_sub1.classList.remove('hidden');
           } else {
               reinforcement_card_sub1.classList.add('hidden');
           }
   
   
   
   
           // show and hide cover layer inputs
           if (cover_layer_dropdown == '0') {
               cover_layer_custom_row.classList.remove('hidden');
               var cover_layer = cover_layer_custom
   
           } else if (cover_layer_dropdown > 0) {
               cover_layer_custom_row.classList.add('hidden');
               var cover_layer = parseFloat(cover_layer_dropdown)
           } else {
               cover_layer_custom_row.classList.add('hidden');
           }
   
   
   
   
       }
   
   
       
   
   // 8. Show & Hide Page Elements (calculations_point_foundation_output)
   
       if (location_name == 'calculations_point_foundation_output') {
   
   
   
           // Show rectangular point foundation shape class
           if (point_foundation_shape == 'rectangular') {
               // elements = document.querySelectorAll('.rectangular_point_foundation_shape');
               elements = document.querySelectorAll('.rec');
               for (var i = 0; i < elements.length; i++) {
                   elements[i].classList.remove('hidden');
               }
           }
   
   
           // Show circular point foundation shape class
           if (point_foundation_shape == 'circular') {
               // elements = document.querySelectorAll('.circular_point_foundation_shape');
               elements = document.querySelectorAll('.cir');
               for (var i = 0; i < elements.length; i++) {
                   elements[i].classList.remove('hidden');
               }
   
           }
   
           // Show rectangular column shape class
           if (column_shape == 'rectangular') {
               // elements = document.querySelectorAll('.rectangular_column_shape');
               elements = document.querySelectorAll('.rec_cs');
               for (var i = 0; i < elements.length; i++) {
                   elements[i].classList.remove('hidden');
               }
           }
   
           // Show rectangular column shape class
           if (column_shape == 'circular') {
               // elements = document.querySelectorAll('.circular_column_shape');
               elements = document.querySelectorAll('.cir_cs');
               for (var i = 0; i < elements.length; i++) {
                   elements[i].classList.remove('hidden');
               }
           }
   
           // Show steel reinforcement class
           if (include_steel == 'on') {
               elements = document.querySelectorAll('.steel');
               for (var i = 0; i < elements.length; i++) {
                   elements[i].classList.remove('hidden');
               }
   
           }
   
            // Show fiber reinforcement class
            if (include_fiber == 'on') {
               elements = document.querySelectorAll('.fiber');
               for (var i = 0; i < elements.length; i++) {
                   elements[i].classList.remove('hidden');
               }
   
           }
   
           // Show steel_only reinforcement class
           if (include_fiber != 'on') {
               elements = document.querySelectorAll('.steel_only');
               for (var i = 0; i < elements.length; i++) {
                   elements[i].classList.remove('hidden');
               }
           }
   
   
           // Show lmd known class
           if (lmd_known == 'on') {
               elements = document.querySelectorAll('.lmd');
               for (var i = 0; i < elements.length; i++) {
                   elements[i].classList.remove('hidden');
               }
   
               if (point_foundation_shape == 'rectangular') {
                   elements = document.querySelectorAll('.lmd_rec');
                   // elements = document.querySelectorAll('.dr');
                   for (var i = 0; i < elements.length; i++) {
                       elements[i].classList.remove('hidden');
                   }
               }
   
               if (point_foundation_shape == 'circular') {
   
                   elements = document.querySelectorAll('.lmd_cir');
                   // elements = document.querySelectorAll('.dr');
                   for (var i = 0; i < elements.length; i++) {
                       elements[i].classList.remove('hidden');
                   }
               }
   
           }
   
   
   
   
   
           // Show lmd not known class
           if (dimensions_known == '' && lmd_known == '') {
                 
               elements = document.querySelectorAll('.lmd_off');
               for (var i = 0; i < elements.length; i++) {
                   elements[i].classList.remove('hidden');
               }
   
               if (point_foundation_shape == 'rectangular') {
   
                   elements = document.querySelectorAll('.lmd_off_rec');
                   // elements = document.querySelectorAll('.dr');
                   for (var i = 0; i < elements.length; i++) {
                       elements[i].classList.remove('hidden');
                   }
               }
   
               if (point_foundation_shape == 'circular') {
   
                   elements = document.querySelectorAll('.lmd_off_cir');
                   // elements = document.querySelectorAll('.dr');
                   for (var i = 0; i < elements.length; i++) {
                       elements[i].classList.remove('hidden');
                   }
               }
   
   
               // Show ground type both class
               if (ground_type == 'both') {
   
                   // top level drained and undrained for both
                   elements = document.querySelectorAll('.dr_ud');
                   for (var i = 0; i < elements.length; i++) {
                       elements[i].classList.remove('hidden');
                   }
   
                   // top level drained for both
                   // elements = document.querySelectorAll('.drained');
                   elements = document.querySelectorAll('.dr');
                   for (var i = 0; i < elements.length; i++) {
                       elements[i].classList.remove('hidden');
                   }
   
                   if (point_foundation_shape == 'rectangular') {
   
                       elements = document.querySelectorAll('.dr_rec');
                       // elements = document.querySelectorAll('.dr');
                       for (var i = 0; i < elements.length; i++) {
                           elements[i].classList.remove('hidden');
                       }
                   }
   
                   if (point_foundation_shape == 'circular') {
   
                       elements = document.querySelectorAll('.dr_cir');
                       // elements = document.querySelectorAll('.dr');
                       for (var i = 0; i < elements.length; i++) {
                           elements[i].classList.remove('hidden');
                       }
                   }
   
                   // top level undrained both
                   // elements = document.querySelectorAll('.undrained');
                   elements = document.querySelectorAll('.ud');
                   for (var i = 0; i < elements.length; i++) {
                       elements[i].classList.remove('hidden');
                   }
   
                   if (point_foundation_shape == 'rectangular') {
   
                       elements = document.querySelectorAll('.ud_rec');
                       // elements = document.querySelectorAll('.ud');
                       for (var i = 0; i < elements.length; i++) {
                           elements[i].classList.remove('hidden');
                       }
                   }
   
                   if (point_foundation_shape == 'circular') {
   
                       elements = document.querySelectorAll('.ud_cir');
                       // elements = document.querySelectorAll('.ud');
                       for (var i = 0; i < elements.length; i++) {
                           elements[i].classList.remove('hidden');
                       }
                   }
   
               }
   
   
               // Show ground type drained class
               if (ground_type == 'drained') {
   
                   // top level just drained
                   // elements = document.querySelectorAll('.drained');
                   elements = document.querySelectorAll('.dr');
                   for (var i = 0; i < elements.length; i++) {
                       elements[i].classList.remove('hidden');
                   }
   
                   if (point_foundation_shape == 'rectangular') {
   
                       elements = document.querySelectorAll('.dr_rec');
                       // elements = document.querySelectorAll('.dr');
                       for (var i = 0; i < elements.length; i++) {
                           elements[i].classList.remove('hidden');
                       }
                   }
   
                   if (point_foundation_shape == 'circular') {
   
                       elements = document.querySelectorAll('.dr_cir');
                       // elements = document.querySelectorAll('.dr');
                       for (var i = 0; i < elements.length; i++) {
                           elements[i].classList.remove('hidden');
                       }
                   }
   
               }
   
               // Show ground type drained class
               if (ground_type == 'undrained') {
   
                   // top level just undrained
                   // elements = document.querySelectorAll('.undrained');
                   elements = document.querySelectorAll('.ud');
                   for (var i = 0; i < elements.length; i++) {
                       elements[i].classList.remove('hidden');
                   }
   
                   if (point_foundation_shape == 'rectangular') {
   
                       elements = document.querySelectorAll('.ud_rec');
                       // elements = document.querySelectorAll('.ud');
                       for (var i = 0; i < elements.length; i++) {
                           elements[i].classList.remove('hidden');
                       }
                   }
   
                   if (point_foundation_shape == 'circular') {
   
                       elements = document.querySelectorAll('.ud_cir');
                       // elements = document.querySelectorAll('.ud');
                       for (var i = 0; i < elements.length; i++) {
                           elements[i].classList.remove('hidden');
                       }
                   }
   
   
   
   
               }
           }
   
   
   
           // Show dim known class
           if (dimensions_known == 'on' && lmd_known == '') {
   
               elements = document.querySelectorAll('.dim');
               for (var i = 0; i < elements.length; i++) {
                   elements[i].classList.remove('hidden');
               }
   
               if (point_foundation_shape == 'rectangular') {
   
                   elements = document.querySelectorAll('.dim_rec');
                   // elements = document.querySelectorAll('.dr');
                   for (var i = 0; i < elements.length; i++) {
                       elements[i].classList.remove('hidden');
                   }
               }
   
               if (point_foundation_shape == 'circular') {
   
                   elements = document.querySelectorAll('.dim_cir');
                   // elements = document.querySelectorAll('.dr');
                   for (var i = 0; i < elements.length; i++) {
                       elements[i].classList.remove('hidden');
                   }
               }
   
   
   
           }
   
   
   
   
           // Show dimensions known class
           if (dimensions_known == '' && lmd_known == '') {
               // elements = document.querySelectorAll('.lmd_off_dim_known_off');
               elements = document.querySelectorAll('.lmd_dim_off');
               for (var i = 0; i < elements.length; i++) {
                   elements[i].classList.remove('hidden');
               }
           }
   
           // Show for everything except lmd
           if (lmd_known != 'on') {
               elements = document.querySelectorAll('.lmd_off_only');
               for (var i = 0; i < elements.length; i++) {
                   elements[i].classList.remove('hidden');
               }
           }
   
       }
   
   
   
   
   // 9. Pre-Verification Slide Out (calculations_point_foundation)
   
       if (location_name == 'calculations_point_foundation') {
   
   
           // Define Pre verification array
           let pre_validation_array = []
   
           // Pe Verification Checker - default lmd (internal moment) known
           function pre_verification_checker() {
   
               // Start with all 
               pre_verification1.classList.add('hidden');
               pre_verification2.classList.add('hidden');
               pre_verification3.classList.add('hidden');
               pre_verification4.classList.add('hidden');
               pre_verification5.classList.add('hidden');
               pre_verification6.classList.add('hidden');
               pre_verification7.classList.add('hidden');
               pre_verification8.classList.add('hidden');
               pre_verification9.classList.add('hidden');
               pre_verification10.classList.add('hidden');
               pre_verification11.classList.add('hidden');
               pre_verification12.classList.add('hidden');
               pre_verification13.classList.add('hidden');
               pre_verification14.classList.add('hidden');
               pre_verification15.classList.add('hidden');
               pre_verification16.classList.add('hidden');
               pre_verification17.classList.add('hidden');
   
   
   
               switch (lmd_known) {
               case "on":
               pre_verification_dim_unknown_point_shape()
               break;
               case undefined:
               dimension_known_switch()
               break;
           }
           }
   
           // Pe Verification Checker - dimensions (geo tech) known
           function dimension_known_switch() {
               switch (dimensions_known) {
                   case "on":
                   pre_verification_dim_known_point_shape()
                   break;
                   case undefined:
                   pre_verification_dim_unknown_point_shape()
                   break;
               }
           }
   
   
   
           // Point Foundation Shape when dimensions (geo tech) known
           function pre_verification_dim_known_point_shape() {
           switch (point_foundation_shape) {
               case "rectangular":
                   if (vl_external < 0) {
               pre_verification_check1(self_weight,vl_external)   
           } 
               pre_verification_check15(e_dim_l,length)
               pre_verification_check16(e_dim_b, width) 
               // console.log("dim known rect")
               break;
               case "circular":
                   if (vl_external < 0) {
               pre_verification_check1(self_weight,vl_external)    
           }   
               pre_verification_check17(e_dim_r,radius)
               // console.log("dim known circ")
               break;
           }
           }
   
           // Point Foundation Shape when lmd (internal moment) known
           function pre_verification_dim_unknown_point_shape() {
           switch (point_foundation_shape) {
               case "rectangular":           
              
               // Only check for negative vl_external values
               if (vl_external < 0) {
                pre_verification_check2(self_weight, vl_external, ground_weight)          
               }    
               pre_verification_check3(e_total_dr_st_l, length)
               pre_verification_check4(e_total_dr_lt_l, length)
               pre_verification_check5(e_total_ud_st_l, length)
               pre_verification_check6(e_total_ud_lt_l, length)
               pre_verification_check7(e_total_dr_st_b, width)
               pre_verification_check8(e_total_dr_lt_b, width)
               pre_verification_check9(e_total_ud_st_b, width)
               pre_verification_check10(e_total_ud_lt_b, width)
               // console.log("dim unknown rect")
               break;
               case "circular":
               // Only check for negative vl_external values
               if (vl_external < 0) {
                   pre_verification_check2(self_weight, vl_external, ground_weight)                 
               }   
               pre_verification_check11(e_total_dr_st_r, radius)
               pre_verification_check12(e_total_dr_lt_r, radius)
               pre_verification_check13(e_total_ud_st_r, radius)
               pre_verification_check14(e_total_ud_lt_r, radius)
               // console.log("dim unknown circ")
               break;
           }
           }
   
   
           // Verification Check 1
   
           function pre_verification_check1(self_weight, vl_external) {
   
   
               if (!isNaN(self_weight) && !isNaN(vl_external)) {
   
                   var pre_verification1_values = "$$" + Math.abs(vl_external.toFixed(2)) + "\\;\\text{kN} \\leq " + (self_weight * 0.9).toFixed(2) + "\\;\\text{kN} $$";
                   var pre_verification1_eq = "$$ |V_e| \\leq 0.9 F_p $$"
                   pre_verification1.classList.remove('hidden');
                   document.getElementById("pre_verification1_equation").innerHTML = pre_verification1_values;
                   document.getElementById("pre_verification1_eq").innerHTML = pre_verification1_eq;
   
                   if ((Math.abs(vl_external) <= self_weight * 0.9)) {
                       pre_verification1.classList.add('text-success');
                       pre_verification1.classList.remove('text-danger');
                       pre_verification1_checkmark.classList.add('fa-check-circle');
                       pre_verification1_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if ((Math.abs(vl_external) > self_weight * 0.9)) {
                       // add a error to an array
                       pre_verification1.classList.add('text-danger');
                       pre_verification1.classList.remove('text-success');
                       pre_verification1_checkmark.classList.add('fa-times-circle');
                       pre_verification1_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
               }
           }
   
           // Verification Check 2
           function pre_verification_check2(self_weight, vl_external, ground_weight) {
               if (!isNaN(self_weight) && !isNaN(vl_external) && !isNaN(ground_weight)) {
   
   
   
                   var pre_verification2_values = "$$" + Math.abs(vl_external.toFixed(2)) + "\\;\\text{kN} \\leq " + ((self_weight + ground_weight) * 0.9).toFixed(2) + "\\;\\text{kN} $$";
                   var pre_verification2_eq = "$$ |V_e| \\leq 0.9 (F_p + F_g) $$"
                   document.getElementById("pre_verification2").classList.remove('hidden');
                   document.getElementById("pre_verification2_equation").innerHTML = pre_verification2_values;
                   document.getElementById("pre_verification2_eq").innerHTML = pre_verification2_eq;
   
            
   
                   if (Math.abs(vl_external) <= (self_weight + ground_weight) * 0.9) {
                       pre_verification2.classList.add('text-success');
                       pre_verification2.classList.remove('text-danger');
                       pre_verification2_checkmark.classList.add('fa-check-circle');
                       pre_verification2_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if (Math.abs(vl_external) > (self_weight + ground_weight) * 0.9) {
                       // add a error to an array
                       pre_verification2.classList.add('text-danger');
                       pre_verification2.classList.remove('text-success');
                       pre_verification2_checkmark.classList.add('fa-times-circle');
                       pre_verification2_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
               }
           }
   
   
           // Verification Check 3
           function pre_verification_check3(e_total_dr_st_l, length) {
               if (!isNaN(e_total_dr_st_l) && !isNaN(length)) {
   
               
   
                   var pre_verification3_values = "$$" + e_total_dr_st_l.toFixed(2) + "\\;\\text{mm} \\leq " + length.toFixed(2) / 2 + "\\;\\text{mm} $$";
                   var pre_verification3_eq = "$$ e_l \\leq l / 2 $$"
                   pre_verification3.classList.remove('hidden');
                   document.getElementById("pre_verification3_equation").innerHTML = pre_verification3_values;
                   document.getElementById("pre_verification3_eq").innerHTML = pre_verification3_eq;
   
                   if (e_total_dr_st_l <= (length / 2) ) {
                       pre_verification3.classList.add('text-success');
                       pre_verification3.classList.remove('text-danger');
                       pre_verification3_checkmark.classList.add('fa-check-circle');
                       pre_verification3_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if (e_total_dr_st_l > (length / 2)) {
                       // add a error to an array
                       pre_verification3.classList.add('text-danger');
                       pre_verification3.classList.remove('text-success');
                       pre_verification3_checkmark.classList.add('fa-times-circle');
                       pre_verification3_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
               }
           }
   
           // Verification Check 4
           function pre_verification_check4(e_total_dr_lt_l, length) {
               if (!isNaN(e_total_dr_lt_l) && !isNaN(length)) {
   
               
   
                   var pre_verification4_values = "$$" + e_total_dr_lt_l.toFixed(2) + "\\;\\text{mm} \\leq " + length.toFixed(2) / 2 + "\\;\\text{mm} $$";
                   var pre_verification4_eq = "$$ e'_l \\leq l / 2 $$"
                   pre_verification4.classList.remove('hidden');
                   document.getElementById("pre_verification4_equation").innerHTML = pre_verification4_values;
                   document.getElementById("pre_verification4_eq").innerHTML = pre_verification4_eq;
   
                   if (e_total_dr_lt_l <= (length / 2) ) {
                       pre_verification4.classList.add('text-success');
                       pre_verification4.classList.remove('text-danger');
                       pre_verification4_checkmark.classList.add('fa-check-circle');
                       pre_verification4_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if (e_total_dr_lt_l > (length / 2)) {
                       // add a error to an array
                       pre_verification4.classList.add('text-danger');
                       pre_verification4.classList.remove('text-success');
                       pre_verification4_checkmark.classList.add('fa-times-circle');
                       pre_verification4_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
               }
           }
   
           // Verification Check 5
           function pre_verification_check5(e_total_ud_st_l, length) {
               if (!isNaN(e_total_ud_st_l) && !isNaN(length)) {
   
               
   
                   var pre_verification5_values = "$$" + e_total_ud_st_l.toFixed(2) + "\\;\\text{mm} \\leq " + length.toFixed(2) / 2 + "\\;\\text{mm} $$";
                   var pre_verification5_eq = "$$ e_{l,u} \\leq l / 2 $$"
                   pre_verification5.classList.remove('hidden');
                   document.getElementById("pre_verification5_equation").innerHTML = pre_verification5_values;
                   document.getElementById("pre_verification5_eq").innerHTML = pre_verification5_eq;
   
                   if (e_total_ud_st_l <= (length / 2) ) {
                       pre_verification5.classList.add('text-success');
                       pre_verification5.classList.remove('text-danger');
                       pre_verification5_checkmark.classList.add('fa-check-circle');
                       pre_verification5_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if (e_total_ud_st_l > (length / 2)) {
                       // add a error to an array
                       pre_verification5.classList.add('text-danger');
                       pre_verification5.classList.remove('text-success');
                       pre_verification5_checkmark.classList.add('fa-times-circle');
                       pre_verification5_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
               }
           }
   
           // Verification Check 6
           function pre_verification_check6(e_total_ud_lt_l, length) {
               if (!isNaN(e_total_ud_lt_l) && !isNaN(length)) {
   
               
   
                   var pre_verification6_values = "$$" + e_total_ud_lt_l.toFixed(2) + "\\;\\text{mm} \\leq " + length.toFixed(2) / 2 + "\\;\\text{mm} $$";
                   var pre_verification6_eq = "$$ e'_{l,u} \\leq l / 2 $$"
                   pre_verification6.classList.remove('hidden');
                   document.getElementById("pre_verification6_equation").innerHTML = pre_verification6_values;
                   document.getElementById("pre_verification6_eq").innerHTML = pre_verification6_eq;
   
                   if (e_total_ud_lt_l <= (length / 2) ) {
                       pre_verification6.classList.add('text-success');
                       pre_verification6.classList.remove('text-danger');
                       pre_verification6_checkmark.classList.add('fa-check-circle');
                       pre_verification6_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if (e_total_ud_lt_l > (length / 2)) {
                       // add a error to an array
                       pre_verification6.classList.add('text-danger');
                       pre_verification6.classList.remove('text-success');
                       pre_verification6_checkmark.classList.add('fa-times-circle');
                       pre_verification6_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
               }
           }
   
   
           // Verification Check 7
           function pre_verification_check7(e_total_dr_st_b, width) {
               if (!isNaN(e_total_dr_st_b) && !isNaN(width)) {
   
               
   
                   var pre_verification7_values = "$$" + e_total_dr_st_b.toFixed(2) + "\\;\\text{mm} \\leq " + width.toFixed(2) / 2 + "\\;\\text{mm} $$";
                   var pre_verification7_eq = "$$ e_b \\leq b / 2 $$"
                   pre_verification7.classList.remove('hidden');
                   document.getElementById("pre_verification7_equation").innerHTML = pre_verification7_values;
                   document.getElementById("pre_verification7_eq").innerHTML = pre_verification7_eq;
   
                   if (e_total_dr_st_b <= (width / 2) ) {
                       pre_verification7.classList.add('text-success');
                       pre_verification7.classList.remove('text-danger');
                       pre_verification7_checkmark.classList.add('fa-check-circle');
                       pre_verification7_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if (e_total_dr_st_b > (width / 2)) {
                       // add a error to an array
                       pre_verification7.classList.add('text-danger');
                       pre_verification7.classList.remove('text-success');
                       pre_verification7_checkmark.classList.add('fa-times-circle');
                       pre_verification7_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
               }
           }
   
           // Verification Check 8
           function pre_verification_check8(e_total_dr_lt_b, width) {
               if (!isNaN(e_total_dr_lt_b) && !isNaN(width)) {
   
               
   
                   var pre_verification8_values = "$$" + e_total_dr_lt_b.toFixed(2) + "\\;\\text{mm} \\leq " + width.toFixed(2) / 2 + "\\;\\text{mm} $$";
                   var pre_verification8_eq = "$$ e'_b \\leq b / 2 $$"
                   pre_verification8.classList.remove('hidden');
                   document.getElementById("pre_verification8_equation").innerHTML = pre_verification8_values;
                   document.getElementById("pre_verification8_eq").innerHTML = pre_verification8_eq;
   
                   if (e_total_dr_lt_b <= (width / 2) ) {
                       pre_verification8.classList.add('text-success');
                       pre_verification8.classList.remove('text-danger');
                       pre_verification8_checkmark.classList.add('fa-check-circle');
                       pre_verification8_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if (e_total_dr_lt_b > (width / 2)) {
                       // add a error to an array
                       pre_verification8.classList.add('text-danger');
                       pre_verification8.classList.remove('text-success');
                       pre_verification8_checkmark.classList.add('fa-times-circle');
                       pre_verification8_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
               }
           }
   
           // Verification Check 9
           function pre_verification_check9(e_total_ud_st_b, width) {
               if (!isNaN(e_total_ud_st_b) && !isNaN(width)) {
   
               
   
                   var pre_verification9_values = "$$" + e_total_ud_st_b.toFixed(2) + "\\;\\text{mm} \\leq " + width.toFixed(2) / 2 + "\\;\\text{mm} $$";
                   var pre_verification9_eq = "$$ e_{b,u} \\leq b / 2 $$"
                   pre_verification9.classList.remove('hidden');
                   document.getElementById("pre_verification9_equation").innerHTML = pre_verification9_values;
                   document.getElementById("pre_verification9_eq").innerHTML = pre_verification9_eq;
   
                   if (e_total_ud_st_b <= (width / 2) ) {
                       pre_verification9.classList.add('text-success');
                       pre_verification9.classList.remove('text-danger');
                       pre_verification9_checkmark.classList.add('fa-check-circle');
                       pre_verification9_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if (e_total_ud_st_b > (width / 2)) {
                       // add a error to an array
                       pre_verification9.classList.add('text-danger');
                       pre_verification9.classList.remove('text-success');
                       pre_verification9_checkmark.classList.add('fa-times-circle');
                       pre_verification9_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
               }
           }
   
           // Verification Check 10
           function pre_verification_check10(e_total_ud_lt_b, width) {
               if (!isNaN(e_total_ud_lt_b) && !isNaN(width)) {
   
               
   
                   var pre_verification10_values = "$$" + e_total_ud_lt_b.toFixed(2) + "\\;\\text{mm} \\leq " + width.toFixed(2) / 2 + "\\;\\text{mm} $$";
                   var pre_verification10_eq = "$$ e'_{b,u} \\leq b / 2 $$"
                   pre_verification10.classList.remove('hidden');
                   document.getElementById("pre_verification10_equation").innerHTML = pre_verification10_values;
                   document.getElementById("pre_verification10_eq").innerHTML = pre_verification10_eq;
   
                   if (e_total_ud_lt_b <= (width / 2) ) {
                       pre_verification10.classList.add('text-success');
                       pre_verification10.classList.remove('text-danger');
                       pre_verification10_checkmark.classList.add('fa-check-circle');
                       pre_verification10_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if (e_total_ud_lt_b > (width / 2)) {
                       // add a error to an array
                       pre_verification10.classList.add('text-danger');
                       pre_verification10.classList.remove('text-success');
                       pre_verification10_checkmark.classList.add('fa-times-circle');
                       pre_verification10_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
               }
           }
   
   
   
           // Verification Check 11
           function pre_verification_check11(e_total_dr_st_r, radius) {
               if (!isNaN(e_total_dr_st_r) && !isNaN(radius)) {
   
               
   
                   var pre_verification11_values = "$$" + e_total_dr_st_r.toFixed(2) + "\\;\\text{mm} \\leq " + radius.toFixed(2) / 2 + "\\;\\text{mm} $$";
                   var pre_verification11_eq = "$$ e_r \\leq r $$"
                   pre_verification11.classList.remove('hidden');
                   document.getElementById("pre_verification11_equation").innerHTML = pre_verification11_values;
                   document.getElementById("pre_verification11_eq").innerHTML = pre_verification11_eq;
   
                   if (e_total_dr_st_r <= radius ) {
                       pre_verification11.classList.add('text-success');
                       pre_verification11.classList.remove('text-danger');
                       pre_verification11_checkmark.classList.add('fa-check-circle');
                       pre_verification11_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if (e_total_dr_st_r > radius) {
                       // add a error to an array
                       pre_verification11.classList.add('text-danger');
                       pre_verification11.classList.remove('text-success');
                       pre_verification11_checkmark.classList.add('fa-times-circle');
                       pre_verification11_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
               }
           }
   
           // Verification Check 12
           function pre_verification_check12(e_total_dr_lt_r, radius) {
               if (!isNaN(e_total_dr_lt_r) && !isNaN(radius)) {
   
               
   
                   var pre_verification12_values = "$$" + e_total_dr_lt_r.toFixed(2) + "\\;\\text{mm} \\leq " + radius.toFixed(2) / 2 + "\\;\\text{mm} $$";
                   var pre_verification12_eq = "$$ e'_r \\leq r $$"
                   pre_verification12.classList.remove('hidden');
                   document.getElementById("pre_verification12_equation").innerHTML = pre_verification12_values;
                   document.getElementById("pre_verification12_eq").innerHTML = pre_verification12_eq;
   
                   if (e_total_dr_lt_r <= radius ) {
                       pre_verification12.classList.add('text-success');
                       pre_verification12.classList.remove('text-danger');
                       pre_verification12_checkmark.classList.add('fa-check-circle');
                       pre_verification12_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if (e_total_dr_lt_r > radius) {
                       // add a error to an array
                       pre_verification12.classList.add('text-danger');
                       pre_verification12.classList.remove('text-success');
                       pre_verification12_checkmark.classList.add('fa-times-circle');
                       pre_verification12_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
               }
           }
   
           // Verification Check 13
           function pre_verification_check13(e_total_ud_st_r, radius) {
               if (!isNaN(e_total_ud_st_r) && !isNaN(radius)) {
   
               
   
                   var pre_verification13_values = "$$" + e_total_ud_st_r.toFixed(2) + "\\;\\text{mm} \\leq " + radius.toFixed(2) / 2 + "\\;\\text{mm} $$";
                   var pre_verification13_eq = "$$ e_{r,u} \\leq r $$"
                   pre_verification13.classList.remove('hidden');
                   document.getElementById("pre_verification13_equation").innerHTML = pre_verification13_values;
                   document.getElementById("pre_verification13_eq").innerHTML = pre_verification13_eq;
   
                   if (e_total_ud_st_r <= radius ) {
                       pre_verification13.classList.add('text-success');
                       pre_verification13.classList.remove('text-danger');
                       pre_verification13_checkmark.classList.add('fa-check-circle');
                       pre_verification13_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if (e_total_ud_st_r > radius) {
                       // add a error to an array
                       pre_verification13.classList.add('text-danger');
                       pre_verification13.classList.remove('text-success');
                       pre_verification13_checkmark.classList.add('fa-times-circle');
                       pre_verification13_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
               }
           }
   
           // Verification Check 14
           function pre_verification_check14(e_total_ud_lt_r, radius) {
               if (!isNaN(e_total_ud_lt_r) && !isNaN(radius)) {
   
               
   
                   var pre_verification14_values = "$$" + e_total_ud_lt_r.toFixed(2) + "\\;\\text{mm} \\leq " + radius.toFixed(2) / 2 + "\\;\\text{mm} $$";
                   var pre_verification14_eq = "$$ e'_{r,u} \\leq r $$"
                   pre_verification14.classList.remove('hidden');
                   document.getElementById("pre_verification14_equation").innerHTML = pre_verification14_values;
                   document.getElementById("pre_verification14_eq").innerHTML = pre_verification14_eq;
   
                   if (e_total_ud_lt_r <= radius ) {
                       pre_verification14.classList.add('text-success');
                       pre_verification14.classList.remove('text-danger');
                       pre_verification14_checkmark.classList.add('fa-check-circle');
                       pre_verification14_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if (e_total_ud_lt_r > radius) {
                       // add a error to an array
                       pre_verification14.classList.add('text-danger');
                       pre_verification14.classList.remove('text-success');
                       pre_verification14_checkmark.classList.add('fa-times-circle');
                       pre_verification14_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
               }
           }
   
   
           // Pre Verification 15 
   
   
   
           function pre_verification_check15(e_dim_l, length) {
               if (!isNaN(e_dim_l) && !isNaN(length)) {
   
                   var pre_verification15_values = "$$" + e_dim_l.toFixed(2) + "\\;\\text{mm} \\leq " + length.toFixed(2) / 2 + "\\;\\text{mm} $$";
                   var pre_verification15_eq = "$$ e_l \\leq l / 2 $$"
                   pre_verification15.classList.remove('hidden');
                   document.getElementById("pre_verification15_equation").innerHTML = pre_verification15_values;
                   document.getElementById("pre_verification15_eq").innerHTML = pre_verification15_eq;
   
   
                   if (e_dim_l <= length / 2) {
                       pre_verification15.classList.add('text-success');
                       pre_verification15.classList.remove('text-danger');
                       pre_verification15_checkmark.classList.add('fa-check-circle');
                       pre_verification15_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if (e_dim_l > length / 2) {
                       // add a error to an array
                       pre_verification15.classList.add('text-danger');
                       pre_verification15.classList.remove('text-success');
                       pre_verification15_checkmark.classList.add('fa-times-circle');
                       pre_verification15_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
               }
           }
   
   
           function pre_verification_check16(e_dim_b, width) {
               if (!isNaN(e_dim_l) && !isNaN(width)) {
                   // Pre Verification 16 
                   var pre_verification16_values = "$$" + e_dim_b.toFixed(2) + "\\;\\text{mm} \\leq " + width.toFixed(2) / 2 + "\\;\\text{mm} $$";
                   var pre_verification16_eq = "$$ e_b \\leq b / 2 $$"
                   pre_verification16.classList.remove('hidden');
                   document.getElementById("pre_verification16_equation").innerHTML = pre_verification16_values;
                   document.getElementById("pre_verification16_eq").innerHTML = pre_verification16_eq;
   
   
                   if (e_dim_b <= width / 2) {
                       pre_verification16.classList.add('text-success');
                       pre_verification16.classList.remove('text-danger');
                       pre_verification16_checkmark.classList.add('fa-check-circle');
                       pre_verification16_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if (e_dim_b > width / 2) {
                       // add a error to an array
                       pre_verification16.classList.add('text-danger');
                       pre_verification16.classList.remove('text-success');
                       pre_verification16_checkmark.classList.add('fa-times-circle');
                       pre_verification16_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
   
               }
           }
   
   
           function pre_verification_check17(e_dim_r, radius) {
               if (!isNaN(e_dim_r) && !isNaN(radius)) {
                   // Pre Verification 17 
                   var pre_verification17_values = "$$" + e_dim_r.toFixed(2) + "\\;\\text{mm} \\leq " + radius.toFixed(2) + "\\;\\text{mm} $$";
                   var pre_verification17_eq = "$$ e_r \\leq r $$"
                   pre_verification17.classList.remove('hidden');
                   document.getElementById("pre_verification17_equation").innerHTML = pre_verification17_values;
                   document.getElementById("pre_verification17_eq").innerHTML = pre_verification17_eq;
   
   
                   if (e_dim_r <= radius) {
                       pre_verification17.classList.add('text-success');
                       pre_verification17.classList.remove('text-danger');
                       pre_verification17_checkmark.classList.add('fa-check-circle');
                       pre_verification17_checkmark.classList.remove('fa-times-circle');
                       pre_validation_array.push("pass")
                   } else if (e_dim_r > radius) {
                       // add a error to an array
                       pre_verification17.classList.add('text-danger');
                       pre_verification17.classList.remove('text-success');
                       pre_verification17_checkmark.classList.add('fa-times-circle');
                       pre_verification17_checkmark.classList.remove('fa-check-circle');
                       pre_validation_array.push("fail")
                   }
   
               }
           }
   
           // Run Pre verification checker
   
           pre_verification_checker()
           // check if any instances of pre validation failing
           var fail_pre_validation = pre_validation_array.includes("fail")
   
           // hide pre verification tab if not failed   
           if (fail_pre_validation != true) {
               document.getElementById('slideOut_pre').classList.add('hidden');
           } else {
               document.getElementById('slideOut_pre').classList.remove('hidden');
           }
   
   
   
   
   
   // 10. Validation & Restrictions (calculations_point_foundation)
   // Also builds point_foundation_mpdf.php (new output page)
   
           revealFirstDiscardRest = (...args) => {
               // can take any number of argument
               // keeps the first element in the array "args"
               
               revealed = $(args[0])
               revealed.removeClass('removeMe')
   
               // console.log(revealed)
               
               // removes the rest of
               if(args.length > 1) {
                   for(i = 1; i < args.length; i++) {
                       $(args[i]).each(function() {
                           $( this ).addClass( "removeMe" );
                       });
                   }
               }
           }
   
           
   
   
           // START
           let geometry_values = []
           let loads_values = []
           let geotech_parameters_values = []
           let material_properties_values = []
           let reinforcement_values = []
           let validation_array = []
           var all_values = []
   
   
           //SWITCHES
   
           function lmd_known_switch() {
               switch(lmd_known) {
                   case "on":
                       dimensions_known_section.classList.add('hidden');
                       geometry_card_section1.classList.add('hidden');
                       loads_card_section0.classList.remove('hidden'); //  External
                       loads_card_section1.classList.remove('hidden'); //  Internal moment
                       loads_card_section2.classList.add('hidden'); //  Design Terrain Live Load
                       loads_card_section3.classList.add('hidden'); //All Other Loads
                       material_card_section1.classList.add('hidden');
                       geotechnical_card.classList.add('hidden');
   
   
   
                       if(!isNaN(vl_external) && !isNaN(internal_moment)) {
                           loads_values.push(vl_external, internal_moment)
                       } else {
                           loads_values.push(NaN)
                       }
   
                       row_depth.classList.add('hidden');
                       material_properties_values.push(concrete_type)
   
                       //switch point foundation shape
                       lmd_known_on_point_foundation_shape_switch()
                       
                       // print settings
                       console.log("ver 1 ver 2")
                       document.getElementById("verification1_eq_print").innerHTML = "\\[ M_{Ed} \\leq \\min\\left({M_{p,l},M_{p,b}}\\right) \\]"
                       document.getElementById("verification1_equation_print").innerHTML = "\\[" + internal_moment.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_internal.toFixed(2) + " \\; \\text{kNm} \\]"
   
                       document.getElementById("verification2_eq_print").innerHTML = "\\[ V_e \\leq P \\]"
                       document.getElementById("verification2_equation_print").innerHTML = "\\[" + vl_external.toFixed(2) + " \\; \\text{kN} \\leq " + P_u.toFixed(2) + " \\; \\text{kN} \\]"
   
                       
                       revealFirstDiscardRest('.ver_lmd_known_on', '.ver_lmd_known_off_ground_type_both', '.ver_lmd_known_off_ground_type_drained', '.ver_lmd_known_off_ground_type_undrained', '.ver_lmd_known_off_dim_known_on')
                       
                       $('.dim_off').addClass('removeMe')
   
   
   
                       break;
                   case undefined:
                       dimensions_known_switch()
   
                       break; 
               }
           }
   
           
   
           function dimensions_known_switch() {
               switch(dimensions_known) {
                   case "on":
                       geotechnical_card.classList.add('hidden');
                       dimensions_known_section.classList.remove('hidden'); // dimension known switch
                       geometry_card_section1.classList.remove('hidden'); // Column placement Length and Column placement Width
                       loads_card_section0.classList.remove('hidden'); // External 
                       loads_card_section1.classList.add('hidden'); //  Internal moment
                       loads_card_section2.classList.add('hidden'); //  Design Terrain Live Load
                       loads_card_section3.classList.remove('hidden'); //All Other Loads
                       material_card_section1.classList.add('hidden'); // Hide Point Foundation Fabrication Method   
                       row_depth.classList.add('hidden'); // depth field
                       
                       if(!isNaN(vl_external) && !isNaN(hl_length) && !isNaN(hl_width) && !isNaN(m_length) && !isNaN(m_width)) {
                           loads_values.push(vl_external, hl_length, hl_width, m_length, m_width)
                       } else {
                           loads_values.push(NaN)
                       }
                       
                       geotech_verification_on_point_foundation_switch()
                       material_properties_values.push(concrete_type)
   
                       //print settings
                       console.log("ver 27 28 29")
   
                       document.getElementById("verification27_eq_print").innerHTML = "\\[ M_{Ed,l} \\leq M_{p,l} \\]"
                       document.getElementById("verification27_equation_print").innerHTML = "\\[" + M_dim_Ed_l.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_l.toFixed(2) + " \\; \\text{kNm} \\]"
   
                       document.getElementById("verification28_eq_print").innerHTML = "\\[ M_{Ed,b} \\leq M_{p,b} \\]"
                       document.getElementById("verification28_equation_print").innerHTML = "\\[" + M_dim_Ed_b.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_b.toFixed(2) + " \\; \\text{kNm} \\]"
   
                       document.getElementById("verification29_eq_print").innerHTML = "\\[ V_e \\leq P \\]"
                       document.getElementById("verification29_equation_print").innerHTML = "\\[" + vl_external.toFixed(2) + " \\; \\text{kN} \\leq " + P_u.toFixed(2) + " \\; \\text{kN} \\]"
   
                       revealFirstDiscardRest('.ver_lmd_known_off_dim_known_on', '.ver_lmd_known_off_ground_type_undrained', '.ver_lmd_known_off_ground_type_drained', '.ver_lmd_known_off_ground_type_both', '.ver_lmd_known_on')
                       $('.dim_off').addClass('removeMe')
   
                       break;
                   case undefined:
                       dimensions_known_section.classList.remove('hidden');
                       geometry_card_section1.classList.remove('hidden');
                       loads_card_section0.classList.remove('hidden'); //  External 
                       loads_card_section1.classList.add('hidden'); //  Internal moment
                       loads_card_section2.classList.remove('hidden'); //  Design Terrain Live Load
                       loads_card_section3.classList.remove('hidden'); //All Other Loads
                       material_card_section1.classList.remove('hidden');
                       row_depth.classList.remove('hidden');
                       geotechnical_card.classList.remove('hidden');
   
                       if(!isNaN(vl_external) && terrain_live_load_restr(terrain_live_load) && !isNaN(hl_length) && !isNaN(hl_width) && !isNaN(m_length) && !isNaN(m_width)) {
                           loads_values.push(vl_external, terrain_live_load, hl_length, hl_width, m_length, m_width)
                       } else {
                           loads_values.push(NaN)
                       }
   
                       // print settings
                       $('.dim_off').removeClass('removeMe')
                       
                       geotech_verification_off_point_foundation_switch()
                       geotech_parameters_known_switch()
                       material_properties_values.push(concrete_type, fabrication_method)
   
                       break;
               }
           }
   
   
           function include_shaft_design_switch() {
   
               switch (include_shaft) {
                   case 'on':
                        if (isNaN(shaft_height)) {
                           geometry_values.push(NaN)
                       }
                       shaft_height_restr(shaft_height)
                       surface_type_selected(c_cast)
                       break;
                   case undefined:
                       // console.log("shaft off")
                       break;
               }
               }
   
   
   
           function geotech_parameters_known_switch() {
               document.getElementById("geotechnical_card").classList.remove('hidden')
               document.getElementById("geotech_valid").classList.add('hidden');
               document.getElementById("geotech_invalid").classList.remove('hidden');
               
               switch(geo_known) {
                   case "on":
                       geotechnical_card_sub1.classList.remove('hidden');
                       geotech_known_on_ground_type_switch()
                       break;
                   case undefined:
                       geotechnical_card_sub1.classList.add('hidden');
                       geotech_parameters_values.push(ground_type)
                       geotech_known_off_ground_type_switch()
                       break;
               }
           }
   
           function geotech_known_off_ground_type_switch() {
   
               row_ud_lt_af_k.classList.add('hidden');
               row_ud_st_cohesion_k.classList.add('hidden');
               row_ud_lt_cohesion_k.classList.add('hidden');
               row_dr_st_af_k.classList.add('hidden');
               row_dr_lt_af_k.classList.add('hidden');
   
               switch(ground_type) {
                   case "drained":
                       geotech_parameters_values.push(ground_type)
                       //print settings
   
                       console.log("ver 9a  9b 10 11 12 13 14")
   
                       document.getElementById("verification9a_eq_print").innerHTML = "\\[ M_{Ed,l} \\leq M_{p,l} \\]"
                       document.getElementById("verification9a_equation_print").innerHTML = "\\[" + M_Ed_dr_l.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_l.toFixed(2) + " \\; \\text{kNm} \\]"
   
                       document.getElementById("verification9b_eq_print").innerHTML = "\\[ M_{Ed,b} \\leq M_{p,b} \\]"
                       document.getElementById("verification9b_equation_print").innerHTML = "\\[" + M_Ed_dr_b.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_b.toFixed(2) + " \\; \\text{kNm} \\]"
   
                       document.getElementById("verification10_eq_print").innerHTML = "\\[ V_t \\leq R \\]"
                       document.getElementById("verification10_equation_print").innerHTML = "\\[" + vl_total_dr_st.toFixed(2) + " \\; \\text{kN} \\leq " + R_total_dr_st.toFixed(2) + " \\; \\text{kN} \\]"
   
                       document.getElementById("verification11_eq_print").innerHTML = "\\[ V'_t \\leq R' \\]"
                       document.getElementById("verification11_equation_print").innerHTML = "\\[" + vl_total_dr_lt.toFixed(2) + " \\; \\text{kN} \\leq " + R_total_dr_lt.toFixed(2) + " \\; \\text{kN} \\]"
   
                       document.getElementById("verification12_eq_print").innerHTML = "\\[ H_{res} \\leq H_{R} \\]"
                       document.getElementById("verification12_equation_print").innerHTML = "\\[" + H_res_dr_st.toFixed(2) + " \\; \\text{kN} \\leq " + H_dr_st.toFixed(2) + " \\; \\text{kN} \\]"
   
                       document.getElementById("verification13_eq_print").innerHTML = "\\[ H'_{res} \\leq H'_{R} \\]"
                       document.getElementById("verification13_equation_print").innerHTML = "\\[" + H_res_dr_lt.toFixed(2) + " \\; \\text{kN} \\leq " + H_dr_lt.toFixed(2) + " \\; \\text{kN} \\]"
   
                       document.getElementById("verification14_eq_print").innerHTML = "\\[ V_e \\leq P \\]"
                       document.getElementById("verification14_equation_print").innerHTML = "\\[" + vl_external.toFixed(2) + " \\; \\text{kN} \\leq " + P_u.toFixed(2) + " \\; \\text{kN} \\]"
                   
                       revealFirstDiscardRest('.ver_lmd_known_off_ground_type_drained', '.ver_lmd_known_off_ground_type_both', '.ver_lmd_known_on', '.ver_lmd_known_off_ground_type_undrained', '.ver_lmd_known_off_dim_known_on')
                       
                       revealFirstDiscardRest('.dr', '.ud')
   
                       
                       break;
   
                   case "undrained":
                       geotech_parameters_values.push(ground_type)
   
                       //print settings
   
                       console.log("ver 18a 18b 19 20 21 22 23")
   
                       document.getElementById("verification18a_eq_print").innerHTML = "\\[ M_{Ed,l} \\leq M_{p,l} \\]"
                       document.getElementById("verification18a_equation_print").innerHTML = "\\[" + M_Ed_ud_l.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_l.toFixed(2) + " \\; \\text{kNm} \\]"
   
                       document.getElementById("verification18b_eq_print").innerHTML = "\\[ M_{Ed,b} \\leq M_{p,b} \\]"
                       document.getElementById("verification18b_equation_print").innerHTML = "\\[" + M_Ed_ud_b.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_b.toFixed(2) + " \\; \\text{kNm} \\]"
   
                       document.getElementById("verification19_eq_print").innerHTML = "\\[ V_{t,u} \\leq R_u \\]"
                       document.getElementById("verification19_equation_print").innerHTML = "\\[" + vl_total_ud_st.toFixed(2) + " \\; \\text{kN} \\leq " + R_total_ud_st.toFixed(2) + " \\; \\text{kN} \\]"
   
                       document.getElementById("verification20_eq_print").innerHTML = "\\[ V'_{t,u} \\leq R'_u \\]"
                       document.getElementById("verification20_equation_print").innerHTML = "\\[" + vl_total_ud_lt.toFixed(2) + " \\; \\text{kN} \\leq " + R_total_ud_lt.toFixed(2) + " \\; \\text{kN} \\]"
   
                       document.getElementById("verification21_eq_print").innerHTML = "\\[ H_{res,u} \\leq H_{R,u} \\]"
                       document.getElementById("verification21_equation_print").innerHTML = "\\[" + H_res_ud_st.toFixed(2) + " \\; \\text{kN} \\leq " + H_ud_st.toFixed(2) + " \\; \\text{kN} \\]"
   
                       document.getElementById("verification22_eq_print").innerHTML = "\\[ H'_{res,u} \\leq H'_{R,u} \\]"
                       document.getElementById("verification22_equation_print").innerHTML = "\\[" + H_res_ud_lt.toFixed(2) + " \\; \\text{kN} \\leq " + H_ud_lt.toFixed(2) + " \\; \\text{kN} \\]"
   
                       document.getElementById("verification23_eq_print").innerHTML = "\\[ V_e \\leq P \\]"
                       document.getElementById("verification23_equation_print").innerHTML = "\\[" + vl_external.toFixed(2) + " \\; \\text{kN} \\leq " + P_u.toFixed(2) + " \\; \\text{kN} \\]"
                       
                       revealFirstDiscardRest('.ver_lmd_known_off_ground_type_undrained', '.ver_lmd_known_off_ground_type_drained', '.ver_lmd_known_off_ground_type_both', '.ver_lmd_known_on', '.ver_lmd_known_off_dim_known_on')
                       
                       revealFirstDiscardRest('.ud', '.dr')
   
                       console.log("UD1")
                       
                       break;
                   case "both":
                       geotech_parameters_values.push(ground_type)
                       //print settings
   
                       console.log("ver 4a 4b 5 6 7")
   
                       document.getElementById("verification4a_eq_print").innerHTML = "\\[ M_{Ed,l} \\leq M_{p,l} \\]"
                       document.getElementById("verification4a_equation_print").innerHTML = "\\[" + M_Ed_l.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_l.toFixed(2) + " \\; \\text{kNm} \\]"
                   
                       document.getElementById("verification4b_eq_print").innerHTML = "\\[ M_{Ed,b} \\leq M_{p,b} \\]"
                       document.getElementById("verification4b_equation_print").innerHTML = "\\[" + M_Ed_b.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_b.toFixed(2) + " \\; \\text{kNm} \\]"
                       
                       document.getElementById("verification5_eq_print").innerHTML = "\\[ V_t \\leq R_t \\]"
                       document.getElementById("verification5_equation_print").innerHTML = "\\[" + vl_total.toFixed(2) + " \\; \\text{kN} \\leq " + R_total.toFixed(2) + " \\; \\text{kN} \\]"
   
                       document.getElementById("verification6_eq_print").innerHTML = "\\[ H_{res} \\leq H_{R,t} \\]"
                       document.getElementById("verification6_equation_print").innerHTML = "\\[" + H_res_both.toFixed(2) + " \\; \\text{kN} \\leq " + H_total.toFixed(2) + " \\; \\text{kN} \\]"
   
                       document.getElementById("verification7_eq_print").innerHTML = "\\[ V_e \\leq P \\]"
                       document.getElementById("verification7_equation_print").innerHTML = "\\[" + vl_external.toFixed(2) + " \\; \\text{kN} \\leq " + P_u.toFixed(2) + " \\; \\text{kN} \\]"
                       
                       revealFirstDiscardRest('.ver_lmd_known_off_ground_type_both', '.ver_lmd_known_on', '.ver_lmd_known_off_ground_type_drained', '.ver_lmd_known_off_ground_type_undrained', '.ver_lmd_known_off_dim_known_on')
   
                       $('.dr').removeClass('removeMe')
                       $('.ud').removeClass('removeMe')
   
   
                       break;
               }
   
           }
   
   
   
           function geotech_known_on_ground_type_switch() {
               switch(ground_type) {
                   case "drained":
                       row_dr_st_af_k.classList.remove('hidden');
                       row_dr_lt_af_k.classList.remove('hidden');
                       row_ud_lt_af_k.classList.add('hidden');
                       row_ud_st_cohesion_k.classList.add('hidden');
                       row_ud_lt_cohesion_k.classList.add('hidden');
   
                       if(isNaN(ground_density) || isNaN(dr_st_af_k) || isNaN(dr_lt_af_k)) {
                           geotech_parameters_values.push(NaN)
                       }
   
                       ground_density_restr(ground_density)
                       dr_st_af_k_restr(dr_st_af_k)
                       dr_lt_af_k_restr(dr_lt_af_k)
   
                       // print settings
                       revealFirstDiscardRest('.dr', '.ud')
   
                       console.log("DR2")
                       
                       break;
                   case "undrained":
                       row_ud_lt_af_k.classList.remove('hidden');
                       row_ud_st_cohesion_k.classList.remove('hidden');
                       row_ud_lt_cohesion_k.classList.remove('hidden');
                       row_dr_st_af_k.classList.add('hidden');
                       row_dr_lt_af_k.classList.add('hidden');
   
                       if(isNaN(ground_density) || isNaN(ud_lt_af_k) || isNaN(ud_st_cohesion_k) || isNaN(ud_lt_cohesion_k)) {
                           geotech_parameters_values.push(false)
                       }
                       ground_density_restr(ground_density)
                       ud_lt_af_k_restr(ud_lt_af_k)
                       ud_st_cohesion_k_restr(ud_st_cohesion_k)
                       ud_lt_cohesion_k_restr(ud_lt_cohesion_k)
   
                       // print settings
                       revealFirstDiscardRest('.ud', '.dr')
   
                       console.log("UD2")
   
                       break;
                   case "both":
                       row_ud_lt_af_k.classList.remove('hidden');
                       row_ud_st_cohesion_k.classList.remove('hidden');
                       row_ud_lt_cohesion_k.classList.remove('hidden');
                       row_dr_st_af_k.classList.remove('hidden');
                       row_dr_lt_af_k.classList.remove('hidden');
   
                       if(isNaN(ground_density) || isNaN(dr_st_af_k) || isNaN(dr_lt_af_k) || isNaN(ud_lt_af_k) || isNaN(ud_st_cohesion_k) || isNaN(ud_lt_cohesion_k)) {
                           geotech_parameters_values.push(false)
                       }
   
                       ground_density_restr(ground_density)
                       dr_st_af_k_restr(dr_st_af_k)
                       dr_lt_af_k_restr(dr_lt_af_k)
                       ud_lt_af_k_restr(ud_lt_af_k)
                       ud_st_cohesion_k_restr(ud_st_cohesion_k)
                       ud_lt_cohesion_k_restr(ud_lt_cohesion_k)
   
                       // print settings
                       $('.dr').removeClass('removeMe')
                       $('.ud').removeClass('removeMe')
   
                       break;
               }
           }
   
           //IMPLIED THAT INTERNAL MOMENT IS OFF
           function geotech_verification_on_point_foundation_switch() {
               switch(point_foundation_shape) {
                   case "rectangular":
                       row_radius.classList.add('hidden')
                       row_length.classList.remove('hidden')
                       row_width.classList.remove('hidden')
                       geotech_verification_on_point_foundation_rectangular_column_switch()
   
                       // print settings
                       revealFirstDiscardRest('.rec', '.cir')
   
                       break;
                   case "circular":
                       row_radius.classList.remove('hidden')
                       row_length.classList.add('hidden')
                       row_width.classList.add('hidden')
                       geotech_verification_on_point_foundation_circular_column_switch()
   
                       // print settings
                       revealFirstDiscardRest('.cir', '.rec')
   
                       break;
               }
           }
   
           //IMPLIED THAT INTERNAL MOMENT IS OFF
           function geotech_verification_off_point_foundation_switch() {
               switch(point_foundation_shape) {
                   case "rectangular":
                       row_radius.classList.add('hidden')
                       row_length.classList.remove('hidden')
                       row_width.classList.remove('hidden')
                       geotech_verification_off_point_foundation_rectangular_column_switch()
   
                       // print settings
                       revealFirstDiscardRest('.rec', '.cir')
   
                       break;
                   case "circular":
                       row_radius.classList.remove('hidden')
                       row_length.classList.add('hidden')
                       row_width.classList.add('hidden')
                       geotech_verification_off_point_foundation_circular_column_switch()
   
                       // print settings
                       revealFirstDiscardRest('.cir', '.rec')
                       break;
               }
           }
   
           function geotech_verification_off_point_foundation_rectangular_column_switch() {
               
               switch(column_shape) {
               
                   case "rectangular":
                       row_column_length.classList.remove('hidden')
                       row_column_width.classList.remove('hidden')
                       row_column_radius.classList.add('hidden')
   
                       //CHECK FOR EMPTY FIELDS AND PUSH A NAN TO GEOMETRY_VALUES ARRAY TO MAKE SURE THERE IS AN HOURGLASS
                       if(isNaN(length) || isNaN(width) || isNaN(height) || isNaN(depth) || isNaN(column_length)  || isNaN(column_width) || isNaN(ec_vl_length) || isNaN(ec_vl_width)) {
                           geometry_values.push(NaN)
                       }
   
                       //RUN RESTRICTION METHODS
                       length_restr(length)
                       width_restr(width)
                       height_restr(height)
                       depth_restr(depth)
                       column_length_restr(column_length)
                       column_width_restr(column_width)
   
                       length_column_length_restr(length, column_length)
                       width_column_width_restr(width, column_width)
   
                       length_ec_vl_length_restr(length, ec_vl_length)
                       width_ec_vl_width_restr(width, ec_vl_width)
   
                       length_column_length_ec_vl_length_restr(length, column_length, ec_vl_length)
                       width_column_width_ec_vl_width_restr(width, column_width, ec_vl_width)
   
                       // print settings
                       revealFirstDiscardRest('.rec_cs', '.cir_cs')
   
   
   
                       break;
                   case "circular":
                       row_column_length.classList.add('hidden')
                       row_column_width.classList.add('hidden')
                       row_column_radius.classList.remove('hidden')
   
                       //CHECK FOR EMPTY FIELDS AND PUSH A NAN TO GEOMETRY_VALUES ARRAY TO MAKE SURE THERE IS AN HOURGLASS
                       if(isNaN(length) || isNaN(width) || isNaN(height) || isNaN(depth) || isNaN(column_radius) || isNaN(ec_vl_length) || isNaN(ec_vl_width)) {
                           geometry_values.push(NaN)
                       }
                       
                       //RUN RESTRICTION METHODS
                       length_restr(length)
                       width_restr(width)
                       height_restr(height)
                       depth_restr(depth)
                       column_radius_restr(column_radius)
                       
                       length_ec_vl_length_restr(length, ec_vl_length)
                       width_ec_vl_width_restr(width, ec_vl_width)
   
                       distances_column_radius_restr(length, width, column_radius)
                       
   
                       //COMBINE
                       length_column_radius_ec_vl_length_restr(length, column_radius, ec_vl_length)
                       width_column_radius_ec_vl_width_restr(width, column_radius, ec_vl_width)
   
                       // print settings
                       revealFirstDiscardRest('.cir_cs', '.rec_cs')
   
   
                       break;
               }
           }
   
   
           function geotech_verification_off_point_foundation_circular_column_switch() {
               
               switch(column_shape) {
                   case "rectangular":
                       row_column_length.classList.remove('hidden')
                       row_column_width.classList.remove('hidden')
                       row_column_radius.classList.add('hidden')
   
                       //CHECK FOR EMPTY FIELDS AND PUSH A NAN TO GEOMETRY_VALUES ARRAY TO MAKE SURE THERE IS AN HOURGLASS
   
                       if(isNaN(radius) || isNaN(height) || isNaN(depth) || isNaN(column_length) || isNaN(column_width) || isNaN(ec_vl_length) || isNaN(ec_vl_width))  {
                           geometry_values.push(NaN)
                       }
                       //RUN RESTRICTION METHODS
   
                       radius_restr(radius)
                       height_restr(height)
                       depth_restr(depth)
                       column_length_restr(column_length)
                       column_width_restr(column_width)
   
                       radius_distances_restr(radius, column_length, column_width)
                       radius_eccentricities_restr(radius, ec_vl_length, ec_vl_width)
                       radius_distances_eccentricities_restr(radius, column_length, column_width, ec_vl_length, ec_vl_width)
   
                       // print settings
                       revealFirstDiscardRest('.rec_cs', '.cir_cs')
   
                       break;
                   case "circular":
                       
                       row_column_length.classList.add('hidden')
                       row_column_width.classList.add('hidden')
                       row_column_radius.classList.remove('hidden')
   
                       //CHECK FOR EMPTY FIELDS AND PUSH A NAN TO GEOMETRY_VALUES ARRAY TO MAKE SURE THERE IS AN HOURGLASS
                       if(isNaN(radius) || isNaN(height) || isNaN(depth) || isNaN(column_radius) || isNaN(ec_vl_length) || isNaN(ec_vl_width))  {
                           geometry_values.push(NaN)
                       }
   
                       //RUN RESTRICTION METHODS
   
                       //HER
                       radius_restr(radius)
                       height_restr(height)
                       depth_restr(depth)
                       column_radius_restr(column_radius)
                       radius_column_radius_restr(radius, column_radius)
   
                       radius_column_radius_restr(radius, column_radius)
                       radius_eccentricities_restr(radius, ec_vl_length, ec_vl_width)
                       radius_column_radius_eccentricities_restr(radius, column_radius, ec_vl_length, ec_vl_width)
   
                       // print settings
                       revealFirstDiscardRest('.cir_cs', '.rec_cs')
   
                       break;
               }
           }
   
   
           function geotech_verification_on_point_foundation_rectangular_column_switch() {
               switch(column_shape) {
                   case "rectangular":
                       row_column_length.classList.remove('hidden')
                       row_column_width.classList.remove('hidden')
                       row_column_radius.classList.add('hidden')
   
                       //CHECK FOR EMPTY FIELDS AND PUSH A NAN TO GEOMETRY_VALUES ARRAY TO MAKE SURE THERE IS AN HOURGLASS
                       if(isNaN(length) || isNaN(width) || isNaN(height) || isNaN(column_length) || isNaN(column_width) || isNaN(ec_vl_length) || isNaN(ec_vl_width)) {
                           geometry_values.push(NaN)
                       }
   
                       //RUN RESTRICTION METHODS
                       length_restr(length)
                       width_restr(width)
                       height_restr(height)
                       column_length_restr(column_length)
                       column_width_restr(column_width)
   
                       length_column_length_restr(length, column_length)
                       width_column_width_restr(width, column_width)
   
                       length_ec_vl_length_restr(length, ec_vl_length)
                       width_ec_vl_width_restr(width, ec_vl_width)
   
                       length_column_length_ec_vl_length_restr(length, column_length, ec_vl_length)
                       width_column_width_ec_vl_width_restr(width, column_width, ec_vl_width)
   
                       // print settings
                       revealFirstDiscardRest('.rec_cs', '.cir_cs')
   
   
                       break;
                   case "circular":
                       console.log("6")
                       row_column_length.classList.add('hidden')
                       row_column_width.classList.add('hidden')
                       row_column_radius.classList.remove('hidden')
   
                       //CHECK FOR EMPTY FIELDS AND PUSH A NAN TO GEOMETRY_VALUES ARRAY TO MAKE SURE THERE IS AN HOURGLASS
                       if(isNaN(length) || isNaN(width) || isNaN(height) || isNaN(column_radius) || isNaN(ec_vl_length) || isNaN(ec_vl_width)) {
                           geometry_values.push(NaN)
                       }
   
                       //RUN RESTRICTION METHODS
                       length_restr(length)
                       width_restr(width)
                       height_restr(height)
                       column_radius_restr(column_radius)
                       distances_column_radius_restr(length, width, column_radius)
                   
                       length_ec_vl_length_restr(length, ec_vl_length)
                       width_ec_vl_width_restr(width, ec_vl_width)
   
                       //COMBINE
                       // combination(length, width, column_radius, ec_vl_length, ec_vl_width)
                       length_column_radius_ec_vl_length_restr(length, column_radius, ec_vl_length)
                       width_column_radius_ec_vl_width_restr(width, column_radius, ec_vl_width)
   
                       // print settings
                       revealFirstDiscardRest('.cir_cs', '.rec_cs')
   
                       break;
               }    
           }
   
           function geotech_verification_on_point_foundation_circular_column_switch() {
               switch(column_shape) {
                   case "rectangular":
                       console.log("7")
                       row_column_length.classList.remove('hidden')
                       row_column_width.classList.remove('hidden')
                       row_column_radius.classList.add('hidden')
   
   
                       //CHECK FOR EMPTY FIELDS AND PUSH A NAN TO GEOMETRY_VALUES ARRAY TO MAKE SURE THERE IS AN HOURGLASS
                       if(isNaN(radius) || isNaN(height) || isNaN(column_length) || isNaN(column_width) || isNaN(ec_vl_length) || isNaN(ec_vl_width)) {
                           geometry_values.push(NaN)
                       }
   
   
                       //RUN RESTRICTION METHODS
                       radius_restr(radius)
                       height_restr(height)
                       column_length_restr(column_length)
                       column_width_restr(column_width)
   
                       
                       radius_distances_restr(radius, column_length, column_width)
                       radius_eccentricities_restr(radius, ec_vl_length, ec_vl_width)
                       radius_distances_eccentricities_restr(radius, column_length, column_width, ec_vl_length, ec_vl_width)
   
                       // print settings
                       revealFirstDiscardRest('.rec_cs', '.cir_cs')
   
                       break;
                   case "circular":
                       console.log("8")
                       row_column_length.classList.add('hidden')
                       row_column_width.classList.add('hidden')
                       row_column_radius.classList.remove('hidden')
   
                       //CHECK FOR EMPTY FIELDS AND PUSH A NAN TO GEOMETRY_VALUES ARRAY TO MAKE SURE THERE IS AN HOURGLASS
                       if(isNaN(radius) || isNaN(height) || isNaN(column_radius) || isNaN(ec_vl_length) || isNaN(ec_vl_width)) {
                           geometry_values.push(NaN)
                       }
   
   
                       //RUN RESTRICTION METHODS
                       radius_restr(radius)
                       height_restr(height)
                       column_radius_restr(column_radius)
   
                       radius_column_radius_restr(radius, column_radius)
                       radius_eccentricities_restr(radius, ec_vl_length, ec_vl_width)
                       radius_column_radius_eccentricities_restr(radius, column_radius, ec_vl_length, ec_vl_width)
   
                       // print settings
                       revealFirstDiscardRest('.cir_cs', '.rec_cs')
                       
                       break;
               }
           }
   
           //IMPLIED THAT INTERNAL MOMENT IS OFF END
   
           function lmd_known_on_point_foundation_shape_switch() {
               switch(point_foundation_shape) {
                   case "rectangular":
                       row_length.classList.remove('hidden');
                       row_width.classList.remove('hidden');
                       row_radius.classList.add('hidden');
                       internal_moment_on_point_foundation_shape_rectangular_column_shape_switch()
   
                       // print settings
                       revealFirstDiscardRest('.rec', '.cir')
   
                       break;
                   case "circular":
                       row_length.classList.add('hidden');
                       row_width.classList.add('hidden');
                       row_radius.classList.remove('hidden');
                       internal_moment_on_point_foundation_shape_circular_column_shape_switch()
   
                       // print settings
                       revealFirstDiscardRest('.cir', '.rec')
   
                       break;
                   default:
                       row_length.classList.add('hidden');
                       row_width.classList.add('hidden');
                       row_radius.classList.add('hidden');
               }
           }
   
   
           //INTERNAL MOMENT KNOWN ON POINT FOUNDATION SHAPE = RECTANGULAR, COLUMN SHAPE SWITCH
           function internal_moment_on_point_foundation_shape_rectangular_column_shape_switch() {
               row_length.classList.remove('hidden');
               row_width.classList.remove('hidden');
               row_radius.classList.add('hidden');
               switch(column_shape) {
                   case "rectangular":
                       console.log("9")
                       row_column_length.classList.remove('hidden');
                       row_column_width.classList.remove('hidden');
                       row_column_radius.classList.add('hidden');
   
                       if(isNaN(length) || isNaN(width) || isNaN(height) || isNaN(column_length) || isNaN(column_width)) {
                           geometry_values.push(NaN)
                       }
   
                       
                       length_restr(length)
                       width_restr(width)
                       height_restr(height)
   
                       column_length_restr(column_length)
                       column_width_restr(column_width)
   
                       length_column_length_restr(length, column_length)
                       width_column_width_restr(width, column_width)
   
                       // print settings
                       revealFirstDiscardRest('.rec_cs', '.cir_cs')
   
                       break;
                   case "circular":
                       console.log("10")
                       row_column_length.classList.add('hidden');
                       row_column_width.classList.add('hidden');
                       row_column_radius.classList.remove('hidden');
   
                   
   
   
   
                       if(isNaN(length) || isNaN(width) || isNaN(height) || isNaN(column_radius) ) {
                           geometry_values.push(NaN)
                       }
   
                       
                       length_restr(length)
                       width_restr(width)
                       height_restr(height)
                       column_radius_restr(column_radius)
   
                       distances_column_radius_restr(length, width, column_radius)
   
                       // print settings
                       revealFirstDiscardRest('.cir_cs', '.rec_cs')
                   
                       break;
               }
           }
   
           //INTERNAL MOMENT KNOWN ON POINT FOUNDATION SHAPE = CIRCULAR, COLUMN SHAPE SWITCH
           function internal_moment_on_point_foundation_shape_circular_column_shape_switch() {
               switch(column_shape) {
                   case "rectangular":
                       console.log("11")
                       row_column_length.classList.remove('hidden');
                       row_column_width.classList.remove('hidden');
                       row_column_radius.classList.add('hidden');
   
                       //HER
   
                       if(isNaN(radius) || isNaN(height) || isNaN(column_length) || isNaN(column_width)) {
                           geometry_values.push(NaN)
                       }
   
                       radius_restr(radius)
                       height_restr(height)
                       column_length_restr(column_length)
                       column_width_restr(column_width)
   
                       radius_distances_restr(radius, column_length, column_width)
   
                       // print settings
                       revealFirstDiscardRest('.rec_cs', '.cir_cs')
                       
                       break;
                   case "circular":
   
                       console.log("12")
                       row_column_length.classList.add('hidden');
                       row_column_width.classList.add('hidden');
                       row_column_radius.classList.remove('hidden');
   
   
                       if(isNaN(radius) || isNaN(height) || isNaN(column_radius)) {
                           geometry_values.push(NaN)
                       }
   
                       radius_restr(radius)
                       height_restr(height)
                       column_radius_restr(column_radius)
   
                       radius_column_radius_restr(radius, column_radius)
   
                       // print settings
                       revealFirstDiscardRest('.cir_cs', '.rec_cs')
   
                       
                       break;
               } 
           }
   
           function fiber_reinforcement_switch() {
               switch(include_fiber) {
                   case "on":
                       include_fiber_row.classList.remove('hidden')
                       dropdown_selected(fiber_dosage, reinforcement_values)
                       steel_reinforcement_switch()
                       break;
                   case undefined:
                       include_steel = "on";
                       include_fiber_row.classList.add('hidden')
                       steel_reinforcement_switch()
                       break;
               }
           }
   
           function steel_reinforcement_switch() {
               switch(include_steel) {
                   case "on":
                       // Check inputs when Include steel = on
                       dropdown_selected(steel_quality, reinforcement_values)
                       dropdown_selected(steel_mesh_type, reinforcement_values)
                      
                       // Check cover layer valid
                       if(cover_layer_restr(height, cover_layer, steel_diameter_bottom)) {
                           reinforcement_values.push(height, cover_layer, steel_diameter_bottom)
                       } else {
                           reinforcement_values.push(NaN)
                       }
   
                       // Check inputs when Shaft Design = on
                       shaft_switch()
                       break;
   
   
                   case undefined:
                       break;
               }
           }
   
           
   
   
   
           function shaft_switch() {
               switch(include_shaft) {
                   case "on":
                       dropdown_selected(shaft_bars_diameter, reinforcement_values)
                       dropdown_selected(shaft_bars_number, reinforcement_values)
                       // Check inputs when Stirrup Design = on
                       stirrup_switch()
                       break;
                   case undefined:                    
                       break;
   
               }      
               
           }
   
   
               function stirrup_switch() {
                   switch(include_stirrups) {
                       case "on":
                           dropdown_selected(shaft_stirrup_diameter, reinforcement_values)
   
                           // Check if shaft_stirrup_spacing exists
                           if(isNaN(shaft_stirrup_spacing)) {
                               reinforcement_values.push(NaN)
                           }
                           // Check if shaft_stirrup_spacing valid
                           shaft_stirrup_spacing_restr(shaft_stirrup_spacing)
                           break;
                       case undefined:                    
                           break;
       
                   }   
   
           }
   
   
           // function steel_reinforcement_switch() {
   
           //     }
   
         
   
           //SWITCHES END
   
           //RESTRICTIONS
   
           function printError(elemId, hintMsg) {
               document.getElementById(elemId).innerHTML = hintMsg;
           }
   
   
           // Universal Dropdown Selected Function
           function dropdown_selected(dropdown_value, target_array) {
               if(dropdown_value.length > 0) {
                   target_array.push(dropdown_value)
               }
               if(dropdown_value.length === 0) {
                   target_array.push(NaN)
               }
           }
   
   
           function length_restr(length) {
               if(length || length === 0) {
                   if(length <= 0) {
                       printError("lengthErr", "Length must greater than 0")
                       validation_array.push(false)
                       geometry_values.push(NaN)
                       return false
                   } else {
                       printError("lengthErr", "")
                       geometry_values.push(length)
                       return true
                   }
               } else {
                   printError("lengthErr", "")
               }
           
           }
   
   
   
           function width_restr(width) {
               if(width || width === 0) {
                   if(width <= 0) {
                       printError("widthErr", "Width must greater than 0")
                       validation_array.push(false)
                       geometry_values.push(NaN)
                       return false
                   } else {
                       printError("widthErr", "")
                       geometry_values.push(width)
                       return true
                   }
               } else {
                   printError("widthErr", "")
               }
           
               
           }
   
   
           function height_restr(height) {
               if(height || height === 0) {
                   if(height <= 0) {
                       printError("heightErr", "Height must be greater than 0")
                       validation_array.push(false)
                       geometry_values.push(NaN)
                       return false
                   } else {
                       printError("heightErr", "")
                       geometry_values.push(height)
                       return true
                   }
               } else {
                   printError("heightErr", "")
               }
           }
   
           function depth_restr(depth) {
               if(depth || depth === 0) {
                   if(depth < 0) {
                       printError("depthErr", "Depth must be greater than or equal to 0")
                       validation_array.push(false)
                       geometry_values.push(NaN)
                       return false
                   } else {
                       printError("depthErr", "")
                       geometry_values.push(depth)
                       return true
                   }
               } else {
                   printError("depthErr", "")
               }
           }
   
   
           function shaft_height_restr(shaft_height) {
               if(!isNaN(shaft_height)) {
                   if(shaft_height <= 0) {
                       printError("shaft_heightErr", `Shaft Height must be greater than 0`)
                       geometry_values.push(NaN)
                       return false
                   } else {
                       printError("shaft_heightErr", ``)
                       geometry_values.push(shaft_height)
                       return true
                   }
               }
           }
   
           function surface_type_selected(c_cast){
               if(!isNaN(c_cast)) {
                   geometry_values.push(c_cast)
               }
               if(isNaN(c_cast)) {
                   geometry_values.push(NaN)
               }
           }
   
   
   
   
           function radius_restr(radius) {
               if(radius || radius === 0) {
                   if(radius <= 0) {
                       printError("radiusErr", "Radius must be greater than 0")
                       validation_array.push(false)
                       geometry_values.push(NaN)
                       return false
                   } else {
                       printError("radiusErr" , "")
                       geometry_values.push(radius)
                       return true
                   }
               } else {
                   printError("radiusErr" , "")
               }
           }
   
           function column_length_restr(column_length) {
               if(column_length || column_length === 0) {
                   if(column_length <= 0) {
                       printError("column_lengthErr", "Column Length must greater than 0")
                       validation_array.push(false)
                       geometry_values.push(NaN)
                       return false
                   } else {
                       printError("column_lengthErr", "")
                       geometry_values.push(column_length)
                       return true
                   }
               } else {
                   printError("column_lengthErr", "")
               }
           }
   
           function column_width_restr(column_width) {
               if(column_width || column_width === 0) {
                   if(column_width <= 0) {
                       printError("column_widthErr", "Column Width must greater than 0")
                       printError("ec_vl_widthErr", ``)
                       validation_array.push(false)
                       geometry_values.push(NaN)
                       return false
                   } else {
                       printError("column_widthErr", "")
                       geometry_values.push(column_width)
                       return true
                   }
               } else {
                   printError(`column_widthErr`, ``)
               }
           }
   
           function column_radius_restr(column_radius) {
               if(column_radius || column_radius === 0) {
                   if(column_radius <= 0) {
                       printError("column_radiusErr", "Column Radius must greater than 0")
                       validation_array.push(false)
                       geometry_values.push(NaN)
                       return false
                   } else {
                       printError("column_radiusErr", "")
                       geometry_values.push(column_radius)
                       return true
                   }
               } else {
                   printError("column_radiusErr", "")
               }
           }
   
   
           function length_ec_vl_length_restr(length, ec_vl_length) {
   
               var lengthRestr = 2 * Math.abs(ec_vl_length)
               var ec_vl_lengthRestr = length / 2
   
               if(!isNaN(length) && !isNaN(ec_vl_length) && length_restr(length)) {
                   if(length > lengthRestr) {
                       printError("lengthErr",``)
                       printError("ec_vl_lengthErr", ``)
                       geometry_values.push(ec_vl_length)
                       return true
                   } else {
                       printError("lengthErr",`Length must be greater than ${lengthRestr}`)
                       printError("ec_vl_lengthErr", `The absolute value of Column Eccentricity, Length Direction must be between ${ec_vl_lengthRestr.toFixed(2)} and -${ec_vl_lengthRestr.toFixed(2)}`)
                       geometry_values.push(NaN)
                       return false
                   }
               }
           }
   
   
   
           function distances_column_radius_restr(length, width, column_radius) {
   
               var lengthRestr = column_radius * 2 
               var length_column_radiusRestr = length / 2
               var widthRestr = column_radius * 2 
               var width_column_radiusRestr = width / 2
               
               //length, width and column_radius are known
               if(!isNaN(length) && !isNaN(width) && !isNaN(column_radius) && length_restr(length) && width_restr(width) && column_radius_restr(column_radius)) {
                   
                   // when length less prioritise length checking
                   if(length < width) {
                       if(column_radius > length_column_radiusRestr) {
   
                           printError("column_radiusErr",`Column Radius must be less than or equal to ${length_column_radiusRestr}`)
                           printError("lengthErr",`Length must be greater than or equal to ${lengthRestr}`)
                           geometry_values.push(NaN)
                           return false
   
                       } else {
                           printError("column_radiusErr",``)
                           printError("lengthErr", ``)
                           geometry_values.push(length, width, column_radius)
                           return true
                       }
                       // when width less prioritise width checking
                   } else  {
                       if(column_radius > width_column_radiusRestr) {
                           printError("column_radiusErr",`Column Radius must be less than or equal to ${width_column_radiusRestr}`)
                           printError("widthErr",`Width must be greater than or equal to ${widthRestr}`)
                           geometry_values.push(NaN)
                           return false
                       } else {
                           printError("column_radiusErr",``)
                           printError("widthErr", ``)
                           geometry_values.push(length, width, column_radius)
                           return true
                       } 
                   }
                   //length and column_radius are known
               } else if(!isNaN(length) && !isNaN(column_radius) && length_restr(length) && column_radius_restr(column_radius)) {
   
                   if(column_radius > length_column_radiusRestr) {
                       printError("column_radiusErr",`Column Radius must be less than or equal to ${length_column_radiusRestr}`)
                       printError("lengthErr",`Length must be greater than or equal to ${lengthRestr}`)
                       geometry_values.push(NaN)
                       return false
                   } else {
                       
                       printError("column_radiusErr",``)
                       printError("lengthErr", ``)
                       geometry_values.push(length, column_radius)
                       return true
                   } 
                   //width and column_radius are known
               } else if(!isNaN(width) && !isNaN(column_radius) && width_restr(width) && column_radius_restr(column_radius)) {
                   if(column_radius > width_column_radiusRestr) {
                       printError("column_radiusErr",`Column Radius must be less than or equal to ${width_column_radiusRestr}`)
                       printError("widthErr",`Width must be greater than or equal to ${widthRestr}`)
                       geometry_values.push(NaN)
                       return false
   
                   } else {
                       printError("column_radiusErr",``)
                       printError("widthErr", ``)
                       geometry_values.push(width, column_radius)
                       return true
                   }
               }
           }
   
           function radius_distances_restr(radius, column_length, column_width) {
   
               var radiusRestr = Math.sqrt(Math.pow(column_length / 2, 2) + Math.pow(column_width / 2, 2))
               var column_lengthRestr = 2 * radius
               var column_widthRestr = 2 * radius
   
   
               //RADIUS, COLUMN_LENGTH AND COLUMN_WIDTH ARE KNOWN
               if(!isNaN(radius) && !isNaN(column_length) && !isNaN(column_width) && radius_restr(radius) && column_length_restr(column_length) && column_width_restr(column_width)) {
                   if(radius < radiusRestr) {
   
                       // //CHECK WHICH of COLUMN_LENGTH AND COLUMN_WIDTH IS BIGGEST AND THROW ERROR CORRECT
                       if(column_length > column_width) {
                           printError("radiusErr", `Radius must be greater than or equal to ${radiusRestr.toFixed(2)}`)
                       
                           geometry_values.push(NaN)
                           return false
   
                       } else {
                           printError("radiusErr", `Radius must be greater than or equal to ${radiusRestr.toFixed(2)}`)
                           geometry_values.push(NaN)
                           return false
                       }
                   } else {
                       printError("radiusErr", ``)
                       printError("column_lengthErr", ``)
                       printError("column_widthErr", ``)
   
                       geometry_values.push(radius, column_length, column_width)
                       return true
                   }
   
                   //RADIUS AND COLUMN_LENGTH ARE KNOWN
               } else if(!isNaN(radius) && !isNaN(column_length) && radius_restr(radius) && column_length_restr(column_length)) {
                   if(column_length > column_lengthRestr) {
                       printError("column_lengthErr", `Column Length must be less than or equal to ${column_lengthRestr}`)
                       geometry_values.push(NaN)
                       return false
                   } else {
                       printError("radiusErr", ``)
                       printError("column_lengthErr", ``)
                       geometry_values.push(radius, column_length)
                       return false
                   }
                   
   
                   //RADIUS AND COLUMN_WIDTH ARE KNOWN
               } else if(!isNaN(radius) && !isNaN(column_width) && radius_restr(radius) && column_width_restr(column_width)){
                   if(column_width > column_widthRestr) {
                       printError("column_widthErr", `Column Width must be less than or equal to ${column_widthRestr}`)
                       geometry_values.push(NaN)
                       return false
                   } else {
                       printError("radiusErr", ``)
                       printError("column_widthErr", ``)
                       geometry_values.push(radius, column_width)
                       return false
                   }
               }
           }
   
           function radius_eccentricities_restr(radius, ec_vl_length, ec_vl_width) {
               var radiusRestr = Math.sqrt(Math.pow(Math.abs(ec_vl_length), 2) + Math.pow(Math.abs(ec_vl_width), 2))
               
               //RADIUS, EC_VL_LENGTH AND EC_VL_WIDTH  
               if(!isNaN(radius) && !isNaN(ec_vl_length) && !isNaN(ec_vl_width) && radius_restr(radius)) {
   
                   if(radius <= radiusRestr) {
                       printError("radiusErr", `Radius must be greater than ${radiusRestr.toFixed(2)}`)
                       geometry_values.push(NaN)
                       return false
                   } else {
                       printError("radiusErr", ``)
                       geometry_values.push(radius, ec_vl_length, ec_vl_width)
                       return true
                   }
                   //RADIUS AND EC_VL_LENGTH
               } else if(!isNaN(radius) && !isNaN(ec_vl_length) && radius_restr(radius)) {
   
                   return false
   
                   //RADIUS AND EC_VL_WIDTH
               } else if(!isNaN(radius) && !isNaN(ec_vl_width) && radius_restr(radius)) {
   
                   return false
   
               }
           }
   
   
           function radius_distances_eccentricities_restr(radius, column_length, column_width, ec_vl_length, ec_vl_width) {
   
               var radiusRestr = Math.sqrt(   Math.pow( Math.abs(ec_vl_length) + column_length / 2, 2) +  Math.pow( Math.abs(ec_vl_width) + column_width / 2, 2)  )
               var column_lengthRestr = 2 * (Math.sqrt(Math.pow(radius, 2) - Math.pow(Math.abs(ec_vl_width) + column_width / 2, 2)) - Math.abs(ec_vl_length))
               var column_widthRestr = 2 * (Math.sqrt(Math.pow(radius, 2) - Math.pow(Math.abs(ec_vl_length) + column_length / 2, 2)) - Math.abs(ec_vl_width))
               var ec_vl_lengthRestr = Math.sqrt(Math.pow(radius, 2) - Math.pow(Math.abs(ec_vl_width) + column_width / 2, 2)) - column_length / 2
               var ec_vl_widthRestr = Math.sqrt(Math.pow(radius, 2) - Math.pow(Math.abs(ec_vl_length) + column_length / 2, 2)) - column_width / 2
   
               //IF ALL VALUES ARE KNOWN
               if(!isNaN(radius) && !isNaN(column_length) && !isNaN(column_width) && !isNaN(ec_vl_length) && !isNaN(ec_vl_width) && radius_distances_restr(radius, column_length, column_width) && radius_eccentricities_restr(radius, ec_vl_length, ec_vl_width)) {
                   
                   if(radius < radiusRestr) {
   
                       
   
                       printError("radiusErr", `Radius must be greater than ${radiusRestr.toFixed(2)}`)
                       column_lengthRestr > 0 ? printError("column_lengthErr", `Column Length must be less than or equal to ${column_lengthRestr.toFixed(2)}`) : printError("column_lengthErr", ``)
                       column_widthRestr > 0 ? printError("column_widthErr", `Column Width must be less than or equal to ${column_widthRestr.toFixed(2)}`) : printError("column_widthErr", ``)
                       ec_vl_lengthRestr > 0 ? printError("ec_vl_lengthErr", `The absolute value of Column Eccentricity, Length Direction must be between ${ec_vl_lengthRestr.toFixed(2)} and -${ec_vl_lengthRestr.toFixed(2)}`) : printError("ec_vl_lengthErr", ``)
                       ec_vl_widthRestr > 0 ? printError("ec_vl_widthErr", `The absolute value of Column Eccentricity, Width Direction must be between ${ec_vl_widthRestr.toFixed(2)} and -${ec_vl_widthRestr.toFixed(2)}`) : printError("ec_vl_widthErr", ``)
   
                       geometry_values.push(NaN)
                       return false
                   } else {
                       printError("radiusErr", ``)
                       printError("column_lengthErr", ``)
                       printError("column_widthErr", ``)
                       printError("ec_vl_lengthErr", ``)
                       printError("ec_vl_widthErr", ``)
                       geometry_values.push(radius, column_length, column_width, ec_vl_length, ec_vl_width)
                       return true
                   }
               } 
           }
   
   
           function width_ec_vl_width_restr(width, ec_vl_width) {
               var widthRestr = 2 * Math.abs(ec_vl_width)
               var ec_vl_widthRestr = width / 2
               if(!isNaN(width) && !isNaN(ec_vl_width) && width_restr(width)) {
                   if(width > widthRestr) {
                       printError("widthErr",``)
                       printError("ec_vl_widthErr", ``)
                       geometry_values.push(ec_vl_width)
                       return true
                   } else {
                       printError("widthErr",`Width must be greater than ${widthRestr.toFixed(2)}`)
                       printError("ec_vl_widthErr", `The absolute value of Column Eccentricity, Width Direction must be between ${ec_vl_widthRestr.toFixed(2)} -${ec_vl_widthRestr.toFixed(2)}`)
                       geometry_values.push(NaN)
                       return false
                   }
               }
           }
   
           function length_column_radius_ec_vl_length_restr(length, column_radius, ec_vl_length) {
               
               var lengthRestr = 2 * (column_radius + Math.abs(ec_vl_length))
               var column_radiusRestr = length / 2 - Math.abs(ec_vl_length)
               var ec_vl_lengthRestr = length / 2 - column_radius
   
               
               if(!isNaN(length) && !isNaN(column_radius) && !isNaN(ec_vl_length)) {
   
                   if(length >= lengthRestr) {     
                       printError("lengthErr", ``)
                       printError("column_radiusErr", ``)
                       printError("ec_vl_lengthErr", ``)
                       geometry_values.push(ec_vl_length)
                       return true
                   } else {
                       printError("lengthErr", `Length must be greater than or equal to ${lengthRestr.toFixed(2)}`)
                       printError("column_radiusErr", `Column Radius must be less than or equal to ${column_radiusRestr.toFixed(2)}`)
                       printError("ec_vl_lengthErr", `The absolute value of Column Eccentricity, Length Direction must be less must be between ${ec_vl_lengthRestr.toFixed(2)} and -${ec_vl_lengthRestr.toFixed(2)}`)
                       geometry_values.push(NaN)
                       return false
                   }
               }
           }
   
           function width_column_radius_ec_vl_width_restr(width, column_radius, ec_vl_width) {
               var widthRestr = 2 * (column_radius + Math.abs(ec_vl_width))
               var column_radiusRestr = width / 2 - Math.abs(ec_vl_width)
               var ec_vl_widthRestr = width / 2 - column_radius
   
               if(!isNaN(width) && !isNaN(column_radius) && !isNaN(ec_vl_width)) {
   
                   if(width >= widthRestr) {
                       printError("widthErr", ``)
                       printError("column_radiusErr", ``) 
                       printError("ec_vl_widthErr", ``)
                       geometry_values.push(ec_vl_width)
                       return true
                   } else {
                       printError("widthErr", `Width must be greater than or equal to ${widthRestr.toFixed(2)}`)
                       column_radiusRestr > 0 ? printError("column_radiusErr", `Column Radius must be less than or equal to ${column_radiusRestr.toFixed(2)}`) : printError("column_radiusErr", ``)
                       ec_vl_widthRestr > 0 ? printError("ec_vl_widthErr", `The absolute value of Column Eccentricity, Width Direction must be between ${ec_vl_widthRestr.toFixed(2)} and -${ec_vl_widthRestr.toFixed(2)}`) : printError("ec_vl_widthErr", ``)
                       geometry_values.push(NaN)
                       return false
                   }
               }
           }
   
   
   
   
           //LENGTH AND COLUMN_LENGTH --- REC REC 
           function length_column_length_restr(length, column_length) {
               if(!isNaN(length) && !isNaN(column_length) && length_restr(length) && column_length_restr(column_length)) {
                   
                   if(length < column_length) {
                       printError("lengthErr" , `Length must be greater than or equal to ${column_length.toFixed(2)}`)
                       printError("column_lengthErr", `Column Length must be less than or equal to ${length.toFixed(2)}`)
                       printError("ec_vl_lengthErr", ``)
                       validation_array.push(false)
                       return false
                   } else {
                       printError("lengthErr" , ``)
                       printError("column_lengthErr", ``)
                       printError("ec_vl_lengthErr", ``)
                       return true
                   }
               }
           }
   
           //WIDTH AND COLUMN WIDTH --- REC REC 
           function width_column_width_restr(width, column_width) {
               var widthRestr = column_width
               var column_widthRestr = width
               if(!isNaN(width) && !isNaN(column_width) && width_restr(width) && column_width_restr(column_width)) {
                   if(width < column_width) {
                       printError("widthErr" , `Width must be greater than or equal to ${widthRestr.toFixed(2)}`)
                       printError("column_widthErr", `Column Width must be less than or equal to ${column_widthRestr.toFixed(2)}`)
                       printError("ec_vl_widthErr", ``)
                       validation_array.push(false)
                       return false
                   } else {
                       printError("widthErr" , ``)
                       printError("column_widthErr", ``)
                       printError("ec_vl_widthErr", ``)
                       return true
                   }
               }
           }
   
   
           //ALL VALUES LENGTH --- REC REC
           function length_column_length_ec_vl_length_restr(length, column_length, ec_vl_length) {
               var lengthRestr = 2 * (column_length / 2 + Math.abs(ec_vl_length))
               var column_lengthRestr = 2 * (length / 2  - Math.abs(ec_vl_length))
               var ec_vl_lengthRestr = length / 2 - column_length / 2
   
               if(!isNaN(length) && !isNaN(column_length) && !isNaN(ec_vl_length) && length_column_length_restr(length, column_length)) {
                   if(length >= lengthRestr) {
                       printError("lengthErr", ``)
                       printError("column_lengthErr", ``)
                       printError("ec_vl_lengthErr", ``)
                       geometry_values.push(ec_vl_length)
                       return true
                   } else {
                       printError("lengthErr", `Length must be greater than or equal to ${lengthRestr}`)
                       column_lengthRestr > 0 ? printError("column_lengthErr", `Length must be greater than or equal to ${column_lengthRestr}`) : printError("column_lengthErr", ``)
                       ec_vl_lengthRestr > 0 ? printError("ec_vl_lengthErr", `The absolute value of Column Eccentricity, Length Direction must be between ${ec_vl_lengthRestr.toFixed(2)} and -${ec_vl_lengthRestr.toFixed(2)}`) : printError("ec_vl_lengthErr", ``)
                       geometry_values.push(NaN)
                       validation_array.push(false)
                       return false
                   }
               }
           }
   
   
           //ALL VALUES WIDTH --- REC REC 
           function width_column_width_ec_vl_width_restr(width, column_width, ec_vl_width) {
               var widthRestr = 2 * (column_width / 2 + Math.abs(ec_vl_width))
               var column_widthRestr = 2 * (width / 2  - Math.abs(ec_vl_width))
               var ec_vl_widthRestr = width / 2 - column_width / 2
   
               if(!isNaN(width) && !isNaN(column_width) && !isNaN(ec_vl_width) && width_restr(width) && column_width_restr(column_width) && width_column_width_restr(width, column_width)) {
                   if(width >= widthRestr) {
                       printError("widthErr", ``)
                       printError("column_widthErr", ``)
                       printError("ec_vl_widthErr", ``)
                       geometry_values.push(ec_vl_width)
                       return true
                   } else {
                       printError("widthErr", `Width must be greater than or equal to ${widthRestr}`)
                       column_widthRestr > 0 ? printError("column_widthErr", `Column Width must be less than or equal to ${column_widthRestr}`) : printError("column_widthErr", ``)
                       ec_vl_widthRestr > 0 ? printError("ec_vl_widthErr", `The absolute value of Column Eccentricity, Width Direction must be between ${ec_vl_widthRestr.toFixed(2)} and -${ec_vl_widthRestr.toFixed(2)}`) : printError("ec_vl_widthErr", ``)
                       validation_array.push(false)
                       geometry_values.push(NaN)
                       return false
                   }
               }            
           }
   
   
   
           //CIR CIR RADIUS AND COLUMN_RADIUS
           function radius_column_radius_restr(radius, column_radius) { if(!isNaN(radius) && !isNaN(column_radius) && radius_restr(radius) && column_radius_restr(column_radius)) {
                   if(radius < column_radius) {
                       printError("radiusErr", `Radius must be greater than or equal to ${column_radius.toFixed(2)}`)
                       printError("column_radiusErr", `Column Radius must be less than or equal to ${radius}`)
                       geometry_values.push(NaN)
                       return false
                   } else {
                       printError("radiusErr", ``)
                       printError("column_radiusErr", ``)
                       return true
                   }
               }
           }
   
   
   
           //RADIUS, COLUMN_RADIUS, EC_VL_LENGTH AND EC_VL_WIDTH
           function radius_column_radius_eccentricities_restr(radius, column_radius, ec_vl_length, ec_vl_width) {
   
               var radiusRestr = Math.sqrt(Math.pow(Math.abs(ec_vl_length), 2) + Math.pow(Math.abs(ec_vl_width), 2)) + column_radius
               var column_radiusRestr = radius - Math.sqrt(Math.pow(Math.abs(ec_vl_length), 2) + Math.pow(Math.abs(ec_vl_width), 2))
               var ec_vl_lengthRestr = Math.sqrt(Math.pow(radius - column_radius, 2) - Math.pow(Math.abs(ec_vl_width), 2))
               var ec_vl_widthRestr = Math.sqrt(Math.pow(radius - column_radius, 2) - Math.pow(Math.abs(ec_vl_length), 2))
   
               //IF ALL VALUES ARE KNOWN
               if(!isNaN(radius) && !isNaN(column_radius) && !isNaN(ec_vl_length) && !isNaN(ec_vl_width) && radius_column_radius_restr(radius, column_radius) && radius_eccentricities_restr(radius, ec_vl_length, ec_vl_width)) {
                   if(radius < radiusRestr) {
   
                       printError("radiusErr", `Radius must be greater than ${radiusRestr.toFixed(2)}`)
   
                       column_radiusRestr > 0 ? printError("column_radiusErr", `Column Length must be less than or equal to ${column_radiusRestr.toFixed(2)}`) : printError("column_radiusErr", ``)
                       ec_vl_lengthRestr > 0 ? printError("ec_vl_lengthErr", `Column Length must be less than or equal to ${ec_vl_lengthRestr.toFixed(2)}`) : printError("ec_vl_lengthErr", ``)
                       ec_vl_widthRestr > 0 ? printError("ec_vl_widthErr", `Column Length must be less than or equal to ${ec_vl_widthRestr.toFixed(2)}`) : printError("ec_vl_widthErr", ``)
   
                       
                       geometry_values.push(NaN)
                       return false
                   } else {
                       printError("radiusErr", ``)
                       printError("column_radiusErr", ``)
                       printError("ec_vl_lengthErr", ``)
                       printError("ec_vl_widthErr", ``)
   
                       geometry_values.push(radius, column_radius, ec_vl_length, ec_vl_width)
                       return true
                   }
               }  else {
   
               }
               
   
           }
   
           function terrain_live_load_restr(terrain_live_load) {
               if(!isNaN(terrain_live_load)) {
                   if(terrain_live_load >= 0) {
                       printError("terrain_live_loadErr", "")
                       return true
                   } else {
                       printError("terrain_live_loadErr", "Design Terrain Live Load must greater than or equal to 0")
                       validation_array.push(false)
                       return false
                   }
               }
           }
   
           function ground_density_restr(ground_density) {
               if(!isNaN(ground_density)) {
                   if(ground_density <= 0) {
                       printError("ground_densityErr", "Ground Density must be greater than 0")
                       geotech_parameters_values.push(false)
                       validation_array.push(false)
                       return false
                   } else {
                       printError("ground_densityErr", "")
                       geotech_parameters_values.push(true)
                       return true
                   }
               }
           }
   
           function dr_st_af_k_restr(dr_st_af_k) {
               if(!isNaN(dr_st_af_k)) {
                   if(dr_st_af_k <= 0) {
                       printError("dr_st_af_kErr", "Drained Angle of Friction, Short-Term Condition must be greater than 0")
                       geotech_parameters_values.push(false)
   
                       validation_array.push(false)
                       return false
                   } else {
                       printError("dr_st_af_kErr", "")
                       geotech_parameters_values.push(true)
                       return true
                   }
               }
           }
   
           function dr_lt_af_k_restr(dr_lt_af_k) {
               if(!isNaN(dr_lt_af_k)) {
                   if(dr_lt_af_k <= 0) {
                       printError("dr_lt_af_kErr", "Drained Angle of Friction, Long-Term Condition must be greater than 0")
                       geotech_parameters_values.push(false)
                       validation_array.push(false)
                       return false
                   } else {
                       printError("dr_lt_af_kErr", "")
                       geotech_parameters_values.push(true)
                       return true
                   }
               }
           }
   
           function ud_lt_af_k_restr(ud_lt_af_k) {
               if(!isNaN(ud_lt_af_k)) {
                   if(ud_lt_af_k <= 0) {
                       printError("ud_lt_af_kErr", "Undrained Angle of Friction, Long-Term Condition must be greater than 0")
                       geotech_parameters_values.push(false)
                       validation_array.push(false)
                       return false
                   } else {
                       printError("ud_lt_af_kErr", "")
                       geotech_parameters_values.push(true)
                       return true
                   }
               }
           }
   
           function ud_st_cohesion_k_restr(ud_st_cohesion_k) {
               if(!isNaN(ud_st_cohesion_k)) {
                   if(ud_st_cohesion_k <= 0) {
                       printError("ud_st_cohesion_kErr", "Undrained Angle of Friction, Long-Term Condition must be greater than 0")
                       geotech_parameters_values.push(false)
                       validation_array.push(false)
                       return false
                   } else {
                       printError("ud_st_cohesion_kErr", "")
                       geotech_parameters_values.push(true)
                       return true
                   }
               }
           }
   
           function ud_lt_cohesion_k_restr(ud_lt_cohesion_k) {
               if(!isNaN(ud_lt_cohesion_k)) {
                   if(ud_lt_cohesion_k <= 0) {
                       printError("ud_lt_cohesion_kErr", "Undrained Angle of Friction, Long-Term Condition must be greater than 0")
                       geotech_parameters_values.push(false)
                       validation_array.push(false)
                       return false
                   } else {
                       printError("ud_lt_cohesion_kErr", "")
                       geotech_parameters_values.push(true)
                       return true
                   }
               }
           }
   
   
           function cover_layer_restr(height, cover_layer, ...args) {
   
               let sum = 0
               for(arg in args) { sum += arg }
               var cover_layerRestr = height / 2 - sum
   
               if(cover_layer_dropdown == '0') {
                   if(cover_layer) {
                       if(cover_layer >= 15 && cover_layer <= cover_layerRestr) {
                           printError("coverLayerCustomErr", "")
                           return true
                       } else {
                           printError("coverLayerDropdownErr", "")
                           printError("coverLayerCustomErr", `Cover Layer must be greater than or equal to 15 and less than or equal to ${cover_layerRestr}. You might have to adjust Height in the Geometry Section`)
                           validation_array.push(false)
                           return false
                       }
                   }
               } else {
                   if(cover_layer) {
                       if(cover_layer >= 15 && cover_layer <= cover_layerRestr) {
                           printError("coverLayerDropdownErr", "")
                           return true
                       } else {
                           printError("coverLayerCustomErr", "")
                           printError("coverLayerDropdownErr", `Cover Layer must be greater than or equal to 15 and less than or equal to ${cover_layerRestr}. You might have to adjust Height in the Geometry Section`)
                           validation_array.push(false)
                           return false
                       }
                   }
               }
   
           }
   
   
           function shaft_stirrup_spacing_restr(shaft_stirrup_spacing) {
               if(!isNaN(shaft_stirrup_spacing)) {
                   if(shaft_stirrup_spacing <= 0) {
                       printError("shaft_stirrup_spacingErr", "Shaft Stirrup Spacing must greater than 0")
                       reinforcement_values.push(NaN)
                       return false
                   } else {
                       printError("shaft_stirrup_spacingErr", "")
                       reinforcement_values.push(shaft_stirrup_spacing)
                       return true
                   }
               } else {
                   printError("shaft_stirrup_spacingErr", "")
               }
           
               
           }
   
   
          
   
   
   
   
           //RESTRICTIONS END
           //RUN THROUGH VALUE ARRAYS AND EVALUATE THEM
           function check_truthy(i) { 
               if(i ||  i === 0) {
                   return true
               }
           }
   
   
           //RUNNERS
   
           function get_input() {
               lmd_known_switch()
               fiber_reinforcement_switch()
               include_shaft_design_switch() // Correct place?
           }
   
           get_input()
   
   
           // console.log("geo: " + geometry_values)
   
   
           //RUNNERS END
   
           //EVALUATORS
           //GEOMETRY
           if(geometry_values.length === 0) {
               document.getElementById("geometry_valid").classList.add('hidden');
               document.getElementById("geometry_invalid").classList.remove('hidden');
               all_values.push(false)
           } else {
               if(geometry_values.every(check_truthy)) {
                   document.getElementById("geometry_valid").classList.remove('hidden');
                   document.getElementById("geometry_invalid").classList.add('hidden');
                   all_values.push(true)
               } else {
                   document.getElementById("geometry_valid").classList.add('hidden');
                   document.getElementById("geometry_invalid").classList.remove('hidden');
                   all_values.push(false)
               }
           }
   
   
           //GEOTECHNICAL PARAMETERS
           if(geotech_parameters_values.length === 0) {
               all_values.splice(1,1)
           } else {
               if(geotech_parameters_values.every(check_truthy)) {
                   document.getElementById("geotech_valid").classList.remove('hidden');
                   document.getElementById("geotech_invalid").classList.add('hidden');
                   all_values.push(true)
               } else {
                   document.getElementById("geotech_valid").classList.add('hidden');
                   document.getElementById("geotech_invalid").classList.remove('hidden');
                   all_values.push(false)
               }
           }
   
           //LOADS
           if(loads_values.every(check_truthy)) {
               document.getElementById("load_valid").classList.remove('hidden');
               document.getElementById("load_invalid").classList.add('hidden');
               all_values.push(true)
           } else {
               document.getElementById("load_valid").classList.add('hidden');
               document.getElementById("load_invalid").classList.remove('hidden');
               all_values.push(false)
   
           }
   
   
           //MATERIAL PROPERTIES
           if (material_properties_values.every(check_truthy)) {            
               document.getElementById("material_valid").classList.remove('hidden');
               document.getElementById("material_invalid").classList.add('hidden');
               all_values.push(true)
           } else {    
               document.getElementById("material_valid").classList.add('hidden');
               document.getElementById("material_invalid").classList.remove('hidden');
               all_values.push(false)
           }
   
           //REINFORCEMENT
           if (reinforcement_values.every(check_truthy)) {
               document.getElementById("reinforcement_valid").classList.remove('hidden');
               document.getElementById("reinforcement_invalid").classList.add('hidden');
               all_values.push(true)
           } else {    
               document.getElementById("reinforcement_valid").classList.add('hidden');
               document.getElementById("reinforcement_invalid").classList.remove('hidden');
               all_values.push(false)
           }
               //ALL TEST
               if (all_values.every(check_truthy) && fail_pre_validation != true) {
                   document.getElementById('slideOut').classList.remove('hidden');
                   print_button.classList.remove('hidden');
                   save_calculation_print.classList.remove('hidden');
   
                   // Internal Moment Known
                   if (lmd_known == 'on') {
                       // No Charts
                       document.getElementById("slideOut_chart").classList.add('hidden');
                       // Dimensions known    
                   }  else {
                       // 4 Line Chart
                       document.getElementById("slideOut_chart").classList.remove('hidden');
                   } // End of If
   
   
           } else {
               document.getElementById('slideOut').classList.add('hidden');
               // document.getElementById('slideOut_chart').classList.add('hidden');
               print_button.classList.add('hidden');
               save_calculation_print.classList.add('hidden');
                  
               // No Charts
               document.getElementById("slideOut_chart").classList.add('hidden');
                     
                  
   
   
           }
   
           document.getElementById('validation_array').value = validation_array
           var validation_progress = all_values.filter(Boolean).length / all_values.length * 100
           document.getElementById('validation_progress').value = validation_progress
   
   
           //EVALUATORS END
   
   
           
   
   
   
   
       }  // End if calculations_point_foundation
   
   
   // 11. Chart Slide Out
   
   
   
   
   
   if (location_name == 'calculations_point_foundation_output') {
   
       // Internal Moment Known
       if (lmd_known == 'on') {
              // No Charts
              document.getElementById("chart_row").classList.add('hidden');
       // Dimensions known    
       } else if (dimensions_known  == 'on') {      
               // 1 Line Chart
               document.getElementById("chart_row").classList.remove('hidden');
   
   
       // Manually Calculated
       } else {
           // 4 Line Chart
           document.getElementById("chart_row").classList.remove('hidden');
            
          
             
   
       } // End of Else If
   
   }
   
   
   
   // 12. Verification Slide Out 
   
   
       // if lmd known = on
       if (lmd_known == 'on') {
           verification_lmd_known.classList.remove('hidden');
       } else {
           verification_lmd_known.classList.add('hidden');
       }
   
       // if lmd known != on & dimensions_known != on
       if (lmd_known != 'on' && dimensions_known != 'on') {
           verification_lmd_unknown.classList.remove('hidden');
       } else {
           verification_lmd_unknown.classList.add('hidden');
       }
   
   
       // if lmd known != on & dimensions_known = on
       if (lmd_known != 'on' && dimensions_known == 'on') {
           verification_lmd_unknown_dim_known.classList.remove('hidden');
       } else {
           verification_lmd_unknown_dim_known.classList.add('hidden');
       }
   
   
   
       // ground_type = both
       if (ground_type == 'both') {
           verification_ground_both.classList.remove('hidden');
       } else {
           verification_ground_both.classList.add('hidden');
       }
   
       // ground_type = drained
       if (ground_type == 'drained') {
           verification_ground_drained.classList.remove('hidden');
       } else {
           verification_ground_drained.classList.add('hidden');
       }
   
       // ground_type = undrained
       if (ground_type == 'undrained') {
           verification_ground_undrained.classList.remove('hidden');
       } else {
           verification_ground_undrained.classList.add('hidden');
       }
   
   
   
       // Verification 1
       if (!isNaN(internal_moment && M_p_internal)) {
   
           var verification1_values = "$$" + internal_moment.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_internal.toFixed(2) + " \\; \\text{kNm} $$";
           var verification1_eq = "$$ M_{Ed} \\leq \\min\\left({M_{p,l},M_{p,b}}\\right) $$"
   
           document.getElementById("verification1_equation").innerHTML = verification1_values;
           document.getElementById("verification1_eq").innerHTML = verification1_eq;
   
           if (internal_moment <= M_p_internal) {
               verification1.classList.add('text-success');
               verification1.classList.remove('text-danger');
               verification1_checkmark.classList.add('fa-check-circle');
               verification1_checkmark.classList.remove('fa-times-circle');
           } else if (internal_moment > M_p_internal) {
               verification1.classList.add('text-danger');
               verification1.classList.remove('text-success');
               verification1_checkmark.classList.add('fa-times-circle');
               verification1_checkmark.classList.remove('fa-check-circle');
           }
       }
   
   
   
   
       // Verification 2
       if (!isNaN(vl_external && P_u)) {
   
           var verification2_values = "$$" + vl_external.toFixed(2) + " \\; \\text{kN} \\leq " + P_u.toFixed(2) + " \\; \\text{kN} $$";
           var verification2_eq = "$$ V_e \\leq P $$"
   
           document.getElementById("verification2_equation").innerHTML = verification2_values;
           document.getElementById("verification2_eq").innerHTML = verification2_eq;
   
           if (vl_external <= P_u) {
               verification2.classList.add('text-success');
               verification2.classList.remove('text-danger');
               verification2_checkmark.classList.add('fa-check-circle');
               verification2_checkmark.classList.remove('fa-times-circle');
           } else if (vl_external > P_u) {
               verification2.classList.add('text-danger');
               verification2.classList.remove('text-success');
               verification2_checkmark.classList.add('fa-times-circle');
               verification2_checkmark.classList.remove('fa-check-circle');
           }
       }
   
   
     
   
   
       // Verification 4a  Length
       if (!isNaN(M_Ed_l && M_p_l)) {
   
           var verification4a_values = "$$" + M_Ed_l.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_l.toFixed(2) + " \\; \\text{kNm} $$";
           var verification4a_eq = "$$ M_{Ed,l} \\leq M_{p,l} $$"
   
           document.getElementById("verification4a_equation").innerHTML = verification4a_values;
           document.getElementById("verification4a_eq").innerHTML = verification4a_eq;
   
           if (M_Ed_l <= M_p_l) {
               verification4a.classList.add('text-success');
               verification4a.classList.remove('text-danger');
               verification4a_checkmark.classList.add('fa-check-circle');
               verification4a_checkmark.classList.remove('fa-times-circle');
           } else if (M_Ed_l > M_p_l) {
               verification4a.classList.add('text-danger');
               verification4a.classList.remove('text-success');
               verification4a_checkmark.classList.add('fa-times-circle');
               verification4a_checkmark.classList.remove('fa-check-circle');
           }
   
       }
   
   
   
   
       // Verification 4b  Breadth
       if (!isNaN(M_Ed_b && M_p_b)) {
   
           var verification4b_values = "$$" + M_Ed_b.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_b.toFixed(2) + " \\; \\text{kNm} $$";
           var verification4b_eq = "$$ M_{Ed,b} \\leq M_{p,b} $$"
   
           document.getElementById("verification4b_equation").innerHTML = verification4b_values;
           document.getElementById("verification4b_eq").innerHTML = verification4b_eq;
   
           if (M_Ed_b <= M_p_b) {
               verification4b.classList.add('text-success');
               verification4b.classList.remove('text-danger');
               verification4b_checkmark.classList.add('fa-check-circle');
               verification4b_checkmark.classList.remove('fa-times-circle');
           } else if (M_Ed_b > M_p_b) {
               verification4b.classList.add('text-danger');
               verification4b.classList.remove('text-success');
               verification4b_checkmark.classList.add('fa-times-circle');
               verification4b_checkmark.classList.remove('fa-check-circle');
           }
       }
   
       // Verification 5
   
       if (!isNaN(vl_total && R_total)) {
   
           var verification5_values = "$$" + vl_total.toFixed(2) + " \\; \\text{kN} \\leq " + R_total.toFixed(2) + " \\; \\text{kN} $$";
           var verification5_eq = "$$ V_t \\leq R_t $$"
   
           document.getElementById("verification5_equation").innerHTML = verification5_values;
           document.getElementById("verification5_eq").innerHTML = verification5_eq;
   
           if (vl_total <= R_total) {
               verification5.classList.add('text-success');
               verification5.classList.remove('text-danger');
               verification5_checkmark.classList.add('fa-check-circle');
               verification5_checkmark.classList.remove('fa-times-circle');
           } else if (vl_total > R_total) {
               verification5.classList.add('text-danger');
               verification5.classList.remove('text-success');
               verification5_checkmark.classList.add('fa-times-circle');
               verification5_checkmark.classList.remove('fa-check-circle');
           }
       }
   
   
       // Verification 6
       if (!isNaN(H_res_both && H_total)) {
   
           var verification6_values = "$$" + H_res_both.toFixed(2) + " \\; \\text{kN} \\leq " + H_total.toFixed(2) + " \\; \\text{kN} $$";
           var verification6_eq = "$$ H_{res} \\leq H_{R,t} $$"
   
           document.getElementById("verification6_equation").innerHTML = verification6_values;
           document.getElementById("verification6_eq").innerHTML = verification6_eq;
   
           if (H_res_both <= H_total) {
               verification6.classList.add('text-success');
               verification6.classList.remove('text-danger');
               verification6_checkmark.classList.add('fa-check-circle');
               verification6_checkmark.classList.remove('fa-times-circle');
           } else if (H_res_both > H_total) {
               verification6.classList.add('text-danger');
               verification6.classList.remove('text-success');
               verification6_checkmark.classList.add('fa-times-circle');
               verification6_checkmark.classList.remove('fa-check-circle');
           }
       }
   
       // Verification 7
       if (!isNaN(vl_external && P_u)) {
   
           var verification7_values = "$$" + vl_external.toFixed(2) + " \\; \\text{kN} \\leq " + P_u.toFixed(2) + " \\; \\text{kN} $$";
           var verification7_eq = "$$ V_e \\leq P $$"
   
           document.getElementById("verification7_equation").innerHTML = verification7_values;
           document.getElementById("verification7_eq").innerHTML = verification7_eq;
   
           if (vl_external <= P_u) {
               verification7.classList.add('text-success');
               verification7.classList.remove('text-danger');
               verification7_checkmark.classList.add('fa-check-circle');
               verification7_checkmark.classList.remove('fa-times-circle');
           } else if (vl_external > P_u) {
               verification7.classList.add('text-danger');
               verification7.classList.remove('text-success');
               verification7_checkmark.classList.add('fa-times-circle');
               verification7_checkmark.classList.remove('fa-check-circle');
           }
       }
   
   
       // Verification 9a  Drained Length
       if (!isNaN(M_Ed_dr_l && M_p_l)) {
   
           var verification9a_values = "$$" + M_Ed_dr_l.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_l.toFixed(2) + " \\; \\text{kNm} $$";
           var verification9a_eq = "$$ M_{Ed,l} \\leq M_{p,l}  $$"
   
           document.getElementById("verification9a_equation").innerHTML = verification9a_values;
           document.getElementById("verification9a_eq").innerHTML = verification9a_eq;
   
           if (M_Ed_dr_l <= M_p_l) {
               verification9a.classList.add('text-success');
               verification9a.classList.remove('text-danger');
               verification9a_checkmark.classList.add('fa-check-circle');
               verification9a_checkmark.classList.remove('fa-times-circle');
           } else if (M_Ed_dr_l > M_p_l) {
               verification9a.classList.add('text-danger');
               verification9a.classList.remove('text-success');
               verification9a_checkmark.classList.add('fa-times-circle');
               verification9a_checkmark.classList.remove('fa-check-circle');
           }
       }
   
       // Verification 9b  Drained Breadth
       if (!isNaN(M_Ed_dr_b && M_p_b)) {
   
           var verification9b_values = "$$" + M_Ed_dr_b.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_b.toFixed(2) + " \\; \\text{kNm} $$";
           var verification9b_eq = "$$ M_{Ed,b} \\leq M_{p,b}  $$"
   
           document.getElementById("verification9b_equation").innerHTML = verification9b_values;
           document.getElementById("verification9b_eq").innerHTML = verification9b_eq;
   
           if (M_Ed_dr_b <= M_p_b) {
               verification9b.classList.add('text-success');
               verification9b.classList.remove('text-danger');
               verification9b_checkmark.classList.add('fa-check-circle');
               verification9b_checkmark.classList.remove('fa-times-circle');
           } else if (M_Ed_dr_b > M_p_b) {
               verification9b.classList.add('text-danger');
               verification9b.classList.remove('text-success');
               verification9b_checkmark.classList.add('fa-times-circle');
               verification9b_checkmark.classList.remove('fa-check-circle');
           }
       }
   
   
       // Verification 10
       if (!isNaN(vl_total_dr_st && R_total_dr_st)) {
   
           var verification10_values = "$$" + vl_total_dr_st.toFixed(2) + " \\; \\text{kN} \\leq " + R_total_dr_st.toFixed(2) + " \\; \\text{kN} $$";
           var verification10_eq = "$$ V_t \\leq R $$"
   
           document.getElementById("verification10_equation").innerHTML = verification10_values;
           document.getElementById("verification10_eq").innerHTML = verification10_eq;
   
           if (vl_total_dr_st <= R_total_dr_st) {
               verification10.classList.add('text-success');
               verification10.classList.remove('text-danger');
               verification10_checkmark.classList.add('fa-check-circle');
               verification10_checkmark.classList.remove('fa-times-circle');
           } else if (vl_total_dr_st > R_total_dr_st) {
               verification10.classList.add('text-danger');
               verification10.classList.remove('text-success');
               verification10_checkmark.classList.add('fa-times-circle');
               verification10_checkmark.classList.remove('fa-check-circle');
           }
       }
   
       // Verification 11
       if (!isNaN(vl_total_dr_lt && R_total_dr_lt)) {
   
           var verification11_values = "$$" + vl_total_dr_lt.toFixed(2) + " \\; \\text{kN} \\leq " + R_total_dr_lt.toFixed(2) + " \\; \\text{kN} $$";
           var verification11_eq = "$$ V'_t \\leq R' $$"
   
           document.getElementById("verification11_equation").innerHTML = verification11_values;
           document.getElementById("verification11_eq").innerHTML = verification11_eq;
   
           if (vl_total_dr_lt <= R_total_dr_lt) {
               verification11.classList.add('text-success');
               verification11.classList.remove('text-danger');
               verification11_checkmark.classList.add('fa-check-circle');
               verification11_checkmark.classList.remove('fa-times-circle');
           } else if (vl_total_dr_lt > R_total_dr_lt) {
               verification11.classList.add('text-danger');
               verification11.classList.remove('text-success');
               verification11_checkmark.classList.add('fa-times-circle');
               verification11_checkmark.classList.remove('fa-check-circle');
           }
       }
   
       // Verification 12
       if (!isNaN(H_res_dr_st && H_dr_st)) {
   
           var verification12_values = "$$" + H_res_dr_st.toFixed(2) + " \\; \\text{kN} \\leq " + H_dr_st.toFixed(2) + " \\; \\text{kN} $$";
           var verification12_eq = "$$ H_{res} \\leq H_{R} $$"
   
           document.getElementById("verification12_equation").innerHTML = verification12_values;
           document.getElementById("verification12_eq").innerHTML = verification12_eq;
   
           if (H_res_dr_st <= H_dr_st) {
               verification12.classList.add('text-success');
               verification12.classList.remove('text-danger');
               verification12_checkmark.classList.add('fa-check-circle');
               verification12_checkmark.classList.remove('fa-times-circle');
           } else if (H_res_dr_st > H_dr_st) {
               verification12.classList.add('text-danger');
               verification12.classList.remove('text-success');
               verification12_checkmark.classList.add('fa-times-circle');
               verification12_checkmark.classList.remove('fa-check-circle');
           }
       }
   
       // Verification 13
       if (!isNaN(H_res_dr_lt && H_dr_lt)) {
   
           var verification13_values = "$$" + H_res_dr_lt.toFixed(2) + " \\; \\text{kN} \\leq " + H_dr_lt.toFixed(2) + " \\; \\text{kN} $$";
           var verification13_eq = "$$ H'_{res} \\leq H'_{R} $$"
   
           document.getElementById("verification13_equation").innerHTML = verification13_values;
           document.getElementById("verification13_eq").innerHTML = verification13_eq;
   
           if (H_res_dr_lt <= H_dr_lt) {
               verification13.classList.add('text-success');
               verification13.classList.remove('text-danger');
               verification13_checkmark.classList.add('fa-check-circle');
               verification13_checkmark.classList.remove('fa-times-circle');
           } else if (H_res_dr_lt > H_dr_lt) {
               verification13.classList.add('text-danger');
               verification13.classList.remove('text-success');
               verification13_checkmark.classList.add('fa-times-circle');
               verification13_checkmark.classList.remove('fa-check-circle');
           }
       }
   
       // Verification 14
       if (!isNaN(vl_external && P_u)) {
   
           var verification14_values = "$$" + vl_external.toFixed(2) + " \\; \\text{kN} \\leq " + P_u.toFixed(2) + " \\; \\text{kN} $$";
           var verification14_eq = "$$ V_e \\leq P $$"
   
           document.getElementById("verification14_equation").innerHTML = verification14_values;
           document.getElementById("verification14_eq").innerHTML = verification14_eq;
   
           if (vl_external <= P_u) {
               verification14.classList.add('text-success');
               verification14.classList.remove('text-danger');
               verification14_checkmark.classList.add('fa-check-circle');
               verification14_checkmark.classList.remove('fa-times-circle');
           } else if (vl_external > P_u) {
               verification14.classList.add('text-danger');
               verification14.classList.remove('text-success');
               verification14_checkmark.classList.add('fa-times-circle');
               verification14_checkmark.classList.remove('fa-check-circle');
           }
       }
   
   
       // Verification 18a Undrained Length
       if (!isNaN(M_Ed_ud_l && M_p_l)) {
   
           var verification18a_values = "$$" + M_Ed_ud_l.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_l.toFixed(2) + " \\; \\text{kNm} $$";
           var verification18a_eq = "$$ M_{Ed,l} \\leq M_{p,l} $$"
   
           document.getElementById("verification18a_equation").innerHTML = verification18a_values;
           document.getElementById("verification18a_eq").innerHTML = verification18a_eq;
   
           if (M_Ed_ud_l <= M_p_l) {
               verification18a.classList.add('text-success');
               verification18a.classList.remove('text-danger');
               verification18a_checkmark.classList.add('fa-check-circle');
               verification18a_checkmark.classList.remove('fa-times-circle');
           } else if (M_Ed_ud_l > M_p_l) {
               verification18a.classList.add('text-danger');
               verification18a.classList.remove('text-success');
               verification18a_checkmark.classList.add('fa-times-circle');
               verification18a_checkmark.classList.remove('fa-check-circle');
           }
       }
   
       // Verification 18b  Undrained Breadth
       if (!isNaN(M_Ed_ud_b && M_p_b)) {
   
           var verification18b_values = "$$" + M_Ed_ud_b.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_b.toFixed(2) + " \\; \\text{kNm} $$";
           var verification18b_eq = "$$ M_{Ed,b} \\leq M_{p,b} $$"
   
           document.getElementById("verification18b_equation").innerHTML = verification18b_values;
           document.getElementById("verification18b_eq").innerHTML = verification18b_eq;
   
           if (M_Ed_ud_b <= M_p_b) {
               verification18b.classList.add('text-success');
               verification18b.classList.remove('text-danger');
               verification18b_checkmark.classList.add('fa-check-circle');
               verification18b_checkmark.classList.remove('fa-times-circle');
           } else if (M_Ed_ud_b > M_p_b) {
               verification18b.classList.add('text-danger');
               verification18b.classList.remove('text-success');
               verification18b_checkmark.classList.add('fa-times-circle');
               verification18b_checkmark.classList.remove('fa-check-circle');
           }
       }
   
       // Verification 19
       if (!isNaN(vl_total_ud_st && R_total_ud_st)) {
   
           var verification19_values = "$$" + vl_total_ud_st.toFixed(2) + " \\; \\text{kN} \\leq " + R_total_ud_st.toFixed(2) + " \\; \\text{kN} $$";
           var verification19_eq = "$$ V_{t,u} \\leq R_u $$"
   
           document.getElementById("verification19_equation").innerHTML = verification19_values;
           document.getElementById("verification19_eq").innerHTML = verification19_eq;
   
           if (vl_total_ud_st <= R_total_ud_st) {
               verification19.classList.add('text-success');
               verification19.classList.remove('text-danger');
               verification19_checkmark.classList.add('fa-check-circle');
               verification19_checkmark.classList.remove('fa-times-circle');
           } else if (vl_total_ud_st > R_total_ud_st) {
               verification19.classList.add('text-danger');
               verification19.classList.remove('text-success');
               verification19_checkmark.classList.add('fa-times-circle');
               verification19_checkmark.classList.remove('fa-check-circle');
           }
       }
   
       // Verification 20
       if (!isNaN(vl_total_ud_lt && R_total_ud_lt)) {
   
           var verification20_values = "$$" + vl_total_ud_lt.toFixed(2) + " \\; \\text{kN} \\leq " + R_total_ud_lt.toFixed(2) + " \\; \\text{kN} $$";
           var verification20_eq = "$$ V'_{t,u} \\leq R'_u $$"
   
           document.getElementById("verification20_equation").innerHTML = verification20_values;
           document.getElementById("verification20_eq").innerHTML = verification20_eq;
   
           if (vl_total_ud_lt <= R_total_ud_lt) {
               verification20.classList.add('text-success');
               verification20.classList.remove('text-danger');
               verification20_checkmark.classList.add('fa-check-circle');
               verification20_checkmark.classList.remove('fa-times-circle');
           } else if (vl_total_ud_lt > R_total_ud_lt) {
               verification20.classList.add('text-danger');
               verification20.classList.remove('text-success');
               verification20_checkmark.classList.add('fa-times-circle');
               verification20_checkmark.classList.remove('fa-check-circle');
           }
       }
   
       // Verification 21
       if (!isNaN(H_res_ud_st && H_ud_st)) {
   
           var verification21_values = "$$" + H_res_ud_st.toFixed(2) + " \\; \\text{kN} \\leq " + H_ud_st.toFixed(2) + " \\; \\text{kN} $$";
           var verification21_eq = "$$ H_{res,u} \\leq H_{R,u} $$"
   
           document.getElementById("verification21_equation").innerHTML = verification21_values;
           document.getElementById("verification21_eq").innerHTML = verification21_eq;
   
           if (H_res_ud_st <= H_ud_st) {
               verification21.classList.add('text-success');
               verification21.classList.remove('text-danger');
               verification21_checkmark.classList.add('fa-check-circle');
               verification21_checkmark.classList.remove('fa-times-circle');
           } else if (H_res_ud_st > H_ud_st) {
               verification21.classList.add('text-danger');
               verification21.classList.remove('text-success');
               verification21_checkmark.classList.add('fa-times-circle');
               verification21_checkmark.classList.remove('fa-check-circle');
           }
       }
   
       // Verification 22
       if (!isNaN(H_res_ud_lt && H_ud_lt)) {
   
           var verification22_values = "$$" + H_res_ud_lt.toFixed(2) + " \\; \\text{kN} \\leq " + H_ud_lt.toFixed(2) + " \\; \\text{kN} $$";
           var verification22_eq = "$$ H'_{res,u} \\leq H'_{R,u} $$"
   
           document.getElementById("verification22_equation").innerHTML = verification22_values;
           document.getElementById("verification22_eq").innerHTML = verification22_eq;
   
           if (H_res_ud_lt <= H_ud_lt) {
               verification22.classList.add('text-success');
               verification22.classList.remove('text-danger');
               verification22_checkmark.classList.add('fa-check-circle');
               verification22_checkmark.classList.remove('fa-times-circle');
           } else if (H_res_ud_lt > H_ud_lt) {
               verification22.classList.add('text-danger');
               verification22.classList.remove('text-success');
               verification22_checkmark.classList.add('fa-times-circle');
               verification22_checkmark.classList.remove('fa-check-circle');
           }
       }
   
       // Verification 23
       if (!isNaN(vl_external && P_u)) {
   
           var verification23_values = "$$" + vl_external.toFixed(2) + " \\; \\text{kN} \\leq " + P_u.toFixed(2) + " \\; \\text{kN} $$";
           var verification23_eq = "$$ V_e \\leq P $$"
   
           document.getElementById("verification23_equation").innerHTML = verification23_values;
           document.getElementById("verification23_eq").innerHTML = verification23_eq;
   
           if (vl_external <= P_u) {
               verification23.classList.add('text-success');
               verification23.classList.remove('text-danger');
               verification23_checkmark.classList.add('fa-check-circle');
               verification23_checkmark.classList.remove('fa-times-circle');
           } else if (vl_external > P_u) {
               verification23.classList.add('text-danger');
               verification23.classList.remove('text-success');
               verification23_checkmark.classList.add('fa-times-circle');
               verification23_checkmark.classList.remove('fa-check-circle');
           }
       }
   
   
       // Verification 27
       if (!isNaN(M_dim_Ed_l && M_p_l)) {
   
           var verification27_values = "$$" + M_dim_Ed_l.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_l.toFixed(2) + " \\; \\text{kNm} $$";
           var verification27_eq = "$$ M_{Ed,l} \\leq M_{p,l} $$"
           
           document.getElementById("verification27_equation").innerHTML = verification27_values;
           document.getElementById("verification27_eq").innerHTML = verification27_eq;
   
           if (M_dim_Ed_l <= M_p_l) {
               verification27.classList.add('text-success');
               verification27.classList.remove('text-danger');
               verification27_checkmark.classList.add('fa-check-circle');
               verification27_checkmark.classList.remove('fa-times-circle');
           } else if (M_dim_Ed_l > M_p_l) {
               verification27.classList.add('text-danger');
               verification27.classList.remove('text-success');
               verification27_checkmark.classList.add('fa-times-circle');
               verification27_checkmark.classList.remove('fa-check-circle');
           }
       }
   
       // Verification 28
       if (!isNaN(M_dim_Ed_b && M_p_b)) {
   
           var verification28_values = "$$" + M_dim_Ed_b.toFixed(2) + " \\; \\text{kNm} \\leq " + M_p_b.toFixed(2) + " \\; \\text{kNm} $$";
           var verification28_eq = "$$ M_{Ed,b} \\leq M_{p,b} $$"
   
           document.getElementById("verification28_equation").innerHTML = verification28_values;
           document.getElementById("verification28_eq").innerHTML = verification28_eq;
   
           if (M_dim_Ed_b <= M_p_b) {
               verification28.classList.add('text-success');
               verification28.classList.remove('text-danger');
               verification28_checkmark.classList.add('fa-check-circle');
               verification28_checkmark.classList.remove('fa-times-circle');
           } else if (M_dim_Ed_b > M_p_b) {
               verification28.classList.add('text-danger');
               verification28.classList.remove('text-success');
               verification28_checkmark.classList.add('fa-times-circle');
               verification28_checkmark.classList.remove('fa-check-circle');
           }
       }
   
   
       // Verification 29
       if (!isNaN(vl_external && P_u)) {
   
           var verification29_values = "$$" + vl_external.toFixed(2) + " \\; \\text{kN} \\leq " + P_u.toFixed(2) + " \\; \\text{kN} $$";
           var verification29_eq = "$$ V_e \\leq P $$"
   
           document.getElementById("verification29_equation").innerHTML = verification29_values;
           document.getElementById("verification29_eq").innerHTML = verification29_eq;
   
           if (vl_external <= P_u) {
               verification29.classList.add('text-success');
               verification29.classList.remove('text-danger');
               verification29_checkmark.classList.add('fa-check-circle');
               verification29_checkmark.classList.remove('fa-times-circle');
           } else if (vl_external > P_u) {
               verification29.classList.add('text-danger');
               verification29.classList.remove('text-success');
               verification29_checkmark.classList.add('fa-times-circle');
               verification29_checkmark.classList.remove('fa-check-circle');
           }
       }
   
   
   
   
   
   // 13. Write Calculation Results to Printable Pages (calculations_point_foundation_output)
   
       if (location_name == 'calculations_point_foundation_output') {
   
           if (!isNaN(length)) {
               document.getElementById("output_length_over").innerHTML = length.toFixed(0);
               document.getElementById("output_length_over_eq").innerHTML = length_eq;
           }
   
           if (!isNaN(width)) {
               document.getElementById("output_width_over").innerHTML = width.toFixed(0);
               document.getElementById("output_width_over_eq").innerHTML = width_eq;
           }
   
           if (!isNaN(radius)) {
               document.getElementById("output_radius_over").innerHTML = radius.toFixed(0);
               document.getElementById("output_radius_over_eq").innerHTML = radius_eq;
           }
   
           if (!isNaN(height)) {
               document.getElementById("output_height_over").innerHTML = height.toFixed(0);
               document.getElementById("output_height_over_eq").innerHTML = height_eq;
           }
   
   
           if (!isNaN(length)) {
               document.getElementById("output_length").innerHTML = length.toFixed(0);
               document.getElementById("output_length_eq").innerHTML = length_eq;
           }
   
           if (!isNaN(width)) {
               document.getElementById("output_width").innerHTML = width.toFixed(0);
               document.getElementById("output_width_eq").innerHTML = width_eq;
           }
   
           if (!isNaN(radius)) {
               document.getElementById("output_radius").innerHTML = radius.toFixed(0);
               document.getElementById("output_radius_eq").innerHTML = radius_eq;
           }
   
           if (!isNaN(height)) {
               document.getElementById("output_height").innerHTML = height.toFixed(0);
               document.getElementById("output_height_eq").innerHTML = height_eq;
           }
   
           if (!isNaN(depth)) {
               document.getElementById("output_depth").innerHTML = depth.toFixed(0);
               document.getElementById("output_depth_eq").innerHTML = depth_eq;
           }
   
           if (!isNaN(column_length)) {
               document.getElementById("output_column_length").innerHTML = column_length.toFixed(0);
               document.getElementById("output_column_length_eq").innerHTML = column_length_eq;
           }
   
           if (!isNaN(column_width)) {
               document.getElementById("output_column_width").innerHTML = column_width.toFixed(0);
               document.getElementById("output_column_width_eq").innerHTML = column_width_eq;
           }
   
           if (!isNaN(column_radius)) {
               document.getElementById("output_column_radius").innerHTML = column_radius.toFixed(0);
               document.getElementById("output_column_radius_eq").innerHTML = column_radius_eq;
           }
   
           if (!isNaN(ec_vl_length)) {
               document.getElementById("output_ec_vl_length").innerHTML = ec_vl_length.toFixed(0);
               document.getElementById("output_ec_vl_length_eq").innerHTML = ec_vl_length_eq;
           }
   
           if (!isNaN(ec_vl_width)) {
               document.getElementById("output_ec_vl_width").innerHTML = ec_vl_width.toFixed(0);
               document.getElementById("output_ec_vl_width_eq").innerHTML = ec_vl_width_eq;
           }
   
           if (!isNaN(volume)) {
               document.getElementById("output_volume").innerHTML = volume.toFixed(2);
               document.getElementById("output_volume_eq").innerHTML = volume_eq;
           }
   
   
           // if (!isNaN(surface_area)) {
           //     document.getElementById("output_surface_area").innerHTML = surface_area.toFixed(2)
           //     document.getElementById("output_surface_area_eq").innerHTML = surface_area_eq
           // }
   
           if (!isNaN(ground_density)) {
               document.getElementById("output_ground_density").innerHTML = ground_density.toFixed(2)
               document.getElementById("output_ground_density_eq").innerHTML = ground_density_eq
           }
   
           if (!isNaN(q)) {
               document.getElementById("output_q").innerHTML = q.toFixed(2)
               document.getElementById("output_q_eq").innerHTML = q_eq
           }
   
           if (!isNaN(g)) {
               document.getElementById("output_g").innerHTML = g.toFixed(2);
               document.getElementById("output_g_eq").innerHTML = g_eq;
           }
   
           if (!isNaN(dr_st_af_k)) {
               document.getElementById("output_dr_st_af_k").innerHTML = dr_st_af_k.toFixed(0)
               document.getElementById("output_dr_st_af_k_eq").innerHTML = dr_st_af_k_eq;
           }
   
           if (!isNaN(dr_lt_af_k)) {
               document.getElementById("output_dr_lt_af_k").innerHTML = dr_lt_af_k.toFixed(0)
               document.getElementById("output_dr_lt_af_k_eq").innerHTML = dr_lt_af_k_eq;
           }
   
   
           if (!isNaN(ud_st_af_k)) {
               document.getElementById("output_ud_st_af_k").innerHTML = ud_st_af_k.toFixed(0)
               document.getElementById("output_ud_st_af_k_eq").innerHTML = ud_st_af_k_eq;
           }
   
           if (!isNaN(ud_lt_af_k)) {
               document.getElementById("output_ud_lt_af_k").innerHTML = ud_lt_af_k.toFixed(0)
               document.getElementById("output_ud_lt_af_k_eq").innerHTML = ud_lt_af_k_eq;
           }
   
           if (!isNaN(af_pc)) {
               document.getElementById("output_af_pc").innerHTML = af_pc.toFixed(1)
               document.getElementById("output_af_pc_eq").innerHTML = af_pc_eq;
           }
   
           if (!isNaN(dr_st_af_d)) {
               document.getElementById("output_dr_st_af_d").innerHTML = dr_st_af_d.toFixed(0)
               document.getElementById("output_dr_st_af_d_eq").innerHTML = dr_st_af_d_eq;
           }
   
           if (!isNaN(dr_lt_af_d)) {
               document.getElementById("output_dr_lt_af_d").innerHTML = dr_lt_af_d.toFixed(0)
               document.getElementById("output_dr_lt_af_d_eq").innerHTML = dr_lt_af_d_eq;
           }
   
           if (!isNaN(ud_st_af_d)) {
               document.getElementById("output_ud_st_af_d").innerHTML = ud_st_af_d.toFixed(0)
               document.getElementById("output_ud_st_af_d_eq").innerHTML = ud_st_af_d_eq;
           }
   
           if (!isNaN(ud_lt_af_d)) {
               document.getElementById("output_ud_lt_af_d").innerHTML = ud_lt_af_d.toFixed(0)
               document.getElementById("output_ud_lt_af_d_eq").innerHTML = ud_lt_af_d_eq;
           }
   
           if (!isNaN(dr_st_cohesion_k)) {
               document.getElementById("output_dr_st_cohesion_k").innerHTML = dr_st_cohesion_k.toFixed(1)
               document.getElementById("output_dr_st_cohesion_k_eq").innerHTML = dr_st_cohesion_k_eq;
           }
   
           if (!isNaN(dr_lt_cohesion_k)) {
               document.getElementById("output_dr_lt_cohesion_k").innerHTML = dr_lt_cohesion_k.toFixed(1)
               document.getElementById("output_dr_lt_cohesion_k_eq").innerHTML = dr_lt_cohesion_k_eq;
           }
   
           if (!isNaN(ud_st_cohesion_k)) {
               document.getElementById("output_ud_st_cohesion_k").innerHTML = ud_st_cohesion_k.toFixed(1)
               document.getElementById("output_ud_st_cohesion_k_eq").innerHTML = ud_st_cohesion_k_eq;
           }
   
           if (!isNaN(ud_lt_cohesion_k)) {
               document.getElementById("output_ud_lt_cohesion_k").innerHTML = ud_lt_cohesion_k.toFixed(1)
               document.getElementById("output_ud_lt_cohesion_k_eq").innerHTML = ud_lt_cohesion_k_eq;
           }
   
           if (!isNaN(dr_cohesion_pc)) {
               document.getElementById("output_dr_cohesion_pc").innerHTML = dr_cohesion_pc.toFixed(1)
               document.getElementById("output_dr_cohesion_pc_eq").innerHTML = dr_cohesion_pc_eq;
           }
   
           if (!isNaN(ud_cohesion_pc)) {
               document.getElementById("output_ud_cohesion_pc").innerHTML = ud_cohesion_pc.toFixed(1)
               document.getElementById("output_ud_cohesion_pc_eq").innerHTML = ud_cohesion_pc_eq;
           }
   
           if (!isNaN(dr_st_cohesion_d)) {
               document.getElementById("output_dr_st_cohesion_d").innerHTML = dr_st_cohesion_d.toFixed(1)
               document.getElementById("output_dr_st_cohesion_d_eq").innerHTML = dr_st_cohesion_d_eq;
           }
   
           if (!isNaN(dr_lt_cohesion_d)) {
               document.getElementById("output_dr_lt_cohesion_d").innerHTML = dr_lt_cohesion_d.toFixed(1)
               document.getElementById("output_dr_lt_cohesion_d_eq").innerHTML = dr_lt_cohesion_d_eq;
           }
   
           if (!isNaN(ud_st_cohesion_d)) {
               document.getElementById("output_ud_st_cohesion_d").innerHTML = ud_st_cohesion_d.toFixed(1)
               document.getElementById("output_ud_st_cohesion_d_eq").innerHTML = ud_st_cohesion_d_eq;
           }
   
           if (!isNaN(ud_lt_cohesion_d)) {
               document.getElementById("output_ud_lt_cohesion_d").innerHTML = ud_lt_cohesion_d.toFixed(1)
               document.getElementById("output_ud_lt_cohesion_d_eq").innerHTML = ud_lt_cohesion_d_eq;
           }
   
           if (!isNaN(a_d_dr_st)) {
               document.getElementById("output_a_d_dr_st").innerHTML = a_d_dr_st.toFixed(1)
               document.getElementById("output_a_d_dr_st_eq").innerHTML = a_d_dr_st_eq
           }
   
           if (!isNaN(a_d_dr_lt)) {
               document.getElementById("output_a_d_dr_lt").innerHTML = a_d_dr_lt.toFixed(1)
               document.getElementById("output_a_d_dr_lt_eq").innerHTML = a_d_dr_lt_eq
           }
   
           // if (!isNaN(a_d_ud_st)) {
           //     document.getElementById("output_a_d_ud_st").innerHTML = a_d_ud_st.toFixed(1)
           //     document.getElementById("output_a_d_ud_st_eq").innerHTML = a_d_ud_st_eq
           // }
   
           // if (!isNaN(a_d_ud_lt)) {
           //     document.getElementById("output_a_d_ud_lt").innerHTML = a_d_ud_lt.toFixed(1)
           //     document.getElementById("output_a_d_ud_lt_eq").innerHTML = a_d_ud_lt_eq
           // }
   
           if (!isNaN(d_q)) {
               document.getElementById("output_d_q").innerHTML = d_q.toFixed(0)
               document.getElementById("output_d_q_eq").innerHTML = d_q_eq
           }
   
           if (!isNaN(d_c)) {
               document.getElementById("output_d_c").innerHTML = d_c.toFixed(0)
               document.getElementById("output_d_c_eq").innerHTML = d_c_eq
           }
   
           if (!isNaN(K_g_a_dr_st)) {
               document.getElementById("output_K_g_a_dr_st").innerHTML = K_g_a_dr_st.toFixed(2)
               document.getElementById("output_K_g_a_dr_st_eq").innerHTML = K_g_a_dr_st_eq
           }
   
           if (!isNaN(K_g_a_dr_lt)) {
               document.getElementById("output_K_g_a_dr_lt").innerHTML = K_g_a_dr_lt.toFixed(2)
               document.getElementById("output_K_g_a_dr_lt_eq").innerHTML = K_g_a_dr_lt_eq
           }
   
           if (!isNaN(K_g_a_ud_st)) {
               document.getElementById("output_K_g_a_ud_st").innerHTML = K_g_a_ud_st.toFixed(2)
               document.getElementById("output_K_g_a_ud_st_eq").innerHTML = K_g_a_ud_st_eq
           }
   
           if (!isNaN(K_g_a_ud_lt)) {
               document.getElementById("output_K_g_a_ud_lt").innerHTML = K_g_a_ud_lt.toFixed(2)
               document.getElementById("output_K_g_a_ud_lt_eq").innerHTML = K_g_a_ud_lt_eq
           }
   
           if (!isNaN(K_p_a_dr_st)) {
               document.getElementById("output_K_p_a_dr_st").innerHTML = K_p_a_dr_st.toFixed(2)
               document.getElementById("output_K_p_a_dr_st_eq").innerHTML = K_p_a_dr_st_eq
           }
   
           if (!isNaN(K_p_a_dr_lt)) {
               document.getElementById("output_K_p_a_dr_lt").innerHTML = K_p_a_dr_lt.toFixed(2)
               document.getElementById("output_K_p_a_dr_lt_eq").innerHTML = K_p_a_dr_lt_eq
           }
   
           if (!isNaN(K_p_a_ud_st)) {
               document.getElementById("output_K_p_a_ud_st").innerHTML = K_p_a_ud_st.toFixed(2)
               document.getElementById("output_K_p_a_ud_st_eq").innerHTML = K_p_a_ud_st_eq
           }
   
           if (!isNaN(K_p_a_ud_lt)) {
               document.getElementById("output_K_p_a_ud_lt").innerHTML = K_p_a_ud_lt.toFixed(2)
               document.getElementById("output_K_p_a_ud_lt_eq").innerHTML = K_p_a_ud_lt_eq
           }
   
           if (!isNaN(K_c_a_dr_st)) {
               document.getElementById("output_K_c_a_dr_st").innerHTML = K_c_a_dr_st.toFixed(2)
               document.getElementById("output_K_c_a_dr_st_eq").innerHTML = K_c_a_dr_st_eq
           }
   
           if (!isNaN(K_c_a_dr_lt)) {
               document.getElementById("output_K_c_a_dr_lt").innerHTML = K_c_a_dr_lt.toFixed(2)
               document.getElementById("output_K_c_a_dr_lt_eq").innerHTML = K_c_a_dr_lt_eq
           }
   
           if (!isNaN(K_c_a_ud_st)) {
               document.getElementById("output_K_c_a_ud_st").innerHTML = K_c_a_ud_st.toFixed(2)
               document.getElementById("output_K_c_a_ud_st_eq").innerHTML = K_c_a_ud_st_eq
           }
   
           if (!isNaN(K_c_a_ud_lt)) {
               document.getElementById("output_K_c_a_ud_lt").innerHTML = K_c_a_ud_lt.toFixed(2)
               document.getElementById("output_K_c_a_ud_lt_eq").innerHTML = K_c_a_ud_lt_eq
           }
   
           if (!isNaN(K_g_p_dr_st)) {
               document.getElementById("output_K_g_p_dr_st").innerHTML = K_g_p_dr_st.toFixed(2)
               document.getElementById("output_K_g_p_dr_st_eq").innerHTML = K_g_p_dr_st_eq
           }
   
           if (!isNaN(K_g_p_dr_lt)) {
               document.getElementById("output_K_g_p_dr_lt").innerHTML = K_g_p_dr_lt.toFixed(2)
               document.getElementById("output_K_g_p_dr_lt_eq").innerHTML = K_g_p_dr_lt_eq
           }
   
           if (!isNaN(K_g_p_ud_st)) {
               document.getElementById("output_K_g_p_ud_st").innerHTML = K_g_p_ud_st.toFixed(2)
               document.getElementById("output_K_g_p_ud_st_eq").innerHTML = K_g_p_ud_st_eq
           }
           if (!isNaN(K_g_p_ud_lt)) {
               document.getElementById("output_K_g_p_ud_lt").innerHTML = K_g_p_ud_lt.toFixed(2)
               document.getElementById("output_K_g_p_ud_lt_eq").innerHTML = K_g_p_ud_lt_eq
           }
   
           if (!isNaN(K_p_p_dr_st)) {
               document.getElementById("output_K_p_p_dr_st").innerHTML = K_p_p_dr_st.toFixed(2)
               document.getElementById("output_K_p_p_dr_st_eq").innerHTML = K_p_p_dr_st_eq
           }
   
           if (!isNaN(K_p_p_dr_lt)) {
               document.getElementById("output_K_p_p_dr_lt").innerHTML = K_p_p_dr_lt.toFixed(2)
               document.getElementById("output_K_p_p_dr_lt_eq").innerHTML = K_p_p_dr_lt_eq
           }
   
           if (!isNaN(K_p_p_ud_st)) {
               document.getElementById("output_K_p_p_ud_st").innerHTML = K_p_p_ud_st.toFixed(2)
               document.getElementById("output_K_p_p_ud_st_eq").innerHTML = K_p_p_ud_st_eq
           }
   
           if (!isNaN(K_p_p_ud_lt)) {
               document.getElementById("output_K_p_p_ud_lt").innerHTML = K_p_p_ud_lt.toFixed(2)
               document.getElementById("output_K_p_p_ud_lt_eq").innerHTML = K_p_p_ud_lt_eq
           }
           if (!isNaN(K_c_p_dr_st)) {
               document.getElementById("output_K_c_p_dr_st").innerHTML = K_c_p_dr_st.toFixed(2)
               document.getElementById("output_K_c_p_dr_st_eq").innerHTML = K_c_p_dr_st_eq
           }
   
           if (!isNaN(K_c_p_dr_lt)) {
               document.getElementById("output_K_c_p_dr_lt").innerHTML = K_c_p_dr_lt.toFixed(2)
               document.getElementById("output_K_c_p_dr_lt_eq").innerHTML = K_c_p_dr_lt_eq
           }
   
           if (!isNaN(K_c_p_ud_st)) {
               document.getElementById("output_K_c_p_ud_st").innerHTML = K_c_p_ud_st.toFixed(2)
               document.getElementById("output_K_c_p_ud_st_eq").innerHTML = K_c_p_ud_st_eq
           }
   
           if (!isNaN(K_c_p_ud_lt)) {
               document.getElementById("output_K_c_p_ud_lt").innerHTML = K_c_p_ud_lt.toFixed(2)
               document.getElementById("output_K_c_p_ud_lt_eq").innerHTML = K_c_p_ud_lt_eq
           }
   
           // if (!isNaN(r_dr_st)) {
           //     document.getElementById("output_r_dr_st").innerHTML = r_dr_st.toFixed(1)
           //     document.getElementById("output_r_dr_st_eq").innerHTML = r_dr_st_eq
           // }
   
           // if (!isNaN(r_dr_lt)) {
           //     document.getElementById("output_r_dr_lt").innerHTML = r_dr_lt.toFixed(1)
           //     document.getElementById("output_r_dr_lt_eq").innerHTML = r_dr_lt_eq
           // }
   
           // if (!isNaN(r_ud_st)) {
           //     document.getElementById("output_r_ud_st").innerHTML = r_ud_st.toFixed(1)
           //     document.getElementById("output_r_ud_st_eq").innerHTML = r_ud_st_eq
           // }
   
           // if (!isNaN(r_ud_lt)) {
           //     document.getElementById("output_r_ud_lt").innerHTML = r_ud_lt.toFixed(1)
           //     document.getElementById("output_r_ud_lt_eq").innerHTML = r_ud_lt_eq
           // }
   
           // if (!isNaN(m)) {
           //     document.getElementById("output_m").innerHTML = m.toFixed(0)
           //     document.getElementById("output_m_eq").innerHTML = m_eq
           // }
   
           // if (!isNaN(N_m)) {
           //     document.getElementById("output_N_m").innerHTML = N_m.toFixed(1)
           //     document.getElementById("output_N_m_eq").innerHTML = N_m_eq
           // }
   
           if (!isNaN(concrete_density)) {
               document.getElementById("output_concrete_density").innerHTML = concrete_density.toFixed(0)
               document.getElementById("output_concrete_density_eq").innerHTML = concrete_density_eq
           }
   
           if (!isNaN(self_weight)) {
               document.getElementById("output_self_weight").innerHTML = self_weight.toFixed(2)
               document.getElementById("output_self_weight_eq").innerHTML = self_weight_eq
           }
   
           if (!isNaN(ground_area)) {
               document.getElementById("output_ground_area").innerHTML = ground_area.toFixed(2)
               document.getElementById("output_ground_area_eq").innerHTML = ground_area_eq
           }
   
           if (!isNaN(ground_weight)) {
               document.getElementById("output_ground_weight").innerHTML = ground_weight.toFixed(2)
               document.getElementById("output_ground_weight_eq").innerHTML = ground_weight_eq
           }
   
           // if (!isNaN(R_s_dr_st_l)) {
           //     document.getElementById("output_R_s_dr_st_l").innerHTML = R_s_dr_st_l.toFixed(2)
           //     document.getElementById("output_R_s_dr_st_l_eq").innerHTML = R_s_dr_st_l_eq
           // }
   
           // if (!isNaN(R_s_dr_st_b)) {
           //     document.getElementById("output_R_s_dr_st_b").innerHTML = R_s_dr_st_b.toFixed(2)
           //     document.getElementById("output_R_s_dr_st_b_eq").innerHTML = R_s_dr_st_b_eq
           // }
   
           // if (!isNaN(R_s_dr_st_r)) {
           //     document.getElementById("output_R_s_dr_st_r").innerHTML = R_s_dr_st_r.toFixed(2)
           //     document.getElementById("output_R_s_dr_st_r_eq").innerHTML = R_s_dr_st_r_eq
           // }
   
           // if (!isNaN(R_s_dr_st_t)) {
           //     document.getElementById("output_R_s_dr_st_t").innerHTML = R_s_dr_st_t.toFixed(2)
           //     document.getElementById("output_R_s_dr_st_t_eq").innerHTML = R_s_dr_st_t_eq
           // }
   
           // if (!isNaN(R_s_dr_lt_l)) {
           //     document.getElementById("output_R_s_dr_lt_l").innerHTML = R_s_dr_lt_l.toFixed(2)
           //     document.getElementById("output_R_s_dr_lt_l_eq").innerHTML = R_s_dr_lt_l_eq
           // }
   
           // if (!isNaN(R_s_dr_lt_b)) {
           //     document.getElementById("output_R_s_dr_lt_b").innerHTML = R_s_dr_lt_b.toFixed(2)
           //     document.getElementById("output_R_s_dr_lt_b_eq").innerHTML = R_s_dr_lt_b_eq
           // }
   
           // if (!isNaN(R_s_dr_lt_r)) {
           //     document.getElementById("output_R_s_dr_lt_r").innerHTML = R_s_dr_lt_r.toFixed(2)
           //     document.getElementById("output_R_s_dr_lt_r_eq").innerHTML = R_s_dr_lt_r_eq
           // }
   
           // if (!isNaN(R_s_dr_lt_t)) {
           //     document.getElementById("output_R_s_dr_lt_t").innerHTML = R_s_dr_lt_t.toFixed(2)
           //     document.getElementById("output_R_s_dr_lt_t_eq").innerHTML = R_s_dr_lt_t_eq
           // }
   
           // if (!isNaN(R_s_ud_st_l)) {
           //     document.getElementById("output_R_s_ud_st_l").innerHTML = R_s_ud_st_l.toFixed(2)
           //     document.getElementById("output_R_s_ud_st_l_eq").innerHTML = R_s_ud_st_l_eq
           // }
   
           // if (!isNaN(R_s_ud_st_b)) {
           //     document.getElementById("output_R_s_ud_st_b").innerHTML = R_s_ud_st_b.toFixed(2)
           //     document.getElementById("output_R_s_ud_st_b_eq").innerHTML = R_s_ud_st_b_eq
           // }
           // if (!isNaN(R_s_ud_st_r)) {
           //     document.getElementById("output_R_s_ud_st_r").innerHTML = R_s_ud_st_r.toFixed(2)
           //     document.getElementById("output_R_s_ud_st_r_eq").innerHTML = R_s_ud_st_r_eq
           // }
   
           // if (!isNaN(R_s_ud_st_t)) {
           //     document.getElementById("output_R_s_ud_st_t").innerHTML = R_s_ud_st_t.toFixed(2)
           //     document.getElementById("output_R_s_ud_st_t_eq").innerHTML = R_s_ud_st_t_eq
           // }
   
           // if (!isNaN(R_s_ud_lt_l)) {
           //     document.getElementById("output_R_s_ud_lt_l").innerHTML = R_s_ud_lt_l.toFixed(2)
           //     document.getElementById("output_R_s_ud_lt_l_eq").innerHTML = R_s_ud_lt_l_eq
           // }
   
           // if (!isNaN(R_s_ud_lt_b)) {
           //     document.getElementById("output_R_s_ud_lt_b").innerHTML = R_s_ud_lt_b.toFixed(2)
           //     document.getElementById("output_R_s_ud_lt_b_eq").innerHTML = R_s_ud_lt_b_eq
           // }
   
           // if (!isNaN(R_s_ud_lt_r)) {
           //     document.getElementById("output_R_s_ud_lt_r").innerHTML = R_s_ud_lt_r.toFixed(2)
           //     document.getElementById("output_R_s_ud_lt_r_eq").innerHTML = R_s_ud_lt_r_eq
           // }
   
           // if (!isNaN(R_s_ud_lt_t)) {
           //     document.getElementById("output_R_s_ud_lt_t").innerHTML = R_s_ud_lt_t.toFixed(2)
           //     document.getElementById("output_R_s_ud_lt_t_eq").innerHTML = R_s_ud_lt_t_eq
           // }
   
           if (!isNaN(vl_total_dr_st)) {
               document.getElementById("output_vl_total_dr_st").innerHTML = vl_total_dr_st.toFixed(2)
               document.getElementById("output_vl_total_dr_st_eq").innerHTML = vl_total_dr_st_eq
           }
           // if (!isNaN(vl_total_dr_lt)) {
           //     document.getElementById("output_vl_total_dr_lt").innerHTML = vl_total_dr_lt.toFixed(2)
           //     document.getElementById("output_vl_total_dr_lt_eq").innerHTML = vl_total_dr_lt_eq
           // }
           // if (!isNaN(vl_total_ud_st)) {
           //     document.getElementById("output_vl_total_ud_st").innerHTML = vl_total_ud_st.toFixed(2)
           //     document.getElementById("output_vl_total_ud_st_eq").innerHTML = vl_total_ud_st_eq
           // }
           // if (!isNaN(vl_total_ud_lt)) {
           //     document.getElementById("output_vl_total_ud_lt").innerHTML = vl_total_ud_lt.toFixed(2)
           //     document.getElementById("output_vl_total_ud_lt_eq").innerHTML = vl_total_ud_lt_eq
           // }
           if (!isNaN(vl_dim_total)) {
               document.getElementById("output_vl_dim_total").innerHTML = vl_dim_total.toFixed(2)
               document.getElementById("output_vl_dim_total_eq").innerHTML = vl_dim_total_eq
           }
           // if (!isNaN(vl_total)) {
           //     document.getElementById("output_vl_total").innerHTML = vl_total
           // }
           if (!isNaN(hl_length)) {
               document.getElementById("output_hl_length").innerHTML = hl_length.toFixed(2)
               document.getElementById("output_hl_length_eq").innerHTML = hl_length_eq
           }
           if (!isNaN(hl_width)) {
               document.getElementById("output_hl_width").innerHTML = hl_width.toFixed(2)
               document.getElementById("output_hl_width_eq").innerHTML = hl_width_eq
           }
           if (!isNaN(hl_total)) {
               document.getElementById("output_hl_total").innerHTML = hl_total.toFixed(2)
               document.getElementById("output_hl_total_eq").innerHTML = hl_total_eq
           }
           if (!isNaN(height_p_hor)) {
               document.getElementById("output_height_p_hor").innerHTML = height_p_hor.toFixed(0)
               document.getElementById("output_height_p_hor_eq").innerHTML = height_p_hor_eq
           }
           if (!isNaN(d_0_dr_st)) {
               document.getElementById("output_d_0_dr_st").innerHTML = d_0_dr_st.toFixed(0)
               document.getElementById("output_d_0_dr_st_eq").innerHTML = d_0_dr_st_eq
           }
           if (!isNaN(d_0_dr_lt)) {
               document.getElementById("output_d_0_dr_lt").innerHTML = d_0_dr_lt.toFixed(0)
               document.getElementById("output_d_0_dr_lt_eq").innerHTML = d_0_dr_lt_eq
           }
           if (!isNaN(d_0_ud_st)) {
               document.getElementById("output_d_0_ud_st").innerHTML = d_0_ud_st.toFixed(0)
               document.getElementById("output_d_0_ud_st_eq").innerHTML = d_0_ud_st_eq
           }
           if (!isNaN(d_0_ud_lt)) {
               document.getElementById("output_d_0_ud_lt").innerHTML = d_0_ud_lt.toFixed(0)
               document.getElementById("output_d_0_ud_lt_eq").innerHTML = d_0_ud_lt_eq
           }
           if (!isNaN(F_a_dr_st_l)) {
               document.getElementById("output_F_a_dr_st_l").innerHTML = F_a_dr_st_l.toFixed(2)
               document.getElementById("output_F_a_dr_st_l_eq").innerHTML = F_a_dr_st_l_eq
           }
           if (!isNaN(F_a_dr_lt_l)) {
               document.getElementById("output_F_a_dr_lt_l").innerHTML = F_a_dr_lt_l.toFixed(2)
               document.getElementById("output_F_a_dr_lt_l_eq").innerHTML = F_a_dr_lt_l_eq
           }
           if (!isNaN(F_a_ud_st_l)) {
               document.getElementById("output_F_a_ud_st_l").innerHTML = F_a_ud_st_l.toFixed(2)
               document.getElementById("output_F_a_ud_st_l_eq").innerHTML = F_a_ud_st_l_eq
           }
           if (!isNaN(F_a_ud_lt_l)) {
               document.getElementById("output_F_a_ud_lt_l").innerHTML = F_a_ud_lt_l.toFixed(2)
               document.getElementById("output_F_a_ud_lt_l_eq").innerHTML = F_a_ud_lt_l_eq
   
           }
           if (!isNaN(F_p_dr_st_l)) {
               document.getElementById("output_F_p_dr_st_l").innerHTML = F_p_dr_st_l.toFixed(2)
               document.getElementById("output_F_p_dr_st_l_eq").innerHTML = F_p_dr_st_l_eq
   
           }
           if (!isNaN(F_p_dr_lt_l)) {
               document.getElementById("output_F_p_dr_lt_l").innerHTML = F_p_dr_lt_l.toFixed(2)
               document.getElementById("output_F_p_dr_lt_l_eq").innerHTML = F_p_dr_lt_l_eq
           }
           if (!isNaN(F_p_ud_st_l)) {
               document.getElementById("output_F_p_ud_st_l").innerHTML = F_p_ud_st_l.toFixed(2)
               document.getElementById("output_F_p_ud_st_l_eq").innerHTML = F_p_ud_st_l_eq
           }
           if (!isNaN(F_p_ud_lt_l)) {
               document.getElementById("output_F_p_ud_lt_l").innerHTML = F_p_ud_lt_l.toFixed(2)
               document.getElementById("output_F_p_ud_lt_l_eq").innerHTML = F_p_ud_lt_l_eq
           }
           if (!isNaN(F_a_dr_st_b)) {
               document.getElementById("output_F_a_dr_st_b").innerHTML = F_a_dr_st_b.toFixed(2)
               document.getElementById("output_F_a_dr_st_b_eq").innerHTML = F_a_dr_st_b_eq
           }
           if (!isNaN(F_a_dr_lt_b)) {
               document.getElementById("output_F_a_dr_lt_b").innerHTML = F_a_dr_lt_b.toFixed(2)
               document.getElementById("output_F_a_dr_lt_b_eq").innerHTML = F_a_dr_lt_b_eq
           }
           if (!isNaN(F_a_ud_st_b)) {
               document.getElementById("output_F_a_ud_st_b").innerHTML = F_a_ud_st_b.toFixed(2)
               document.getElementById("output_F_a_ud_st_b_eq").innerHTML = F_a_ud_st_b_eq
           }
           if (!isNaN(F_a_ud_lt_b)) {
               document.getElementById("output_F_a_ud_lt_b").innerHTML = F_a_ud_lt_b.toFixed(2)
               document.getElementById("output_F_a_ud_lt_b_eq").innerHTML = F_a_ud_lt_b_eq
           }
           if (!isNaN(F_p_dr_st_b)) {
               document.getElementById("output_F_p_dr_st_b").innerHTML = F_p_dr_st_b.toFixed(2)
               document.getElementById("output_F_p_dr_st_b_eq").innerHTML = F_p_dr_st_b_eq
           }
           if (!isNaN(F_p_dr_lt_b)) {
               document.getElementById("output_F_p_dr_lt_b").innerHTML = F_p_dr_lt_b.toFixed(2)
               document.getElementById("output_F_p_dr_lt_b_eq").innerHTML = F_p_dr_lt_b_eq
           }
           if (!isNaN(F_p_ud_st_b)) {
               document.getElementById("output_F_p_ud_st_b").innerHTML = F_p_ud_st_b.toFixed(2)
               document.getElementById("output_F_p_ud_st_b_eq").innerHTML = F_p_ud_st_b_eq
           }
           if (!isNaN(F_p_ud_lt_b)) {
               document.getElementById("output_F_p_ud_lt_b").innerHTML = F_p_ud_lt_b.toFixed(2)
               document.getElementById("output_F_p_ud_lt_b_eq").innerHTML = F_p_ud_lt_b_eq
           }
           if (!isNaN(F_a_dr_st_r)) {
               document.getElementById("output_F_a_dr_st_r").innerHTML = F_a_dr_st_r.toFixed(2)
               document.getElementById("output_F_a_dr_st_r_eq").innerHTML = F_a_dr_st_r_eq
           }
           if (!isNaN(F_a_dr_lt_r)) {
               document.getElementById("output_F_a_dr_lt_r").innerHTML = F_a_dr_lt_r.toFixed(2)
               document.getElementById("output_F_a_dr_lt_r_eq").innerHTML = F_a_dr_lt_r_eq
           }
           if (!isNaN(F_a_ud_st_r)) {
               document.getElementById("output_F_a_ud_st_r").innerHTML = F_a_ud_st_r.toFixed(2)
               document.getElementById("output_F_a_ud_st_r_eq").innerHTML = F_a_ud_st_r_eq
           }
           if (!isNaN(F_a_ud_lt_r)) {
               document.getElementById("output_F_a_ud_lt_r").innerHTML = F_a_ud_lt_r.toFixed(2)
               document.getElementById("output_F_a_ud_lt_r_eq").innerHTML = F_a_ud_lt_r_eq
           }
           if (!isNaN(F_p_dr_st_r)) {
               document.getElementById("output_F_p_dr_st_r").innerHTML = F_p_dr_st_r.toFixed(2)
               document.getElementById("output_F_p_dr_st_r_eq").innerHTML = F_p_dr_st_r_eq
           }
           if (!isNaN(F_p_dr_lt_r)) {
               document.getElementById("output_F_p_dr_lt_r").innerHTML = F_p_dr_lt_r.toFixed(2)
               document.getElementById("output_F_p_dr_lt_r_eq").innerHTML = F_p_dr_lt_r_eq
           }
           if (!isNaN(F_p_ud_st_r)) {
               document.getElementById("output_F_p_ud_st_r").innerHTML = F_p_ud_st_r.toFixed(2)
               document.getElementById("output_F_p_ud_st_r_eq").innerHTML = F_p_ud_st_r_eq
           }
           if (!isNaN(F_p_ud_lt_r)) {
               document.getElementById("output_F_p_ud_lt_r").innerHTML = F_p_ud_lt_r.toFixed(2)
               document.getElementById("output_F_p_ud_lt_r_eq").innerHTML = F_p_ud_lt_r_eq
           }
           if (!isNaN(h_res_dr_st_l)) {
               document.getElementById("output_h_res_dr_st_l").innerHTML = h_res_dr_st_l.toFixed(2)
               document.getElementById("output_h_res_dr_st_l_eq").innerHTML = h_res_dr_st_l_eq
           }
           if (!isNaN(h_res_dr_lt_l)) {
               document.getElementById("output_h_res_dr_lt_l").innerHTML = h_res_dr_lt_l.toFixed(2)
               document.getElementById("output_h_res_dr_lt_l_eq").innerHTML = h_res_dr_lt_l_eq
           }
           if (!isNaN(h_res_ud_st_l)) {
               document.getElementById("output_h_res_ud_st_l").innerHTML = h_res_ud_st_l.toFixed(2)
               document.getElementById("output_h_res_ud_st_l_eq").innerHTML = h_res_ud_st_l_eq
           }
           if (!isNaN(h_res_ud_lt_l)) {
               document.getElementById("output_h_res_ud_lt_l").innerHTML = h_res_ud_lt_l.toFixed(2)
               document.getElementById("output_h_res_ud_lt_l_eq").innerHTML = h_res_ud_lt_l_eq
           }
           if (!isNaN(h_res_dr_st_b)) {
               document.getElementById("output_h_res_dr_st_b").innerHTML = h_res_dr_st_b.toFixed(2)
               document.getElementById("output_h_res_dr_st_b_eq").innerHTML = h_res_dr_st_b_eq
           }
           if (!isNaN(h_res_dr_lt_b)) {
               document.getElementById("output_h_res_dr_lt_b").innerHTML = h_res_dr_lt_b.toFixed(2)
               document.getElementById("output_h_res_dr_lt_b_eq").innerHTML = h_res_dr_lt_b_eq
           }
           if (!isNaN(h_res_ud_st_b)) {
               document.getElementById("output_h_res_ud_st_b").innerHTML = h_res_ud_st_b.toFixed(2)
               document.getElementById("output_h_res_ud_st_b_eq").innerHTML = h_res_ud_st_b_eq
           }
           if (!isNaN(h_res_ud_lt_b)) {
               document.getElementById("output_h_res_ud_lt_b").innerHTML = h_res_ud_lt_b.toFixed(2)
               document.getElementById("output_h_res_ud_lt_b_eq").innerHTML = h_res_ud_lt_b_eq
           }
           // if (!isNaN(h_res_dr_st_r)) {
           //     document.getElementById("output_h_res_dr_st_r").innerHTML = h_res_dr_st_r.toFixed(2)
           //     document.getElementById("output_h_res_dr_st_r_eq").innerHTML = h_res_dr_st_r_eq
           // }
           if (!isNaN(h_res_dr_st_rl)) {
               document.getElementById("output_h_res_dr_st_rl").innerHTML = h_res_dr_st_rl.toFixed(2)
               document.getElementById("output_h_res_dr_st_rl_eq").innerHTML = h_res_dr_st_rl_eq
           }
           if (!isNaN(h_res_dr_st_rb)) {
               document.getElementById("output_h_res_dr_st_rb").innerHTML = h_res_dr_st_rb.toFixed(2)
               document.getElementById("output_h_res_dr_st_rb_eq").innerHTML = h_res_dr_st_rb_eq
           }
           // if (!isNaN(h_res_dr_lt_r)) {
           //     document.getElementById("output_h_res_dr_lt_r").innerHTML = h_res_dr_lt_r.toFixed(2)
           //     document.getElementById("output_h_res_dr_lt_r_eq").innerHTML = h_res_dr_lt_r_eq
           // }
           if (!isNaN(h_res_dr_lt_rl)) {
               document.getElementById("output_h_res_dr_lt_rl").innerHTML = h_res_dr_lt_rl.toFixed(2)
               document.getElementById("output_h_res_dr_lt_rl_eq").innerHTML = h_res_dr_lt_rl_eq
           }
           if (!isNaN(h_res_dr_lt_rb)) {
               document.getElementById("output_h_res_dr_lt_rb").innerHTML = h_res_dr_lt_rb.toFixed(2)
               document.getElementById("output_h_res_dr_lt_rb_eq").innerHTML = h_res_dr_lt_rb_eq
           }
           // if (!isNaN(h_res_ud_st_r)) {
           //     document.getElementById("output_h_res_ud_st_r").innerHTML = h_res_ud_st_r.toFixed(2)
           //     document.getElementById("output_h_res_ud_st_r_eq").innerHTML = h_res_ud_st_r_eq
           // }
           if (!isNaN(h_res_ud_st_rl)) {
               document.getElementById("output_h_res_ud_st_rl").innerHTML = h_res_ud_st_rl.toFixed(2)
               document.getElementById("output_h_res_ud_st_rl_eq").innerHTML = h_res_ud_st_rl_eq
           }
           if (!isNaN(h_res_ud_st_rb)) {
               document.getElementById("output_h_res_ud_st_rb").innerHTML = h_res_ud_st_rb.toFixed(2)
               document.getElementById("output_h_res_ud_st_rb_eq").innerHTML = h_res_ud_st_rb_eq
           }
           // if (!isNaN(h_res_ud_lt_r)) {
           //     document.getElementById("output_h_res_ud_lt_r").innerHTML = h_res_ud_lt_r.toFixed(2)
           //     document.getElementById("output_h_res_ud_lt_r_eq").innerHTML = h_res_ud_lt_r_eq
           // }
           if (!isNaN(h_res_ud_lt_rl)) {
               document.getElementById("output_h_res_ud_lt_rl").innerHTML = h_res_ud_lt_rl.toFixed(2)
               document.getElementById("output_h_res_ud_lt_rl_eq").innerHTML = h_res_ud_lt_rl_eq
           }
           if (!isNaN(h_res_ud_lt_rb)) {
               document.getElementById("output_h_res_ud_lt_rb").innerHTML = h_res_ud_lt_rb.toFixed(2)
               document.getElementById("output_h_res_ud_lt_rb_eq").innerHTML = h_res_ud_lt_rb_eq
           }
           if (!isNaN(H_res_dr_st)) {
               document.getElementById("output_H_res_dr_st").innerHTML = H_res_dr_st.toFixed(2)
               document.getElementById("output_H_res_dr_st_eq").innerHTML = H_res_dr_st_eq
           }
           if (!isNaN(H_res_dr_lt)) {
               document.getElementById("output_H_res_dr_lt").innerHTML = H_res_dr_lt.toFixed(2)
               document.getElementById("output_H_res_dr_lt_eq").innerHTML = H_res_dr_lt_eq
           }
           if (!isNaN(H_res_ud_st)) {
               document.getElementById("output_H_res_ud_st").innerHTML = H_res_ud_st.toFixed(2)
               document.getElementById("output_H_res_ud_st_eq").innerHTML = H_res_ud_st_eq
           }
           if (!isNaN(H_res_ud_lt)) {
               document.getElementById("output_H_res_ud_lt").innerHTML = H_res_ud_lt.toFixed(2)
               document.getElementById("output_H_res_ud_lt_eq").innerHTML = H_res_ud_lt_eq
           }
           if (!isNaN(H_res_both)) {
               document.getElementById("output_H_res_both").innerHTML = H_res_both.toFixed(2)
               document.getElementById("output_H_res_both_eq").innerHTML = H_res_both_eq
           }
           if (!isNaN(h_cg_a_dr_st)) {
               document.getElementById("output_h_cg_a_dr_st").innerHTML = h_cg_a_dr_st.toFixed(0)
               document.getElementById("output_h_cg_a_dr_st_eq").innerHTML = h_cg_a_dr_st_eq
           }
           if (!isNaN(h_cg_a_dr_lt)) {
               document.getElementById("output_h_cg_a_dr_lt").innerHTML = h_cg_a_dr_lt.toFixed(0)
               document.getElementById("output_h_cg_a_dr_lt_eq").innerHTML = h_cg_a_dr_lt_eq
           }
           if (!isNaN(h_cg_a_ud_st)) {
               document.getElementById("output_h_cg_a_ud_st").innerHTML = h_cg_a_ud_st.toFixed(0)
               document.getElementById("output_h_cg_a_ud_st_eq").innerHTML = h_cg_a_ud_st_eq
           }
           if (!isNaN(h_cg_a_ud_lt)) {
               document.getElementById("output_h_cg_a_ud_lt").innerHTML = h_cg_a_ud_lt.toFixed(0)
               document.getElementById("output_h_cg_a_ud_lt_eq").innerHTML = h_cg_a_ud_lt_eq
           }
           if (!isNaN(h_cg_p_dr_st)) {
               document.getElementById("output_h_cg_p_dr_st").innerHTML = h_cg_p_dr_st.toFixed(0)
               document.getElementById("output_h_cg_p_dr_st_eq").innerHTML = h_cg_p_dr_st_eq
           }
           if (!isNaN(h_cg_p_dr_lt)) {
               document.getElementById("output_h_cg_p_dr_lt").innerHTML = h_cg_p_dr_lt.toFixed(0)
               document.getElementById("output_h_cg_p_dr_lt_eq").innerHTML = h_cg_p_dr_lt_eq
           }
           if (!isNaN(h_cg_p_ud_st)) {
               document.getElementById("output_h_cg_p_ud_st").innerHTML = h_cg_p_ud_st.toFixed(0)
               document.getElementById("output_h_cg_p_ud_st_eq").innerHTML = h_cg_p_ud_st_eq
           }
           if (!isNaN(h_cg_p_ud_lt)) {
               document.getElementById("output_h_cg_p_ud_lt").innerHTML = h_cg_p_ud_lt.toFixed(0)
               document.getElementById("output_h_cg_p_ud_lt_eq").innerHTML = h_cg_p_ud_lt_eq
           }
           if (!isNaN(vl_external)) {
               document.getElementById("output_vl_external").innerHTML = vl_external.toFixed(0)
               document.getElementById("output_vl_external_eq").innerHTML = vl_external_eq
           }
           if (!isNaN(internal_moment)) {
               document.getElementById("output_internal_moment").innerHTML = internal_moment.toFixed(0)
               document.getElementById("output_internal_moment_eq").innerHTML = internal_moment_eq
           }
           if (!isNaN(terrain_live_load)) {
               document.getElementById("output_terrain_live_load").innerHTML = terrain_live_load.toFixed(0)
               document.getElementById("output_terrain_live_load_eq").innerHTML = terrain_live_load_eq
           }
           if (!isNaN(m_h_length)) {
               document.getElementById("output_m_h_length").innerHTML = m_h_length.toFixed(2)
               document.getElementById("output_m_h_length_eq").innerHTML = m_h_length_eq
           }
           if (!isNaN(m_h_width)) {
               document.getElementById("output_m_h_width").innerHTML = m_h_width.toFixed(2)
               document.getElementById("output_m_h_width_eq").innerHTML = m_h_width_eq
           }
           if (!isNaN(m_h_r)) {
               document.getElementById("output_m_h_r").innerHTML = m_h_r.toFixed(2)
               document.getElementById("output_m_h_r_eq").innerHTML = m_h_r_eq
           }
           if (!isNaN(m_v_dr_st_length)) {
               document.getElementById("output_m_v_dr_st_length").innerHTML = m_v_dr_st_length.toFixed(2)
               document.getElementById("output_m_v_dr_st_length_eq").innerHTML = m_v_dr_st_length_eq
           }
           // if (!isNaN(m_v_dr_lt_length)) {
           //     document.getElementById("output_m_v_dr_lt_length").innerHTML = m_v_dr_lt_length.toFixed(2)
           //     document.getElementById("output_m_v_dr_lt_length_eq").innerHTML = m_v_dr_lt_length_eq
           // }
           // if (!isNaN(m_v_ud_st_length)) {
           //     document.getElementById("output_m_v_ud_st_length").innerHTML = m_v_ud_st_length.toFixed(2)
           //     document.getElementById("output_m_v_ud_st_length_eq").innerHTML = m_v_ud_st_length_eq
           // }
           // if (!isNaN(m_v_ud_lt_length)) {
           //     document.getElementById("output_m_v_ud_lt_length").innerHTML = m_v_ud_lt_length.toFixed(2)
           //     document.getElementById("output_m_v_ud_lt_length_eq").innerHTML = m_v_ud_lt_length_eq
           // }
           if (!isNaN(m_v_dr_st_width)) {
               document.getElementById("output_m_v_dr_st_width").innerHTML = m_v_dr_st_width.toFixed(2)
               document.getElementById("output_m_v_dr_st_width_eq").innerHTML = m_v_dr_st_width_eq
           }
           // if (!isNaN(m_v_dr_lt_width)) {
           //     document.getElementById("output_m_v_dr_lt_width").innerHTML = m_v_dr_lt_width.toFixed(2)
           //     document.getElementById("output_m_v_dr_lt_width_eq").innerHTML = m_v_dr_lt_width_eq
           // }
           // if (!isNaN(m_v_ud_st_width)) {
           //     document.getElementById("output_m_v_ud_st_width").innerHTML = m_v_ud_st_width.toFixed(2)
           //     document.getElementById("output_m_v_ud_st_width_eq").innerHTML = m_v_ud_st_width_eq
           // }
           // if (!isNaN(m_v_ud_lt_width)) {
           //     document.getElementById("output_m_v_ud_lt_width").innerHTML = m_v_ud_lt_width.toFixed(2)
           //     document.getElementById("output_m_v_ud_lt_width_eq").innerHTML = m_v_ud_lt_width_eq
           // }
           if (!isNaN(m_v_dim_length)) {
               document.getElementById("output_m_v_dim_length").innerHTML = m_v_dim_length.toFixed(2)
               document.getElementById("output_m_v_dim_length_eq").innerHTML = m_v_dim_length_eq
           }
           if (!isNaN(m_v_dim_width)) {
               document.getElementById("output_m_v_dim_width").innerHTML = m_v_dim_width.toFixed(2)
               document.getElementById("output_m_v_dim_width_eq").innerHTML = m_v_dim_width_eq
           }
           if (!isNaN(m_F_a_dr_st_l)) {
               document.getElementById("output_m_F_a_dr_st_l").innerHTML = m_F_a_dr_st_l.toFixed(2)
               document.getElementById("output_m_F_a_dr_st_l_eq").innerHTML = m_F_a_dr_st_l_eq
           }
           if (!isNaN(m_F_a_dr_lt_l)) {
               document.getElementById("output_m_F_a_dr_lt_l").innerHTML = m_F_a_dr_lt_l.toFixed(2)
               document.getElementById("output_m_F_a_dr_lt_l_eq").innerHTML = m_F_a_dr_lt_l_eq
           }
           if (!isNaN(m_F_a_ud_st_l)) {
               document.getElementById("output_m_F_a_ud_st_l").innerHTML = m_F_a_ud_st_l.toFixed(2)
               document.getElementById("output_m_F_a_ud_st_l_eq").innerHTML = m_F_a_ud_st_l_eq
           }
           if (!isNaN(m_F_a_ud_lt_l)) {
               document.getElementById("output_m_F_a_ud_lt_l").innerHTML = m_F_a_ud_lt_l.toFixed(2)
               document.getElementById("output_m_F_a_ud_lt_l_eq").innerHTML = m_F_a_ud_lt_l_eq
           }
           if (!isNaN(m_F_p_dr_st_l)) {
               document.getElementById("output_m_F_p_dr_st_l").innerHTML = m_F_p_dr_st_l.toFixed(2)
               document.getElementById("output_m_F_p_dr_st_l_eq").innerHTML = m_F_p_dr_st_l_eq
           }
           if (!isNaN(m_F_p_dr_lt_l)) {
               document.getElementById("output_m_F_p_dr_lt_l").innerHTML = m_F_p_dr_lt_l.toFixed(2)
               document.getElementById("output_m_F_p_dr_lt_l_eq").innerHTML = m_F_p_dr_lt_l_eq
           }
           if (!isNaN(m_F_p_ud_st_l)) {
               document.getElementById("output_m_F_p_ud_st_l").innerHTML = m_F_p_ud_st_l.toFixed(2)
               document.getElementById("output_m_F_p_ud_st_l_eq").innerHTML = m_F_p_ud_st_l_eq
           }
           if (!isNaN(m_F_p_ud_lt_l)) {
               document.getElementById("output_m_F_p_ud_lt_l").innerHTML = m_F_p_ud_lt_l.toFixed(2)
               document.getElementById("output_m_F_p_ud_lt_l_eq").innerHTML = m_F_p_ud_lt_l_eq
           }
           if (!isNaN(m_F_a_dr_st_b)) {
               document.getElementById("output_m_F_a_dr_st_b").innerHTML = m_F_a_dr_st_b.toFixed(2)
               document.getElementById("output_m_F_a_dr_st_b_eq").innerHTML = m_F_a_dr_st_b_eq
           }
           if (!isNaN(m_F_a_dr_lt_b)) {
               document.getElementById("output_m_F_a_dr_lt_b").innerHTML = m_F_a_dr_lt_b.toFixed(2)
               document.getElementById("output_m_F_a_dr_lt_b_eq").innerHTML = m_F_a_dr_lt_b_eq
           }
           if (!isNaN(m_F_a_ud_st_b)) {
               document.getElementById("output_m_F_a_ud_st_b").innerHTML = m_F_a_ud_st_b.toFixed(2)
               document.getElementById("output_m_F_a_ud_st_b_eq").innerHTML = m_F_a_ud_st_b_eq
           }
           if (!isNaN(m_F_a_ud_lt_b)) {
               document.getElementById("output_m_F_a_ud_lt_b").innerHTML = m_F_a_ud_lt_b.toFixed(2)
               document.getElementById("output_m_F_a_ud_lt_b_eq").innerHTML = m_F_a_ud_lt_b_eq
           }
           if (!isNaN(m_F_p_dr_st_b)) {
               document.getElementById("output_m_F_p_dr_st_b").innerHTML = m_F_p_dr_st_b.toFixed(2)
               document.getElementById("output_m_F_p_dr_st_b_eq").innerHTML = m_F_p_dr_st_b_eq
           }
           if (!isNaN(m_F_p_dr_lt_b)) {
               document.getElementById("output_m_F_p_dr_lt_b").innerHTML = m_F_p_dr_lt_b.toFixed(2)
               document.getElementById("output_m_F_p_dr_lt_b_eq").innerHTML = m_F_p_dr_lt_b_eq
           }
           if (!isNaN(m_F_p_ud_st_b)) {
               document.getElementById("output_m_F_p_ud_st_b").innerHTML = m_F_p_ud_st_b.toFixed(2)
               document.getElementById("output_m_F_p_ud_st_b_eq").innerHTML = m_F_p_ud_st_b_eq
           }
           if (!isNaN(m_F_p_ud_lt_b)) {
               document.getElementById("output_m_F_p_ud_lt_b").innerHTML = m_F_p_ud_lt_b.toFixed(2)
               document.getElementById("output_m_F_p_ud_lt_b_eq").innerHTML = m_F_p_ud_lt_b_eq
           }
           if (!isNaN(m_F_a_dr_st_r)) {
               document.getElementById("output_m_F_a_dr_st_r").innerHTML = m_F_a_dr_st_r.toFixed(2)
               document.getElementById("output_m_F_a_dr_st_r_eq").innerHTML = m_F_a_dr_st_r_eq
           }
           if (!isNaN(m_F_a_dr_lt_r)) {
               document.getElementById("output_m_F_a_dr_lt_r").innerHTML = m_F_a_dr_lt_r.toFixed(2)
               document.getElementById("output_m_F_a_dr_lt_r_eq").innerHTML = m_F_a_dr_lt_r_eq
           }
           if (!isNaN(m_F_a_ud_st_r)) {
               document.getElementById("output_m_F_a_ud_st_r").innerHTML = m_F_a_ud_st_r.toFixed(2)
               document.getElementById("output_m_F_a_ud_st_r_eq").innerHTML = m_F_a_ud_st_r_eq
           }
           if (!isNaN(m_F_a_ud_lt_r)) {
               document.getElementById("output_m_F_a_ud_lt_r").innerHTML = m_F_a_ud_lt_r.toFixed(2)
               document.getElementById("output_m_F_a_ud_lt_r_eq").innerHTML = m_F_a_ud_lt_r_eq
           }
           if (!isNaN(m_F_p_dr_st_r)) {
               document.getElementById("output_m_F_p_dr_st_r").innerHTML = m_F_p_dr_st_r.toFixed(2)
               document.getElementById("output_m_F_p_dr_st_r_eq").innerHTML = m_F_p_dr_st_r_eq
           }
           if (!isNaN(m_F_p_dr_lt_r)) {
               document.getElementById("output_m_F_p_dr_lt_r").innerHTML = m_F_p_dr_lt_r.toFixed(2)
               document.getElementById("output_m_F_p_dr_lt_r_eq").innerHTML = m_F_p_dr_lt_r_eq
           }
           if (!isNaN(m_F_p_ud_st_r)) {
               document.getElementById("output_m_F_p_ud_st_r").innerHTML = m_F_p_ud_st_r.toFixed(2)
               document.getElementById("output_m_F_p_ud_st_r_eq").innerHTML = m_F_p_ud_st_r_eq
           }
           if (!isNaN(m_F_p_ud_lt_r)) {
               document.getElementById("output_m_F_p_ud_lt_r").innerHTML = m_F_p_ud_lt_r.toFixed(2)
               document.getElementById("output_m_F_p_ud_lt_r_eq").innerHTML = m_F_p_ud_lt_r_eq
           }
           if (!isNaN(m_length)) {
               document.getElementById("output_m_length").innerHTML = m_length.toFixed(2)
               document.getElementById("output_m_length_eq").innerHTML = m_length_eq
           }
           if (!isNaN(m_width)) {
               document.getElementById("output_m_width").innerHTML = m_width.toFixed(2)
               document.getElementById("output_m_width_eq").innerHTML = m_width_eq
           }
           if (!isNaN(m_r)) {
               document.getElementById("output_m_r").innerHTML = m_r.toFixed(2)
               document.getElementById("output_m_r_eq").innerHTML = m_r_eq
           }
           if (!isNaN(m_total_dr_st_l)) {
               document.getElementById("output_m_total_dr_st_l").innerHTML = m_total_dr_st_l.toFixed(2)
               document.getElementById("output_m_total_dr_st_l_eq").innerHTML = m_total_dr_st_l_eq
           }
           if (!isNaN(m_total_dr_lt_l)) {
               document.getElementById("output_m_total_dr_lt_l").innerHTML = m_total_dr_lt_l.toFixed(2)
               document.getElementById("output_m_total_dr_lt_l_eq").innerHTML = m_total_dr_lt_l_eq
           }
           if (!isNaN(m_total_ud_st_l)) {
               document.getElementById("output_m_total_ud_st_l").innerHTML = m_total_ud_st_l.toFixed(2)
               document.getElementById("output_m_total_ud_st_l_eq").innerHTML = m_total_ud_st_l_eq
           }
           if (!isNaN(m_total_ud_lt_l)) {
               document.getElementById("output_m_total_ud_lt_l").innerHTML = m_total_ud_lt_l.toFixed(2)
               document.getElementById("output_m_total_ud_lt_l_eq").innerHTML = m_total_ud_lt_l_eq
           }
           if (!isNaN(m_total_dr_st_b)) {
               document.getElementById("output_m_total_dr_st_b").innerHTML = m_total_dr_st_b.toFixed(2)
               document.getElementById("output_m_total_dr_st_b_eq").innerHTML = m_total_dr_st_b_eq
           }
           if (!isNaN(m_total_dr_lt_b)) {
               document.getElementById("output_m_total_dr_lt_b").innerHTML = m_total_dr_lt_b.toFixed(2)
               document.getElementById("output_m_total_dr_lt_b_eq").innerHTML = m_total_dr_lt_b_eq
           }
           if (!isNaN(m_total_ud_st_b)) {
               document.getElementById("output_m_total_ud_st_b").innerHTML = m_total_ud_st_b.toFixed(2)
               document.getElementById("output_m_total_ud_st_b_eq").innerHTML = m_total_ud_st_b_eq
           }
           if (!isNaN(m_total_ud_lt_b)) {
               document.getElementById("output_m_total_ud_lt_b").innerHTML = m_total_ud_lt_b.toFixed(2)
               document.getElementById("output_m_total_ud_lt_b_eq").innerHTML = m_total_ud_lt_b_eq
           }
           // if (!isNaN(m_total_dr_st_r)) {
           //     document.getElementById("output_m_total_dr_st_r").innerHTML = m_total_dr_st_r.toFixed(2)
           // }
           if (!isNaN(m_total_dr_st_rl)) {
               document.getElementById("output_m_total_dr_st_rl").innerHTML = m_total_dr_st_rl.toFixed(2)
               document.getElementById("output_m_total_dr_st_rl_eq").innerHTML = m_total_dr_st_rl_eq
           }
           if (!isNaN(m_total_dr_st_rb)) {
               document.getElementById("output_m_total_dr_st_rb").innerHTML = m_total_dr_st_rb.toFixed(2)
               document.getElementById("output_m_total_dr_st_rb_eq").innerHTML = m_total_dr_st_rb_eq
           }
           // if (!isNaN(m_total_dr_lt_r)) {
           //     document.getElementById("output_m_total_dr_lt_r").innerHTML = m_total_dr_lt_r.toFixed(2)
           // }
           if (!isNaN(m_total_dr_lt_rl)) {
               document.getElementById("output_m_total_dr_lt_rl").innerHTML = m_total_dr_lt_rl.toFixed(2)
               document.getElementById("output_m_total_dr_lt_rl_eq").innerHTML = m_total_dr_lt_rl_eq
           }
           if (!isNaN(m_total_dr_lt_rb)) {
               document.getElementById("output_m_total_dr_lt_rb").innerHTML = m_total_dr_lt_rb.toFixed(2)
               document.getElementById("output_m_total_dr_lt_rb_eq").innerHTML = m_total_dr_lt_rb_eq
           }
           // if (!isNaN(m_total_ud_st_r)) {
           //     document.getElementById("output_m_total_ud_st_r").innerHTML = m_total_ud_st_r.toFixed(2)
           // }
           if (!isNaN(m_total_ud_st_rl)) {
               document.getElementById("output_m_total_ud_st_rl").innerHTML = m_total_ud_st_rl.toFixed(2)
               document.getElementById("output_m_total_ud_st_rl_eq").innerHTML = m_total_ud_st_rl_eq
           }
           if (!isNaN(m_total_ud_st_rb)) {
               document.getElementById("output_m_total_ud_st_rb").innerHTML = m_total_ud_st_rb.toFixed(2)
               document.getElementById("output_m_total_ud_st_rb_eq").innerHTML = m_total_ud_st_rb_eq
           }
           // if (!isNaN(m_total_ud_lt_r)) {
           //     document.getElementById("output_m_total_ud_lt_r").innerHTML = m_total_ud_lt_r.toFixed(2)
           // }
   
           if (!isNaN(m_dim_length)) {
               document.getElementById("output_m_dim_length").innerHTML = m_dim_length.toFixed(2)
               document.getElementById("output_m_dim_length_eq").innerHTML = m_dim_length_eq
           }
           if (!isNaN(m_dim_width)) {
               document.getElementById("output_m_dim_width").innerHTML = m_dim_width.toFixed(2)
               document.getElementById("output_m_dim_width_eq").innerHTML = m_dim_width_eq
           }
           if (!isNaN(m_dim_r_length)) {
               document.getElementById("output_m_dim_r_length").innerHTML = m_dim_r_length.toFixed(2)
               document.getElementById("output_m_dim_r_length_eq").innerHTML = m_dim_r_length_eq
           }
           if (!isNaN(m_dim_r_width)) {
               document.getElementById("output_m_dim_r_width").innerHTML = m_dim_r_width.toFixed(2)
               document.getElementById("output_m_dim_r_width_eq").innerHTML = m_dim_r_width_eq
           }
           if (!isNaN(m_total_ud_lt_rl)) {
               document.getElementById("output_m_total_ud_lt_rl").innerHTML = m_total_ud_lt_rl.toFixed(2)
               document.getElementById("output_m_total_ud_lt_rl_eq").innerHTML = m_total_ud_lt_rl_eq
           }
           if (!isNaN(m_total_ud_lt_rb)) {
               document.getElementById("output_m_total_ud_lt_rb").innerHTML = m_total_ud_lt_rb.toFixed(2)
               document.getElementById("output_m_total_ud_lt_rb_eq").innerHTML = m_total_ud_lt_rb_eq
           }
           if (!isNaN(e_total_dr_st_l)) {
               document.getElementById("output_e_total_dr_st_l").innerHTML = e_total_dr_st_l.toFixed(0)
               document.getElementById("output_e_total_dr_st_l_eq").innerHTML = e_total_dr_st_l_eq
           }
           if (!isNaN(e_total_dr_lt_l)) {
               document.getElementById("output_e_total_dr_lt_l").innerHTML = e_total_dr_lt_l.toFixed(0)
               document.getElementById("output_e_total_dr_lt_l_eq").innerHTML = e_total_dr_lt_l_eq
           }
           if (!isNaN(e_total_ud_st_l)) {
               document.getElementById("output_e_total_ud_st_l").innerHTML = e_total_ud_st_l.toFixed(0)
               document.getElementById("output_e_total_ud_st_l_eq").innerHTML = e_total_ud_st_l_eq
           }
           if (!isNaN(e_total_ud_lt_l)) {
               document.getElementById("output_e_total_ud_lt_l").innerHTML = e_total_ud_lt_l.toFixed(0)
               document.getElementById("output_e_total_ud_lt_l_eq").innerHTML = e_total_ud_lt_l_eq
           }
           if (!isNaN(e_total_dr_st_b)) {
               document.getElementById("output_e_total_dr_st_b").innerHTML = e_total_dr_st_b.toFixed(0)
               document.getElementById("output_e_total_dr_st_b_eq").innerHTML = e_total_dr_st_b_eq
           }
           if (!isNaN(e_total_dr_lt_b)) {
               document.getElementById("output_e_total_dr_lt_b").innerHTML = e_total_dr_lt_b.toFixed(0)
               document.getElementById("output_e_total_dr_lt_b_eq").innerHTML = e_total_dr_lt_b_eq
           }
           if (!isNaN(e_total_ud_st_b)) {
               document.getElementById("output_e_total_ud_st_b").innerHTML = e_total_ud_st_b.toFixed(0)
               document.getElementById("output_e_total_ud_st_b_eq").innerHTML = e_total_ud_st_b_eq
           }
           if (!isNaN(e_total_ud_lt_b)) {
               document.getElementById("output_e_total_ud_lt_b").innerHTML = e_total_ud_lt_b.toFixed(0)
               document.getElementById("output_e_total_ud_lt_b_eq").innerHTML = e_total_ud_lt_b_eq
           }
           if (!isNaN(e_total_dr_st_rl)) {
               document.getElementById("output_e_total_dr_st_rl").innerHTML = e_total_dr_st_rl.toFixed(0)
               document.getElementById("output_e_total_dr_st_rl_eq").innerHTML = e_total_dr_st_rl_eq
           }
           if (!isNaN(e_total_dr_lt_rl)) {
               document.getElementById("output_e_total_dr_lt_rl").innerHTML = e_total_dr_lt_rl.toFixed(0)
               document.getElementById("output_e_total_dr_lt_rl_eq").innerHTML = e_total_dr_lt_rl_eq
           }
           if (!isNaN(e_total_ud_st_rl)) {
               document.getElementById("output_e_total_ud_st_rl").innerHTML = e_total_ud_st_rl.toFixed(0)
               document.getElementById("output_e_total_ud_st_rl_eq").innerHTML = e_total_ud_st_rl_eq
           }
           if (!isNaN(e_total_ud_lt_rl)) {
               document.getElementById("output_e_total_ud_lt_rl").innerHTML = e_total_ud_lt_rl.toFixed(0)
               document.getElementById("output_e_total_ud_lt_rl_eq").innerHTML = e_total_ud_lt_rl_eq
           }
           if (!isNaN(e_total_dr_st_rb)) {
               document.getElementById("output_e_total_dr_st_rb").innerHTML = e_total_dr_st_rb.toFixed(0)
               document.getElementById("output_e_total_dr_st_rb_eq").innerHTML = e_total_dr_st_rb_eq
           }
           if (!isNaN(e_total_dr_lt_rb)) {
               document.getElementById("output_e_total_dr_lt_rb").innerHTML = e_total_dr_lt_rb.toFixed(0)
               document.getElementById("output_e_total_dr_lt_rb_eq").innerHTML = e_total_dr_lt_rb_eq
           }
           if (!isNaN(e_total_ud_st_rb)) {
               document.getElementById("output_e_total_ud_st_rb").innerHTML = e_total_ud_st_rb.toFixed(0)
               document.getElementById("output_e_total_ud_st_rb_eq").innerHTML = e_total_ud_st_rb_eq
           }
           if (!isNaN(e_total_ud_lt_rb)) {
               document.getElementById("output_e_total_ud_lt_rb").innerHTML = e_total_ud_lt_rb.toFixed(0)
               document.getElementById("output_e_total_ud_lt_rb_eq").innerHTML = e_total_ud_lt_rb_eq
           }
           if (!isNaN(e_total_dr_st_r)) {
               document.getElementById("output_e_total_dr_st_r").innerHTML = e_total_dr_st_r.toFixed(0)
               document.getElementById("output_e_total_dr_st_r_eq").innerHTML = e_total_dr_st_r_eq
           }
           if (!isNaN(e_total_dr_lt_r)) {
               document.getElementById("output_e_total_dr_lt_r").innerHTML = e_total_dr_lt_r.toFixed(0)
               document.getElementById("output_e_total_dr_lt_r_eq").innerHTML = e_total_dr_lt_r_eq
           }
           if (!isNaN(e_total_ud_st_r)) {
               document.getElementById("output_e_total_ud_st_r").innerHTML = e_total_ud_st_r.toFixed(0)
               document.getElementById("output_e_total_ud_st_r_eq").innerHTML = e_total_ud_st_r_eq
           }
           if (!isNaN(e_total_ud_lt_r)) {
               document.getElementById("output_e_total_ud_lt_r").innerHTML = e_total_ud_lt_r.toFixed(0)
               document.getElementById("output_e_total_ud_lt_r_eq").innerHTML = e_total_ud_lt_r_eq
           }
           if (!isNaN(e_dim_l)) {
               document.getElementById("output_e_dim_l").innerHTML = e_dim_l.toFixed(0)
               document.getElementById("output_e_dim_l_eq").innerHTML = e_dim_l_eq
           }
           if (!isNaN(e_dim_b)) {
               document.getElementById("output_e_dim_b").innerHTML = e_dim_b.toFixed(0)
               document.getElementById("output_e_dim_b_eq").innerHTML = e_dim_b_eq
           }
           if (!isNaN(e_dim_rl)) {
               document.getElementById("output_e_dim_rl").innerHTML = e_dim_rl.toFixed(0)
               document.getElementById("output_e_dim_rl_eq").innerHTML = e_dim_rl_eq
           }
           if (!isNaN(e_dim_rb)) {
               document.getElementById("output_e_dim_rb").innerHTML = e_dim_rb.toFixed(0)
               document.getElementById("output_e_dim_rb_eq").innerHTML = e_dim_rb_eq
           }
           if (!isNaN(e_dim_r)) {
               document.getElementById("output_e_dim_r").innerHTML = e_dim_r.toFixed(0)
               document.getElementById("output_e_dim_r_eq").innerHTML = e_dim_r_eq
           }
           if (!isNaN(v_dr_st_r)) {
               document.getElementById("output_v_dr_st_r").innerHTML = v_dr_st_r.toFixed(0)
               document.getElementById("output_v_dr_st_r_eq").innerHTML = v_dr_st_r_eq
           }
           if (!isNaN(v_dr_lt_r)) {
               document.getElementById("output_v_dr_lt_r").innerHTML = v_dr_lt_r.toFixed(0)
               document.getElementById("output_v_dr_lt_r_eq").innerHTML = v_dr_lt_r_eq
           }
           if (!isNaN(v_ud_st_r)) {
               document.getElementById("output_v_ud_st_r").innerHTML = v_ud_st_r.toFixed(0)
               document.getElementById("output_v_ud_st_r_eq").innerHTML = v_ud_st_r_eq
           }
           if (!isNaN(v_ud_lt_r)) {
               document.getElementById("output_v_ud_lt_r").innerHTML = v_ud_lt_r.toFixed(0)
               document.getElementById("output_v_ud_lt_r_eq").innerHTML = v_ud_lt_r_eq
           }
           if (!isNaN(v_dim_r)) {
               document.getElementById("output_v_dim_r").innerHTML = v_dim_r.toFixed(0)
               document.getElementById("output_v_dim_r_eq").innerHTML = v_dim_r_eq
           }
           if (!isNaN(ef_dr_st_l)) {
               document.getElementById("output_ef_dr_st_l").innerHTML = ef_dr_st_l.toFixed(0)
               document.getElementById("output_ef_dr_st_l_eq").innerHTML = ef_dr_st_l_eq
           }
           if (!isNaN(ef_dr_lt_l)) {
               document.getElementById("output_ef_dr_lt_l").innerHTML = ef_dr_lt_l.toFixed(0)
               document.getElementById("output_ef_dr_lt_l_eq").innerHTML = ef_dr_lt_l_eq
           }
           if (!isNaN(ef_ud_st_l)) {
               document.getElementById("output_ef_ud_st_l").innerHTML = ef_ud_st_l.toFixed(0)
               document.getElementById("output_ef_ud_st_l_eq").innerHTML = ef_ud_st_l_eq
           }
           if (!isNaN(ef_ud_lt_l)) {
               document.getElementById("output_ef_ud_lt_l").innerHTML = ef_ud_lt_l.toFixed(0)
               document.getElementById("output_ef_ud_lt_l_eq").innerHTML = ef_ud_lt_l_eq
           }
           if (!isNaN(ef_dim_l)) {
               document.getElementById("output_ef_dim_l").innerHTML = ef_dim_l.toFixed(0)
               document.getElementById("output_ef_dim_l_eq").innerHTML = ef_dim_l_eq
           }
           if (!isNaN(ef_dim_b)) {
               document.getElementById("output_ef_dim_b").innerHTML = ef_dim_b.toFixed(0)
               document.getElementById("output_ef_dim_b_eq").innerHTML = ef_dim_b_eq
           }
           if (!isNaN(ef_dr_st_b)) {
               document.getElementById("output_ef_dr_st_b").innerHTML = ef_dr_st_b.toFixed(0)
               document.getElementById("output_ef_dr_st_b_eq").innerHTML = ef_dr_st_b_eq
           }
           if (!isNaN(ef_dr_lt_b)) {
               document.getElementById("output_ef_dr_lt_b").innerHTML = ef_dr_lt_b.toFixed(0)
               document.getElementById("output_ef_dr_lt_b_eq").innerHTML = ef_dr_lt_b_eq
           }
           if (!isNaN(ef_ud_st_b)) {
               document.getElementById("output_ef_ud_st_b").innerHTML = ef_ud_st_b.toFixed(0)
               document.getElementById("output_ef_ud_st_b_eq").innerHTML = ef_ud_st_b_eq
           }
           if (!isNaN(ef_ud_lt_b)) {
               document.getElementById("output_ef_ud_lt_b").innerHTML = ef_ud_lt_b.toFixed(0)
               document.getElementById("output_ef_ud_lt_b_eq").innerHTML = ef_ud_lt_b_eq
           }
           if (!isNaN(A_eff_dr_st)) {
               document.getElementById("output_A_eff_dr_st").innerHTML = A_eff_dr_st.toFixed(2)
               document.getElementById("output_A_eff_dr_st_eq").innerHTML = A_eff_dr_st_eq
           }
           if (!isNaN(A_eff_dr_lt)) {
               document.getElementById("output_A_eff_dr_lt").innerHTML = A_eff_dr_lt.toFixed(2)
               document.getElementById("output_A_eff_dr_lt_eq").innerHTML = A_eff_dr_lt_eq
           }
           if (!isNaN(A_eff_ud_st)) {
               document.getElementById("output_A_eff_ud_st").innerHTML = A_eff_ud_st.toFixed(2)
               document.getElementById("output_A_eff_ud_st_eq").innerHTML = A_eff_ud_st_eq
           }
           if (!isNaN(A_eff_ud_lt)) {
               document.getElementById("output_A_eff_ud_lt").innerHTML = A_eff_ud_lt.toFixed(2)
               document.getElementById("output_A_eff_ud_lt_eq").innerHTML = A_eff_ud_lt_eq
           }
           if (!isNaN(A_dim_eff)) {
               document.getElementById("output_A_dim_eff").innerHTML = A_dim_eff.toFixed(2)
               document.getElementById("output_A_dim_eff_eq").innerHTML = A_dim_eff_eq
           }
           if (!isNaN(N_q_dr_st)) {
               document.getElementById("output_N_q_dr_st").innerHTML = N_q_dr_st.toFixed(2)
               document.getElementById("output_N_q_dr_st_eq").innerHTML = N_q_dr_st_eq
           }
           if (!isNaN(N_q_dr_lt)) {
               document.getElementById("output_N_q_dr_lt").innerHTML = N_q_dr_lt.toFixed(2)
               document.getElementById("output_N_q_dr_lt_eq").innerHTML = N_q_dr_lt_eq
           }
           if (!isNaN(N_q_ud_st)) {
               document.getElementById("output_N_q_ud_st").innerHTML = N_q_ud_st.toFixed(2)
               document.getElementById("output_N_q_ud_st_eq").innerHTML = N_q_ud_st_eq
           }
           if (!isNaN(N_q_ud_lt)) {
               document.getElementById("output_N_q_ud_lt").innerHTML = N_q_ud_lt.toFixed(2)
               document.getElementById("output_N_q_ud_lt_eq").innerHTML = N_q_ud_lt_eq
           }
   
           if (!isNaN(N_c_dr_st)) {
               document.getElementById("output_N_c_dr_st").innerHTML = N_c_dr_st.toFixed(2)
               document.getElementById("output_N_c_dr_st_eq").innerHTML = N_c_dr_st_eq
           }
           if (!isNaN(N_c_dr_lt)) {
               document.getElementById("output_N_c_dr_lt").innerHTML = N_c_dr_lt.toFixed(2)
               document.getElementById("output_N_c_dr_lt_eq").innerHTML = N_c_dr_lt_eq
           }
           if (!isNaN(N_c_ud_st)) {
               document.getElementById("output_N_c_ud_st").innerHTML = N_c_ud_st.toFixed(2)
               document.getElementById("output_N_c_ud_st_eq").innerHTML = N_c_ud_st_eq
           }
           if (!isNaN(N_c_ud_lt)) {
               document.getElementById("output_N_c_ud_lt").innerHTML = N_c_ud_lt.toFixed(2)
               document.getElementById("output_N_c_ud_lt_eq").innerHTML = N_c_ud_lt_eq
           }
   
           if (!isNaN(N_g_dr_st)) {
               document.getElementById("output_N_g_dr_st").innerHTML = N_g_dr_st.toFixed(2)
               document.getElementById("output_N_g_dr_st_eq").innerHTML = N_g_dr_st_eq
           }
           if (!isNaN(N_g_dr_lt)) {
               document.getElementById("output_N_g_dr_lt").innerHTML = N_g_dr_lt.toFixed(2)
               document.getElementById("output_N_g_dr_lt_eq").innerHTML = N_g_dr_lt_eq
           }
           if (!isNaN(N_g_ud_st)) {
               document.getElementById("output_N_g_ud_st").innerHTML = N_g_ud_st.toFixed(2)
               document.getElementById("output_N_g_ud_st_eq").innerHTML = N_g_ud_st_eq
           }
           if (!isNaN(N_g_ud_lt)) {
               document.getElementById("output_N_g_ud_lt").innerHTML = N_g_ud_lt.toFixed(2)
               document.getElementById("output_N_g_ud_lt_eq").innerHTML = N_g_ud_lt_eq
           }
           if (!isNaN(s_g_dr_st)) {
               document.getElementById("output_s_g_dr_st").innerHTML = s_g_dr_st.toFixed(2)
               document.getElementById("output_s_g_dr_st_eq").innerHTML = s_g_dr_st_eq
           }
           if (!isNaN(s_g_dr_lt)) {
               document.getElementById("output_s_g_dr_lt").innerHTML = s_g_dr_lt.toFixed(2)
               document.getElementById("output_s_g_dr_lt_eq").innerHTML = s_g_dr_lt_eq
           }
           if (!isNaN(s_g_ud_st)) {
               document.getElementById("output_s_g_ud_st").innerHTML = s_g_ud_st.toFixed(2)
               document.getElementById("output_s_g_ud_st_eq").innerHTML = s_g_ud_st_eq
           }
           if (!isNaN(s_g_ud_lt)) {
               document.getElementById("output_s_g_ud_lt").innerHTML = s_g_ud_lt.toFixed(2)
               document.getElementById("output_s_g_ud_lt_eq").innerHTML = s_g_ud_lt_eq
           }
           if (!isNaN(s_q_dr_st)) {
               document.getElementById("output_s_q_dr_st").innerHTML = s_q_dr_st.toFixed(2)
               document.getElementById("output_s_q_dr_st_eq").innerHTML = s_q_dr_st_eq
           }
           if (!isNaN(s_q_dr_lt)) {
               document.getElementById("output_s_q_dr_lt").innerHTML = s_q_dr_lt.toFixed(2)
               document.getElementById("output_s_q_dr_lt_eq").innerHTML = s_q_dr_lt_eq
           }
           if (!isNaN(s_q_ud_st)) {
               document.getElementById("output_s_q_ud_st").innerHTML = s_q_ud_st.toFixed(2)
               document.getElementById("output_s_q_ud_st_eq").innerHTML = s_q_ud_st_eq
           }
           if (!isNaN(s_q_ud_lt)) {
               document.getElementById("output_s_q_ud_lt").innerHTML = s_q_ud_lt.toFixed(2)
               document.getElementById("output_s_q_ud_lt_eq").innerHTML = s_q_ud_lt_eq
           }
           if (!isNaN(s_c_dr_st)) {
               document.getElementById("output_s_c_dr_st").innerHTML = s_c_dr_st.toFixed(2)
               document.getElementById("output_s_c_dr_st_eq").innerHTML = s_c_dr_st_eq
           }
           if (!isNaN(s_c_dr_lt)) {
               document.getElementById("output_s_c_dr_lt").innerHTML = s_c_dr_lt.toFixed(2)
               document.getElementById("output_s_c_dr_lt_eq").innerHTML = s_c_dr_lt_eq
           }
           if (!isNaN(s_c_ud_st)) {
               document.getElementById("output_s_c_ud_st").innerHTML = s_c_ud_st.toFixed(2)
               document.getElementById("output_s_c_ud_st_eq").innerHTML = s_c_ud_st_eq
           }
           if (!isNaN(s_c_ud_lt)) {
               document.getElementById("output_s_c_ud_lt").innerHTML = s_c_ud_lt.toFixed(2)
               document.getElementById("output_s_c_ud_lt_eq").innerHTML = s_c_ud_lt_eq
           }
           if (!isNaN(i_q_dr_st)) {
               document.getElementById("output_i_q_dr_st").innerHTML = i_q_dr_st.toFixed(2)
               document.getElementById("output_i_q_dr_st_eq").innerHTML = i_q_dr_st_eq
           }
           if (!isNaN(i_q_dr_lt)) {
               document.getElementById("output_i_q_dr_lt").innerHTML = i_q_dr_lt.toFixed(2)
               document.getElementById("output_i_q_dr_lt_eq").innerHTML = i_q_dr_lt_eq
           }
           if (!isNaN(i_q_ud_st)) {
               document.getElementById("output_i_q_ud_st").innerHTML = i_q_ud_st.toFixed(2)
               document.getElementById("output_i_q_ud_st_eq").innerHTML = i_q_ud_st_eq
           }
           if (!isNaN(i_q_ud_lt)) {
               document.getElementById("output_i_q_ud_lt").innerHTML = i_q_ud_lt.toFixed(2)
               document.getElementById("output_i_q_ud_lt_eq").innerHTML = i_q_ud_lt_eq
           }
   
   
           if (!isNaN(i_g_dr_st)) {
               document.getElementById("output_i_g_dr_st").innerHTML = i_g_dr_st.toFixed(2)
               document.getElementById("output_i_g_dr_st_eq").innerHTML = i_g_dr_st_eq
           }
           if (!isNaN(i_g_dr_lt)) {
               document.getElementById("output_i_g_dr_lt").innerHTML = i_g_dr_lt.toFixed(2)
               document.getElementById("output_i_g_dr_lt_eq").innerHTML = i_g_dr_lt_eq
           }
           if (!isNaN(i_g_ud_st)) {
               document.getElementById("output_i_g_ud_st").innerHTML = i_g_ud_st.toFixed(2)
               document.getElementById("output_i_g_ud_st_eq").innerHTML = i_g_ud_st_eq
           }
           if (!isNaN(i_g_ud_lt)) {
               document.getElementById("output_i_g_ud_lt").innerHTML = i_g_ud_lt.toFixed(2)
               document.getElementById("output_i_g_ud_lt_eq").innerHTML = i_g_ud_lt_eq
           }
   
   
           if (!isNaN(i_c_dr_st)) {
               document.getElementById("output_i_c_dr_st").innerHTML = i_c_dr_st.toFixed(2)
               document.getElementById("output_i_c_dr_st_eq").innerHTML = i_c_dr_st_eq
           }
           if (!isNaN(i_c_dr_lt)) {
               document.getElementById("output_i_c_dr_lt").innerHTML = i_c_dr_lt.toFixed(2)
               document.getElementById("output_i_c_dr_lt_eq").innerHTML = i_c_dr_lt_eq
           }
           if (!isNaN(i_c_ud_st)) {
               document.getElementById("output_i_c_ud_st").innerHTML = i_c_ud_st.toFixed(2)
               document.getElementById("output_i_c_ud_st_eq").innerHTML = i_c_ud_st_eq
           }
           if (!isNaN(i_c_ud_lt)) {
               document.getElementById("output_i_c_ud_lt").innerHTML = i_c_ud_lt.toFixed(2)
               document.getElementById("output_i_c_ud_lt_eq").innerHTML = i_c_ud_lt_eq
           }
   
   
   
           if (!isNaN(R_q_dr_st)) {
               document.getElementById("output_R_q_dr_st").innerHTML = R_q_dr_st.toFixed(2)
               document.getElementById("output_R_q_dr_st_eq").innerHTML = R_q_dr_st_eq
           }
           if (!isNaN(R_q_dr_lt)) {
               document.getElementById("output_R_q_dr_lt").innerHTML = R_q_dr_lt.toFixed(2)
               document.getElementById("output_R_q_dr_lt_eq").innerHTML = R_q_dr_lt_eq
           }
           if (!isNaN(R_q_ud_st)) {
               document.getElementById("output_R_q_ud_st").innerHTML = R_q_ud_st.toFixed(2)
               document.getElementById("output_R_q_ud_st_eq").innerHTML = R_q_ud_st_eq
           }
           if (!isNaN(R_q_ud_lt)) {
               document.getElementById("output_R_q_ud_lt").innerHTML = R_q_ud_lt.toFixed(2)
               document.getElementById("output_R_q_ud_lt_eq").innerHTML = R_q_ud_lt_eq
           }
           if (!isNaN(R_c_dr_st)) {
               document.getElementById("output_R_c_dr_st").innerHTML = R_c_dr_st.toFixed(2)
               document.getElementById("output_R_c_dr_st_eq").innerHTML = R_c_dr_st_eq
           }
           if (!isNaN(R_c_dr_lt)) {
               document.getElementById("output_R_c_dr_lt").innerHTML = R_c_dr_lt.toFixed(2)
               document.getElementById("output_R_c_dr_lt_eq").innerHTML = R_c_dr_lt_eq
           }
           if (!isNaN(R_c_ud_st)) {
               document.getElementById("output_R_c_ud_st").innerHTML = R_c_ud_st.toFixed(2)
               document.getElementById("output_R_c_ud_st_eq").innerHTML = R_c_ud_st_eq
           }
           if (!isNaN(R_c_ud_lt)) {
               document.getElementById("output_R_c_ud_lt").innerHTML = R_c_ud_lt.toFixed(2)
               document.getElementById("output_R_c_ud_lt_eq").innerHTML = R_c_ud_lt_eq
           }
           if (!isNaN(R_g_dr_st)) {
               document.getElementById("output_R_g_dr_st").innerHTML = R_g_dr_st.toFixed(2)
               document.getElementById("output_R_g_dr_st_eq").innerHTML = R_g_dr_st_eq
           }
           if (!isNaN(R_g_dr_lt)) {
               document.getElementById("output_R_g_dr_lt").innerHTML = R_g_dr_lt.toFixed(2)
               document.getElementById("output_R_g_dr_lt_eq").innerHTML = R_g_dr_lt_eq
           }
           if (!isNaN(R_g_ud_st)) {
               document.getElementById("output_R_g_ud_st").innerHTML = R_g_ud_st.toFixed(2)
               document.getElementById("output_R_g_ud_st_eq").innerHTML = R_g_ud_st_eq
           }
           if (!isNaN(R_g_ud_lt)) {
               document.getElementById("output_R_g_ud_lt").innerHTML = R_g_ud_lt.toFixed(2)
               document.getElementById("output_R_g_ud_lt_eq").innerHTML = R_g_ud_lt_eq
           }
           if (!isNaN(R_total_dr_st)) {
               document.getElementById("output_R_total_dr_st").innerHTML = R_total_dr_st.toFixed(2)
               document.getElementById("output_R_total_dr_st_eq").innerHTML = R_total_dr_st_eq
           }
           if (!isNaN(R_total_dr_lt)) {
               document.getElementById("output_R_total_dr_lt").innerHTML = R_total_dr_lt.toFixed(2)
               document.getElementById("output_R_total_dr_lt_eq").innerHTML = R_total_dr_lt_eq
           }
           if (!isNaN(R_total_ud_st)) {
               document.getElementById("output_R_total_ud_st").innerHTML = R_total_ud_st.toFixed(2)
               document.getElementById("output_R_total_ud_st_eq").innerHTML = R_total_ud_st_eq
           }
           if (!isNaN(R_total_ud_lt)) {
               document.getElementById("output_R_total_ud_lt").innerHTML = R_total_ud_lt.toFixed(2)
               document.getElementById("output_R_total_ud_lt_eq").innerHTML = R_total_ud_lt_eq
           }
           if (!isNaN(R_total)) {
               document.getElementById("output_R_total").innerHTML = R_total.toFixed(2)
               document.getElementById("output_R_total_eq").innerHTML = R_total_eq
           }
           if (!isNaN(H_dr_st)) {
               document.getElementById("output_H_dr_st").innerHTML = H_dr_st.toFixed(2)
               document.getElementById("output_H_dr_st_eq").innerHTML = H_dr_st_eq
           }
           if (!isNaN(H_dr_lt)) {
               document.getElementById("output_H_dr_lt").innerHTML = H_dr_lt.toFixed(2)
               document.getElementById("output_H_dr_lt_eq").innerHTML = H_dr_lt_eq
           }
           if (!isNaN(H_ud_st)) {
               document.getElementById("output_H_ud_st").innerHTML = H_ud_st.toFixed(2)
               document.getElementById("output_H_ud_st_eq").innerHTML = H_ud_st_eq
           }
           if (!isNaN(H_ud_lt)) {
               document.getElementById("output_H_ud_lt").innerHTML = H_ud_lt.toFixed(2)
               document.getElementById("output_H_ud_lt_eq").innerHTML = H_ud_lt_eq
           }
           if (!isNaN(H_total)) {
               document.getElementById("output_H_total").innerHTML = H_total.toFixed(2)
               document.getElementById("output_H_total_eq").innerHTML = H_total_eq
           }
           if (!isNaN(f_ck)) {
               document.getElementById("output_f_ck").innerHTML = f_ck.toFixed(0)
               document.getElementById("output_f_ck_eq").innerHTML = f_ck_eq
           }
           if (!isNaN(gamma_c)) {
               document.getElementById("output_gamma_c").innerHTML = gamma_c.toFixed(2)
               document.getElementById("output_gamma_c_eq").innerHTML = gamma_c_eq
           }
           if (!isNaN(f_cd)) {
               document.getElementById("output_f_cd").innerHTML = f_cd.toFixed(2)
               document.getElementById("output_f_cd_eq").innerHTML = f_cd_eq
           }
           // if (!isNaN(f_cm)) {
           //     document.getElementById("output_f_cm").innerHTML = f_cm.toFixed(0)
           //     document.getElementById("output_f_cm_eq").innerHTML = f_cm_eq
           // }
           // if (!isNaN(f_ctm)) {
           //     document.getElementById("output_f_ctm").innerHTML = f_ctm.toFixed(2)
           //     document.getElementById("output_f_ctm_eq").innerHTML = f_ctm_eq
           // }
           // if (!isNaN(E_cm)) {
           //     document.getElementById("output_E_cm").innerHTML = E_cm.toFixed(2)
           //     document.getElementById("output_E_cm_eq").innerHTML = E_cm_eq
           // }
           if (!isNaN(f_R_1)) {
               document.getElementById("output_f_R_1").innerHTML = f_R_1.toFixed(2)
               document.getElementById("output_f_R_1_eq").innerHTML = f_R_1_eq
           }
           if (!isNaN(f_R_2)) {
               document.getElementById("output_f_R_2").innerHTML = f_R_2.toFixed(2)
               document.getElementById("output_f_R_2_eq").innerHTML = f_R_2_eq
           }
           if (!isNaN(f_R_3)) {
               document.getElementById("output_f_R_3").innerHTML = f_R_3.toFixed(2)
               document.getElementById("output_f_R_3_eq").innerHTML = f_R_3_eq
           }
           if (!isNaN(f_R_4)) {
               document.getElementById("output_f_R_4").innerHTML = f_R_4.toFixed(2)
               document.getElementById("output_f_R_4_eq").innerHTML = f_R_4_eq
           }
           if (!isNaN(f_R_1)) {
               document.getElementById("output_f_R_1_over").innerHTML = f_R_1.toFixed(2)
               document.getElementById("output_f_R_1_over_eq").innerHTML = f_R_1_eq
           }
           if (!isNaN(f_R_2)) {
               document.getElementById("output_f_R_2_over").innerHTML = f_R_2.toFixed(2)
               document.getElementById("output_f_R_2_over_eq").innerHTML = f_R_2_eq
           }
           if (!isNaN(f_R_3)) {
               document.getElementById("output_f_R_3_over").innerHTML = f_R_3.toFixed(2)
               document.getElementById("output_f_R_3_over_eq").innerHTML = f_R_3_eq
           }
           if (!isNaN(f_R_4)) {
               document.getElementById("output_f_R_4_over").innerHTML = f_R_4.toFixed(2)
               document.getElementById("output_f_R_4_over_eq").innerHTML = f_R_4_eq
           }
           if (!isNaN(sigma_r1)) {
               document.getElementById("output_sigma_r1").innerHTML = sigma_r1.toFixed(2)
               document.getElementById("output_sigma_r1_eq").innerHTML = sigma_r1_eq
           }
           if (!isNaN(sigma_r4)) {
               document.getElementById("output_sigma_r4").innerHTML = sigma_r4.toFixed(2)
               document.getElementById("output_sigma_r4_eq").innerHTML = sigma_r4_eq
           }
           if (!isNaN(sigma_r1)) {
               document.getElementById("output_sigma_r1_over").innerHTML = sigma_r1.toFixed(2)
               document.getElementById("output_sigma_r1_over_eq").innerHTML = sigma_r1_eq
           }
           if (!isNaN(sigma_r4)) {
               document.getElementById("output_sigma_r4_over").innerHTML = sigma_r4.toFixed(2)
               document.getElementById("output_sigma_r4_over_eq").innerHTML = sigma_r4_eq
           }
           if (!isNaN(gamma_m)) {
               document.getElementById("output_gamma_m").innerHTML = gamma_m.toFixed(2)
               document.getElementById("output_gamma_m_eq").innerHTML = gamma_m_eq
           }
           // if (!isNaN(f_ctd_fl)) {
           //     document.getElementById("output_f_ctd_fl").innerHTML = f_ctd_fl.toFixed(2)
           //     document.getElementById("output_f_ctd_fl_eq").innerHTML = f_ctd_fl_eq
           // }
           // if (!isNaN(M_n)) {
           //     document.getElementById("output_M_n").innerHTML = M_n.toFixed(2)
           //     document.getElementById("output_M_n_eq").innerHTML = M_n_eq
           // }
           if (!isNaN(f_yk)) {
               document.getElementById("output_f_yk").innerHTML = f_yk.toFixed(0)
               document.getElementById("output_f_yk_eq").innerHTML = f_yk_eq
           }
           if (!isNaN(gamma_s)) {
               document.getElementById("output_gamma_s").innerHTML = gamma_s.toFixed(2)
               document.getElementById("output_gamma_s_eq").innerHTML = gamma_s_eq
           }
           if (!isNaN(f_yd)) {
               document.getElementById("output_f_yd").innerHTML = f_yd.toFixed(2)
               document.getElementById("output_f_yd_eq").innerHTML = f_yd_eq
           }
           if (!isNaN(A_s)) {
               document.getElementById("output_A_s").innerHTML = A_s.toFixed(0)
               document.getElementById("output_A_s_eq").innerHTML = A_s_eq
           }
   
             
               document.getElementById("output_steel_mesh_type").innerHTML = steel_mesh_type
               document.getElementById("output_steel_mesh_type2").innerHTML = steel_mesh_type
          
   
           if (!isNaN(A_c)) {
               document.getElementById("output_A_c").innerHTML = A_c.toFixed(2)
               document.getElementById("output_A_c_eq").innerHTML = A_c_eq
           }
           if (!isNaN(rho)) {
               document.getElementById("output_rho").innerHTML = rho.toFixed(3)
               document.getElementById("output_rho_eq").innerHTML = rho_eq
           }
           if (!isNaN(h_ux)) {
               document.getElementById("output_h_ux").innerHTML = h_ux.toFixed(0)
               document.getElementById("output_h_ux_eq").innerHTML = h_ux_eq
           }
   
           if (!isNaN(cover_layer)) {
               document.getElementById("output_cover_layer").innerHTML = cover_layer.toFixed(0)
               // document.getElementById("output_cover_layer_eq").innerHTML = cover_layer_eq
           }
           if (!isNaN(cover_layer)) {
               document.getElementById("output_cover_layer2").innerHTML = cover_layer.toFixed(0)
               document.getElementById("output_cover_layer2_eq").innerHTML = cover_layer2_eq
           }
           if (!isNaN(ef_height)) {
               document.getElementById("output_ef_height").innerHTML = ef_height.toFixed(0)
               document.getElementById("output_ef_height_eq").innerHTML = ef_height_eq
           }
   
           // if (!isNaN(lambda)) {
           //     document.getElementById("output_lambda").innerHTML = lambda.toFixed(2)
           //     document.getElementById("output_lambda_eq").innerHTML = lambda_eq
           // }
           if (!isNaN(eta)) {
               document.getElementById("output_eta").innerHTML = eta.toFixed(2)
               document.getElementById("output_eta_eq").innerHTML = eta_eq
           }
           if (!isNaN(omega)) {
               document.getElementById("output_omega").innerHTML = omega.toFixed(2)
               document.getElementById("output_omega_eq").innerHTML = omega_eq
           }
           // if (!isNaN(omega_b)) {
           //     document.getElementById("output_omega_b").innerHTML = omega_b.toFixed(2)
           //     document.getElementById("output_omega_b_eq").innerHTML = omega_b_eq
           // }
           if (!isNaN(mu)) {
               document.getElementById("output_mu").innerHTML = mu.toFixed(2)
               document.getElementById("output_mu_eq").innerHTML = mu_eq
           }
           // if (!isNaN(mu_b)) {
           //     document.getElementById("output_mu_b").innerHTML = mu_b.toFixed(2)
           //     document.getElementById("output_mu_b_eq").innerHTML = mu_b_eq
           // }
   
           if (!isNaN(M_p)) {
               document.getElementById("output_M_p").innerHTML = M_p.toFixed(2)
               document.getElementById("output_M_p_eq").innerHTML = M_p_eq
           }
           if (!isNaN(M_p_l)) {
               document.getElementById("output_M_p_l").innerHTML = M_p_l.toFixed(2)
               document.getElementById("output_M_p_l_eq").innerHTML = M_p_l_eq
           }
           if (!isNaN(M_p_b)) {
               document.getElementById("output_M_p_b").innerHTML = M_p_b.toFixed(2)
               document.getElementById("output_M_p_b_eq").innerHTML = M_p_b_eq
           }
   
           // if (!isNaN(lever_dr_st_l_temp)) {
           //     document.getElementById("output_lever_dr_st_l_temp").innerHTML = lever_dr_st_l_temp.toFixed(0)
           //     document.getElementById("output_lever_dr_st_l_eq").innerHTML = lever_dr_st_l_eq
           // }
   
           // if (!isNaN(lever_dr_st_l)) {
           //     document.getElementById("output_lever_dr_st_l").innerHTML = lever_dr_st_l.toFixed(0)
           //     document.getElementById("output_lever_dr_st_l_cor_eq").innerHTML = lever_dr_st_l_cor_eq
           // }
   
           // if (!isNaN(lever_dr_lt_l)) {
           //     document.getElementById("output_lever_dr_lt_l").innerHTML = lever_dr_lt_l.toFixed(0)
           //     document.getElementById("output_lever_dr_lt_l_eq").innerHTML = lever_dr_lt_l_eq
           // }
           // if (!isNaN(lever_ud_st_l)) {
           //     document.getElementById("output_lever_ud_st_l").innerHTML = lever_ud_st_l.toFixed(0)
           //     document.getElementById("output_lever_ud_st_l_eq").innerHTML = lever_ud_st_l_eq
           // }
           // if (!isNaN(lever_ud_lt_l)) {
           //     document.getElementById("output_lever_ud_lt_l").innerHTML = lever_ud_lt_l.toFixed(0)
           //     document.getElementById("output_lever_ud_lt_l_eq").innerHTML = lever_ud_lt_l_eq
           // }
   
           // if (!isNaN(lever_dr_st_b_temp)) {
           //     document.getElementById("output_lever_dr_st_b_temp").innerHTML = lever_dr_st_b_temp.toFixed(0)
           //     document.getElementById("output_lever_dr_st_b_eq").innerHTML = lever_dr_st_b_eq
           // }
   
           // if (!isNaN(lever_dr_st_b)) {
           //     document.getElementById("output_lever_dr_st_b").innerHTML = lever_dr_st_b.toFixed(0)
           //     document.getElementById("output_lever_dr_st_b_cor_eq").innerHTML = lever_dr_st_b_cor_eq
           // }
   
           // if (!isNaN(lever_dr_lt_b)) {
           //     document.getElementById("output_lever_dr_lt_b").innerHTML = lever_dr_lt_b.toFixed(0)
           //     document.getElementById("output_lever_dr_lt_b_eq").innerHTML = lever_dr_lt_b_eq
           // }
           // if (!isNaN(lever_ud_st_b)) {
           //     document.getElementById("output_lever_ud_st_b").innerHTML = lever_ud_st_b.toFixed(0)
           //     document.getElementById("output_lever_ud_st_b_eq").innerHTML = lever_ud_st_b_eq
           // }
           // if (!isNaN(lever_ud_lt_b)) {
           //     document.getElementById("output_lever_ud_lt_b").innerHTML = lever_ud_lt_b.toFixed(0)
           //     document.getElementById("output_lever_ud_lt_b_eq").innerHTML = lever_ud_lt_b_eq
           // }
           // if (!isNaN(lever_dim_l_temp)) {
           //     document.getElementById("output_lever_dim_l_temp").innerHTML = lever_dim_l_temp.toFixed(0)
           //     document.getElementById("output_lever_dim_l_eq").innerHTML = lever_dim_l_eq
           // }
   
           // if (!isNaN(lever_dim_l)) {
           //     document.getElementById("output_lever_dim_l").innerHTML = lever_dim_l.toFixed(0)
           //     document.getElementById("output_lever_dim_l_cor_eq").innerHTML = lever_dim_l_cor_eq
           // }
   
           // if (!isNaN(lever_dim_b_temp)) {
           //     document.getElementById("output_lever_dim_b_temp").innerHTML = lever_dim_b_temp.toFixed(0)
           //     document.getElementById("output_lever_dim_b_eq").innerHTML = lever_dim_b_eq
           // }
   
           // if (!isNaN(lever_dim_b)) {
           //     document.getElementById("output_lever_dim_b").innerHTML = lever_dim_b.toFixed(0)
           //     document.getElementById("output_lever_dim_b_cor_eq").innerHTML = lever_dim_b_cor_eq
           // }
   
           // if (!isNaN(lever_length_n)) {
           //     document.getElementById("output_lever_length_n").innerHTML = lever_length_n.toFixed(0)
           //     document.getElementById("output_lever_length_n_eq").innerHTML = lever_length_n_eq
           // }
           // if (!isNaN(lever_width_n)) {
           //     document.getElementById("output_lever_width_n").innerHTML = lever_width_n.toFixed(0)
           //     document.getElementById("output_lever_width_n_eq").innerHTML = lever_width_n_eq
           // }
   
           // if (!isNaN(M_p_dr_st_l)) {
           //     document.getElementById("output_M_p_dr_st_l").innerHTML = M_p_dr_st_l.toFixed(2)
           //     document.getElementById("output_M_p_dr_st_l_eq").innerHTML = M_p_dr_st_l_eq
           // }
           // if (!isNaN(M_p_dr_lt_l)) {
           //     document.getElementById("output_M_p_dr_lt_l").innerHTML = M_p_dr_lt_l.toFixed(2)
           //     document.getElementById("output_M_p_dr_lt_l_eq").innerHTML = M_p_dr_lt_l_eq
           // }
           // if (!isNaN(M_p_ud_st_l)) {
           //     document.getElementById("output_M_p_ud_st_l").innerHTML = M_p_ud_st_l.toFixed(2)
           //     document.getElementById("output_M_p_ud_st_l_eq").innerHTML = M_p_ud_st_l_eq
           // }
           // if (!isNaN(M_p_ud_lt_l)) {
           //     document.getElementById("output_M_p_ud_lt_l").innerHTML = M_p_ud_lt_l.toFixed(2)
           //     document.getElementById("output_M_p_ud_lt_l_eq").innerHTML = M_p_ud_lt_l_eq
           // }
           // if (!isNaN(M_p_dr_st_b)) {
           //     document.getElementById("output_M_p_dr_st_b").innerHTML = M_p_dr_st_b.toFixed(2)
           //     document.getElementById("output_M_p_dr_st_b_eq").innerHTML = M_p_dr_st_b_eq
           // }
           // if (!isNaN(M_p_dr_lt_b)) {
           //     document.getElementById("output_M_p_dr_lt_b").innerHTML = M_p_dr_lt_b.toFixed(2)
           //     document.getElementById("output_M_p_dr_lt_b_eq").innerHTML = M_p_dr_lt_b_eq
           // }
           // if (!isNaN(M_p_ud_st_b)) {
           //     document.getElementById("output_M_p_ud_st_b").innerHTML = M_p_ud_st_b.toFixed(2)
           //     document.getElementById("output_M_p_ud_st_b_eq").innerHTML = M_p_ud_st_b_eq
           // }
           // if (!isNaN(M_p_ud_lt_b)) {
           //     document.getElementById("output_M_p_ud_lt_b").innerHTML = M_p_ud_lt_b.toFixed(2)
           //     document.getElementById("output_M_p_ud_lt_b_eq").innerHTML = M_p_ud_lt_b_eq
           // }
           // if (!isNaN(M_p_dr_st)) {
           //     document.getElementById("output_M_p_dr_st").innerHTML = M_p_dr_st.toFixed(2)
           // }
           // if (!isNaN(M_p_dr_lt)) {
           //     document.getElementById("output_M_p_dr_lt").innerHTML = M_p_dr_lt.toFixed(2)
           // }
           // if (!isNaN(M_p_ud_st)) {
           //     document.getElementById("output_M_p_ud_st").innerHTML = M_p_ud_st.toFixed(2)
           // }
           // if (!isNaN(M_p_ud_lt)) {
           //     document.getElementById("output_M_p_ud_lt").innerHTML = M_p_ud_lt.toFixed(2)
           // }
           // if (!isNaN(M_Edp)) {
           //     document.getElementById("output_M_Edp").innerHTML = M_Edp.toFixed(2)
           // }
           // if (!isNaN(M_n_dr_st)) {
           //     document.getElementById("output_M_n_dr_st").innerHTML = M_n_dr_st.toFixed(2)
           // }
           // if (!isNaN(M_n_dr_lt)) {
           //     document.getElementById("output_M_n_dr_lt").innerHTML = M_n_dr_lt.toFixed(2)
           // }
           // if (!isNaN(M_n_ud_st)) {
           //     document.getElementById("output_M_n_ud_st").innerHTML = M_n_ud_st.toFixed(2)
           // }
           // if (!isNaN(M_n_ud_lt)) {
           //     document.getElementById("output_M_n_ud_lt").innerHTML = M_n_ud_lt.toFixed(2)
           // }
           // if (!isNaN(M_Edn)) {
           //     document.getElementById("output_M_Edn").innerHTML = M_Edn.toFixed(2)
           // }
           // if (!isNaN(M_yl_l)) {
           //     document.getElementById("output_M_yl_l").innerHTML = M_yl_l.toFixed(2)
           //     document.getElementById("output_M_yl_l_eq").innerHTML = M_yl_l_eq
           // }
           // if (!isNaN(M_yl_b)) {
           //     document.getElementById("output_M_yl_b").innerHTML = M_yl_b.toFixed(2)
           //     document.getElementById("output_M_yl_b_eq").innerHTML = M_yl_b_eq
           // }
   
           // SECTION FORCE OUTPUT START HERE?
   
           // if (!isNaN(M_dr_st_l)) {
           //     document.getElementById("output_M_dr_st_l").innerHTML = M_dr_st_l.toFixed(2)
           //     document.getElementById("output_M_dr_st_l_eq").innerHTML = M_dr_st_l_eq
           // }
           // if (!isNaN(M_dr_st_b)) {
           //     document.getElementById("output_M_dr_st_b").innerHTML = M_dr_st_b.toFixed(2)
           //     document.getElementById("output_M_dr_st_b_eq").innerHTML = M_dr_st_b_eq
           // }
           // if (!isNaN(M_dr_lt_l)) {
           //     document.getElementById("output_M_dr_lt_l").innerHTML = M_dr_lt_l.toFixed(2)
           //     document.getElementById("output_M_dr_lt_l_eq").innerHTML = M_dr_lt_l_eq
           // }
           // if (!isNaN(M_dr_lt_b)) {
           //     document.getElementById("output_M_dr_lt_b").innerHTML = M_dr_lt_b.toFixed(2)
           //     document.getElementById("output_M_dr_lt_b_eq").innerHTML = M_dr_lt_b_eq
           // }
           // if (!isNaN(M_ud_st_l)) {
           //     document.getElementById("output_M_ud_st_l").innerHTML = M_ud_st_l.toFixed(2)
           //     document.getElementById("output_M_ud_st_l_eq").innerHTML = M_ud_st_l_eq
           // }
           // if (!isNaN(M_ud_st_b)) {
           //     document.getElementById("output_M_ud_st_b").innerHTML = M_ud_st_b.toFixed(2)
           //     document.getElementById("output_M_ud_st_b_eq").innerHTML = M_ud_st_b_eq
           // }
           // if (!isNaN(M_ud_lt_l)) {
           //     document.getElementById("output_M_ud_lt_l").innerHTML = M_ud_lt_l.toFixed(2)
           //     document.getElementById("output_M_ud_lt_l_eq").innerHTML = M_ud_lt_l_eq
           // }
           // if (!isNaN(M_ud_lt_b)) {
           //     document.getElementById("output_M_ud_lt_b").innerHTML = M_ud_lt_b.toFixed(2)
           //     document.getElementById("output_M_ud_lt_b_eq").innerHTML = M_ud_lt_b_eq
           // }
           // if (!isNaN(M_dim_l)) {
           //     document.getElementById("output_M_dim_l").innerHTML = M_dim_l.toFixed(2)
           //     document.getElementById("output_M_dim_l_eq").innerHTML = M_dim_l_eq
           // }
           // if (!isNaN(M_dim_b)) {
           //     document.getElementById("output_M_dim_b").innerHTML = M_dim_b.toFixed(2)
           //     document.getElementById("output_M_dim_b_eq").innerHTML = M_dim_b_eq
           // }
   
           // if (!isNaN(M_final_l)) {
           //     document.getElementById("output_M_final_l").innerHTML = M_final_l.toFixed(2)
           //     document.getElementById("output_M_final_l_eq").innerHTML = M_final_l_eq
           // }
   
           // if (!isNaN(M_final_b)) {
           //     document.getElementById("output_M_final_b").innerHTML = M_final_b.toFixed(2)
           //     document.getElementById("output_M_final_b_eq").innerHTML = M_final_b_eq
           // }
   
   
           // SECTION FORCE OUTPUT END HERE
           // TOP SIDE MOMENT OUTPUT START HERE
   
           // if (!isNaN(M_n_dr_st_l)) {
           //     document.getElementById("output_M_n_dr_st_l").innerHTML = M_n_dr_st_l.toFixed(2)
           //     document.getElementById("output_M_n_dr_st_l_eq").innerHTML = M_n_dr_st_l_eq
           // }
           // if (!isNaN(M_n_dr_lt_l)) {
           //     document.getElementById("output_M_n_dr_lt_l").innerHTML = M_n_dr_lt_l.toFixed(2)
           //     document.getElementById("output_M_n_dr_lt_l_eq").innerHTML = M_n_dr_lt_l_eq
           // }
           // if (!isNaN(M_n_ud_st_l)) {
           //     document.getElementById("output_M_n_ud_st_l").innerHTML = M_n_ud_st_l.toFixed(2)
           //     document.getElementById("output_M_n_ud_st_l_eq").innerHTML = M_n_ud_st_l_eq
           // }
           // if (!isNaN(M_n_ud_lt_l)) {
           //     document.getElementById("output_M_n_ud_lt_l").innerHTML = M_n_ud_lt_l.toFixed(2)
           //     document.getElementById("output_M_n_ud_lt_l_eq").innerHTML = M_n_ud_lt_l_eq
           // }
           // if (!isNaN(M_dim_n_l)) {
           //     document.getElementById("output_M_dim_n_l").innerHTML = M_dim_n_l.toFixed(2)
           //     document.getElementById("output_M_dim_n_l_eq").innerHTML = M_dim_n_l_eq
           // }
           // if (!isNaN(M_n_dr_st_b)) {
           //     document.getElementById("output_M_n_dr_st_b").innerHTML = M_n_dr_st_b.toFixed(2)
           //     document.getElementById("output_M_n_dr_st_b_eq").innerHTML = M_n_dr_st_b_eq
           // }
           // if (!isNaN(M_n_dr_lt_b)) {
           //     document.getElementById("output_M_n_dr_lt_b").innerHTML = M_n_dr_lt_b.toFixed(2)
           //     document.getElementById("output_M_n_dr_lt_b_eq").innerHTML = M_n_dr_lt_b_eq
           // }
           // if (!isNaN(M_n_ud_st_b)) {
           //     document.getElementById("output_M_n_ud_st_b").innerHTML = M_n_ud_st_b.toFixed(2)
           //     document.getElementById("output_M_n_ud_st_b_eq").innerHTML = M_n_ud_st_b_eq
           // }
           // if (!isNaN(M_n_ud_lt_b)) {
           //     document.getElementById("output_M_n_ud_lt_b").innerHTML = M_n_ud_lt_b.toFixed(2)
           //     document.getElementById("output_M_n_ud_lt_b_eq").innerHTML = M_n_ud_lt_b_eq
           // }
           // if (!isNaN(M_dim_n_b)) {
           //     document.getElementById("output_M_dim_n_b").innerHTML = M_dim_n_b.toFixed(2)
           //     document.getElementById("output_M_dim_n_b_eq").innerHTML = M_dim_n_b_eq
           // }
           // if (!isNaN(M_Ed)) {
           //     document.getElementById("output_M_Ed").innerHTML = M_Ed.toFixed(2)
           // }
   
           // TOP SIDE MOMENT OUTPUT END HERE
   
   
           if (!isNaN(v)) {
               document.getElementById("output_v").innerHTML = v.toFixed(2)
               document.getElementById("output_v_eq").innerHTML = v_eq
           }
           // if (!isNaN(rho_total)) {
           //     document.getElementById("output_rho_total").innerHTML = rho_total
           // }
           if (!isNaN(k)) {
               document.getElementById("output_k").innerHTML = k.toFixed(2)
               document.getElementById("output_k_eq").innerHTML = k_eq
           }
           if (!isNaN(v_max)) {
               document.getElementById("output_v_max").innerHTML = v_max.toFixed(2)
               document.getElementById("output_v_max_eq").innerHTML = v_max_eq
           }
           if (!isNaN(v_c)) {
               document.getElementById("output_v_c").innerHTML = v_c.toFixed(2)
               document.getElementById("output_v_c_eq").innerHTML = v_c_eq
           }
           if (!isNaN(v_r)) {
               document.getElementById("output_v_r").innerHTML = v_r.toFixed(2)
               document.getElementById("output_v_r_eq").innerHTML = v_r_eq
           }
           if (!isNaN(v_f)) {
               document.getElementById("output_v_f").innerHTML = v_f.toFixed(2)
               document.getElementById("output_v_f_eq").innerHTML = v_f_eq
           }
           if (!isNaN(u_0)) {
               document.getElementById("output_u_0").innerHTML = u_0.toFixed(0)
               document.getElementById("output_u_0_eq").innerHTML = u_0_eq
           }
           if (!isNaN(u_1)) {
               document.getElementById("output_u_1").innerHTML = u_1.toFixed(0)
               document.getElementById("output_u_1_eq").innerHTML = u_1_eq
           }
      
           // if (!isNaN(A_u_0)) {
           //     document.getElementById("output_A_u_0").innerHTML = A_u_0.toFixed(2)
           //     document.getElementById("output_A_u_0_eq").innerHTML = A_u_0_eq
           // }
           // if (!isNaN(A_u_1)) {
           //     document.getElementById("output_A_u_1").innerHTML = A_u_1.toFixed(2)
           //     document.getElementById("output_A_u_1_eq").innerHTML = A_u_1_eq
           // }
           // if (!isNaN(V_Ed_red_0_dr_st)) {
           //     document.getElementById("output_V_Ed_red_0_dr_st").innerHTML = V_Ed_red_0_dr_st.toFixed(2)
           //     document.getElementById("output_V_Ed_red_0_dr_st_eq").innerHTML = V_Ed_red_0_dr_st_eq
           // }
           // if (!isNaN(V_Ed_red_0_dr_lt)) {
           //     document.getElementById("output_V_Ed_red_0_dr_lt").innerHTML = V_Ed_red_0_dr_lt.toFixed(2)
           //     document.getElementById("output_V_Ed_red_0_dr_lt_eq").innerHTML = V_Ed_red_0_dr_lt_eq
           // }
           // if (!isNaN(V_Ed_red_0_ud_st)) {
           //     document.getElementById("output_V_Ed_red_0_ud_st").innerHTML = V_Ed_red_0_ud_st.toFixed(2)
           //     document.getElementById("output_V_Ed_red_0_ud_st_eq").innerHTML = V_Ed_red_0_ud_st_eq
           // }
           // if (!isNaN(V_Ed_red_0_ud_lt)) {
           //     document.getElementById("output_V_Ed_red_0_ud_lt").innerHTML = V_Ed_red_0_ud_lt.toFixed(2)
           //     document.getElementById("output_V_Ed_red_0_ud_lt_eq").innerHTML = V_Ed_red_0_ud_lt_eq
           // }
           // if (!isNaN(V_Ed_red_0)) {
           //     document.getElementById("output_V_Ed_red_0").innerHTML = V_Ed_red_0
           // }
           // if (!isNaN(V_Ed_red_0_internal)) {
           //     document.getElementById("output_V_Ed_red_0_internal").innerHTML = V_Ed_red_0_internal.toFixed(2)
           //     document.getElementById("output_V_Ed_red_0_internal_eq").innerHTML = V_Ed_red_0_internal_eq
           // }
           // if (!isNaN(V_Ed_red_0_dim)) {
           //     document.getElementById("output_V_Ed_red_0_dim").innerHTML = V_Ed_red_0_dim.toFixed(2)
           //     document.getElementById("output_V_Ed_red_0_dim_eq").innerHTML = V_Ed_red_0_dim_eq
           // }
           // if (!isNaN(V_Ed_red_1_dr_st)) {
           //     document.getElementById("output_V_Ed_red_1_dr_st").innerHTML = V_Ed_red_1_dr_st.toFixed(2)
           //     document.getElementById("output_V_Ed_red_1_dr_st_eq").innerHTML = V_Ed_red_1_dr_st_eq
           // }
           // if (!isNaN(V_Ed_red_1_dr_lt)) {
           //     document.getElementById("output_V_Ed_red_1_dr_lt").innerHTML = V_Ed_red_1_dr_lt.toFixed(2)
           //     document.getElementById("output_V_Ed_red_1_dr_lt_eq").innerHTML = V_Ed_red_1_dr_lt_eq
           // }
           // if (!isNaN(V_Ed_red_1_ud_st)) {
           //     document.getElementById("output_V_Ed_red_1_ud_st").innerHTML = V_Ed_red_1_ud_st.toFixed(2)
           //     document.getElementById("output_V_Ed_red_1_ud_st_eq").innerHTML = V_Ed_red_1_ud_st_eq
           // }
   
           // if (!isNaN(V_Ed_red_1_ud_lt)) {
           //     document.getElementById("output_V_Ed_red_1_ud_lt").innerHTML = V_Ed_red_1_ud_lt.toFixed(2)
           //     document.getElementById("output_V_Ed_red_1_ud_lt_eq").innerHTML = V_Ed_red_1_ud_lt_eq
           // }
           // if (!isNaN(V_Ed_red_1)) {
           //     document.getElementById("output_V_Ed_red_1").innerHTML = V_Ed_red_1
           // }
   
           // if (!isNaN(V_Ed_red_1_internal)) {
           //     document.getElementById("output_V_Ed_red_1_internal").innerHTML = V_Ed_red_1_internal.toFixed(2)
           //     document.getElementById("output_V_Ed_red_1_internal_eq").innerHTML = V_Ed_red_1_internal_eq
           // }
           // if (!isNaN(V_Ed_red_1_dim)) {
           //     document.getElementById("output_V_Ed_red_1_dim").innerHTML = V_Ed_red_1_dim.toFixed(2)
           //     document.getElementById("output_V_Ed_red_1_dim_eq").innerHTML = V_Ed_red_1_dim_eq
           // }
           if (!isNaN(P_u_0)) {
               document.getElementById("output_P_u_0").innerHTML = P_u_0.toFixed(2)
               document.getElementById("output_P_u_0_eq").innerHTML = P_u_0_eq
           }
           if (!isNaN(P_u_1)) {
               document.getElementById("output_P_u_1").innerHTML = P_u_1.toFixed(2)
               document.getElementById("output_P_u_1_eq").innerHTML = P_u_1_eq
           }
           if (!isNaN(P_u)) {
               document.getElementById("output_P_u").innerHTML = P_u.toFixed(2)
               document.getElementById("output_P_u_eq").innerHTML = P_u_eq
           }
   
       }
   
       
       $('#mPDFPrint').on('click', function() {
   
           document.querySelectorAll(".removeMe").forEach(el => el.remove());
           
           //GEOMETRY
       
           $('.length').html(length.toFixed(0))
           $('.width').html(width.toFixed(0))
           $('.rec_volume').html(volume.toFixed(4))
           $('.radius').html(radius.toFixed(2))
           $('.cir_volume').html(volume.toFixed(4))
           $('.depth').html(depth.toFixed(0))
           $('.height').html(height.toFixed(0))
           $('.column_shape_rec_length').html(column_length.toFixed(0))
           $('.column_shape_rec_width').html(column_width.toFixed(0))
           $('.column_shape_cir_radius').html(column_radius.toFixed(0))
           $('.column_eccentricity_length').html(ec_vl_length.toFixed(0))
           $('.column_eccentricity_width').html(ec_vl_width.toFixed(0))
       
           //REINFORCEMENT
           $('.fiber_dosage_kg').html(fiber_dosage_kg)
           $('.f_R_1').html(f_R_1.toFixed(2))
           $('.f_R_2').html(f_R_2.toFixed(2))
           $('.f_R_3').html(f_R_3.toFixed(2))
           $('.f_R_4').html(f_R_4.toFixed(2))
           $('.sigma_r1').html(sigma_r1.toFixed(2))
           $('.sigma_r4').html(sigma_r4.toFixed(2))
           $('.steel_quality_val').html(steel_quality)
           $('.steel_mesh_val').html(steel_mesh_type)
           $('.cover_layer_env').html(cover_layer_env)
       
           if(typeof cover_layer !== 'undefined') {
               $('.cover_layer_val').html(cover_layer)
           }
           
       
           //DIAGRAMS
       
           //BIBLIOGRAPHY
       
           // //GEOTECHNICAL PARAMETERS AND RANKINE PRESSURE HIDE/SHOW
           // if(ground_type == 'drained') {
       
               
       
           //     $('.undrained').remove()
           //     $('.undrained_H_res').remove()
           //     $('.both_H_res').remove()
           //     $('.undrained_R_total').remove()
           //     $('.both_R_total').remove()
       
           //     $('.undrained_H_total').remove()
           //     $('.both_H_total').remove()
       
           // } else if(ground_type == 'undrained') {
           //     $('.drained').remove()
           //     $('.drained_H_res').remove()
           //     $('.both_H_res').remove()
           //     $('.drained_R_total').remove()
           //     $('.both_R_total').remove()
       
           //     $('.drained_H_total').remove()
           //     $('.both_H_total').remove()
       
           // } else if(ground_type == 'both') {
           //     $('.drained_H_res').remove()
           //     $('.undrained_H_res').remove()
           //     $('.drained_R_total').remove()
           //     $('.undrained_R_total').remove()
       
           //     $('.drained_H_total').remove()
           //     $('.undrained_H_total').remove()
       
           // }
       
           
       
           // var a = $('.g_eq').html()
           // var b = "g =";
           // var position = 3;
           // var output = [a.slice(0, position), b, a.slice(position)].join('');
           // console.log(output);
       
           //GEOTECHNICAL PARAMETERS
           $('.ground_density').html(ground_density)
           
           $('.q').html(q.toFixed(2))
           $('.g').html(g.toFixed(2))
           $('.dr_st_af_k').html(dr_st_af_k)
           $('.dr_lt_af_k').html(dr_lt_af_k)
           $('.ud_st_af_k').html(ud_st_af_k)
           $('.ud_lt_af_k').html(ud_lt_af_k)
           $('.af_pc').html(af_pc)
           $('.dr_st_af_d').html(dr_st_af_d.toFixed(1))
           $('.dr_lt_af_d').html(dr_lt_af_d.toFixed(1))
           $('.ud_st_af_d').html(ud_st_af_d.toFixed(1))
           $('.ud_lt_af_d').html(ud_lt_af_d.toFixed(1))
           $('.dr_st_cohesion_k').html(dr_st_cohesion_k.toFixed(1))
           $('.dr_lt_cohesion_k').html(dr_lt_cohesion_k.toFixed(1))
           $('.ud_st_cohesion_k').html(ud_st_cohesion_k.toFixed(1))
           $('.ud_lt_cohesion_k').html(ud_lt_cohesion_k.toFixed(1))
           $('.dr_cohesion_pc').html(dr_cohesion_pc.toFixed(1))
           $('.ud_cohesion_pc').html(ud_cohesion_pc.toFixed(1))
           $('.dr_st_cohesion_d').html(dr_st_cohesion_d.toFixed(1))
           $('.dr_lt_cohesion_d').html(dr_lt_cohesion_d.toFixed(1))
           $('.ud_st_cohesion_d').html(ud_st_cohesion_d.toFixed(1))
           $('.ud_lt_cohesion_d').html(ud_lt_cohesion_d.toFixed(1))
           $('.a_d_dr_st').html(a_d_dr_st.toFixed(1))
           $('.a_d_dr_lt').html(a_d_dr_lt.toFixed(1))
           $('.d_q').html(d_q.toFixed(1))
           $('.d_c').html(d_c.toFixed(1))
       
           //RANKINE PRESSURE
           $('.K_g_a_dr_st').html(K_g_a_dr_st.toFixed(2))
           $('.K_g_a_dr_lt').html(K_g_a_dr_lt.toFixed(2))
           $('.K_g_a_ud_st').html(K_g_a_ud_st.toFixed(2))
           $('.K_g_a_ud_lt').html(K_g_a_ud_lt.toFixed(2))
           $('.K_p_a_dr_st').html(K_p_a_dr_st.toFixed(2))
           $('.K_p_a_dr_lt').html(K_p_a_dr_lt.toFixed(2))
           $('.K_p_a_ud_st').html(K_p_a_ud_st.toFixed(2))
           $('.K_p_a_ud_lt').html(K_p_a_ud_lt.toFixed(2))
           $('.K_c_a_dr_st').html(K_c_a_dr_st.toFixed(2))
           $('.K_c_a_dr_lt').html(K_c_a_dr_lt.toFixed(2))
           $('.K_c_a_ud_st').html(K_c_a_ud_st.toFixed(2))
           $('.K_c_a_ud_lt').html(K_c_a_ud_lt.toFixed(2))
           $('.K_g_p_dr_st').html(K_g_p_dr_st.toFixed(2))
           $('.K_g_p_dr_lt').html(K_g_p_dr_lt.toFixed(2))
           $('.K_g_p_ud_st').html(K_g_p_ud_st.toFixed(2))
           $('.K_g_p_ud_lt').html(K_g_p_ud_lt.toFixed(2))
           $('.K_p_p_dr_st').html(K_p_p_dr_st.toFixed(2))
           $('.K_p_p_dr_lt').html(K_p_p_dr_lt.toFixed(2))
           $('.K_p_p_ud_st').html(K_p_p_ud_st.toFixed(2))
           $('.K_p_p_ud_lt').html(K_p_p_ud_lt.toFixed(2))
           $('.K_c_p_dr_st').html(K_c_p_dr_st.toFixed(2))
           $('.K_c_p_dr_lt').html(K_c_p_dr_lt.toFixed(2))
           $('.K_c_p_ud_st').html(K_c_p_ud_st.toFixed(2))
           $('.K_c_p_ud_lt').html(K_c_p_ud_lt.toFixed(2))
           $('.d_0_dr_st').html(d_0_dr_st.toFixed(0))
           $('.d_0_dr_lt').html(d_0_dr_lt.toFixed(0))
           $('.d_0_ud_st').html(d_0_ud_st.toFixed(0))
           $('.d_0_ud_lt').html(d_0_ud_lt.toFixed(0))
           $('.F_a_dr_st_l').html(F_a_dr_st_l.toFixed(2))
           $('.F_a_dr_lt_l').html(F_a_dr_lt_l.toFixed(2))
           $('.F_a_ud_st_l').html(F_a_ud_st_l.toFixed(2))
           $('.F_a_ud_lt_l').html(F_a_ud_lt_l.toFixed(2))
           $('.F_a_dr_lt_r').html(F_a_dr_lt_r.toFixed(2))
           $('.F_p_dr_lt_l').html(F_p_dr_lt_l.toFixed(2))
           $('.F_p_ud_st_l').html(F_p_ud_st_l.toFixed(2))
           $('.F_p_ud_lt_l').html(F_p_ud_lt_l.toFixed(2))
           $('.F_a_dr_st_b').html(F_a_dr_st_b.toFixed(2))
           $('.F_a_dr_lt_b').html(F_a_dr_lt_b.toFixed(2))
           $('.F_a_ud_st_b').html(F_a_ud_st_b.toFixed(2))
           $('.F_a_ud_lt_b').html(F_a_ud_lt_b.toFixed(2))
           $('.F_p_dr_st_l').html(F_p_dr_st_l.toFixed(2))
           $('.F_p_dr_st_b').html(F_p_dr_st_b.toFixed(2))
           $('.F_p_dr_lt_b').html(F_p_dr_lt_b.toFixed(2))
           $('.F_p_ud_st_b').html(F_p_ud_st_b.toFixed(2))
           $('.F_p_ud_lt_b').html(F_p_ud_lt_b.toFixed(2))
           $('.F_a_dr_st_r').html(F_a_dr_st_r.toFixed(2))
           $('.F_a_dr_lt_r').html(F_a_dr_lt_r.toFixed(2))
           $('.F_a_ud_st_r').html(F_a_ud_st_r.toFixed(2))
           $('.F_a_ud_lt_r').html(F_a_ud_lt_r.toFixed(2))
           $('.F_p_dr_st_r').html(F_p_dr_st_r.toFixed(2))
           $('.F_p_dr_lt_r').html(F_p_dr_lt_r.toFixed(2))
           $('.F_p_ud_st_r').html(F_p_ud_st_r.toFixed(2))
           $('.F_p_ud_lt_r').html(F_p_ud_lt_r.toFixed(2))
           $('.h_res_dr_st_l').html(h_res_dr_st_l.toFixed(2))
           $('.h_res_dr_st_b').html(h_res_dr_st_b.toFixed(2))
           $('.h_res_dr_lt_l').html(h_res_dr_lt_l.toFixed(2))
           $('.h_res_dr_lt_b').html(h_res_dr_lt_b.toFixed(2))
           $('.h_res_ud_st_l').html(h_res_ud_st_l.toFixed(2))
           $('.h_res_ud_st_b').html(h_res_ud_st_b.toFixed(2))
           $('.h_res_ud_lt_l').html(h_res_ud_lt_l.toFixed(2))
           $('.h_res_ud_lt_b').html(h_res_ud_lt_b.toFixed(2))
           $('.H_res_dr_st').html(H_res_dr_st.toFixed(2))
           $('.H_res_dr_lt').html(H_res_dr_lt.toFixed(2))
           $('.H_res_ud_st').html(H_res_ud_st.toFixed(2))
           $('.H_res_ud_lt').html(H_res_ud_lt.toFixed(2))
           $('.H_res_both').html(H_res_both.toFixed(2))
           $('.h_cg_a_dr_st').html(h_cg_a_dr_st.toFixed(0))
           $('.h_cg_a_dr_lt').html(h_cg_a_dr_lt.toFixed(0))
           $('.h_cg_a_ud_st').html(h_cg_a_ud_st.toFixed(0))
           $('.h_cg_a_ud_lt').html(h_cg_a_ud_lt.toFixed(0))
           $('.h_cg_p_dr_st').html(h_cg_p_dr_st.toFixed(0))
           $('.h_cg_p_dr_lt').html(h_cg_p_dr_lt.toFixed(0))
           $('.h_cg_p_ud_st').html(h_cg_p_ud_st.toFixed(0))
           $('.h_cg_p_ud_lt').html(h_cg_p_ud_lt.toFixed(0))
       
           //LOADS
           
           $('.vl_external').html(vl_external.toFixed(2))
           $('.terrain_live_load').html(terrain_live_load.toFixed(2))
           $('.concrete_density').html(concrete_density.toFixed(2))
           $('.self_weight').html(self_weight.toFixed(2))
           $('.ground_area').html(ground_area.toFixed(2))
           $('.ground_weight').html(ground_weight.toFixed(2))
           $('.vl_total_dr_st').html(vl_total_dr_st.toFixed(2))
           $('.hl_length').html(hl_length.toFixed(2))
           $('.hl_width').html(hl_width.toFixed(2))
           $('.hl_total').html(hl_total.toFixed(2))
           $('.height_p_hor').html(height_p_hor.toFixed(0))
       
           //MOMENTS
           $('.m_h_length').html(m_h_length.toFixed(2))
           $('.m_h_width').html(m_h_width.toFixed(2))
           $('.m_v_dr_st_length').html(m_v_dr_st_length.toFixed(2))
           $('.m_v_dr_st_width').html(m_v_dr_st_width.toFixed(2))
           $('.m_F_a_dr_st_l').html(m_F_a_dr_st_l.toFixed(2))
           $('.m_F_a_dr_lt_l').html(m_F_a_dr_lt_l.toFixed(2))
           $('.m_F_a_ud_st_l').html(m_F_a_ud_st_l.toFixed(2))
           $('.m_F_a_ud_lt_l').html(m_F_a_ud_lt_l.toFixed(2))
           $('.m_F_p_dr_st_l').html(m_F_p_dr_st_l.toFixed(2))
           $('.m_F_p_dr_lt_l').html(m_F_p_dr_lt_l.toFixed(2))
           $('.m_F_p_ud_st_l').html(m_F_p_ud_st_l.toFixed(2))
           $('.m_F_p_ud_lt_l').html(m_F_p_ud_lt_l.toFixed(2))
           $('.m_F_a_dr_st_b').html(m_F_a_dr_st_b.toFixed(2))
           $('.m_F_a_dr_lt_b').html(m_F_a_dr_lt_b.toFixed(2))
           $('.m_F_a_ud_st_b').html(m_F_a_ud_st_b.toFixed(2))
           $('.m_F_a_ud_lt_b').html(m_F_a_ud_lt_b.toFixed(2))
           $('.m_F_p_dr_st_b').html(m_F_p_dr_st_b.toFixed(2))
           $('.m_F_p_dr_lt_b').html(m_F_p_dr_lt_b.toFixed(2))
           $('.m_F_p_ud_st_b').html(m_F_p_ud_st_b.toFixed(2))
           $('.m_F_p_ud_lt_b').html(m_F_p_ud_lt_b.toFixed(2))
           $('.m_length').html(m_length.toFixed(2))
           $('.m_width').html(m_width.toFixed(2))
           $('.m_total_dr_st_l').html(m_total_dr_st_l.toFixed(2))
           $('.m_total_dr_lt_l').html(m_total_dr_lt_l.toFixed(2))
           $('.m_total_ud_st_l').html(m_total_ud_st_l.toFixed(2))
           $('.m_total_ud_lt_l').html(m_total_ud_lt_l.toFixed(2))
           $('.m_total_dr_st_b').html(m_total_dr_st_b.toFixed(2))
           $('.m_total_dr_lt_b').html(m_total_dr_lt_b.toFixed(2))
           $('.m_total_ud_st_b').html(m_total_ud_st_b.toFixed(2))
           $('.m_total_ud_lt_b').html(m_total_ud_lt_b.toFixed(2))
       
           //EFFECTIVE DIMENSIONS
           $('.e_total_dr_st_l').html(e_total_dr_st_l.toFixed(0))
           $('.e_total_dr_lt_l').html(e_total_dr_lt_l.toFixed(0))
           $('.e_total_ud_st_l').html(e_total_ud_st_l.toFixed(0))
           $('.e_total_ud_lt_l').html(e_total_ud_lt_l.toFixed(0))
           $('.e_total_dr_st_b').html(e_total_dr_st_b.toFixed(0))
           $('.e_total_dr_lt_b').html(e_total_dr_lt_b.toFixed(0))
           $('.e_total_ud_st_b').html(e_total_ud_st_b.toFixed(0))
           $('.e_total_ud_lt_b').html(e_total_ud_lt_b.toFixed(0))
           $('.ef_dr_st_l').html(ef_dr_st_l.toFixed(0))
           $('.ef_dr_lt_l').html(ef_dr_lt_l.toFixed(0))
           $('.ef_ud_st_l').html(ef_ud_st_l.toFixed(0))
           $('.ef_ud_lt_l').html(ef_ud_lt_l.toFixed(0))
           $('.ef_dr_st_b').html(ef_dr_st_b.toFixed(0))
           $('.ef_dr_lt_b').html(ef_dr_lt_b.toFixed(0))
           $('.ef_ud_st_l').html(ef_ud_st_l.toFixed(0))
           $('.ef_ud_lt_b').html(ef_ud_lt_b.toFixed(0))
           $('.A_eff_dr_st').html(A_eff_dr_st.toFixed(0))
           $('.A_eff_dr_lt').html(A_eff_dr_lt.toFixed(0))
           $('.A_eff_ud_st').html(A_eff_ud_st.toFixed(0))
           $('.A_eff_ud_lt').html(A_eff_ud_lt.toFixed(0))
       
           //GROUND BEARING CAPACITIES
           $('.N_q_dr_st').html(N_q_dr_st.toFixed(2))
           $('.N_q_dr_lt').html(N_q_dr_lt.toFixed(2))
           $('.N_q_ud_st').html(N_q_ud_st.toFixed(2))
           $('.N_q_ud_lt').html(N_q_ud_lt.toFixed(2))
           $('.N_c_dr_st').html(N_c_dr_st.toFixed(2))
           $('.N_c_dr_lt').html(N_c_dr_lt.toFixed(2))
           $('.N_c_ud_st').html(N_c_ud_st.toFixed(2))
           $('.N_c_ud_lt').html(N_c_ud_lt.toFixed(2))
           $('.N_g_dr_st').html(N_g_dr_st.toFixed(2))
           $('.N_g_dr_lt').html(N_g_dr_lt.toFixed(2))
           $('.N_g_ud_st').html(N_g_ud_st.toFixed(2))
           $('.N_g_ud_lt').html(N_g_ud_lt.toFixed(2))
           $('.s_g_dr_st').html(s_g_dr_st.toFixed(2))
           $('.s_g_dr_lt').html(s_g_dr_lt.toFixed(2))
           $('.s_g_ud_st').html(s_g_ud_st.toFixed(2))
           $('.s_g_ud_lt').html(s_g_ud_lt.toFixed(2))
           $('.s_c_dr_st').html(s_c_dr_st.toFixed(2))
           $('.s_c_dr_lt').html(s_c_dr_lt.toFixed(2))
           $('.s_c_ud_st').html(s_c_ud_st.toFixed(2))
           $('.s_c_ud_lt').html(s_c_ud_lt.toFixed(2))
           $('.s_q_dr_st').html(s_q_dr_st.toFixed(2))
           $('.s_q_dr_lt').html(s_q_dr_lt.toFixed(2))
           $('.s_q_ud_st').html(s_q_ud_st.toFixed(2))
           $('.s_q_ud_lt').html(s_q_ud_lt.toFixed(2))
           $('.i_q_dr_st').html(i_q_dr_st.toFixed(2))
           $('.i_q_dr_lt').html(i_q_dr_lt.toFixed(2))
           $('.i_q_ud_st').html(i_q_ud_st.toFixed(2))
           $('.i_q_ud_lt').html(i_q_ud_lt.toFixed(2))
           $('.i_g_dr_st').html(i_g_dr_st.toFixed(2))
           $('.i_g_dr_lt').html(i_g_dr_lt.toFixed(2))
           $('.i_g_ud_st').html(i_g_ud_st.toFixed(2))
           $('.i_g_ud_lt').html(i_g_ud_lt.toFixed(2))
           $('.i_c_dr_st').html(i_c_dr_st.toFixed(2))
           $('.i_c_dr_lt').html(i_c_dr_lt.toFixed(2))
           $('.i_c_ud_st').html(i_c_ud_st.toFixed(2))
           $('.i_c_ud_lt').html(i_c_ud_lt.toFixed(2))
           $('.R_q_dr_st').html(R_q_dr_st.toFixed(2))
           $('.R_q_dr_lt').html(R_q_dr_lt.toFixed(2))
           $('.R_q_ud_st').html(R_q_ud_st.toFixed(2))
           $('.R_q_ud_lt').html(R_q_ud_lt.toFixed(2))
           $('.R_c_dr_st').html(R_c_dr_st.toFixed(2))
           $('.R_c_dr_lt').html(R_c_dr_lt.toFixed(2))
           $('.R_c_ud_st').html(R_c_ud_st.toFixed(2))
           $('.R_c_ud_lt').html(R_c_ud_lt.toFixed(2))
           $('.R_g_dr_st').html(R_g_dr_st.toFixed(2))
           $('.R_g_dr_lt').html(R_g_dr_lt.toFixed(2))
           $('.R_g_ud_st').html(R_g_ud_st.toFixed(2))
           $('.R_g_ud_lt').html(R_g_ud_lt.toFixed(2))
           $('.R_total_dr_st').html(R_total_dr_st.toFixed(2))
           $('.R_total_dr_lt').html(R_total_dr_lt.toFixed(2))
           $('.R_total_ud_st').html(R_total_ud_st.toFixed(2))
           $('.R_total_ud_lt').html(R_total_ud_lt.toFixed(2))
           $('.R_total').html(R_total.toFixed(2))
       
           $('.H_dr_st').html(H_dr_st.toFixed(2))
           $('.H_dr_lt').html(H_dr_lt.toFixed(2))
           $('.H_ud_st').html(H_ud_st.toFixed(2))
           $('.H_ud_lt').html(H_ud_lt.toFixed(2))
           $('.H_total').html(H_total.toFixed(2))
       
           //CONCRETE BEARING CAPACITIES
           $('.concrete_type_text').html(concrete_type_text)
           $('.f_ck').html(f_ck.toFixed(2))
           $('.gamma_c').html(gamma_c.toFixed(2))
           $('.f_cd').html(f_cd.toFixed(2))
           $('.fiber_dosage_kg').html(fiber_dosage_kg)
           $('.gamma_m').html(gamma_m.toFixed(2))
           $('.f_yk').html(f_yk.toFixed(2))
           $('.gamma_s').html(gamma_s.toFixed(2))
           $('.f_yd').html(f_yd.toFixed(2))
           $('.A_s').html(A_s.toFixed(2))
           $('.A_c').html(A_c.toFixed(2))
           $('.rho').html(rho.toFixed(2))
           $('.h_ux').html(h_ux.toFixed(2))
           $('.ef_height').html(ef_height.toFixed(2))
           $('.eta').html(eta.toFixed(2))
           $('.omega').html(omega.toFixed(2))
           $('.mu').html(mu.toFixed(2))
           $('.eta').html(eta.toFixed(2))
           $('.M_p').html(M_p.toFixed(2))
           $('.M_p_l').html(M_p_l.toFixed(2))
           $('.M_p_b').html(M_p_b.toFixed(2))
           $('.v').html(v.toFixed(2))
           $('.v_max').html(v_max.toFixed(2))
           $('.k').html(k.toFixed(2))
           $('.v_c').html(v_c.toFixed(2))
           $('.v_r').html(v_r.toFixed(2))
           $('.v_f').html(v_f.toFixed(2))
           $('.u_0').html(u_0.toFixed(2))
           $('.u_1').html(u_1.toFixed(2))
           $('.P_u_0').html(P_u_0.toFixed(2))
           $('.P_u_1').html(P_u_1.toFixed(2))
           $('.P_u').html(P_u.toFixed(2))
       
       })
   
   
   
       // Evaluate Mathjax after JS processed
       MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
   
   }
   
   