import { useQuery } from "@tanstack/react-query";
import type { ContactInquiry } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllInquiries() {
  const { actor, isFetching } = useActor();

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
