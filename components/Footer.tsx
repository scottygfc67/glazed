export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-white">
      <div className="container py-14 grid gap-10 md:grid-cols-4">
        <div>
          <h4 className="font-semibold mb-3 text-ink">Glazed</h4>
          <p className="text-sm text-muted">Glow today, glaze tomorrow.</p>
        </div>
        <div>
          <h5 className="font-medium mb-2 text-ink">Shop</h5>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href="/shop" className="hover:text-brand-600 transition-colors">
                All products
              </a>
            </li>
            <li>
              <a href="/collections/new" className="hover:text-brand-600 transition-colors">
                New
              </a>
            </li>
            <li>
              <a href="/collections/bestsellers" className="hover:text-brand-600 transition-colors">
                Bestsellers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2 text-ink">Help</h5>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href="/faq" className="hover:text-brand-600 transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-brand-600 transition-colors">
                Shipping
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-brand-600 transition-colors">
                Returns
              </a>
            </li>
            <li>
              <a href="/money-back-guarantee" className="hover:text-brand-600 transition-colors">
                Money Back Guarantee
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-brand-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2 text-ink">Company</h5>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href="/about" className="hover:text-brand-600 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-brand-600 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-brand-600 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-brand-600 transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <form className="glaze-card p-4">
          <p className="font-medium text-ink">Ready for 15% off?</p>
          <div className="mt-3 flex gap-2">
            <input 
              placeholder="Email" 
              className="flex-1 rounded-lg border border-line px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
            <button className="rounded-lg bg-pink-500 text-white px-4 py-2 text-sm font-medium hover:bg-pink-600 transition-colors">
              Sign up
            </button>
          </div>
          <p className="mt-2 text-xs text-muted">No spam. Unsubscribe anytime.</p>
        </form>
      </div>
      <div className="border-t border-line py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Glazed Ltd.
      </div>
    </footer>
  )
}