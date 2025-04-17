import { sendReminders } from "../controllers/workflow.controller.js";
import { Router } from "express";

const workflowRouter = Router();
workflowRouter.get("/", sendReminders);

export default workflowRouter;