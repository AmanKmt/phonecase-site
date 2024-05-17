import { notFound } from "next/navigation";

import { db } from "@/db";

import { DesignPreview } from "./design-preview";

type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined;
    }
};

const PreviewPage = async ({ searchParams }: Props) => {
    const { id } = searchParams;

    if (!id || typeof id !== 'string') {
        return notFound();
    }

    const configuration = await db.configuration.findUnique({
        where: { id },
    });

    if(!configuration) {
        return notFound();
    }

    return (
        <DesignPreview configuration={configuration} />
    );
};
 
export default PreviewPage;