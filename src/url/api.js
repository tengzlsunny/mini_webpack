// import './mock.js'
// 正式环境
// const env = 'https://tvlinkapi.ftoul.com'
// const ssoLoginUrl = `https://tvlinkapi.ftoul.com/vlink/secure/callback?type=web&url=${window.location.href}`

const env = 'https://tvlinkapi45.ftoul.com'

const ssoLoginUrl = `https://tvlinkapi45.ftoul.com/vlink/secure/callback?url=${window.location.href}`

const isloginUrl = env + '/vlink/active/mayhome/islogin'

const payTicketUrl = env + '/vlink/active/mayhome/buyDart'

const addInterestTicketUrl = env + '/vlink/active/mayhome/addTicket'

const shootUrl = env + '/vlink/active/mayhome/drawWinning'

const submitPrizeinfoUrl = env + '/vlink/active/mayhome/formWinning'

const getCoinAmountUrl = env + '/vlink/active/mayhome/getMyFB'

const myPrizeLogUrl = env + '/vlink/active/mayhome/myPrize'

const getTicketInfoUrl = env + '/vlink/active/mayhome/getTicketInfo'

export { ssoLoginUrl, isloginUrl, payTicketUrl, addInterestTicketUrl, shootUrl, submitPrizeinfoUrl, getCoinAmountUrl, myPrizeLogUrl, getTicketInfoUrl }
