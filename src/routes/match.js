import { v4 as uuidv4 } from "uuid";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send(Object.values(req.context.models.matches));
});

router.get("/:userId", (req, res) => {
  const allMatches = Object.values(req.context.models.matches);

  const result = allMatches.filter(
    (match) => parseInt(match.matcherId, 10) === parseInt(req.params.userId)
  );

  const resultUserData = result.map((item) => {
    const matcherId = item.matcherId;
    const matcheeId = item.matcheeId;

    const matcherData = req.context.models.users[matcherId];
    const matcheeData = req.context.models.users[matcheeId];

    console.log(matcherData, matcheeData);

    return {
      id: item.id,
      percentage: item.percentage,
      matcher: matcherData,
      matchee: matcheeData,
    };
  });

  return res.send(resultUserData);
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
