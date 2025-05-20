// src/controllers/postsController.ts
import { Request, Response } from 'express';
import { supabase } from '../services/supabase';

export const getPosts = async (_req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from('posts').select('*');
  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }
  res.json(data);
};