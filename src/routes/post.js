import { v4 as uuidv4 } from "uuid";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const allPosts = Object.values(req.context.models.posts);

  console.log(allPosts);

  const result = allPosts.map((item) => {
    const userId = item.userId;

    const userData = req.context.models.users[userId];

    return {
      id: item.id,
      text: item.text,
      imageURL: item.imageURL,
      commentsCount: item.commentsCount,
      likesCount: item.likesCount,
      createdDate: item.createdDate,
      user: userData,
    };
  });

  return res.send(result);
});

router.get("/:postId", (req, res) => {
  return res.send(req.context.models.posts[req.params.postId]);
});

router.post("/", (req, res) => {
  const id = uuidv4();
  const post = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };

  req.context.models.posts[id] = post;

  return res.send(post);
});

router.delete("/:postId", (req, res) => {
  const { [req.params.postId]: post, ...otherPosts } = req.context.models.posts;

  req.context.models.posts = otherPosts;

  return res.send(post);
});

export default router;
