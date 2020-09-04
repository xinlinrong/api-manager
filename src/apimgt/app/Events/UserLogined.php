<?php
declare(strict_types=1);
namespace App\Events;

use Illuminate\Contracts\Auth\Authenticatable;

class UserLogined
{
    /**
     * 会员
     * @var \Illuminate\Contracts\Auth\Authenticatable
     */
    public $user;

    public function __construct(Authenticatable $user)
    {
        $this->user = $user;
    }
}