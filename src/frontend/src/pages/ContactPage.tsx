import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import Section from '@/components/site/Section';
import ContactDetails from '@/components/site/ContactDetails';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useSubmitInquiry } from '@/hooks/useSubmitInquiry';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { mutate: submitInquiry, isPending, isSuccess, isError, error } = useSubmitInquiry();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.emailOrPhone.trim()) {
      newErrors.emailOrPhone = 'Email or phone is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    submitInquiry(formData, {
      onSuccess: () => {
        setFormData({
          name: '',
          emailOrPhone: '',
          subject: '',
          message: '',
        });
        setErrors({});
      },
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6 font-display">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Have a question or need a quote? Get in touch with our team and we'll respond as soon as possible.
          </p>
        </div>
      </Section>

      {/* Contact Form & Details */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Your full name"
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="emailOrPhone">
                  Email or Phone <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="emailOrPhone"
                  value={formData.emailOrPhone}
                  onChange={(e) => handleChange('emailOrPhone', e.target.value)}
                  placeholder="your@email.com or phone number"
                  className={errors.emailOrPhone ? 'border-destructive' : ''}
                />
                {errors.emailOrPhone && <p className="text-sm text-destructive">{errors.emailOrPhone}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className={errors.message ? 'border-destructive' : ''}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>

              {isSuccess && (
                <Alert className="bg-accent/10 border-accent">
                  <AlertDescription className="text-accent-foreground">
                    Thank you for your message! We'll get back to you as soon as possible.
                  </AlertDescription>
                </Alert>
              )}

              {isError && (
                <Alert variant="destructive">
                  <AlertDescription>
                    {error?.message || 'Failed to submit inquiry. Please try again.'}
                  </AlertDescription>
                </Alert>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <ContactDetails />
          </div>
        </div>
      </Section>
    </>
  );
}
