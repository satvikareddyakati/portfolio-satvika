"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Basic client-side behavior: open a pre-filled email draft
    const name = formData.name.trim() || "Someone from your portfolio";
    const from = formData.email.trim();
    const message = formData.message.trim();

    if (!message) {
      alert("Please write a short message before sending.");
      return;
    }

    const subject = encodeURIComponent(`New message from ${name}`);
    const bodyLines = [
      message,
      "",
      from ? `Reply-to: ${from}` : "",
    ].filter(Boolean);

    const body = encodeURIComponent(bodyLines.join("\n"));

    if (typeof window !== "undefined") {
      window.location.href = `mailto:akatisatvikareddy@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Contact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Let&apos;s work together
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <a
                  href="mailto:akatisatvikareddy@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  akatisatvikareddy@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p className="text-muted-foreground">College Station, TX · open to relocation</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, name: event.target.value }))
              }
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
            />
            <input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, email: event.target.value }))
              }
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              value={formData.message}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, message: event.target.value }))
              }
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Send Message
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
