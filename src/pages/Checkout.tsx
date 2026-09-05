import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const { cartItems, totalPrice } = useCart();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  const receiptText = `Hi Kaori's Snack House!\n\nOrder for: ${name || 'Customer'}\n${cartItems.map((item) => `${item.quantity}x ${item.name} - ₱${(item.price * item.quantity).toFixed(2)}`).join('\n')}\n\nTotal: ₱${totalPrice.toFixed(2)}${notes ? `\nNotes: ${notes}` : ''}`;

  const copyReceipt = async () => {
    await navigator.clipboard?.writeText(receiptText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  };

  const submitOrder = (event: FormEvent) => {
    event.preventDefault();
    void navigator.clipboard?.writeText(receiptText);
    window.open('https://m.me/61588641423644', '_blank', 'noopener,noreferrer');
    navigate('/order-confirmation');
  };

  if (cartItems.length === 0) return <main className="empty-cart warm-panel"><h1 className="display-font">Your order is empty</h1><Link to="/menu" className="action-button">Browse menu</Link></main>;

  return <div className="checkout-page"><header className="page-heading"><p className="eyebrow">Almost there</p><h1 className="display-font">Review your order</h1></header><main className="checkout-content"><form className="checkout-form warm-panel" onSubmit={submitOrder}><label>Your name<input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Name for pickup" /></label><label>Notes for Kaori <textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Add-ons, flavor choices, pickup notes..." rows={4} /></label><div className="checkout-total"><span>Total</span><strong>₱{totalPrice.toFixed(2)}</strong></div><div className="checkout-actions"><button type="button" className="copy-receipt-button" onClick={copyReceipt}>{copied ? 'Receipt copied' : 'Copy order receipt'}</button><button type="submit" className="action-button">Open Facebook chat</button></div><p className="form-hint">Copy the order, then paste it into Facebook Messenger. Opening chat also copies it automatically.</p></form><aside className="checkout-list warm-panel"><p className="eyebrow">Your items</p>{cartItems.map((item) => <div className="checkout-line" key={item.id}><span>{item.quantity}x {item.name}</span><strong>₱{(item.price * item.quantity).toFixed(2)}</strong></div>)}</aside></main></div>;
};

export default Checkout;