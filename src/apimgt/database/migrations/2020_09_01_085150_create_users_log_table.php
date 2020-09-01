<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\QueryException;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateUsersLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        try {
            DB::beginTransaction();
            // 创建 api_sys_users_log 表
            Schema::create('api_sys_users_log', function (Blueprint $table) {
                $table->id();
                $table->integer('user_id', false, true)->nullable(false)->index('idx_log_user_id')->comment('会员Id');
                $table->string('event_name')->nullable(false)->comment('操作行为');
                $table->string('event_message', 1024)->nullable(false)->comment('操作信息');
                $table->dateTime('create_at')->nullable(false)->comment('日志创建时间');
            });
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
        Schema::dropIfExists('api_sys_users_log');
    }
}
