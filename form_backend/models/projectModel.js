const mongoose = require('mongoose');
module.exports = mongoose.model('review1', {
    f_Coordinater: String,
    f_prgType:String,
    // f_prgTheme:String,
    f_startDate:String,
    f_endDate:String,
    f_prgDuration:String ,
    f_num_std:String,
    f_num_faculty:String,
    f_num_externals:String,
    f_num_rsrc_person:String,
    f_amount:String,
    f_mode_session:String,
    f_remarks:String,
    f_objective:String,
    f_benifits:String,
    f_img:String,
    f_img2:String,
    f_img3:String,
    f_img4:String,

    f_Quarter:String,
    f_Activity:String,
    f_Programe:String,
    f_Academic:String,
    // f_linkedInLink:String,

});