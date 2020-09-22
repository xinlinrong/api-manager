<?php
declare(strict_types=1);
namespace app\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * @class: Dashboard
 * 
 * @desc: 面板控制器
 * 
 * @author linxr
 *
 */
class Dashboard extends BaseController
{
    /**
     * 控制面板首页
     * @return \Illuminate\View\View|\Illuminate\Contracts\View\Factory
     */
    public function index()
    {
        return view('dashboard/index');
    }
}