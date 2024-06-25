import { queryClient } from '../query-client';
import { client } from './client';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

export const useNonprofit = (options) => {
    return useSuspenseQuery({
        queryKey: ['nonprofit'],
        queryFn: getNonprofit,
        ...options
    });
}

export const useCreateNonprofit = () => {
    return useMutation( 
        {
            mutationFn: createNonprofit,
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['nonprofit'] });
            }
        }
    );
}

export async function getNonprofit(){
    const url = 'http://localhost:8080/api/nonprofits';
    const { data } = await client.get(url);

    return data;
}

export async function createNonprofit(payload){
    const url = 'http://localhost:8080/api/nonprofits';
    const { data } = await client.post(url, payload);

    return data;
}
