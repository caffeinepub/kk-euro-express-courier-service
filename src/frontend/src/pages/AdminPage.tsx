import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useActor } from "@/hooks/useActor";
import { useGetAllInquiries } from "@/hooks/useGetAllInquiries";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import { useQueryClient } from "@tanstack/react-query";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Inbox,
  KeyRound,
  LogIn,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  ShieldOff,
  User,
} from "lucide-react";
import { useState } from "react";

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
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const { data: inquiries, isLoading, error } = useGetAllInquiries();

  const isUnauthorized =
    error instanceof Error && error.message === "unauthorized";

  const sorted = inquiries
    ? [...inquiries].sort((a, b) => Number(b.timestamp - a.timestamp))
    : [];

  // Claim admin state
  const [claimOpen, setClaimOpen] = useState(false);
  const [tokenValue, setTokenValue] = useState("");
  const [claimStatus, setClaimStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [claimError, setClaimError] = useState("");

  async function handleClaim() {
    if (!actor || !tokenValue.trim()) return;
    setClaimStatus("loading");
    setClaimError("");
    try {
      await (actor as any)._claimAdminRole(tokenValue.trim());
      setClaimStatus("success");
      queryClient.invalidateQueries();
    } catch (e: any) {
      setClaimStatus("error");
      setClaimError(
        e?.message ||
          "Invalid token or admin already assigned. Please try again.",
      );
    }
  }

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
                Please log in with your admin account to view customer
                inquiries.
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

        {/* Unauthorized */}
        {isLoggedIn && isUnauthorized && (
          <div className="space-y-4">
            <Card className="border-destructive/30 shadow-sm">
              <CardContent className="py-16 flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center">
                  <ShieldOff className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-foreground font-semibold text-lg">
                  Access Denied
                </p>
                <p className="text-muted-foreground text-sm text-center max-w-xs">
                  You don't have admin access. Contact the site owner to grant
                  you admin permissions.
                </p>
              </CardContent>
            </Card>

            {/* Claim admin section */}
            <Card className="border-border shadow-sm">
              <button
                type="button"
                onClick={() => {
                  setClaimOpen((v) => !v);
                  setClaimStatus("idle");
                  setClaimError("");
                }}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/40 transition-colors rounded-t-lg"
                aria-expanded={claimOpen}
              >
                <div className="flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium text-sm text-foreground">
                    Are you the site owner?
                  </span>
                </div>
                {claimOpen ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                )}
              </button>

              {claimOpen && (
                <CardContent className="pt-0 pb-6 border-t border-border">
                  {claimStatus === "success" ? (
                    <div
                      data-ocid="admin.success_state"
                      className="flex flex-col items-center gap-3 py-6"
                    >
                      <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-green-600" />
                      </div>
                      <p className="font-semibold text-foreground">
                        Admin access granted!
                      </p>
                      <p className="text-muted-foreground text-sm text-center">
                        Refresh the page to view customer inquiries.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.location.reload()}
                        className="mt-1"
                      >
                        Refresh now
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4 pt-4">
                      <p className="text-sm text-muted-foreground">
                        Enter the admin token from your{" "}
                        <span className="font-medium text-foreground">
                          Caffeine dashboard → Project Settings
                        </span>{" "}
                        to claim admin access.
                      </p>
                      <div className="flex gap-2">
                        <Input
                          data-ocid="admin.claim_input"
                          type="password"
                          placeholder="Enter admin token"
                          value={tokenValue}
                          onChange={(e) => setTokenValue(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleClaim()}
                          disabled={claimStatus === "loading"}
                          className="flex-1"
                        />
                        <Button
                          data-ocid="admin.claim_button"
                          onClick={handleClaim}
                          disabled={
                            claimStatus === "loading" || !tokenValue.trim()
                          }
                          className="bg-primary hover:bg-primary/90 shrink-0"
                        >
                          {claimStatus === "loading"
                            ? "Claiming…"
                            : "Claim Admin Access"}
                        </Button>
                      </div>
                      {claimStatus === "error" && (
                        <p
                          data-ocid="admin.error_state"
                          className="text-sm text-destructive flex items-center gap-1.5"
                        >
                          <ShieldOff className="w-3.5 h-3.5 shrink-0" />
                          {claimError}
                        </p>
                      )}
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          </div>
        )}

        {/* Loading */}
        {isLoggedIn && !isUnauthorized && isLoading && (
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
        {isLoggedIn &&
          !isUnauthorized &&
          !isLoading &&
          sorted.length === 0 &&
          !error && (
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
        {isLoggedIn && !isUnauthorized && !isLoading && sorted.length > 0 && (
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
