<?php
declare(strict_types=1);
namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class UsersLog extends Model
{
    const CREATED_AT = 'create_at';
    const UPDATED_AT = '';

    protected $table = 'api_sys_users_log';

    public $timestamps = false;
    
    /**
     * The attributes that are mass assignable.
     * 
     * @var array
     */
    protected $fillable = [
        'id',
        'user_id',
        'event_name',
        'event_message',
        'create_at'
    ];
}