import "../db";

import Notice from "../models/Notice";
import { ObjectId } from "mongoose";

export const getNoticesController = async (req, res) => {
  const tasks = await Notice.find();
  return res.status(200).json(tasks);
};

export const getNoticeController = async (req, res) => {
  const task = await Notice.findById(req.params.id);
  res.status(200).json(task);
};

export const createNoticesController = async (req, res) => {
  const { title, description, content } = req.body;
  const newNotice = new Notice({ title, description, content });
  await newNotice.save();
  return res.status(200).json({
    message: "Noticia guardada correctamente",
    noticeCreated: newNotice
  });
};

export const updateNoticeController = async (req, res) => {
  const { id } = req.params;
  const updatedNotice = await Notice.findByIdAndUpdate(id, req.body);
  return res.status(200).json({
    message: "Noticia actualizada correctamente",
    noticeUpdated: updatedNotice
  });
};

export const deleteNoticeController = async (req, res) => {
  const { id } = req.params;
  await Notice.findByIdAndDelete(id);
  return res.status(200).json({
    message: "Notice deleted correctly"
  });
};
