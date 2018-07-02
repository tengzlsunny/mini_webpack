var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')
var mock = new MockAdapter(axios)

const env = 'http://tvlinkapi45.ftoul.com'
const isloginUrl = env + '/vlink/active/mayhome/islogin'
const payTicketUrl = env + '/vlink/active/mayhome/buyDart'
const addInterestTicketUrl = env + '/vlink/active/mayhome/addTicket'
const shootUrl = env + '/vlink/active/mayhome/drawWinning'
const submitPrizeinfoUrl = env + '/vlink/active/mayhome/formWinning'

mock.onPost(isloginUrl).reply(200, {
    "status": 1,
    "msg": "登陆成功",
    "data": {
        "upn": "123",  
        "mobile": "18275695269",    
        "isfengmi": 0,
        "start_time":"2018-04-01 11:00:00",        
        "end_time":"2018-04-30 20:00:00",   
        "dart_num": 1,            
        "ticket_num": 2,        
        "fire_count": 3            
    }
})

mock.onPost(payTicketUrl).reply(200, {
    "status":1,
    "msg":"购买成功"
})

mock.onPost(addInterestTicketUrl).reply(200, {
    "status": 1,
    "msg": "success",
    "data": {
        "range": "机构标、蜂计划",  //适用产品
        "jiaxiqixian": 45,     //加息天数
        "investment_term": "6",   //投资期限
        "coupon_denomination": "5.18",   //加息比例
        "isfengmi": 0            //定制机会
    }
})

mock.onPost(shootUrl).reply(200, {
    "status": 1,
    "msg": "恭喜您，射中了蜂投公仔",
    "data": {
        "prize_id": 3,
        "prize_name": "蜂投公仔",
        "mold": 1,
        "win_id": "4"
    }
})

mock.onPost(submitPrizeinfoUrl).reply(200, {
    "status": 1,
    "msg": "信息提交成功"
})