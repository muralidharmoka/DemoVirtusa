
import Controller from '@ember/controller';
  

export default Controller.extend({
    username:'',
    password:'',

    actions:{
        login:function(){
            var  loginData={
                username:this.get('username'),
                password:this.get('password')
            };

            if(loginData.username=="" || loginData.password==""){
                alert("Enter username & Password");
                return;
            }

            var me = this;

            if(loginData.username.toUpperCase()==='ADMIN' && loginData.password.toUpperCase() ==='ADMIN')
            {
                me.transitionToRoute('home');
            }
            else
            {
                this.set('username',"");
                this.set("password","");
                
              alert("Login Failed");
            }

        },
    }
    
});
