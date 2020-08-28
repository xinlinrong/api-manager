<?php
declare(strict_types=1);
namespace App\Http\Requests\Passport;

use Illuminate\Foundation\Http\FormRequest as Request;
use App\Http\Requests\RequestTrait;

/**
 * class: LoginRequest
 * 
 * @description: 登录表单验证
 * 
 * @author linxr
 *
 */
class LoginRequest extends Request
{
    use RequestTrait;
    
    /**
     * @method : rules
     * 
     * @description: 验证规则
     * 
     * @return string[]
     */
    final public function rules()
    {
        return [
            'account' => 'required',
            'password' => 'required|min:6|max:20',
            'rememberme' => '',
        ];
    }

    /**
     * {@inheritDoc}
     * @see \Illuminate\Foundation\Http\FormRequest::messages()
     */
    final public function messages()
    {
        return [
            'account.required' => '请输入帐号',
            'password.required' => '请输入密码',
            'password.min' => '登录密码长度为6-20位的字符串',
            'password.max' => '登录密码长度为6-20位的字符串',
        ];
    }
}