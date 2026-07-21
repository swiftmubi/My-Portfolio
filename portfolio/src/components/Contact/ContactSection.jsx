import ContactForm from './ContactForm.jsx'
import ContactDetailsCard from './ContactDetailsCard.jsx'

export default function ContactSection() {
  return (
    <div className="flex flex-col gap-6 animate-fadeUp">
      <header>
        <span className="eyebrow">Section 05</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2">Contact Us</h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="lg:col-span-2">
          <ContactDetailsCard />
        </div>
      </div>
    </div>
  )
}
