import { Router } from "express";

import {
  getNoticesController,
  createNoticesController,
  getNoticeController,
  updateNoticeController,
  deleteNoticeController
} from "../controllers/notices.controller";

const router = Router();

const BASE_URL_API = "/api";

router
  .route(BASE_URL_API + "/notices")
  .get(getNoticesController)
  .post(createNoticesController);

router
  .route(BASE_URL_API + "/notice/:id")
  .get(getNoticeController)
  .put(updateNoticeController)
  .delete(deleteNoticeController);

export default router;
