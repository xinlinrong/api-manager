<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::beginTransaction();
        try {
            // 创建主表 api_sys_users
            Schema::create('api_sys_users', function (Blueprint $table) {
                $table->id(); // 主键
                $table->string('name', 32)->nullable(false)->comment('名称'); // 名称
                $table->string('nickname')->nullable(false)->comment('昵称');
                $table->string('email', 64)->nullable(false)->comment('电子邮箱')->unique('uidx_users_email');
                $table->string('password', 255)->nullable(false)->comment('密码');
                $table->tinyInteger('is_active', false, true)->nullable(false)->default(1)->comment('是否冻结');
                $table->string('remember_token', 64)->nullable(true)->comment('记住 "下一次登录" Token');
                $table->string('logoid', 64)->nullable(true)->default('')->comment('图片Id');
                $table->string('description', 255)->nullable(true)->default('')->comment('描述');
                $table->bigInteger('login_times', false, true)->nullable(false)->default(0)->comment('登录次数');
                $table->dateTime('last_login_at')->nullable(false)->comment('最后登录时间');
                $table->dateTime('create_at')->nullable(false)->comment('创建时间');
                $table->dateTime('update_at')->nullable(false)->comment('更新时间');
            });
    
            // 新增数据
            DB::table('api_sys_users')->insert([
                'name' => 'administrator',
                'nickname' => '管理员',
                'email' => '549716158@qq.com',
                'password' => Hash::make(md5('admin123')),
                'is_active' => 1,
                'remember_token' => '',
                'logoid' => '',
                'description' => '',
                'login_times' => 0,
                'last_login_at' => date('Y-m-d H:i:s'),
                'create_at' => date('Y-m-d H:i:s'),
                'update_at' => date('Y-m-d H:i:s'),
            ]);
            DB::commit();
        } catch (QueryException $e) {
            DB::rollBack();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('api_sys_users');
    }
}
