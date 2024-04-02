import { Router } from "express";
const router = Router();
import {
  createAJob,
  deleteAJob,
  getAJob,
  getAllJobs,
  showStats,
  updateAJob,
} from "../controllers/jobController.js";
import {
  validateIdParam,
  validateJobInput,
} from "../middlewares/validationMiddleware.js";
import { checkForTestUser } from "../middlewares/authMiddleware.js";

router.post("/create", checkForTestUser, validateJobInput, createAJob);
router.get("/stats", showStats);
router.patch(
  "/update/:id",
  checkForTestUser,
  validateIdParam,
  validateJobInput,
  updateAJob
);
router.delete("/delete/:id", checkForTestUser, validateIdParam, deleteAJob);
router.get("/get/:id", validateIdParam, getAJob);
router.get("/get-all", getAllJobs);

export default router;
