
var BBS ={};

/* 显示栏目列表 */
BBS.left_nav = {};
BBS.left_nav.show_folder_list = function( parent )
{
	var sss = "<li class='item'> <a class='item_link' href='folder?id={#id}'> {#title} </a> </li>";
	var tpl = new AfTemplate(sss);
	var t = $(parent);
	
	for(var folder of folders)
  {
  	var str = tpl.replace( folder );
    	t.append(str);
	}
}

/* 顶部导航区, 当前用户 */
BBS.user_nav = {};
BBS.user_nav.refresh = function( parent ) 
{
	// 检查当前用户
	if( user == null){
		$(parent).html("<a href='login.html'>登录</a>");
	}else{
		$(parent).html(user.username);
		$(parent).append("<button onclick='BBS.user_nav.logout()'> 退出 </button>");
	}	
}
BBS.user_nav.logout = function(){
	Af.rest("UserLogout.api", {}, function(ans){
		location.reload(); // 刷新当前页面
	});
}
