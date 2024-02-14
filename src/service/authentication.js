import app from './connection'
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import axios from 'axios'

const authentication = getAuth(app)

export const signUpAccount = (account, alertSuccess, alertError, alertWarning) => {
    createUserWithEmailAndPassword(authentication, account.email, account.password)
    .then((userCredential) => {
        const user = userCredential.user
        const user_account = {
            email: user.email,
            username: account.username,
        }
        axios.post(`${process.env.REACT_APP_API}/sign-up-account`, user_account)
        .then((response) => {
            if(response.data.status){
                alertSuccess(response.data.payload)
            }else{
                alertError('การสร้างบัญชีล้มเหลว')
            }
        })
        .catch((error) => {
            alertError('การสร้างบัญชีล้มเหลว')
        })
    })
    .catch((error) => {
        const errorCode = error.code
        if(errorCode === 'auth/invalid-email'){
            alertWarning('รูปแบบอีเมลไม่ถูกต้อง')
        }else if(errorCode === 'auth/email-already-in-use'){
            alertWarning('มีผู้ใช้งานอีเมลนี้แล้ว กรุณาเปลี่ยนอีเมล')
        }else{
            alertError('เกิดข้อผิดพลาดที่ไม่รู้จัก')
        }
    })
}

export const resetPasswordAccount = (email, alertSuccess, alertError, alertWarning) => {
    sendPasswordResetEmail(authentication, email)
    .then(() => {
        alertSuccess('ส่งอีเมลแล้ว กรุณาตรวจสอบ')
    })
    .catch(() => {
        alertError('การกู้คืนรหัสผ่านล้มเหลว')
    })
}