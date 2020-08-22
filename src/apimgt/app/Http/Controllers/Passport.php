<?php
declare(strict_types=1);

namespace app\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

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
     * 登录页面
     */
    public function login()
    {
        return view('passport/login');
    }
}