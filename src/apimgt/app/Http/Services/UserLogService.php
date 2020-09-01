<?php
declare(strict_types=1);
namespace app\Http\Services;

use Illuminate\Support\Facades\Auth;

use App\Http\Models\UsersLog;

/**
 * @class UserLogService
 * 
 * @description: 记录操作员日志
 * 
 * @author linxr
 *
 */
class UserLogService
{
    public static function log(
        String $eventName,
        String $message
    )
    {
        $user = Auth::user();
        $usersLogData = [];
        $usersLogData['user_id'] = $user->id;
        $usersLogData['event_name'] = $eventName;
        $usersLogData['event_message'] = $message;
        $usersLogData['create_at'] = date("Y-m-d H:i:s");
        $userLogModel = new UsersLog($usersLogData);
        return $userLogModel->save();
    }
}