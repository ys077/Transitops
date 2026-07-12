import { Request, Response } from 'express';
import prisma from '../../lib/prisma.js';
import { VehicleStatus } from '../../generated/prisma/index.js';

export const getVehicles = async (req: Request, res: Response) => {
  try {
    const { status } = req.query;
    const filter = status ? { status: status as VehicleStatus } : {};

    const vehicles = await prisma.vehicle.findMany({ where: filter });
    res.json({ success: true, data: vehicles });
  } catch (error) {
    console.error('getVehicles error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export const getVehicleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const vehicle = await prisma.vehicle.findUnique({ where: { id } });

    if (!vehicle) {
      return res.status(404).json({ success: false, error: 'Vehicle not found' });
    }
    res.json({ success: true, data: vehicle });
  } catch (error) {
    console.error('getVehicleById error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export const createVehicle = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const vehicle = await prisma.vehicle.create({ data });
    res.status(201).json({ success: true, data: vehicle });
  } catch (error: any) {
    console.error('createVehicle error:', error);
    if (error.code === 'P2002') {
      return res.status(409).json({ success: false, error: 'Registration number already exists' });
    }
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export const updateVehicle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const vehicle = await prisma.vehicle.update({
      where: { id },
      data,
    });

    res.json({ success: true, data: vehicle });
  } catch (error: any) {
    console.error('updateVehicle error:', error);
    if (error.code === 'P2025') {
      return res.status(404).json({ success: false, error: 'Vehicle not found' });
    }
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export const deleteVehicle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.vehicle.delete({ where: { id } });
    res.json({ success: true, message: 'Vehicle deleted' });
  } catch (error: any) {
    console.error('deleteVehicle error:', error);
    if (error.code === 'P2025') {
      return res.status(404).json({ success: false, error: 'Vehicle not found' });
    }
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};
