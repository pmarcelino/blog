# Buttondown Newsletter Setup

## Step 1: Create Account

1. Go to [buttondown.email](https://buttondown.email/)
2. Sign up for a free account (up to 100 subscribers free)
3. Confirm your email address

## Step 2: Get Your Username

1. After signing up, go to **Settings** in your Buttondown dashboard
2. Your username appears in your newsletter URL: `buttondown.email/YOUR_USERNAME`

## Step 3: Update the Code

Edit `src/components/NewsletterForm.astro` and find this line:

```typescript
const BUTTONDOWN_USERNAME = "YOUR_BUTTONDOWN_USERNAME";
```

Replace `YOUR_BUTTONDOWN_USERNAME` with your actual username. For example:

```typescript
const BUTTONDOWN_USERNAME = "pmarcelino";
```

## Step 4: Test It

1. Run `npm run dev` to start your local server
2. Go to your blog and try subscribing with your email
3. Check your Buttondown dashboard to confirm the subscription arrived

## Where the Form Appears

The newsletter form shows at the end of every blog post, encouraging readers to subscribe after reading your content.

## Customization

You can customize the newsletter form text in `src/components/NewsletterForm.astro`:

- **Description text**: "Get new posts and insights on AI & LLMs delivered to your inbox."
- **Tag**: Used to organize subscribers in Buttondown (currently set to `howiusellms-blog`)
- **Footer text**: "No spam, unsubscribe anytime."
