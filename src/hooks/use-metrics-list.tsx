import { useCallback, useState } from 'react';
import type { Ean, ProcessingStatus } from "@/hooks/common.ts";

type useMetricsList = [
    () => Promise<void>,
    ProcessingStatus,
    Array<Ean>
];
export const useMetricsList = (): useMetricsList => {

    const [metrics, setMetrics] = useState<Array<Ean>>([]);
    const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'ERROR'>('IDLE');

    const fetchEans = useCallback(async () => {
        setStatus('LOADING');
        try {
            await new Promise((resolve) => setTimeout(resolve, 5000));
            const response = await fetch('http://192.168.1.22:8080/eans', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },

            });
            const data = await response.json();

            setMetrics(
                data.eans as Array<Ean>
            );
        } catch (error) {
            // biome-ignore lint/suspicious/noConsole: <explanation>
            console.error('Error:', error);
        } finally {
            setStatus('IDLE');
        }
    }, []);

    return [fetchEans, status, metrics];
};
