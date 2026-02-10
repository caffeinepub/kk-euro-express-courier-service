import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface InquiryData {
  name: string;
  emailOrPhone: string;
  subject: string;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryData) => {
      if (!actor) {
        throw new Error('Backend actor not available');
      }

      if (!data.name.trim()) {
        throw new Error('Name is required');
      }

      if (!data.emailOrPhone.trim()) {
        throw new Error('Email or phone is required');
      }

      if (!data.message.trim()) {
        throw new Error('Message is required');
      }

      await actor.submitInquiry(
        data.name,
        data.emailOrPhone,
        data.subject || '',
        data.message
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}

