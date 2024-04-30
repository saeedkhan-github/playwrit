class LoginPage{

    constructor(page){
        this.user =page.locator("//input[@id='userEmail']");
        this.userPassword =page.locator('//input[@id="userPassword"]');
        this.LoginButton=page.getByRole('button', { name: 'Login' })
    }

   async ValidLogin(useremail,userpassword){
        await this.user.fill(useremail);
        await this.userPassword.type(userpassword);
        await this.LoginButton.click();
    }
}

module.exports={LoginPage}