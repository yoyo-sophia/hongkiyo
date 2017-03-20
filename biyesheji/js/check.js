/**
 * Created by yoyoyo on 2017/3/12.
 */
function check(data){
    var $trueMsg =function(){
        $(".tooltip-user").css({"display":"none"});
        $(".btn-login").removeAttr("disabled").css({"backgroundColor":"#ff0000","color":"#fff"});
    }
    var $flaseMsg =function(){
        $(".tooltip-user").css({"display":"block"});
        $(".btn-login").attr("disabled","disabled").css({"backgroundColor":"#e7e7e7","color":"#333"});
        return false;
    }
    for(var i in data){
       switch(i){
           case i=="phone":if(/^1[34578]\d{9}$/.test(data[i])){
                $trueMsg;
           }else{
                $flaseMsg;
               $(".tooltip-user").html("请输入正确的手机号码！");
           }
           break;
           case i=="email":if(/^[0-9A-Za-zd]+([-_.][0-9A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/.test(data[i])){
               $trueMsg;
           }else {
               $flaseMsg;
               $(".tooltip-user").html("请输入正确的邮箱号码！");
           }
           break;
           case i=="pwd":if(/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/.test(data[i])){
               $trueMsg;
           }else{
               $flaseMsg;
               $(".tooltip-user").html("请输入格式正确的密码！");
           }
       }
    }
}