<?php
declare(strict_types=1);
namespace app\Http\Controllers;

use App\Http\Requests\Passport\LoginRequest;
use App\Http\Services\PassportService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * @class: Passport.
 *
 * @desc: 登录控制器
 *
 * @author linxr
 */
class Passport extends BaseController
{
    use AuthorizesRequests;
    use DispatchesJobs;
    use ValidatesRequests;

    /**
     * 密码服务
     *
     * @var \App\Http\Services\PassportService
     */
    private $passportService;

    /**
     * @method 构造函数
     */
    public function __construct(
        PassportService $passportService
    ) {
        $this->passportService = $passportService;
    }

    /**
     * 展示登录页面.
     */
    public function login()
    {
        return view('passport/login');
    }

    /**
     * 执行登录操作.
     */
    public function doLogin(LoginRequest $request)
    {
        $account = $request->account;
        $password = $request->password;
        $isRemember = boolval($request->post('isRemember', false));
        $response = $this->passportService->login($account, $password, $isRemember);

        return response()->json($response);
    }

    /**
     * 执行登出操作.
     */
    public function logout()
    {
    }
}
