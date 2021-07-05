import { VercelResponse } from "@vercel/node";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function return200(res: VercelResponse, body: any): VercelResponse {
  return res.status(200).json(body);
}

export function return500(res: VercelResponse, name: string, symbol: string, price: string, price_BNB: string): VercelResponse {
  return res.status(500).json({
    tokens: {
     name,                    // not necessarily included for BEP20 tokens
     symbol,                  // not necessarily included for BEP20 tokens
     price,                   // price denominated in USD
     price_BNB,               // price denominated in BNB
  }
}

export function return400(res: VercelResponse, message = "Bad request"): VercelResponse {
  return returnError(res, 400, message);
}

export function return500(res: VercelResponse, error: Error): VercelResponse {
  return returnError(res, 500, error.message);
}
