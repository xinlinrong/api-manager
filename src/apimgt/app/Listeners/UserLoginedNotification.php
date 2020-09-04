<?php
declare(strict_types=1);
namespace App\Listeners;

use Illuminate\Support\Facades\Session;

use App\Events\UserLogined;
use App\Http\Services\UserLogService;
use App\User;

class UserLoginedNotification
{
    /**
     * 处理登陆成功之后
     * @param UserLogined $event
     */
    public function handle(UserLogined $event)
    {
        $user = $event->user;
        if ($user) {
            Session::put('userId', $user->getAuthIdentifier());
            Session::put('email', $user->email);
            Session::put('account', $user->account);
                
            // 记录操作日志
            UserLogService::log('login', "用户 {$user->name} 执行了登录操作");
            
            // 更新会员登录信息
            User::where(['id'=>$user->id])
            ->update(['login_times'=>$user->login_times+1, 'last_login_at'=>date('Y-m-d H:i:s')]);
        }
    }
}