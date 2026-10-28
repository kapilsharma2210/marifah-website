# Online payment: Corporate Tax Registration

How the flow works on the website:

1. **Add to Cart** appears in three places: on /packages, on /services/corporate-tax (in the pricing table and the "Register online" box) and on /corporate-tax-consultants-uae. A cart icon in the header shows the item count.
2. **/cart** shows the cart and asks for the client's details: name, company, email, phone and emirate. The client then clicks **Pay AED 499 securely**.
3. **Razorpay Checkout** opens with credit and debit cards only. The money goes to your Razorpay account.
4. After payment you get an email with all of the client's details. The same details are also saved on the payment in your Razorpay Dashboard.
5. The client lands on **/checkout/success**, where they can upload a Trade License, Passport, Emirates ID and MOA, and confirm their email and contact number. Every document is optional, and the client can choose **"I'll email them later"**. Uploaded files are attached to a second email sent to you, and a copy is kept in Vercel Storage.

The price is set in `lib/checkout/products.ts` and is the only place to change it.

## One-time setup

| What | Where | Name in Vercel |
|---|---|---|
| Razorpay Key ID | Razorpay Dashboard → Account & Settings → API Keys | `RAZORPAY_KEY_ID` |
| Razorpay Key Secret | same | `RAZORPAY_KEY_SECRET` |
| Resend API key | resend.com → API Keys (sign up with info@marifahtax.com) | `RESEND_API_KEY` |
| Email that receives notifications (optional; defaults to info@marifahtax.com) | — | `NOTIFY_EMAIL` |
| Document storage | Vercel → project → Storage → Create → Blob → **Private** → connect to this project | added automatically |
| Webhook secret (optional) | see below | `RAZORPAY_WEBHOOK_SECRET` |

To add the variables, open Vercel → your project → Settings → Environment Variables. After you change them, redeploy the site.

### Optional webhook (recommended)

The webhook lets you get the payment email even if a client closes the browser straight after paying. In Razorpay Dashboard → Webhooks → **Add New Webhook**:

- URL: `https://www.marifahtax.com/api/checkout/webhook`
- Secret: any long password. Save the same value in Vercel as `RAZORPAY_WEBHOOK_SECRET`.
- Event: `order.paid`

## Notes

- Emails are sent from `onboarding@resend.dev` until you verify marifahtax.com in Resend. Until then, Resend only delivers to the email address you signed up with.
- To test without real money, put **test** keys (`rzp_test_…`) in Vercel, pay with a Razorpay test card, then switch to **live** keys (`rzp_live_…`).
- Check that Razorpay → Settings → Payment Capture is set to **Automatic**.
