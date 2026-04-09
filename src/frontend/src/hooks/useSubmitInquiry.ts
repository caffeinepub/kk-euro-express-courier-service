import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";

interface InquiryData {
  name: string;
  emailOrPhone: string;
  subject: string;
  message: string;
}

interface ActorWithSubmit {
  submitInquiry: (
    name: string,
    emailOrPhone: string,
    subject: string,
    message: string,
  ) => Promise<void>;
}

export function useSubmitInquiry() {
  const { actor: rawActor } = useActor(createActor);
  const actor = rawActor as unknown as ActorWithSubmit | null;
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryData) => {
      if (!actor) {
        throw new Error("Backend actor not available");
      }

      if (!data.name.trim()) {
        throw new Error("Name is required");
      }

      if (!data.emailOrPhone.trim()) {
        throw new Error("Email or phone is required");
      }

      if (!data.message.trim()) {
        throw new Error("Message is required");
      }

      await actor.submitInquiry(
        data.name,
        data.emailOrPhone,
        data.subject || "",
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}
