import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from './config/cors';
import indexRouter from './routes/index';

const app = express();

/**
 * Configure CORS with allowed origins
 */

app.use(cors);

/**
 * View engine setup
 */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

/**
 * Catch 404 and forward to error handler
 */

app.use(function(req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

interface Error {
  status?: number;
  message?: string;
}

/**
 * Error handler
 */

app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
