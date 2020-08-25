<?php
declare(strict_types=1);

namespace app\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use App\Http\Requests\Passport\LoginRequest;

/**
 * Class: Passport
 * 
 * Description: 登录控制器
 * 
 * @author linxr
 *
 */
class Passport extends BaseController
{
    use AuthorizesRequests; 
    use DispatchesJobs;
    use ValidatesRequests;

    /**
     * 展示登录页面
     */
    public function login()
    {
        return view('passport/login');
    }

    /**
     * 执行登录操作
     */
    public function doLogin(LoginRequest $request)
    {
        
    }

    /**
     * 执行登出操作
     */
    public function logout()
    {
        
    }
}