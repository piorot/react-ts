import type { ImagePreviewProps } from '@/components/ui/image-preview';
import { useCallback, useState } from 'react';
import type { ProfileCompareProps } from "@/components/charts/profile-compare.tsx";

type DryRunStatus = 'IDLE' | 'LOADING' | 'ERROR';




type UseDryRun = [
    (ean: string) => Promise<void>,
    DryRunStatus,
        ImagePreviewProps & ProfileCompareProps,
];
export const useDryRun = (): UseDryRun => {
    const noImage =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='rgba(255,255,255,1)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='rgba(0,0,0,0.5)'%3ENo content yet%3C/text%3E%3C/svg%3E";

    const [imagePreview, setImagePreview] = useState<ImagePreviewProps & ProfileCompareProps>({
        image: noImage,
        mse: 0,
        profile: [],
        reference:[]
    });

    const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'ERROR'>('IDLE');

    const fetchEan = useCallback(async (ean: string) => {
        setStatus('LOADING');
        try {
            await new Promise((resolve) => setTimeout(resolve, 5000));
            const response = await fetch('http://192.168.1.22:8080/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({ean: ean, mode: 2}),
            });
            const data = await response.json();

            setImagePreview({
                image: data.outputImg,
                mse: data.mse,
                reference:data.outputRef,
                profile:data.outputAlignedProfile


            });
        } catch (error) {
            // biome-ignore lint/suspicious/noConsole: <explanation>
            console.error('Error:', error);
        } finally {
            setStatus('IDLE');
        }
    }, []);

    return [fetchEan, status, imagePreview];
};
