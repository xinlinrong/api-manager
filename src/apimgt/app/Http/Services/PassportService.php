<?php
declare(strict_types=1);
namespace app\Http\Services;

use Illuminate\Support\Facades\Auth;

use App\Http\Resources\JsonResponse;
use App\Http\Constants\ErrorCode;

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
            return new JsonResponse(ErrorCode::ERROR_FAIL, "密码账号不正确");
        }
        event(new \App\Events\UserLogined(Auth::user()));
        return new JsonResponse(ErrorCode::ERROR_SUCCESS, "登录成功");
    }
}