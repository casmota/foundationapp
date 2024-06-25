import { queryClient } from '../query-client';
import { client } from './client';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

export const useEmailSent = (options) => {
    return useSuspenseQuery({
        queryKey: ['emailsent'],
        queryFn: getEmailSent,
        ...options
    });
}

export const useCreateEmailSent = () => {
    return useMutation(
        {
            mutationFn: createEmailSent,
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['emailsent'] });
            }
        }
    );
}

export const useDeleteAllEmailSent = () => {
    return useMutation(
        {
            mutationFn: deleteEmailSent,
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['emailsent'] });
            }
        }
    );
}

export async function getEmailSent(){
    const url = 'http://localhost:8080/api/emailsents';
    const { data } = await client.get(url);

    return data;
}

export async function createEmailSent(payload){
    const url = 'http://localhost:8080/api/emailsents/sendemails';
    const { data } = await client.post(url, payload);

    return data;
}

export async function deleteEmailSent(){
    const url = 'http://localhost:8080/api/emailsents';
    const { data } = await client.delete(url);

    return data;
}
