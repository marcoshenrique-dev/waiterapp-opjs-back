/* eslint-disable @typescript-eslint/no-unused-vars */

import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import path from 'node:path';

import AppError from '@shared/errors/AppError';

require('express-async-errors');

import { router } from './routes';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = process.env.PORT || 3001;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.use((err: Error, request: Request, response: Response, _: NextFunction) => {

      console.log(err);
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          status: 'error',
          message: err.message,
        });
      }
      return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
      });
    });


    app.listen(port, () => console.log(`🚀 Server started at http://localhost:${port}`));
  })
  .catch(() => console.log('erro ao conectar no mongodb'));



