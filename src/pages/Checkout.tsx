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

  return <div className="checkout-page"><header className="page-heading"><p className="eyebrow">Almost there</p><h1 className="display-font">Review your order</h1></header><main className="checkout-content"><form className="checkout-form warm-panel" onSubmit={submitOrder}><label>Your name<input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Name for pickup" /></label><label>Notes for Kaori <textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Add-ons, flavor choices, pickup notes..." rows={4} /></label><div className="checkout-total"><span>Total</span><strong>₱{totalPrice.toFixed(2)}</strong></div><div className="checkout-alert" role="alert"><span className="checkout-alert__label">Action required</span><strong>Copy your receipt, then paste it in Messenger.</strong><span>Step 1: copy your receipt. Step 2: open the Facebook chat and paste it so Kaori can confirm your order.</span></div><div className="checkout-actions"><button type="button" className="copy-receipt-button" onClick={copyReceipt}>{copied ? 'Receipt copied' : '1. Copy order receipt'}</button><button type="submit" className="action-button">2. Open Facebook chat</button></div><p className="form-hint">Your receipt is copied automatically when you open the chat too.</p></form><aside className="checkout-list warm-panel"><div className="checkout-list__heading"><div><p className="eyebrow">Your items</p><h2 className="display-font">Ready to send</h2></div><span>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</span></div><div className="checkout-items">{cartItems.map((item) => <div className="checkout-line" key={item.id}><img src={item.image} alt="" /><div className="checkout-line__copy"><strong>{item.name}</strong><span>{item.quantity} x ₱{item.price.toFixed(2)}</span></div><b>₱{(item.price * item.quantity).toFixed(2)}</b></div>)}</div></aside></main></div>;
};

export default Checkout;