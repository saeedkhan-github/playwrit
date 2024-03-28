class ApiUtils{
    constructor(apiContext,LoginPayLoad){
        this.apiContext= apiContext;    
        this.LoginPayLoad = LoginPayLoad;
    }

    async getToken(){

        const LoginResponse= await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login/",{
            data:LoginPayLoad});
    
        expect((await LoginResponse).ok()).toBeTruthy();
        const resJson = await LoginResponse.json();
        this.token = resJson.token;
        console.log(this.token);
        return this.token;

    
    }

    async createOrder(OrderPayLoad){
        const orderRes= await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',{
  data:OrderPayLoad,
  headers:{
    'Authorization':this.token,
    'Content-Type':'application/json'
  }
});
const orderResJson= await orderRes.json();
    }
}

module.exports = {ApiUtils}