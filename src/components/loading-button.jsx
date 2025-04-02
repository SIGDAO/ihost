import Spinner from "@/components/spinner";
import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

export default function LoadingButton({
  children,
  ...rest
}) {
  const { pending } = useFormStatus();

  return (
    <button {...rest} disabled={pending}>
      <Spinner loading={pending}>{children}</Spinner>
    </button>
  );
}
