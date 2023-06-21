<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Article extends Model
{
    use HasFactory;

    protected $table = 'article';
    protected $primaryKey = 'id';

    // protected $fillable = [
    //     "id",
    //     "type",
    //     "section_id",
    //     "news_category_id",
    //     "position",
    //     "homepage",
    //     "homepage_image",
    //     "homepage_image_full_width",
    //     "homepage_slider",
    //     "sidebar",
    //     "highlight",
    //     "pick",
    //     "source",
    //     "author",
    //     "link",
    //     "date",
    //     "status",
    //     "lead",
    //     "title",
    //     "title_seo",
    //     "description_seo",
    //     "summary",
    //     "cover_image",
    //     "cover_image_caption",
    //     "body",
    //     "keywords",
    //     "attach",
    //     "visit_count",
    //     "created_at",
    //     "updated_at",
    //     "hidden",
    //     "show_blog",
    //     "link_text",
    //     "custom_thumb",
    //     "video_code",
    //     "video_url",
    //     "news_ticker",
    //     "news_ticker_json",
    //     "carousel",
    //     "video_type",
    //     "url",
    //     "code",
    //     "subtitle",
    //     "document_type_id",
    //     "document_class_id",
    //     "old_filename",
    //     "old_filename_2",
    //     "filename",
    //     "extension",
    //     "open",
    //     "tags",
    //     "description",
    // ];

    protected $appends = [
        'url_generated'
    ];

    public function getUrlGeneratedAttribute(){
        return 'http://localhost:8000/'.urlencode($this->title).'/'.$this->id;
    }

    public function micrositeSection(): BelongsToMany
    {
        return $this->belongsToMany(MicrositeSection::class, 'microsite_section_article', 'article_id', 'microsite_section_id');
    }
}
