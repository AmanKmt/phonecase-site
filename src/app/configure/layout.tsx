import { Steps } from "@/components/steps";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

type Props = {
    children: React.ReactNode;
};

const ConfigureLayout = ({ children }: Props) => {
    return (
        <MaxWidthWrapper className="flex-1 flex flex-col">
            <Steps />
            {children}
        </MaxWidthWrapper>
    );
};
 
export default ConfigureLayout;