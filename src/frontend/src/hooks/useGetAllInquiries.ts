import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { createActor } from "../backend";

export interface ContactInquiry {
  name: string;
  emailOrPhone: string;
  subject: string;
  message: string;
  timestamp: bigint;
}

interface ActorWithInquiries {
  getAllInquiries: () => Promise<ContactInquiry[]>;
}

export function useGetAllInquiries() {
  const { actor: rawActor, isFetching } = useActor(createActor);
  const actor = rawActor as unknown as ActorWithInquiries | null;

  return useQuery<ContactInquiry[], Error>({
    queryKey: ["inquiries"],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.getAllInquiries();
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        if (
          msg.toLowerCase().includes("unauthorized") ||
          msg.toLowerCase().includes("not admin") ||
          msg.toLowerCase().includes("access denied")
        ) {
          throw new Error("unauthorized");
        }
        throw err;
      }
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}
