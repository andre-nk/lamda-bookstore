export type OrderLine = {
  product_id: string;
  quantity: number;
  title?: string;
  cover_img?: string;
  price?: number;
  isbn?: string;
};

export type MidtransTransactionData = {
  masked_card?: string;
  approval_code?: string;
  bank?: string;
  eci?: string;
  channel_response_code?: string;
  channel_response_message: string;
  transaction_time: string;
  gross_amount: string;
  currency: string;
  order_id: string;
  payment_type: string;
  signature_key: string;
  status_code: string;
  transaction_id: string;
  transaction_status: string;
  fraud_status: string;
  settlement_time: string;
  status_message: string;
  merchant_id: string;
  card_type?: string;
  three_ds_version?: string;
  challenge_completion?: boolean;
};

export type SnapTransaction = {
  redirect_url: string;
  token: string;
};

export type Order = {
  id: string;
  customer_id: string;
  order_lines: OrderLine[];
  total_cost: number;
  created_at: Date;
  midtrans?: MidtransTransactionData;
  midtrans_link?: string;
  midtrans_token?: string;
  shipping?: string;
};
