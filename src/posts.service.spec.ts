import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    // реализуйте тест-кейс
    const newPost = postsService.create(post);

    expect(newPost).toBeDefined();
    expect(newPost.text).toBe(post.text);
    expect(newPost.id).toBeDefined();
    expect(newPost.date).toBeDefined();
    expect(new Date(newPost.date)).toBeInstanceOf(Date);
  });

  it('should find a post', () => {
    // реализуйте тест-кейс
    const newPost = postsService.create(post);

    const postId = postsService.find(newPost.id);

    expect(postId).toEqual(newPost);
    expect(postsService.find('non-existent-id')).toBeUndefined();
  });
});