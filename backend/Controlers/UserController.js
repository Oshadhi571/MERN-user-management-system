const User = require("../Model/UserModel");

//data display
const getAllUsers = async(req,res,next)=>{
    let Users;//assign variabel

    //rutern to all of data in database
    try{
        users=await User.find();
    }catch(err){
        console.log(err);

    }
    //not found user
    if(!users){
        return res.status(404).json({message: "User not found"});
    }
    // dispaly all users
    return res.status(200).json({users});

    
};

//data Insert 
const addUsers= async(req,res,next) =>{
    const {name,gmail,age,address}= req.body;

    let users;

    try{
        users=new User({name,gmail,age,address});
        await users.save();//save to database
    }catch(err){
        console.log(err);
    }

    // not insert users

    if(!users){
        return res.status(404).json({message:"unable to add users"});
    }
     return res.status(200).json({users});
};

 //Get buy Id
 const getById = async(req,res,next)=>{
    
    //dispaly user details used by id
    const id = req.params.id;

    let user;

    try{
        user=await User.findById(id);
    }catch(err){
        console.log(err);

    }

    // not available  users

    if(!user){
        return res.status(404).json({message:"user not founds"});
    }
     return res.status(200).json({user});
 }

 //update by id
 const updateUser= async(req,res,next)=>{
    const id = req.params.id;
    const {name, gmail,age,address}= req.body;

    let users;

    try{
        users= await User.findByIdAndUpdate(id,{name:name,gmail:gmail,age:age,address:address});
        users= await users.save();

    }catch(err){
        console.log(err);
    }

    // not available  users

    if(!users){
        return res.status(404).json({message:"Unable to update user details"});
    }
     return res.status(200).json({users});

 }

 // delete user using bu id
 const deleteUser=async(req,res,next)=>{
    const id= req.params.id;

    let user;

    try{
        user=await User.findByIdAndDelete(id)
    }catch(err){
        console.log(err);
    }


    // unable to delete user

    if(!user){
        return res.status(404).json({message:"Unable to delete user details"});
    }
     return res.status(200).json({user});
 }



// export to route
exports. getAllUsers = getAllUsers;
exports.addUsers= addUsers;
exports.getById=getById;
exports.updateUser=updateUser;
exports.deleteUser=deleteUser;