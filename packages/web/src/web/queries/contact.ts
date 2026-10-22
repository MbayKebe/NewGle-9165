import { useMutation, useQueryClient } from "@tanstack/react-query";
import { orpc } from "../lib/api";

// Data hooks live here, one file per feature — each wraps its query/mutation
// options (staleTime, select, invalidation) so components just call the hook.
export function useSubmitContact() {
  const queryClient = useQueryClient();
  return useMutation(
    orpc.contact.submit.mutationOptions({
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: orpc.contact.list.key() }),
    }),
  );
}
