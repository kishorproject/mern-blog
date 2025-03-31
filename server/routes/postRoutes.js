const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// ✅ GET all posts
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        console.log("Fetched Posts:", posts);
        res.json(posts);
    } catch (err) {
        console.error("Error fetching posts:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ POST create new post
router.post("/", async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = new Post({ title, content });
        await newPost.save();
        res.json({ message: "Post created successfully!" });
    } catch (err) {
        console.error("Error creating post:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
