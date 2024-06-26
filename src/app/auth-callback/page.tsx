'use client'

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { getAuthStatus } from "./actions";

const AuthCallbackPage = () => {
    const router = useRouter();

    const [configId, setConfigId] = useState<string | null>(null);

    useEffect(() => {
        const configurationId = localStorage.getItem('configurationId');

        if (configurationId) setConfigId(configurationId);
    }, []);

    const { data } = useQuery({
        queryKey: ['auth-callback'],
        queryFn: async () => await getAuthStatus(),
        retry: true,
        retryDelay: 500,
    });

    if (data?.success) {
        if (configId) {
            localStorage.removeItem('configurationId');
            router.push(`/configure/preview?id=${configId}`);
        } else {
            router.push('/');
        }
    }

    return (
        <div className="w-full mt-24 flex justify-center">
            <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-6 w-6 animate-spin text-zinc-500" />

                <h3 className="font-semibold text-lg">
                    Logging you in...
                </h3>

                <p className="text-sm">
                    You will be redirected automatically.
                </p>
            </div>
        </div>
    );
};
 
export default AuthCallbackPage;