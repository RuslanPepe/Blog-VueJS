<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Http\Resources\PostsResource;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class PostController extends Controller {
    public function userPosts(Request $request) {
        $post = $request->user()->posts()->paginate(5);
        return PostsResource::collection($post);
    }
    public function index() {
//        $posts = Post::find(1);
//        return $posts;
        $post = Post::paginate(20);
        return PostsResource::collection($post);
    }
    public function store(PostRequest $request) {
        $post = Post::create($request->all());
        return response($post, 201);
    }
    public function show(Post $post) {
        return new PostResource($post);
    }
    public function update(PostRequest $request, Post $post) {
        $post = $post->update($request->all());
        return response($post, 202);
    }
    public function destroy(Post $post) {
        return $post->delete();
    }
}
