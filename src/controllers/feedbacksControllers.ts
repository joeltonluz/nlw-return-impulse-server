import { Request, Response } from 'express';
import { NodemailerMailAdapter } from '../adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from '../repositories/prisma/prismaFeedbacksRepository';
import { SubmitFeedbackUseCase } from '../use-cases/submit-feedback-use-case';

class FeedbacksController {
  async get(req: Request, res: Response) {
    res.status(405).end();
  }

  async post(req: Request, res: Response) {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();
    
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepository,
      nodemailerMailAdapter
    );

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    });  

    res.status(201).send();
  }

  async put(req: Request, res: Response) {
    res.status(405).end();
  }

  async delete(req: Request, res: Response) {
    res.status(405).end();
  }
}

export default FeedbacksController;