import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createFile = mutation({
  args: {
    fileName: v.string(),
    createdBy: v.string(),
    teamId: v.string(),
    archive: v.boolean(),
    document: v.string(),
    whiteBoard: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert("files", args);
    return result;
  },
});

export const getFiles = query({
  args: {
    teamId: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query("files")
      .filter((q) => q.eq(q.field("teamId"), args.teamId))
      .order("desc")
      .collect();
    return result;
  },
});

export const updateDocument = mutation({
  args: {
    _id: v.id("files"),
    document: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.patch(args._id, { document: args.document });
    return result;
  },
});

export const updateWhiteboard = mutation({
  args: {
    _id: v.id("files"),
    whiteBoard: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.patch(args._id, {
      whiteBoard: args.whiteBoard,
    });
    return result;
  },
});

export const getFileById = query({
  args: {
    _id: v.id("files"),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.get(args._id);
    return result;
  },
});

export const deleteFileById = mutation({
  args: {
    _id: v.id("files"),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.delete(args._id);
    return result;
  },
});
