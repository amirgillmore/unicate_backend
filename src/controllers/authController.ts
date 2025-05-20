// src/controllers/authController.ts
import { Request, Response } from 'express';
import { supabase } from '../services/supabase';

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    res.status(401).json({ error: error.message });
    return;
  }
  res.json(data);
};