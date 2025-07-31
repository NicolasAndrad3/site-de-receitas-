import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-03-31.basil'
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' })
  }

  const { title, price } = req.body

  if (!title || !price) {
    return res.status(400).json({ error: 'Título e preço são obrigatórios' })
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'pix'],
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: title
            },
            unit_amount: Math.round(parseFloat(price.replace('R$', '').replace(',', '.')) * 100)
          },
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: 'https://www.cook-mind.com/sucesso',
      cancel_url: 'https://www.cook-mind.com/cancelado'
    })

    return res.status(200).json({ id: session.id })
  } catch (error) {
    console.error('Erro ao criar sessão de checkout:', error)
    return res.status(500).json({ error: 'Erro interno no servidor' })
  }
}
