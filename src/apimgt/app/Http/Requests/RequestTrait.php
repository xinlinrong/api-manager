<?php
declare(strict_types=1);
namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;

/**
 * trait: BaseRequest
 * 
 * @author linxr
 *
 */
trait  RequestTrait
{
    /**
     * {@inheritDoc}
     * @see \Illuminate\Foundation\Http\FormRequest::failedValidation()
     */
    protected function failedValidation(Validator $validator)
    {
    }
}