import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { useMemo } from "react";
import { createActor } from "../../backend";

interface ContactDetailsData {
  website: string;
  email: string;
  phone: string;
  address: string;
}

interface ActorWithContactDetails {
  getContactDetails: () => Promise<ContactDetailsData>;
}

export default function ContactDetails() {
  const { actor: rawActor, isFetching } = useActor(createActor);
  const actor = rawActor as unknown as ActorWithContactDetails | null;

  const { data: contactDetails } = useQuery({
    queryKey: ["contactDetails"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getContactDetails();
    },
    enabled: !!actor && !isFetching,
  });

  const officialWebsiteUrl = useMemo(() => {
    if (
      contactDetails?.website &&
      contactDetails.website !== "www.business-website.com"
    ) {
      const website = contactDetails.website;
      if (website.startsWith("http://") || website.startsWith("https://")) {
        return website;
      }
      return `https://${website}`;
    }
    return window.location.origin;
  }, [contactDetails?.website]);

  const displayWebsite = useMemo(() => {
    return officialWebsiteUrl.replace(/^https?:\/\//, "");
  }, [officialWebsiteUrl]);

  const address =
    contactDetails?.address || "Near Canara Bank, Main Rd, SBS Nagar, 144505";

  const phones = [
    { number: contactDetails?.phone || "79736-73529", tel: "+917973673529" },
    { number: "75087-31303", tel: "+917508731303" },
    { number: "82838-56248", tel: "+918283856248" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-2xl font-bold">Contact Information</h3>
        <p className="text-muted-foreground">
          Get in touch with us for any inquiries or support. Our team is
          available 24/7 to assist you.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <Mail className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-medium">Email</p>
            <a
              href="mailto:eurobanga@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              {contactDetails?.email || "eurobanga@gmail.com"}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <Phone className="h-5 w-5 text-accent" />
          </div>
          <div className="space-y-1">
            <p className="font-medium">Phone Numbers</p>
            {phones.map((p) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className="block text-muted-foreground hover:text-accent transition-colors font-semibold"
              >
                {p.number}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <MapPin className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-medium">Address</p>
            <p className="text-muted-foreground">{address}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <Globe className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-medium">Website</p>
            <a
              href={officialWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              {displayWebsite}
            </a>
          </div>
        </div>
      </div>

      {/* Share Website Section */}
      <div className="mt-8 rounded-lg border border-border bg-muted/30 p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <Share2 className="h-5 w-5 text-accent" />
          </div>
          <div className="flex-1">
            <p className="font-medium mb-2">Share Our Website</p>
            <p className="text-sm text-muted-foreground mb-3">
              Help others discover our services by sharing our website link:
            </p>
            <div className="flex items-center gap-2 rounded-md bg-background border border-border p-3">
              <code className="flex-1 text-sm text-foreground break-all">
                {officialWebsiteUrl}
              </code>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(officialWebsiteUrl);
                }}
                className="shrink-0 rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
