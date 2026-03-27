<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Http\Resources\PostsResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller {
    public function index() {
        return PostsResource::collection(Post::paginate(20));
    }
    public function store(Request $request) {

    }
    public function show(Post $post) {
        return new PostResource($post);
    }
    public function update($id) {

    }
    public function destroy($id) {

    }
}
