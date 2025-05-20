// src/controllers/profilesController.ts
import { Request, Response } from 'express';
import { supabase } from '../services/supabase';

export const getProfiles = async (_req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from('profiles').select('*');
  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }
  res.json(data);
};