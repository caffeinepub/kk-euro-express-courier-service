import { Mail, Phone, Globe } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { useActor } from '@/hooks/useActor';

export default function ContactDetails() {
  const { actor, isFetching } = useActor();

  const { data: contactDetails } = useQuery({
    queryKey: ['contactDetails'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getContactDetails();
    },
    enabled: !!actor && !isFetching,
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-2xl font-bold">Contact Information</h3>
        <p className="text-muted-foreground">
          Get in touch with us for any inquiries or support. Our team is available 24/7 to assist you.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <Mail className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-medium">Email</p>
            <p className="text-muted-foreground">
              {contactDetails?.email || 'eurobanga@gmail.com'}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <Phone className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-muted-foreground">
              {contactDetails?.phone || '79736-73529'}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <Globe className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-medium">Website</p>
            <p className="text-muted-foreground">
              {contactDetails?.website || 'www.business-website.com'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
