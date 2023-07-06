<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MicrositeSectionView extends Model
{
    protected $table = 'microsite_section_view';

    public function micrositeSection(): BelongsTo
    {
        return $this->belongsTo(MicrositeSection::class, 'microsite_section_id');
    }
}
