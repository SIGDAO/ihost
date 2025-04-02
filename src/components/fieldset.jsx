import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

export default function Fieldset({
  children,
  ...rest
}) {
  const { pending } = useFormStatus();

  return (
    <fieldset {...rest} disabled={pending}>
      {children}
    </fieldset>
  );
}
