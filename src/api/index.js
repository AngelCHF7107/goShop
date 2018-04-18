
import ajax from './ajax'
//const BASE_URL = 'http://localhost:3000'
//开发环境
const BASE_URL = '/api'
// [1、获取E宠主页广告列表](##获取E宠主页广告列表)<br/>做了
export const reqProductList = () => ajax(BASE_URL+'/index')

// [2、获取E宠分类列表](#获取E宠分类列表)<br/>
export const reqClassify = () => ajax(BASE_URL+'/classify')

// [3、获取E宠品牌列表](#获取E宠品牌列表)<br/>
export const reqBrandLis = () => ajax(BASE_URL+'/brand')

// [4、获取轮播图广告和每日疯抢](#获取轮播图广告和每日疯抢)<br/>做了
export const reqCarousel = () => ajax(BASE_URL+'/carousel')

// [5、获取一次性验证码](#4获取一次性验证码)<br/>
export const reqCaptcha = () => ajax(BASE_URL+'/captcha')

// [6、用户名密码登陆](#4用户名密码登陆)<br/>
export const loginPwd = ({name , pwd}) => ajax(BASE_URL+'/login_pwd' , {name , pwd} , 'POST')

// [7、发送短信验证码](#5发送短信验证码)<br/>
export const sendCode = (phone) => ajax(BASE_URL+'/sendcode' , {phone})

// [8、手机号验证码登陆](#6手机号验证码登陆)<br/>
export const loginSms = ({phone , code}) => ajax(BASE_URL+'/login_sms' , {phone , code} , 'POST')

// [9、根据会话获取用户信息](#7根据会话获取用户信息)<br/>
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')
