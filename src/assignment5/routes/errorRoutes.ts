import express from "express";
import createError from "http-errors";

const router = express.Router();

router.get("/ok", (req, res) => {
  res.status(200).send("OK");
});

router.post("/create", (req, res) => {
  res.status(201).send("CREATED");
});

router.delete("/delete", (req, res) => {
  res.status(204).send();
});

router.get("/redirect-permanent", (req, res) => {
  res.redirect(301, "/redirect-permanent");
});

router.get("/redirect-temporary", (req, res) => {
  res.redirect(302, "/redirect-temporary");
});

// router.get('/bad-request',(req, res ,next) => {
//      next(createError(400, 'Bad Request Example'))
// });

// router.get('/unauthorized', (req, res, next) => {
//     next(createError(401, 'Unauthorized Example'))
// });

// router.get('/forbidden', (req, res, next) => {
//   next(createError(403, 'Forbidden Example'));
// });

// router.get('/not-found', (req, res, next) => {
//     next(createError(404, 'Not Found Example'));
// });

router.all("/method-not-allowed", (req, res, next) => {
  if (req.method !== "GET") {
    return next(createError(405, "Method Not Allowed"));
  }
  res.send("Method Allowed");
});

router.get("/internal-server-error", (req, res, next) => {
  next(createError(500, "Internal Server Error Example"));
});

export default router;
