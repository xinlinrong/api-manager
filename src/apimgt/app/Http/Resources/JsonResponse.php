<?php
namespace App\Http\Resources;

/**
 * @class JsonResponse
 * 
 * @description: Json 返回对象结构
 * 
 * @author linxr
 *
 */
class JsonResponse
{
    /**
     * 错误码
     * @var integer
     */
    public $code = 0;

    /**
     * 错误消息
     * @var string
     */
    public $message = '';

    /**
     * 返回对象
     * @var mixed
     */
    public $data = null;

    /**
     * Json 返回结果对象的构造函数
     * @param int $code
     * @param String $message
     * @param mixed $data
     */
    public function __construct(
        int $code,
        String $message,
        $data = null)
    {
        $this->code = $code;
        $this->message = $message;
        $this->data = $data;
    }
}