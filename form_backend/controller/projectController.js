
const projectModel = require('../models/projectModel')

module.exports.addProjects = async (req, res) => {
    // console.log(req.file,req.body,16)
    
    const f_Coordinater= req.body.f_Coordinater
    const f_place = req.body.f_place
    const f_prgType= req.body.f_prgType
    // const f_prgTheme = req.body.f_prgTheme
    const f_startDate= req.body.f_startDate
    const f_endDate = req.body.f_endDate

    const f_prgDuration= req.body.f_prgDuration
    const f_num_std = req.body.f_num_std
    const f_num_faculty= req.body.f_num_faculty
    const f_num_externals = req.body.f_num_externals
    const f_num_rsrc_person= req.body.f_num_rsrc_person
    const f_amount = req.body.f_amount
    const f_mode_session= req.body.f_mode_session
    const  f_remarks= req.body. f_remarks
    const f_objective= req.body.f_objective
    const f_benifits = req.body.f_benifits


    const f_Activity= req.body.f_Activity
    const  f_Quarter= req.body. f_Quarter
    const f_Programe= req.body.f_Programe
    const f_Academic = req.body.f_Academic
    const f_linkedInLink=req.body.f_linkedInLink
 
    const f_img = req.files['f_img'][0].path;
    const f_img2 = req.files['f_img2'][0].path;
    const f_img3 = req.files['f_img3'][0].path;
    const f_img4 = req.files['f_img4'][0].path;
console.log(f_Coordinater,f_prgType);
    // if (!f_Coordinater || !f_place || !f_prgType || !f_prgTheme || !f_startDate || !f_endDate) {
    //     return res.send({ code: 400, message: 'Bad Request' })
    // }
    const newProject = new projectModel({ f_Coordinater: f_Coordinater, f_place: f_place ,f_img:f_img,f_prgType: f_prgType, f_startDate: f_startDate,f_endDate: f_endDate,f_prgDuration: f_prgDuration,f_num_std:f_num_std,f_num_faculty:f_num_faculty,f_num_externals:f_num_externals,f_num_rsrc_person:f_num_rsrc_person,f_amount:f_amount,f_mode_session:f_mode_session, f_remarks:f_remarks,f_objective:f_objective,f_benifits:f_benifits,f_img:f_img,f_Activity:f_Activity,f_Academic:f_Academic,f_Programe:f_Programe,f_Quarter:f_Quarter,f_linkedInLink:f_linkedInLink,  f_img2: f_img2,  f_img3: f_img3,  f_img4: f_img4})
    const success = await newProject.save()
    console.log(newProject)
    if (success) {
        return res.send({ code: 200, message: 'sucsess' })
    } else {
        return res.send({ code: 400, message: 'Backend Error' })
    }

}

module.exports.getProjects = async (req,res) => {
    const _data= await projectModel.find({})
    if(_data)
    {
        return res.send({ code: 200, message: 'sucsess', data: _data })

    }
    else{
        return res.send({ code: 400, message: 'Backend Error' })

    }
}
