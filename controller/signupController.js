import { userModel } from "../model/userModel.js";


export async function signupPageController(req, res) {
    if (req.session.email) {
        return res.redirect('/signin');
    }
    else {
        return res.render('sign-up');
    }
}

export async function signupController(req, res) {
    const {username, email, password} = req.body ;

    userModel.create(
        {
            username: username,
            email: email,
            password: password,
        }
    ).then(() => {
        return res.redirect('/')
    }).catch((err) => {
        console.err(err) ;
    })

}