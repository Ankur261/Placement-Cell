import { Mongoose } from "mongoose";
import { userModel } from "../model/userModel.js";


export async function signinPageController(req, res) {
    console.log(req.sessionID) ;
    if(req.session.email) {
        return res.render('homepage')
    }
    else {
        return res.render('sign-in')
    }
}

export async function signinController(req, res) {

    const user = userModel.findOne({
        email: req.body.email,
        password: req.body.password
    }).then((data)=> {
       return data ;
    }).catch() ;
    if(userModel.findOne({
        email: req.body.email,
        password: req.body.password
    })) {
        console.log('fdfs')
        req.session.email = req.body.email ;
        res.redirect('/')
    } 
    else {
        console.log('wrong cred')
        return res.json({message:"wrong email or password"})
    }
}

export async function userAuth(req, res, next) {
    if(req.session.email) {
        next() ;
    }

    else {
        return res.render('sign-in') ;
    }

}

export async function signout(req, res) {
    console.log('hi')
    req.session.destroy((err) => {
        if(err) {
            console.log("error destroying session", err) ;
            res.status(500).send('Error destroying session') ;     
        }
        else {
         return res.redirect('/signin') ;       
        }
    }) ;
}
