import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MessageSquare } from 'lucide-react';

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: 'Name is required' })
    .max(100, { message: 'Name must be less than 100 characters' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Invalid email address' })
    .max(255, { message: 'Email must be less than 255 characters' }),
  message: z
    .string()
    .trim()
    .nonempty({ message: 'Message is required' })
    .max(1000, { message: 'Message must be less than 1000 characters' }),
  honeypot: z.string().max(0), // Anti-spam honeypot
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const subject = encodeURIComponent('Pampilhais Investment Inquiry');
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:info@nobletate.pt?subject=${subject}&body=${body}`;
    
    toast({
      title: 'Opening Email Client',
      description: 'Your default email client will open with the message pre-filled.',
    });
    
    reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-center text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Interested in Pampilhais? Contact Caroline Pires to schedule a video call or private
            visit. We only conduct business directly with verified buyers or development partners.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-2xl text-foreground">
                  Contact Form
                </h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  {...register('honeypot')}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    {...register('name')}
                    className="bg-background"
                    placeholder="Your full name"
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="bg-background"
                    placeholder="your@email.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    className="bg-background min-h-[120px]"
                    placeholder="Tell us about your interest in Pampilhais..."
                    aria-invalid={errors.message ? 'true' : 'false'}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Chat Option */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-md flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mr-4">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif font-semibold text-2xl text-foreground">
                  Chat with Caroline
                </h3>
              </div>

              <p className="text-base text-foreground/80 mb-6 flex-grow">
                Prefer to chat in real-time? Connect directly with Caroline Pires via WhatsApp or
                schedule a video call to discuss this exclusive investment opportunity.
              </p>

              <Button
                variant="default"
                className="w-full bg-accent hover:bg-accent/90"
                onClick={() => {
                  window.open('https://wa.me/+351939517942', '_blank');
                }}
              >
                Speak to Caroline on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
