import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const contactSchema = useMemo(() => z.object({
    name: z
      .string()
      .trim()
      .nonempty({ message: t('contact.nameRequired') })
      .max(100, { message: t('contact.nameMax') }),
    email: z
      .string()
      .trim()
      .email({ message: t('contact.emailInvalid') })
      .max(255, { message: t('contact.emailMax') }),
    message: z
      .string()
      .trim()
      .nonempty({ message: t('contact.messageRequired') })
      .max(1000, { message: t('contact.messageMax') }),
    honeypot: z.string().max(0),
  }), [t]);

  type ContactFormData = z.infer<typeof contactSchema>;

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
    window.location.href = `mailto:noblestate.portugal@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: t('contact.toastTitle'),
      description: t('contact.toastDesc'),
    });
    
    reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-center">
            {t('contact.title')}
          </h2>
          <p className="text-center text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-2xl text-foreground">
                  {t('contact.formTitle')}
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
                    {t('contact.nameLabel')} *
                  </label>
                  <Input
                    id="name"
                    {...register('name')}
                    className="bg-background"
                    placeholder={t('contact.namePlaceholder')}
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.emailLabel')} *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="bg-background"
                    placeholder={t('contact.emailPlaceholder')}
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.messageLabel')} *
                  </label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    className="bg-background min-h-[120px]"
                    placeholder={t('contact.messagePlaceholder')}
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
                  {t('contact.submitButton')}
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
                  {t('contact.chatTitle')}
                </h3>
              </div>

              <p className="text-base text-foreground/80 mb-6 flex-grow">
                {t('contact.chatDesc')}
              </p>

              <Button
                variant="default"
                className="w-full bg-accent hover:bg-accent/90"
                onClick={() => {
                  window.open('https://wa.me/+351939517942', '_blank');
                }}
              >
                {t('contact.chatButton')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
