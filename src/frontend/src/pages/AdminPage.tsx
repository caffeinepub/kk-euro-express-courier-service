import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllInquiries } from "@/hooks/useGetAllInquiries";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import {
  Clock,
  Inbox,
  LogIn,
  Mail,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";

function formatTimestamp(ts: bigint): string {
  const ms = Number(ts / BigInt(1_000_000));
  return new Date(ms).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function AdminPage() {
  const { identity, login, isLoggingIn, isInitializing } =
    useInternetIdentity();
  const isLoggedIn = !!identity;

  const { data: inquiries, isLoading } = useGetAllInquiries();

  const sorted = inquiries
    ? [...inquiries].sort((a, b) => Number(b.timestamp - a.timestamp))
    : [];

  return (
    <div data-ocid="admin.page" className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Admin Panel
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Customer inquiries dashboard
            </p>
          </div>
          {isLoggedIn && (
            <Badge
              variant="outline"
              className="text-xs border-primary/30 text-primary"
            >
              <User className="w-3 h-3 mr-1" />
              {identity.getPrincipal().toString().slice(0, 12)}…
            </Badge>
          )}
        </div>

        {/* Not logged in */}
        {!isLoggedIn && (
          <Card className="border-border shadow-sm">
            <CardContent className="py-16 flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <LogIn className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground font-semibold text-lg">
                Admin Login Required
              </p>
              <p className="text-muted-foreground text-sm text-center max-w-xs">
                Please log in to view customer inquiries.
              </p>
              <Button
                data-ocid="admin.login_button"
                onClick={login}
                disabled={isLoggingIn || isInitializing}
                className="mt-2 bg-primary hover:bg-primary/90"
              >
                <LogIn className="w-4 h-4 mr-2" />
                {isLoggingIn ? "Logging in…" : "Login with Internet Identity"}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Loading */}
        {isLoggedIn && isLoading && (
          <div data-ocid="admin.loading_state" className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-border">
                <CardHeader>
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-4 w-28 mt-1" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty state */}
        {isLoggedIn && !isLoading && sorted.length === 0 && (
          <Card
            data-ocid="admin.empty_state"
            className="border-border shadow-sm"
          >
            <CardContent className="py-16 flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                <Inbox className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-foreground font-semibold text-lg">
                No customer inquiries yet
              </p>
              <p className="text-muted-foreground text-sm">
                When customers submit the contact form, their messages will
                appear here.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Inquiry list */}
        {isLoggedIn && !isLoading && sorted.length > 0 && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {sorted.length} inquiry{sorted.length !== 1 ? "s" : ""} received
            </p>
            {sorted.map((inq, idx) => (
              <Card
                key={`${inq.name}-${inq.timestamp}`}
                data-ocid={`admin.item.${idx + 1}`}
                className="border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base font-semibold flex items-center gap-2">
                      <User className="w-4 h-4 text-primary shrink-0" />
                      {inq.name}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                      <Clock className="w-3 h-3" />
                      {formatTimestamp(inq.timestamp)}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    {inq.emailOrPhone.includes("@") ? (
                      <Mail className="w-3.5 h-3.5" />
                    ) : (
                      <Phone className="w-3.5 h-3.5" />
                    )}
                    <span>{inq.emailOrPhone}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-2">
                  {inq.subject && (
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {inq.subject}
                      </Badge>
                    </div>
                  )}
                  <p className="text-sm text-foreground/80 flex items-start gap-2">
                    <MessageSquare className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    <span>{inq.message}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
