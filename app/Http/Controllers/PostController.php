<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Http\Resources\PostsResource;
use App\Models\LikePosts;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class PostController extends Controller {
    public function userPosts(Request $request) {
        $post = $request->user()->posts()->paginate(5);
        return PostsResource::collection($post);
    }
    public function index(Request $request) {

        $posts = Post::withExists([
            'likedUsers as isLiked' => fn ($q) => $q->where('users.id', $request->user()->id)
        ])->paginate(20);

//        logger($posts->find(3));
//
//        $posts = Post::with('likedUsers')->paginate(20);
//        foreach ($posts as $post) {
//            $post->isLiked = $post->likedUsers->contains($request->user()->id);
//        }
//        logger($posts->find(3)->likedUsers->contains($request->user()->id));
//        return $posts->likedUsers;
//        $post = Post::paginate(20);
        return PostsResource::collection($posts);
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
    public function like(Request $request) {
        if ($request->isLiked) {
            $likepost = Post::findOrFail($request->id)
                ->likedUsers()
                ->syncWithoutDetaching([$request->user()->id]);
        }
        else {
            $likepost = Post::findOrFail($request->id)
                ->likedUsers()
                ->detach($request->user()->id);
        }

        logger($likepost);

        return $likepost;
    }

}
