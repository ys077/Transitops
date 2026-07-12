import { Request, Response } from 'express';
import prisma from '../../lib/prisma.js';
import { DriverStatus } from '../../generated/prisma/index.js';

export const getDrivers = async (req: Request, res: Response) => {
  try {
    const { status } = req.query;
    const filter = status ? { status: status as DriverStatus } : {};

    const drivers = await prisma.driver.findMany({ where: filter });
    res.json({ success: true, data: drivers });
  } catch (error) {
    console.error('getDrivers error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export const getDriverById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const driver = await prisma.driver.findUnique({ where: { id } });

    if (!driver) {
      return res.status(404).json({ success: false, error: 'Driver not found' });
    }
    res.json({ success: true, data: driver });
  } catch (error) {
    console.error('getDriverById error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export const createDriver = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    // ensure date is parsed if sent as string
    if (data.licenseExpiryDate) {
      data.licenseExpiryDate = new Date(data.licenseExpiryDate);
    }
    const driver = await prisma.driver.create({ data });
    res.status(201).json({ success: true, data: driver });
  } catch (error: any) {
    console.error('createDriver error:', error);
    if (error.code === 'P2002') {
      return res.status(409).json({ success: false, error: 'License number already exists' });
    }
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export const updateDriver = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const data = req.body;

    if (data.licenseExpiryDate) {
      data.licenseExpiryDate = new Date(data.licenseExpiryDate);
    }

    const driver = await prisma.driver.update({
      where: { id },
      data,
    });

    res.json({ success: true, data: driver });
  } catch (error: any) {
    console.error('updateDriver error:', error);
    if (error.code === 'P2025') {
      return res.status(404).json({ success: false, error: 'Driver not found' });
    }
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export const deleteDriver = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    await prisma.driver.delete({ where: { id } });
    res.json({ success: true, message: 'Driver deleted' });
  } catch (error: any) {
    console.error('deleteDriver error:', error);
    if (error.code === 'P2025') {
      return res.status(404).json({ success: false, error: 'Driver not found' });
    }
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};
