<?php
declare(strict_types=1);
namespace app\Http\Services;

use Illuminate\Support\Facades\Auth;

use App\Http\Services\UserLogService;
use App\Http\Resources\JsonResponse;
use App\User;

/**
 * @class: PassportService
 * 
 * @description: 执行 passport 服务
 * 
 * @author linxr
 *
 */
class PassportService
{
    /**
     * 
     * @param String $account
     * @param String $password
     * @param boolean $isRemembre
     */
    public function login(
        String $account,
        String $password,
        Bool $isRemembre=false): JsonResponse
    {
        $cridential = ['email'=>$account, 'password'=>$password];
        if (!Auth::attempt($cridential, $isRemembre)) {
            return new JsonResponse(0, "密码账号不正确");
        }
        $user = Auth::user();
        
        // 记录操作日志
        UserLogService::log('login', "用户 {$user->name} 执行了登录操作");
        
        // 更新会员登录信息
        User::where(['id'=>$user->id])
                   ->update(['login_times'=>$user->login_times+1, 'last_login_at'=>date('Y-m-d H:i:s')]);

        return new JsonResponse(1, "登录成功");
    }
}