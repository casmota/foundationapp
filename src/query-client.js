import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            useErrorBoundary: true,
            refetchOnWindowFocus: false,
            retry: false
        }
    }
});